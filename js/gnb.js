$(function(){

    var $contentsLink = $('.question-contents-link');

    $contentsLink.on('click',function(e){

        e.preventDefault();

        var $this = $(this);

        $contentsLink.siblings().removeClass('on');
        $contentsLink.removeClass('on');
        $this.addClass('on');
        $this.siblings().addClass('on');
    });

});

$(function(){

    var $inputTxtBox = $('.info-search-box');
    var $label = $('.search-box-txt');

    $inputTxtBox.on('keyup',function(){
        $label.hide();
    });

    $inputTxtBox.on('focusout',function(){

        if($label.hasClass('.search-box-txt')){
        } else{
            $label.hide();

        }
    });

    $inputTxtBox.on('click',function(){
        $label.hide();
    });

});
// snb 메뉴 //

$(function(){

    var $snbDepth1Link = $('.snb-isa .depth1-link');
    var $snbDepth2Link = $('.snb-isa .depth2 a');
    var $snbDepth2 = $('.snb-isa .depth2');
    var $snbMore = $('.snb-isa .snb-more');

    $snbDepth2.eq(0).addClass('on');
    $snbMore.eq(0).addClass('on');
    $snbDepth2Link.eq(0).addClass('on');
    $snbDepth1Link.eq(0).addClass('on');


    $snbDepth1Link.on('click',function(e){
        e.preventDefault();

        var $this = $(this);

        if($this.hasClass('on')){
            $snbDepth1Link.removeClass('on');
            $snbDepth2.removeClass('on');
            $snbMore.removeClass('on');
        } else {
            $snbMore.removeClass('on');
            $this.children('.snb-more').addClass('on');
            $snbDepth2.removeClass('on');
            $this.siblings().addClass('on');
            $snbDepth1Link.removeClass('on');
            $this.addClass('on');

        }

    });

});

// isa 탭메뉴 //

$(function(){

    var $tabMenu = $('.tab-menu li');
    var $contents = $('.tab-contents section');
    var $tabMenuLink = $('.tab-menu-link');

    $tabMenu.eq(0).addClass('on');
    $contents.eq(0).addClass('on');

    $tabMenu.on('click',function(){

        var $this = $(this);
        var index = $this.index('.tab-menu li');

        $contents.removeClass('on');
        $tabMenu.removeClass('on');
        $this.addClass('on');
        $contents.eq(index).addClass('on');
    });

    $tabMenuLink.focus(function(){

        var $this = $(this).parents();
        var index = $this.index('.tab-menu li');

        $contents.removeClass('on');
        $tabMenu.removeClass('on');
        $this.addClass('on');
        $contents.eq(index).addClass('on');
    });
});



// snb 메뉴 //

$(function(){

    var $snbDepth1Link = $('.snb-notice .depth1-link');
    var $snbDepth2Link = $('.snb-notice .depth2 a');
    var $snbDepth2 = $('.snb-notice .depth2');
    var $snbMore = $('.snb-notice .snb-more');
    var $more = $('.snb-notice .more');

    $snbDepth1Link.eq(0).addClass('on');
    $snbDepth2Link.eq(0).addClass('on');
    $more.eq(0).addClass('on');

    $snbDepth1Link.on('click',function(e){
        e.preventDefault();

        var $this = $(this);

        if($this.hasClass('on')){
            $snbDepth1Link.removeClass('on');
            $snbMore.removeClass('on');
            $more.removeClass('on');
            $snbDepth2.removeClass('on');

        } else {
            $more.removeClass('on');
            $snbDepth2.removeClass('on');
            $snbDepth1Link.removeClass('on');
            $this.siblings().addClass('on');
            $this.children().addClass('on');
            $this.addClass('on');

        }

    });


});

$(function(){

    var $calendarLink = $('.calendar-link');

    $calendarLink.on('click',function (e) {

        e.preventDefault();

        $(this).siblings().toggleClass('on');
    })

});

