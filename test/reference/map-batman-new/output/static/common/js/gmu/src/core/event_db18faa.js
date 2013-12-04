define("common:static/js/gmu/src/core/event.js",function(t){t("common:static/js/gmu/src/core/gmu.js"),function(t,n){function e(t,n,e){(t||"").split(c).forEach(function(t){e(t,n)})}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function s(t){var n=(""+t).split(".");return{e:n[0],ns:n.slice(1).sort().join(" ")}}function r(t,n,e,r){var o,u;return u=s(n),u.ns&&(o=i(u.ns)),t.filter(function(t){return!(!t||u.e&&t.e!==u.e||u.ns&&!o.test(t.ns)||e&&t.cb!==e&&t.cb._cb!==e||r&&t.ctx!==r)})}function o(t,e){return this instanceof o?(e&&n.extend(this,e),this.type=t,this):new o(t,e)}var u=[].slice,c=/\s+/,f=function(){return!1},a=function(){return!0};o.prototype={isDefaultPrevented:f,isPropagationStopped:f,preventDefault:function(){this.isDefaultPrevented=a},stopPropagation:function(){this.isPropagationStopped=a}},t.event={on:function(t,n,i){var r,o=this;return n?(r=this._events||(this._events=[]),e(t,n,function(t,n){var e=s(t);e.cb=n,e.ctx=i,e.ctx2=i||o,e.id=r.length,r.push(e)}),this):this},one:function(t,n,i){var s=this;return n?(e(t,n,function(t,n){var e=function(){return s.off(t,e),n.apply(i||s,arguments)};e._cb=n,s.on(t,e,i)}),this):this},off:function(t,n,i){var s=this._events;return s?t||n||i?(e(t,n,function(t,n){r(s,t,n,i).forEach(function(t){delete s[t.id]})}),this):(this._events=[],this):this},trigger:function(t){var n,e,i,s,c,f=-1;if(!this._events||!t)return this;if("string"==typeof t&&(t=new o(t)),n=u.call(arguments,1),t.args=n,n.unshift(t),e=r(this._events,t.type))for(s=e.length;++f<s;)if((i=t.isPropagationStopped())||!1===(c=e[f]).cb.apply(c.ctx2,n)){i||(t.stopPropagation(),t.preventDefault());break}return this}},t.Event=o}(gmu,gmu.$)});