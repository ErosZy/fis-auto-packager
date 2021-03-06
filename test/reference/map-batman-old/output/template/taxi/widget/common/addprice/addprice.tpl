{%style id="/widget/common/addprice/addprice.inline.less"%}.taxi-widget-addprice {
  overflow: hidden;
  width: 270px;
  margin: 0 auto;
}
.taxi-widget-addprice .title,
.taxi-widget-addprice .wrapper {
  float: left;
}
.taxi-widget-addprice .title {
  font-size: 13px;
  color: #a3a3a3;
  margin-top: 24px;
}
.taxi-widget-addprice .wrapper {
  width: 240px;
  height: 50px;
  background: url(/static/taxi/widget/common/addprice/images/bg-addprice_d9621ff.png) no-repeat center 20px;
  background-size: 201px 18px;
}
.taxi-widget-addprice .option {
  position: relative;
  float: left;
  width: 35px;
  height: 35px;
  margin: 0px 12px 0px 13px;
  padding-top: 15px;
}
.taxi-widget-addprice .option.checked {
  background: url(/static/taxi/widget/common/addprice/images/bg-checked-option_572a935.png) no-repeat center 15px;
  background-size: 35px 35px;
}
.taxi-widget-addprice label,
.taxi-widget-addprice input[type=radio] {
  display: block;
}
.taxi-widget-addprice label {
  position: absolute;
  top: 0px;
  height: 15px;
  font-size: 12px;
  color: #a3a3a3;
  width: 100%;
  text-align: center;
}
.taxi-widget-addprice .option.checked label {
  font-size: 14px;
  color: #333;
}
.taxi-widget-addprice input[type=radio] {
  visibility: hidden;
}
{%/style%}<div class="taxi-widget-addprice" style="display: none;">
    <div class="title">加价</div>
    <div class="wrapper"></div>
</div>