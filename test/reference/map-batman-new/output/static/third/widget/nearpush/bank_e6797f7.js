define("third:widget/nearpush/bank.js",function(require,exports,module){var util=require("common:static/js/util.js"),url=require("common:widget/url/url.js"),searchData=require("common:static/js/searchdata.js"),locator=require("common:widget/geolocation/location.js"),helper=require("index:widget/helper/helper.js"),id="bank",tpl=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';if(eval(_template_varName),_template_fun_array.push(""),data&&data.length>0){_template_fun_array.push('    <div class="hd">        <button jsaction="bank-all" userdata="{&#39;wd&#39;:&#39;',"undefined"==typeof wd?"":wd,"&#39;,&#39;id&#39;:&#39;","undefined"==typeof id?"":id,'&#39;}">查看全部</button>        <h2>银行</h2>    </div>    <ul class="list">        ');for(var i=0,l=data.length;l>i;i++)_template_fun_array.push('            <li jsaction="bank-all" userdata="{&#39;wd&#39;:&#39;',"undefined"==typeof data[i].name?"":data[i].name,"&#39;,&#39;id&#39;:&#39;","undefined"==typeof id?"":id,'&#39;}">                <span class="icon ',"undefined"==typeof data[i].key?"":data[i].key,'"></span>                <p>',"undefined"==typeof data[i].name?"":data[i].name,"</p>            </li>        ");_template_fun_array.push("    </ul>")}_template_fun_array.push(""),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0];module.exports={init:function(e){this.pagename=e,this.render(),this.bind()},render:function(){$(".index-widget-bank").html(tpl(helper.cates[id]))},bind:function(){$(".index-widget-bank [jsaction]").on("click",this._go)},_go:function(e){helper.go(e,"bank")}}});