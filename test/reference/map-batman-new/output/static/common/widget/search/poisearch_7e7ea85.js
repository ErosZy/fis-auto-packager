define("common:widget/search/poisearch.js",function(e,t,o){var a=e("common:widget/geolocation/location.js"),c=e("common:widget/url/url.js");o.exports.search=function(e,t){if(e){t=t||{};var o={qt:"s",wd:e||"",c:a.getCityCode()||1,searchFlag:t.from||"bigBox",version:"5",exptype:"dep"};a.hasExactPoi()&&(o.nb_x=a.getPointX(),o.nb_y=a.getPointY(),o.center_rank=1),c.update({module:"search",action:"search",query:o,pageState:{vt:""}},{queryReplace:!0,pageStateReplace:!0})}}});