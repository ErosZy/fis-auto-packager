{%style id="/widget/common/nav/nav.inline.less"%}.taxi-widget-nav{position:relative;height:50px;line-height:50px;font-size:16px;color:#333;text-align:center;background:#fafafa;box-shadow:0 1px 9px 0 rgba(0,0,0,.22);z-index:9;width:100%}.taxi-widget-nav .btn-back{position:absolute;left:0;top:0;width:50px;height:50px;border:0;border-right:1px solid #ccc;padding:0;margin:0;background:url(/static/taxi/images/bg-btn-back_4b23705.png) no-repeat center center;background-size:16px 16px;font-size:0}{%/style%}<div class="taxi-widget-nav">
<div class="title">{%$title|f_escape_xml%}</div>
{%if (!empty($btnBack))%}
<button class="btn-back" data-back="{%$back|f_escape_xml%}">返回</button>
{%/if%}
</div>
{%script%}
require('taxi:widget/common/nav/nav.js').init();
{%/script%}