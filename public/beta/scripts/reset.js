!function(e){function r(t){if(o[t])return o[t].exports;var a=o[t]={exports:{},id:t,loaded:!1};return e[t].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var o={};return r.m=e,r.c=o,r.p="",r(0)}([function(e,r,o){e.exports=o(32)},,,function(e,r,o){var t,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(n,i){"use strict";var s=function(e){if("object"!==a(e.document))throw new Error("Cookies.js requires a `window` with a `document` object");var r=function o(e,r,t){return 1===arguments.length?o.get(e):o.set(e,r,t)};return r._document=e.document,r._cacheKeyPrefix="cookey.",r._maxExpireDate=new Date("Fri, 31 Dec 9999 23:59:59 UTC"),r.defaults={path:"/",secure:!1},r.get=function(e){r._cachedDocumentCookie!==r._document.cookie&&r._renewCache();var o=r._cache[r._cacheKeyPrefix+e];return o===i?i:decodeURIComponent(o)},r.set=function(e,o,t){return t=r._getExtendedOptions(t),t.expires=r._getExpiresDate(o===i?-1:t.expires),r._document.cookie=r._generateCookieString(e,o,t),r},r.expire=function(e,o){return r.set(e,i,o)},r._getExtendedOptions=function(e){return{path:e&&e.path||r.defaults.path,domain:e&&e.domain||r.defaults.domain,expires:e&&e.expires||r.defaults.expires,secure:e&&e.secure!==i?e.secure:r.defaults.secure}},r._isValidDate=function(e){return"[object Date]"===Object.prototype.toString.call(e)&&!isNaN(e.getTime())},r._getExpiresDate=function(e,o){if(o=o||new Date,"number"==typeof e?e=e===1/0?r._maxExpireDate:new Date(o.getTime()+1e3*e):"string"==typeof e&&(e=new Date(e)),e&&!r._isValidDate(e))throw new Error("`expires` parameter cannot be converted to a valid Date instance");return e},r._generateCookieString=function(e,r,o){e=e.replace(/[^#$&+\^`|]/g,encodeURIComponent),e=e.replace(/\(/g,"%28").replace(/\)/g,"%29"),r=(r+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent),o=o||{};var t=e+"="+r;return t+=o.path?";path="+o.path:"",t+=o.domain?";domain="+o.domain:"",t+=o.expires?";expires="+o.expires.toUTCString():"",t+=o.secure?";secure":""},r._getCacheFromString=function(e){for(var o={},t=e?e.split("; "):[],a=0;a<t.length;a++){var n=r._getKeyValuePairFromCookieString(t[a]);o[r._cacheKeyPrefix+n.key]===i&&(o[r._cacheKeyPrefix+n.key]=n.value)}return o},r._getKeyValuePairFromCookieString=function(e){var r=e.indexOf("=");r=0>r?e.length:r;var o,t=e.substr(0,r);try{o=decodeURIComponent(t)}catch(a){console&&"function"==typeof console.error&&console.error('Could not decode cookie with key "'+t+'"',a)}return{key:o,value:e.substr(r+1)}},r._renewCache=function(){r._cache=r._getCacheFromString(r._document.cookie),r._cachedDocumentCookie=r._document.cookie},r._areEnabled=function(){var e="cookies.js",o="1"===r.set(e,1).get(e);return r.expire(e),o},r.enabled=r._areEnabled(),r},d="object"===a(n.document)?s(n):s;t=function(){return d}.call(r,o,r,e),!(t!==i&&(e.exports=t))}("undefined"==typeof window?void 0:window)},,,function(e,r,o){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var a=o(7),n=t(a),i=o(8),s=t(i),d=o(9),c=t(d),l=o(10),u=t(l),f=o(11),p=t(f),m=o(12),h=t(m),b=o(13),g=t(b),y=o(14),v=t(y),w=o(15),C=t(w),P=o(16),S=t(P),_=o(17),x=t(_);r["default"]={explorer:n["default"],login:s["default"],signup:c["default"],reset:u["default"],info:p["default"],verifyId:h["default"],modifyPassword:g["default"],dividend:v["default"],modifyPhone:C["default"],verifyBankCard:S["default"],riskTolerance:x["default"]}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={zh:{transaction:"交易"},en:{transaction:"Transaction"}}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={zh:{"submit-err-1":"提交失败，请稍后重试","phone-err-1":"请输入正确的手机号码","pwd-err-1":"请输入密码","captcha-err-1":"请输入验证码","error-code-1":"用户名不存在，请确认后重试","error-code-2":"用户名或密码错误，请确认后重试","error-code-3":"验证码无效，请稍后重试","error-code-4":"验证码输入错误，请重试"},en:{"submit-err-1":"Submission failed, please try again later","phone-err-1":"Please enter the correct phone number","pwd-err-1":"Please enter your password","captcha-err-1":"please enter verification code","error-code-1":"User name does not exist. Please try again confirm","error-code-2":"User name or password is incorrect. Please try again confirm","error-code-3":"Invalid verification code, please try again later","error-code-4":"Verification code input errors, please try again"}}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={zh:{"submit-err-1":"提交失败，请稍后重试","phone-err-1":"请输入正确的手机号码","sms-err-1":"请输入短信验证码","pwd-err-1":"请输入不小于6位的密码","confirm-pwd-err-1":"两次密码不一致","confirm-pwd-err-2":"请输入不小于6位的确认密码","terms-err-1":"阅读并同意瑞资的服务条款后，才能完成注册",phoneCode:"获取验证码","phoneCode-err-1":"获取验证码失败，请稍后重试","phoneCode-err-2":"获取验证码过于频繁，请稍后重试","phoneCode-count":"再次获取","error-code-1":"数据格式异常，请确认后重试","error-code-2":"短信验证码错误","error-code-3":"短信验证码错误","error-code-4":"保存注册信息失败，请稍后重试","error-code-5":"此手机号码已经被注册"},en:{"submit-err-1":"Submission failed, please try again later","phone-err-1":"Please enter the correct phone number","sms-err-1":"Please enter the verification code SMS","pwd-err-1":"Please enter a password at least six characters","confirm-pwd-err-1":"The two passwords do not match","confirm-pwd-err-2":"Please enter a password to confirm not less than six characters","terms-err-1":"Read and agree to the Terms of Service to complete the registration",phoneCode:"Get the code","phoneCode-err-1":"Get the verification code failed, please try again later","phoneCode-err-2":"Get the verification code too often, please try again later","phoneCode-count":"Get again","error-code-1":"Abnormal data format, make sure and try again","error-code-2":"SMS verification code error","error-code-3":"SMS verification code error","error-code-4":"Save the registration information failed. Please try again later","error-code-5":"This phone number has been registered"}}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={zh:{"submit-err-1":"提交失败，请稍后重试","phone-err-1":"请输入正确的手机号码","sms-err-1":"请输入短信验证码","pwd-err-1":"请输入不小于6位的密码","confirm-pwd-err-1":"两次密码不一致","confirm-pwd-err-2":"请输入不小于6位的确认密码",phoneCode:"获取验证码","phoneCode-err-1":"获取验证码失败，请稍后重试","phoneCode-err-2":"获取验证码过于频繁，请稍后重试","phoneCode-count":"再次获取","error-code-1":"账号不存在","error-code-2":"短信验证码错误","error-code-3":"重置失败已超过三次，请稍后再试","error-code-4":"短信验证码错误"},en:{"submit-err-1":"Submission failed, please try again later","phone-err-1":"Please enter the correct phone number","sms-err-1":"Please enter the verification code SMS","pwd-err-1":"Please enter a password at least six characters","confirm-pwd-err-1":"The two passwords do not match","confirm-pwd-err-2":"Please enter a password to confirm not less than six characters",phoneCode:"Get the code","phoneCode-err-1":"Get the verification code failed, please try again later","phoneCode-err-2":"Get the verification code too often, please try again later","phoneCode-count":"Get again","error-code-1":"Account does not exist","error-code-2":"SMS verification code error","error-code-3":"Reset failed more than three times, please try again later","error-code-4":"SMS verification code error"}}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={zh:{"submit-err-1":"提交失败，请稍后重试","nickname-err-1":"请输入昵称",success:"提交成功","error-code-1":"数据格式异常，请确认后重试","error-code-2":"请先登录","error-code-3":"提交失败，请稍后重试"},en:{"submit-err-1":"Submit failed, please try again later","nickname-err-1":"Please enter the nickname",success:"Submitted successfully","error-code-1":"Abnormal data format, make sure and try again","error-code-2":"Please login first","error-code-3":"Submission failed, please try again later"}}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={zh:{"browser-tips":"你的浏览器太古老了，请使用更现代的浏览器访问本网站","real-name-err-1":"请输入真实姓名","id-num-err-1":"请输入正确的身份证号码","photo-err-1":"仅支持JPG、GIF、PNG、JPEG，文件小于10MB","photo-err-2":"请选择身份证正面照片","photo-err-3":"请选择身份证反面照片","photo-err-4":"请选择正面半身照","error-code-1":"数据格式异常，请确认后重试","error-code-2":"请先登录","error-code-3":"提交失败，请稍后重试","error-code-4":"实名验证失败，请确认后重试","error-code-5":"保存信息失败，请稍后重试","error-code-6":"此身份号码已经被注册",success:"提交成功！5秒后将自动跳转"},en:{"browser-tips":"Your browser is ancient! Upgrade to a different browser to experience this site","real-name-err-1":"Please enter your real name","id-num-err-1":"Please enter a valid ID number","photo-err-1":"Only supports JPG, GIF, PNG, JPG, less than 4MB","photo-err-2":"Please choose the front of the photo ID","photo-err-3":"Please choose the back of the photo ID","photo-err-4":"Please choose the front half-length photo","error-code-1":"Abnormal data format, make sure and try again","error-code-2":"Please login first","error-code-3":"Submit failed, please try again later","error-code-4":"Real name verification failed. Please try again confirm","error-code-5":"Save the information failed. Please try again later","error-code-6":"This identification number has already been registered",success:"Submitted successfully! After 5 seconds will automatically jump"}}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={zh:{"old-pwd-err-1":"请输入当前密码","new-pwd-err-1":"请输入新密码","confirm-pwd-err-1":"新密码和确认密码不一致","confirm-pwd-err-2":"请输入不小于6位的确认密码","submit-err-1":"提交失败，请稍后重试","error-code-1":"请先登录","error-code-2":"当前密码输入错误",success:"提交成功！5秒后将自动跳转"},en:{"old-pwd-err-1":"Please enter the current password","new-pwd-err-1":"Please enter the new password","confirm-pwd-err-1":"The new password and confirm password do not match","confirm-pwd-err-2":"Please enter a password to confirm not less than six characters","submit-err-1":"Submission failed, please try again later","error-code-1":"Please login first","error-code-2":"The old password is wrong",success:"Submitted successfully! After 5 seconds will automatically jump"}}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={zh:{"submit-err-1":"提交失败，请稍后重试","address-err-1":"请输入正确的 BTC 地址","sms-err-1":"请输入短信验证码",phoneCode:"获取验证码","phoneCode-err-1":"获取验证码失败，请稍后重试","phoneCode-err-2":"获取验证码过于频繁，请稍后重试","phoneCode-count":"再次获取","error-code-1":"请先登录","error-code-2":"提交失败，请稍后重试","error-code-3":"验证码无效，请稍后重试","error-code-4":"验证码输入错误，请重试",success:"提交成功！5秒后将自动跳转"},en:{"submit-err-1":"Submit failed, please try again later","address-err-1":"Please enter the correct address of BTC","sms-err-1":"Please enter the verification code SMS",phoneCode:"Get the code","phoneCode-err-1":"Get the verification code failed, please try again later","phoneCode-err-2":"Get the verification code too often, please try again later","phoneCode-count":"Get again","error-code-1":"Please login first","error-code-2":"Submit failed, please try again later","error-code-3":"Invalid verification code, please try again later","error-code-4":"Verification code input errors, please try again",success:"Submitted successfully! After 5 seconds will automatically jump"}}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={zh:{"phone-err-1":"请输入正确的手机号码","sms-err-1":"请输入短信验证码","pwd-err-1":"请输入密码",phoneCode:"获取验证码","phoneCode-err-1":"获取验证码失败，请稍后重试","phoneCode-err-2":"获取验证码过于频繁，请稍后重试","phoneCode-count":"再次获取",success:"提交成功！5秒后将自动跳转","error-code-1":"数据格式异常，请确认后重试","error-code-2":"数据格式异常，请确认后重试","error-code-3":"短信验证码错误","error-code-4":"短信验证码错误","error-code-5":"密码错误，请确认后重试","error-code-6":"保存信息失败，请稍后重试"},en:{"phone-err-1":"Please enter the correct phone number","sms-err-1":"Please enter the verification code SMS","pwd-err-1":"Please enter the password",phoneCode:"Get the code","phoneCode-err-1":"Get the verification code failed, please try again later","phoneCode-err-2":"Get the verification code too often, please try again later","phoneCode-count":"Get again",success:"Submitted successfully! After 5 seconds will automatically jump","error-code-1":"Abnormal data format, make sure and try again","error-code-2":"Abnormal data format, make sure and try again","error-code-3":"SMS verification code error","error-code-4":"SMS verification code error","error-code-5":"Password is incorrect. Please try again confirm","error-code-6":"Save the information failed. Please try again later"}}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={zh:{"bank-card-err-1":"请输入银行卡号","name-err-1":"请输入真实姓名","id-num-err-1":"请输入正确的身份证号码","error-code-1":"数据格式异常，请确认后重试","error-code-2":"数据格式异常，请确认后重试","error-code-3":"银行卡认证失败，请确认后重试","error-code-4":"提交失败，请稍后重试","error-code-5":"保存信息失败，请稍后重试",success:"提交成功！5秒后将自动跳转"},en:{"bank-card-err-1":"Please enter your bank card number","real-name-err-1":"Please enter your real name","id-num-err-1":"Please enter a valid ID number","error-code-1":"Abnormal data format, make sure and try again","error-code-2":"Abnormal data format, make sure and try again","error-code-3":"Bank card verification failed. Please try again confirm","error-code-4":"Submit failed, please try again later","error-code-5":"Save the information failed. Please try again later",success:"Submitted successfully! After 5 seconds will automatically jump"}}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={zh:{"q-err-1":"完成所有问题后才能提交哦",success:"提交成功！5秒后将自动跳转","error-code-1":"数据格式异常，请确认后重试","error-code-2":"数据格式异常，请确认后重试","error-code-3":"保存信息失败，请稍后重试"},en:{"q-err-1":"Complete all questions before submitting",success:"Submitted successfully! After 5 seconds will automatically jump","error-code-1":"Abnormal data format, make sure and try again","error-code-2":"Abnormal data format, make sure and try again","error-code-3":"Save the information failed. Please try again later"}}},,,,,,,function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]={platform:"http://123.207.164.141:9080/reits"}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},t=function(e){var r=/^1[3|4|5|7|8]\d{9}$/;return r.test(e)},a=function(e){var r=/^\d+$/;return r.test(e)},n=function(e,r){return e.length>=r},i=function(e){return e=e.split("."),e=e[e.length-1].toLowerCase(),/(gif|jpg|jpeg|png)$/.test(e)};r["default"]={email:o,mobile:t,num:a,length:n,image:i}},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=function(e,r,o,t){var a=$("#alertHolder"),n=$("#alertDefault");o="alert-"+(o||"danger"),clearTimeout(window.alertCountdown);var i=function(){n.html(""),a.addClass("hide")},s=function(){n.html(e),a.removeClass("hide"),n.attr("class","alert "+o)},d=function(){"function"==typeof t&&t()};"hide"===e?(i(),d()):s(),r?window.alertCountdown=setTimeout(function(){i(),d()},r):d()}},,,,,,function(e,r,o){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function a(){var e=60,r=function o(){e--,e?($("#btnSmsCode").html(d["default"].reset[h]["phoneCode-count"]+"("+e+"s)"),window.phoneCodeTimeout=setTimeout(function(){o()},1e3)):(clearTimeout(window.phoneCodeTimeout),$("#btnSmsCode").removeClass("disabled").html(d["default"].reset[h].phoneCode))};r()}function n(){$.ajax({method:"POST",url:"/reset",data:$("#form").serializeObject(),cache:!1,beforeSend:function(){$("#btnSubmit").addClass("disabled")},success:function(e){e.success?($("#formHolder").addClass("hide"),$("#successHolder").removeClass("hide")):m["default"](d["default"].reset[h]["error-code-"+e.code],5e3)},error:function(){m["default"](d["default"].reset[h]["submit-err-1"],5e3)},complete:function(){$("#btnSubmit").removeClass("disabled")}})}var i=o(24),s=(t(i),o(6)),d=t(s),c=o(3),l=t(c),u=o(25),f=t(u),p=o(26),m=t(p),h=l["default"].get("REITsLocale");$("#btnSmsCode").on("click",function(){var e=$(this),r=$("#phoneNum").val();return f["default"].mobile(r)?e.hasClass("disabled")?!1:void $.ajax({method:"POST",url:"/phone-code",data:{phoneNum:r},cache:!1,beforeSend:function(){e.addClass("disabled"),a()},success:function(r){r.success||(m["default"](d["default"].reset[h]["phoneCode-err-"+r.code],5e3),e.removeClass("disabled").html(d["default"].reset[h].phoneCode))},error:function(){m["default"](d["default"].reset[h]["phoneCode-err-1"],5e3),e.removeClass("disabled").html(d["default"].reset[h].phoneCode)}}):(m["default"](d["default"].signup[h]["phone-err-1"],5e3),!1)}),$("#btnSubmit").on("click",function(){if($(this).hasClass("disabled"))return!1;var e=$("#phoneNum").val();if(!f["default"].mobile(e))return m["default"](d["default"].signup[h]["phone-err-1"],5e3),!1;var r=$("#phoneValidCode").val();if(!f["default"].length(r,6))return m["default"](d["default"].signup[h]["sms-err-1"],5e3),!1;var o=$("#password").val();if(!f["default"].length(o,6))return m["default"](d["default"].signup[h]["pwd-err-1"],5e3),!1;var t=$("#confirmPassword").val();return f["default"].length(t,6)?o!==t?(m["default"](d["default"].signup[h]["confirm-pwd-err-1"],5e3),!1):void n():(m["default"](d["default"].signup[h]["confirm-pwd-err-2"],5e3),!1)})}]);