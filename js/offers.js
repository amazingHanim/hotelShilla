$(function(){
    var filterBtn = $('.filter > .btns > button');

    filterBtn.click(function(e){
        e.preventDefault();
        $(this).toggleClass('blackBtn');
    });
    // filter clicked

    var tabBtn = $('.list > .tabMenu > h4');
    var tabCont = $('.list > .tabCont > section');

    tabCont.hide().eq(0).show();

    tabBtn.click(function(e){
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        tabBtn.removeClass("current");
        target.addClass("current");
        tabCont.css({display:"none"});
        tabCont.eq(index).css({display:"block"});
    });
    // tab menu
});
