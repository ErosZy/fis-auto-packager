{%* 地图页 *%}
{%extends file="common/page/maplayout.tpl"%} 
{%block name="main"%}
<style>.navokbox{display:block;width:274px;height:126px;border:2px solid #4A4A4A;background:#4A4A4A;opacity:.95;background-color:#4A4A4A;-webkit-border-radius:5px;z-index:999}.navokbox .t{height:16px;background-color:#4A4A4A}.navokbox .c{height:100%;-webkit-border-bottom-left-radius:10px;-webkit-border-bottom-right-radius:10px}.navokbox .t1{font-size:17px;text-align:left;color:#FFF;margin-top:5px;margin-left:16px;margin-right:7px;margin-bottom:3px}.navokbox .bt{width:128px;height:37px;margin-top:9px;-webkit-border-radius:3px;-webkit-box-sizing:border-box;font-size:16px;color:#fff;border:0}.navokbox .qx{float:left;margin-left:18px;border-top:1px solid #68B3DE;background-color:#68B3DE}.navokbox .qd{float:right;margin-right:6px;border-top:1px solid #68B3DE;background-color:#68B3DE}.navokbox a{text-decoration:none}#nav_go_nav{width:54px;position:absolute;top:0;height:100%;right:0;border-left:1px solid #d4d4d4}#nav_go_nav span{color:#4b8ff9;position:absolute;left:23px;top:0;font-family:微软雅黑}#nav_go_nav em{background:url(/static/drive/images/driveicon_3a5b60c.png);background-size:15px 15px;width:15px;height:15px;position:absolute;top:17px;left:7px}</style>
{%widget name="common:widget/nav/nav.tpl" title="驾车方案" nav_btn="导航"%}
{%script%}
        var mapView = require('common:widget/map/map.js');
        var data = {%json_encode($data)%};
        window._APP_NAVI_QUERY = {
            start : {%json_encode($data.result.start.pt)%},
            endp   : {%json_encode($data.result.end[0].pt)%},
            sy    : {%json_encode($data.result.sy)%}
        }

        mapView.init(function(BMap){
            // 各模块地图相关业务代码初始化
            require('drive:widget/helper/maphelper.js').init(BMap,mapView,data);
        });
        //导航的入口
        var navi = require('drive:widget/navi/navi.js');
        navi.bindNav();

    {%/script%}
{%/block%}
{%block name="footer"%}{%require name='drive:page/map.tpl'%}{%/block%}