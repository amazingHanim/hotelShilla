$(function(){
    var $main = $('.mnWrap'),
        $shortcut = $main.find('.shortcut'),
        $pfMenu = $shortcut.find('.menu ul'),
        $btShortcut = $shortcut.find('.menu .btn'),
        flag = true,
        $imgGroup = $main.find('.imgGroup'),
        $pagenation = $main.find('.pagenation'),
        $text = $main.find('.text'),
        i = 0;
    $imgGroup.children(':first').appendTo($imgGroup);

    //$('element').click(nextImg)
    setInterval(nextImg, 4000)
    function nextImg(){
        i = (i+1)%4;
        $pagenation.find('span').eq(i).addClass('clicked').siblings().removeClass('clicked')
        $imgGroup.children(':first').hide(0, function(){
            $(this).appendTo($imgGroup).fadeIn(1000)
        });
        nextTxt(1000);
    }
    function nextTxt(){
        $text.eq(i).addClass('currentTxt').siblings('.text').removeClass('currentTxt')
    }
    $btShortcut.on('click', function(){
        if(flag){
            $pfMenu.css({display : 'none'});
            $shortcut.stop().animate({width: 80});
            $btShortcut.addClass('btnOpen');
            flag = false;
        }else{
            $shortcut.stop().animate({width: 850}, function(){
                $pfMenu.css({display : 'flex'});
                $btShortcut.removeClass('btnOpen');
            });
            flag = true;
        }
    });
});