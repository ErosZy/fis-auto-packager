<!DOCTYPE HTML>
{%html framework="common:static/js/mod.js"  fid="map_batman" sampleRate="1"%}
{%cdn sync="/mobile/simple" async="/mobile/simple"%}
{%head%}
<script type="text/javascript">var c_t0=+new Date,c_srt0={%json_encode($c_srt0)%}||0;</script>
<meta charset="utf-8" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" media="(device-height: 568px)" />
<meta name="format-detection" content="telephone=no" searchtype="map">
<meta name="apple-mobile-web-app-capable" content="yes"/><meta name="apple-mobile-web-app-status-bar-style" content="black" /><link rel="apple-touch-startup-image"   href="/static/common/images/startup_320_460_96280c8.jpg" />
<link rel="apple-touch-icon-precomposed" href="/static/common/images/logo_0800ec5.png"/><title>百度地图</title>
<script type="text/javascript">!function(){window.PDC={_timing:{},_opt:{sample:.01},_analyzer:{loaded:!1,url:"http://static.tieba.baidu.com/tb/pms/wpo.mpda.js?v=2.6",callbacks:[]},_render_start:+new Date,extend:function(t,n){for(property in t)n[property]=t[property];return n},metadata:function(){for(var t=this._opt,n={env:{user:1==t.is_login?1:0,product_id:t.product_id,page_id:PDC._is_sample(t.sample)?t.page_id:0},render_start:this._render_start,timing:this._timing},e=[],i=t.special_pages||[],a=0;a<i.length;a++)PDC._is_sample(i[a].sample)&&e.push(i[a].id);return e.length>0&&(n.env.special_id="["+e.join(",")+"]"),n},init:function(t){this.extend(t,this._opt)},mark:function(t,n){this._timing[t]=n||+new Date},view_start:function(){this.mark("vt")},tti:function(){this.mark("tti")},page_ready:function(){this.mark("fvt")},first_screen:function(){var t=document.getElementsByTagName("img"),n=document.getElementsByTagName("IFRAME"),e=+new Date,i=[],a=this;this._setFS=function(){for(var t=a._opt.fsHeight||document.documentElement.clientHeight,n=0;n<i.length;n++){var r=i[n],o=r.img,s=r.time,c=o.offsetTop||0;c>0&&t>c&&(e=s>e?s:e)}a._timing.fs=e};for(var r=function(){this.removeEventListener&&this.removeEventListener("load",r,!1),i.push({img:this,time:+new Date})},o=0;o<t.length;o++){var s=t[o];s.addEventListener&&!s.complete&&s.addEventListener("load",r,!1)}for(var o=0,c=n.length;c>o;o++){var d=n[o];d.addEventListener("load",r,!1)}}}}(),function(){function t(t,n,e){if(t.length===+t.length){for(var i=0,a=t.length;a>i;i++)if(n.call(e,i,t[i],t)===!1)return}else for(var r in t)if(t.hasOwnProperty(r)&&n.call(e,r,t[r],t)===!1)return}var n,e=[],i={push:function(t){e.push(t),window.localStorage&&window.JSON&&localStorage.setItem("WPO_NR",JSON.stringify(e))},get:function(t){var n,i;return window.localStorage&&window.JSON?(i=localStorage.getItem("WPO_NR"),n=i?JSON.parse(i):[],t&&localStorage.removeItem("WPO_NR")):n=e,t&&(e=[]),n}},a={},r={},o={PDC:{_timing:{},_apps:{},mark:function(t,n){this._timing[t]=n||Date.now()},head:function(){this.mark("ht")},dom_ready:function(){this.mark("drt")},createApp:function(t){var n=this._apps["app_"+t];return n?n:this.createInstance(t)},init:function(t){var e=navigator.connection||navigator.mozConnection||navigator.webkitConnection||{type:0};a={p:t.product_id,is_sample:Math.random()<=(t.sample||.01),max:t.max||5,mnt:t.mnt||e.type},r={p:t.product_id,mnt:a.mnt,b:50},window.localStorage&&window.JSON&&window.addEventListener&&(n=i.get(!0),window.addEventListener("load",function(){s.send(n)},!1))},createInstance:function(t){var n=new c(t);return this._apps["app_"+t]=n,n}}};window.localStorage&&window.JSON||!document.attachEvent||window.attachEvent("onbeforeunload",function(){s.send()});var s={send:function(n){var e,a=[],o=[],s=n||i.get(!0);if(s.length>0){t(s,function(i,r){var o=[];t(r.timing,function(t,n){o.push('"'+t+'":'+n)}),a.push('{"t":{'+o.join(",")+'},"a":'+r.appId+"}"),!e&&n&&r.start&&(e=r.start)}),t(r,function(t,n){o.push(t+"="+n)}),o.push("d=["+a.join(",")+"]"),e?o.push("_st="+e):o.push("_t="+ +new Date);var c=new Image;c.src="http://static.tieba.baidu.com/tb/pms/img/st.gif?"+o.join("&"),window["___pms_img_"+1*new Date]=c}}};o.PDC.send=s.send;var c=function(t){this.appId=t,this.timing={},this.start=+new Date};c.prototype={mark:function(t,n){var e=n?n-this.start:new Date-this.start;this.timing[t]=e},start_event:function(t){this.start=t||+new Date},start_send:function(){this.mark("sts")},transfer_time:function(){this.mark("tt")},view_time:function(t){this.mark("vt",t)},ready:function(){a.is_sample&&(i.push(this),i.get().length>=a.max&&s.send())},error:function(){}},window.SDC=o.PDC}();</script>
<script type="text/javascript">
            // 当前路由信息{object}
            window._APP_HASH = {
                module : {%json_encode($module)%},
                action : {%json_encode($action)%},
                page : {%json_encode($page)%},
                third_party : {%json_encode($third_party)%} || ''
            };
            /**
             * 速度适配返回网络信息{object}
             * _WISE_INFO: {
             *      netype: {string} 网络类型 1:wifi 2:2g 3:3g
             *      netspeed: {string} 网速 
             * }    
             */
            window._WISE_INFO = {%json_encode($wise_info)%} || {};
            // 服务端处理时间 {number}
            window._SERVER_TIME = {%json_encode($server_time)%} || 0;
            // 地图bounds {string}
            window._MAP_BOUNDS = {%json_encode($bounds)%} || '';
        </script>
