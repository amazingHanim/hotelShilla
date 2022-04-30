$(function(){
    var $ct1 = $('.ct1'),
        $artgroup = $ct1.find('.artgroup');
    function artScroll(){
        $artgroup.stop().animate({left : -270},4000, 'linear', function(){
            $artgroup.children(':first').appendTo($artgroup);
            $artgroup.css({left : 0});
            //재귀호출
            artScroll();
        });
    }
    artScroll();
});