/**
 * @file
 * @author liushuai02@baidu.com
 */

'use strict';

var util = require('common:static/js/util.js'),
    popup = require('taxi:widget/common/popup/popup.js'),
    stat = require('common:widget/stat/stat.js'),
    storage = require('taxi:static/js/storage.js'),
    addprice = require('taxi:widget/common/addprice/addprice.js'),
    radar = require('taxi:widget/common/radar/radar.js'),

    exports = {
        create: function () {
            var $el = $('.taxi-widget-resubmit'),
                $btnResubmit = $el.find('.btn-resubmit'),
                $btnBack = $el.find('.btn-back'),
                $form = $el.find('form'),
                $addpriceWrapper  = $el.find('.addprice-wrapper'),
                options = this.options,
                priceList;

            // 创建加价模块
            if (options.price_list) {
                priceList = options.price_list.split(',');
                addprice.init(priceList);

                // 如果有加价模块将表单域中的加价默认值删除
                $el.find('[type=input][name=add_price]').remove();
            } else {
                $addpriceWrapper.hide();
            }

            $el.find('[name=city_code]').val(options.city_code);
            $el.find('[name=order_id]').val(options.order_id);

            $btnResubmit.on('click', $.proxy(this.onBtnResubmitClick, this));
            $btnBack.on('click', $.proxy(this.onBtnBackClick, this));

            this.$el = $el;
            this.$form = $form;
        },
        onBtnResubmitClick: function () {
            var options = $.extend({
                price_list: this.options.price_list,
                taxi_num: this.options.taxi_num
            }, util.urlToJSON(this.$form.serialize()));

            popup.open({
                text: '正在提交表单...',
                layer: true,
                autoCloseTime: 0
            });

            LoadManager.request({
                data: $.extend({}, options, {
                    qt: 'addpricereq'
                }),
                success: function (data) {
                    storage.set('orderId', data.info.order_id);

                    storage.set('orderStartTime', Date.now());
                    LoadManager.loadPage('waiting', $.extend({}, options, data.info));
                    stat.addStat(STAT_CODE.TAXI_ADDPRICEREQ);
                },
                error: function (data) {
                    var text = '';
                    switch (data.errno) {
                        case -304:
                            text = '订单已过期或结束！';
                            break;
                        case -113:
                            text = '请求过于频繁，请稍后再试！';
                            break;
                        default:
                            text = '系统错误！';
                            break;
                    }
                    popup.open({
                        text: text,
                        layer: true,
                        onClose: function() {
                            storage.remove('orderId');
                            LoadManager.loadPage('home');
                        }
                    });
                }
            });
        },
        onBtnBackClick: function() {
            storage.remove('orderId');
        },
        destroy: function() {
            radar.destroy();
        },
        init: function () {
            var options = this.options = LoadManager.getPageOptions(),
                orderId = storage.get('orderId');

            if(!options || !orderId) {
                LoadManager.loadPage('home');
            }
            this.create();
        }
    };

module.exports = exports;
