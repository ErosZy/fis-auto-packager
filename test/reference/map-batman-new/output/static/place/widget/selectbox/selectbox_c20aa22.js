define("place:widget/selectbox/selectbox.js",function(e,t,a){var r,_,s,n=e("common:widget/url/url.js"),o=e("common:widget/geolocation/location.js"),c=(e("common:static/js/util.js"),e("common:widget/stat/stat.js")),l={takeout:{pl_dist:"radius",pl_sort_type:"sortType",pl_sort_rule:"orderType",pn:"pageNum"}};a.exports.init=function(e){var t,a;(s=e||{})&&(t=s.wd)&&(a=s.srcname),i(),r=s.select_type,_=s.what,c.addStat(STAT_CODE.PLACE_LIST_FILTER_VIEW,{wd:t,srcname:a})};var i=function(){{var e=$(".place-widget-selectbox select");e.length}$.each(e,function(e,t){$(t).on("change",p)}),$(".city-select").on("click",C)},p=function(e){var t=e.target,a=$(t).closest("select").attr("name"),r=$(t)[0].selectedIndex,_=$($(t)[0][r]),n=_.text(),o=s.wd,l=s.srcname;switch(a){case"pl_dist":c.addCookieStat(STAT_CODE.PLACE_LIST_FILTER_RANGE_CLICK,{wd:o,range:n,srcname:l});break;case"pl_sort_type":c.addCookieStat(STAT_CODE.PLACE_LIST_FILTER_SORT_CLICK,{wd:o,sort:n,srcname:l});break;case"pl_sub_type":c.addCookieStat(STAT_CODE.PLACE_LIST_FILTER_CATEGORY_CLICK,{wd:o,type:n,srcname:l})}d(t),u()},d=function(e){var t=$(e),a=t[0].selectedIndex,r=$(t[0][a]),_=r.text(),s=t.parent().children(".select_title");s.html(_)},u=function(){var e=n.get().query,t=y(),a=o.getCityCode();t=$.extend(t,{pn:0}),e=$.extend(e,t,{c:a}),"takeout"===r&&(e=g(e,r)),"hotel"===r&&(e.pl_filt_type_section=1),e.pl_tonight_sale_flag_section&&delete e.pl_tonight_sale_flag_section,"全市"==e.pl_dist?delete e.center_rank:e.nb_x&&e.nb_y&&(e.center_rank=1),e.pl_movie_book_section="movie_book"==e.pl_sort_type?"1,1":"0,+",n.update({query:e,pageState:{show_select:1}},{queryReplace:!0,replace:!0})},y=function(){var e,t,a=$(".place-widget-selectbox select"),r={};return $.each(a,function(a,_){{var s={},n=$(_);n.parent("select-box")}switch(e=$(_).attr("name"),t=$(_).val(),e){case"pl_sub_type":s.wd=t,s.pl_sub_type=t;break;case"pl_sort_type":s.pl_sort_type=t.split("__")[0],s.pl_sort_rule=t.split("__")[1]||0;break;case"pl_dist":s.pl_dist=t}r=$.extend(r,s)}),r},g=function(e,t){if(e&&t){var a=$.extend({},e),r=l[t];return $.each(r,function(e,t){var r=a[e];r&&(a[t]=r),"pl_sort_rule"!==e&&"0"==r&&delete a[t],delete a[e]}),a}},C=function(){var e=o.getCityType(),t=o.getCityCode(),a=n.get(),r=a.query||{},l=(a.pageState||{},s.wd),i=s.srcname;r.wd=_||r.wd,3===e&&(t=o.getUpCityCode()||t),refer_query=JSON.stringify(a.query||{}),refer_pagestate=JSON.stringify(a.pageState||{}),c.addCookieStat(STAT_CODE.PLACE_SELECT_CLICK_CITY,{wd:l,srcname:i}),n.update({module:"index",action:"setmylocation",query:{c:t},pageState:{refer_query:refer_query,refer_pagestate:refer_pagestate,list_type:"business_area"}},{queryReplace:!0,pageStateReplace:!0})}});