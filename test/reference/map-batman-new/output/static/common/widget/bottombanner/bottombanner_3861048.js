define("common:widget/bottombanner/bottombanner.js",function(e,t,n){"use strict";var i=e("common:static/js/util.js"),a={loadCmsAdConfig:function(e){var t=(new Date).getTime(),n=document.getElementsByTagName("HEAD").item(0),i=document.createElement("script");i.type="text/javascript",i.src="http://map.baidu.com/zt/cms/ws.js?"+t,i.onload=$.proxy(e,this),n.appendChild(i)},getCurrentHash:function(){var e=window._APP_HASH,t=window.location.pathname.replace("/mobile/webapp/",""),n=t.split("/"),a=n[2],o=n[3];return{module:e.module,action:e.action,query:i.urlToJSON(a||""),pageState:i.urlToJSON(o||"")}},checkDisplayBanner:function(e){var t,n,i,a,o,r=[],s=window.bottomBannerDisplayRule,d=e.module,l=e.action,c=e.query,u=e.pageState;return s?($.each(s,function(e,s){t=[],s.module&&(n=s.module.substring(0,1),i=s.module.substring(1),t.push("!"===n?-1===i.indexOf(d):i.indexOf(d)>-1)),s.action&&(n=s.action.substring(0,1),i=s.action.substring(1),t.push("!"===n?-1===i.indexOf(l):i.indexOf(l)>-1)),s.query&&$.each(s.query,function(e,o){n=o.substring(0,1),i=o.substring(1),a=c[e]||void 0,t.push("!"===n?-1===i.indexOf(a):i.indexOf(a)>-1)}),s.pagestate&&$.each(s.pagestate,function(e,a){n=a.substring(0,1),i=a.substring(1),o=u[e]||void 0,t.push("!"===n?-1===i.indexOf(o):i.indexOf(o)>-1)}),r.push(-1===t.indexOf(!1))}),-1!==r.indexOf(!0)?!0:!1):!1},isHideBanner:function(){return this.bannerHide?(localStorage.hbt=Date.now(),!0):localStorage.hbt?Date.now()>Number(localStorage.hbt)+9e5?(localStorage.removeItem("hbt"),!1):!0:!1},getPageConfig:function(){var e,t,n,a=window.webapp_cms_bottom_download_img,o=this.getCurrentHash(),r=o.module,s=o.action,d=o.query,l=o.pageState,c={};if(this.cmsDisplayRule=window.bottomBannerDisplayRule,!a||!this.checkDisplayBanner(o)||this.isHideBanner())return null;try{e=a[r][s]}catch(u){e=null}try{a&&a.wd&&(t=new RegExp(a.wd.transitType,"g"),n=new RegExp(a.wd.driveType,"g"))}catch(u){}if(d.wd&&d.wd.search(t)>-1)try{e=a.transit.list}catch(u){}else if(d.wd&&d.wd.search(n)>-1)try{e=a.drive.list}catch(u){}else"groupon"===l.detail_part&&(e=a.groupon||e);if(!e){if(!a.other)return null;e=a.other}return e?(c.bgUrl=this.hasInstalled?e.openUrl:e.downloadImgUrl,c.srcUrl=i.isIPhone()?e.iponeSrc:i.isAndroid()?e.androidSrc:i.isIPad()?e.ipadSrc:e.androidSrc,c):null},renderAfterLoaded:function(){var e=this.getPageConfig();e?(this.$el.css("background-image","url("+e.bgUrl+")").attr("data-href",e.srcUrl).show(),listener.trigger("common","sizechange")):this.$el.hide()},init:function(e){this.bannerHide=e||!1,this.loadCmsAdConfig(function(){var e=this;this.$el=$(".common-widget-bottom-banner"),this.$el.on("click",function(){e.hasInstalled?location.href="bdapp://map/":open($(this).attr("data-href"),"_blank")}),window.webapp_cms_bottom_download_img&&(void 0===this.hasInstalled?i.getNativeInfo("com.baidu.BaiduMap",function(t){e.hasInstalled=0===t.error,e.renderAfterLoaded()},function(){e.hasInstalled=!1,e.renderAfterLoaded()}):e.renderAfterLoaded())})}};n.exports=a});