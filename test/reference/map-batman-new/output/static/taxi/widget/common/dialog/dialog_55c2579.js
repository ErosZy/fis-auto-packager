define("taxi:widget/common/dialog/dialog.js",function(t,i,e){"use strict";var i,n;n={layer:!0},i={create:function(t){var i,e,o,a=this,d=this.$el=$("<div/>").addClass("taxi-widget-dialog").hide(),s=this.$content=$("<div/>").addClass("content").appendTo(d),r=this.$buttonBar=$("<div/>").addClass("button-bar").appendTo(d);return t=this.options=$.extend({},n,t),o=t.content,"string"==typeof o?s.html(o):s.append(o),t&&(e=t.buttons)&&$.each(e,function(t,i){$("<button/>").text(t).on("click",$.proxy(i,a)).appendTo(r)}),t.layer?(i=this.$layer=$("<div/>").addClass("taxi-widget-dialog-layer").hide(),i.append(d).appendTo(document.body)):d.appendTo(document.body),this},close:function(){return this.$el.hide(),this.options.layer&&this.$layer.hide(),this},open:function(){return this.$el.show(),this.options.layer&&this.$layer.show(),this},destroy:function(){return this.$buttonBar.find("button").each(function(t,i){$(i).off("click")}),this}},e.exports=i});