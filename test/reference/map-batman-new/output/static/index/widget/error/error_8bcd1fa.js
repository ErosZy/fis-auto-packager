define("index:widget/error/error.js",function(e,o,t){var r=e("common:widget/url/url.js"),n="_lastPageUrl",a=function(){$(".back-last-page").on("click",function(){i()})},i=function(){var e=window.localStorage.getItem(n);"string"==typeof e?(window.localStorage.removeItem(n),r.navigate(e,{replace:!0,storageKey:!1})):history.back()};t.exports.init=a});