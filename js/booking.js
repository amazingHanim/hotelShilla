$(function () {

    var $keyOpen = $('.fil_2').find('button'),
        $keyWord = $('.keyword'), 
        $keyWordBtn = $keyWord.find('section > ul > li');
    
    $keyOpen.click(function(){
        $keyWord.slideToggle();
        $keyOpen.find('.up').toggle();
        $keyOpen.find('.down').toggle();
    })

    $keyWordBtn.click(function(){
        $(this).toggleClass('on');
    });

//keyword

    var $article = $('article.art'), 
        $rBtn = $article.find('.btns > button');

    $rBtn.click(function(){
        $(this).find('.up').toggle();
        $(this).find('.down').toggle();
        $(this).parents('.info').next().slideToggle();
    })

//예약버튼

    var $booking = $('div.ctBooking'),
        $tabBar = $booking.find('.tabBar>.tb')
        $tabContent = $booking.find('.tc');

        $tabBar.on({
            'click': function(){
                $tabBar.removeClass("on");
                $(this).addClass("on");
                

                var clickNum = $(this).index();
                
                $tabContent.eq(clickNum).show();
                $tabContent.eq(clickNum).siblings().hide();
            }
        })
//탭
});