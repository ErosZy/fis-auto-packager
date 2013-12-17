define("taxi:widget/channel/channel.js",function(e,t,i){"use strict";var n=e("common:static/js/util.js"),o=e("taxi:widget/common/popup/popup.js"),a=e("taxi:widget/common/vcode/vcode.js"),t={create:function(){var e=$(".taxi-widget-channel"),t=e.find(".btn-get-ticket"),i=e.find(".phone-input"),n=e.find(".btn-later"),o=e.find(".dialog.success"),a=e.find(".dialog.one"),c=e.find(".dialog.invalid");t.on("click",$.proxy(this.onBtnTicketClick,this)),n.on("click",$.proxy(this.onBtnLaterClick,this)),this.$el=e,this.$phoneInput=i,this.$dialogSuccess=o,this.$dialogOne=a,this.$dialogInvalid=c},onBtnTicketClick:function(){var e,t=this;return(e=this.$phoneInput.val())?Taxi.validatePhone(e)?a.getCode()?(LoadManager.request({data:{qt:"bddiscount",phone:e,channel:n.urlToJSON(location.search.split("?")[1]).channel,code:a.getCode(),vcode:a.getVCode()},success:function(){t.$dialogSuccess.css({display:"-webkit-box"})},error:function(e){if(e&&"number"==typeof e.errno)switch(e.errno){case-400:t.$dialogOne.css({display:"-webkit-box"});break;case-401:case-402:t.$dialogInvalid.css({display:"-webkit-box"});break;case-403:o.open({text:"验证码错误！",layer:!0});break;default:o.open({text:"获取失败，请稍后重试！",layer:!0})}}}),void 0):(o.open({text:"请输入验证码！",layer:!0}),!1):(o.open({text:"手机号格式错误！",layer:!0}),!1):(o.open({text:"请输入手机号！",layer:!0}),!1)},onBtnLaterClick:function(){this.$dialogSuccess.css({display:"none"})},init:function(){this.create()}};i.exports=t});