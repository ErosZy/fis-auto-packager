define("place:widget/icomment/icomment.js",function(t,e,o){var n=t("common:widget/login/login.js"),s=t("common:widget/popup/popup.js"),i=t("common:widget/stat/stat.js"),a=t("common:widget/url/url.js");o.exports={msg:{netError:"发送失败请检查网络连接后重试",nocontentError:"评论内容不能为空"},init:function(){$("#J_impression li").on("click",$.proxy(this.switchScores,this)),$("#J_submitComment").on("click",$.proxy(this.submitComment,this))},switchScores:function(t){var e;(e=$(t.target).closest("li"))&&($("#J_impression li").removeClass("active"),e.addClass("active"))},submitComment:function(){var t=this,e=t._getContent(),o=t._getScore(),s=t.msg,a=$("#J_addComment");i.addStat(STAT_CODE.PLACE_COMMENT_ICOMMENT_SUBMITCLICK),n.checkLogin(function(i){i.status?o&&e?$.ajax({type:"post",url:"/mobile/webapp/place/icomment/force=simple",data:{uid:a.data("uid"),content:e,score:o},dataType:"json",success:function(e){t._addCommentSuccess(e)},error:function(){t.showMessage(s.netError)}}):t.showMessage(s.nocontentError):n.loginAction()})},_getScore:function(){var t=$("#J_addComment");return t.find(".active").attr("value")},_getContent:function(){return $("#J_commentContent").val()},_addCommentSuccess:function(t){var e=this,o=$("#J_addComment");0===parseInt(t.status)?(i.addStat(STAT_CODE.PLACE_COMMENT_ICOMMENT_SUBMITSUCCESS),e.showMessage(t.msg),setTimeout(function(){a.navigate(e.addCommentMark(o.data("url")))},2e3)):e.showMessage(t.msg)},showMessage:function(t,e){s.open({text:t,autoCloseTime:e||2e3})},addCommentMark:function(t){return t+="&cmark=1"}}});