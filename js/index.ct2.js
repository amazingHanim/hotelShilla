$(function(){
    var $ct2 = $('.ct2'),
        $prev = $ct2.find('.btPrev'),
        $next = $ct2.find('.btNext'),
        $artgroup = $ct2.find('.artgroup'),
        $art = $artgroup.find('article');
    
    $art.on({
        click: function () {
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
        }
    })

    $next.on('click', function(){
        var $num = $('.selected').index();

        if($num < 3){
            $artgroup.find('.selected').removeClass('selected').next().addClass('selected');
        }else{
            $artgroup.find('.selected').removeClass('selected');
            $art.first().addClass('selected');
        }
    })

    $prev.on('click', function(){
        var $num = $('.selected').index();

        if($num == 0){
            $artgroup.find('.selected').removeClass('selected');
            $art.last().addClass('selected');
        }else{
            $artgroup.find('.selected').removeClass('selected').prev().addClass('selected');
        }
    })
});