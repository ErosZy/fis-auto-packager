define("common:static/js/gmu/src/widget/slider/$touch.js",function(){!function(e,t,n){var o,i,s,h,c={touchstart:"_onStart",touchmove:"_onMove",touchend:"_onEnd",touchcancel:"_onEnd",click:"_onClick"};t.extend(e.Slider.options,{stopPropagation:!1,disableScroll:!1}),e.Slider.register("touch",{_init:function(){var e=this,t=e.getEl();e._handler=function(t){return e._options.stopPropagation&&t.stopPropagation(),c[t.type]&&e[c[t.type]].call(e,t)},e.on("ready",function(){t.on("touchstart"+e.eventNs,e._handler),e._container.on("click"+e.eventNs,e._handler)})},_onClick:function(){return!h},_onStart:function(e){if(e.touches.length>1)return!1;var t,c=this,a=e.touches[0],l=c._options,r=c.eventNs;i={x:a.pageX,y:a.pageY,time:+new Date},s={},h=!1,o=n,t=l.viewNum||1,c._move(l.loop?c._circle(c.index-t):c.index-t,-c.width,0,!0),c._move(l.loop?c._circle(c.index+t):c.index+t,c.width,0,!0),c.$el.on("touchmove"+r+" touchend"+r+" touchcancel"+r,c._handler)},_onMove:function(e){if(e.touches.length>1||e.scale&&1!==e.scale)return!1;var t,n,c,a,l=this._options,r=l.viewNum||1,d=e.touches[0],u=this.index;if(l.disableScroll&&e.preventDefault(),s.x=d.pageX-i.x,s.y=d.pageY-i.y,"undefined"==typeof o&&(o=Math.abs(s.x)<Math.abs(s.y)),!o){for(e.preventDefault(),l.loop||(s.x/=!u&&s.x>0||u===this._items.length-1&&s.x<0?Math.abs(s.x)/this.width+1:1),a=this._slidePos,t=u-r,n=u+2*r;n>t;t++)c=l.loop?this._circle(t):t,this._translate(c,s.x+a[c],0);h=!0}},_onEnd:function(){if(this.$el.off("touchmove"+this.eventNs+" touchend"+this.eventNs+" touchcancel"+this.eventNs,this._handler),h){var e,t,n,o,c,a=this,l=a._options,r=l.viewNum||1,d=a.index,u=a._slidePos,_=+new Date-i.time,p=Math.abs(s.x),v=!l.loop&&(!d&&s.x>0||d===u.length-r&&s.x<0),f=s.x>0?1:-1;if(250>_?(e=p/_,t=Math.min(Math.round(1.2*e*r),r)):t=Math.round(p/(a.perWidth||a.width)),t&&!v)a._slide(d,t,f,a.width,l.speed,l,!0),r>1&&_>=250&&Math.ceil(p/a.perWidth)!==t&&(a.index<d?a._move(a.index-1,-a.perWidth,l.speed):a._move(a.index+r,a.width,l.speed));else for(n=d-r,o=d+2*r;o>n;n++)c=l.loop?a._circle(n):n,a._translate(c,u[c],l.speed)}}})}(gmu,gmu.$)});