<style type="text/css">html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;outline:0}div{-webkit-tap-highlight-color:rgba(0,0,0,0)}input{outline:0;font-size:14px}html,body,form,fieldset,p,div,h1,h2,h3,h4,h5,h6{-webkit-text-size-adjust:none}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}a,input,select,button{font-family:'Microsoft YaHei',arial,helvetica,sans-serif}a{text-decoration:none}body{font-family:'Microsoft YaHei',arial,helvetica,sans-serif;-webkit-text-size-adjust:none;-webkit-user-select:none;font-size:14px}ol,ul{list-style:none}blockquote,q{quotes:none}img,table{border:0}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}ins{text-decoration:none}del{text-decoration:line-through}select{-webkit-appearance:button;border:0}table{border-collapse:collapse;border-spacing:0}.clearfix:after{content:'\0020';display:block;height:0;clear:both}.clearfix{*zoom:1}</style>
<style type="text/css">body{background:#f2f2f2!important}a{color:#3b3b3b;outline:0}#monitor,#stat-monitor{display:none;width:0;height:0;overflow:hidden}.base-btn{display:inline-block}.bg-white{background:#fff}.bg-white #main{background:#fff}.anibox{height:100%;width:100%}#header-ani-box.need-3d{-webkit-transform:translate3d(0,0,0)}#menu-ani-box{}.telbox{position:fixed;top:50%;margin-top:-63px;left:50%;margin-left:-137px;display:block;width:274px;height:126px;border:2px solid #B4B6C3;-webkit-border-radius:10px;background:-webkit-gradient(radial,137 -645,675,137 -645,680,from(#5E657F),to(#000F38),color-stop(100%,#4D5874));background-color:#000F38;z-index:10000}.telbox .t{height:16px;background:-webkit-gradient(linear,50% 0,50% 100%,from(#7D859C),to(#5E657F));-webkit-border-top-left-radius:10px;-webkit-border-top-right-radius:10px}.telbox .c{height:100%;-webkit-border-bottom-left-radius:10px;-webkit-border-bottom-right-radius:10px}.telbox .t1{font-size:18px;text-align:center;color:#FFF;margin-top:10px}.telbox .bt{width:126px;height:42px;margin-top:28px;-webkit-border-radius:3px;-webkit-box-sizing:border-box;font-size:18px;color:#fff;border:0}.telbox .qx{float:left;margin-left:5px;border-top:1px solid #7D849E;-webkit-box-shadow:0 1px 1px #2D3C59;background:-webkit-gradient(linear,left top,left bottom,from(#5C677D),to(#0A183D),color-stop(0.5,#273154),color-stop(0.5,#021037))}.telbox .qd{float:right;margin-right:5px;border-top:1px solid #C7D1D3;-webkit-box-shadow:0 2px 1px #2D3A5C;background:-webkit-gradient(linear,left top,left bottom,from(#989BAE),to(#4F5974),color-stop(0.5,#646C81),color-stop(0.5,#3B4664))}.telbox a{text-decoration:none}.downbox{position:fixed;top:50%;margin-top:-63px;z-index:10000;left:50%;margin-left:-137px;display:block;width:274px;height:126px;border:2px solid #4A4A4A;background:#4A4A4A;opacity:.95;background-color:#4A4A4A;-webkit-border-radius:5px}.downbox .t{height:16px;background-color:#4A4A4A}.downbox .c{height:100%;-webkit-border-bottom-left-radius:10px;-webkit-border-bottom-right-radius:10px}.downbox .t1{font-size:15px;text-align:left;color:#FFF;margin-top:5px;margin-left:16px;margin-right:7px;margin-bottom:3px}.downbox .bt{width:110px;height:37px;margin-top:9px;-webkit-border-radius:3px;-webkit-box-sizing:border-box;font-size:12px;color:#fff;border:0}.downbox .qx{float:left;margin-left:18px;border-top:1px solid #68B3DE;background-color:#68B3DE}.downbox .qd{float:right;margin-right:20px;border-top:1px solid #68B3DE;background-color:#68B3DE}.downbox a{text-decoration:none}em.to{width:12px;height:16px}em.to.open{background-position:-343px 50%}em.n{width:18px;text-align:left}em.no{width:1em;height:1.2em;position:absolute;margin-left:-2em}.list.s3 li{padding:6px 25px 6px 34px}.list.s4{text-align:center;padding:5px;font-size:14px}.list.s3 .s6{padding:6px 10px;font-size:24px}.list.s8 li{padding-left:40px;border-bottom:1px solid #e9e9e9;background-color:#f6f9fb}.list.s8 li dl{padding:.75em 44px .75em 0;background-color:#fff}.list.s8 li:last-child{border-bottom:0}.list.s8 .bs{position:absolute;height:15px;width:14px;margin:11px 0 0 -27px;background-position:0 -33px}.list.stop_list li{padding-left:2.78em}.list .g{color:#666}em{font-style:normal;display:inline-block;text-align:center}.list .gt{width:10px;height:10px;background:url(../ui/images/linelist.png) no-repeat 0 -71px;background-size:15px 81px;margin-right:5px}.star-box{display:inline-block;height:15px;width:75px;background:url(/static/common/images/new_star_a9ede79.png) repeat-x 0 0;background-size:15px 33px;font-size:14px;vertical-align:middle}.star-box .star-scroe{display:inline-block;height:15px;background:url(/static/common/images/new_star_a9ede79.png) repeat-x 0 -19px;background-size:15px 33px}.rotation-keyframes from{-webkit-transform:scale(0.32) rotate(0);-moz-transform:scale(0.32) rotate(0)}.rotation-keyframes to{-webkit-transform:scale(0.32) rotate(360deg)}@-webkit-keyframes rotation{from{-webkit-transform:scale(0.32) rotate(0);-moz-transform:scale(0.32) rotate(0)}to{-webkit-transform:scale(0.32) rotate(360deg)}}@-moz-keyframes rotation{from{-webkit-transform:scale(0.32) rotate(0)}to{-webkit-transform:scale(0.32) rotate(360deg)}}@-o-keyframes rotation{from{-webkit-transform:scale(0.32) rotate(0)}to{-webkit-transform:scale(0.32) rotate(360deg)}}@keyframes rotation{from{-webkit-transform:scale(0.32) rotate(0)}to{-webkit-transform:scale(0.32) rotate(360deg)}}.init-loadingbox{position:absolute;top:50%;left:50%;z-index:9999;height:100%;margin:-55px 0 0 -55px}.page-loading{display:-webkit-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-box-pack:start;-webkit-box-align:center;background:#f2f2f2;position:absolute;top:0;left:0;z-index:9000;height:100%;width:100%;-webkit-transform-origin:0 0;opacity:1;-webkit-transform:scale(1,1)}.init-loadingbox div,.page-loading div{width:100px;height:100px;-webkit-box-align:center;-moz-box-align:center;box-align:center;-webkit-animation:rotation 1.5s linear infinite;margin:0 auto}.init-loadingbox div span,.page-loading div span{width:16px;height:16px;-webkit-border-radius:30px;background:#a6a6a6;position:absolute;left:42px;top:42px}.init-loadingbox .dot-1,.page-loading .dot-1{-webkit-transform:rotate(0deg) translate(0,-42px);opacity:.3}.init-loadingbox .dot-2,.page-loading .dot-2{-webkit-transform:rotate(45deg) translate(0,-42px);opacity:.4}.init-loadingbox .dot-3,.page-loading .dot-3{-webkit-transform:rotate(90deg) translate(0,-42px);opacity:.5}.init-loadingbox .dot-4,.page-loading .dot-4{-webkit-transform:rotate(135deg) translate(0,-42px);opacity:.6}.init-loadingbox .dot-5,.page-loading .dot-5{-webkit-transform:rotate(180deg) translate(0,-42px);opacity:.7}.init-loadingbox .dot-6,.page-loading .dot-6{-webkit-transform:rotate(225deg) translate(0,-42px);opacity:.8}.init-loadingbox .dot-7,.page-loading .dot-7{-webkit-transform:rotate(270deg) translate(0,-42px);opacity:.9}.init-loadingbox .dot-8,.page-loading .dot-8{-webkit-transform:rotate(315deg) translate(0,-42px);opacity:1}#loading-page{height:100%;width:100%;position:absolute;background:#fff;top:0;left:0}</style>
<style type="text/css">#main{background:#f2f2f2}#pages{height:100%}#wrapper{position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}#page-header{position:relative;z-index:10}#widgets{width:100%;height:0;top:0;left:0;position:absolute}#iscroll-container{background-color:#f2f2f2;position:relative;display:block}</style>
{%require name="common:static/js/libs/zepto.js"%}
{%require name="common:static/js/libs/listener.js"%}
{%require name="common:static/js/libs/lazyload.js"%}
{%require name="common:static/js/libs/BigPipe.js"%}
{%require name="common:static/js/libs/page.js"%}
{%* 引入对应模块的统计json *%}
{%json file="{%$module|f_escape_xml%}/statcode.json" assign="STAT_CODE"%}
{%json file="common/statcode.json" assign="COM_STAT_CODE"%}
{%widget_block pagelet_id="page_data"%}
{%* page数据，这里的数据每次都会被加载（单页和多页） *%}
{%script%}
                STAT_CODE = {%json_encode($STAT_CODE)%} || {};
                if(!STAT_CODE) {
                    throw "STAT_CODE parse error";
                }
            {%/script%}
{%/widget_block%}
{%* 子页面如果不需要发起系统定位，可以配置为 false *%}
{%block name="geo_config"%}
{%$geo_config="{isStartGeo:true}"%}
{%/block%}
{%script%}

            COM_STAT_CODE = {%json_encode($COM_STAT_CODE)%} || {};
            if(!COM_STAT_CODE) {
                throw "COM_STAT_CODE parse error";
            }


            window._DEFAULT_CITY = {%json_encode($initData)%} || {};
            //initGeo的时候，会重置_CURRENT_CITY，但是下面的设置_CURRENT_CITY时机太晚了，所以需要保留这里的设置
            window._CURRENT_CITY = {%json_encode($data.current_city)%};
            window._isPushState = "{%$isPushState|f_escape_js%}" === "true";

            // 性能监控初始化 by jican
            (require('common:widget/monitor/monitor.js')).init();

            appPage.start({
                selector : "a,[data-href]",
                validate : /^\/mobile\/webapp/i,
                pagelets : ["pager","page_data"],
                containerId : "wrapper",
                pushState : window._isPushState,
                layer : "#wrapper"
            });

            //初始化app，包括发起定位，初始化屏幕高度，设置fastclick等
            require('common:widget/initapp/initapp.js').init();

            require('common:widget/geolocation/initgeo.js').init({%$geo_config|f_escape_js%});
            <!-- ios7不用scrollTo -->
            if(!(/OS 7_\d[_\d]* like Mac OS X/i).test(navigator.userAgent)) {
                window.scrollTo(0, 0);
            }
        {%/script%}
<script type="text/javascript">PDC && PDC.mark("ht");</script>
{%/head%}
{%body%}
{%* 封面 *%}
{%block name="cover"%}{%/block%}
<div id="wrapper" {%if ($module == 'third' && ($action == 'transit' || $action == 'weather'))%}
                            class="bg-white"
                        {%/if%}>
{%widget_block pagelet_id="pager"%}
{%* 这里的逻辑每次切页都会被执行 *%}
{%script%}
                    // 保存当前城市，如果城市发生变化，需要重设当前城市
                    window._CURRENT_CITY = {%json_encode($data.current_city)%} || window._CURRENT_CITY;
                   require('common:widget/geolocation/initgeo.js').changeCity();
                    // 由后端返回当前页面的module,action,pagename,third_party
                    window._APP_HASH = {
                        module : {%json_encode($module)%},
                        action : {%json_encode($action)%},
                        page : {%json_encode($page)%},
                        third_party : {%json_encode($third_party)%} || ''
                    };
                    
                    // 重设server_time 和 wise_info, 统计切页时性能
                    window._WISE_INFO = {%json_encode($wise_info)%} || {};
                    window._SERVER_TIME = {%json_encode($server_time)%} || 0;
                    // 地图bounds {string}
                    window._MAP_BOUNDS = {%json_encode($bounds)%} || '';
                {%/script%}{%block name="js"%}{%/block%}
<div id="page-wrapper">
{%* 头部 *%}
{%if ($page_config.header == 1)%}
{%block name="header"%}
{%widget name="common:widget/header/header.tpl"%}
{%/block%}
{%/if%}
{%* 中部 *%}
<div id="main">
{%block name="main"%}{%/block%}
</div>
{%widget name="common:widget/stat/pvstat.tpl"%}
{%block name="footer"%}
{%if !$kehuduan%}{%*增加客户端套壳页面中是否显示footer的逻辑 by zmm*%}
{%widget name="common:widget/bottombanner/bottombanner.tpl"%}
{%widget name="common:widget/footer/footer.tpl"%}
{%widget name="common:widget/backtop/backtop.tpl"%}
{%/if%}
{%/block%}
<div id="monitor" user-data='{"module":{%json_encode($module)%},"action":{%json_encode($action)%},"page":{%json_encode($page)%}}'></div>
</div>{%/widget_block%}
</div>
{%widget name="common:widget/map/map.tpl"%}
<img id="statImg" style="display:none"/>
<script type="text/javascript">!function(){PDC&&PDC.mark("drt");try{var t=_APP_HASH.module,e=_APP_HASH.action,m=_APP_HASH.page;document.getElementById("statImg").src="/mobile/img/t.gif?newmap=1&t="+Date.now()+"&code=common_43&module="+t+"&action="+e+"&page="+m}catch(o){}}();</script>
<style type="text/css">.ui-datepicker{width:100%;line-height:25px}.ui-datepicker-header{color:#545454;text-align:center;padding:3px 0}.ui-datepicker-header a{color:#545454;text-decoration:none;display:inline-block;padding:8px 10px;margin:0 5px;text-align:center;line-height:1;position:relative;bottom:3px}.ui-datepicker-header a.ui-state-hover{background-color:#ccc}.ui-datepicker-header .ui-datepicker-title{text-align:center;font-weight:700;display:inline-block}.ui-datepicker-calendar{width:100%}.ui-datepicker-calendar tbody{background:#c9c9c9}.ui-datepicker-calendar td{text-align:center;color:#000;background:#fafafa;border:1px solid #c9c9c9;font-weight:700}.ui-datepicker-calendar thead tr{border:1px solid #c9c9c9}.ui-datepicker-calendar thead th{padding:10px 0;font-weight:700}.ui-datepicker-calendar a{text-decoration:none;color:#000;display:block}.ui-datepicker-calendar tr.ui-datepicker-gap td{display:none;padding:0;border:0 transparent}.ui-datepicker-calendar tbody td{padding:10px 0}.ui-datepicker-calendar tbody td:first-child{border-left:0 0}.ui-datepicker-calendar td.ui-datepicker-unselectable{background:#f6f6f6;color:#b8b8b8;font-weight:400}.ui-datepicker-calendar td.ui-datepicker-today{background:#FBF9EE}.ui-datepicker-calendar td.ui-datepicker-current-day{background:#e3f1ff;font-weight:700;border-color:#fff}.ui-datepicker-calendar td.ui-state-hover{background:#ccc}.ui-datepicker .ui-datepicker-prev{float:left}.ui-datepicker .ui-datepicker-next{float:right}</style>
<style type="text/css">.fix_gr_mk{background-size:85px 478px}.mkr_trans{-webkit-background-size:85px 478px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.dest_mkr{-webkit-background-size:94px 41px}.navi_mkr{-webkit-background-size:38px 40px}.drv_dest{-webkit-background-size:233px 18px}.bus_direction{-webkit-background-size:17px 347px}.line_step{width:70px;height:35px;background-color:rgba(255,255,255,.8);left:50%!important;bottom:14px!important;margin-left:-35px;z-index:11!important;-webkit-box-shadow:1px 1px 2px rgba(0,0,0,.4)}.line_step div{width:50%;height:100%;-webkit-box-sizing:border-box;display:inline-block;position:relative}.line_step.level_up{bottom:93px!important}.step_pre{border-right:1px solid #ececec}.line_step .disable b{opacity:.5}.nplb{position:absolute;left:.8em;top:-1em;background:#fff;padding:1px 3px;border:1px solid #a7a7a7;color:#666}.events_mrk{-webkit-background-size:26px 173px;background-size:26px 173px}.tf_btn{width:35px;height:35px}.tf_btn .btn_bg{position:absolute;width:35px;height:35px;background:rgba(255,255,255,.8);-webkit-box-shadow:1px 1px 2px rgba(0,0,0,.4);z-index:0}.tf_btn .tf_icon{position:absolute;top:9px;left:12px;display:inline-block;width:12px;height:17px;background:url(/static/common/images/traffic_b2e5dd9.png) no-repeat 0 0;background-size:12px 34px;background-position:0 -17px}.tf_close .tf_icon{background-position:0 -17px}.tf_btn .txt{position:absolute;top:18px;width:100%;text-align:center;font-size:10px;color:#44454D}.tf_on .tf_icon{background-position:0 0;opacity:1}#zoom-btn-container{-webkit-box-shadow:1px 1px 2px rgba(0,0,0,.4);background:rgba(255,255,255,.8)}.bl_btn{background:url(/static/common/images/result_bgs_b6bbaa6.png) 0 0 no-repeat;-webkit-background-size:58px 160px}.zoom_btn{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;-webkit-box-sizing:border-box}.zoom_btn{height:35px;width:35px}.zoom_btn_in{margin-bottom:-1px;border-bottom:1px solid #ececec}.zoom_btn_on{background-color:#eee}.zin{width:16px;height:16px;background:url(/static/common/images/zoom-in_c1f9e3b.png) center center no-repeat;-webkit-background-size:contain}.zout{width:16px;height:6px;background:url(/static/common/images/zoom-out_bd4280c.png) center center no-repeat;-webkit-background-size:contain}.blue_disable .zin{opacity:.53}.blue_disable .zout{opacity:.53}.pad_clear{background:url(/static/common/images/clearbtn_b2e61b4.png) no-repeat 0 0;background-size:16px 33px}.pad_btn_top{position:absolute;height:35px}.pad_btn_top .pad_btn{position:relative;width:37px;height:37px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.pad_btn_top .pad_btn .btn_bg{position:absolute;width:35px;height:35px;-webkit-box-shadow:1px 1px 2px rgba(0,0,0,.4);background-color:#f4f4f3;z-index:0}.pad_btn_top .pad_btn_on .btn_bg{border:1px solid #80b5d9}.pad_btn_top .pad_btn .pad_clear{position:absolute;top:5px;left:11px;display:inline-block;width:16px;height:17px}.pad_btn_top .pad_btn .pad_tf{position:absolute;top:5px;left:16px;display:inline-block;width:15px}.pad_btn_top .pad_btn .txt{position:absolute;top:20px;width:100%;text-align:center;font-size:10px;color:#44454d}.pad_btn_top .pad_clear{background-position:0 0}.clear_btn_false .pad_clear{background-position:0 -17px}.pad_btn_top .clear_btn_false .txt{color:#babab9}.index-loc-pic{background:url(/static/common/images/index_loc_47cb77b.png) no-repeat 0 0;background-size:28px 151px}.map-geo .geo-btn,.map-geo-info{height:35px;width:35px;background:rgba(255,255,255,.8);-webkit-box-shadow:1px 1px 2px rgba(0,0,0,.4)}.map-geo .geo-btn .txt{display:none}.map-geo .geo-btn b{display:inline-block;margin:6px 0 0 6px;height:25px;width:25px;background-position:-4px 1px}.map-geo .geo-fail{}.map-geo .geo-fail b{background-position:-4px 1px}.map-geo .geo-btn.active{background-color:#eee}.map-geo .geo-btn.active b{background-position:-4px 1px}.map-geo-info{width:auto;padding:0 3px 0 8px}.map-geo-info b{font-size:14px!important;line-height:36px!important;font-weight:400}.map-geo-info em{color:#333;background-image:url(/static/common/images/info-arrow_3d67270.png);background-repeat:no-repeat;-webkit-background-size:contain;width:12px;height:12px;vertical-align:middle;margin-left:8px;margin-top:-3px}.menu-ctrl-btn{height:35px;width:35px;-webkit-box-shadow:1px 1px 2px rgba(0,0,0,.4);background:rgba(255,255,255,.8)}.menu-ctrl-btn .menu-ctrl-icon{width:16px;height:16px;background-image:url(/static/common/images/map-menu-icon_c22e5a2.png);background-repeat:no-repeat;-webkit-background-size:contain;margin-left:10px;margin-top:10px}.menu-ctrl-drop{background:rgba(255,255,255,.9);-webkit-box-shadow:1px 1px 2px rgba(0,0,0,.4);color:#333}.menu-ctrl-drop ul li{display:block;width:120px;height:40px;line-height:36px;margin:2px 0;font-size:14px;padding:0 0 0 20px;overflow:hidden;border-bottom:1px solid #ddd}.menu-ctrl-drop ul li:last-child{border-bottom:0}#menu-info-center span{color:#565656}.line_step .step_next b{background:url(/static/common/images/step-next_17ea435.png) no-repeat 0 0;-webkit-background-size:contain;background-position:center}.line_step div b{position:absolute;top:50%;left:50%;height:14px;width:16px;margin:-7px 0 0 -8px;background:url(/static/common/images/step-prev_e6308da.png) no-repeat 0 0;background-size:contain;background-position:center}.iw{width:100%;-webkit-box-sizing:border-box;border:.3em solid transparent;-webkit-background-clip:padding}.iw_rt{position:relative;height:46px;width:212px;-webkit-box-sizing:border-box;display:-webkit-box;-webkit-box-align:center;margin:2px 5px 0 2px;background-color:rgba(255,255,255,.8);-webkit-box-shadow:2px 2px 7px rgba(0,0,0,.4);color:#333}.iw_rt .iw_bg{display:-webkit-box}.iw_bg .iw_poir{-webkit-box-flex:1}.iw_rt:after{content:"";position:absolute;left:50%;bottom:-8px;width:10px;height:8px;margin:0 0 0 -5px;background-image:url(/static/common/images/info-win-ar_1cc0dce.png);background-repeat:no-repeat;background-size:contain}.iw_s{text-align:center;vertical-align:middle;height:100%;-webkit-box-sizing:border-box}.iw_rt .iw_s1{color:#cbcbcb}.iw_rt b{color:#333;font-weight:700}.iw_rt_gr{margin-left:-4px}.iw_busline{margin:32px 0 0 -3px}.iw_busline .iw_cc{text-align:center;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;padding:0 6px}.iw_r{-webkit-box-ordinal-group:3}.iw_r,.iw_l{height:100%;font-size:4.5em;text-align:center;color:#747474;border:0;-webkit-box-sizing:border-box;line-height:.7em;border:1px solid rgba(255,255,255,.2);width:41px}.iw_r{border-style:none none none solid}.iw_l{border-style:none solid none none}.iw_line{height:64px;width:228px;padding:0 11px;line-height:20px}.iw_bustrans .iw_cc{text-align:center;display:block}.iw_bustrans .iw_cc p{color:#ffba31}.iw_c{overflow:hidden;display:-webkit-box;-webkit-box-align:center;-webkit-box-flex:1}.iw_cc{-webkit-box-sizing:border-box;width:100%;border:0}.iw_cc .crl_ar b{line-height:20px}.iw_cc .crl_ar .d-addr{font-weight:400;color:#545454;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:0 3px}.iw_rt.iw_et_dt .iw_bg{display:block}.iw_rt.iw_et_dt{height:auto;width:254px}.iw_et_dt .iw_c{display:block;text-align:left}.iw_et_dt .iw_c .iw-et{text-align:center;margin-top:5px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.iw_et_dt .iw_c .ev-des{margin:5px;background:#eee;color:#333;padding:5px;line-height:22px;min-height:88px;word-break:break-all}.iw-ct{min-width:212px;color:#333;display:-webkit-box;margin:0 0 -8px 0;background-color:rgba(255,255,255,.8);-webkit-box-shadow:2px 2px 7px rgba(0,0,0,.4);-webkit-box-align:center;-webkit-box-sizing:border-box;-webkit-background-clip:padding;position:absolute;line-height:28px;text-align:center;border:0;-webkit-user-select:none}.iw-ct:after{content:"";position:absolute;left:50%;bottom:-8px;width:10px;height:8px;margin:0 0 0 -5px;background-image:url(/static/common/images/info-win-ar_1cc0dce.png);background-repeat:no-repeat;background-size:contain}.iw-c{width:130px;height:100%;line-height:46px;color:#333;border:0;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-box-flex:1;-webkit-box-align:center;-webkit-box-sizing:border-box}.iw-c-title{text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.iw-c-title b,.iw-c-title p{height:20px;line-height:20px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.iw-c-title b{display:block;margin-top:3px}.iw-c-title-pano{padding:0 20px 0 0;margin-right:5px;background:url(/static/common/images/pano_5d9977b.png) no-repeat right center;background-size:20px 28px;-webkit-background-size:20px 28px}.iw-l,.iw-r{display:block;width:41px;height:46px;line-height:.7em;font-size:4.5em;text-align:center;color:#747474;border:1px solid #c6c6c6;-webkit-box-sizing:border-box}.iw-l{background:url(/static/common/images/iw-place_75c10a2.png) no-repeat 50% 50%;-webkit-background-size:36px 34px;border-style:none solid none none}.iw-r{background:url(/static/common/images/iw-route_a13631d.png) no-repeat 50% 50%;-webkit-background-size:36px 34px;border-style:none none none solid}.iw-c-c{min-height:64px;padding:0 11px;line-height:20px;white-space:normal;display:-webkit-box;-webkit-box-align:center;text-align:center}.iw-c-c .iw-c-title{height:28px;text-align:center;margin-top:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.iw-c-c .iw-c-list{padding:5px;text-align:left;line-height:22px;min-height:88px;background:#eee;color:#333;word-break:break-all}.iw-c-c .iw-c-tip{color:#ffba31}#iw_c_4{display:table-cell;text-align:center;width:212px}#iw_c_10{width:254px;display:block;-webkit-box-sizing:border-box;box-sizing:border-box;margin:5px 0;padding:0 5px}.iw-c-10{width:auto}</style>
<style type="text/css">.common-widget-popup{position:fixed;max-width:196px;display:block;padding:11px 27px;background-color:#FFF;border-radius:2px;color:#000;font-size:14px;text-align:center;margin:0 auto;z-index:999;-webkit-box-shadow:1px 1px 2px rgba(0,0,0,.4)}</style>
<style type="text/css">.ui-gotop{position:fixed;display:none;width:50px;height:50px;bottom:10px;right:10px;z-index:999;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0)}.ui-gotop div{margin:5px;width:40px;height:40px;border-radius:2px;-webkit-box-shadow:0 0 5px #9c9c9c;opacity:.9;background:#454545 url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAeCAYAAACmPacqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGfSURBVFhH7ZY9S8NQFEADguAkdBJcBcFV8AcIQsHJqeDUSfAHFJycBEFwEgqurk6uQn+A4OQkBJyEQiFt+pU2bdLruQ4Sq9Ym5iUdDJwQHu/de+5NXhJrMpkUoSE5HppfPSxOLzl6fKRWDysMQ5cLyRv1WCyZIAhsrCRv1MMaj8d7XDznKaP51cP6P0x1gBaXaPG17/tlUznmijsajSqISISzuRamPQmBfboRICRRGCulnWtmvOFwuAUuiWUaxj3ktjMR4k1dQMD+TiQy9trr9daMCvEhWaLyGshvDAaDB+YvGxPyPO+KJBKDGyMy/X7/CBlJQCVVITqxi4yfQERYF/D8FFMRQmSDgA3QwElx2+325p+Ems3mKlU9gaSArfESCenO6Xa7dylIRAupadzYQoicgxigGkvGdd3DTqcjBjmeSwiRHR4236CIED8gz+yfKXbLOpPqTNYFpvl5h/HNWUHgMQOJaJE2xRe+3DIGb0GyptVq3X/aYQicZi0xle/yvTuYHYAsAGWLt6K9ACKCh6MyJ1AHHcgFx3Ea5L54AwbFBiH9RbtaAAAAAElFTkSuQmCC") no-repeat center center;-webkit-background-size:18px 15px}@media all and (min-device-width:768px) and (max-device-width:1024px){.ui-gotop{width:60px;height:60px}.ui-gotop div{width:48px;height:48px;-webkit-background-size:22px 18px}}.ui-suggestion{position:absolute;top:0;left:0;display:none;z-index:9999;font-size:16px;border:1px solid #b1b1b1;border-left:0;border-right:0;background-color:#fff;width:93%;-webkit-box-sizing:border-box}.ui-suggestion ul{list-style:none;background:#fff}.ui-suggestion ul li{border-bottom:1px solid #e7e7e7;height:33px;line-height:33px;position:relative;width:90%;margin:0 auto}.ui-suggestion ul li:last-child{border-bottom:0}.ui-suggestion .ui-suggestion-result{padding:0 10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}.ui-suggestion .ui-suggestion-result font{color:#878787}.ui-suggestion .ui-suggestion-content{position:relative}.ui-suggestion .ui-suggestion-button{border-top:1px solid #e7e7e7;background:#f7f7f7;height:33px;line-height:33px}.ui-suggestion-button span{text-decoration:none;text-align:center;color:#4B4B4B;display:inline-block;font-size:14px;padding:0 10px;cursor:pointer}.query-icon{background:url(/static/common/images/suggestion-icon_5c7d911.png) no-repeat;background-size:25px 60px;position:absolute;margin-top:9px;width:18px;z-index:1;background-position:0 -16px;height:16px;margin-left:-4px}.history-icon{background:url(/static/common/images/suggestion-icon_5c7d911.png) no-repeat;background-size:25px 60px;position:absolute;margin-top:9px;width:18px;z-index:1;background-position:0 2px;height:18px;margin-left:-10px}.ui-suggestion-button span:first-child{float:left;border-right:1px solid #e7e7e7;background:#e7e7e7}.ui-input-mask{position:relative;z-index:100}.ui-suggestion-mask{position:relative;z-index:9999;display:-webkit-box}.ui-suggestion-mask input{-webkit-box-flex:1;display:block}.ui-suggestion-button span{display:inline-block}.ui-suggestion-button span.ui-suggestion-clear{float:left}.ui-suggestion-button span.ui-suggestion-close{float:right;background:url(/static/common/images/suggestion-icon_5c7d911.png) no-repeat 11px -32px;background-size:25px 60px;position:absolute;right:7px;width:20px;height:26px;margin-top:4px;margin-left:20px;z-index:1}.ui-suggestion .ui-suggestion-plus{position:absolute}.ui-suggestion{top:0;left:0;font-size:16px;border:1px solid #b1b1b1;background-color:#fff}.ui-suggestion ul{list-style:none;background:#fff}.ui-suggestion-highlight{background:#ededed}.ui-suggestion .ui-suggestion-button{background:#f9f9f9;height:33px;line-height:33px}.ui-suggestion-button span{text-decoration:none;text-align:center;color:#4B4B4B;font-size:14px;padding:0 10px;cursor:pointer}.ui-suggestion-button span.ui-suggestion-clear{border-right:1px solid #e7e7e7}.ui-suggestion .ui-suggestion-plus{right:0;top:0;bottom:0;width:52px;background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAI5JREFUSEtjZCACLF261J6RkbELpPT///9l0dHRB4nQRlgJ0ODny5Yt+w/CIDZhHUSqgBkKo4nURljZqMHwMBohQQFK/ECvnkT3LgX8kyAzGZATPwWGgTMPSiYCGvyEWgYiGfyEAcjxoKaroWZ5EM52QBUjJLkRExajQUH7Qgg5E4HYxMQLUWpgmYiUxA8AOdLMz+iDKvIAAAAASUVORK5CYII=") no-repeat scroll center center #fff;-webkit-background-size:11px 11px}@media all and (min-device-width:768px) and (max-device-width:1024px){.ui-suggestion{font-size:18px}.ui-suggestion .ui-suggestion-button{height:40px;line-height:40px}}.ui-input-mask input{outline:0}.ui-suggestion-quickdel{background:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAYAAAAqAaJlAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALzSURBVHjaxJlpb9NAEIZ9pEmcpCWhpUiQqoJK8P9/DggooPYLLQ1J1SN1bDNTvRstrr23y0gjR44dP56daydx5Ccj0inpgHRImuDIsiYtcGRdkV77PCx2BNwnnZHuWN67IV2S/nYBjy0h35LuRWHkhvTcBjo2vIYhDx1XQids5Z+kpS8sL/M70t2oW7kj/QrfbpVU8V1G+gHL37WwUV6S3pI+2MIy6EeHAPKRBMBs5XtT2B4s+pygsltOEXR509vULz5B3vxfwkzvYTQlLEf9RPNjeQCgjeb7PumRyg04kI41GWJB+hlVKnME5aLwCauXaQL8Rs4QMuyxVCrbQE9JK9I/jsBLpKgKn02AL+uwbNW54qY1LFpJ52yBZVAh3C8cKLLSDtLZWoZ9o8mnPfj3qnbeFLgJNEYgjQ0CbiFgE7hAorlpguttgVWgU4MVYVe54HKc4s0ODZfSFtgXVFzPheIuhc/Y1H5T4FUA0H9ay55jCnqN45l0rkK2EO71JRCoSACPgTN0zJc64FCgwm8fYXselagNOAoIKjjjRNMmmgLPFcHhC7qtCUkURjJFma5CdjiF52+sGoKp7sOLAKxFYtAB2YLGHQAzY5W0deWGoG15dB4YeNsbZA4bQgFatgSTa2lW9RbLFG99EBDUt5dokl+i3LI/vDJoZGxAQwJXYq4gLDs02HLbgoYCFuOmrTUvDPZdLqCqwsFG+m6wp3uyU8hhgYFivtDHW7pWprqFY0x7xppJzVnTHuwegRYrOp8+HuZaQgXwNUBnmut/yBvGOtiRQSOeBxiArA1mE5yTv6kmMvzGe7Cgy3zMpotSyUNDjDxJVxXKZ4hBhquUsOjGxEolLLwfdTOP1eXU06hlwJwq/FK4RPpMoBtYdOnifzmcfKLx4RAihii3kUewsEtc4bpRR25xhWDSxonNwweYMs4CQXK+PtdZ0xVWyBjF44VDvi3gk5dRx38tNckugnCE3NmXcmiJqljAeuJPO+c92V8BBgA85NXw63SPuAAAAABJRU5ErkJggg%3D%3D") no-repeat;-webkit-background-size:100%;-webkit-background-origin:content-box;cursor:pointer;width:20px;height:20px;display:-webkit-box;padding:8px 10px;visibility:hidden}.ui-suggestion .ui-suggestion-result span:nth-child(2){margin-left:15px}.ui-suggestion .ui-suggestion-result span:nth-child(3){color:silver;font-size:77%}.ui-suggestion .ui-suggestion-result font{color:#878787}</style><script type="text/javascript">!function(){function e(e){var t="/mobile/webapp/monitor/wt/",n=new window.XMLHttpRequest;n.onreadystatechange=function(){if(4===this.readyState&&200===n.status)try{var t=JSON.parse(this.responseText);t&&t.wt>100&&(PDC.mark("wt",t.wt),e())}catch(a){}},t=t+"?c_srt0="+window.c_srt0,t=t+"&ld="+(Date.now()-window.c_t0),n.open("GET",t+"&t="+~~(1e6*Math.random()),!0),n.send()}function t(){PDC._setFS&&PDC._setFS(),PDC._opt.ready!==!1&&PDC._load_analyzer()}function n(){if(window.performance&&window.performance.timing){var e=window.performance.timing,t=e.domainLookupStart;PDC.mark("p_wtt",PDC._render_start-t)}}PDC.extend({_navTiming:window.performance&&window.performance.timing,ready:function(e){("complete"===document.readyState||"loaded"===document.readyState)&&e(),document.addEventListener("DOMContentLoaded",e,!1)},Cookie:{set:function(e,t,n){n=n||10;var a=new Date;a.setTime((new Date).getTime()+1e3*n),document.cookie=e+"="+escape(t)+";path=/;expires="+a.toGMTString()},get:function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=t?unescape(t[2]):null},remove:function(e){this.set(e,"",-1)}},_is_sample:function(e){return PDC._random||(PDC._random=Math.random()),PDC._random<=e},_load_analyzer:function(){for(var e=this._opt.special_pages||[],t=[this._opt.sample],n=0;n<e.length;n++)t.push(e[n].sample);var a=Math.max.apply(null,t);PDC._is_sample(a)!==!1&&(PDC._analyzer.loaded=!0,PDC._load_js(PDC._analyzer.url,function(){for(var e=PDC._analyzer.callbacks,t=0,n=e.length;n>t;t++)e[t]()}))},_load_js:function(e,t){var n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src",e),n.onload=n.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(n.onload=n.onreadystatechange=null,"function"==typeof t&&t(e,!0))},n.onerror=function(){"function"==typeof t&&t(e,!1)},document.getElementsByTagName("head")[0].appendChild(n)},send:function(){PDC._analyzer.loaded===!0?WPO_PDA.send():(PDC._load_analyzer(),PDC._analyzer.callbacks.push(function(){WPO_PDA.send()}))}},PDC),function(){void 0!==window.c_t0&&(PDC.render_start=PDC._render_start=window.c_t0);var e=parseInt(window._SERVER_TIME,10)||0;e>0&&PDC.mark("p_srt",e)}(),PDC.ready(function(){PDC.mark("c_drt")}),window.addEventListener("load",function(){PDC.mark("let"),e(t),n()})}();</script>
{%script%}
            var stat = require('common:widget/stat/stat.js');
            stat.initClickStat();
            //统计组件
            (require('common:widget/statistics/statistics.js')).init();
        {%/script%}
{%require name='common:page/layout.tpl'%}{%/body%}
{%/html%}
