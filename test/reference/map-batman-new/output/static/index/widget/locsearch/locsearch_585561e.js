define('index:widget/locsearch/locsearch.js', function(require, exports, module){

/**
 * @file 位置页检索
 */

var loc  = require('common:widget/geolocation/location.js'),
	url = require("common:widget/url/url.js"),
	DEFAULT_VALUE = "输入城市或者其他位置",
	// referQueryKey = "_refer_query",
	// referPageStateKey = "_refer_pagestate",
	$inputBox;

module.exports.init = function(){
	$inputBox = $(".index-widget-locsearch");
	bind();
	// processRefer();
}

var bind = function () {
	var $input = $("#search-input");
	var $searchBtn = $inputBox.find("#search-button");
	var $form = $inputBox.find("form");

	$input.on("focus",$.proxy(_onClickInput,this));
	$input.on("blur",_onBlurInput);
	$input.on("foucs",_onClickInput);
	$searchBtn.on("click",_onSubmit);
	$form.on("submit",_onSubmit);
}


// var processRefer = function () {
// 	window.localStorage.removeItem(referQueryKey);
// 	window.localStorage.removeItem(referPageStateKey);
// }

var _onClickInput = function (evt) {

	var $dom = $(evt.target);

	if($dom.val() === DEFAULT_VALUE) {
		$dom.val('');
		$dom.removeClass('ipt');
	}
}

var _onBlurInput = function(evt){
	var $dom = $(evt.target);

	if($.trim($dom.val()) === "") {
		$dom.val(DEFAULT_VALUE);
		$dom.addClass('ipt');
	}
}

/**
* 获取地点点选的请求query
* @param {string} value 用户的输入
* @return {string} query 
*/
var _getSelectPoiQuery = function(value){
	var query = {
		qt : 's',
		wd : $.trim(value),
		c  : loc.getCityCode()
	}
	return query;
}


var _onSubmit = function (evt) {

	var $input = $("#search-input");
	var wd = $input.val();
	var query = _getSelectPoiQuery(wd);
	var _state = url.get().pageState || {};

	url.update({
		module : "place",
		action : "selectpoint",
		query : query,
		pageState : {
			refer_pagestate : _state.refer_pagestate,
			refer_query : _state.refer_query
		}
	},{
		queryReplace : true,
		pageStateReplace : true
	});
	evt.preventDefault();
}


});