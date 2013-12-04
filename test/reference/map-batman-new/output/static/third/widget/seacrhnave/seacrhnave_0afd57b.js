define("third:widget/seacrhnave/seacrhnave.js",function(t,e,o){t("common:static/js/gmu/src/widget/suggestion/suggestion.js"),t("common:static/js/gmu/src/widget/suggestion/renderlist.js"),t("common:static/js/gmu/src/widget/suggestion/$quickdelete.js"),t("common:static/js/gmu/src/widget/suggestion/sendrequest.js");var s=(t("common:static/js/util.js"),t("common:widget/geolocation/location.js")),r=t("common:widget/popup/popup.js"),a=t("common:widget/url/url.js"),n=t("common:widget/stat/stat.js"),i="我的位置",d=!1;o.exports={init:function(){this.render(),this.bind();var t=this._getPagetype();t.isSelf||(this[t.elSelf].val(t.word),this.model.set([t.el],{word:t.word,point:t.point}))},render:function(){var e=this,o=a.get(),s=o.pageState||{};o.query||{},e.sestart=$("#se_txt_start"),e.seend=$("#se_txt_end"),e.maskid=$("#se_wrap"),e.reverseBtn=$("#se_dir_reverse"),e.model=t("index:widget/seacrhnave/searchboxmodel.js"),e.urlstart=e._proceedUrl(s.start),e.urlend=e._proceedUrl(s.end),e.pagetype=e._getPagetype(),e.selement=$("#se_txt_start, #se_txt_end"),e.submitbtn=$(".se-btn-tr"),e.sedirform=$(".se-dir-form")},_proceedUrl:function(t){var e=!1;return void 0!=t&&(e={word:"",point:""},datarr=t.trim().split("&"),datarr[0]&&(e.word=decodeURIComponent(datarr[0].split("=")[1])),datarr[1]&&(e.point=decodeURIComponent(datarr[1].split("=")[1]))),e},bind:function(){var t=this;$(window).on("pageshow",function(){d&&setTimeout(function(){t._setLocation()},0)}),t._poiSugStart=new gmu.Suggestion("#se_txt_start",{source:"http://map.baidu.com/su",cbKey:"callback",listCount:6,posAdapt:!1,historyShare:!0,autoClose:!0,appendContanier:"#wrapper",quickdelete:!0}),t._poiSugStart.$wrapper.offset({left:0,top:217}),$("#se_txt_start").on("focus",function(){t._poiSugEnd&&t._poiSugEnd.hide()}),t._poiSugEnd=new gmu.Suggestion("#se_txt_end",{source:"http://map.baidu.com/su",cbKey:"callback",listCount:6,posAdapt:!1,historyShare:!0,autoClose:!0,appendContanier:"#wrapper",quickdelete:!0}),t._poiSugEnd.$wrapper.offset({left:0,top:217}),$("#se_txt_end").on("focus",function(){t._poiSugStart&&t._poiSugStart.hide()}),t.reverseBtn.on("click",$.proxy(t._reverse,this)),listener.on("common.geolocation","mylocsuc",function(){var t=this;d=!!s.getMyLocation().point,t._setLocation()},this),t.selement.on("focus",$.proxy(t._focus,this)),t.selement.on("blur",$.proxy(t._blur,this)),t.selement.on("mousedown",$.proxy(t._touchstart,this)),t.submitbtn.on("click",$.proxy(t._poiSubmit,this)),t.selement.on("mousedown",$.proxy(t._touchstart,this)),t.sedirform.on("submit",$.proxy(this._poiSubmit,this)),listener.on("common.page","switchstart",function(){$(".ui-suggestion").length&&$(".ui-suggestion").hide()})},_getPagetype:function(){var t=this;return result={elSelf:"",el:"sestart",key:"start",isSelf:!1,word:"",point:""},t.urlend?(result.elSelf="seend",result.word=t.urlend.word,result.point=t.urlend.point):t.urlstart?(result.key="end",result.el="seend",result.elSelf="sestart",result.word=t.urlstart.word,result.point=t.urlend.point):result.isSelf=!0,result},_checkInput:function(t){return t?/\S+/.test(t.val())?t.val()==i&&this.model.get("geo").word!=i?(t.val(""),r.open({text:"定位失败！"}),!1):!0:(t.focus(),!1):!1},_getGeoData:function(){var t={word:"",point:"",citycode:""};return s.getLocation(),d&&(t={word:i,point:s.getMyPointX()+","+s.getMyPointY(),citycode:s.getMyCityCode()}),t},_reverse:function(){var t=this,e={start:$("#se_txt_start").val(),end:$("#se_txt_end").val()};t.reverseBtn.addClass("active"),t.sestart.val(e.end),t.seend.val(e.start),setTimeout(function(){t.reverseBtn.removeClass("active")},100),t.model.set("end",{word:e.start}),t.model.set("start",{word:e.end}),t._update()},_update:function(){var t=this,e=t.sestart,o=t.seend,s=t.model.get("geo");e.val()==i&&s.word==i&&d?(e.addClass("geo"),o.removeClass("geo")):e.removeClass("geo"),o.val()==i&&s.word==i&&d?(o.addClass("geo"),e.removeClass("geo")):o.removeClass("geo")},_setLocation:function(){var t=this;t.sestart,t.seend,result=t.pagetype,geoData=t._getGeoData(),d&&t[result.el].val(i),result.key&&t.model.set(result.key,geoData);var e=t.model.get("geo");(!e.point||geoData&&""!==geoData.point)&&t.model.set("geo",geoData),t._update()},_focus:function(t){var e=$(t.target);e.val()==i&&e.val(""),e.removeClass("geo")},_blur:function(t){var e=this,o=$(t.target),s=o.attr("key"),a=e.model.get("geo"),n=a.word!=i&&u==i&&d,u=o.val().trim();if(n&&(o.val(""),r.open({text:"定位失败！"})),a.point&&""==u&&d){e.model.get(s).word==a.word&&(o.val(i),o.addClass("geo"));var l="start"==s?"start":"end";e["se"+l].val()!=i&&(e.model.set(s,e._getGeoData()),e.model.set(l,{word:""}))}},_fixDirData:function(){var t=$(".se-dir-form input[type=text]"),e=this._getPagetype();ptIsSelf=e.isSelf,me=this,$.each(t,function(){var t=$(this).attr("key"),o=$("#se_txt_"+t),s=me.model.get(t),r=s.word!=o.val();(!s.word||r)&&(o.val()===i&&d?me.model.set(t,me._getGeoData()):ptIsSelf||o.val()!=e.word?me.model.set(t,{word:o.val()}):me.model.set(t,{word:e.word,point:e.point}))})},_touchstart:function(t){var e=$(t.target);e.focus(),t.stopPropagation()},_getDirParam:function(t,e,o,r){var a,n=s.getCityCode()||1,i=this._getTabIndex("search",t),d=e.citycode||n,u=o.citycode||n,l=d||n;if(e.point&&o.point||!e.point&&!o.point)a={qt:["s","bt","nav","walk"][i]||"bt",sn:this._joinParam(e),en:this._joinParam(o),sc:d,ec:u,c:l,pn:"0",rn:"5"};else{var c,p,g,m;e.point?(c=e,m=o,p="sn",g="1"):(c=o,m=e,p="en",g="0");var _=["s","bse","nse","wse"][i]||"bse",v=c.point;a={qt:_,ptx:v.split(",")[0],pty:v.split(",")[1],wd:m.word||"",name:c.word||"",c:n,sc:e.citycode||n,ec:o.citycode||n,isSingle:"true"},a[_+"tp"]=g,a[p]=this._joinParam(c)}return r&&r.from&&(a.searchFlag=r.from||""),["nav","nse","walk","wse"].indexOf(a.qt)>=0&&(a.version="3"),a},_poiSubmit:function(t){t&&t.stopPropagation&&t.stopPropagation(),t&&t.preventDefault&&t.preventDefault();var e,o=t;o.target&&(e=$(t.target).attr("data-value")),e||(e=1);var s=this,r=s.sestart,a=s.seend;if(!s._checkInput(r)||!s._checkInput(a))return!1;switch(this._fixDirData(),e){case"1":n.addCookieStat(STAT_CODE.STAT_BUS_SEARCH);break;case"2":n.addCookieStat(STAT_CODE.STAT_NAV_SEARCH);break;case"3":n.addCookieStat(STAT_CODE.STAT_WALK_SEARCH)}var d=s._getDirParam(e,this.model.get("start"),this.model.get("end"),t);r.val()!=i&&this._poiSugStart&&this._poiSugStart.history(r.val()),a.val()!=i&&this._poiSugEnd&&this._poiSugEnd.history(a.val()),location.href="/mobile/webapp/search/search/"+$.param(d)},_getTabIndex:function(t,e){if(!isNaN(e)){var o=this._num2str(t,e),s=this._str2num(t,o);return s}return"string"==typeof e?this._str2num(t,e):void 0},_getTabStr:function(t,e){if(!isNaN(e))return this._num2str(t,e);if(_.isString(e)){var o=this._str2num(t,e),s=this._num2str(t,o);return s}},_num2str:function(t,e){return"tab"==t?["place","line"][e]||"place":["place","transit","drive","walk"][e]||"place"},_str2num:function(t,e){return"tab"==t?{plcae:0,line:1}[e]||0:{place:0,transit:1,drive:2,walk:3}[e]||0},_joinParam:function(t){if(!t)return"";var e=t.point?"1":"2",o=t.uid||"",s=t.point||"",r=t.word||"";return[e,o,s,r,""].join("$$")}}});