define("place:widget/hotelextimg/hotelextimg.js",function(t,o,e){e.exports={init:function(){"use strict";$(".hotel-img").on("click",$.proxy(this.gotoPhotoDetail,this))},gotoPhotoDetail:function(t){"use strict";t.preventDefault(),t.stopPropagation();var o=$(t.currentTarget).data("href");o&&(window.location=o)}}});