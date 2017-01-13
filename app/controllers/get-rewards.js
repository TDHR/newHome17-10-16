var request = require('superagent');
var async = require('async');
var config = require('../../config/config');

// 「邀请奖励」页面
exports.index = function(req, res) {
  var userToken = req.cookies.userToken;
  var pageNum = +req.params.page || 1;
  pageNum -= 1;

  async.auto({
    // 获取邀请码
    getInviteCode: function(cb) {
      request
        .get(config.platform + '/api/vipuser/getinvitecode')
        .query({ token: userToken })
        .set('Accept', 'application/json')
        .end(function(err, result) {
          cb(null, result);
        });
    },
    // 获取「我的邀请」列表
    getInviteList: function(cb) {
      request
        .get(config.platform + '/api/vipuser/getinvitelist')
        .query({
          token: userToken,
          pageIndex: pageNum,
          pageSize: 20
        })
        .set('Accept', 'application/json')
        .end(function(err, result) {
          cb(null, result);
        });
    }
  }, function(err, results) {
    var code = results.getInviteCode;
    var list = results.getInviteList;
    
    // 未登录、登录超时
    if (!code || !code.body || code.body.code === 1) {
      res.clearCookie('userToken');
      return res.redirect('/login');
    }

    res.render('platform/get-rewards', {
      layout: 'platform',
      nav: 'get-rewards',
      code: code.body.data,
      list: list.body.data
    });
  });
};
