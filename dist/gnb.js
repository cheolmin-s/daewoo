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


    $inputTxtBox.focus(function(){
        $label.hide();
    });

    $inputTxtBox.focusout(function(){
        $label.show();
    });
});
// snb 메뉴 //

$(function(){

    var $snbDepth1Link = $('.depth1-link');
    var $snbDepth2Link = $('.snb-isa .depth2 a');
    var $snbDepth2 = $('.snb-isa .depth2');
    var $snbMore = $('.snb-isa .snb-more');

    $snbDepth2.eq(0).addClass('on');
    $snbMore.eq(0).addClass('on');
    $snbDepth2Link.eq(0).addClass('on');
    $snbDepth1Link.eq(0).addClass('on');

    $snbDepth1Link.on('click',function(e){
        e.stopPropagation();

        var $this = $(this);
        $snbMore.removeClass('on');
        $snbDepth2.removeClass('on');
        $snbDepth1Link.removeClass('on');
        $this.siblings($snbDepth2).addClass('on');
        $this.children($snbMore).addClass('on');
        $this.addClass('on');

    });

    $snbDepth1Link.focus(function(e){

        e.stopPropagation();

        var $this = $(this);

        $snbDepth1Link.removeClass('on');
        $snbMore.removeClass('on');
        $snbDepth2.removeClass('on');
        $this.addClass('on');
        $this.siblings($snbDepth2).addClass('on');
        $this.children($snbMore).addClass('on');
    });
    $snbDepth1Link.last().focus(function(){
        $snbDepth1Link.removeClass('on');
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

    var $snbDepth1Link = $('.snb-notice .depth1 a');
    var $snbDepth2Link = $('.snb-notice .depth2 a');
    var $snbDepth2 = $('.snb-notice .snb-depth2');
    var $snbMore = $('.snb-notice .snb-more');
    var $more = $('.snb-notice .more');

    $snbDepth2Link.eq(0).addClass('on');
    $more.eq(0).addClass('on');

    $snbDepth1Link.on('click',function(e){
        e.stopPropagation();

        $snbMore.removeClass('on');
        $snbDepth2.removeClass('on');
        $snbDepth1Link.removeClass('on');
        $(this).siblings($snbDepth2).addClass('on');
        $(this).children($snbMore).addClass('on');
        $(this).addClass('on');

    });

    $snbDepth1Link.focus(function(e){

        e.stopPropagation();

        $snbMore.removeClass('on');
        $snbDepth2.removeClass('on');
        $snbDepth1Link.removeClass('on');
        $(this).siblings($snbDepth2).addClass('on');
        $(this).children($snbMore).addClass('on');

    });

    $snbDepth2Link.focus(function(e){

        e.stopPropagation();

        var $this = $(this);

        $snbDepth2Link.removeClass('on');
        $this.addClass('on');
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

    // $gnbMore.focus(function(){
    //
    //     var $this = $(this);
    //     var moreIdx = $(this).index('.gnb-depth2 .more');
    //     var depth2LinkThis = $(this).siblings('.gnb-depth2-link');
    //
    //     if($this.hasClass('on')){
    //         $gnbMore.removeClass('on');
    //         $depth3.removeClass('on');
    //         $gnbDepth2Link.removeClass('on');
    //     } else {
    //         $gnbDepth2Link.removeClass('on');
    //         $gnbMore.removeClass('on');
    //         $depth3.removeClass('on');
    //         $this.addClass('on');
    //         depth2LinkThis.addClass('on');
    //         $depth3.eq(moreIdx).addClass('on');
    //     }
    // });

    $gnbDepth2Link.focus(function(){
        $gnbDepth2Link.removeClass('on');
        $gnbMore.removeClass('on');
        $depth3.removeClass('on');
    });

    $gnbDepth2Link.last().focusout(function(){

        $gnbDepth1Link.removeClass('on');
        $gnbDepth2.removeClass('on');
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


    // $sideDepth1.on('focus',function(e){
    //
    //     e.preventDefault();
    //
    //     var $this = $(this);
    //
    //     if($this.hasClass('on')){
    //         $sideDepth2Bg.removeClass('on');
    //         $sideDepth1.removeClass('on');
    //         $sideDepth2.removeClass('on');
    //     } else {
    //         $sideDepth2.removeClass('on');
    //         $this.next().addClass('on');
    //         $sideDepth2Bg.addClass('on');
    //         $sideDepth1.removeClass('on');
    //         $this.addClass('on');
    //     }
    //
    // });

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


    $sideCloseBtn.last().focusout(function(){

        $sideDepth1.removeClass('on');
    });

    $side7.focusout(function(){
        $sideDepth2.removeClass('on');
        $sideDepth2Bg.removeClass('on');
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhZXdvby1pbmZvLmpzIiwiZGFld29vLWlzYS0xLmpzIiwiZGFld29vLW5vdGljZS0xLmpzIiwiZGFld29vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ25iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkY29udGVudHNMaW5rID0gJCgnLnF1ZXN0aW9uLWNvbnRlbnRzLWxpbmsnKTtcclxuXHJcbiAgICAkY29udGVudHNMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJGNvbnRlbnRzTGluay5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRjb250ZW50c0xpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuc2libGluZ3MoKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRpbnB1dFR4dEJveCA9ICQoJy5pbmZvLXNlYXJjaC1ib3gnKTtcclxuICAgIHZhciAkbGFiZWwgPSAkKCcuc2VhcmNoLWJveC10eHQnKTtcclxuXHJcblxyXG4gICAgJGlucHV0VHh0Qm94LmZvY3VzKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGxhYmVsLmhpZGUoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRpbnB1dFR4dEJveC5mb2N1c291dChmdW5jdGlvbigpe1xyXG4gICAgICAgICRsYWJlbC5zaG93KCk7XHJcbiAgICB9KTtcclxufSk7IiwiLy8gc25iIOuplOuJtCAvL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkc25iRGVwdGgxTGluayA9ICQoJy5kZXB0aDEtbGluaycpO1xyXG4gICAgdmFyICRzbmJEZXB0aDJMaW5rID0gJCgnLnNuYi1pc2EgLmRlcHRoMiBhJyk7XHJcbiAgICB2YXIgJHNuYkRlcHRoMiA9ICQoJy5zbmItaXNhIC5kZXB0aDInKTtcclxuICAgIHZhciAkc25iTW9yZSA9ICQoJy5zbmItaXNhIC5zbmItbW9yZScpO1xyXG5cclxuICAgICRzbmJEZXB0aDIuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkc25iTW9yZS5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRzbmJEZXB0aDJMaW5rLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJHNuYkRlcHRoMUxpbmsuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgJHNuYkRlcHRoMUxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgICRzbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNuYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuc2libGluZ3MoJHNuYkRlcHRoMikuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuY2hpbGRyZW4oJHNuYk1vcmUpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICRzbmJEZXB0aDFMaW5rLmZvY3VzKGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkc25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLnNpYmxpbmdzKCRzbmJEZXB0aDIpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmNoaWxkcmVuKCRzbmJNb3JlKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG4gICAgJHNuYkRlcHRoMUxpbmsubGFzdCgpLmZvY3VzKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJHNuYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy8gaXNhIO2DreuplOuJtCAvL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkdGFiTWVudSA9ICQoJy50YWItbWVudSBsaScpO1xyXG4gICAgdmFyICRjb250ZW50cyA9ICQoJy50YWItY29udGVudHMgc2VjdGlvbicpO1xyXG4gICAgdmFyICR0YWJNZW51TGluayA9ICQoJy50YWItbWVudS1saW5rJyk7XHJcblxyXG4gICAgJHRhYk1lbnUuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkY29udGVudHMuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgJHRhYk1lbnUub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBpbmRleCA9ICR0aGlzLmluZGV4KCcudGFiLW1lbnUgbGknKTtcclxuXHJcbiAgICAgICAgJGNvbnRlbnRzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0YWJNZW51LnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICRjb250ZW50cy5lcShpbmRleCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkdGFiTWVudUxpbmsuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKS5wYXJlbnRzKCk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJHRoaXMuaW5kZXgoJy50YWItbWVudSBsaScpO1xyXG5cclxuICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRhYk1lbnUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJGNvbnRlbnRzLmVxKGluZGV4KS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4iLCIvLyBzbmIg66mU64m0IC8vXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRzbmJEZXB0aDFMaW5rID0gJCgnLnNuYi1ub3RpY2UgLmRlcHRoMSBhJyk7XHJcbiAgICB2YXIgJHNuYkRlcHRoMkxpbmsgPSAkKCcuc25iLW5vdGljZSAuZGVwdGgyIGEnKTtcclxuICAgIHZhciAkc25iRGVwdGgyID0gJCgnLnNuYi1ub3RpY2UgLnNuYi1kZXB0aDInKTtcclxuICAgIHZhciAkc25iTW9yZSA9ICQoJy5zbmItbm90aWNlIC5zbmItbW9yZScpO1xyXG4gICAgdmFyICRtb3JlID0gJCgnLnNuYi1ub3RpY2UgLm1vcmUnKTtcclxuXHJcbiAgICAkc25iRGVwdGgyTGluay5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRtb3JlLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICRzbmJEZXB0aDFMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgJHNuYk1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNuYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCRzbmJEZXB0aDIpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJHNuYk1vcmUpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNuYkRlcHRoMUxpbmsuZm9jdXMoZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICRzbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNuYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygkc25iRGVwdGgyKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCRzbmJNb3JlKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkc25iRGVwdGgyTGluay5mb2N1cyhmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJHNuYkRlcHRoMkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkY2FsZW5kYXJMaW5rID0gJCgnLmNhbGVuZGFyLWxpbmsnKTtcclxuXHJcbiAgICAkY2FsZW5kYXJMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkudG9nZ2xlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KVxyXG5cclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLmRhdGVwaWNrZXInKS5kYXRlcGlja2VyKHtcclxuICAgICAgICBjaGFuZ2VNb250aDogdHJ1ZSxcclxuICAgICAgICBjaGFuZ2VZZWFyOiB0cnVlLFxyXG4gICAgICAgIHllYXJSYW5nZTogXCIyMDA5OjIwMjlcIixcclxuICAgICAgICBmaXJzdERheTogMSxcclxuICAgICAgICBkYXlOYW1lc01pbjogWyfsnbwnLCfsm5QnLCAn7ZmUJywgJ+yImCcsICfrqqknLCAn6riIJywgJ+2GoCddLFxyXG4gICAgICAgIG1vbnRoTmFtZXNTaG9ydDogWycx7JuUJywnMuyblCcsJzPsm5QnLCc07JuUJywnNeyblCcsJzbsm5QnLCc37JuUJywnOOyblCcsJznsm5QnLCcxMOyblCcsJzEx7JuUJywnMTLsm5QnXVxyXG4gICAgfSk7XHJcbn0gKTtcclxuXHJcblxyXG4iLCIvLyDtl6TrjZQg7IOB64uoIO2MneyXhSAvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmhlYWRlci1wb3B1cCBidXR0b24nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmhlYWRlci1wb3B1cCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gR05CIC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGduYkRlcHRoMUxpbmsgPSAkKCcuZ25iLWRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgJGduYkRlcHRoMiA9ICQoJy5nbmItZGVwdGgyLWNvbnRhaW5lcicpO1xyXG4gICAgdmFyICRnbmJEZXB0aDJMaW5rID0gJCgnLmduYi1kZXB0aDItbGluaycpO1xyXG4gICAgdmFyICRoZWFkZXJCb3R0b20gPSAkKCcuZ25iLXdyYXAnKTtcclxuICAgIHZhciAkZ25iTW9yZSA9ICQoJy5nbmItZGVwdGgyIC5tb3JlJyk7XHJcbiAgICB2YXIgJGRlcHRoMyAgPSAkKCcuZ25iLWRlcHRoMycpO1xyXG5cclxuICAgICRnbmJEZXB0aDFMaW5rLmZvY3VzKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJHRoaXMuaW5kZXgoJy5nbmItZGVwdGgxLWxpbmsnKTtcclxuICAgICAgICB2YXIgJG1lbnVJZHggPSAkKCcubWVudScrKGluZGV4KzEpKycnKTtcclxuXHJcbiAgICAgICAgZm9yKGkgPSAxOyBpIDwgNyA7IGkrKyApe1xyXG4gICAgICAgICAgICAkKCcubWVudScrKGkgKyAxKSsnJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRtZW51SWR4LmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICRnbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMubmV4dCgkZ25iRGVwdGgyKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vICRnbmJNb3JlLmZvY3VzKGZ1bmN0aW9uKCl7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAvLyAgICAgdmFyIG1vcmVJZHggPSAkKHRoaXMpLmluZGV4KCcuZ25iLWRlcHRoMiAubW9yZScpO1xyXG4gICAgLy8gICAgIHZhciBkZXB0aDJMaW5rVGhpcyA9ICQodGhpcykuc2libGluZ3MoJy5nbmItZGVwdGgyLWxpbmsnKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgLy8gICAgICAgICAkZ25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgIC8vICAgICAgICAgJGRlcHRoMy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgIC8vICAgICAgICAgJGduYkRlcHRoMkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgJGduYkRlcHRoMkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAvLyAgICAgICAgICRnbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgLy8gICAgICAgICAkZGVwdGgzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgLy8gICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgIC8vICAgICAgICAgZGVwdGgyTGlua1RoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAvLyAgICAgICAgICRkZXB0aDMuZXEobW9yZUlkeCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgJGduYkRlcHRoMkxpbmsuZm9jdXMoZnVuY3Rpb24oKXtcclxuICAgICAgICAkZ25iRGVwdGgyTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkZ25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkZGVwdGgzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGduYkRlcHRoMkxpbmsubGFzdCgpLmZvY3Vzb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICRnbmJEZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRnbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZ25iRGVwdGgxTGluay5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgaW5kZXggPSAkdGhpcy5pbmRleCgnLmduYi1kZXB0aDEtbGluaycpO1xyXG4gICAgICAgIHZhciAkbWVudUlkeCA9ICQoJy5tZW51JysoaW5kZXgrMSkrJycpO1xyXG5cclxuICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLm5leHQoJGduYkRlcHRoMikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIGZvcihpID0gMTsgaSA8IDcgOyBpKysgKXtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKyhpICsgMSkrJycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkbWVudUlkeC5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRnbmJNb3JlLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBtb3JlSWR4ID0gJCh0aGlzKS5pbmRleCgnLmduYi1kZXB0aDIgLm1vcmUnKTtcclxuICAgICAgICB2YXIgZGVwdGgyTGlua1RoaXMgPSAkKHRoaXMpLnNpYmxpbmdzKCcuZ25iLWRlcHRoMi1saW5rJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgICAkZ25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGRlcHRoMy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGduYkRlcHRoMkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGduYkRlcHRoMkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRnbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkZGVwdGgzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgZGVwdGgyTGlua1RoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRkZXB0aDMuZXEobW9yZUlkeCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICRoZWFkZXJCb3R0b20ub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGduYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgZm9yKGkgPSAxOyBpIDwgNyA7IGkrKyApe1xyXG4gICAgICAgICAgICAkKCcubWVudScrKGkgKyAxKSsnJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxufSk7XHJcblxyXG4vLyDsgqzsnbTrk5wg66mU64m0IC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHNpZGVEZXB0aDEgPSAkKCcuc2lkZS1tZW51LXdyYXAtZGVwdGgxID4gbGkgPiBhJyk7XHJcbiAgICB2YXIgJHNpZGVEZXB0aDIgPSAkKCcuc2lkZS1tZW51LXdyYXAtZGVwdGgyJyk7XHJcbiAgICB2YXIgJHNpZGVEZXB0aDJCZyA9ICQoJy5jb250ZW50cy1iZycpO1xyXG4gICAgdmFyICRzaWRlQ2xvc2VCdG4gPSAkKCcuc2lkZS1jbG9zZS1idG4nKTtcclxuICAgIHZhciAkc2lkZTcgPSAkKCcuc2lkZTcnKTtcclxuXHJcblxyXG4gICAgLy8gJHNpZGVEZXB0aDEub24oJ2ZvY3VzJyxmdW5jdGlvbihlKXtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBpZigkdGhpcy5oYXNDbGFzcygnb24nKSl7XHJcbiAgICAvLyAgICAgICAgICRzaWRlRGVwdGgyQmcucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAvLyAgICAgICAgICRzaWRlRGVwdGgxLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgLy8gICAgICAgICAkc2lkZURlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAkc2lkZURlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgIC8vICAgICAgICAgJHRoaXMubmV4dCgpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgLy8gICAgICAgICAkc2lkZURlcHRoMkJnLmFkZENsYXNzKCdvbicpO1xyXG4gICAgLy8gICAgICAgICAkc2lkZURlcHRoMS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgIC8vICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vIH0pO1xyXG5cclxuICAgICRzaWRlRGVwdGgxLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgICAkc2lkZURlcHRoMkJnLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc2lkZURlcHRoMS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNpZGVEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHNpZGVEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLm5leHQoKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNpZGVEZXB0aDJCZy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNpZGVEZXB0aDEucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgJHNpZGVDbG9zZUJ0bi5sYXN0KCkuZm9jdXNvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJHNpZGVEZXB0aDEucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2lkZTcuZm9jdXNvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkc2lkZURlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc2lkZURlcHRoMkJnLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNpZGVDbG9zZUJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICRzaWRlRGVwdGgxLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgyQmcucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcG9zaXRpb24gPSBwYXJzZUludCgkKFwiLnNpZGUtbWVudVwiKS5jc3MoXCJ0b3BcIikpO1xyXG5cclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAkKFwiLnNpZGUtbWVudVwiKS5zdG9wKCkuYW5pbWF0ZSh7XCJ0b3BcIjpzY3JvbGxUb3ArcG9zaXRpb24rXCJweFwifSwxMDAwKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyDrqZTsnbggaWNvbiDrqZTribQvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRpY29uTGluayA9ICQoJy5pY29uLWxpc3QtbGluaycpO1xyXG5cclxuICAgICRpY29uTGluay5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJGljb25MaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGljb25MaW5rLmZvY3VzKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICRpY29uTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyDrqZTsnbgg7Iqs65287J2065OcLCDsnbTrsqTtirgg7Iqs65287J2065OcIC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvL+uplOyduCDsiqzrnbzsnbTrk5wvL1xyXG5cclxuICAgIHZhciAkbWFpblNsaWRlID0gJCgnLm1haW4tc2xpZGUgPiB1bCcpO1xyXG5cclxuICAgICRtYWluU2xpZGUuYnhTbGlkZXIoe1xyXG4gICAgICAgIG1pblNsaWRlczo0LFxyXG4gICAgICAgIG1heFNsaWRlczo0LFxyXG4gICAgICAgIHNsaWRlV2lkdGg6MzAwLFxyXG4gICAgICAgIHNsaWRlTWFyZ2luOjIwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy/snbTrsqTtirgg7Iqs65287J2065OcLy9cclxuXHJcbiAgICB2YXIgJGV2ZW50U2xpZGUgPSAkKCcuZXZlbnQtc2xpZGUgPiB1bCcpO1xyXG5cclxuICAgICRldmVudFNsaWRlLmJ4U2xpZGVyKHtcclxuICAgICAgICBtb2RlOidmYWRlJyxcclxuICAgICAgICBhdXRvOnRydWUsXHJcbiAgICAgICAgYXV0b0NvbnRyb2xzOnRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciAkc3RhcnRCdG4gPSAkKCcuYngtc3RhcnQnKTtcclxuICAgIHZhciAkc3RvcEJ0biA9ICQoJy5ieC1zdG9wJyk7XHJcblxyXG4gICAgJHN0YXJ0QnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICRzdG9wQnRuLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzdG9wQnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgJHN0YXJ0QnRuLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vL+2RuO2EsCDshYDroIntirjrsJXsiqQvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRmb290ZXJTZWxlY3QgPSAkKCcuZm9vdGVyLXNlbGVjdC1ib3gnKTtcclxuICAgIHZhciAkY2xvc2VCdG4gPSAkKCcuc2VsZWN0LWNvbnRlbnRzLWNsb3NlJyk7XHJcbiAgICB2YXIgJGNvbnRlbnRzID0gJCgnLnNlbGVjdC1jb250ZW50cycpO1xyXG5cclxuXHJcbiAgICAkZm9vdGVyU2VsZWN0Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJGNvbnRlbnRzLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgJGNsb3NlQnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG4iXX0=
