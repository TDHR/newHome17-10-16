var request = require('superagent');
var async = require('async');
var config = require('../../config/config');

// 我的资产
exports.index = function(req, res) {
  var userToken = req.cookies.userToken;
  // haobtc
  var code = req.query.code;
  async.auto({
    // 获取用户信息
    getUserInfo: function(cb) {
      request
        .get(config.platform + '/api/vipuser/getuserinfo')
        .query({token: userToken})
        .set('Accept', 'application/json')
        .end(function(err, result) {
          cb(null, result);
        });
    },
    // 获取资产
    getAsset: function(cb) {
      request
        .get(config.platform + '/api/vipuser/getasset')
        .query({token: userToken})
        .set('Accept', 'application/json')
        .end(function(err, result) {
          cb(null, result);
        });
    },
    // 分红地址
    getBonusAddress: function(cb) {
      request
        .get(config.platform + '/api/vipuser/getbonusaddress')
        .query({token: userToken})
        .set('Accept', 'application/json')
        .end(function(err, result) {
          cb(null, result);
        });
    }
  }, function(err, results) {
    var user = results.getUserInfo;
    var asset = results.getAsset;
    var bonus = results.getBonusAddress;
    // 未登录、登录超时
    if (!user || !user.body || user.body.code === 1) {
      res.clearCookie('userToken');
      return res.redirect('/login');
    }
    // 从haobtc返回了相应数据
    if (code) {
        return res.redirect('/user/update-dividend?code=' + code);
    } else {
      res.render('platform/dashboard', {
        layout: 'platform',
        nav: 'dashboard',
        user: user.body.data,
        asset: asset.body.data,
        bonus: bonus.body.data,
        haobtcClientId: config.haobtcClientId
      });
    }
  });
};

// 钱包详情
exports.wallet = function(req, res) {
  res.render('platform/wallet', {
    layout: 'platform',
    nav: 'dashboard'
  });
};

// 「修改分红地址」页面
exports.dividend = function(req, res) {
  var userToken = req.cookies.userToken;
  var id = +req.params.id;

  // haobtc
  var code = req.query.code;

  async.auto({
    // 获取用户信息
    getUserInfo: function(cb) {
      request
        .get(config.platform + '/api/vipuser/getuserinfo')
        .query({token: userToken})
        .set('Accept', 'application/json')
        .end(function(err, result) {
          cb(null, result);
        });
    },
    // 分红地址
    getBonusAddress: function(cb) {
      request
        .get(config.platform + '/api/vipuser/getbonusaddress')
        .query({token: userToken})
        .set('Accept', 'application/json')
        .end(function(err, result) {
          cb(null, result);
        });
    },
    getHaobtcToken: ['getBonusAddress', function(results, cb) {
      if (code) {
        request
          .post('https://haobtc.com/auth/oauth/get_token/')
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Accept', 'application/json')
          .send({
            client_id: config.haobtcClientId,
            client_secret: config.haobtcClientSecret,
            code: code
          })
          .end(function(err, result) {
            cb(null, result);
          });
      } else {
        cb(null, {body: {
          ok: false
        }});
      }
    }],
    getHaobtcProfile: ['getHaobtcToken', function(results, cb) {
      var haobtcToken = results.getHaobtcToken.body;
      if (haobtcToken.ok) {
        request
          .get('https://haobtc.com/api/v1/user/profile/')
          .query({access_token: haobtcToken.access_token})
          .set('Accept', 'application/json')
          .end(function(err, result) {
            cb(null, result);
          });
      } else {
        cb(null, {body: {
          ok: false
        }});
      }
    }]
  }, function(err, results) {
    var user = results.getUserInfo;
    var bonus = results.getBonusAddress;
    var haobtcProfile = results.getHaobtcProfile;
    // 未登录、登录超时
    if (!user || !user.body || user.body.code === 1) {
      res.clearCookie('userToken');
      return res.redirect('/login');
    }

    var bonusData = null;
    if (bonus.body && bonus.body.data.bonus.length) {
      bonus.body.data.bonus.forEach(function(v) {
        if (v.id === id) {
          bonusData = v;
        }
      });
    }

    res.render('platform/update-dividend', {
      layout: 'platform',
      nav: 'dashboard',
      user: user.body.data,
      bonus: bonusData,
      haobtcProfile: haobtcProfile.body
    });
  });
};

// 「修改分红地址」接口
exports.updateDividend = function(req, res) {
  request
    .post(config.platform + '/api/vipuser/updatebonusaddress')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Accept', 'application/json')
    .send(req.body)
    .end(function(err, result) {
      var body = result.body;
      return res.json({
        success: body.success,
        code: body.code,
        msg: body.message
      });
    });
};

// 下载钱包
exports.download = function(req, res) {
  var type = req.params.type;
  var name = req.params.name;
  var filepath = config.root + '/public/downloads/' + type + '/' + name;
  res.download(filepath);
}
