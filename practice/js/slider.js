$(function(){
    var pNum = 0;
    //초기셋팅
    $('.imgGroup').css({left:'-100%'});
    $('.imgGroup').find('.image:last').prependTo('.imgGroup');

    $('.btnPrev').click(function(){
        $('.imgGroup').animate({left:'0'}, function(){
            $('imgGroup').css({left:'-100%'});
            $('.imgGroup').find('.image:last').prependTo('.imgGroup');
        });
        pNum = (pNum + 3) % 4;
        $('.pageNum span').text(pNum + 1);
    });

    $('.btnNext').click(function(){
        $('.imgGroup').animate({left:'-200%'}, function(){
            $('.imgGroup').css({left:'-100%'});
            $('.imgGroup').find('.image:first').appendTo('.imgGroup');
        });
        pNum = (pNum + 1) % 4;
        $('.pageNum span').text(pNum + 1);
    });
});