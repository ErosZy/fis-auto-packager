define("place:widget/hotelthirdsrc/hotelthirdsrc.js",function(t,e,o){function i(t){var e;t.uid&&(e={st:t.st,et:t.et,uid:t.uid},s=t.st,n=t.et,a=t.uid,$("#place-pagelet-hotelthirdsrc").html('<div class="hotel-loading"><span></span><span>正在获取实时精准报价数据...</span></div>'),BigPipe.asyncLoad({id:"place-pagelet-hotelthirdsrc"},r.jsonToUrl(e)+"&pageletGroup=third"))}var a,s,n,r=t("common:static/js/util.js"),d=t("common:widget/url/url.js"),l=t("common:widget/stat/stat.js"),h=_APP_HASH.action;listener.on("place.datepicker","datechange",function(t,e){i(e)}),o.exports={init:function(t){this.firstShowNum=4,this.options=t||{},this.$el=$("#place-pagelet-hotelthirdsrc"),l.addStat(STAT_CODE.PLACE_HOTEL_BOOKABLE_DETAIL_VIEW,{type:t.hotelType,from_page:h}),this.bind()},fetchThirdsrc:i,bind:function(){listener.trigger("place.datepicker","showcalendar"),this.$el.find(".room-more").on("click",$.proxy(this._showAllRooms,this)),this.$el.find(".hotel-head").on("click",$.proxy(this._hideAllRooms,this)),this.$el.find(".bookbtn-normal").on("click",$.proxy(this._addParams,this))},_showAllRooms:function(){var t=this.$el.find(".room-more-icon");this.$el.find(".room-item").slice(this.firstShowNum).toggle(),t.toggleClass("arrow-down"),this.$el.find(".room-more-text").html(t.hasClass("arrow-down")?"收起全部房型":"展开全部房型")},_hideAllRooms:function(){$(".hotel-roomlist-thirdsrc").toggle()},_addParams:function(t){var e,o=$(t.target),i=(new Date).format("yyyy-MM-dd"),r=new Date((new Date).getTime()+864e5).format("yyyy-MM-dd"),c=this.options,p=o.data("url"),m=parseInt(o.data("price"),10),u=parseInt(o.data("bonus"),10)||0,g=c.kehuduan?"/kehuduan=1":"";e={from_page:h,checkin_date:s||i,checkout_date:n||r,price:m,book_price:m-u,simple:1,type:c.hotelType,uid:a||"",kehuduan:c.kehuduan||0},l.addCookieStat(STAT_CODE.PLACE_HOTEL_THIRDSRC_BOOK_CLICK,e),d.navigate("/mobile/webapp/place/order/"+p+g)}}});