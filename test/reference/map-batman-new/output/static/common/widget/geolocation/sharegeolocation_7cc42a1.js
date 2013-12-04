define("common:widget/geolocation/sharegeolocation.js",function(t,e,i){"use strict";var r=t("common:widget/geolocation/myposition.js"),o=t("common:static/js/localstorage.js"),a=t("common:widget/stat/metrics-stat.js");i.exports={_MINUTES:5,init:function(t){t=t||{},this._MINUTES=parseInt(t.par)||this._MINUTES,this._data=t,this._startGeo()},_startGeo:function(){if("number"==typeof this._MINUTES){var t=r.get("baiduLoc")||r.get("native")||r.get("web");null!=t?this._setCookieLoc(t):this._geoFailHandler()}else this._geoFailHandler()},_isInMinutes:function(t){if(!t)return!1;var e=parseInt(Date.now()),i=e-6e4*this._MINUTES;return t>i?!0:!1},_formatLoc:function(t){var e=t&&t.crd;if(e)return{addr:{address:t.addr,city:t.city,district:t.district,street:t.street,cityCode:t&&t.cc,accuracy:e&&e.r},point:{x:e&&e.x,y:e&&e.y},t:t&&t.t,isUserInput:t&&"ui"==t.tp?!0:!1,type:"share",isExactPoi:!0,isGeoSuc:!0,minutes:this._MINUTES}},_setCookieLoc:function(t){var e=this,i=e._isInMinutes(t.t);t&&t.crd&&i?t.addr?e._addStatAndTriggerEvent(t):e._checkLocFromStorage(t.crd)?e._getLocFromStorage(t):e._getRgcLoc(t):e._geoFailHandler()},_getRgcLoc:function(t){var e=this;if(t.crd.x&&t.crd.y){var i="http://api.map.baidu.com/?qt=rgc_standard&x="+t.crd.x+"&y="+t.crd.y+"&dis_poi="+t.crd.r+"&poi_num=10&ie=utf-8&oue=1&res=api&callback=";$.ajax({url:i,dataType:"jsonp",success:function(i){var r=i.content.address,a=i.content.address_detail;$.extend(t,{addr:r,city:a.city,district:a.district,street:a.street}),o.addData("webapp-location-cookie",t),e._addStatAndTriggerEvent(t)}})}},_checkLocFromStorage:function(t){var e,i;if(void 0==t)return!1;try{var e=o.getData("webapp-location-cookie");if(void 0==e)return!1;i=JSON.parse(JSON.parse(e))}catch(r){return!1}return i.x==t.x&&i.y==t.y?(this._locAddress=i,!0):!1},_getLocFromStorage:function(t){var e=this._locAddress;$.extend(t,{addr:e.address?e.address:e.city+e.district+e.street,city:e.city,district:e.district,street:e.street}),this._addStatAndTriggerEvent(t)},_addStatAndTriggerEvent:function(t){var t=this._formatLoc(t);a.addStat("geo","share_geo_suc",1,!0),listener.trigger("common.geomethod","success",t)},_geoFailHandler:function(){return this._MINUTES<=5?(listener.trigger("common.geomethod","fail",{}),void 0):this._MINUTES>=30?(listener.trigger("common.geomethod","fail",this._data),void 0):void 0}}});