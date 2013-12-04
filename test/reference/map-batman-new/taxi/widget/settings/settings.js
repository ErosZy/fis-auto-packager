/**
 * @file 设置页js
 */
'use strict';

var storage = require('taxi:static/js/storage.js'),
    exports = {
        create: function () {
            var $el = $('.taxi-widget-settings'),
                $inputPhone = $el.find('.input-phone'),
                $btnModify = $el.find('.btn-modify'),
                $btnHelp = $el.find('.btn-help'),
                $btnTerms = $el.find('.btn-terms');


            $inputPhone.val(storage.get('phone'));
            if(!Taxi.validatePhone($inputPhone.val())) {
                $btnModify.attr('disabled', 'disabled');
            }

            $btnModify.on('click', $.proxy(this.onBtnModifyClick, this));
            $inputPhone.on('keyup', $.proxy(this.onInputPhoneKeyup, this));
            $btnHelp.on('click', $.proxy(this.onArticleButtonClick, this));
            $btnTerms.on('click', $.proxy(this.onArticleButtonClick, this));

            this.$el = $el;
            this.$btnModify = $btnModify;
            this.$inputPhone = $inputPhone;
        },
        onArticleButtonClick: function(e) {
            var type = e.currentTarget.className.split('-')[1];

            LoadManager.loadPage('about', {
                type: type
            });
        },
        onBtnModifyClick: function () {
            var phone = this.$inputPhone.val();
            LoadManager.loadPage('verify', {
                phone: phone,
                referrer: 'settings'
            });
        },
        onInputPhoneKeyup: function() {
            if(Taxi.validatePhone(this.$inputPhone.val())) {
                this.$btnModify.removeAttr('disabled');
            } else {
                this.$btnModify.attr('disabled', 'disabled');
            }
        },
        init: function () {
            this.create();
        }
    };

module.exports = exports;