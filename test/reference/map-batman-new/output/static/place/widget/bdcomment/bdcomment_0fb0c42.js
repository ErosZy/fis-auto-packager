define("place:widget/bdcomment/bdcomment.js",function(e,t,o){var n=e("common:static/js/util.js");o.exports={startIndex:0,init:function(){var e=this,t=$("#J_commentSelect");t.on("change",$.proxy(e.loadMore,e)),$(".comment-loadmore").on("click",function(){e.loadMore(!0)})},loadMore:function(e){var t,o=this,a=$("#J_commentSelect"),c=0,d=5;e&&(c=++o.startIndex,d=10),t=n.jsonToUrl({uid:a.data("uid"),startIndex:c,maxResults:d,orderBy:a.val()}),BigPipe.asyncLoad({id:"place-pagelet-bdcomment"},t)}}});