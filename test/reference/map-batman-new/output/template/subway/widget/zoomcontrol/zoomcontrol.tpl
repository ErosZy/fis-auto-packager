{%style id="/widget/zoomcontrol/zoomcontrol.inline.css"%}#swZoomControl{-webkit-user-select:none}.block_zoom_btn{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;-webkit-box-sizing:border-box;height:35px;width:35px;background:rgba(255,255,255,.8)}.block_zoom_out_btn{position:absolute;bottom:40px;right:10px;z-index:10;-webkit-box-shadow:1px 1px 2px rgba(0,0,0,.4)}.block_zoom_in_btn{position:absolute;bottom:75px;right:10px;z-index:10;-webkit-box-shadow:1px 0 2px rgba(0,0,0,.4)}.inline_zoom_btn{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAkCAYAAABYFB7QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAmFJREFUeNrsW81OwkAQ3paCgEDTxHiiT+CtvoQmHjxAoidPIsRnkIPv4M/NeOUEMfEx+hScDImBA0bDjzPERCXZBXbX7YLzJRNalnRn5mO3s/u1znQ6ZSLUG01eUxXsFmxn7vsXsBpYB0/u766ZCqB/Xj+mMYsL4un8/DKOY9nrLZW/RYii6Ne5K+mMk0qlHjhJ3vU871FXFgX9mIbOuBwAN3/QJt2PFKE46sbj8TavfTQa+bqyKOrHNHTFhaMKZkZuXNDmGyUUpsEpI0gDpuk/y59L6d0sEKFEqFkUC9bcQlkQlKwn1LPdwZPTo0Gr9Vx6f/9grpvM/28ymbBcLsuqlYMeEaqI/WjvDOwGDgtY9CbkRgqsD3ZJhCoCKuo2fLST6l91Y4TuoQQilLBGU27t/JhYohH6f+Fc1K+sVjNsRxzHVuXP3VA1w9yI4KsmxvOHKo27iWqGSYhUkwR88ekeSkURgQglmCOU1AzFhbxnz1I+nU4zT1bNGA7fhO35fG7pa62TmjGPMAz73W7XxxhWARSjwnZYfax0Pfx9uVzuOVAZ4VbMympGvdEMRO2wnnxdxR/2rWY8rRmnUvmD9aswf1EUSeXPUXiMc9FzMc4XsVqzJ/DHCObjUXiMc6n8LYKuxzgJVOUSjBRp6+YwqS80QmmE2gTb1Ay25DsnNEJ5pZ5lagZNuYqwTc0gQglEKME8oQ6lTq00sIpQ3P4SqTQ6VRPb1AwdwO06UVwq/Ui/H4oqje8XWTa7NVNW0PA4CHxWrRxqU03CMBxggKgmJGmZTAZ90RIXvh/Ki0u1n08BBgAwZsB35lPMnAAAAABJRU5ErkJggg==) 0 0 no-repeat;-webkit-background-size:50px 15px}.inline_zoom_in{width:16px;height:16px;background-position:0 0}.inline_zoom_out{width:16px;height:6px;background-position:-17px 0}.disable_zoom_btn{opacity:.53}.disable_zoom_btn .inline_zoom_in{background-position:-34px 0}.disable_zoom_btn .inline_zoom_out{background-position:-17px -12px}.zoom_btn_tap{background-color:#fafaf9;opacity:.85;border:1px solid #75b4e0;z-index:11}{%/style%}{%* 放大缩小按钮 *%}
<div id="swZoomControl" class="needsclick" style="visibility:hidden;">
<div id="swZoomOut" class="block_zoom_btn block_zoom_out_btn">
<div class="inline_zoom_btn inline_zoom_out"></div>
</div>
<div id="swZoomIn" class="block_zoom_btn block_zoom_in_btn">
<div class="inline_zoom_btn inline_zoom_in"></div>
</div>
</div>
{%script%}
    (require('subway:widget/zoomcontrol/zoomcontrol.js')).init();
{%/script%}