$(function(){
    var $ct4 = $('.ct4'),
        $imgView = $ct4.find('.imgView'),
        $artgroup = $ct4.find('.artgroup'),
        i = 0
    $imgView.children(':first').appendTo($imgView);
    $artgroup.find('article').on('click', function(){
        i = $(this).index();
        i = i+1;
        console.log(i);
        $imgView.find('.i'+i).css({left : '100%'}).appendTo($imgView).animate({left: 0});
    });

});