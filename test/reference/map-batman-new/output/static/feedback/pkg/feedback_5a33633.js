define("feedback:widget/show/show.js",function(t,e,a){var n=n||{},o=t("common:widget/popup/popup.js"),r=t("common:widget/url/url.js");n.api={data:{product_id:"lbs-webapp",page_id:"unknown",hash:"unknown",user_agent:navigator.userAgent,os:"unknown",os_type:"unknown",os_version:"unknown",browser:"unknown",browser_version:"unknown"},domain:"http://map.baidu.com",url:"/maps/interfaces/feedback/save",submitData:"",addPlaceHolder:function(t){$(t.target).attr("placeholder",$(t.target).data("placeholder")||"")},removePlaceHolder:function(t){$(t.target).data("placeholder",$(t.target).data("placeholder")||$(t.target).attr("placeholder")),$(t.target).attr("placeholder","")},filterxss:function(t){return t=t.replace(/&/g,"&amp;"),t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;"),t=t.replace(/\'/g,"&#39;").replace(/\"/g,"&quot;")}},a.exports=$.extend({},{onSubmit:function(t){var e=t.elContent,a=t.elContact;if($(".feedback-tips").remove(),!e.val().trim())return this.noticeTips(e,"* 请填写反馈意见！"),void 0;var n;return a.val().trim()?(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/i.test(a.val().trim())===!0&&(n="email"),/^0?1[3568]\d{9}$/.test(a.val().trim())===!0&&(n="tel")):n="none",n?(this.submit(e,n,a),void 0):(this.noticeTips(a,"* 请正确填写手机号或邮箱！"),void 0)},canTouch:function(t){t.stopPropagation()},bind:function(t){var e=t.elContent,a=n.api,o=t.elContact;e.add(o).on("focus",$.proxy(a.removePlaceHolder,this)),e.add(o).on("blur",$.proxy(a.addPlaceHolder,this))},syncWordCount:function(t){var e=$(t.target).val(),a=0;e&&(a=e.length);var n=$(t.target).prev().children("span").last();n.text(n.text().replace(/\d+/,a))},noticeTips:function(t,e){return t.after($("<p />").addClass("feedback-tips").text(e)),t.next("p")},submit:function(t,e,a){var r=n.api,i=this,s=$.param($.extend({content:r.filterxss(t.val().trim()),tel:"tel"==e?a.val().trim():"",email:"email"==e?a.val().trim():""},r.data));return r.submitData==s?(o.open({text:"请勿重复提交！"}),void 0):(r.submitData=s,o.open({text:"意见提交中，请稍后！",autoCloseTime:!1}),$.ajax({url:r.domain+r.url,dataType:"jsonp",timeout:8e3,data:s,success:function(t){o.close(),0===parseInt(t,10)?(r.submitData=s,i.onSuccess()):(r.submitData=null,i.onFailure())},error:function(){r.submitData=null,i.onFailure()}}),void 0)},reset:function(){var t=$("#feedback-content"),e=$("#feedback-contact");$(".feedback-tips").remove(),t.val(""),e.val(""),this.syncWordCount({target:t}),this.syncWordCount({target:e})},onSuccess:function(){o.open({text:"提交成功，谢谢您的反馈！"});var t=this;setTimeout(function(){t.submitData=null,t.reset(),r.toIndex()},3e3)},onFailure:function(){o.open({text:"意见提交失败，请重试！"})}})});