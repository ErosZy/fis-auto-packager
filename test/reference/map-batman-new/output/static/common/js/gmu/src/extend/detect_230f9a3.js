define("common:static/js/gmu/src/extend/detect.js",function(){!function(e,r){var i,t=r.userAgent,n=e.browser,o={qq:/MQQBrowser\/([\d.]+)/i,uc:/UCBrowser\/([\d.]+)/i,baidu:/baidubrowser\/.*?([\d.]+)/i};e.each(o,function(e,r){return(i=t.match(r))?(n[e]=!0,n.version=i[1],!1):void 0}),!n.uc&&/Uc/i.test(r.appVersion)&&(n.uc=!0)}(Zepto,navigator)});