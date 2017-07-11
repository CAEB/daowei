
$(function () {
    let $header=$('.nav li a').not('#login a');
    $header.on('mouseover',function () {
        $(this).css('color','red');
    });
    $header.on('mouseout',function () {
        $(this).css('color','#121212');
    });
    let $menu=$('.menus>ul>li');
    $menu.on('mouseover',function () {
       $(this).css('background','#60646d');
       $(this).children('span').addClass('toleft');
       $(this).children('ul').css('display','block');
    });
    $menu.on('mouseout',function () {
        $(this).css('background','#757881');
        $(this).children('span').removeClass('toleft');
        $(this).children('ul').css('display','none');
    });
    let $menuLi=$('.child-menu li');
    $menuLi.on('mouseover',function () {
        $(this).children('a').css('color','red');
    });
    $menuLi.on('mouseout',function () {
        $(this).children('a').css('color','#121212');
    });
    let $shadow=$('.list-detail ul li');
    $shadow.on('mouseover',function () {
        $(this).addClass('shadow');
    });
    $shadow.on('mouseout',function () {
        $(this).removeClass('shadow');
    });
    $(function () {
        $(window).scroll(function () {
            if($(document).scrollTop()>80){
                $('header').addClass('fixed');
                console.log(123);
                $('.menu').css('margin-Top','70px')
            }else{
                $('header').removeClass('fixed');
                $('.menu').css('margin-Top','0')
            }
        })
    })

});