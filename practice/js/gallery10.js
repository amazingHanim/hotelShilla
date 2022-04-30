$(function(){
    var $ga10 = $('.ga10'),
        $ga10_btn = $ga10.find('button'),
        $ga10_detail = $ga10.find('.detail'),
        detailDp = 'none';
    $ga10_btn.on({
        'click' : function(){
            $ga10_btn.find('i').removeClass('xi-angle-down').addClass('xi-angle-up');
            $(this).find('i').removeClass('xi-angle-up').addClass('xi-angle-down');

            $(this).find('span').text('show');
            $(this).find('span').text('hide');
            
            detailDp = $(this).parents('.info').next().css('display')
            if(detailDp == 'none'){
                $ga10_detail.slideUp();
                $(this).parents('.info').next().slideDown();
            }
        }
    })
});