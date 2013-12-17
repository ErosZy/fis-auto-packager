var exports = {
    create: function () {
        var $el = $('.taxi-widget-nav'),
            $btnBack = $el.find('.btn-back');

        $btnBack.on('click', $.proxy(this.onBtnBackClick, this));
    },
    onBtnBackClick: function (e) {
        var $currentTarget = $(e.currentTarget),
            back = $currentTarget.attr('data-back');
        if (back) {
            if ((/http(s)?\:\/\//i).test(back)) {
                location.href = back;
            } else {
                LoadManager.loadPage(back);
            }
        } else {
            LoadManager.loadPage('home');
        }
    },
    init: function () {
        this.create();
    }
};
module.exports = exports;