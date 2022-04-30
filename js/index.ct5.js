$(function(){
    var $ct5 = $('.ct5'),
        $prev = $ct5.find('.btnPrev'),
        $next = $ct5.find('.btnNext'),
        $txtGroup = $ct5.find('.textGroup')
        $imgGroup = $ct5.find('.imgGroup')

    $next.on('click', function(){
        $imgGroup.children().removeClass('big');
        $imgGroup.children(':eq(2)').addClass('big');
        $imgGroup.stop().animate({left : -270*2}, function(){
            $imgGroup.css({left:-270});
            $imgGroup.children(':first').appendTo($imgGroup);
        });
        $txtGroup.children(':first').hide(0, function(){
            $(this).appendTo($txtGroup).fadeIn(500);
        });
    });
    $prev.on('click', function(){
        $imgGroup.children().removeClass('big');
        $imgGroup.children(':eq(0)').addClass('big');
        $imgGroup.stop().animate({left : 0}, function(){
            $imgGroup.css({left:-270}).children(':last').prependTo($imgGroup);
        });
        $txtGroup.children(':last').fadeOut(500, function(){
            $(this).prependTo($txtGroup).show(0);
        });
    });
});