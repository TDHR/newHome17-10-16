/**
 * Module dependencies.
 */
var login = require('./../controllers/login');
var signup = require('./../controllers/signup');
var reset = require('./../controllers/reset');
var dashboard = require('./../controllers/dashboard');
var info = require('./../controllers/info');
var notification = require('./../controllers/notification');
var security = require('./../controllers/security');
var phoneCode = require('./../controllers/phone-code');

module.exports = function(app, auth) {
  // 登录页面
  app.get('/login', auth.doNotNeedLogin, login.index);

  // 登录接口
  app.post('/login', login.login);

  // 获取图片验证码
  app.get('/captcha', login.captcha);

  // 登出
  app.get('/logout', login.logout);

  // 注册页面
  app.get('/signup', auth.doNotNeedLogin, signup.index);

  // 注册接口
  app.post('/signup', signup.signup);

  // 发送手机验证码
  app.post('/phoneCode', phoneCode.default);

  // 忘记密码页面
  app.get('/reset', auth.doNotNeedLogin, reset.index)

  // 忘记密码接口
  app.post('/reset', reset.reset);

  // dashboard
  app.get('/user/dashboard', auth.needToLogin, dashboard.index);

  // 钱包详情页面
  app.get('/wallet/:wid',  auth.needToLogin, dashboard.wallet);

  // 绑定钱包页面
  app.get('/user/bind-wallet',  auth.needToLogin, dashboard.bindWallet);

  // 修改分红地址页面
  app.get('/user/update-dividend',  auth.needToLogin, dashboard.updateDividend);

  // 系统通知页面
  app.get('/notification', auth.needToLogin, notification.index);

  // 系统通知内容
  app.get('/notification/:id', auth.needToLogin, notification.detail);
  
  // 个人信息
  app.get('/user/info', auth.needToLogin, info.index);

  // 账户安全
  app.get('/user/security', auth.needToLogin, security.index);

  // 修改密码
  app.get('/modify-password', auth.needToLogin, security.modifyPwd);

  // 查看实名认证信息
  app.get('/check-id', auth.needToLogin, security.checkId);
};
