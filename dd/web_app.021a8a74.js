webpackJsonp([1],[function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(t);return null!=o?unescape(o[2]):null}function a(){var e;g.default.use(b.default),g.default.use(E.default),g.default.use(P.default),g.default.component("alert",h.Alert);var t=new b.default({transitionOnLoad:!1});t.map((e={},r(e,C.config.BASE_PATH,{component:function(e){o.e(2,function(){var t=o(49).default;e(t)})},subRoutes:{"/":{component:function(e){o.e(3,function(){var t=o(55).default;e(t)})}},"/member":{component:function(e){o.e(4,function(){var t=o(65).default;e(t)})}}}}),r(e,C.config.BASE_PATH+"/user/sign_in",{component:function(e){o.e(5,function(){var t=o(73).default;e(t)})}}),e)),t.redirect({"*":C.config.BASE_PATH});var n=window.sessionStorage;n.clear();var i=1*n.getItem("count")||0;n.setItem(C.config.BASE_PATH,0),t.beforeEach(function(e){var t=e.to,o=e.from,r=e.next,c=n.getItem(t.path),a=n.getItem(o.path);c?c>a||!a?z("UPDATE_DIRECTION","forward"):z("UPDATE_DIRECTION","reverse"):(++i,n.setItem("count",i),t.path!==C.config.BASE_PATH&&n.setItem(t.path,i),z("UPDATE_DIRECTION","forward")),z("UPDATE_LOADING",!0),setTimeout(r,50)}),t.afterEach(function(){z("UPDATE_LOADING",!1)}),(0,_.sync)(v.default,t),t.start(R.default,"#app"),w.default.attach(document.body)}function u(){return d.default.Promise(function(e,t){s.default.get("http://116.236.230.131:55002/auth/getConfig",{params:{corpid:c("corpid")||"ding1b56d2f4ba72e91635c2f4657eb6378f",appid:c("appid")||"2545",suitekey:c("suiteKey")||"suiteiyfdj0dfixywzqwg",paramUrl:document.URL}}).then(function(o){if(200==o.status&&200==o.data.code){var n=o.data.result,i={agentId:n.agentId,corpId:n.corpId,timeStamp:n.timeStamp,nonceStr:n.nonceStr,signature:n.signature,type:0,jsApiList:["runtime.info","runtime.permission.requestAuthCode","biz.alipay.pay","biz.contact.choose","biz.contact.complexChoose","biz.contact.complexPicker","biz.contact.createGroup","biz.customContact.choose","biz.customContact.multipleChoose","biz.ding.post","biz.map.locate","biz.map.view","biz.util.openLink","biz.util.open","biz.util.share","biz.util.uploadImage","biz.util.previewImage","biz.util.datepicker","biz.util.timepicker","biz.util.datetimepicker","biz.util.chosen","biz.util.encrypt","biz.util.decrypt","biz.chat.pickConversation","biz.telephone.call","biz.navigation.setTitle","biz.navigation.setIcon","biz.navigation.close","biz.navigation.setRight","biz.navigation.setMenu","biz.user.get","ui.progressBar.setColors","device.base.getInterface","device.connection.getNetworkType","device.launcher.checkInstalledApps","device.launcher.launchApp","device.notification.confirm","device.notification.alert","device.notification.prompt","device.notification.showPreloader","device.notification.hidePreloader","device.notification.toast","device.notification.actionSheet","device.notification.modal","device.geolocation.get"]};e(i)}else t(o)}).catch(function(e){t(e)})})}var l=o(1),d=i(l),f=o(5),s=i(f),p=o(31),g=i(p),m=o(32),b=i(m);o(37);var y=o(35),h=n(y),_=o(34),S=o(38),v=i(S),I=o(36),w=i(I),C=o(30),A=o(41),E=i(A),D=o(43),P=i(D),O=o(44),R=i(O),T=window.dd,z=v.default.commit||v.default.dispatch;g.default.config.debug=!0,g.default.config.devtools=!0,u().then(function(e){T.config(e),z("DDCONFIG_SUCCESS",e)}).catch(function(e){z("DDCONFIG_ERROR",!1)}),T.ready(function(){console.log("初始化钉钉"),a()}),T.error(function(e){z("DDCONFIG_ERROR",!1),a(),console.error("dd error: "+JSON.stringify(err))})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(31),r=n(i),c=o(33),a=n(c),u=o(39),l=n(u);r.default.use(a.default),t.default=new a.default.Store({modules:{app:l.default}})},function(e,t,o){"use strict";function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}Object.defineProperty(t,"__esModule",{value:!0});var i,r=o(40),c={isLoading:!1,direction:"forward",ddConfig:null,ddConfigStatus:null,code:null},a=(i={},n(i,r.UPDATE_LOADING,function(e,t){e.isLoading=t}),n(i,r.UPDATE_DIRECTION,function(e,t){e.direction=t}),n(i,r.DDCONFIG_SUCCESS,function(e,t){e.ddConfigStatus=!0,e.ddConfig=t}),n(i,r.DDCONFIG_ERROR,function(e,t){e.ddConfigStatus=!1,e.ddConfig=null}),n(i,r.UPDATE_CODE,function(e,t){e.code=t}),i);t.default={state:c,mutations:a}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.UPDATE_LOADING="UPDATE_LOADING",t.UPDATE_DIRECTION="UPDATE_DIRECTION",t.DDCONFIG_SUCCESS="DDCONFIG_SUCCESS",t.DDCONFIG_ERROR="DDCONFIG_ERROR",t.UPDATE_CODE="UPDATE_CODE"},function(e,t,o){(function(e){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=o(30),i={};i.install=function(e,o){e.cookie=function(e,t,o){var n,i,r,c;return arguments.length>1&&"[object Object]"!==String(t)?(o=$.extend({},o),null!==t&&void 0!==t||(o.expires=-1),"number"==typeof o.expires&&(n=24*o.expires*60*60*1e3,i=o.expires=new Date,i.setTime(i.getTime()+n)),t=String(t),document.cookie=[encodeURIComponent(e),"=",o.raw?t:t,o.expires?"; expires="+o.expires.toUTCString():"","; path=/",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")):(o=t||{},c=o.raw?function(e){return e}:decodeURIComponent,(r=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?c(r[1]):null)},e.prototype.base_path=n.config.BASE_PATH,e.prototype.goBack=function(e){if(e.$router._currentRoute.path.match("/pay/"))return void window.history.back();var t;try{t=e.$router._currentTransition.from.path,t?t.match("member")&&!$.localStorage.getItem("webapp_userInfo")?e.$router.replace(n.config.BASE_PATH):window.history.back():e.$router.replace(n.config.BASE_PATH)}catch(t){console.log(t),e.$router.replace(n.config.BASE_PATH)}},e.prototype.goRoute=function(e,t,o){!$.localStorage.getItem("webapp_userInfo")&&(e.match("member")||e.match("chat")||e.match("pay")||e.match("/tucao/publish"))?t.goLoginPage(t,e):o?t.$router.replace(n.config.BASE_PATH+e):t.$router.go(n.config.BASE_PATH+e)},e.prototype.localStorage={getItem:function(e){if("object"===("undefined"==typeof localStorage?"undefined":t(localStorage)))try{return JSON.parse(localStorage.getItem(e))}catch(e){alert("请关闭[无痕浏览]模式后再试!")}},setItem:function(e,o){if("object"===("undefined"==typeof localStorage?"undefined":t(localStorage)))try{return localStorage.setItem(e,JSON.stringify(o))}catch(e){alert("请关闭[无痕浏览]模式后再试!")}},removeItem:function(e){if("object"===("undefined"==typeof localStorage?"undefined":t(localStorage)))try{return localStorage.removeItem(e)}catch(e){alert("请关闭[无痕浏览]模式后再试!")}},getUseSize:function(){if("object"===("undefined"==typeof localStorage?"undefined":t(localStorage)))try{return JSON.stringify(localStorage).length}catch(e){alert("请关闭[无痕浏览]模式后再试!")}}},e.prototype.saveUserInfo=function(t){if(t?($.localStorage.setItem("webapp_userInfo",t),e.prototype.$myInfo=$.localStorage.getItem("webapp_userInfo")):$.localStorage.removeItem("webapp_userInfo"),t&&t.car&&t.car.type_id>0){var o={brand_id:t.car.brand_id,brand_name:t.car.brand_name,series_id:t.car.series_id,series_name:t.car.series_name,type_id:t.car.type_id,type_name:t.car.type_name};$.localStorage.setItem("myCar",o)}else $.localStorage.removeItem("myCar")},Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in t)new RegExp("("+o+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[o]:("00"+t[o]).substr((""+t[o]).length)));return e}},function(o){"object"===t(e)&&"object"===t(e.exports)?e.exports=o:window.bb?window.bb.bbPlugin=o:window.bb={bbPlugin:o}}(i)}).call(t,o(42)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t,o){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=o(1),r=t(i),c={};c.install=function(e,t){var o=window.dd;o?(e.prototype.getRequestAuthCode=function(e){return r.default.Promise(function(t,n){o.runtime.permission.requestAuthCode({corpId:e.corpId,onSuccess:function(e){t(e)},onFail:function(e){n(e)}})})},e.prototype.setTitle=function(e){return r.default.Promise(function(t,n){o.biz.navigation.setTitle({title:e.title,onSuccess:function(e){t(e)},onFail:function(e){n(e)}})})},e.prototype.setRightText=function(e){return r.default.Promise(function(t,n){o.biz.navigation.setRight({show:!0,control:!!e.control&&e.control,text:e.text||"发送",onSuccess:function(e){t(e)},onFail:function(e){n(e)}})})}):console.error("dd没有定义")},function(t){"object"===n(e)&&"object"===n(e.exports)?e.exports=t:window.bb?window.bb.ddPlugin=t:window.bb={ddPlugin:t}}(c)}).call(t,o(42)(e))},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(31),r=n(i),c=o(45),a=n(c),u=o(46),l=n(u);o(47);var d=o(38),f=n(d),s=o(48),p=r.default.extend({template:a.default,store:f.default,vuex:{getters:{route:function(e){return e.route},isLoading:function(e){return e.isLoading},direction:function(e){return e.direction},ddConfigStatus:function(e){return e.ddConfigStatus},code:function(e){return e.code}},actions:{getRequestAuthCode:s.getRequestAuthCode}},ready:function(){console.log("APP ready 应该只执行一次"),this.ddConfigStatus===!0&&this.getRequestAuthCode()},data:function(){return l.default},methods:{},computed:{}});t.default=p},function(e,t){e.exports='<div>\n    <router-view :transition="\'vux-pop-\' + (direction === \'forward\' ? \'in\' : \'out\')">\n\n    </router-view>\n    <alert :show="ddConfigStatus === false" title="发生错误">\n        dd.config配置失败\n    </alert>\n    <alert :show="code === false" title="发生错误">\n        免登陆code获取失败\n    </alert>\n</div>'},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={routerTransition:{forward:"slideRL",back:"slideLR"}};t.default=o},function(e,t){},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function i(e,t){var o=e.dispatch,n=e.state,i=n.app.ddConfig.corpId;dd.runtime.permission.requestAuthCode({corpId:i,onSuccess:function(e){o(a.UPDATE_CODE,e.code),r(e.code),console.log("获取到了免登陆code=>"+e.code)},onFail:function(e){o(a.UPDATE_CODE,!1),console.log("获取免登陆code失败")}})}function r(e,t){e.dispatch,e.state}Object.defineProperty(t,"__esModule",{value:!0}),t.getRequestAuthCode=i,t.getUserInfo=r;var c=o(40),a=n(c)}]);