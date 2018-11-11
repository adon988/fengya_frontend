'use strict';
var lock = 0;

//Home 
$(".hot_introduction").find('section').each( function(){
        $(this).initAnimate({elem:'.main-section'});
});

$(".main-section").each(function(){
    var tg = this;
    $(this).find('.cat-btn').on('click', function(e){
        if(!$(tg).hasClass('on') && $(window).width()>768){
            e.preventDefault();
        }
    });
});

function checkMainSection(){
    if($(window).width()<=768){
        $('.main-section').each( function(){
            $(this).removeClass('on');
        });
        $(".hot_introduction").find('.first').addClass('on');
        $(".hot_introduction").find('.last').addClass('on');
    }
}

$(window).resize(function(){
    checkMainSection();
});