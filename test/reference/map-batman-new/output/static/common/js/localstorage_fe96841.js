define("common:static/js/localstorage.js",function(e,t,s){var a=window.localStorage,r="<#lsvalid#>",c="</#lsvalid#>",o=new RegExp("^(<#lsvalid#>)(.*)(</#lsvalid#>)$"),d=function(){},i=d.prototype;i.deleteData=function(e,t){if(a){t=t||{};try{a.removeItem(e),t.success&&t.success()}catch(s){t.error&&t.error()}}},i.addData=function(e,t,s){if(a){s=s||{};try{a.setItem(e,r+JSON.stringify(t)+c),s.success&&s.success()}catch(o){s.error&&s.error(),n.addStat(20155,{message:o.message,key:e,type:"ad"})}}},i.getData=function(e){if(a){var t=a.getItem(e),s=null;return(s=t.match(o))?t=s[2]:void 0}};var n=e("common:static/js/util.js");i.selectData=function(e,t){if(a){var s,r=a.getItem(e);if(t=t||{},null===r)return t.success&&t.success(r),void 0;var c=null;if(c=r.match(o)){r=c[2];try{s=JSON.parse(r),t.success&&t.success(s)}catch(d){t.error&&t.error(),n.addStat&&n.addStat(20155,{key:e,type:"sd",message:d.message})}}else t.error&&t.error(),n.addStat&&n.addStat(20155,{key:e,type:"sd",message:"data not valid"})}},s.exports=new d});