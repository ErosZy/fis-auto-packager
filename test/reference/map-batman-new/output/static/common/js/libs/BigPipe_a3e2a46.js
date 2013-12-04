var BigPipe=function(){function parseJSON(json){return window.JSON?JSON.parse(json):eval("("+json+")")}function ajax(e,t,r){var n=new(window.XMLHttpRequest||ActiveXObject)("Microsoft.XMLHTTP");n.onreadystatechange=function(){4==this.readyState&&t(this.responseText)},n.open(r?"POST":"GET",e+"&t="+~~(1e6*Math.random()),!0),r&&n.setRequestHeader("Content-type","application/x-www-form-urlencoded"),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(r)}function getCommentById(e){var t=document.getElementById(e);if(!t)return"";var r=t.firstChild.nodeValue;return r=r.substring(1,r.length-1).replace(/\\([\s\S]|$)/g,"$1"),t.parentNode.removeChild(t),r}function renderPagelet(e,t,r){if(!(e.id in r)){r[e.id]=!0,e.parent_id&&renderPagelet(t[e.parent_id],t,r);var n=document.getElementById(e.id);n||(n=document.createElement("div"),n.id=e.id,container?container.appendChild(n):document.body.appendChild(n)),n.innerHTML=e.html||getCommentById(e.html_id)}}function render(e){var t,r=pagelets.length,n={},a={},e=e||{};for(t=0;r>t;t++){var o=pagelets[t];n[o.id]=o}for(t=0;r>t;t++)renderPagelet(pagelets[t],n,a);e.trigger===!0&&trigger("pagerendercomplete",{url:pageUrl,resource:resource})}function process(e,t){function r(){var r=getNeedLoad(e.js);if(e.style){var n=document.createElement("style");n.innerHTML=e.style,document.getElementsByTagName("head")[0].appendChild(n)}t(),r?LazyLoad.js(r,function(){recordLoaded(r),e.script&&window.eval(e.script),trigger("onpageloaded")}):(e.script&&window.eval(e.script),trigger("onpageloaded"))}e.async&&require.resourceMap(e.async);var n=getNeedLoad(e.css);n?LazyLoad.css(n.reverse(),function(){recordLoaded(n),r()}):r()}function getNeedLoad(e){var t=[];if("string"==typeof e)t=[e];else if("[object Array]"===Object.prototype.toString.call(e))for(var r=0;r<e.length;r++)loadedResource[e[r]]!==LOADED&&t.push(e[r]);return 0===t.length&&(t=null),t}function recordLoaded(e){var t=e;"string"==typeof t&&(t=[t]);for(var r=0;r<t.length;r++)loadedResource[e[r]]=LOADED}function register(e){process(e,function(){render({trigger:!0}),"function"==typeof onReady&&onReady()})}function fetch(e,t,r,n){var a,o=location.href,r=r||{},i={};containerId=t;var c=function(r,a){if(o===location.href&&t==containerId){pageUrl=e;var i=parseJSON(r);resource=i,trigger("pagearrived",a),onPagelets(i,t,n)}};isCacheAvailable(e)&&r.cache!==!1?(a=getCachedResource(e),i.initiator=initiatorType.FROM_CACHE,c(a,i),statRecord(e)):ajax(e,function(t){i.initiator=initiatorType.QUICKLING,addResourceToCache(e,t),c(t,i)})}function refresh(e,t,r,n){fetch(e,t,r,n)}function asyncLoad(e,t){e instanceof Array||(e=[e]);var r,n=[],a=location.href;for(r=e.length-1;r>=0;r--){var o=e[r].id;if(!o)throw Error("[BigPipe] missing pagelet id");n.push("pagelets[]="+o)}t=t?"&"+t:"";var i=location.href.split("#")[0]+"&"+n.join("&")+"&force_mode=1&is_widget=true"+t;ajax(i,function(e){if(a===location.href){var t=parseJSON(e);resource=t,pageUrl=i,pagelets=t.pagelets,process(t.resource_map,function(){render()})}})}function statRecord(e){if("string"==typeof e){var t=-1===e.indexOf("?")?"/?":"&";e=e+t+"pagecache=1",ajax(e,function(){})}}function addResourceToCache(e,t){resourceCache[e]={data:t,time:Date.now()}}function getCachedResource(e){return resourceCache[e]?resourceCache[e].data:void 0}function isCacheAvailable(e){return!!resourceCache[e]&&Date.now()-resourceCache[e].time<=cacheMaxTime}function onPageletArrived(e){pagelets.push(e)}function onPagelets(e,t,r){e.title&&(document.title=e.title),container=document.getElementById(t),container.innerHTML="",pagelets=e.pagelets,process(e.resource_map,function(){r&&r(),render({trigger:!0})})}function onPageReady(e){onReady=e,trigger("pageready",pagelets)}function onPageChange(e){fetch(location.pathname+(location.search?location.search+"&":"?")+"pagelets="+e)}function trigger(e){var t=events[e];if(t)for(var r=SLICE.call(arguments,1),n=0,a=t.length;a>n;n++){var o=t[n];if(o.f.apply(o.o,r)===!1)break}}function on(e,t,r){var n=events[e]||(events[e]=[]);n.push({f:t,o:r})}var pagelets=[],loadedResource={},container,containerId,pageUrl=location.pathname+(location.search?"?"+location.search:""),resource,resourceCache={},onReady,initiatorType={LANDING:0,QUICKLING:1,FROM_CACHE:2},LOADED=1,cacheMaxTime=3e5,SLICE=[].slice,events={};return{asyncLoad:asyncLoad,register:register,refresh:refresh,onPageReady:onPageReady,onPageChange:onPageChange,onPageletArrived:onPageletArrived,onPagelets:onPagelets,on:on,trigger:trigger}}();