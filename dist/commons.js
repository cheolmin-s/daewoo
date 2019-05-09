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

    $inputTxtBox.on('focus',function(){
        $label.addClass('on');
    });

    $inputTxtBox.on('focusout',function(){
        $label.removeClass('on');
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
    var $more = $('.snb-notice .more-right');

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



$(function(){

    var $snbDepth1Link = $('.snb .depth1-link');
    var $more = $('.snb .more-right');

    $snbDepth1Link.eq(0).addClass('on');
    $more.eq(0).addClass('on');

    $snbDepth1Link.on('click',function(){

        var $this = $(this);


        if($this.hasClass('on')){
            $snbDepth1Link.removeClass('on');
            $more.removeClass('on');
        } else {
            $more.removeClass('on');
            $snbDepth1Link.removeClass('on');
            $this.children().addClass('on');
            $this.addClass('on');

        }

    });


});

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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhZXdvby1pbmZvLmpzIiwiZGFld29vLWlzYS0xLmpzIiwiZGFld29vLW5vdGljZS0xLmpzIiwiZGFld29vLXJvYm9wb3QuanMiLCJkYWV3b28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiY29tbW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGNvbnRlbnRzTGluayA9ICQoJy5xdWVzdGlvbi1jb250ZW50cy1saW5rJyk7XHJcblxyXG4gICAgJGNvbnRlbnRzTGluay5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICRjb250ZW50c0xpbmsuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkY29udGVudHNMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLnNpYmxpbmdzKCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkaW5wdXRUeHRCb3ggPSAkKCcuaW5mby1zZWFyY2gtYm94Jyk7XHJcbiAgICB2YXIgJGxhYmVsID0gJCgnLnNlYXJjaC1ib3gtdHh0Jyk7XHJcblxyXG4gICAgJGlucHV0VHh0Qm94Lm9uKCdmb2N1cycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkbGFiZWwuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkaW5wdXRUeHRCb3gub24oJ2ZvY3Vzb3V0JyxmdW5jdGlvbigpe1xyXG4gICAgICAgICRsYWJlbC5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbn0pOyIsIi8vIHNuYiDrqZTribQgLy9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHNuYkRlcHRoMUxpbmsgPSAkKCcuc25iLWlzYSAuZGVwdGgxLWxpbmsnKTtcclxuICAgIHZhciAkc25iRGVwdGgyTGluayA9ICQoJy5zbmItaXNhIC5kZXB0aDIgYScpO1xyXG4gICAgdmFyICRzbmJEZXB0aDIgPSAkKCcuc25iLWlzYSAuZGVwdGgyJyk7XHJcbiAgICB2YXIgJHNuYk1vcmUgPSAkKCcuc25iLWlzYSAuc25iLW1vcmUnKTtcclxuXHJcbiAgICAkc25iRGVwdGgyLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJHNuYk1vcmUuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkc25iRGVwdGgyTGluay5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRzbmJEZXB0aDFMaW5rLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG5cclxuXHJcbiAgICAkc25iRGVwdGgxTGluay5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgICAkc25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNuYk1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHNuYk1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLmNoaWxkcmVuKCcuc25iLW1vcmUnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuc2libGluZ3MoKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbi8vIGlzYSDtg63rqZTribQgLy9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHRhYk1lbnUgPSAkKCcudGFiLW1lbnUgbGknKTtcclxuICAgIHZhciAkY29udGVudHMgPSAkKCcudGFiLWNvbnRlbnRzIHNlY3Rpb24nKTtcclxuICAgIHZhciAkdGFiTWVudUxpbmsgPSAkKCcudGFiLW1lbnUtbGluaycpO1xyXG5cclxuICAgICR0YWJNZW51LmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJGNvbnRlbnRzLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICR0YWJNZW51Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgaW5kZXggPSAkdGhpcy5pbmRleCgnLnRhYi1tZW51IGxpJyk7XHJcblxyXG4gICAgICAgICRjb250ZW50cy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGFiTWVudS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkY29udGVudHMuZXEoaW5kZXgpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHRhYk1lbnVMaW5rLmZvY3VzKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcykucGFyZW50cygpO1xyXG4gICAgICAgIHZhciBpbmRleCA9ICR0aGlzLmluZGV4KCcudGFiLW1lbnUgbGknKTtcclxuXHJcbiAgICAgICAgJGNvbnRlbnRzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0YWJNZW51LnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICRjb250ZW50cy5lcShpbmRleCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5cclxuIiwiLy8gc25iIOuplOuJtCAvL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkc25iRGVwdGgxTGluayA9ICQoJy5zbmItbm90aWNlIC5kZXB0aDEtbGluaycpO1xyXG4gICAgdmFyICRzbmJEZXB0aDJMaW5rID0gJCgnLnNuYi1ub3RpY2UgLmRlcHRoMiBhJyk7XHJcbiAgICB2YXIgJHNuYkRlcHRoMiA9ICQoJy5zbmItbm90aWNlIC5kZXB0aDInKTtcclxuICAgIHZhciAkc25iTW9yZSA9ICQoJy5zbmItbm90aWNlIC5zbmItbW9yZScpO1xyXG4gICAgdmFyICRtb3JlID0gJCgnLnNuYi1ub3RpY2UgLm1vcmUtcmlnaHQnKTtcclxuXHJcbiAgICAkc25iRGVwdGgxTGluay5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRzbmJEZXB0aDJMaW5rLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJG1vcmUuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgJHNuYkRlcHRoMUxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGlmKCR0aGlzLmhhc0NsYXNzKCdvbicpKXtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkbW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzbmJEZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5zaWJsaW5ncygpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5jaGlsZHJlbigpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkY2FsZW5kYXJMaW5rID0gJCgnLmNhbGVuZGFyLWxpbmsnKTtcclxuXHJcbiAgICAkY2FsZW5kYXJMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KVxyXG5cclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmRhdGVwaWNrZXInKS5kYXRlcGlja2VyKHtcclxuICAgICAgICBjaGFuZ2VNb250aDogdHJ1ZSxcclxuICAgICAgICBjaGFuZ2VZZWFyOiB0cnVlLFxyXG4gICAgICAgIHllYXJSYW5nZTogXCIyMDA5OjIwMjlcIixcclxuICAgICAgICBmaXJzdERheTogMSxcclxuICAgICAgICBkYXlOYW1lc01pbjogWyfsnbwnLCfsm5QnLCAn7ZmUJywgJ+yImCcsICfrqqknLCAn6riIJywgJ+2GoCddLFxyXG4gICAgICAgIG1vbnRoTmFtZXNTaG9ydDogWycx7JuUJywnMuyblCcsJzPsm5QnLCc07JuUJywnNeyblCcsJzbsm5QnLCc37JuUJywnOOyblCcsJznsm5QnLCcxMOyblCcsJzEx7JuUJywnMTLsm5QnXVxyXG4gICAgfSk7XHJcbn0gKTtcclxuXHJcblxyXG4iLCIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRzbmJEZXB0aDFMaW5rID0gJCgnLnNuYiAuZGVwdGgxLWxpbmsnKTtcclxuICAgIHZhciAkbW9yZSA9ICQoJy5zbmIgLm1vcmUtcmlnaHQnKTtcclxuXHJcbiAgICAkc25iRGVwdGgxTGluay5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRtb3JlLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICRzbmJEZXB0aDFMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIGlmKCR0aGlzLmhhc0NsYXNzKCdvbicpKXtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRtb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuY2hpbGRyZW4oKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG59KTtcclxuIiwiLy8g7Zek642UIOyDgeuLqCDtjJ3sl4UgLy9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5oZWFkZXItcG9wdXAgYnV0dG9uJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5oZWFkZXItcG9wdXAnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIEdOQiAvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRnbmJEZXB0aDFMaW5rID0gJCgnLmduYi1kZXB0aDEtbGluaycpO1xyXG4gICAgdmFyICRnbmJEZXB0aDIgPSAkKCcuZ25iLWRlcHRoMi1jb250YWluZXInKTtcclxuICAgIHZhciAkZ25iRGVwdGgyTGluayA9ICQoJy5nbmItZGVwdGgyLWxpbmsnKTtcclxuICAgIHZhciAkaGVhZGVyQm90dG9tID0gJCgnLmduYi13cmFwJyk7XHJcbiAgICB2YXIgJGduYk1vcmUgPSAkKCcuZ25iLWRlcHRoMiAubW9yZScpO1xyXG4gICAgdmFyICRkZXB0aDMgID0gJCgnLmduYi1kZXB0aDMnKTtcclxuXHJcbiAgICAkZ25iRGVwdGgxTGluay5mb2N1cyhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBpbmRleCA9ICR0aGlzLmluZGV4KCcuZ25iLWRlcHRoMS1saW5rJyk7XHJcbiAgICAgICAgdmFyICRtZW51SWR4ID0gJCgnLm1lbnUnKyhpbmRleCsxKSsnJyk7XHJcblxyXG4gICAgICAgIGZvcihpID0gMTsgaSA8IDcgOyBpKysgKXtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKyhpICsgMSkrJycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkbWVudUlkeC5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLm5leHQoJGduYkRlcHRoMikuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZ25iRGVwdGgyTGluay5sYXN0KCkub24oJ2tleWRvd24nLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBpZihlLnNoaWZ0S2V5ICYmIGtleUNvZGUgPT09IDkpe1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZ25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGduYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZ25iRGVwdGgxTGluay5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgaW5kZXggPSAkdGhpcy5pbmRleCgnLmduYi1kZXB0aDEtbGluaycpO1xyXG4gICAgICAgIHZhciAkbWVudUlkeCA9ICQoJy5tZW51JysoaW5kZXgrMSkrJycpO1xyXG5cclxuICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLm5leHQoJGduYkRlcHRoMikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIGZvcihpID0gMTsgaSA8IDcgOyBpKysgKXtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKyhpICsgMSkrJycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkbWVudUlkeC5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRnbmJNb3JlLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBtb3JlSWR4ID0gJCh0aGlzKS5pbmRleCgnLmduYi1kZXB0aDIgLm1vcmUnKTtcclxuICAgICAgICB2YXIgZGVwdGgyTGlua1RoaXMgPSAkKHRoaXMpLnNpYmxpbmdzKCcuZ25iLWRlcHRoMi1saW5rJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgICAkZ25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGRlcHRoMy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGduYkRlcHRoMkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGduYkRlcHRoMkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRnbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkZGVwdGgzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgZGVwdGgyTGlua1RoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRkZXB0aDMuZXEobW9yZUlkeCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICRoZWFkZXJCb3R0b20ub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGduYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgZm9yKGkgPSAxOyBpIDwgNyA7IGkrKyApe1xyXG4gICAgICAgICAgICAkKCcubWVudScrKGkgKyAxKSsnJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxufSk7XHJcblxyXG4vLyDsgqzsnbTrk5wg66mU64m0IC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHNpZGVEZXB0aDEgPSAkKCcuc2lkZS1tZW51LXdyYXAtZGVwdGgxID4gbGkgPiBhJyk7XHJcbiAgICB2YXIgJHNpZGVEZXB0aDIgPSAkKCcuc2lkZS1tZW51LXdyYXAtZGVwdGgyJyk7XHJcbiAgICB2YXIgJHNpZGVEZXB0aDJCZyA9ICQoJy5jb250ZW50cy1iZycpO1xyXG4gICAgdmFyICRzaWRlQ2xvc2VCdG4gPSAkKCcuc2lkZS1jbG9zZS1idG4nKTtcclxuICAgIHZhciAkc2lkZTcgPSAkKCcuc2lkZTcnKTtcclxuXHJcblxyXG4gICAgJHNpZGVEZXB0aDEub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICBpZigkdGhpcy5oYXNDbGFzcygnb24nKSl7XHJcbiAgICAgICAgICAgICRzaWRlRGVwdGgyQmcucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzaWRlRGVwdGgxLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc2lkZURlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkc2lkZURlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuY2hpbGRyZW4oJy5zaWRlLW1lbnUtd3JhcC1kZXB0aDInKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNpZGVEZXB0aDJCZy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNpZGVEZXB0aDEucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCcuc2lkZS1tZW51LXdyYXAtZGVwdGgyJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJHNpZGU3LmZvY3Vzb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJHNpZGVEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNpZGVEZXB0aDJCZy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc2lkZURlcHRoMS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzaWRlQ2xvc2VCdG4ub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAkc2lkZURlcHRoMS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc2lkZURlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc2lkZURlcHRoMkJnLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHBvc2l0aW9uID0gcGFyc2VJbnQoJChcIi5zaWRlLW1lbnVcIikuY3NzKFwidG9wXCIpKTtcclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgJChcIi5zaWRlLW1lbnVcIikuc3RvcCgpLmFuaW1hdGUoe1widG9wXCI6c2Nyb2xsVG9wK3Bvc2l0aW9uK1wicHhcIn0sMTAwMCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy8g66mU7J24IGljb24g66mU64m0Ly9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkaWNvbkxpbmsgPSAkKCcuaWNvbi1saXN0LWxpbmsnKTtcclxuXHJcbiAgICAkaWNvbkxpbmsub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICRpY29uTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRpY29uTGluay5mb2N1cyhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkaWNvbkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy8g66mU7J24IOyKrOudvOydtOuTnCwg7J2067Kk7Yq4IOyKrOudvOydtOuTnCAvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy/rqZTsnbgg7Iqs65287J2065OcLy9cclxuXHJcbiAgICB2YXIgJG1haW5TbGlkZSA9ICQoJy5tYWluLXNsaWRlID4gdWwnKTtcclxuXHJcbiAgICAkbWFpblNsaWRlLmJ4U2xpZGVyKHtcclxuICAgICAgICBtaW5TbGlkZXM6NCxcclxuICAgICAgICBtYXhTbGlkZXM6NCxcclxuICAgICAgICBzbGlkZVdpZHRoOjMwMCxcclxuICAgICAgICBzbGlkZU1hcmdpbjoyMCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8v7J2067Kk7Yq4IOyKrOudvOydtOuTnC8vXHJcblxyXG4gICAgdmFyICRldmVudFNsaWRlID0gJCgnLmV2ZW50LXNsaWRlID4gdWwnKTtcclxuXHJcbiAgICAkZXZlbnRTbGlkZS5ieFNsaWRlcih7XHJcbiAgICAgICAgbW9kZTonZmFkZScsXHJcbiAgICAgICAgYXV0bzp0cnVlLFxyXG4gICAgICAgIGF1dG9Db250cm9sczp0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgJHN0YXJ0QnRuID0gJCgnLmJ4LXN0YXJ0Jyk7XHJcbiAgICB2YXIgJHN0b3BCdG4gPSAkKCcuYngtc3RvcCcpO1xyXG5cclxuICAgICRzdGFydEJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICR0aGlzLmhpZGUoKTtcclxuICAgICAgICAkc3RvcEJ0bi5zaG93KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc3RvcEJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICRzdGFydEJ0bi5zaG93KCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy/tkbjthLAg7IWA66CJ7Yq467CV7IqkLy9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkZm9vdGVyU2VsZWN0ID0gJCgnLmZvb3Rlci1zZWxlY3QtYm94Jyk7XHJcbiAgICB2YXIgJGNsb3NlQnRuID0gJCgnLnNlbGVjdC1jb250ZW50cy1jbG9zZScpO1xyXG4gICAgdmFyICRjb250ZW50cyA9ICQoJy5zZWxlY3QtY29udGVudHMnKTtcclxuXHJcblxyXG4gICAgJGZvb3RlclNlbGVjdC5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICRjb250ZW50cy5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9KTtcclxuICAgICRjbG9zZUJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGNvbnRlbnRzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbi8vIOyKpO2BrOuhpOyLnCBhY3RpdmUgLy9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcclxuXHJcbiAgICAkd2luZG93LnNjcm9sbChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJGFjdGl2ZSA9ICQoJy5zY3JvbGwtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIHZhciBhID0gJHdpbmRvdy5zY3JvbGxUb3AoKSArICR3aW5kb3cuaGVpZ2h0KCkgLSA4MDtcclxuXHJcbiAgICAgICAgJGFjdGl2ZS5lYWNoKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICB2YXIgYiA9ICQodGhpcykub2Zmc2V0KCkudG9wO2EgPj0gYj9cclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwib25cIikgOiAkKHRoaXMpLnJlbW92ZUNsYXNzKFwib25cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuIl19
