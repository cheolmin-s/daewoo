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


    $label.addClass('on');

    $inputTxtBox.on('focus',function(){
        $label.removeClass('on');
    });

    $inputTxtBox.on('focusout',function(){
        $label.addClass('on');
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhZXdvby1pbmZvLmpzIiwiZGFld29vLWlzYS0xLmpzIiwiZGFld29vLW5vdGljZS0xLmpzIiwiZGFld29vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ25iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkY29udGVudHNMaW5rID0gJCgnLnF1ZXN0aW9uLWNvbnRlbnRzLWxpbmsnKTtcclxuXHJcbiAgICAkY29udGVudHNMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJGNvbnRlbnRzTGluay5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRjb250ZW50c0xpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuc2libGluZ3MoKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRpbnB1dFR4dEJveCA9ICQoJy5pbmZvLXNlYXJjaC1ib3gnKTtcclxuICAgIHZhciAkbGFiZWwgPSAkKCcuc2VhcmNoLWJveC10eHQnKTtcclxuXHJcblxyXG4gICAgJGxhYmVsLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICRpbnB1dFR4dEJveC5vbignZm9jdXMnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGxhYmVsLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGlucHV0VHh0Qm94Lm9uKCdmb2N1c291dCcsZnVuY3Rpb24oKXtcclxuICAgICAgICAkbGFiZWwuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG59KTsiLCIvLyBzbmIg66mU64m0IC8vXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRzbmJEZXB0aDFMaW5rID0gJCgnLnNuYi1pc2EgLmRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgJHNuYkRlcHRoMkxpbmsgPSAkKCcuc25iLWlzYSAuZGVwdGgyIGEnKTtcclxuICAgIHZhciAkc25iRGVwdGgyID0gJCgnLnNuYi1pc2EgLmRlcHRoMicpO1xyXG4gICAgdmFyICRzbmJNb3JlID0gJCgnLnNuYi1pc2EgLnNuYi1tb3JlJyk7XHJcblxyXG4gICAgJHNuYkRlcHRoMi5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRzbmJNb3JlLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJHNuYkRlcHRoMkxpbmsuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkc25iRGVwdGgxTGluay5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuXHJcblxyXG4gICAgJHNuYkRlcHRoMUxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGlmKCR0aGlzLmhhc0NsYXNzKCdvbicpKXtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRzbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5jaGlsZHJlbignLnNuYi1tb3JlJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLnNpYmxpbmdzKCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzbmJEZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyBpc2Eg7YOt66mU64m0IC8vXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICR0YWJNZW51ID0gJCgnLnRhYi1tZW51IGxpJyk7XHJcbiAgICB2YXIgJGNvbnRlbnRzID0gJCgnLnRhYi1jb250ZW50cyBzZWN0aW9uJyk7XHJcbiAgICB2YXIgJHRhYk1lbnVMaW5rID0gJCgnLnRhYi1tZW51LWxpbmsnKTtcclxuXHJcbiAgICAkdGFiTWVudS5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRjb250ZW50cy5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAkdGFiTWVudS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJHRoaXMuaW5kZXgoJy50YWItbWVudSBsaScpO1xyXG5cclxuICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRhYk1lbnUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJGNvbnRlbnRzLmVxKGluZGV4KS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICR0YWJNZW51TGluay5mb2N1cyhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLnBhcmVudHMoKTtcclxuICAgICAgICB2YXIgaW5kZXggPSAkdGhpcy5pbmRleCgnLnRhYi1tZW51IGxpJyk7XHJcblxyXG4gICAgICAgICRjb250ZW50cy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGFiTWVudS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkY29udGVudHMuZXEoaW5kZXgpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiIsIi8vIHNuYiDrqZTribQgLy9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHNuYkRlcHRoMUxpbmsgPSAkKCcuc25iLW5vdGljZSAuZGVwdGgxLWxpbmsnKTtcclxuICAgIHZhciAkc25iRGVwdGgyTGluayA9ICQoJy5zbmItbm90aWNlIC5kZXB0aDIgYScpO1xyXG4gICAgdmFyICRzbmJEZXB0aDIgPSAkKCcuc25iLW5vdGljZSAuZGVwdGgyJyk7XHJcbiAgICB2YXIgJHNuYk1vcmUgPSAkKCcuc25iLW5vdGljZSAuc25iLW1vcmUnKTtcclxuICAgIHZhciAkbW9yZSA9ICQoJy5zbmItbm90aWNlIC5tb3JlJyk7XHJcblxyXG4gICAgJHNuYkRlcHRoMUxpbmsuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkc25iRGVwdGgyTGluay5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRtb3JlLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICRzbmJEZXB0aDFMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICBpZigkdGhpcy5oYXNDbGFzcygnb24nKSl7XHJcbiAgICAgICAgICAgICRzbmJEZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJG1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuc2libGluZ3MoKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuY2hpbGRyZW4oKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGNhbGVuZGFyTGluayA9ICQoJy5jYWxlbmRhci1saW5rJyk7XHJcblxyXG4gICAgJGNhbGVuZGFyTGluay5vbignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnRvZ2dsZUNsYXNzKCdvbicpO1xyXG4gICAgfSlcclxuXHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgICQoJy5kYXRlcGlja2VyJykuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgY2hhbmdlTW9udGg6IHRydWUsXHJcbiAgICAgICAgY2hhbmdlWWVhcjogdHJ1ZSxcclxuICAgICAgICB5ZWFyUmFuZ2U6IFwiMjAwOToyMDI5XCIsXHJcbiAgICAgICAgZmlyc3REYXk6IDEsXHJcbiAgICAgICAgZGF5TmFtZXNNaW46IFsn7J28Jywn7JuUJywgJ+2ZlCcsICfsiJgnLCAn66qpJywgJ+q4iCcsICfthqAnXSxcclxuICAgICAgICBtb250aE5hbWVzU2hvcnQ6IFsnMeyblCcsJzLsm5QnLCcz7JuUJywnNOyblCcsJzXsm5QnLCc27JuUJywnN+yblCcsJzjsm5QnLCc57JuUJywnMTDsm5QnLCcxMeyblCcsJzEy7JuUJ11cclxuICAgIH0pO1xyXG59ICk7XHJcblxyXG5cclxuIiwiLy8g7Zek642UIOyDgeuLqCDtjJ3sl4UgLy9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5oZWFkZXItcG9wdXAgYnV0dG9uJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5oZWFkZXItcG9wdXAnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIEdOQiAvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRnbmJEZXB0aDFMaW5rID0gJCgnLmduYi1kZXB0aDEtbGluaycpO1xyXG4gICAgdmFyICRnbmJEZXB0aDIgPSAkKCcuZ25iLWRlcHRoMi1jb250YWluZXInKTtcclxuICAgIHZhciAkZ25iRGVwdGgyTGluayA9ICQoJy5nbmItZGVwdGgyLWxpbmsnKTtcclxuICAgIHZhciAkaGVhZGVyQm90dG9tID0gJCgnLmduYi13cmFwJyk7XHJcbiAgICB2YXIgJGduYk1vcmUgPSAkKCcuZ25iLWRlcHRoMiAubW9yZScpO1xyXG4gICAgdmFyICRkZXB0aDMgID0gJCgnLmduYi1kZXB0aDMnKTtcclxuXHJcbiAgICAkZ25iRGVwdGgxTGluay5mb2N1cyhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBpbmRleCA9ICR0aGlzLmluZGV4KCcuZ25iLWRlcHRoMS1saW5rJyk7XHJcbiAgICAgICAgdmFyICRtZW51SWR4ID0gJCgnLm1lbnUnKyhpbmRleCsxKSsnJyk7XHJcblxyXG4gICAgICAgIGZvcihpID0gMTsgaSA8IDcgOyBpKysgKXtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKyhpICsgMSkrJycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkbWVudUlkeC5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLm5leHQoJGduYkRlcHRoMikuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZ25iRGVwdGgyTGluay5sYXN0KCkub24oJ2tleWRvd24nLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBpZihlLnNoaWZ0S2V5ICYmIGtleUNvZGUgPT09IDkpe1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZ25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGduYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZ25iRGVwdGgxTGluay5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgaW5kZXggPSAkdGhpcy5pbmRleCgnLmduYi1kZXB0aDEtbGluaycpO1xyXG4gICAgICAgIHZhciAkbWVudUlkeCA9ICQoJy5tZW51JysoaW5kZXgrMSkrJycpO1xyXG5cclxuICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLm5leHQoJGduYkRlcHRoMikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIGZvcihpID0gMTsgaSA8IDcgOyBpKysgKXtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKyhpICsgMSkrJycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkbWVudUlkeC5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRnbmJNb3JlLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBtb3JlSWR4ID0gJCh0aGlzKS5pbmRleCgnLmduYi1kZXB0aDIgLm1vcmUnKTtcclxuICAgICAgICB2YXIgZGVwdGgyTGlua1RoaXMgPSAkKHRoaXMpLnNpYmxpbmdzKCcuZ25iLWRlcHRoMi1saW5rJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgICAkZ25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGRlcHRoMy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGduYkRlcHRoMkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGduYkRlcHRoMkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRnbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkZGVwdGgzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgZGVwdGgyTGlua1RoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRkZXB0aDMuZXEobW9yZUlkeCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICRoZWFkZXJCb3R0b20ub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGduYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgZm9yKGkgPSAxOyBpIDwgNyA7IGkrKyApe1xyXG4gICAgICAgICAgICAkKCcubWVudScrKGkgKyAxKSsnJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxufSk7XHJcblxyXG4vLyDsgqzsnbTrk5wg66mU64m0IC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHNpZGVEZXB0aDEgPSAkKCcuc2lkZS1tZW51LXdyYXAtZGVwdGgxID4gbGkgPiBhJyk7XHJcbiAgICB2YXIgJHNpZGVEZXB0aDIgPSAkKCcuc2lkZS1tZW51LXdyYXAtZGVwdGgyJyk7XHJcbiAgICB2YXIgJHNpZGVEZXB0aDJCZyA9ICQoJy5jb250ZW50cy1iZycpO1xyXG4gICAgdmFyICRzaWRlQ2xvc2VCdG4gPSAkKCcuc2lkZS1jbG9zZS1idG4nKTtcclxuICAgIHZhciAkc2lkZTcgPSAkKCcuc2lkZTcnKTtcclxuXHJcblxyXG4gICAgJHNpZGVEZXB0aDEub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICBpZigkdGhpcy5oYXNDbGFzcygnb24nKSl7XHJcbiAgICAgICAgICAgICRzaWRlRGVwdGgyQmcucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzaWRlRGVwdGgxLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc2lkZURlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkc2lkZURlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMubmV4dCgpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc2lkZURlcHRoMkJnLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc2lkZURlcHRoMS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkc2lkZTcuZm9jdXNvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkc2lkZURlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc2lkZURlcHRoMkJnLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgxLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNpZGVDbG9zZUJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICRzaWRlRGVwdGgxLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgyQmcucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcG9zaXRpb24gPSBwYXJzZUludCgkKFwiLnNpZGUtbWVudVwiKS5jc3MoXCJ0b3BcIikpO1xyXG5cclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAkKFwiLnNpZGUtbWVudVwiKS5zdG9wKCkuYW5pbWF0ZSh7XCJ0b3BcIjpzY3JvbGxUb3ArcG9zaXRpb24rXCJweFwifSwxMDAwKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyDrqZTsnbggaWNvbiDrqZTribQvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRpY29uTGluayA9ICQoJy5pY29uLWxpc3QtbGluaycpO1xyXG5cclxuICAgICRpY29uTGluay5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJGljb25MaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGljb25MaW5rLmZvY3VzKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICRpY29uTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyDrqZTsnbgg7Iqs65287J2065OcLCDsnbTrsqTtirgg7Iqs65287J2065OcIC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvL+uplOyduCDsiqzrnbzsnbTrk5wvL1xyXG5cclxuICAgIHZhciAkbWFpblNsaWRlID0gJCgnLm1haW4tc2xpZGUgPiB1bCcpO1xyXG5cclxuICAgICRtYWluU2xpZGUuYnhTbGlkZXIoe1xyXG4gICAgICAgIG1pblNsaWRlczo0LFxyXG4gICAgICAgIG1heFNsaWRlczo0LFxyXG4gICAgICAgIHNsaWRlV2lkdGg6MzAwLFxyXG4gICAgICAgIHNsaWRlTWFyZ2luOjIwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy/snbTrsqTtirgg7Iqs65287J2065OcLy9cclxuXHJcbiAgICB2YXIgJGV2ZW50U2xpZGUgPSAkKCcuZXZlbnQtc2xpZGUgPiB1bCcpO1xyXG5cclxuICAgICRldmVudFNsaWRlLmJ4U2xpZGVyKHtcclxuICAgICAgICBtb2RlOidmYWRlJyxcclxuICAgICAgICBhdXRvOnRydWUsXHJcbiAgICAgICAgYXV0b0NvbnRyb2xzOnRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciAkc3RhcnRCdG4gPSAkKCcuYngtc3RhcnQnKTtcclxuICAgIHZhciAkc3RvcEJ0biA9ICQoJy5ieC1zdG9wJyk7XHJcblxyXG4gICAgJHN0YXJ0QnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICRzdG9wQnRuLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzdG9wQnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgJHN0YXJ0QnRuLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vL+2RuO2EsCDshYDroIntirjrsJXsiqQvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRmb290ZXJTZWxlY3QgPSAkKCcuZm9vdGVyLXNlbGVjdC1ib3gnKTtcclxuICAgIHZhciAkY2xvc2VCdG4gPSAkKCcuc2VsZWN0LWNvbnRlbnRzLWNsb3NlJyk7XHJcbiAgICB2YXIgJGNvbnRlbnRzID0gJCgnLnNlbGVjdC1jb250ZW50cycpO1xyXG5cclxuXHJcbiAgICAkZm9vdGVyU2VsZWN0Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJGNvbnRlbnRzLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgJGNsb3NlQnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy8g7Iqk7YGs66Gk7IucIGFjdGl2ZSAvL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG5cclxuICAgICR3aW5kb3cuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkYWN0aXZlID0gJCgnLnNjcm9sbC1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgdmFyIGEgPSAkd2luZG93LnNjcm9sbFRvcCgpICsgJHdpbmRvdy5oZWlnaHQoKSAtIDIwO1xyXG5cclxuICAgICAgICAkYWN0aXZlLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgIHZhciBiID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7YSA+PSBiP1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJvblwiKSA6ICQodGhpcykucmVtb3ZlQ2xhc3MoXCJvblwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4iXX0=
