{%style id="/widget/common/banner/banner.inline.less"%}.taxi-widget-banner{position:relative;height:45px;line-height:45px;text-indent:20px;border-bottom:1px solid #d4d4d4;visibility:hidden}.taxi-widget-banner a{display:block;width:100%;height:100%}.taxi-widget-banner .btn-close{position:absolute;font-size:0;text-indent:-999em;width:40px;height:45px;right:0;top:0;background:url(/static/taxi/widget/common/banner/images/bg-btn-close_5cc551a.png) no-repeat center center;background-size:12px 12px}{%/style%}<div class="taxi-widget-banner">
<button class="btn-close">关闭</button>
</div>
{%script%}
require('taxi:widget/common/banner/banner.js').init();
{%/script%}