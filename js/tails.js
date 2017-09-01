$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
//    console.log(wScroll);
     var Dwin = $(document).width();
     var wWin = $(this).width();
     console.log(Dwin);
     console.log(wWin);
    $('.catch').css({
        'transform' : 'translate(0px, '+ wScroll +'%) rotate('+wScroll+'deg)' 
    });
});