$(function(){
    var hdrScroll = 0,
        $header = $('.hdrWrap'),
        $btGnb = $header.find('.bars button'),
        $gnb = $('.gnbWrap'),
        $btClose = $gnb.find('.btn'),
        $gnbItem = $gnb.find('.nav li'),
        $gnbImgGroup = $gnb.find('.imgGroup')
        i = 0
    //window=viewport
    $(window).on('scroll', function(){
        hdrScroll = $('html').scrollTop();
        if(hdrScroll > 0){
            $header.addClass('fixed');
            $header.find('.mainH').hide();
            $header.find('.fixedH').show();
        }else{
            $header.removeClass('fixed');
            $header.find('.fixedH').hide();
            $header.find('.mainH').show();
        }
    });

    $btGnb.on('click', function(){
        $('body').css({overflowY : 'hidden'});
        $gnb.css({display : 'flex'});
        $gnb.find('.gnbHdr').stop().animate({left: 0});
        $gnb.find('.gnbImg').stop().animate({left: 0});
    });
    $btClose.on('click', function(){
        $('body').css({overflowY : 'auto'});
        $gnb.find('.gnbHdr').stop().animate({left: -50+'%'});
        $gnb.find('.gnbImg').stop().animate({left: 50+'%'}, function(){
            $gnb.css({display : 'none'});
        });
    });
    $gnbItem.on('mouseenter', function(){
        i = $(this).index();
        i = i+1;
        console.log(i);
        $gnbImgGroup.find('.i'+i).appendTo($gnbImgGroup);
        $gnbImgGroup.find('.i'+i).show().siblings().hide();
    });
});