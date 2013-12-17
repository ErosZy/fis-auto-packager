define("common:widget/map/preloader/tileloader.js",function(t,e,i){var n={Config:{rasterURLs:["http://online0.map.bdimg.com/it/","http://online1.map.bdimg.com/it/","http://online2.map.bdimg.com/it/","http://online3.map.bdimg.com/it/"],vectorURLs:["http://online0.map.bdimg.com/gvd/?","http://online1.map.bdimg.com/gvd/?","http://online2.map.bdimg.com/gvd/?","http://online3.map.bdimg.com/gvd/?"],tileSize:256,vctMetaKey:"vct_meta",vctMeta:null,vctMaxNum:100,vctDelNum:25,vectorMapLevel:12},loadTiles:function(t,e,i){var n=i||{},o=n.mapWidth||window.innerWidth,a=n.mapHeight||window.innerHeight,r=n.dataType||"vector",c=this.getCurViewTiles(t,e,o,a);"vector"==r&&e>=this.Config.vectorMapLevel?(this.initVectorEnvOnce(),this.loadVectorTiles(c)):this.loadRasterTiles(c)},getCurViewTiles:function(t,e,i,n){var o=this.Config.tileSize,a=Math.pow(2,18-e),r=a*o,c=Math.ceil(t.lng/r),v=Math.ceil(t.lat/r),l=[c,v,(t.lng-c*r)/r*o,(t.lat-v*r)/r*o],s=l[0]-Math.ceil((i/2-l[2])/o),g=l[1]-Math.ceil((n/2-l[3])/o),d=l[0]+Math.ceil((i/2+l[2])/o),f=l[1]+Math.ceil((n/2+l[3])/o);return[s,g,d,f,e]},initVectorEnvOnce:function(){if(!this._initVectorEnv){this._initVectorEnv=!0;var t=localStorage,e=this.Config.vctMetaKey;if(!t.getItem(e)){var i=this.getVectorVersionInfo(!0),n='{"v":"'+i+'","vcts":[]}';t.setItem(e,n)}var o=this.Config.vctMeta=JSON.parse(t.getItem(e));if(o){var i=o.v,a=o.vcts,r=this.getVectorVersionInfo(!0);if(i!=r){try{for(var c=0,v=a.length;v>c;c++)t.removeItem(a[c])}catch(l){}o.v=r,a.length=0}var s=this.Config.vctMaxNum,g=this.Config.vctDelNum;if(a.length>=s){var d=a.splice(0,g);try{for(var c=0,v=d.length;v>c;c++)t.removeItem(d[c])}catch(l){}}try{t.setItem(e,JSON.stringify(o))}catch(l){}}}},loadVectorTiles:function(t){for(var e=t[0],i=t[1],n=t[2],o=t[3],a=t[4],r=e;n>r;r++)for(var c=i;o>c;c++)this.loadVectorData(r,c,a)},loadVectorData:function(t,e,i){for(var n=this,o=n.Config.vectorURLs,a=n.getVectorVersionInfo(),r=a.ver,c=a.udt,v=(t+e)%o.length,l=o[v],s="_"+parseInt(t+""+e+i).toString(36),g="vct"+s,d=localStorage,f=0,m=d.length;m>f;f++){var h=d.key(f);if(h==g)return}l+="qt=lgvd&layers=bg,df&x="+t+"&y="+e+"&z="+i+"&styles=pl&f=mwebapp&v="+r+"&udt="+c+"&fn=window."+s,window[s]=function(t){var e=t.content;if(e){var i=e.bg||[],o=e.df||[],a=i.concat(o),r=JSON.stringify(a);try{var c=n.Config.vctMeta,v=n.Config.vctMetaKey;c&&c.vcts.length<n.Config.vctMaxNum&&(c.vcts.push(g),localStorage.setItem(v,JSON.stringify(c)),localStorage.setItem(g,r))}catch(l){}}delete window[s]},n.request(l)},getVectorVersionInfo:function(t){var e="undefined"!=typeof TVC?TVC.api_for_mobile.vector:{},i=e.version?e.version:"001",n=e.updateDate?e.updateDate:"20130501";return t===!0?parseInt(n+i).toString(36):{ver:i,udt:n}},request:function(t){var e=document.createElement("script");e.src=t,e.addEventListener&&e.addEventListener("load",function(t){var e=t.target;e.parentNode.removeChild(e)},!1),document.getElementsByTagName("head")[0].appendChild(e),e=null},loadRasterTiles:function(t){for(var e=t[0],i=t[1],n=t[2],o=t[3],a=t[4],r=this.Config.rasterURLs,c="undefined"!=typeof TVC?TVC.webapp.lower_normal:{},v=c.version?c.version:"014",l=(c.updateDate?c.updateDate:"20130501",e);n>l;l++)for(var s=i;o>s;s++){var g=(l+s)%r.length,d=r[g];d+="u=x="+l+";y="+s+";z="+a+";v="+v+";type=web&fm=42&f=webapp&format_add=.jpg";var f=new Image;f.src=d}}};i.exports=n});