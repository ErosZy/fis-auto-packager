define("index:widget/seacrhnave/searchboxmodel.js",function(t,e,i){var n=t("common:widget/geolocation/location.js"),a={data:{start:{word:""},end:{word:""},geo:{word:""}},init:function(){},value:function(t){return t&&$.isPlainObject(t)?this.set(this._deepAdaptive(t)):this.get()},_deepAdaptive:function(t){var e={};for(key in t)e[key]=this._adaptive(t[key]);return e},_adaptive:function(t){var e={};for(key in t)if("name"==key||"wd"==key?e.word=t[key]:"pt"==key?e.point=t[key]:e[key]=t[key],e.word==MY_GEO){if(n.hasExactPoi())return e;e=this.getExactlocationData()}return e.point&&$.isPlainObject(e.point)&&(e.point=e.point.lng+","+e.point.lat),e},set:function(t,e){t&&"string"==typeof t&&e&&$.isPlainObject(e)?this.data[t]=e:t&&$.isPlainObject(t)&&$.extend(this.data,t)},_set:function(t,e){t&&"string"==typeof t&&e&&$.isPlainObject(e)?this.data[t]=e:t&&$.isPlainObject(t)&&$.extend(this.data,t)},get:function(t){return t&&"string"==typeof t?this.data[t]:this.data},getExactlocationData:function(){var t={word:""},e=n;return e&&e.point&&(t={word:MY_GEO,point:e.point.x+","+e.point.y,citycode:e.addr.cityCode}),t},getCenterName:function(){return n.hasExactPoi()?n.isUserDeny()?n.getAddress():MY_GEO:""}};i.exports=a});