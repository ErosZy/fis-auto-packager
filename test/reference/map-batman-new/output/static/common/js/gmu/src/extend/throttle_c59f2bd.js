define("common:static/js/gmu/src/extend/throttle.js",function(){!function(t){t.extend(t,{throttle:function(o,n,e){function i(){function t(){r=Date.now(),n.apply(c,f)}function i(){u=void 0}var c=this,d=Date.now()-r,f=arguments;e&&!u&&t(),u&&clearTimeout(u),void 0===e&&d>o?t():u=setTimeout(e?i:t,void 0===e?o-d:o)}var u,r=0;return"function"!=typeof n&&(e=n,n=o,o=250),i._zid=n._zid=n._zid||t.proxy(n)._zid,i},debounce:function(o,n,e){return void 0===n?t.throttle(250,o,!1):t.throttle(o,n,void 0===e?!1:e!==!1)}})}(Zepto)});