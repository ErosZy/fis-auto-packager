define("place:widget/movienews/movienews.js",function(require,exports,module){function getOrientation(){var e=window.outerWidth>0?window.outerWidth>window.outerHeight?90:0:document.body.offsetWidth>document.body.offsetHeight?90:0;return e}function formatDate(e){return e.getFullYear()+"-"+(e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())}function formateDateText(e,t){var a=["周日","周一","周二","周三","周四","周五","周六"];return e&&e instanceof Date?0==e-t?"今天":864e5==e-t?"明天":1728e5==e-t?"后天":a[e.getDay()]:""}function Schedules(e,t){var a={".btn-more":this.showMore,".btn-close":this.showSpecific,".btn-book":this.bookMovie,".calendar_tab li":this.switchTab,".cover-pic":this.showMovieInfo,".movieDes":this.showDesPopup,".show-info":this.showCompare};this.elePlaceMovie=$("div.place-widget-movienews"),this.now=e,this.uid=t;for(var i in a)this.elePlaceMovie.delegate(i,"click",$.proxy(a[i],this))}require("place:static/lib/template.js");var util=require("common:static/js/util.js"),stat=require("common:widget/stat/stat.js"),iScroll=require("common:static/js/iscroll.js"),DETAILTPL=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="cover">    <div id="cover-wrapper" class="cover-wrapper">        <div id="cover-scroller" class="cover-scroller">            ');for(var j=0,len=imgs.length;len>j;j++)_template_fun_array.push('            <img class="cover-pic needsclick" width="69" height="84" data-id="',"undefined"==typeof imgs[j].id?"":baidu.template._encodeHTML(imgs[j].id),'" data-date="',"undefined"==typeof imgs[j].day?"":baidu.template._encodeHTML(imgs[j].day),'" src="http://map.baidu.com/maps/services/thumbnails?width=96&height=128&quality=100&src=',"undefined"==typeof imgs[j].url?"":baidu.template._encodeHTML(imgs[j].url),'" style="display:',"undefined"==typeof imgs[j].visible?"":baidu.template._encodeHTML(imgs[j].visible),'" alt="',"undefined"==typeof imgs[j].title?"":baidu.template._encodeHTML(imgs[j].title),'">            '),imgs[j].newm&&_template_fun_array.push('            <span class="new_icon" style="display:',"undefined"==typeof imgs[j].labelvis?"":baidu.template._encodeHTML(imgs[j].labelvis),'"></span>            '),_template_fun_array.push("            ");_template_fun_array.push('        </div>    </div></div><p class="info-tip"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHCAgICAgICAgICD/2wBDAQcHBw0MDRgQEBgaFREVGiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCABZANADAREAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAEEAwUGAgj/xABHEAABAwIDAwUKCQsFAAAAAAABAAIDBBEFEiETIjEGFEFRcRUWMlJhgZPR0tMjQlRVkZKUo8EkQ0RTYnKDocPh4zNksbKz/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAiEQEAAwACAQQDAQAAAAAAAAAAAQIRAyESBDFBUSIyYUL/2gAMAwEAAhEDEQA/APqlAQFAQEBAQEBAQEBQEBAQEBUEBAQEBAQEBAVBAUBAQEBAQEBQEBAQEBAQEBAQEBUEBAQEBAQEBAQEBAQFAQEBBF1AQEBAQQ5wa0ucbNGpJ6kHOycp6momhgpKbKysfsoahzxnAP53ZWNwG71r9tl5OP1tL8nhGu88ExGy6RexwEBAQFQQEBAQEBAQEBAUBAQQoKkmKUUcj43POeM2cAx51tfoB6ChjLSVdNVw7aneJI7kXHWOIIOoKDMgICAgwV1DTV1M6mqWl8L/AAmgube3laQVMWFCl73qCaQQubzhu5K8l0sg/ZLjmI7FinHWv6xi2tM+7ZxSxzRiSJ2ZjuDgujL2gm6AqCAgKggICAgICAoCCFBr8bk2dKx5zFolZnYxxY5wOlgQQfKiw1nPaR36LP55n+2itXiDny1VOaKmkp2RTZ6wFhk27Mvghxdp2orYUtTSOY7Z4QYBmN2vBbc9dvxRGXbQ/N0Z7c/sFA20XzbF957tA20fRhzPNtfdoG3Z83/+vsoG2Z83n731INTiLKmqh2WH0EmHStma6ScQZ9o0HeGvjdaK2kM8ZjB7kuj47rmPB4+QdPFEe4ntdWUuWlFMRKPhLPF907uo6UHQoyIJVBAQFQQEBAQFAQQoCCli9xRFzfDD48js2XKS8DNezuF+pFhS5ti/TV/fN9yqMZpMezkjEGhhtlbnGnXrskGF9Bj8lO+KorjI64dG+GSNti0hzb5otd4IrXw4tygpdmzF5Zr6MklijYxjSfjF2V7C3y3XCvJyeWTXI+25rXOpbrJiv62f0lP7C79uaNnix/PS+lg90p2pscV+USD+NF7lO0QYsVH6UfPOz8IFRXbT44HvMuJMLCfg27S1h5fgtVFI469rLT10bn63cJS3p002fUgyUjQcRpWmobObuflbJmtlYd4jKPGQdAoyKgglUEBUEBAQFAQQVAQFBUxYE4ZVWbnOydZhbnvp4ut+xFaLm+B+M77GPdK9Kwmj5OmZxM8u0s3NGKYaDW27stLp0PNDR8mwx4p5ppwHnOTTbSzvFvstOxOha5rg3izfYh7lOhHNcH8Sf7H/AIk6E80wvojmPbRf41OhPM8N/Uznsox+MavQjmeH9EFX9ljH9JToUKel5PPlnNPFWPkD7T/B8Ha6eBp5k6VdoqXD2wDm1LVuiu626OOY5uLR8a6qNjhUcorJHCKaGBsYAE2XeeXG9ra7oH81EbdARBUEEqggKggICgIIUBAUVSxHFqHD2B1TJZzvAiaM0jv3WDUoKDeV2Gk2EVT6JyLio/Hac18s4hnMb442i0Zvdhff/sEMV8AxZlAysE8FQdtUOmjyxk7ruv6EG076qP5NV+hPrUww76aT5LV+i/umGK0/LnC4H7N8FSJNNzIL3dwHHiehTY3PlfGVnvlb8hqfqt9a1iYd8v8AsKj6G+tMMaahramlqq2V1DIWVM20ZqBYXJ1+lMFug5Rc0pGwyUr84Lyd5tt55d09qYYynlhEONOG/vStHrQxs8JxqkxKN2yOWeO22gJBc2/DUaEHoIRGxQEQVEqggKggICgIIUBQaHGsenilloqFuSojy7SplZI6NubWzcjXZnZfMEac+6KOR+1qeazzkWdPM2oLz57Cw8g0VVLXUMJaM1DHmNmi02p6hdqCy2oh/WUvopT/AEymo9CdnRJT28kMvuVdEtlgvvCJ3ZDN7hNHq9OeEIPZBN7hNFWnw2iiOkE8jM20ET453sz+NYxC57brjHDTy8s/JvznM+F0hlt2i18tM8/8sC66w873yPL2UfrsmjG6lD+NM77Cz8SmjycPB8GCQHo/IIPxcminQthr2Okoqh1Qxjix7oqKkIDhxHhJqrTaCvjmjnikqo5ojdrmUlM246Wuyvbdp6QiOlwjEpqtskdTCaeqhtnYbWc13gvbYusDY6HgojYoCqAQSqCAqCgIIKgICitfNhJdUyzxVcsJmIc9jRGW3DQ347HHgOtB47mVvRiMno4fZUHG4hFX18sM9ZIyY4fUSPo3mMbrmPMYdo4XuBquc2VeocUxyonqI3VrRsshBELdc9/L5FuvaNjROxOeoljmr9nG1rDHJs4xmJJzDW/CwVF8YfVu4Yo49kcXqUHvuTV9OIy+ZkPsFBPcd/TX1P3Q/ppodxj8vqvrR+wgxuwyFvhYlUD+JH7KGqFfTkOi5riVRYX2ozMPRpqWdaprTzz4q3EHU8dfUFojY8asvdznA/E/ZWbTgxUVLV0UkMUE8lPTzVLNs2MRNBMrwHO3WcTfisxZXX9xmnUV1SfLnb7K3AzUeGR0s759tLNI9ojJlcDZrSSLWA6XLSLyAqgglUEBUEBMBTBhqZ208Jle17mttpG1z3am3gtuUwabE+U1RT0e1o8Kq6qpe7LDTmN0eYDwiXWdk0BtmGq5zM/RrlsQ5R8qqWpEmH4fiBgmMjZIZ6cucHPawsscxF2uu3xbLy8dLU33nZdOXk8s6zIe3cpuUTGPifgdacmjnwBzmiS+8bFrcwbfj09CvHWaVyIlztebLtBQ18OF0wmppZHujDpQ1tzmdvO07SukxP0TLkajvtqMWbsMHqxDC8S5WsMTniMnZ5tpoP8AV61i1bT0OojrsaELRJg1a+czbNx2Ya0N0u86k2trp2LXBW9a5b3avMTLZOFQ3LakqHZgHC0R6evqPkXfGVoYfiFgdm4X1tcX8+qviJFBiN7ZHfW/uniPQwzEHXu0+d3908REuF1cTS7JmDfF1P0cVJglpcQr8QghJo8Lq6uo+IzZPay4IFnEi+t+IXO3l1kdClyXouUUhrJMSpJ4pdps4hLq4xh73DXpAz2BU/KVXsbp8Qiw2aSOknlkZZ7WxN3rxkP0+qszE/RuJ5PY3ytLxFX4NUU7Do3daWcLkmxu29lj0/Dak5/j4/jpfki0f11NBXy1TiHUksDR8aUZf5GxXsxzXrJiFlcBMEq4CYCoICAgICAgICAgICAgICAgICAgICAgICAgIP/Z" /><br>暂无当日排期...</p><div class="info '),book||_template_fun_array.push("info-unbook"),_template_fun_array.push('">    '),book&&_template_fun_array.push('    <div class="list-opt">        <button id="btnMovieBookMore" class="btn-more">查看更多影讯<i class="icon-arrow"></i></button>        <button id="btnMovieBookClose" class="btn-close">收起<i class="icon-arrow"></i></button>    </div>    '),_template_fun_array.push("</div>"),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],TABSTPL=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="tab"><div id="tab_wrapper" class="tab_wrapper"><ul class="calendar_tab">    ');for(var i=0,len=days.length;len>i;i++)_template_fun_array.push('    <li data-date="',"undefined"==typeof days[i].date?"":baidu.template._encodeHTML(days[i].date),'" data-text="',"undefined"==typeof days[i].text?"":baidu.template._encodeHTML(days[i].text),'" '),0==i&&_template_fun_array.push('class="current"'),_template_fun_array.push(" "),days[i].disabled&&_template_fun_array.push('class="disabled"'),_template_fun_array.push(">","undefined"==typeof days[i].text?"":baidu.template._encodeHTML(days[i].text),"</li>    ");_template_fun_array.push("</ul></div></div>"),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],INFOTPL=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<dl>    <dt><em class="tit">',"undefined"==typeof name?"":baidu.template._encodeHTML(name),"</em> "),parseInt(score)>0&&_template_fun_array.push('<em class="sco"> ',"undefined"==typeof score?"":baidu.template._encodeHTML(score),"</em>"),_template_fun_array.push('<em data-id="',"undefined"==typeof id?"":baidu.template._encodeHTML(id),'" class="movieDes des">影片简介&gt;&gt;</em></dt>    <dd>        ',"undefined"==typeof times?"":baidu.template._encodeHTML(times),"    </dd></dl>"),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],TIMETPL=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<ul class="show-list '),schedules.length>4&&_template_fun_array.push("part"),_template_fun_array.push('">');for(var j=0,len=schedules.length;len>j;j++){if(_template_fun_array.push('<li class="show-item '),0==j&&schedules[j].book&&schedules[j].seatL&&_template_fun_array.push("expand"),_template_fun_array.push('"><div class="show-info"><span class="meta"><em class="time">',"undefined"==typeof schedules[j].time?"":baidu.template._encodeHTML(schedules[j].time),"</em>","undefined"==typeof schedules[j].type?"":baidu.template._encodeHTML(schedules[j].type),'</span><span class="meta-extend"><i class="icon-price">&yen;</i>',"undefined"==typeof schedules[j].price?"":baidu.template._encodeHTML(schedules[j].price),"起"),schedules[j].url?_template_fun_array.push('<a class="btn-exchange" href="',"undefined"==typeof schedules[j].url?"":baidu.template._encodeHTML(schedules[j].url),'">兑换码</a>'):_template_fun_array.push('<i class="icon-arrow"></i>'),_template_fun_array.push("</span></div>"),schedules[j].seatL){_template_fun_array.push('<ul class="compare-list">');for(var i=0,leng=schedules[j].list.length;leng>i;i++)_template_fun_array.push('<li><span class="brand">',"undefined"==typeof schedules[j].list[i].src_name?"":baidu.template._encodeHTML(schedules[j].list[i].src_name)," "),0==i&&leng>1&&_template_fun_array.push('<i class="icon-sheap"></i>'),_template_fun_array.push("</span>"),schedules[j].list[i].price&&_template_fun_array.push('<span class="price"><i class="icon-price">&yen;</i>',"undefined"==typeof schedules[j].list[i].price?"":baidu.template._encodeHTML(schedules[j].list[i].price),"</span>"),_template_fun_array.push('<span class="opt"><a class="btn-book ',"undefined"==typeof schedules[j].style?"":baidu.template._encodeHTML(schedules[j].style),'" data-day="',"undefined"==typeof schedules[j].day?"":baidu.template._encodeHTML(schedules[j].day),'" data-num="',"undefined"==typeof schedules[j].list[i].seq_no?"":baidu.template._encodeHTML(schedules[j].list[i].seq_no),'" data-cinema="',"undefined"==typeof schedules[j].list[i].cinema_id?"":baidu.template._encodeHTML(schedules[j].list[i].cinema_id),'" data-theater="',"undefined"==typeof schedules[j].theater?"":baidu.template._encodeHTML(schedules[j].theater),'" data-time="',"undefined"==typeof schedules[j].time?"":baidu.template._encodeHTML(schedules[j].time),'" data-price="',"undefined"==typeof schedules[j].list[i].price?"":baidu.template._encodeHTML(schedules[j].list[i].price),'" data-movie="',"undefined"==typeof schedules[j].list[i].movie_id?"":baidu.template._encodeHTML(schedules[j].list[i].movie_id),'" data-info="',"undefined"==typeof schedules[j].info?"":baidu.template._encodeHTML(schedules[j].info),'" data-orign="',"undefined"==typeof schedules[j].list[i].src?"":baidu.template._encodeHTML(schedules[j].list[i].src),'">选座订票</a></span></li>');_template_fun_array.push("</ul>")}_template_fun_array.push("</li>")}_template_fun_array.push("</ul>"),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],POPUPTPL=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="moviebook-popup-wrapper"><div class="moviebook-popup"><div class="header">',"undefined"==typeof title?"":baidu.template._encodeHTML(title),'院线购票手机验证<a href="javascript:void(0);" id="valid-btn-close" class="btn-close"></a></div><div class="content"><p><label>手机号:&nbsp;</label><input id="valid-phone" autocomplete="false" type="tel"><span class="tip"></span></p><p><label>验证码:&nbsp;</label><input id="valid-number" autocomplete="false" type="text"><img src=""><span class="tip"></span></p><p><button id="valid-btn-submit" class="submit-btn" type="button">提交</button></p></div></div></div>'),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0],DESPOPUPTPL=[function(_template_object){var _template_fun_array=[],fn=function(__data__){var _template_varName="";for(var name in __data__)_template_varName+="var "+name+'=__data__["'+name+'"];';eval(_template_varName),_template_fun_array.push('<div class="moviebook-popup-wrapper"><div class="moviedes_popup"><div class="header">',"undefined"==typeof name?"":baidu.template._encodeHTML(name),""),parseInt(score)>0&&_template_fun_array.push('<span class="sco"> ',"undefined"==typeof score?"":baidu.template._encodeHTML(score),"</span>"),_template_fun_array.push('<a href="javascript:void(0);" id="des-btn-close" class="btn_close"> X </a></div><div class="content" style="text-align:left;"><style>table.des td{vertical-align: top;}</style><table class="des"><tr><td width="45"><span class="name">版本</span>:</td><td><span>',"undefined"==typeof(type||"暂无")?"":baidu.template._encodeHTML(type||"暂无"),'</span></td></tr><tr><td><span class="name">片长</span>:</td><td><span>',"undefined"==typeof(duration||"暂无")?"":baidu.template._encodeHTML(duration||"暂无"),'</span></td></tr><tr><td><span class="name">上映</span>:</td><td><span>',"undefined"==typeof(release||"暂无")?"":baidu.template._encodeHTML(release||"暂无"),'</span></td></tr> <tr><td><span class="name">地区</span>:</td><td><span>',"undefined"==typeof(nation||"暂无")?"":baidu.template._encodeHTML(nation||"暂无"),'</span></td></tr><tr><td><span class="name">导演</span>:</td><td><span>',"undefined"==typeof(director||"暂无")?"":baidu.template._encodeHTML(director||"暂无"),'</span></td></tr><tr><td><span class="name">主演</span>: </td><td><span>',"undefined"==typeof(players||"暂无")?"":baidu.template._encodeHTML(players||"暂无"),'</span></td></tr><tr><td colspan="2"><span class="name">简介</span>: <p style="padding:6px 0 0;">',"undefined"==typeof(des||"暂无")?"":baidu.template._encodeHTML(des||"暂无"),"</p></td></tr></table></div></div></div>"),_template_varName=null}(_template_object);return fn=null,_template_fun_array.join("")}][0];Schedules.prototype.renderFailInfo=function(){this.elePlaceMovie.find(".movienews-loading").text("暂无影讯数据！")},Schedules.prototype.renderMovieNews=function(e,t){function a(e){var t=[];return $.each(e,function(e,a){var i={url:a.movie_picture||"",id:a.movie_id||"",title:a.movie_name||"",day:"",newm:!1};$.each(l,function(e,t){for(var o=0;o<t.length;){if(a.movie_id==t[o].movie_id){i.day+="d"+e,i.newm=(new Date).getTime()-new Date(a.movie_release_date).getTime()<2592e5;break}o++}}),i.visible=i.day.match(/0/)?"block":"none",i.labelvis="block"==i.visible?"inline-block":"none",t.push(i)}),t}function i(t,a){var i={},o=[],r=[];return $.each(s,function(e,a){a.movie_id==t&&(i=a)}),i&&(i={name:i.movie_name||"",id:i.movie_id||"",duration:i.movie_length&&i.movie_length.toString().replace("分钟","")+"分钟"||"",category:(i.movie_nation?i.movie_nation+"&nbsp;&nbsp;":"")+(i.movie_type||""),director:i.movie_director||"",players:i.movie_starring||"",score:i.movie_score||"",des:i.movie_description||"",pic:i.movie_picture||"",release:i.movie_release_date||""}),$.each(l,function(e,t){t[0].date==a&&(o=t)}),$.isArray(o)?($.each(o,function(t,a){if(i.id==a.movie_id){var o={day:a.date,seatL:!0,book:2==e.webview_style?!1:!0,time:a.time||"",type:a.src_info[0].lan&&a.src_info[0].type?a.src_info[0].lan+"/"+a.src_info[0].type:(a.src_info[0].lan||"")+(a.src_info[0].type||""),price:a.lower_price,style:a.src_info[0].seq_no&&!a.src_info[0].src.match(/dbmovie|mtime/g)?"":"unbook",num:a.src_info[0].seq_no,orign:a.src_info[0].src,cinema:a.src_info[0].cinema_id,theater:a.src_info[0].theater,movie:a.src_info[0].movie_id,name:a.src_info[0].movie_name||i.name,info:"{'lan':'"+a.src_info[0].lan+"','time': '"+a.time+"','price': '"+a.src_info[0].price+"','name': '"+i.name+"'}",list:a.src_info};a.src_info[0].aid&&(o.url=n.createCodeUrl(o,i),o.seatL=!1),r.push(o)}}),i.times=TIMETPL({schedules:r}),i.date=a,i.from=o[0].src_info[0].src,INFOTPL(i).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&#92;/g,"\\").replace(/&quot;/g,'"').replace(/&#39;/g,"'")):void 0}function o(e,t){var a=n.eleInfo.length?n.eleInfo:n.elePlaceMovie.find(".info");$("#btnMovieBookClose");var o,s=n.elePlaceMovie.find(".calendar_tab li.current").attr("data-date"),l="#info_"+e+"_"+s;"block"!=$(l).css("display")&&(0==$(l).length&&(o=i(e,s),$(o).prependTo(a).attr("id",l.substr(1))),$("div.cover").find("img[style='display:block']").removeClass("selected").eq(t).addClass("selected"),a.children().hide().filter(l).attr("style",function(){return r.book&&$(this).find("li.show-item").length>4?(a.find(".list-opt").data("id",l).show(),$(this).find("ul.show-list").data("statue")?($("#btnMovieBookMore").hide(),$("#btnMovieBookClose").show()):($("#btnMovieBookMore").show(),$("#btnMovieBookClose").hide())):a.find(".list-opt").data("id",l).hide(),"display: block"}))}var n=this,s=$.isArray(e.base)&&e.base.length>0?e.base:[],l=$.isArray(e.time_table)&&e.base.length>0?e.time_table:[],r={date:{},imgs:[],book:2==e.webview_style?!1:!0,days:[]};wrapperWidth=0,date=new Date,now=e.now_time||date.getFullYear()+"-"+(date.getMonth()<9?"0"+(date.getMonth()+1):date.getMonth()+1)+"-"+(date.getDate()<10?"0"+date.getDate():date.getDate()),contentTpl="",tabsTpl="",days={},this.orign=l[0][0].src_info[0].src,this.name=t,n.arrMovies=s,n.lastOrientation=lastOrientation=-1,$.each(l,function(e,t){var a=new Date(t[0].date.split("-")[0],parseInt(t[0].date.split("-")[1],10)-1,t[0].date.split("-")[2],"00","00","00"),i=t[0].date.replace(/-/g,".").replace(/^[0-9]*./g,"");days[formatDate(a)]=e,r.days[e]={text:i+" "+formateDateText(a,new Date(now.split("-")[0],parseInt(now.split("-")[1],10)-1,now.split("-")[2],"00","00","00")),date:t[0].date,obj:a}}),function(e,t){for(var a,i,o=0,n=e.length;e.length<3;)(a=e[e.length-1].obj)&&a.setDate(a.getDate()+1),i=a.getFullYear()+"-"+(a.getMonth()<9?"0"+(a.getMonth()+1):a.getMonth()+1)+"-"+(a.getDate()<10?"0"+a.getDate():a.getDate()),e[n+o]={text:a.getMonth()+1+"."+a.getDate()+" "+formateDateText(a,new Date(t.split("-")[0],parseInt(t.split("-")[1],10)-1,t.split("-")[2],"00","00","00")),date:i,obj:a,disabled:!0},o++}(r.days,now),this.days=days,r.imgs=a(s),contentTpl=DETAILTPL(r),tbsTpl=TABSTPL(r),n.elePlaceMovie.find(".movienews-content").append(tbsTpl).append(contentTpl).show().removeClass("movienews-empty").next().remove(),n.eleCover=this.elePlaceMovie.find(".cover"),n.eleInfo=n.elePlaceMovie.find(".info"),n.eleInfotip=n.elePlaceMovie.find(".info-tip"),l.length>3&&$(".tab_wrapper").width()<75*l.length+8&&($(".tab_wrapper").addClass("slide").find(".calendar_tab").width(75*l.length+12),n.tabScroll=new iScroll("tab_wrapper",{momentum:!1,hScroll:!0,hScrollbar:!1,vScrollbar:!1,vScroll:!1,lockDirection:!0,handleClick:!1})),n.elePlaceMovie.find(".cover-scroller").css({display:"block"}),n.coverScroll=new iScroll("cover-wrapper",{snap:!0,momentum:!1,hScrollbar:!1,vScrollbar:!1,vScroll:!1,lockDirection:!0,onScrollEnd:function(){var e=n.eleCover.find("img[style='display:block']"),t=e.eq(n.coverScroll.currPageX),a=t.data("id");return 0==e.length?(n.elePlaceMovie.addClass("movienews-empty"),!1):(o(a,n.coverScroll.currPageX),void 0)}}),$("div.cover").find("img[style='display:block']").length?this.updateLayout(0):this.elePlaceMovie.toggleClass("movienews-empty",!0)},Schedules.prototype.updateLayout=function(e){var t=$("div.cover").width(),a=this,i=$(".tab_wrapper"),o=i.find("li").length,n=$("div.cover").find("img[style='display:block']").length,s=69,l=a.lastOrientation;window.orientation=getOrientation(),$("#cover-wrapper").css({overflow:"visible",width:s+13,right:3*t/4-s/2-13}),$("#cover-scroller").css("width",(s+13)*n),a.coverScroll.refresh(),"undefined"!=typeof e&&e>-1&&this.coverScroll.scrollToPage(e,0,0),window.setTimeout(function(){window.orientation=getOrientation(),i.width()<75*o+8?(a.tabScroll||(i.addClass("slide").find(".calendar_tab").width(75*o+8),a.tabScroll=new iScroll("tab_wrapper",{momentum:!1,hScroll:!0,hScrollbar:!1,vScrollbar:!1,vScroll:!1,lockDirection:!0,handleClick:!1})),window.orientation!=l&&a.tabScroll.scrollToPage(i.find(".current").index(),0,0)):a.tabScroll&&(i.removeClass("slide").find(".calendar_tab").width("auto"),a.tabScroll.destroy(),delete a.tabScroll),window.orientation!=l&&(a.lastOrientation=window.orientation)},100)},Schedules.prototype.switchTab=function(e){var t,a=$(e.target),i=[],o=a.index();return a.hasClass("current")?!1:a.hasClass("disabled")?!1:(stat.addStat(STAT_CODE.PLACE_MOVIE_TAB_CLICK,{day:o}),a.addClass("current").siblings().removeClass("current"),this.eleCover&&this.eleCover.length&&(this.eleCover.find("img").each(function(e,t){var a=$(t),n=a.data("date"),s=!0;a.removeClass("selected"),-1!=n.indexOf("d"+o)?(a.attr("style","display:block"),0==e&&a.addClass("selected"),a.next().hasClass("new_icon")&&a.next().show()):(a.attr("style","display:none"),a.next().hasClass("new_icon")&&a.next().hide(),s=!1),s&&i.push(a)}),t=0==i.length?!0:!1,this.elePlaceMovie.toggleClass("movienews-empty",t),t||this.updateLayout(0)),void 0)},Schedules.prototype.showDesPopup=function(e){stat.addStat(STAT_CODE.PLACE_MOVIE_DESCRIBTION_CLICK);var t,a,i,o=$(e.target).attr("data-id"),n=this.arrMovies,s=$(".moviebook-popup-wrapper");$.each(n,function(e,t){t.movie_id==o&&(a=t)}),a.movie_starring&&(t=a.movie_starring.split("/").slice(0,4).join("、")),i=a.movie_description.length>180?a.movie_description.slice(0,180)+"...":a.movie_description,a={name:a.movie_name||"",id:a.movie_id||"",duration:a.movie_length&&a.movie_length.toString().replace("分钟","")+"分钟"||"",nation:a.movie_nation,type:a.movie_type,director:a.movie_director||"",players:t,score:a.movie_score,des:i,release:a.movie_release_date},popupHtml=DESPOPUPTPL(a),$(popupHtml).prependTo("#wrapper").show().children().first().css("top",window.scrollY+$(window).height()/3),$("body").height()<window.screen.height&&s.height(window.screen.height),$("#des-btn-close").click($.proxy(this.closePopup,this))},Schedules.prototype.showMovieInfo=function(e){var t=this,a=$(e.target),i=t.elePlaceMovie.find(".cover"),o=-1;i.find("img[style='display:block']").each(function(e,t){$(this).removeClass("selected"),a.data("id")==$(t).data("id")&&($(this).addClass("selected"),o=e)}),o>-1&&o!=t.coverScroll.currPageX&&(stat.addStat(STAT_CODE.PLACE_MOVIE_PIC_CLICK),window.setTimeout(function(){t.coverScroll.scrollToPage(o,0)},0))},Schedules.prototype.showMore=function(e){var t=$(e.target).parent().data("id"),a=$(t),i=a.find("ul.show-list");i.toggleClass("part").data("statue",!0),$("#btnMovieBookMore").hide(),$("#btnMovieBookClose").show(),stat.addStat(STAT_CODE.PLACE_MOVIE_BOOK_LIST_MORE_CLICK)},Schedules.prototype.showSpecific=function(e){var t=$(e.target).parent().data("id"),a=$(t),i=a.find("ul.show-list");i.toggleClass("part").data("statue",!1),$("#btnMovieBookMore").show(),$("#btnMovieBookClose").hide(),document.body.scrollTop=$("#place-pagelet-movienews").position().top+125,stat.addStat(STAT_CODE.PLACE_MOVIE_BOOK_LIST_LESS_CLICK)},Schedules.prototype.bookMovie=function(e){var t=$(e.target);if("A"!=e.target.tagName)return!1;if(e.preventDefault(),t.hasClass("unbook"))return e.stopImmediatePropagation(),!1;var a="/detail?",i={uid:this.uid,date:t.attr("data-day"),seq_no:t.attr("data-num"),cinema_id:t.attr("data-cinema"),cinema_name:this.name,cc_time:t.attr("data-time"),movie_id:t.attr("data-movie"),third_from:t.data("orign"),theater:t.data("theater"),ticket_price:t.data("price"),movie_info:t.attr("data-info").replace(/\'/g,'"')},o=a+"qt=movie&act=select&from=webapp&"+$.param(i);return i.third_from.match(/gewala|wanda|spider/g)?(this.renderValidPopup(o),e.stopImmediatePropagation(),!1):(stat.addStat(STAT_CODE.PLACE_MOVIE_BOOK_CLICK,{from:t.data("orign"),uid:this.uid}),window.setTimeout(function(){window.location.href=o},200),e.stopImmediatePropagation(),void 0)},Schedules.prototype.showCompare=function(e){if($("div.info").hasClass("info-unbook"))return!1;stat.addStat(STAT_CODE.PLACE_MOVIE_COMPARE_LIST_CLICK);var t=$(e.currentTarget).parent(),a=t.find("a").text();"兑换码"!=a&&t.toggleClass("expand")},Schedules.prototype.renderValidPopup=function(e){var t=$(".moviebook-popup-wrapper"),a={wanda:"万达",gewala:"格瓦拉",spider:"蜘蛛网"};params=util.urlToJSON(e.replace("/detail?","")),data={title:a[params.third_from]},popupHtml=POPUPTPL(data),number=localStorage.getItem("movie_book_user_mobile"),t.length||(t=$(popupHtml),t.prependTo("#wrapper").show().data("url",e).children().first().css("top",window.scrollY+$(window).height()/2),$("body").height()<window.screen.height&&t.height(window.screen.height),number&&$("#valid-phone").val(number),$("#valid-btn-close").click($.proxy(this.closePopup,this)),$("#valid-btn-submit").click($.proxy(this.validPhone,this)))},Schedules.prototype.closePopup=function(){var e=$(".moviebook-popup-wrapper");e.length&&e.remove()},Schedules.prototype.validPhone=function(){function e(){var e="mkcode",t=document.createElement("script"),a=function(){$(t).remove(),delete window[e]};window[e]=function(e){a(),e.content&&e.content.vcode&&n.data("vcode",e.content.vcode).find("p").eq(1).show().find("img").attr("src","http://map.baidu.com/maps/services/captcha/image?vcode="+e.content.vcode)},t.src="http://map.baidu.com/maps/services/captcha?setno=1&cb="+e+"&t="+(1e8*Math.random()).toFixed(0),$("head").append(t)}function t(t,a){var o="vdcode",s=document.createElement("script"),l=function(){$(s).remove(),delete window[o]};t.t=(1e8*Math.random()).toFixed(0),window[o]=function(t){return l(),t.result&&0!=t.result.error?(i.val(""),n.find(".tip").eq(1).show().text("验证出错，请重新输入验证码！"),e(),void 0):($.isFunction(a)&&a(),void 0)},s.src="http://map.baidu.com/maps/services/captcha/verify?cb="+o+"&"+$.param(t),s.setAttribute("async","false"),$("head").append(s)}var a=($(event.target),$("#valid-phone")),i=$("#valid-number"),o=a.next(),n=$(".moviebook-popup-wrapper"),s=a.val(),l=localStorage.getItem("movie_book_user_mobile"),r=n.data("url"),d=util.urlToJSON(r.replace("/detail?",""));if(!s||11!=s.length||!s.match(/^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}|15[0-9]\d{8}|18\d{9}/g))return o.html("请确保输入号码正确！").show(),!1;if(n.data("valid"))return o.hide(),t({code:i.val(),vcode:n.data("vcode")},function(){s=a.val();try{localStorage.setItem("movie_book_user_mobile",s)}catch(e){}stat.addStat(STAT_CODE.PLACE_MOVIE_BOOK_CLICK,{from:d.third_from,uid:d.uid}),window.setTimeout(function(){window.location.href=r+"&user_mobile="+s},200)}),!1;if(!l||l&&s!=l)return o.hide(),n.data("valid",!0),e(),!1;try{localStorage.setItem("movie_book_user_mobile",s)}catch(c){}stat.addStat(STAT_CODE.PLACE_MOVIE_BOOK_CLICK,{from:d.third_from,uid:d.uid}),window.setTimeout(function(){window.location.href=r+"&user_mobile="+s},200)},Schedules.prototype.createCodeUrl=function(e,t){var a=util.urlToJSON(window.location.href),i="",o={qt:"verify",uid:this.uid,code:a.code,sign:a.sign,name:t.name,mid:e.movie,duration:t.duration,score:t.score,info:e.info.replace(/\'/g,'"'),day:e.day,seq_no:e.num,cinemaid:e.cinema,time:e.time,type:e.type,pname:$("#place-widget-captain-name").html()||"",release:t.release,category:t.category,director:t.director,player:t.players,pic:t.pic};return a.code&&a.sign&&(i="/mobile/webapp/place/codes/force=simple&"+util.jsonToUrl(o)),i},module.exports={init:function(e,t,a,i){stat.addStat(STAT_CODE.PLACE_MOVIE_PV,{state:t,uid:e});var o=util.urlToJSON(window.location.href),n={qt:"timetable",act:"timetable",uid:e,style:t,code:o.code||"",sign:o.sign||"",from:"webapp"};$.ajax({url:"/detail?",data:n,dataType:"json",success:function(o){var n=new Schedules(o.now_time||a,e);window.addEventListener("resize",function(){n.updateLayout()},!1),2==t&&(o=o.other_info),o.time_table&&o.time_table.length?n.renderMovieNews(o,i):n.renderFailInfo(),stat.addStat(STAT_CODE.PLACE_MOVIE_LOADED_PV,{state:t,uid:e,action:"loaded"})}})}}});