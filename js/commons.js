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



// $(function(){
//
//     var $snbDepth1Link = $('.snb .depth1-link');
//     var $more = $('.snb .more-right');
//
//     $snbDepth1Link.eq(0).addClass('on');
//     $more.eq(0).addClass('on');
//
//     $snbDepth1Link.on('click',function(){
//
//         var $this = $(this);
//
//
//         if($this.hasClass('on')){
//             $snbDepth1Link.removeClass('on');
//             $more.removeClass('on');
//         } else {
//             $more.removeClass('on');
//             $snbDepth1Link.removeClass('on');
//             $this.children().addClass('on');
//             $this.addClass('on');
//
//         }
//
//     });
//
//
// });

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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhZXdvby1pbmZvLmpzIiwiZGFld29vLWlzYS0xLmpzIiwiZGFld29vLW5vdGljZS0xLmpzIiwiZGFld29vLXJvYm9wb3QuanMiLCJkYWV3b28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21tb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkY29udGVudHNMaW5rID0gJCgnLnF1ZXN0aW9uLWNvbnRlbnRzLWxpbmsnKTtcclxuXHJcbiAgICAkY29udGVudHNMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJGNvbnRlbnRzTGluay5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRjb250ZW50c0xpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuc2libGluZ3MoKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRpbnB1dFR4dEJveCA9ICQoJy5pbmZvLXNlYXJjaC1ib3gnKTtcclxuICAgIHZhciAkbGFiZWwgPSAkKCcuc2VhcmNoLWJveC10eHQnKTtcclxuXHJcbiAgICAkaW5wdXRUeHRCb3gub24oJ2ZvY3VzJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICRsYWJlbC5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRpbnB1dFR4dEJveC5vbignZm9jdXNvdXQnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGxhYmVsLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG5cclxufSk7IiwiLy8gc25iIOuplOuJtCAvL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkc25iRGVwdGgxTGluayA9ICQoJy5zbmIgLmRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgJHNuYkRlcHRoMiA9ICQoJy5zbmIgLmRlcHRoMicpO1xyXG4gICAgdmFyICRzbmJNb3JlID0gJCgnLnNuYiAuc25iLW1vcmUnKTtcclxuXHJcbiAgICAkc25iRGVwdGgxTGluay5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgICAkc25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNuYk1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHNuYk1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLmNoaWxkcmVuKCcuc25iLW1vcmUnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuc2libGluZ3MoKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNuYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy8gaXNhIO2DreuplOuJtCAvL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkdGFiTWVudSA9ICQoJy50YWItbWVudSBsaScpO1xyXG4gICAgdmFyICRjb250ZW50cyA9ICQoJy50YWItY29udGVudHMgc2VjdGlvbicpO1xyXG4gICAgdmFyICR0YWJNZW51TGluayA9ICQoJy50YWItbWVudS1saW5rJyk7XHJcblxyXG4gICAgJHRhYk1lbnUuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkY29udGVudHMuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgJHRhYk1lbnUub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBpbmRleCA9ICR0aGlzLmluZGV4KCcudGFiLW1lbnUgbGknKTtcclxuXHJcbiAgICAgICAgJGNvbnRlbnRzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0YWJNZW51LnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICRjb250ZW50cy5lcShpbmRleCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkdGFiTWVudUxpbmsuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKS5wYXJlbnRzKCk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJHRoaXMuaW5kZXgoJy50YWItbWVudSBsaScpO1xyXG5cclxuICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRhYk1lbnUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJGNvbnRlbnRzLmVxKGluZGV4KS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4iLCIvLyBzbmIg66mU64m0IC8vXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRtb3JlID0gJCgnLnNuYiAubW9yZS1yaWdodCcpO1xyXG4gICAgdmFyICRzbmJEZXB0aDFMaW5rID0gJCgnLnNuYiAuZGVwdGgxLWxpbmsnKTtcclxuXHJcbiAgICAkc25iRGVwdGgxTGluay5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGlmKCR0aGlzLmhhc0NsYXNzKCdvbicpKXtcclxuICAgICAgICAgICAgJG1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLmNoaWxkcmVuKCcubW9yZS1yaWdodCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRtb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRjYWxlbmRhckxpbmsgPSAkKCcuY2FsZW5kYXItbGluaycpO1xyXG5cclxuICAgICRjYWxlbmRhckxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbiAoZSkge1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICQodGhpcykuc2libGluZ3MoKS50b2dnbGVDbGFzcygnb24nKTtcclxuICAgIH0pXHJcblxyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuZGF0ZXBpY2tlcicpLmRhdGVwaWNrZXIoe1xyXG4gICAgICAgIGNoYW5nZU1vbnRoOiB0cnVlLFxyXG4gICAgICAgIGNoYW5nZVllYXI6IHRydWUsXHJcbiAgICAgICAgeWVhclJhbmdlOiBcIjIwMDk6MjAyOVwiLFxyXG4gICAgICAgIGZpcnN0RGF5OiAxLFxyXG4gICAgICAgIGRheU5hbWVzTWluOiBbJ+ydvCcsJ+yblCcsICftmZQnLCAn7IiYJywgJ+uqqScsICfquIgnLCAn7YagJ10sXHJcbiAgICAgICAgbW9udGhOYW1lc1Nob3J0OiBbJzHsm5QnLCcy7JuUJywnM+yblCcsJzTsm5QnLCc17JuUJywnNuyblCcsJzfsm5QnLCc47JuUJywnOeyblCcsJzEw7JuUJywnMTHsm5QnLCcxMuyblCddXHJcbiAgICB9KTtcclxufSApO1xyXG5cclxuXHJcbiIsIi8vICQoZnVuY3Rpb24oKXtcclxuLy9cclxuLy8gICAgIHZhciAkc25iRGVwdGgxTGluayA9ICQoJy5zbmIgLmRlcHRoMS1saW5rJyk7XHJcbi8vICAgICB2YXIgJG1vcmUgPSAkKCcuc25iIC5tb3JlLXJpZ2h0Jyk7XHJcbi8vXHJcbi8vICAgICAkc25iRGVwdGgxTGluay5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuLy8gICAgICRtb3JlLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4vL1xyXG4vLyAgICAgJHNuYkRlcHRoMUxpbmsub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4vL1xyXG4vLyAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbi8vXHJcbi8vXHJcbi8vICAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4vLyAgICAgICAgICAgICAkc25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuLy8gICAgICAgICAgICAgJG1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbi8vICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgJG1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbi8vICAgICAgICAgICAgICRzbmJEZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4vLyAgICAgICAgICAgICAkdGhpcy5jaGlsZHJlbigpLmFkZENsYXNzKCdvbicpO1xyXG4vLyAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuLy9cclxuLy8gICAgICAgICB9XHJcbi8vXHJcbi8vICAgICB9KTtcclxuLy9cclxuLy9cclxuLy8gfSk7XHJcbiIsIi8vIO2XpOuNlCDsg4Hri6gg7Yyd7JeFIC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcuaGVhZGVyLXBvcHVwIGJ1dHRvbicpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuaGVhZGVyLXBvcHVwJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vLyBHTkIgLy9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkZ25iRGVwdGgxTGluayA9ICQoJy5nbmItZGVwdGgxLWxpbmsnKTtcclxuICAgIHZhciAkZ25iRGVwdGgyID0gJCgnLmduYi1kZXB0aDItY29udGFpbmVyJyk7XHJcbiAgICB2YXIgJGduYkRlcHRoMkxpbmsgPSAkKCcuZ25iLWRlcHRoMi1saW5rJyk7XHJcbiAgICB2YXIgJGhlYWRlckJvdHRvbSA9ICQoJy5nbmItd3JhcCcpO1xyXG4gICAgdmFyICRnbmJNb3JlID0gJCgnLmduYi1kZXB0aDIgLm1vcmUnKTtcclxuICAgIHZhciAkZGVwdGgzICA9ICQoJy5nbmItZGVwdGgzJyk7XHJcblxyXG4gICAgJGduYkRlcHRoMUxpbmsuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgaW5kZXggPSAkdGhpcy5pbmRleCgnLmduYi1kZXB0aDEtbGluaycpO1xyXG4gICAgICAgIHZhciAkbWVudUlkeCA9ICQoJy5tZW51JysoaW5kZXgrMSkrJycpO1xyXG5cclxuICAgICAgICBmb3IoaSA9IDE7IGkgPCA3IDsgaSsrICl7XHJcbiAgICAgICAgICAgICQoJy5tZW51JysoaSArIDEpKycnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJG1lbnVJZHguYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJGduYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5uZXh0KCRnbmJEZXB0aDIpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGduYkRlcHRoMkxpbmsubGFzdCgpLm9uKCdrZXlkb3duJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgaWYoZS5zaGlmdEtleSAmJiBrZXlDb2RlID09PSA5KXtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGduYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRnbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJGduYkRlcHRoMUxpbmsub24oJ21vdXNlZW50ZXInLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJHRoaXMuaW5kZXgoJy5nbmItZGVwdGgxLWxpbmsnKTtcclxuICAgICAgICB2YXIgJG1lbnVJZHggPSAkKCcubWVudScrKGluZGV4KzEpKycnKTtcclxuXHJcbiAgICAgICAgJGduYkRlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5uZXh0KCRnbmJEZXB0aDIpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICAgICBmb3IoaSA9IDE7IGkgPCA3IDsgaSsrICl7XHJcbiAgICAgICAgICAgICQoJy5tZW51JysoaSArIDEpKycnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJG1lbnVJZHguYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkZ25iTW9yZS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgbW9yZUlkeCA9ICQodGhpcykuaW5kZXgoJy5nbmItZGVwdGgyIC5tb3JlJyk7XHJcbiAgICAgICAgdmFyIGRlcHRoMkxpbmtUaGlzID0gJCh0aGlzKS5zaWJsaW5ncygnLmduYi1kZXB0aDItbGluaycpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGlmKCR0aGlzLmhhc0NsYXNzKCdvbicpKXtcclxuICAgICAgICAgICAgJGduYk1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRkZXB0aDMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRnbmJEZXB0aDJMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRnbmJEZXB0aDJMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkZ25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGRlcHRoMy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgIGRlcHRoMkxpbmtUaGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkZGVwdGgzLmVxKG1vcmVJZHgpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAkaGVhZGVyQm90dG9tLm9uKCdtb3VzZWxlYXZlJyxmdW5jdGlvbigpe1xyXG4gICAgICAgICRnbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIGZvcihpID0gMTsgaSA8IDcgOyBpKysgKXtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKyhpICsgMSkrJycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuLy8g7IKs7J2065OcIOuplOuJtCAvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRzaWRlRGVwdGgxID0gJCgnLnNpZGUtbWVudS13cmFwLWRlcHRoMSA+IGxpJyk7XHJcbiAgICB2YXIgJHNpZGVEZXB0aDIgPSAkKCcuc2lkZS1tZW51LXdyYXAtZGVwdGgyJyk7XHJcbiAgICB2YXIgJHNpZGVEZXB0aDJCZyA9ICQoJy5jb250ZW50cy1iZycpO1xyXG4gICAgdmFyICRzaWRlQ2xvc2VCdG4gPSAkKCcuc2lkZS1jbG9zZS1idG4nKTtcclxuICAgIHZhciAkc2lkZTcgPSAkKCcuc2lkZTcnKTtcclxuXHJcbiAgICAkc2lkZURlcHRoMS5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgIGlmKCR0aGlzLmhhc0NsYXNzKCdvbicpKXtcclxuICAgICAgICAgICAgJHNpZGVEZXB0aDJCZy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNpZGVEZXB0aDEucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzaWRlRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRzaWRlRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5jaGlsZHJlbignLnNpZGUtbWVudS13cmFwLWRlcHRoMicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc2lkZURlcHRoMkJnLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc2lkZURlcHRoMS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuc2libGluZ3MoJy5zaWRlLW1lbnUtd3JhcC1kZXB0aDInKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkc2lkZTcuZm9jdXNvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkc2lkZURlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc2lkZURlcHRoMkJnLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgxLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNpZGVDbG9zZUJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICRzaWRlRGVwdGgxLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgyQmcucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcG9zaXRpb24gPSBwYXJzZUludCgkKFwiLnNpZGUtbWVudVwiKS5jc3MoXCJ0b3BcIikpO1xyXG5cclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAkKFwiLnNpZGUtbWVudVwiKS5zdG9wKCkuYW5pbWF0ZSh7XCJ0b3BcIjpzY3JvbGxUb3ArcG9zaXRpb24rXCJweFwifSwxMDAwKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyDrqZTsnbggaWNvbiDrqZTribQvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRpY29uTGluayA9ICQoJy5pY29uLWxpc3QtbGluaycpO1xyXG5cclxuICAgICRpY29uTGluay5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJGljb25MaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGljb25MaW5rLmZvY3VzKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICRpY29uTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyDrqZTsnbgg7Iqs65287J2065OcLCDsnbTrsqTtirgg7Iqs65287J2065OcIC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvL+uplOyduCDsiqzrnbzsnbTrk5wvL1xyXG5cclxuICAgIHZhciAkbWFpblNsaWRlID0gJCgnLm1haW4tc2xpZGUgPiB1bCcpO1xyXG5cclxuICAgICRtYWluU2xpZGUuYnhTbGlkZXIoe1xyXG4gICAgICAgIG1pblNsaWRlczo0LFxyXG4gICAgICAgIG1heFNsaWRlczo0LFxyXG4gICAgICAgIHNsaWRlV2lkdGg6MzAwLFxyXG4gICAgICAgIHNsaWRlTWFyZ2luOjIwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy/snbTrsqTtirgg7Iqs65287J2065OcLy9cclxuXHJcbiAgICB2YXIgJGV2ZW50U2xpZGUgPSAkKCcuZXZlbnQtc2xpZGUgPiB1bCcpO1xyXG5cclxuICAgICRldmVudFNsaWRlLmJ4U2xpZGVyKHtcclxuICAgICAgICBtb2RlOidmYWRlJyxcclxuICAgICAgICBhdXRvOnRydWUsXHJcbiAgICAgICAgYXV0b0NvbnRyb2xzOnRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciAkc3RhcnRCdG4gPSAkKCcuYngtc3RhcnQnKTtcclxuICAgIHZhciAkc3RvcEJ0biA9ICQoJy5ieC1zdG9wJyk7XHJcblxyXG4gICAgJHN0YXJ0QnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICRzdG9wQnRuLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzdG9wQnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgJHN0YXJ0QnRuLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vL+2RuO2EsCDshYDroIntirjrsJXsiqQvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRmb290ZXJTZWxlY3QgPSAkKCcuZm9vdGVyLXNlbGVjdC1ib3gnKTtcclxuICAgIHZhciAkY2xvc2VCdG4gPSAkKCcuc2VsZWN0LWNvbnRlbnRzLWNsb3NlJyk7XHJcbiAgICB2YXIgJGNvbnRlbnRzID0gJCgnLnNlbGVjdC1jb250ZW50cycpO1xyXG5cclxuXHJcbiAgICAkZm9vdGVyU2VsZWN0Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJGNvbnRlbnRzLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgJGNsb3NlQnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy8g7Iqk7YGs66Gk7IucIGFjdGl2ZSAvL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG5cclxuICAgICR3aW5kb3cuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkYWN0aXZlID0gJCgnLnNjcm9sbC1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgdmFyIGEgPSAkd2luZG93LnNjcm9sbFRvcCgpICsgJHdpbmRvdy5oZWlnaHQoKSAtIDgwO1xyXG5cclxuICAgICAgICAkYWN0aXZlLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBiID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgICAgICAgICBpZihhID49IGIpe1xyXG4gICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4iXX0=
