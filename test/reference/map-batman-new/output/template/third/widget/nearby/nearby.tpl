{%style id="/widget/nearby/nearby.inline.less"%}.third-nearby{padding:10px 8px;background-color:#f9f9f9}.third-nearby .hd{position:relative;margin-bottom:17px}.third-nearby .hd h2{font-size:14px;height:36px;line-height:38px;font-weight:400;padding-left:36px;background:url(/static/third/images/npush-icon_c8f4089.png) 0 -91px no-repeat;background-size:32px 315px}.third-nearby .list .active{background-color:#f8f8f8;border:1px solid #d7d7d7}.third-nearby .list{display:-webkit-box;-webkit-box-pack:justify;list-style:none;width:100%;text-align:center;font-size:12px;color:#5a5a5a}.third-nearby .list>li{width:18.1%;margin-top:4px}.third-nearby .list a{height:21px;background-color:#fff;border:1px solid #ececec;border-radius:1px;position:relative;color:#5A5A5A;display:block;padding-top:34px}.third-nearby .icon{position:absolute;height:20px;width:20px;background:url(/static/third/images/index-nb-pic_ee586e5.png) no-repeat 0 0;background-size:24px 365px;left:50%;top:10px;margin-left:-10px}.third-nearby .ui3-canyin{background-position:0 0}.third-nearby .ui3-hotel{background-position:1px -23px}.third-nearby .ui3-bus{background-position:1px -46px}.third-nearby .ui3-sale{background-position:1px -70px}.third-nearby .ui3-takeout{background-position:1px -93px}.third-nearby .ui3-bank{background-position:1px -116px}.third-nearby .ui3-movie{background-position:1px -140px}.third-nearby .ui3-water{background-position:1px -162px}.third-nearby .ui3-oil{background-position:1px -185px}.third-nearby .ui3-more{background-position:0 -205px}.third-nearby .ui3-ktv{background-position:0 -345px}{%/style%}
<div class="third-nearby">
{%*某些页面不需要头部*%}
{%$noHeaderPages = array('index','searchnearby')%}
{%if !in_array($pagename, $noHeaderPages)%}
{%/if%}
<ul class="list">
{%for $i = 0; $i < 5; $i++ %}
<li>
{%$main = $data.main%}
{%$key = $main.fixrank[$i]%}
{%$content = $main.content[$key]%}
{%$word = $content.name%}
{%$module = $content.module%}
{%$action = $content.action%}
{%$id = $content.id%}
<a href="javascript:void(0);" jsaction="jump" userdata="{wd:'{%$word|f_escape_xml%}', module:'{%$module|f_escape_xml%}', action:'{%$action|f_escape_xml%}', id:'{%$id|f_escape_xml%}'}">
<b class="icon {%$main.content[$key].className|f_escape_xml%}"></b>{%$word|f_escape_xml%}
</a>
</li>
{%/for%}
</ul>
<ul class="list">
{%for $i = 5; $i < 10; $i++ %}
<li>
{%$main = $data.main%}
{%$key = $main.fixrank[$i]%}
{%$content = $main.content[$key]%}
{%$word = $content.name%}
{%$module = $content.module%}
{%$action = $content.action%}
{%$id = $content.id%}
<a href="javascript:void(0);" jsaction="jump" userdata="{wd:'{%$word|f_escape_xml%}', module:'{%$module|f_escape_xml%}', action:'{%$action|f_escape_xml%}', id:'{%$id|f_escape_xml%}'}">
<b class="icon {%$main.content[$key].className|f_escape_xml%}"></b>{%$word|f_escape_xml%}
</a>
</li>
{%/for%}
</ul>
</div>
{%script%}
    (require("third:widget/nearby/nearby.js")).init('{%$pagename|f_escape_js%}');
{%/script%}