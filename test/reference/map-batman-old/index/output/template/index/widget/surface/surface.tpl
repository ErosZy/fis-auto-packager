{%style id="/widget/surface/surface.inline.less"%}.return-wap{position:fixed;bottom:0;width:100%;height:40px;background-color:grey;z-index:999;opacity:.9;line-height:40px}.return-wap a{color:#fff;font-size:17px;text-decoration:underline}.return-wap .return{margin-left:4%}.return-wap a:hover{cursor:pointer}.return-wap .close{position:absolute;right:5%;top:5%;text-decoration:none;background:url(http://cq01-rdqa-dev077.cq01.baidu.com:8005/mobile/simple/static/index/images/close_580d5a7.png) no-repeat 5px 5px;background-size:25px 25px;width:30px;height:30px;line-height:30px}{%/style%}
{%if $data && $data['isShow']%}
<div class="return-wap">
<a href="http://wapmap.baidu.com" class="return">返回WAP地图</a>
<a class="close"></a>
</div>
{%/if%}
{%script%}
require("index:widget/surface/surface.js").init();
{%/script%}