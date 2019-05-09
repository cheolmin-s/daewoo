// 헤더 상단 팝업 //
$(function(){

    $('.header-popup button').on('click',function(){
        $('.header-popup').addClass('on');
    });
});

// GNB //
$(function(){

    var $gnbDepth1Link = $('.gnb-depth1-link');
    var $gnbDepth2 = $('.gnb-depth2-container');
    var $gnbDepth2Link = $('.gnb-depth2-link');
    var $headerBottom = $('.gnb-wrap');
    var $gnbMore = $('.gnb-depth2 .more');
    var $depth3  = $('.gnb-depth3');

    $gnbDepth1Link.focus(function(){

        var $this = $(this);
        var index = $this.index('.gnb-depth1-link');
        var $menuIdx = $('.menu'+(index+1)+'');

        for(i = 1; i < 7 ; i++ ){
            $('.menu'+(i + 1)+'').removeClass('on');
        }
        $menuIdx.addClass('on');
        $gnbDepth2.removeClass('on');
        $this.next($gnbDepth2).addClass('on');
    });

    $gnbDepth2Link.last().on('keydown',function(e){

        if(e.shiftKey && keyCode === 9){

        } else {
            $gnbDepth1Link.removeClass('on');
            $gnbDepth2.removeClass('on');
        }
    });

    $gnbDepth1Link.on('mouseenter',function(){

        var $this = $(this);
        var index = $this.index('.gnb-depth1-link');
        var $menuIdx = $('.menu'+(index+1)+'');

        $gnbDepth2.removeClass('on');
        $this.next($gnbDepth2).addClass('on');

        for(i = 1; i < 7 ; i++ ){
            $('.menu'+(i + 1)+'').removeClass('on');
        }
        $menuIdx.addClass('on');
    });

    $gnbMore.on('click',function(e){

        e.preventDefault();
        var $this = $(this);
        var moreIdx = $(this).index('.gnb-depth2 .more');
        var depth2LinkThis = $(this).siblings('.gnb-depth2-link');



        if($this.hasClass('on')){
            $gnbMore.removeClass('on');
            $depth3.removeClass('on');
            $gnbDepth2Link.removeClass('on');
        } else {
            $gnbDepth2Link.removeClass('on');
            $gnbMore.removeClass('on');
            $depth3.removeClass('on');
            $this.addClass('on');
            depth2LinkThis.addClass('on');
            $depth3.eq(moreIdx).addClass('on');
        }

    });

    $headerBottom.on('mouseleave',function(){
        $gnbDepth2.removeClass('on');

        for(i = 1; i < 7 ; i++ ){
            $('.menu'+(i + 1)+'').removeClass('on');
        }
    });


});

// 사이드 메뉴 //
$(function(){

    var $sideDepth1 = $('.side-menu-wrap-depth1 > li > a');
    var $sideDepth2 = $('.side-menu-wrap-depth2');
    var $sideDepth2Bg = $('.contents-bg');
    var $sideCloseBtn = $('.side-close-btn');
    var $side7 = $('.side7');


    $sideDepth1.on('click',function(e){

        e.preventDefault();

        var $this = $(this);

        if($this.hasClass('on')){
            $sideDepth2Bg.removeClass('on');
            $sideDepth1.removeClass('on');
            $sideDepth2.removeClass('on');
        } else {
            $sideDepth2.removeClass('on');
            $this.children('.side-menu-wrap-depth2').addClass('on');
            $sideDepth2Bg.addClass('on');
            $sideDepth1.removeClass('on');
            $this.siblings('.side-menu-wrap-depth2').addClass('on');
            $this.addClass('on');
        }

    });


    $side7.focusout(function(){
        $sideDepth2.removeClass('on');
        $sideDepth2Bg.removeClass('on');
        $sideDepth1.removeClass('on');
    });

    $sideCloseBtn.on('click',function(e){
        e.stopPropagation();

        $sideDepth1.removeClass('on');
        $sideDepth2.removeClass('on');
        $sideDepth2Bg.removeClass('on');
    });

    var position = parseInt($(".side-menu").css("top"));

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        $(".side-menu").stop().animate({"top":scrollTop+position+"px"},1000);
    });

});

// 메인 icon 메뉴//
$(function(){

    var $iconLink = $('.icon-list-link');

    $iconLink.on('mouseenter',function(){

        var $this = $(this);

        $iconLink.removeClass('on');
        $this.addClass('on');
    });

    $iconLink.focus(function(){

        var $this = $(this);

        $iconLink.removeClass('on');
        $this.addClass('on');
    });

});

// 메인 슬라이드, 이벤트 슬라이드 //
$(function(){

    //메인 슬라이드//

    var $mainSlide = $('.main-slide > ul');

    $mainSlide.bxSlider({
        minSlides:4,
        maxSlides:4,
        slideWidth:300,
        slideMargin:20,
    });

    //이벤트 슬라이드//

    var $eventSlide = $('.event-slide > ul');

    $eventSlide.bxSlider({
        mode:'fade',
        auto:true,
        autoControls:true
    });

    var $startBtn = $('.bx-start');
    var $stopBtn = $('.bx-stop');

    $startBtn.on('click',function(){

        var $this = $(this);

        $this.hide();
        $stopBtn.show();
    });

    $stopBtn.on('click',function(){
        var $this = $(this);

        $this.hide();
        $startBtn.show();
    });

});

//푸터 셀렉트박스//
$(function(){

    var $footerSelect = $('.footer-select-box');
    var $closeBtn = $('.select-contents-close');
    var $contents = $('.select-contents');


    $footerSelect.on('click',function(){

        $contents.addClass('on');

    });
    $closeBtn.on('click',function(){
        $contents.removeClass('on');
    });

});

// 스크롤시 active //

$(function(){

    var $window = $(window);

    $window.scroll(function(){

        var $active = $('.scroll-active');

        var a = $window.scrollTop() + $window.height() - 80;

        $active.each(function(){

            var b = $(this).offset().top;a >= b?

                $(this).addClass("on") : $(this).removeClass("on");
        });
    });

});

