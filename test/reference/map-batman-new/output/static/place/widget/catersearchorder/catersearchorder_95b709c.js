define("place:widget/catersearchorder/catersearchorder.js",function(t,e){var n=t("common:widget/popup/popup.js"),i=t("common:widget/url/url.js"),o=1e3,a=60,r="disabled",c="重新获取",d="秒后重新获取",s="网络连接失败",h="请输入正确的手机号码",l="验证码不能为空",u="/mobile/webapp/place/cater/qt=orderlist{{kehuduan}}?mobile=",v="json",f="",p=f+"/detail?qt=cater_phonecaptcha",m=f+"/detail?qt=cater_verifycaptcha",C=function(t){t=t||{},n.open(t.errorMsg||s)},b=function(t){return t&&11===t.length&&t.match(/^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}|15[0-9]\d{8}|18\d{9}/g)?!0:!1},B=function(t){return!!t},S=function(){this.$el=$("#place-widget-catersearchorder"),this.$submit=this.$el.find('[data-node="submitBtn"]'),this.$tel=this.$el.find('[data-node="tel"]'),this.$vCode=this.$el.find('[data-node="veriCode"]'),this.$vCodeBtn=this.$el.find('[data-node="veriCodeBtn"]'),this.init()};S.prototype={init:function(){this.bindEvent()},bindEvent:function(){this.onSearchFormSubmitHandle=$.proxy(this.onSearchFormSubmit,this),this.onVCodeBtnClickHandle=$.proxy(this.onVCodeBtnClick,this),this.$submit.on("click",this.onSearchFormSubmitHandle),this.$vCodeBtn.on("click",this.onVCodeBtnClickHandle)},changeSCodeBtn:function(t){var e=this;this.timer&&clearInterval(this.timer);var n=isNaN(t)?a:t;this.$vCodeBtn.addClass(r);var i=function(){--n?e.$vCodeBtn.html(n+d):(clearInterval(e.timer),e.$vCodeBtn.html(c),e.$vCodeBtn.removeClass(r))};this.timer=setInterval(i,o)},getSMSCode:function(t){var e=this.$tel.val();return b(e)?($.ajax({url:p,type:"GET",dataType:v,cache:!1,data:{phone_num:e},success:function(e){return e&&0===e.errorNo?("function"==typeof t&&t(e),void 0):C(e)},error:C}),void 0):n.open(h)},checkForm:function(){var t=this.$tel.val(),e=this.$vCode.val();return b(t)?B(e)?!0:(n.open(l),!1):(n.open(h),!1)},onVCodeBtnClick:function(){var t=this,e=this.$vCodeBtn.hasClass(r);if(!e){var n=function(e){e=e||{},t.changeSCodeBtn(e.delay)};this.getSMSCode(n)}},onSearchFormSubmit:function(t){if(t.preventDefault(),this.checkForm()){var e=this.$vCode.val(),n=this.$tel.val();$.ajax({url:m,type:"GET",data:{captcha:e,phone_num:n},cache:!1,dataType:v,success:function(t){return t&&0===t.errorNo?(i.navigate(u+n,{replace:!1}),void 0):C(t)},error:C})}},unbindEvent:function(){this.$submit.off("click",this.onSearchFormSubmitHandle),this.$vCodeBtn.off("click",this.onVCodeBtnClickHandle)},destroy:function(){this.unbindEvent()}},e.init=function(t){return t=t||{},u=u.replace("{{kehuduan}}",t.kehuduan?"&kehuduan=1":""),new S}});