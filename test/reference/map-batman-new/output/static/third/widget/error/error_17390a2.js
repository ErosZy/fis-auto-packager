define("third:widget/error/error.js",function(e,t,r){var o="_lastPageUrl",a=function(){$(".back-last-page").on("click",function(){i()})},i=function(){var e=window.localStorage.getItem(o);"string"==typeof e?(window.localStorage.removeItem(o),url.navigate(e,{replace:!0,storageKey:!1})):history.back()};r.exports.init=a});