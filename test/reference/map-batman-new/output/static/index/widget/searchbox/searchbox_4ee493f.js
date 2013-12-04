define("index:widget/searchbox/searchbox.js",function(t,e,o){t("common:static/js/gmu/src/widget/suggestion/suggestion.js"),t("common:static/js/gmu/src/widget/suggestion/renderlist.js"),t("common:static/js/gmu/src/widget/suggestion/$quickdelete.js"),t("common:static/js/gmu/src/widget/suggestion/sendrequest.js");var i=(t("common:static/js/util.js"),t("common:widget/url/url.js")),s=(t("common:widget/pagemgr/pagemgr.js"),t("common:widget/geolocation/geolocation.js"),t("common:widget/geolocation/location.js")),n=t("common:widget/search/poisearch.js"),a=t("common:widget/stat/stat.js"),c=t("common:widget/apphistory/apphistory.js");o.exports={init:function(){this.render(),this.bind()},render:function(){window.localStorage&&window.localStorage.input&&(c.isLanding()?localStorage.removeItem("input"):$("#se-input-poi").val(localStorage.input||"")),this._poiSug=new gmu.Suggestion("#se-input-poi",{source:"http://map.baidu.com/su",cbKey:"callback",listCount:6,posAdapt:!1,appendContanier:"#wrapper",historyShare:!0,autoClose:!0,quickdelete:!0,show:function(){this.$wrapper.offset({left:11,top:this.getEl().offset().top+46})}})},bind:function(){$(".se-form").on("submit",$.proxy(this.submit,this)),$(".se-btn").on("click",$.proxy(this.submit,this)),$(".se-input-poi").on("blur",function(){$(".se-city").show()}),$(".se-input-poi").on("focus",function(){$(".se-city").hide()}),listener.on("common.geolocation","success",this.updateMyPos,this),$(".index-widget-searchbox [jsaction]").on("click",$.proxy(this.go,this)),listener.on("common.page","switchstart",function(){$(".ui-suggestion").length&&$(".ui-suggestion").hide()})},go:function(t){var e=$(t.currentTarget);switch(e.attr("jsaction")){case"toNavSearch":var o={qt:"cur",wd:s.getCity()||"全国",from:"maponline",tn:"m01","ie=utf-8":"utf-8"};window.localStorage&&(localStorage.input=$("#se-input-poi").val()),i.update({query:o,pageState:{tab:"line"}},{queryReplace:!0,pageStateReplace:!0});break;case"toNearBySearch":i.update({module:"index",action:"index",query:{foo:"bar"},pageState:{vt:""}},{queryReplace:!0,pageStateReplace:!0});break;case"toMapSearch":i.update({pageState:{vt:"map"}},{pageStateReplace:!0})}return!1},submit:function(t){var e=$(".se-input-poi");if(!this._checkInput(e))return!1;if(t){var o=$(t.currentTarget),i=o.attr("user-data");"se-btn"==i&&this._poiSug&&this._poiSug.history(e.val())}return e.blur(),a.addCookieStat(STAT_CODE.STAT_POI_SEARCH),n.search(e.val()),!1},updateMyPos:function(t){t=t?t:s.getLocation(),t.addr&&t.addr.city&&$(".se-city-wd").text(t.addr.city)},_checkInput:function(t){return t?/\S+/.test(t.val())?!0:(t.focus(),!1):!1}}});