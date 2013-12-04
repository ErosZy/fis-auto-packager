define("taxi:widget/resubmit/resubmit.js",function(t,e,i){"use strict";var o=t("common:static/js/util.js"),a=t("taxi:widget/common/popup/popup.js"),r=t("common:widget/stat/stat.js"),n=t("taxi:static/js/storage.js"),d=t("taxi:widget/common/addprice/addprice.js"),s=t("taxi:widget/common/radar/radar.js"),e={create:function(){var t,e=$(".taxi-widget-resubmit"),i=e.find(".btn-resubmit"),o=e.find(".btn-back"),a=e.find("form"),r=e.find(".addprice-wrapper"),n=this.options;n.price_list?(t=n.price_list.split(","),d.init(t),e.find("[type=input][name=add_price]").remove()):r.hide(),e.find("[name=city_code]").val(n.city_code),e.find("[name=order_id]").val(n.order_id),i.on("click",$.proxy(this.onBtnResubmitClick,this)),o.on("click",$.proxy(this.onBtnBackClick,this)),this.$el=e,this.$form=a},onBtnResubmitClick:function(){var t=$.extend({price_list:this.options.price_list,taxi_num:this.options.taxi_num},o.urlToJSON(this.$form.serialize()));a.open({text:"正在提交表单...",layer:!0,autoCloseTime:0}),LoadManager.request({data:$.extend({},t,{qt:"addpricereq"}),success:function(e){n.set("orderId",e.info.order_id),n.set("orderStartTime",Date.now()),LoadManager.loadPage("waiting",$.extend({},t,e.info)),r.addStat(STAT_CODE.TAXI_ADDPRICEREQ)},error:function(t){var e="";switch(t.errno){case-304:e="订单已过期或结束！";break;case-113:e="请求过于频繁，请稍后再试！";break;default:e="系统错误！"}a.open({text:e,layer:!0,onClose:function(){n.remove("orderId"),LoadManager.loadPage("home")}})}})},onBtnBackClick:function(){n.remove("orderId")},destroy:function(){s.destroy()},init:function(){var t=this.options=LoadManager.getPageOptions(),e=n.get("orderId");t&&e||LoadManager.loadPage("home"),this.create()}};i.exports=e});