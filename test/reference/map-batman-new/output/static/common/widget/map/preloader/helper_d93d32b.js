define("common:widget/map/preloader/helper.js",function(t,e,n){var o=t("common:static/js/util.js"),i=t("common:static/js/mapconst.js"),r=(t("common:widget/geolocation/location.js"),t("common:widget/map/preloader/CBounds.js"));n.exports={getViewport:function(t){{var e,n,r=window._APP_HASH||{},a=r.module;r.action}if(t=t||{},window._MAP_BOUNDS){["transit","drive","walk"].indexOf(a)>=0&&(t.margins=i.ROUTE_MARGINS);var g=o.getBPoints([window._MAP_BOUNDS]),m=this._getViewport(g,t);m&&m.center&&m.zoom&&(e=m.center,n=m.zoom)}return{center:e,zoom:n}},_getViewport:function(t,e){if(t&&0!=t.length){e=e||{};var n=t.slice(0),o=new r(n[0],n[1]),i=o.getCenter(),a=this.getBestLevel(o,e);if(e.margins){var g=e.margins,m=(g[1]-g[3])/2,s=(g[0]-g[2])/2,c=this.getZoomUnits(a);i.lng=i.lng+c*m,i.lat=i.lat+c*s}return{center:i,zoom:a}}},getZoomUnits:function(t){var e=1;return Math.pow(2,18-t)*e},getMapSize:function(){var t=window._APP_HASH||{},e=t.module,n=t.action,o=window.innerHeight,i=window.innerWidth,r=$(".index-widget-searchbox").height()||58,a=$(".index-widget-tabgroup").height()||50,g=$(".common-widget-nav").height()||51;return"index"===e&&"index"===n?o=o-a-r:o-=g,{width:i,height:o}},getMinZoom:function(){return 3},getMaxZoom:function(){return 18},getBestLevel:function(t,e){for(var n=e.margins||[10,10,10,10],o=e.zoomFactor||0,i=n[1]+n[3],r=n[0]+n[2],a=this.getMinZoom(),g=this.getMaxZoom(),m=this.getMapSize(),s=g;s>=a;s--){var c=this.getZoomUnits(s);if(t.toSpan().lng/c<m.width-i&&t.toSpan().lat/c<m.height-r)break}return s+=o,a>s&&(s=a),s>g&&(s=g),s}}});