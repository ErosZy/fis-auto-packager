define("common:widget/setcity/setcity.js",function(e,t,o){var a=e("common:widget/cookie/cookie.js"),c=e("common:widget/url/url.js"),i=(e("common:widget/pagemgr/pagemgr.js"),e("common:static/js/util.js"),e("common:widget/geolocation/location.js"),{path:"/mobile/",expires:86400}),n="     ",r={cityName:"",cityId:""},d=function(e,t){r.cityName=e,r.cityId=t},s=function(e,t,o){return"string"==typeof e?("setsubwaycity"==window._APP_HASH.page?l(o):(d(e,t),a.set("setCityName",e,i),u()),e):void 0},u=function(){var e,t,o=c.get(),a=(o.query,o.pageState);if(a.refer_query){try{e=JSON.parse(decodeURIComponent(a.refer_query)),referPageState=JSON.parse(decodeURIComponent(a.refer_pagestate))}catch(i){c.toIndex({cache:!1})}e.wd&&e.wd.split(n)[1]&&(e.wd=e.wd.split(n)[1]),t="wm"===e.qt||"takeout"==referPageState.search?y(e,referPageState):m(e,referPageState),p(t)}else c.toIndex({cache:!1})},m=function(e){var t=e||{};return t.c=r.cityId||t.c,delete t.nb_x,delete t.nb_y,opts={module:"place",action:"list",query:t,pageState:{dist_name:r.cityName}}},y=function(e,t){var o=e||{},a=t||{};return o.cityId=r.cityId||o.c,o.c=o.cityId,o.pageNum=1,o.m="searchBrands",delete o.nb_x,delete o.nb_y,delete o.pointX1,delete o.pointY1,delete o.radius,delete o.sortType,delete o.orderType,a=$.extend(a,{citysearch:1,center_name:r.cityName}),opts={module:"place",action:"takeout",query:o,pageState:a}},p=function(e){e&&e.module&&e.action?c.update(e):c.toIndex()},l=function(e){c.update({module:"subway",action:"show",query:{city:e}})};o.exports.setAndRedirect=s});