define("common:widget/popup/popup.js",function(e,t,o){o.exports={_defaultOptions:{autoCloseTime:2e3,isTouchHide:!1},_$el:null,_autoCloseTimeout:null,_create:function(e){var t,o;e.layer&&(o=$("<div/>").addClass("common-widget-popup-layer").appendTo(document.body)),t=$("<div></div>").addClass("common-widget-popup").text(e.text||"").hide().appendTo(document.body),this._layout(t),this._$el=t,this._$layer=o},_layout:function(e){var t,o;"none"===e.css("display")&&(o=e.css("visibility"),e.css({visibility:"visibile"}).show()),t=e.offset(),e.css({left:(innerWidth-t.width)/2,top:(innerHeight-t.height)/2,visibility:o})},open:function(e){var t=this;e=this._options=$.extend({},this._defaultOptions,"string"==typeof e?{text:e}:e),this._$el?(this._$el.text(e.text),this._layout(this._$el)):this._create(e),this._$el.show(),e.autoCloseTime&&(clearTimeout(this._autoCloseTimeout),this._autoCloseTimeout=setTimeout($.proxy(this.close,this),e.autoCloseTime)),e.isTouchHide?(this._$el.on("touchend",function(e){e.stopPropagation(),$("#bmap_pop_cover").hide(),t.close(),this._boxTouchHandle=arguments.callee,this._$el.off("touchend",arguments.callee)}),$(document.body).on("touchend",function(e){e.stopPropagation(),$("#bmap_pop_cover").hide(),t.close(),this._docTouchHandle=arguments.callee,$(document.body).off("touchend",arguments.callee)})):(this._boxTouchHandle&&this._$el.off("touchend",this._boxTouchHandle),this._docTouchHandle&&$(document.body).off("touchend",this._docTouchHandle)),listener.on("common","sizechange",function(){setTimeout(function(){t.setPos()},1e3)})},close:function(){var e;this._$layer&&(this._$layer.remove(),this._$layer=null),this._$el&&(this._$el.remove(),this._$el=null,$.isFunction(e=this._options.onClose)&&e.call(this),this._autoCloseTimeout=null)},setPos:function(){if(this._$el){var e=this._$el.offset(),t=(window.innerWidth-e.width)/2,o=(window.innerHeight-e.height)/2+window.scrollY;this._$el.css({left:t,top:o})}}}});