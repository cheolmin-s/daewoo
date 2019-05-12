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

    var $snbDepth1Link = $('.snb .depth1-link');
    var $snbDepth2 = $('.snb .depth2');
    var $snbMore = $('.snb .snb-more');

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

    var $more = $('.snb .more-right');
    var $snbDepth1Link = $('.snb .depth1-link');

    $snbDepth1Link.on('click',function(){

        var $this = $(this);

        if($this.hasClass('on')){
            $more.removeClass('on');
            $this.children('.more-right').addClass('on');
        } else {
            $more.removeClass('on');
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

    var $sideDepth1 = $('.side-menu-wrap-depth1 > li');
    var $sideDepth2 = $('.side-menu-wrap-depth2');
    var $sideDepth2Bg = $('.contents-bg');
    var $sideCloseBtn = $('.side-close-btn');
    var $side7 = $('.side7');
    var position = parseInt($(".side-menu").css("top"));
    var $window = $(window);
    var $sideMenu = $('.side-menu');

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

    $window.scroll(function() {
        var scrollTop = $window.scrollTop();
        $sideMenu.stop().animate({"top":scrollTop+position+"px"},1000);
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

            var $this = $(this);
            var b = $(this).offset().top;

            if(a >= b){
                $this.addClass('on');
            }else{
                $this.removeClass('on');
            }
        });
    });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhZXdvby1pbmZvLmpzIiwiZGFld29vLWlzYS0xLmpzIiwiZGFld29vLW5vdGljZS0xLmpzIiwiZGFld29vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbW1vbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRjb250ZW50c0xpbmsgPSAkKCcucXVlc3Rpb24tY29udGVudHMtbGluaycpO1xyXG5cclxuICAgICRjb250ZW50c0xpbmsub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkY29udGVudHNMaW5rLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJGNvbnRlbnRzTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5zaWJsaW5ncygpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGlucHV0VHh0Qm94ID0gJCgnLmluZm8tc2VhcmNoLWJveCcpO1xyXG4gICAgdmFyICRsYWJlbCA9ICQoJy5zZWFyY2gtYm94LXR4dCcpO1xyXG5cclxuICAgICRpbnB1dFR4dEJveC5vbignZm9jdXMnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGxhYmVsLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGlucHV0VHh0Qm94Lm9uKCdmb2N1c291dCcsZnVuY3Rpb24oKXtcclxuICAgICAgICAkbGFiZWwucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG59KTsiLCIvLyBzbmIg66mU64m0IC8vXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRzbmJEZXB0aDFMaW5rID0gJCgnLnNuYiAuZGVwdGgxLWxpbmsnKTtcclxuICAgIHZhciAkc25iRGVwdGgyID0gJCgnLnNuYiAuZGVwdGgyJyk7XHJcbiAgICB2YXIgJHNuYk1vcmUgPSAkKCcuc25iIC5zbmItbW9yZScpO1xyXG5cclxuICAgICRzbmJEZXB0aDFMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICBpZigkdGhpcy5oYXNDbGFzcygnb24nKSl7XHJcbiAgICAgICAgICAgICRzbmJEZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkc25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuY2hpbGRyZW4oJy5zbmItbW9yZScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5zaWJsaW5ncygpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyBpc2Eg7YOt66mU64m0IC8vXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICR0YWJNZW51ID0gJCgnLnRhYi1tZW51IGxpJyk7XHJcbiAgICB2YXIgJGNvbnRlbnRzID0gJCgnLnRhYi1jb250ZW50cyBzZWN0aW9uJyk7XHJcbiAgICB2YXIgJHRhYk1lbnVMaW5rID0gJCgnLnRhYi1tZW51LWxpbmsnKTtcclxuXHJcbiAgICAkdGFiTWVudS5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRjb250ZW50cy5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAkdGFiTWVudS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJHRoaXMuaW5kZXgoJy50YWItbWVudSBsaScpO1xyXG5cclxuICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRhYk1lbnUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJGNvbnRlbnRzLmVxKGluZGV4KS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICR0YWJNZW51TGluay5mb2N1cyhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLnBhcmVudHMoKTtcclxuICAgICAgICB2YXIgaW5kZXggPSAkdGhpcy5pbmRleCgnLnRhYi1tZW51IGxpJyk7XHJcblxyXG4gICAgICAgICRjb250ZW50cy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGFiTWVudS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkY29udGVudHMuZXEoaW5kZXgpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiIsIi8vIHNuYiDrqZTribQgLy9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJG1vcmUgPSAkKCcuc25iIC5tb3JlLXJpZ2h0Jyk7XHJcbiAgICB2YXIgJHNuYkRlcHRoMUxpbmsgPSAkKCcuc25iIC5kZXB0aDEtbGluaycpO1xyXG5cclxuICAgICRzbmJEZXB0aDFMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgICAkbW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuY2hpbGRyZW4oJy5tb3JlLXJpZ2h0JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGNhbGVuZGFyTGluayA9ICQoJy5jYWxlbmRhci1saW5rJyk7XHJcblxyXG4gICAgJGNhbGVuZGFyTGluay5vbignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnRvZ2dsZUNsYXNzKCdvbicpO1xyXG4gICAgfSlcclxuXHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgICQoJy5kYXRlcGlja2VyJykuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgY2hhbmdlTW9udGg6IHRydWUsXHJcbiAgICAgICAgY2hhbmdlWWVhcjogdHJ1ZSxcclxuICAgICAgICB5ZWFyUmFuZ2U6IFwiMjAwOToyMDI5XCIsXHJcbiAgICAgICAgZmlyc3REYXk6IDEsXHJcbiAgICAgICAgZGF5TmFtZXNNaW46IFsn7J28Jywn7JuUJywgJ+2ZlCcsICfsiJgnLCAn66qpJywgJ+q4iCcsICfthqAnXSxcclxuICAgICAgICBtb250aE5hbWVzU2hvcnQ6IFsnMeyblCcsJzLsm5QnLCcz7JuUJywnNOyblCcsJzXsm5QnLCc27JuUJywnN+yblCcsJzjsm5QnLCc57JuUJywnMTDsm5QnLCcxMeyblCcsJzEy7JuUJ11cclxuICAgIH0pO1xyXG59ICk7XHJcblxyXG5cclxuIiwiLy8g7Zek642UIOyDgeuLqCDtjJ3sl4UgLy9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5oZWFkZXItcG9wdXAgYnV0dG9uJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5oZWFkZXItcG9wdXAnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIEdOQiAvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRnbmJEZXB0aDFMaW5rID0gJCgnLmduYi1kZXB0aDEtbGluaycpO1xyXG4gICAgdmFyICRnbmJEZXB0aDIgPSAkKCcuZ25iLWRlcHRoMi1jb250YWluZXInKTtcclxuICAgIHZhciAkZ25iRGVwdGgyTGluayA9ICQoJy5nbmItZGVwdGgyLWxpbmsnKTtcclxuICAgIHZhciAkaGVhZGVyQm90dG9tID0gJCgnLmduYi13cmFwJyk7XHJcbiAgICB2YXIgJGduYk1vcmUgPSAkKCcuZ25iLWRlcHRoMiAubW9yZScpO1xyXG4gICAgdmFyICRkZXB0aDMgID0gJCgnLmduYi1kZXB0aDMnKTtcclxuXHJcbiAgICAkZ25iRGVwdGgxTGluay5mb2N1cyhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBpbmRleCA9ICR0aGlzLmluZGV4KCcuZ25iLWRlcHRoMS1saW5rJyk7XHJcbiAgICAgICAgdmFyICRtZW51SWR4ID0gJCgnLm1lbnUnKyhpbmRleCsxKSsnJyk7XHJcblxyXG4gICAgICAgIGZvcihpID0gMTsgaSA8IDcgOyBpKysgKXtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKyhpICsgMSkrJycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkbWVudUlkeC5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLm5leHQoJGduYkRlcHRoMikuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZ25iRGVwdGgyTGluay5sYXN0KCkub24oJ2tleWRvd24nLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBpZihlLnNoaWZ0S2V5ICYmIGtleUNvZGUgPT09IDkpe1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZ25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGduYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZ25iRGVwdGgxTGluay5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgaW5kZXggPSAkdGhpcy5pbmRleCgnLmduYi1kZXB0aDEtbGluaycpO1xyXG4gICAgICAgIHZhciAkbWVudUlkeCA9ICQoJy5tZW51JysoaW5kZXgrMSkrJycpO1xyXG5cclxuICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLm5leHQoJGduYkRlcHRoMikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIGZvcihpID0gMTsgaSA8IDcgOyBpKysgKXtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKyhpICsgMSkrJycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkbWVudUlkeC5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRnbmJNb3JlLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBtb3JlSWR4ID0gJCh0aGlzKS5pbmRleCgnLmduYi1kZXB0aDIgLm1vcmUnKTtcclxuICAgICAgICB2YXIgZGVwdGgyTGlua1RoaXMgPSAkKHRoaXMpLnNpYmxpbmdzKCcuZ25iLWRlcHRoMi1saW5rJyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgICAkZ25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGRlcHRoMy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGduYkRlcHRoMkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGduYkRlcHRoMkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRnbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkZGVwdGgzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgZGVwdGgyTGlua1RoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRkZXB0aDMuZXEobW9yZUlkeCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICRoZWFkZXJCb3R0b20ub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGduYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgZm9yKGkgPSAxOyBpIDwgNyA7IGkrKyApe1xyXG4gICAgICAgICAgICAkKCcubWVudScrKGkgKyAxKSsnJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxufSk7XHJcblxyXG4vLyDsgqzsnbTrk5wg66mU64m0IC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHNpZGVEZXB0aDEgPSAkKCcuc2lkZS1tZW51LXdyYXAtZGVwdGgxID4gbGknKTtcclxuICAgIHZhciAkc2lkZURlcHRoMiA9ICQoJy5zaWRlLW1lbnUtd3JhcC1kZXB0aDInKTtcclxuICAgIHZhciAkc2lkZURlcHRoMkJnID0gJCgnLmNvbnRlbnRzLWJnJyk7XHJcbiAgICB2YXIgJHNpZGVDbG9zZUJ0biA9ICQoJy5zaWRlLWNsb3NlLWJ0bicpO1xyXG4gICAgdmFyICRzaWRlNyA9ICQoJy5zaWRlNycpO1xyXG4gICAgdmFyIHBvc2l0aW9uID0gcGFyc2VJbnQoJChcIi5zaWRlLW1lbnVcIikuY3NzKFwidG9wXCIpKTtcclxuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG4gICAgdmFyICRzaWRlTWVudSA9ICQoJy5zaWRlLW1lbnUnKTtcclxuXHJcbiAgICAkc2lkZURlcHRoMS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGlmKCR0aGlzLmhhc0NsYXNzKCdvbicpKXtcclxuICAgICAgICAgICAgJHNpZGVEZXB0aDJCZy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNpZGVEZXB0aDEucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzaWRlRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRzaWRlRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5jaGlsZHJlbignLnNpZGUtbWVudS13cmFwLWRlcHRoMicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc2lkZURlcHRoMkJnLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc2lkZURlcHRoMS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuc2libGluZ3MoJy5zaWRlLW1lbnUtd3JhcC1kZXB0aDInKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gICAgJHNpZGU3LmZvY3Vzb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJHNpZGVEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNpZGVEZXB0aDJCZy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc2lkZURlcHRoMS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG4gICAgJHNpZGVDbG9zZUJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICRzaWRlRGVwdGgxLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgyQmcucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkd2luZG93LnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJHdpbmRvdy5zY3JvbGxUb3AoKTtcclxuICAgICAgICAkc2lkZU1lbnUuc3RvcCgpLmFuaW1hdGUoe1widG9wXCI6c2Nyb2xsVG9wK3Bvc2l0aW9uK1wicHhcIn0sMTAwMCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy8g66mU7J24IGljb24g66mU64m0Ly9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkaWNvbkxpbmsgPSAkKCcuaWNvbi1saXN0LWxpbmsnKTtcclxuXHJcbiAgICAkaWNvbkxpbmsub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICRpY29uTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRpY29uTGluay5mb2N1cyhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkaWNvbkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy8g66mU7J24IOyKrOudvOydtOuTnCwg7J2067Kk7Yq4IOyKrOudvOydtOuTnCAvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy/rqZTsnbgg7Iqs65287J2065OcLy9cclxuXHJcbiAgICB2YXIgJG1haW5TbGlkZSA9ICQoJy5tYWluLXNsaWRlID4gdWwnKTtcclxuXHJcbiAgICAkbWFpblNsaWRlLmJ4U2xpZGVyKHtcclxuICAgICAgICBtaW5TbGlkZXM6NCxcclxuICAgICAgICBtYXhTbGlkZXM6NCxcclxuICAgICAgICBzbGlkZVdpZHRoOjMwMCxcclxuICAgICAgICBzbGlkZU1hcmdpbjoyMCxcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL+ydtOuypO2KuCDsiqzrnbzsnbTrk5wvL1xyXG5cclxuICAgIHZhciAkZXZlbnRTbGlkZSA9ICQoJy5ldmVudC1zbGlkZSA+IHVsJyk7XHJcblxyXG4gICAgJGV2ZW50U2xpZGUuYnhTbGlkZXIoe1xyXG4gICAgICAgIG1vZGU6J2ZhZGUnLFxyXG4gICAgICAgIGF1dG86dHJ1ZSxcclxuICAgICAgICBhdXRvQ29udHJvbHM6dHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyICRzdGFydEJ0biA9ICQoJy5ieC1zdGFydCcpO1xyXG4gICAgdmFyICRzdG9wQnRuID0gJCgnLmJ4LXN0b3AnKTtcclxuXHJcbiAgICAkc3RhcnRCdG4ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgJHN0b3BCdG4uc2hvdygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHN0b3BCdG4ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICR0aGlzLmhpZGUoKTtcclxuICAgICAgICAkc3RhcnRCdG4uc2hvdygpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbi8v7ZG47YSwIOyFgOugie2KuOuwleyKpC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGZvb3RlclNlbGVjdCA9ICQoJy5mb290ZXItc2VsZWN0LWJveCcpO1xyXG4gICAgdmFyICRjbG9zZUJ0biA9ICQoJy5zZWxlY3QtY29udGVudHMtY2xvc2UnKTtcclxuICAgIHZhciAkY29udGVudHMgPSAkKCcuc2VsZWN0LWNvbnRlbnRzJyk7XHJcblxyXG5cclxuICAgICRmb290ZXJTZWxlY3Qub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkY29udGVudHMuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSk7XHJcbiAgICAkY2xvc2VCdG4ub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICRjb250ZW50cy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyDsiqTtgazroaTsi5wgYWN0aXZlIC8vXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcblxyXG4gICAgJHdpbmRvdy5zY3JvbGwoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICRhY3RpdmUgPSAkKCcuc2Nyb2xsLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICB2YXIgYSA9ICR3aW5kb3cuc2Nyb2xsVG9wKCkgKyAkd2luZG93LmhlaWdodCgpIC0gODA7XHJcblxyXG4gICAgICAgICRhY3RpdmUuZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGIgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgICAgICAgIGlmKGEgPj0gYil7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59KTsiXX0=
