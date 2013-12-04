{%style id="/widget/header/header.inline.less"%}.common-widget-header{}.common-widget-header .nav{position:relative;height:44px;line-height:44px;background-color:#E6E6E6;border-bottom:1px solid #AFAFAF;text-align:center}.common-widget-header .side-l{position:absolute;top:6px;left:8px;display:inline-block;height:30px;width:88px;line-height:30px;text-align:center;color:#797979;border:1px solid #A7A7A7;background-color:#A7A7A7;border-radius:2px}.common-widget-header .side-r{width:91px;position:absolute;top:6px;right:8px;display:inline-block;height:30px;line-height:30px;text-align:center;color:#BBBCBD;border:1px solid #A7A7A7;background-color:#F0F0F0;border-radius:2px}.common-widget-header .side-r a{display:inline-block;white-space:nowrap;color:#4CA7F9;line-height:28px;font-size:15px}.common-widget-header .btn-l{display:inline-block;float:left;width:44px;font-size:15px;border-right:1px solid #A7A7A7}.common-widget-header .btn-l a{display:inline-block;height:100%;width:100%;color:#797979;background-color:#F0F0F0}.common-widget-header .btn-l a:active{background-color:#363a41}.common-widget-header .btn-r{display:inline-block;float:right;width:43px}.common-widget-header .btn-r a{display:inline-block;height:100%;width:100%;background:#f0f0f0 url(/mobile/simple/static/common/images/prod_a909b9b.png) no-repeat 14px;background-size:15px 15px}.common-widget-header .btn-r a:active{background-color:#363a41}.common-widget-header .btn-r .top{height:7px;margin-bottom:1px}.common-widget-header .btn-r .bottom{height:7px}.common-widget-header .btn-r b{display:inline-block;height:5px;width:5px;border:1px solid #d8d8d8;background-color:#d8d8d8}.common-widget-header .btn-r .blank{background-color:#40464d}.common-widget-header .btn-r .sp{margin-left:1px}.common-widget-header .more-icon{display:inline-block;width:43px;height:30px;border-left:1px solid #2c2e31;background-position:14px 7px}.common-widget-header .title{display:inline-block;color:#707070;text-align:center;width:100px}.common-widget-header .title .txt{font-size:18px}.common-widget-header .hb-wrapper{position:absolute;right:5px;top:0;width:22px;height:44px;padding-right:10px}.common-widget-header .sb-wrapper{position:absolute;right:52px;top:0;width:20px;height:44px}.common-widget-header .index-loc-pic{background:url(/mobile/simple/static/common/images/index_loc_47cb77b.png) no-repeat 0 0;background-size:24px 130px}.common-widget-header .home-btn{margin-top:12px;display:inline-block;height:20px;width:22px;background-position:0 -111px}.common-widget-header .srh-btn{display:inline-block;margin-top:12px;height:20px;width:22px;background-position:0 -89px}.common-widget-header .se-wrap{padding:8px;background-color:#ededed;position:relative}.common-widget-header .se-wrap .se-poi-form{height:36px;background-color:#fff;position:relative}.common-widget-header .se-wrap .btn-clear{position:absolute;right:.286em;top:50%;margin-top:-.714em;width:1.464em;height:1.464em;display:none;background-position:0 -5.964em;z-index:100000}.common-widget-header .se-wrap input{width:100%;height:100%;color:#333;border:0;background:0}.common-widget-header .se-wrap input.geo{color:#4C78CE}.common-widget-header .se-inner{height:32px;padding-left:26px;position:relative;-webkit-box-shadow:inset 1px 1px 2px #ddd;background:#fff;border:1px solid #9a9a9a;width:auto;left:0;right:0}.common-widget-header .se-poi-form input{padding:5px;height:27px}.common-widget-header .se-poi table{border:1px solid #9a9a9a;background:#fff}.common-widget-header .se-btn{height:36px;width:49px;border-left:1px solid #9a9a9a;background:-webkit-gradient(linear,0 100%,0 0,from(#e7e7e7),to(#f5f5f5))}.common-widget-header .se-btn b{display:inline-block;width:23px;height:23px;margin-top:6px;margin-left:14px;background:url(/mobile/simple/static/common/images/search_ico_89dbc92.png) no-repeat;background-size:23px 23px}.common-widget-header .hide{display:none}{%/style%}
<header class="common-widget-header"  style="display:none">
<div class="nav">
<div class="side-l clearfix">
<span class="btn-l"><a href="{%$commonUrl.header.wise|f_escape_xml%}" target="_blank">百度</a></span>
<span class="btn-r"><a href="{%$commonUrl.header.switch_product|f_escape_xml%}">&nbsp;</a></span>
</div>
<div class="title"><span class="txt">百度地图</span></div>
<div class="side-r">
<a href="javascript:void(0);" target="_blank" id="header_install_button" class="header_install_button" uid="{%$data.content.uid|f_escape_xml%}" data-log="{code:{%$COM_STAT_CODE.HEADER_APP_DOWN|f_escape_xml%}}">
下载客户端</a></div>
</div>
</header>
{%script%}
var header = require("common:widget/header/header.js");
header.init(); 
{%/script%}