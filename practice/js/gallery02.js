$(function(){
    var $ga02 = $('.ga02'),
        $ga02_btn = $ga02.find('.tabbar button'),
        $ga02_art = $ga02.find('.artGroup article')
        i = 0;

    $ga02_btn.on('click', tabMenu)
    function tabMenu(){
        i = $(this).index();
        $(this).addClass('clicked').siblings().removeClass();
        $ga02_art.hide();
        $ga02_art.eq(i).show();
    }
});