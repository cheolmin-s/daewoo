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

$( function() {
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
    var $gnbDepth2 = $('.gnb-depth2-wrap');
    var $gnbDepth2Link = $('.gnb-depth2-link');
    var $headerBottom = $('.gnb-wrap');
    var $gnbMore = $('.gnb-depth2 .more');


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

    $gnbMore.on('click',function(){

        var moreIdx = $(this).index('.gnb-depth2 .more');
        var depth3  = $('.gnb-depth3');
        var depth2LinkThis = $(this).siblings('.gnb-depth2-link');

        $gnbDepth2Link.removeClass('on');
        depth2LinkThis.addClass('on');

        $gnbMore.removeClass('on');
        $(this).addClass('on');


        depth3.removeClass('on');
        depth3.eq(moreIdx).addClass('on');
    });

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

    $gnbDepth2Link.last().focusout(function(){

        $gnbDepth1Link.removeClass('on');
        $gnbDepth2.removeClass('on');
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

    $sideDepth1.on('click',function(e){

        e.preventDefault();


        var $this = $(this);

        $sideDepth1.removeClass('on');
        $sideDepth2.removeClass('on');
        $this.addClass('on');
        $sideDepth2Bg.addClass('on');
        $this.next().addClass('on');

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhZXdvby1pbmZvLmpzIiwiZGFld29vLWlzYS0xLmpzIiwiZGFld29vLW5vdGljZS0xLmpzIiwiZGFld29vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImduYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGNvbnRlbnRzTGluayA9ICQoJy5xdWVzdGlvbi1jb250ZW50cy1saW5rJyk7XHJcblxyXG4gICAgJGNvbnRlbnRzTGluay5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICRjb250ZW50c0xpbmsuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkY29udGVudHNMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLnNpYmxpbmdzKCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pOyIsIi8vIHNuYiDrqZTribQgLy9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHNuYkRlcHRoMUxpbmsgPSAkKCcuZGVwdGgxLWxpbmsnKTtcclxuICAgIHZhciAkc25iRGVwdGgyTGluayA9ICQoJy5zbmItaXNhIC5kZXB0aDIgYScpO1xyXG4gICAgdmFyICRzbmJEZXB0aDIgPSAkKCcuc25iLWlzYSAuZGVwdGgyJyk7XHJcbiAgICB2YXIgJHNuYk1vcmUgPSAkKCcuc25iLWlzYSAuc25iLW1vcmUnKTtcclxuXHJcbiAgICAkc25iRGVwdGgyLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJHNuYk1vcmUuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkc25iRGVwdGgyTGluay5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRzbmJEZXB0aDFMaW5rLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICRzbmJEZXB0aDFMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgJHNuYk1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNuYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCRzbmJEZXB0aDIpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJHNuYk1vcmUpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNuYkRlcHRoMUxpbmsuZm9jdXMoZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICRzbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNuYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygkc25iRGVwdGgyKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCRzbmJNb3JlKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyBpc2Eg7YOt66mU64m0IC8vXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICR0YWJNZW51ID0gJCgnLnRhYi1tZW51IGxpJyk7XHJcbiAgICB2YXIgJGNvbnRlbnRzID0gJCgnLnRhYi1jb250ZW50cyBzZWN0aW9uJyk7XHJcbiAgICB2YXIgJHRhYk1lbnVMaW5rID0gJCgnLnRhYi1tZW51LWxpbmsnKTtcclxuXHJcbiAgICAkdGFiTWVudS5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRjb250ZW50cy5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAkdGFiTWVudS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJHRoaXMuaW5kZXgoJy50YWItbWVudSBsaScpO1xyXG5cclxuICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRhYk1lbnUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJGNvbnRlbnRzLmVxKGluZGV4KS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICR0YWJNZW51TGluay5mb2N1cyhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLnBhcmVudHMoKTtcclxuICAgICAgICB2YXIgaW5kZXggPSAkdGhpcy5pbmRleCgnLnRhYi1tZW51IGxpJyk7XHJcblxyXG4gICAgICAgICRjb250ZW50cy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGFiTWVudS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkY29udGVudHMuZXEoaW5kZXgpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiIsIi8vIHNuYiDrqZTribQgLy9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHNuYkRlcHRoMUxpbmsgPSAkKCcuc25iLW5vdGljZSAuZGVwdGgxIGEnKTtcclxuICAgIHZhciAkc25iRGVwdGgyTGluayA9ICQoJy5zbmItbm90aWNlIC5kZXB0aDIgYScpO1xyXG4gICAgdmFyICRzbmJEZXB0aDIgPSAkKCcuc25iLW5vdGljZSAuc25iLWRlcHRoMicpO1xyXG4gICAgdmFyICRzbmJNb3JlID0gJCgnLnNuYi1ub3RpY2UgLnNuYi1tb3JlJyk7XHJcbiAgICB2YXIgJG1vcmUgPSAkKCcuc25iLW5vdGljZSAubW9yZScpO1xyXG5cclxuICAgICRzbmJEZXB0aDJMaW5rLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJG1vcmUuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgJHNuYkRlcHRoMUxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAkc25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzbmJEZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICQodGhpcykuc2libGluZ3MoJHNuYkRlcHRoMikuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigkc25iTW9yZSkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkc25iRGVwdGgxTGluay5mb2N1cyhmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgJHNuYk1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNuYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCRzbmJEZXB0aDIpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICQodGhpcykuY2hpbGRyZW4oJHNuYk1vcmUpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICRzbmJEZXB0aDJMaW5rLmZvY3VzKGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkc25iRGVwdGgyTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4kKCBmdW5jdGlvbigpIHtcclxuICAgICQoJy5kYXRlcGlja2VyJykuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgY2hhbmdlTW9udGg6IHRydWUsXHJcbiAgICAgICAgY2hhbmdlWWVhcjogdHJ1ZSxcclxuICAgICAgICB5ZWFyUmFuZ2U6IFwiMjAwOToyMDI5XCIsXHJcbiAgICAgICAgZmlyc3REYXk6IDEsXHJcbiAgICAgICAgZGF5TmFtZXNNaW46IFsn7J28Jywn7JuUJywgJ+2ZlCcsICfsiJgnLCAn66qpJywgJ+q4iCcsICfthqAnXSxcclxuICAgICAgICBtb250aE5hbWVzU2hvcnQ6IFsnMeyblCcsJzLsm5QnLCcz7JuUJywnNOyblCcsJzXsm5QnLCc27JuUJywnN+yblCcsJzjsm5QnLCc57JuUJywnMTDsm5QnLCcxMeyblCcsJzEy7JuUJ11cclxuICAgIH0pO1xyXG59ICk7XHJcblxyXG5cclxuIiwiLy8g7Zek642UIOyDgeuLqCDtjJ3sl4UgLy9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5oZWFkZXItcG9wdXAgYnV0dG9uJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5oZWFkZXItcG9wdXAnKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIEdOQiAvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRnbmJEZXB0aDFMaW5rID0gJCgnLmduYi1kZXB0aDEtbGluaycpO1xyXG4gICAgdmFyICRnbmJEZXB0aDIgPSAkKCcuZ25iLWRlcHRoMi13cmFwJyk7XHJcbiAgICB2YXIgJGduYkRlcHRoMkxpbmsgPSAkKCcuZ25iLWRlcHRoMi1saW5rJyk7XHJcbiAgICB2YXIgJGhlYWRlckJvdHRvbSA9ICQoJy5nbmItd3JhcCcpO1xyXG4gICAgdmFyICRnbmJNb3JlID0gJCgnLmduYi1kZXB0aDIgLm1vcmUnKTtcclxuXHJcblxyXG4gICAgJGduYkRlcHRoMUxpbmsub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJHRoaXMuaW5kZXgoJy5nbmItZGVwdGgxLWxpbmsnKTtcclxuICAgICAgICB2YXIgJG1lbnVJZHggPSAkKCcubWVudScrKGluZGV4KzEpKycnKTtcclxuXHJcbiAgICAgICAgJGduYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5uZXh0KCRnbmJEZXB0aDIpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICAgICBmb3IoaSA9IDE7IGkgPCA3IDsgaSsrICl7XHJcbiAgICAgICAgICAgICQoJy5tZW51JysoaSArIDEpKycnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJG1lbnVJZHguYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZ25iTW9yZS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBtb3JlSWR4ID0gJCh0aGlzKS5pbmRleCgnLmduYi1kZXB0aDIgLm1vcmUnKTtcclxuICAgICAgICB2YXIgZGVwdGgzICA9ICQoJy5nbmItZGVwdGgzJyk7XHJcbiAgICAgICAgdmFyIGRlcHRoMkxpbmtUaGlzID0gJCh0aGlzKS5zaWJsaW5ncygnLmduYi1kZXB0aDItbGluaycpO1xyXG5cclxuICAgICAgICAkZ25iRGVwdGgyTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICBkZXB0aDJMaW5rVGhpcy5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgJGduYk1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb24nKTtcclxuXHJcblxyXG4gICAgICAgIGRlcHRoMy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICBkZXB0aDMuZXEobW9yZUlkeCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZ25iRGVwdGgxTGluay5mb2N1cyhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBpbmRleCA9ICR0aGlzLmluZGV4KCcuZ25iLWRlcHRoMS1saW5rJyk7XHJcbiAgICAgICAgdmFyICRtZW51SWR4ID0gJCgnLm1lbnUnKyhpbmRleCsxKSsnJyk7XHJcblxyXG4gICAgICAgIGZvcihpID0gMTsgaSA8IDcgOyBpKysgKXtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKyhpICsgMSkrJycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkbWVudUlkeC5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLm5leHQoJGduYkRlcHRoMikuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZ25iRGVwdGgyTGluay5sYXN0KCkuZm9jdXNvdXQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJGduYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJGduYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRoZWFkZXJCb3R0b20ub24oJ21vdXNlbGVhdmUnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGduYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgZm9yKGkgPSAxOyBpIDwgNyA7IGkrKyApe1xyXG4gICAgICAgICAgICAkKCcubWVudScrKGkgKyAxKSsnJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxufSk7XHJcblxyXG4vLyDsgqzsnbTrk5wg66mU64m0IC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHNpZGVEZXB0aDEgPSAkKCcuc2lkZS1tZW51LXdyYXAtZGVwdGgxID4gbGkgPiBhJyk7XHJcbiAgICB2YXIgJHNpZGVEZXB0aDIgPSAkKCcuc2lkZS1tZW51LXdyYXAtZGVwdGgyJyk7XHJcbiAgICB2YXIgJHNpZGVEZXB0aDJCZyA9ICQoJy5jb250ZW50cy1iZycpO1xyXG4gICAgdmFyICRzaWRlQ2xvc2VCdG4gPSAkKCcuc2lkZS1jbG9zZS1idG4nKTtcclxuXHJcbiAgICAkc2lkZURlcHRoMS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICRzaWRlRGVwdGgxLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgyQmcuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMubmV4dCgpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICRzaWRlQ2xvc2VCdG4ub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAkc2lkZURlcHRoMS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc2lkZURlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc2lkZURlcHRoMkJnLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHBvc2l0aW9uID0gcGFyc2VJbnQoJChcIi5zaWRlLW1lbnVcIikuY3NzKFwidG9wXCIpKTtcclxuXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgJChcIi5zaWRlLW1lbnVcIikuc3RvcCgpLmFuaW1hdGUoe1widG9wXCI6c2Nyb2xsVG9wK3Bvc2l0aW9uK1wicHhcIn0sMTAwMCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy8g66mU7J24IGljb24g66mU64m0Ly9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkaWNvbkxpbmsgPSAkKCcuaWNvbi1saXN0LWxpbmsnKTtcclxuXHJcbiAgICAkaWNvbkxpbmsub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICRpY29uTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRpY29uTGluay5mb2N1cyhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkaWNvbkxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy8g66mU7J24IOyKrOudvOydtOuTnCwg7J2067Kk7Yq4IOyKrOudvOydtOuTnCAvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgLy/rqZTsnbgg7Iqs65287J2065OcLy9cclxuXHJcbiAgICB2YXIgJG1haW5TbGlkZSA9ICQoJy5tYWluLXNsaWRlID4gdWwnKTtcclxuXHJcbiAgICAkbWFpblNsaWRlLmJ4U2xpZGVyKHtcclxuICAgICAgICBtaW5TbGlkZXM6NCxcclxuICAgICAgICBtYXhTbGlkZXM6NCxcclxuICAgICAgICBzbGlkZVdpZHRoOjMwMCxcclxuICAgICAgICBzbGlkZU1hcmdpbjoyMCxcclxuICAgIH0pO1xyXG5cclxuICAgIC8v7J2067Kk7Yq4IOyKrOudvOydtOuTnC8vXHJcblxyXG4gICAgdmFyICRldmVudFNsaWRlID0gJCgnLmV2ZW50LXNsaWRlID4gdWwnKTtcclxuXHJcbiAgICAkZXZlbnRTbGlkZS5ieFNsaWRlcih7XHJcbiAgICAgICAgbW9kZTonZmFkZScsXHJcbiAgICAgICAgYXV0bzp0cnVlLFxyXG4gICAgICAgIGF1dG9Db250cm9sczp0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgJHN0YXJ0QnRuID0gJCgnLmJ4LXN0YXJ0Jyk7XHJcbiAgICB2YXIgJHN0b3BCdG4gPSAkKCcuYngtc3RvcCcpO1xyXG5cclxuICAgICRzdGFydEJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICR0aGlzLmhpZGUoKTtcclxuICAgICAgICAkc3RvcEJ0bi5zaG93KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc3RvcEJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICRzdGFydEJ0bi5zaG93KCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy/tkbjthLAg7IWA66CJ7Yq467CV7IqkLy9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkZm9vdGVyU2VsZWN0ID0gJCgnLmZvb3Rlci1zZWxlY3QtYm94Jyk7XHJcbiAgICB2YXIgJGNsb3NlQnRuID0gJCgnLnNlbGVjdC1jb250ZW50cy1jbG9zZScpO1xyXG4gICAgdmFyICRjb250ZW50cyA9ICQoJy5zZWxlY3QtY29udGVudHMnKTtcclxuXHJcblxyXG4gICAgJGZvb3RlclNlbGVjdC5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICRjb250ZW50cy5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9KTtcclxuICAgICRjbG9zZUJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGNvbnRlbnRzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuIl19
