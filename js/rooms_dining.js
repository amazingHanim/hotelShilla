$(function(){
    var optionBtn = $('.options>li');

    optionBtn.click(function(e){
        e.preventDefault();
        $(this).siblings().removeClass('on');
        $(this).toggleClass('on');
    });

});
