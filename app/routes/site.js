var site = require('./../controllers/site');
var wechatJssdk = require('../../config/wechat-jssdk');

module.exports = function(app, auth) {
  // 首页
  app.get('/', site.index);

  // 服务条款
  app.get('/terms', site.terms);

  // 关于 POS
  app.get('/help/pos', site.helpPos);

  // 公测-微信分享页面
  app.get('/share/wechat', wechatJssdk.getJssdkConfigByAjax, site.shareWeChat);
  app.post('/share/get-invite-code', site.getInviteCode);

  // 公测介绍页
  app.get('/beta/intro', site.betaIntro);

  // 下载
  app.get('/download/:type/:name', site.download);
};
