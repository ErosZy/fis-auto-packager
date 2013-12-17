{%style id="/widget/order/order.inline.less"%}.txtbox{display:table;padding:11px 27px;background-color:#000;opacity:.7;border-radius:5px;color:#fff;font-size:14px;text-align:center;margin:0 auto}.txtbox .t0{display:table-cell;vertical-align:middle;text-align:center}.hotelorder{margin:10px 8px}.hotelorder input{-webkit-box-flex:1;display:block;height:33px;padding:8px 8px 8px 2em;border:1px solid #c9c9c9;-webkit-border-radius:3px;text-align:right;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box}.hotelorder input[type=text]:focus{outline:#4e89ff auto 3px;border-color:#4e89ff;box-shadow:0 0 3px rgba(18,121,154,.6)}.hotelorder input::-webkit-input-placeholder{text-align:right}.hotelorder .info-container{background:#fff;border:1px solid #DADADA;border-radius:3px}.hotelorder .hotelinfo{height:50px;background:#f3f3f3;padding-left:8px;padding-bottom:8px}.hotelorder .hotelinfo span{display:block}.hotelorder .hotelinfo .title{color:#333;font-size:16px;padding-top:10px;font-weight:700}.hotelorder .hotelinfo .time{color:#737373;font-size:12px;padding-top:3px}.hotelorder .guest-item{position:relative;display:-webkit-box;margin-bottom:8px}.hotelorder .roominfo{margin:10px 8px 0}.hotelorder .roominfo .roomtype .left{line-height:30px;font-size:16px;color:#333}.hotelorder .roominfo .roomtype .right{float:right;display:inline-block;height:28px;width:15%;line-height:28px;padding-left:15px;-webkit-border-radius:3px;background:#fff;position:relative;border:1px solid #c9c9c9;text-align:left;-webkit-tap-highlight-color:rgba(0,0,0,0)}.hotelorder .roominfo .roomtype .number{font-size:14px;color:#ff5026;vertical-align:top;font-style:normal}.hotelorder .roominfo .roomtype .select_icon{position:absolute;height:28px;width:9px;right:4px;top:11px;background:url(/static/place/images/select_area_060d02b.png) 0 0 no-repeat;background-size:9px 5px}.hotelorder .roominfo .roomtype select{opacity:0;position:absolute;height:100%;width:100%;left:0}.hotelorder .roominfo .guestinfo{margin:20px 0}.hotelorder .roominfo .guestinfo .guest-phone{margin-top:16px}.hotelorder .roominfo .guestinfo .icon{position:absolute;height:17px;width:16px;left:8px;top:8px;background:url(/static/place/images/order_icon_a920a52.png) 0 0 no-repeat;background-size:16px 70px}.hotelorder .roominfo .guestinfo .phone-icon{background-position:0 -27px}.hotelorder .roominfo .notice{text-align:right;color:#586b93;line-height:16px;vertical-align:top;margin-bottom:15px}.hotelorder .roominfo .notice-icon{background:url(/static/place/images/order_icon_a920a52.png) 0 -54px no-repeat;background-size:14px 70px;height:15px;width:14px;padding-right:4px}.hotelorder .identity{border:1px solid #dadada;border-radius:3px;padding:8px;background:#fff;margin-top:10px}.hotelorder .identity .identity-tit{font-size:14px;color:#7d7d7d;margin-bottom:12px}.hotelorder .identity .identity-des{position:absolute;color:#333;top:5px;left:8px}.hotelorder .verifycode{margin-bottom:10px;position:relative}.hotelorder .verifycode input{margin-left:8px}.hotelorder .verifycode .verifyinput{display:-webkit-box;margin-right:145px}.hotelorder .verifycode .codeimg{height:30px;border:1px solid #DDD;width:90px;position:absolute;right:50px;top:0}.hotelorder .verifycode .changecode{position:absolute;right:0;top:8px;color:#ff5026;text-decoration:underline}.hotelorder .pricetotal{text-align:right;color:#737373;font-size:12px;margin:13px 0}.hotelorder .pricetotal strong{color:#ff5026;font-size:16px}.hotelorder .pricetotal .gwj-bonus,.hotelorder .pricetotal .gwj-kehuduan-bonus{background:#f93f36;color:#fff;font-size:12px;padding:2px 8px;text-align:right;border-radius:3px;display:inline-block;margin-top:6px}.hotelorder .submitbutton{background:#68b3de;color:#fff;text-align:center;width:100%;border-radius:3px;height:40px;font-size:16px;line-height:40px}.hotelorder .register-info{font-size:12px;color:#737373;text-align:center;padding-top:10px}{%/style%}{%*订单填写 坦然*%}
<div id="hotelOrder" class="hotelorder">
<div class="info-container">
<div class="hotelinfo">
<span class="title">{%$data.hotel_info.hotel_name|f_escape_xml%}</span>
<span class="time">{%$data.query.st|f_escape_xml%}入住，{%$data.query.et|f_escape_xml%}离店，共{%count($data.room_price)%}天</span>
</div>
<div id="roomInfo" class="roominfo">
<div class="roomtype">
<span class="left">{%$data.room_info.room_name|f_escape_xml%}</span>
<span class="right">
<em class="number">1间</em>
<select>
</select>
<span class="select_icon"></span>
</span>
</div>
<div class="guestinfo">
<div class="guest-item guest-name">
<em class="icon guest-icon"></em>
<input class="guest" type="text" name="guests" maxlength="20" value="" placeholder="姓名,每间填1人" />
</div>
<div id="moreGuest">
</div>
<div class="guest-item guest-phone">
<em class="icon phone-icon"></em>
<input class="guest" type="text" pattern="[0-9]*" name="phone" maxlength="11" value=""
                           placeholder="{%if $data.is_gwj%}用于接收确认短信及返券短信{%else%}用于接收确认信息{%/if%}" />
</div>
</div>
</div>
</div>
{%if $data.hotel_info.src_need_identity === "1"%}
<div class="identity">
<p class="identity-tit">身份信息</p>
<div class="guest-item identity-name">
<span class="identity-des">姓名</span>
<input type="text" name="contact_name" maxlength="10" placeholder="请填写真实姓名" />
</div>
<div class="guest-item identity-num">
<span class="identity-des">身份证</span>
<input type="text" name="contact_identity" maxlength="18" placeholder="请填写有效身份证号" />
</div>
</div>
{%/if%}
<div class="pricetotal">
<p><strong>订单金额：&yen;<span id="priceTotal">{%$data.room.single_price|f_escape_xml%}</span></strong>(到店支付)</p>
{%if $data.is_gwj%}
{%if $kehuduan%}
<a attr-href="/mobile/webapp/place/guarantee/type=orderact{%if $kehuduan%}/kehuduan=1{%/if%}"
                    class="gwj-kehuduan-bonus"
                    data-log="{code: {%$STAT_CODE.PLACE_HOTEL_GWJ_ORDER_ACTDES_CLICK|f_escape_xml%}, srcname:'hotel'}">
{%else%}
<a href="/mobile/webapp/place/guarantee/type=orderact"
                   class="gwj-bonus"
                   data-log="{code: {%$STAT_CODE.PLACE_HOTEL_GWJ_ORDER_ACTDES_CLICK|f_escape_xml%}, srcname:'hotel'}">
{%/if%}
可返：&yen;30×<span class="gwj-bonusnum" data-datenum="{%count($data.room_price)%}">{%count($data.room_price)%}</span>团购券 >{%/if%}
</a>
</div>
<div class="verifycode">
<div class="verifyinput"><input type="text" name="code" class="verifycode" placeholder="请填写验证码" value="" /></div>
<div class="verifycode-img"></div>
</div>
<input type="hidden" name="uid" value="{%$data.query.uid|f_escape_xml%}" />
<input type="hidden" name="src" value="{%$data.query.src|f_escape_xml%}" />
<input type="hidden" name="hotel_id" value="{%$data.hotel_info.hotel_id|f_escape_xml%}" />
<input type="hidden" name="room_type" value="{%$data.query.room|f_escape_xml%}" />
<input type="hidden" name="checkin_time" value="{%$data.query.st|f_escape_xml%}" />
<input type="hidden" name="checkout_time" value="{%$data.query.et|f_escape_xml%}" />
<input type="hidden" name="room_num" value="1" />
<input type="hidden" name="src_need_identity" value="{%$data.hotel_info.src_need_identity|f_escape_xml%}" />
<div class="submitbutton" id="submitButton">提交订单</div>
{%if $data.hotel_info.reg_hint%}<p class="register-info">{%$data.hotel_info.reg_hint|f_escape_xml%}</p>{%/if%}
</div>
{%script%}
	var data = {%json_encode($data.room_price)%} || {};
    (require("place:widget/order/order.js")).init({
        data: data,
        kehuduan: '{%$kehuduan|f_escape_js%}'
    });
{%/script%}