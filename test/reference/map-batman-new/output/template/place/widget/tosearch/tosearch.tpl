{%style id="/widget/tosearch/tosearch.inline.less"%}.place-widget-tosearch{height:39px;line-height:39px;margin:20px 0;padding:0 4%;border:solid 1px #838991;border-radius:.25em;font-weight:700;text-align:center;background:url(/mobile/simple/static/place/images/goto_92a90a7.png) 98% center no-repeat;background-size:7px 12px}.place-widget-tosearch .name{white-space:nowrap;display:inline-block;margin-left:5px;font:700 15px "微软雅黑","宋体";text-overflow:ellipsis;overflow:hidden}.place-widget-tosearch a{display:block;color:#333}.place-widget-tosearch .baidu{color:#2932e1}{%/style%}{%* 去百度搜索更多 *%}
<div class="place-widget-tosearch">
<a target="_blank" href="http://m.baidu.com/s?word={%$widget_data.name|f_escape_path%}" data-log="{code:{%$STAT_CODE.PLACE_DETAIL_TOSEARCH_CLICK|f_escape_xml%}, wd:'{%$wd|f_escape_xml%}', srcname:'{%$widget_data.ext.src_name|f_escape_xml%}', name:'{%$widget_data.name|f_escape_xml%}'}">去<span class="baidu">百度</span>查看更多<span class="name">"{%htmlspecialchars_decode($widget_data.name)%}"</span></a>
</div>
{%script%}
    var tosearch = require("place:widget/tosearch/tosearch.js");
    tosearch.init();
{%/script%}