$(function() {
    $('.datepicker').datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "2009:2029",
        firstDay: 1,
        dayNamesMin: ['일','월', '화', '수', '목', '금', '토'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
    });
} );



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
            $this.next().addClass('on');
            $sideDepth2Bg.addClass('on');
            $sideDepth1.removeClass('on');
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

        var a = $window.scrollTop() + $window.height() - 20;

        $active.each(function(){

            var b = $(this).offset().top;a >= b?

                $(this).addClass("on") : $(this).removeClass("on");
        });
    });

});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhZXdvby1pbmZvLmpzIiwiZGFld29vLWlzYS0xLmpzIiwiZGFld29vLW5vdGljZS0xLmpzIiwiZGFld29vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImduYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGNvbnRlbnRzTGluayA9ICQoJy5xdWVzdGlvbi1jb250ZW50cy1saW5rJyk7XHJcblxyXG4gICAgJGNvbnRlbnRzTGluay5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICRjb250ZW50c0xpbmsuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkY29udGVudHNMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLnNpYmxpbmdzKCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkaW5wdXRUeHRCb3ggPSAkKCcuaW5mby1zZWFyY2gtYm94Jyk7XHJcbiAgICB2YXIgJGxhYmVsID0gJCgnLnNlYXJjaC1ib3gtdHh0Jyk7XHJcblxyXG5cclxuICAgICRpbnB1dFR4dEJveC5mb2N1cyhmdW5jdGlvbigpe1xyXG4gICAgICAgICRsYWJlbC5oaWRlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkaW5wdXRUeHRCb3guZm9jdXNvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkbGFiZWwuc2hvdygpO1xyXG4gICAgfSk7XHJcbn0pOyIsIi8vIHNuYiDrqZTribQgLy9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHNuYkRlcHRoMUxpbmsgPSAkKCcuc25iLWlzYSAuZGVwdGgxLWxpbmsnKTtcclxuICAgIHZhciAkc25iRGVwdGgyTGluayA9ICQoJy5zbmItaXNhIC5kZXB0aDIgYScpO1xyXG4gICAgdmFyICRzbmJEZXB0aDIgPSAkKCcuc25iLWlzYSAuZGVwdGgyJyk7XHJcbiAgICB2YXIgJHNuYk1vcmUgPSAkKCcuc25iLWlzYSAuc25iLW1vcmUnKTtcclxuXHJcbiAgICAkc25iRGVwdGgyLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJHNuYk1vcmUuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkc25iRGVwdGgyTGluay5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRzbmJEZXB0aDFMaW5rLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG5cclxuXHJcbiAgICAkc25iRGVwdGgxTGluay5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgICAkc25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNuYk1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHNuYk1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLmNoaWxkcmVuKCcuc25iLW1vcmUnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuc2libGluZ3MoKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbi8vIGlzYSDtg63rqZTribQgLy9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHRhYk1lbnUgPSAkKCcudGFiLW1lbnUgbGknKTtcclxuICAgIHZhciAkY29udGVudHMgPSAkKCcudGFiLWNvbnRlbnRzIHNlY3Rpb24nKTtcclxuICAgIHZhciAkdGFiTWVudUxpbmsgPSAkKCcudGFiLW1lbnUtbGluaycpO1xyXG5cclxuICAgICR0YWJNZW51LmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJGNvbnRlbnRzLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICR0YWJNZW51Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgaW5kZXggPSAkdGhpcy5pbmRleCgnLnRhYi1tZW51IGxpJyk7XHJcblxyXG4gICAgICAgICRjb250ZW50cy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGFiTWVudS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkY29udGVudHMuZXEoaW5kZXgpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHRhYk1lbnVMaW5rLmZvY3VzKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcykucGFyZW50cygpO1xyXG4gICAgICAgIHZhciBpbmRleCA9ICR0aGlzLmluZGV4KCcudGFiLW1lbnUgbGknKTtcclxuXHJcbiAgICAgICAgJGNvbnRlbnRzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0YWJNZW51LnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICRjb250ZW50cy5lcShpbmRleCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuIiwiLy8gc25iIOuplOuJtCAvL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkc25iRGVwdGgxTGluayA9ICQoJy5zbmItbm90aWNlIC5kZXB0aDEtbGluaycpO1xyXG4gICAgdmFyICRzbmJEZXB0aDJMaW5rID0gJCgnLnNuYi1ub3RpY2UgLmRlcHRoMiBhJyk7XHJcbiAgICB2YXIgJHNuYkRlcHRoMiA9ICQoJy5zbmItbm90aWNlIC5kZXB0aDInKTtcclxuICAgIHZhciAkc25iTW9yZSA9ICQoJy5zbmItbm90aWNlIC5zbmItbW9yZScpO1xyXG4gICAgdmFyICRtb3JlID0gJCgnLnNuYi1ub3RpY2UgLm1vcmUnKTtcclxuXHJcbiAgICAkc25iRGVwdGgxTGluay5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRzbmJEZXB0aDJMaW5rLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJG1vcmUuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgJHNuYkRlcHRoMUxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGlmKCR0aGlzLmhhc0NsYXNzKCdvbicpKXtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkbW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzbmJEZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5zaWJsaW5ncygpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5jaGlsZHJlbigpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkY2FsZW5kYXJMaW5rID0gJCgnLmNhbGVuZGFyLWxpbmsnKTtcclxuXHJcbiAgICAkY2FsZW5kYXJMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KVxyXG5cclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmRhdGVwaWNrZXInKS5kYXRlcGlja2VyKHtcclxuICAgICAgICBjaGFuZ2VNb250aDogdHJ1ZSxcclxuICAgICAgICBjaGFuZ2VZZWFyOiB0cnVlLFxyXG4gICAgICAgIHllYXJSYW5nZTogXCIyMDA5OjIwMjlcIixcclxuICAgICAgICBmaXJzdERheTogMSxcclxuICAgICAgICBkYXlOYW1lc01pbjogWyfsnbwnLCfsm5QnLCAn7ZmUJywgJ+yImCcsICfrqqknLCAn6riIJywgJ+2GoCddLFxyXG4gICAgICAgIG1vbnRoTmFtZXNTaG9ydDogWycx7JuUJywnMuyblCcsJzPsm5QnLCc07JuUJywnNeyblCcsJzbsm5QnLCc37JuUJywnOOyblCcsJznsm5QnLCcxMOyblCcsJzEx7JuUJywnMTLsm5QnXVxyXG4gICAgfSk7XHJcbn0gKTtcclxuXHJcblxyXG4iLCIvLyDtl6TrjZQg7IOB64uoIO2MneyXhSAvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmhlYWRlci1wb3B1cCBidXR0b24nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmhlYWRlci1wb3B1cCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gR05CIC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGduYkRlcHRoMUxpbmsgPSAkKCcuZ25iLWRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgJGduYkRlcHRoMiA9ICQoJy5nbmItZGVwdGgyLWNvbnRhaW5lcicpO1xyXG4gICAgdmFyICRnbmJEZXB0aDJMaW5rID0gJCgnLmduYi1kZXB0aDItbGluaycpO1xyXG4gICAgdmFyICRoZWFkZXJCb3R0b20gPSAkKCcuZ25iLXdyYXAnKTtcclxuICAgIHZhciAkZ25iTW9yZSA9ICQoJy5nbmItZGVwdGgyIC5tb3JlJyk7XHJcbiAgICB2YXIgJGRlcHRoMyAgPSAkKCcuZ25iLWRlcHRoMycpO1xyXG5cclxuICAgICRnbmJEZXB0aDFMaW5rLmZvY3VzKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJHRoaXMuaW5kZXgoJy5nbmItZGVwdGgxLWxpbmsnKTtcclxuICAgICAgICB2YXIgJG1lbnVJZHggPSAkKCcubWVudScrKGluZGV4KzEpKycnKTtcclxuXHJcbiAgICAgICAgZm9yKGkgPSAxOyBpIDwgNyA7IGkrKyApe1xyXG4gICAgICAgICAgICAkKCcubWVudScrKGkgKyAxKSsnJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRtZW51SWR4LmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICRnbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMubmV4dCgkZ25iRGVwdGgyKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRnbmJEZXB0aDJMaW5rLmxhc3QoKS5vbigna2V5ZG93bicsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGlmKGUuc2hpZnRLZXkgJiYga2V5Q29kZSA9PT0gOSl7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRnbmJEZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRnbmJEZXB0aDFMaW5rLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBpbmRleCA9ICR0aGlzLmluZGV4KCcuZ25iLWRlcHRoMS1saW5rJyk7XHJcbiAgICAgICAgdmFyICRtZW51SWR4ID0gJCgnLm1lbnUnKyhpbmRleCsxKSsnJyk7XHJcblxyXG4gICAgICAgICRnbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMubmV4dCgkZ25iRGVwdGgyKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgZm9yKGkgPSAxOyBpIDwgNyA7IGkrKyApe1xyXG4gICAgICAgICAgICAkKCcubWVudScrKGkgKyAxKSsnJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRtZW51SWR4LmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGduYk1vcmUub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIG1vcmVJZHggPSAkKHRoaXMpLmluZGV4KCcuZ25iLWRlcHRoMiAubW9yZScpO1xyXG4gICAgICAgIHZhciBkZXB0aDJMaW5rVGhpcyA9ICQodGhpcykuc2libGluZ3MoJy5nbmItZGVwdGgyLWxpbmsnKTtcclxuXHJcblxyXG5cclxuICAgICAgICBpZigkdGhpcy5oYXNDbGFzcygnb24nKSl7XHJcbiAgICAgICAgICAgICRnbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkZGVwdGgzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkZ25iRGVwdGgyTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZ25iRGVwdGgyTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGduYk1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRkZXB0aDMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICBkZXB0aDJMaW5rVGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGRlcHRoMy5lcShtb3JlSWR4KS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJGhlYWRlckJvdHRvbS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICAgICAgICBmb3IoaSA9IDE7IGkgPCA3IDsgaSsrICl7XHJcbiAgICAgICAgICAgICQoJy5tZW51JysoaSArIDEpKycnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG59KTtcclxuXHJcbi8vIOyCrOydtOuTnCDrqZTribQgLy9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkc2lkZURlcHRoMSA9ICQoJy5zaWRlLW1lbnUtd3JhcC1kZXB0aDEgPiBsaSA+IGEnKTtcclxuICAgIHZhciAkc2lkZURlcHRoMiA9ICQoJy5zaWRlLW1lbnUtd3JhcC1kZXB0aDInKTtcclxuICAgIHZhciAkc2lkZURlcHRoMkJnID0gJCgnLmNvbnRlbnRzLWJnJyk7XHJcbiAgICB2YXIgJHNpZGVDbG9zZUJ0biA9ICQoJy5zaWRlLWNsb3NlLWJ0bicpO1xyXG4gICAgdmFyICRzaWRlNyA9ICQoJy5zaWRlNycpO1xyXG5cclxuXHJcbiAgICAkc2lkZURlcHRoMS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGlmKCR0aGlzLmhhc0NsYXNzKCdvbicpKXtcclxuICAgICAgICAgICAgJHNpZGVEZXB0aDJCZy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNpZGVEZXB0aDEucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzaWRlRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRzaWRlRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5uZXh0KCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzaWRlRGVwdGgyQmcuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzaWRlRGVwdGgxLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICRzaWRlNy5mb2N1c291dChmdW5jdGlvbigpe1xyXG4gICAgICAgICRzaWRlRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgyQmcucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNpZGVEZXB0aDEucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2lkZUNsb3NlQnRuLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgJHNpZGVEZXB0aDEucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNpZGVEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNpZGVEZXB0aDJCZy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBwb3NpdGlvbiA9IHBhcnNlSW50KCQoXCIuc2lkZS1tZW51XCIpLmNzcyhcInRvcFwiKSk7XHJcblxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICQoXCIuc2lkZS1tZW51XCIpLnN0b3AoKS5hbmltYXRlKHtcInRvcFwiOnNjcm9sbFRvcCtwb3NpdGlvbitcInB4XCJ9LDEwMDApO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbi8vIOuplOyduCBpY29uIOuplOuJtC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGljb25MaW5rID0gJCgnLmljb24tbGlzdC1saW5rJyk7XHJcblxyXG4gICAgJGljb25MaW5rLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkaWNvbkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkaWNvbkxpbmsuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJGljb25MaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbi8vIOuplOyduCDsiqzrnbzsnbTrk5wsIOydtOuypO2KuCDsiqzrnbzsnbTrk5wgLy9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIC8v66mU7J24IOyKrOudvOydtOuTnC8vXHJcblxyXG4gICAgdmFyICRtYWluU2xpZGUgPSAkKCcubWFpbi1zbGlkZSA+IHVsJyk7XHJcblxyXG4gICAgJG1haW5TbGlkZS5ieFNsaWRlcih7XHJcbiAgICAgICAgbWluU2xpZGVzOjQsXHJcbiAgICAgICAgbWF4U2xpZGVzOjQsXHJcbiAgICAgICAgc2xpZGVXaWR0aDozMDAsXHJcbiAgICAgICAgc2xpZGVNYXJnaW46MjAsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL+ydtOuypO2KuCDsiqzrnbzsnbTrk5wvL1xyXG5cclxuICAgIHZhciAkZXZlbnRTbGlkZSA9ICQoJy5ldmVudC1zbGlkZSA+IHVsJyk7XHJcblxyXG4gICAgJGV2ZW50U2xpZGUuYnhTbGlkZXIoe1xyXG4gICAgICAgIG1vZGU6J2ZhZGUnLFxyXG4gICAgICAgIGF1dG86dHJ1ZSxcclxuICAgICAgICBhdXRvQ29udHJvbHM6dHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyICRzdGFydEJ0biA9ICQoJy5ieC1zdGFydCcpO1xyXG4gICAgdmFyICRzdG9wQnRuID0gJCgnLmJ4LXN0b3AnKTtcclxuXHJcbiAgICAkc3RhcnRCdG4ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgJHN0b3BCdG4uc2hvdygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHN0b3BCdG4ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICR0aGlzLmhpZGUoKTtcclxuICAgICAgICAkc3RhcnRCdG4uc2hvdygpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbi8v7ZG47YSwIOyFgOugie2KuOuwleyKpC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGZvb3RlclNlbGVjdCA9ICQoJy5mb290ZXItc2VsZWN0LWJveCcpO1xyXG4gICAgdmFyICRjbG9zZUJ0biA9ICQoJy5zZWxlY3QtY29udGVudHMtY2xvc2UnKTtcclxuICAgIHZhciAkY29udGVudHMgPSAkKCcuc2VsZWN0LWNvbnRlbnRzJyk7XHJcblxyXG5cclxuICAgICRmb290ZXJTZWxlY3Qub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkY29udGVudHMuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAkY2xvc2VCdG4ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICRjb250ZW50cy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyDsiqTtgazroaTsi5wgYWN0aXZlIC8vXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblxyXG4gICAgJHdpbmRvdy5zY3JvbGwoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICRhY3RpdmUgPSAkKCcuc2Nyb2xsLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICB2YXIgYSA9ICR3aW5kb3cuc2Nyb2xsVG9wKCkgKyAkd2luZG93LmhlaWdodCgpIC0gMjA7XHJcblxyXG4gICAgICAgICRhY3RpdmUuZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgdmFyIGIgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDthID49IGI/XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm9uXCIpIDogJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm9uXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbiJdfQ==
