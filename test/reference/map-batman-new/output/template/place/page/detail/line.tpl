{%extends file="common/page/layout.tpl"%} 
{%block name="main"%}
{%* place detail页布局样式 *%}
<style  type="text/css">.place-page-detail{padding:0 8px 8px;background:#F2F2F2;overflow:hidden}.place-page-detail>[class^=place-widget-],.place-page-detail>div>[class^=place-widget-],.place-page-detail>[id^=place-pagelet-]>[class^=place-widget-],.place-page-detail>div>[id^=place-pagelet-]>[class^=place-widget-]{margin:10px 0}.place-page-detail .place-widget-comment,.place-page-detail .place-widget-overview,.place-page-detail .place-widget-sitelink,.place-page-detail .place-widget-tosearch,.place-page-detail .place-widget-cater,.place-page-detail .place-widget-recommend{margin:20px 0}.place-page-detail.movie>[class^=place-widget-],.place-page-detail.movie>[id^=place-pagelet-]>[class^=place-widget-]{margin-bottom:0}.place-page-detail.movie div.place-movie-goto{margin:0 0 10px}.place-page-detail.movie div.place-widget-captain,.place-page-detail.movie div.place-pagelet-basicmovieinfo,.place-page-detail.movie div.place-widget-promotion{margin:10px 0 0}</style>
{%* 导航widget *%}
{%widget name="common:widget/nav/nav.tpl" title=$data.result.wd mapLink=$commonUrl.nav.map pageType="detail"%}
<div class="place-page-detail">
{%widget name="place:widget/captain/captain.tpl" widget_data=$data.content[0]%}
{%widget name="place:widget/linedetail/linedetail.tpl" widget_data=$data.content[0]%}
</div>
{%/block%}
{%block name="bottomBanner"%}
{%widget name="common:widget/bottombanner/bottombanner.tpl"%}
{%require name='place:page/detail/line.tpl'%}{%/block%}