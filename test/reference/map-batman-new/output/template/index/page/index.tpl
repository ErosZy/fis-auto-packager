{%* 首页 *%}
{%extends file="common/page/layout.tpl"%} 
{%block name="js"%}
<style type="text/css">.index-page-nearby-hd{margin:35px 0 6px;font-size:16px;padding-left:14px;color:#575757;display:none}</style>
<script type="text/javascript">var EventRecorder=function(e,t){var n={click:!0},r={MouseEvent:"initMouseEvent",MouseEvents:"initMouseEvent"};n={click:!1,touchstart:!0,touchmove:!0,touchend:!0};var i,c={add:function(e,r){var i;e=e||t;for(i in n)n[i]&&e.addEventListener(i,r,!1)},remove:function(e,r){var i;e=e||t;for(i in n)n[i]&&e.removeEventListener(i,r,!1)},execute:function(e,t){if(e){var r=c.simulate(e.event);"function"==typeof n[r.type]&&n[r.type](r),"function"==typeof t&&t()}},simulate:function(e){var t=this.create(e);return this.dispatch(e.target,t),t},create:function(n){var i=n.constructor.name,c=t.createEvent(i);return r[i]?(c[r[i]](n.type,n.bubbles,n.cancelable,e,n.detail,n.screenX,n.screenY,n.clientX,n.clientY,n.altKey,n.shiftKey,n.metaKey,n.button,n.relatedTarget),c):void 0},dispatch:function(e,t){e&&e.dispatchEvent(t)},get:function(e){return t.getElementById(e)}},o=0,a=1,s=2;return i=function(e){this.elem=e||t,this.lastEvent=null,this.status=s,this.captureListener=null},i.prototype.record=function(){var e=this,t=function(t){var n={event:t||window.event,context:window,time:Date.now()},r=window.userClickTime||{};e.matchTarget(n)?(("record"!==r.type||"number"!=typeof r.time)&&(window.userClickTime={time:Date.now(),type:"record"}),e.lastEvent=n):"se-input-poi"==n.event.target.id&&(window.currInputFocused=!0)},n={},r=function(e){switch(e.type){case"touchstart":n.x1=e.touches[0].pageX,n.y1=e.touches[0].pageY;break;case"touchmove":n.x2=e.touches[0].pageX,n.y2=e.touches[0].pageY;break;case"touchend":if(!n.x2&&!n.y2||n.x2&&Math.abs(n.x1-n.x2)<30||n.y2&&Math.abs(n.y1-n.y2)<30){n={};var r=e.changedTouches[0],i={type:"click",bubbles:!0,cancelable:!0,detail:1,screenX:r.screenX,screenY:r.screenY,clientX:r.clientX,clientY:r.clientY,altKey:!1,shiftKey:!1,metaKey:!1,button:0,target:e.target,relatedTarget:e.target,constructor:{name:"MouseEvent"}};t(i)}break;case"click":t(e)}};this.status=o,c.add(this.elem,r),this.captureListener=r},i.prototype.play=function(){this.status=a,this.execute(this.lastEvent,a)},i.prototype.stop=function(){this.status=s,this.captureListener&&(c.remove(this.elem,this.captureListener),this.captureListener=null)},i.prototype.execute=function(e,t){if(!e)return this.stop(),void 0;if(this.matchTarget(e)){t===this.status&&c.execute(e,function(){})}},i.prototype.matchTarget=function(e){function n(e){return"a"===e.tagName.toLowerCase()||"jump"==e.getAttribute("jsaction")||e.hasAttribute("data-href")||"se-btn"==e.id&&c.get("se-input-poi")&&/[^\s]/.test(c.get("se-input-poi").value)}var r=e.event.target,i=t.body;do{if(n(r))return!0;r=r.parentNode}while(r&&r!=i);return!1},i}(window,document);if(window.EventRecorder){var eventRecorder=new window.EventRecorder(document.body);eventRecorder.record()}</script>
{%/block%}
{%block name="cover"%}
{%if $data.isShowCover == "true"%}
{%widget name="common:widget/cover/cover.tpl" pagename="index" netype="{%$wise_info.netype|f_escape_xml%}"%}
{%/if%}
{%/block%}
{%block name="header"%}
{%widget name="common:widget/header/header.tpl"%}
{%/block%}
{%block name="main"%}
{%widget name="index:widget/tabgroup/tabgroup.tpl"%}
{%widget name="index:widget/searchbox/searchbox.tpl"%}
{%if ($page_config.topbanner == 1)%}
{%widget name="common:widget/topbanner/topbanner.tpl"%}
{%/if%}
{%widget name="index:widget/nearby/nearby.tpl" pagename="index" %}
{%widget name="index:widget/thumbnail/thumbnail.tpl" pagename="index"%}
{%widget name="index:widget/addestop/addestop.tpl" pagename="index"%}
<script type="text/javascript">
        PDC && PDC.first_screen && PDC.first_screen();
    </script>
{%script%}
        (require("index:widget/helper/revert.js")).init();
        (require("common:widget/login/login.js")).checkLogin();
    {%/script%}
{%widget name="index:widget/surface/surface.tpl" pagename="index"%}
{%require name='index:page/index.tpl'%}{%/block%}