define("common:widget/map/preloader/CBounds.js",function(t,n,s){function a(t,n){this._sw={lng:t.lng,lat:t.lat},this._ne={lng:n.lng,lat:n.lat},this._swLng=t.lng,this._swLat=t.lat,this._neLng=n.lng,this._neLat=n.lat}$.extend(a.prototype,{getCenter:function(){return{lng:(this._swLng+this._neLng)/2,lat:(this._swLat+this._neLat)/2}},toSpan:function(){return{lng:Math.abs(this._neLng-this._swLng),lat:Math.abs(this._neLat-this._swLat)}}}),s.exports=a});