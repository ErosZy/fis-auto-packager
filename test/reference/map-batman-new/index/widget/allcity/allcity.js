/**
 * @file 所有城市组件逻辑
 */

var setCity = require("common:widget/setcity/setcity.js");


module.exports.init = function() {
	bind();
}

var bind = function() {
	var $cityWrap = $(".index-widget-allcity");
	$cityWrap.on("click", ".select-letter span", _onClickLetter);
	$cityWrap.on("click", ".city-item", _onClickCity);

}

var _onClickLetter = function(e) {
	var $dom = $(e.target);
	var href = $dom.data("href");
	window.location.replace(href);
}

var _onClickCity = function(e) {
	var $dom = $(e.target);
	var cityName = $.trim($dom.data("city")),
		cityId = $dom.data("cityid"),
		cityeng = $dom.data("cityeng");
	setCity.setAndRedirect(cityName, cityId, cityeng);
}