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

        var a = $window.scrollTop() + $window.height() - 100;

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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhZXdvby5qcyIsImRhZXdvby1pbmZvLmpzIiwiZGFld29vLWlzYS0xLmpzIiwiZGFld29vLW5vdGljZS0xLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbW1vbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDtl6TrjZQg7IOB64uoIO2MneyXhSAvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmhlYWRlci1wb3B1cCBidXR0b24nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmhlYWRlci1wb3B1cCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gR05CIC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGduYkRlcHRoMUxpbmsgPSAkKCcuZ25iLWRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgJGduYkRlcHRoMiA9ICQoJy5nbmItZGVwdGgyLWNvbnRhaW5lcicpO1xyXG4gICAgdmFyICRnbmJEZXB0aDJMaW5rID0gJCgnLmduYi1kZXB0aDItbGluaycpO1xyXG4gICAgdmFyICRoZWFkZXJCb3R0b20gPSAkKCcuZ25iLXdyYXAnKTtcclxuICAgIHZhciAkZ25iTW9yZSA9ICQoJy5nbmItZGVwdGgyIC5tb3JlJyk7XHJcbiAgICB2YXIgJGRlcHRoMyAgPSAkKCcuZ25iLWRlcHRoMycpO1xyXG5cclxuICAgICRnbmJEZXB0aDFMaW5rLmZvY3VzKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJHRoaXMuaW5kZXgoJy5nbmItZGVwdGgxLWxpbmsnKTtcclxuICAgICAgICB2YXIgJG1lbnVJZHggPSAkKCcubWVudScrKGluZGV4KzEpKycnKTtcclxuXHJcbiAgICAgICAgZm9yKGkgPSAxOyBpIDwgNyA7IGkrKyApe1xyXG4gICAgICAgICAgICAkKCcubWVudScrKGkgKyAxKSsnJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRtZW51SWR4LmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICRnbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMubmV4dCgkZ25iRGVwdGgyKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRnbmJEZXB0aDJMaW5rLmxhc3QoKS5vbigna2V5ZG93bicsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGlmKGUuc2hpZnRLZXkgJiYga2V5Q29kZSA9PT0gOSl7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRnbmJEZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRnbmJEZXB0aDFMaW5rLm9uKCdtb3VzZWVudGVyJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBpbmRleCA9ICR0aGlzLmluZGV4KCcuZ25iLWRlcHRoMS1saW5rJyk7XHJcbiAgICAgICAgdmFyICRtZW51SWR4ID0gJCgnLm1lbnUnKyhpbmRleCsxKSsnJyk7XHJcblxyXG4gICAgICAgICRnbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMubmV4dCgkZ25iRGVwdGgyKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAgICAgZm9yKGkgPSAxOyBpIDwgNyA7IGkrKyApe1xyXG4gICAgICAgICAgICAkKCcubWVudScrKGkgKyAxKSsnJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRtZW51SWR4LmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGduYk1vcmUub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIG1vcmVJZHggPSAkKHRoaXMpLmluZGV4KCcuZ25iLWRlcHRoMiAubW9yZScpO1xyXG4gICAgICAgIHZhciBkZXB0aDJMaW5rVGhpcyA9ICQodGhpcykuc2libGluZ3MoJy5nbmItZGVwdGgyLWxpbmsnKTtcclxuXHJcblxyXG5cclxuICAgICAgICBpZigkdGhpcy5oYXNDbGFzcygnb24nKSl7XHJcbiAgICAgICAgICAgICRnbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkZGVwdGgzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkZ25iRGVwdGgyTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkZ25iRGVwdGgyTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGduYk1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRkZXB0aDMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICBkZXB0aDJMaW5rVGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJGRlcHRoMy5lcShtb3JlSWR4KS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJGhlYWRlckJvdHRvbS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICAgICAgICBmb3IoaSA9IDE7IGkgPCA3IDsgaSsrICl7XHJcbiAgICAgICAgICAgICQoJy5tZW51JysoaSArIDEpKycnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG59KTtcclxuXHJcbi8vIOyCrOydtOuTnCDrqZTribQgLy9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkc2lkZURlcHRoMSA9ICQoJy5zaWRlLW1lbnUtd3JhcC1kZXB0aDEgPiBsaScpO1xyXG4gICAgdmFyICRzaWRlRGVwdGgyID0gJCgnLnNpZGUtbWVudS13cmFwLWRlcHRoMicpO1xyXG4gICAgdmFyICRzaWRlRGVwdGgyQmcgPSAkKCcuY29udGVudHMtYmcnKTtcclxuICAgIHZhciAkc2lkZUNsb3NlQnRuID0gJCgnLnNpZGUtY2xvc2UtYnRuJyk7XHJcbiAgICB2YXIgJHNpZGU3ID0gJCgnLnNpZGU3Jyk7XHJcbiAgICB2YXIgcG9zaXRpb24gPSBwYXJzZUludCgkKFwiLnNpZGUtbWVudVwiKS5jc3MoXCJ0b3BcIikpO1xyXG4gICAgdmFyICR3aW5kb3cgPSAkKHdpbmRvdyk7XHJcbiAgICB2YXIgJHNpZGVNZW51ID0gJCgnLnNpZGUtbWVudScpO1xyXG5cclxuICAgICRzaWRlRGVwdGgxLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgICAkc2lkZURlcHRoMkJnLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc2lkZURlcHRoMS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHNpZGVEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHNpZGVEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICR0aGlzLmNoaWxkcmVuKCcuc2lkZS1tZW51LXdyYXAtZGVwdGgyJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzaWRlRGVwdGgyQmcuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgICAgICRzaWRlRGVwdGgxLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5zaWJsaW5ncygnLnNpZGUtbWVudS13cmFwLWRlcHRoMicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgICAkc2lkZTcuZm9jdXNvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAkc2lkZURlcHRoMi5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc2lkZURlcHRoMkJnLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgxLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcbiAgICAkc2lkZUNsb3NlQnRuLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgJHNpZGVEZXB0aDEucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNpZGVEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNpZGVEZXB0aDJCZy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICR3aW5kb3cuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzY3JvbGxUb3AgPSAkd2luZG93LnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICRzaWRlTWVudS5zdG9wKCkuYW5pbWF0ZSh7XCJ0b3BcIjpzY3JvbGxUb3ArcG9zaXRpb24rXCJweFwifSwxMDAwKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyDrqZTsnbggaWNvbiDrqZTribQvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRpY29uTGluayA9ICQoJy5pY29uLWxpc3QtbGluaycpO1xyXG5cclxuICAgICRpY29uTGluay5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJGljb25MaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGljb25MaW5rLmZvY3VzKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICRpY29uTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyDrqZTsnbgg7Iqs65287J2065OcLCDsnbTrsqTtirgg7Iqs65287J2065OcIC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvL+uplOyduCDsiqzrnbzsnbTrk5wvL1xyXG5cclxuICAgIHZhciAkbWFpblNsaWRlID0gJCgnLm1haW4tc2xpZGUgPiB1bCcpO1xyXG5cclxuICAgICRtYWluU2xpZGUuYnhTbGlkZXIoe1xyXG4gICAgICAgIG1pblNsaWRlczo0LFxyXG4gICAgICAgIG1heFNsaWRlczo0LFxyXG4gICAgICAgIHNsaWRlV2lkdGg6MzAwLFxyXG4gICAgICAgIHNsaWRlTWFyZ2luOjIwLFxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8v7J2067Kk7Yq4IOyKrOudvOydtOuTnC8vXHJcblxyXG4gICAgdmFyICRldmVudFNsaWRlID0gJCgnLmV2ZW50LXNsaWRlID4gdWwnKTtcclxuXHJcbiAgICAkZXZlbnRTbGlkZS5ieFNsaWRlcih7XHJcbiAgICAgICAgbW9kZTonZmFkZScsXHJcbiAgICAgICAgYXV0bzp0cnVlLFxyXG4gICAgICAgIGF1dG9Db250cm9sczp0cnVlXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgJHN0YXJ0QnRuID0gJCgnLmJ4LXN0YXJ0Jyk7XHJcbiAgICB2YXIgJHN0b3BCdG4gPSAkKCcuYngtc3RvcCcpO1xyXG5cclxuICAgICRzdGFydEJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICR0aGlzLmhpZGUoKTtcclxuICAgICAgICAkc3RvcEJ0bi5zaG93KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc3RvcEJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICRzdGFydEJ0bi5zaG93KCk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy/tkbjthLAg7IWA66CJ7Yq467CV7IqkLy9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkZm9vdGVyU2VsZWN0ID0gJCgnLmZvb3Rlci1zZWxlY3QtYm94Jyk7XHJcbiAgICB2YXIgJGNsb3NlQnRuID0gJCgnLnNlbGVjdC1jb250ZW50cy1jbG9zZScpO1xyXG4gICAgdmFyICRjb250ZW50cyA9ICQoJy5zZWxlY3QtY29udGVudHMnKTtcclxuXHJcblxyXG4gICAgJGZvb3RlclNlbGVjdC5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICRjb250ZW50cy5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB9KTtcclxuICAgICRjbG9zZUJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGNvbnRlbnRzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbi8vIOyKpO2BrOuhpOyLnCBhY3RpdmUgLy9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KTtcclxuXHJcbiAgICAkd2luZG93LnNjcm9sbChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJGFjdGl2ZSA9ICQoJy5zY3JvbGwtYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIHZhciBhID0gJHdpbmRvdy5zY3JvbGxUb3AoKSArICR3aW5kb3cuaGVpZ2h0KCkgLSAxMDA7XHJcblxyXG4gICAgICAgICRhY3RpdmUuZWFjaChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGIgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgICAgICAgIGlmKGEgPj0gYil7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG59KTsiLCIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRjb250ZW50c0xpbmsgPSAkKCcucXVlc3Rpb24tY29udGVudHMtbGluaycpO1xyXG5cclxuICAgICRjb250ZW50c0xpbmsub24oJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkY29udGVudHNMaW5rLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJGNvbnRlbnRzTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5zaWJsaW5ncygpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGlucHV0VHh0Qm94ID0gJCgnLmluZm8tc2VhcmNoLWJveCcpO1xyXG4gICAgdmFyICRsYWJlbCA9ICQoJy5zZWFyY2gtYm94LXR4dCcpO1xyXG5cclxuICAgICRpbnB1dFR4dEJveC5vbignZm9jdXMnLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJGxhYmVsLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGlucHV0VHh0Qm94Lm9uKCdmb2N1c291dCcsZnVuY3Rpb24oKXtcclxuICAgICAgICAkbGFiZWwucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG59KTsiLCIvLyBzbmIg66mU64m0IC8vXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRzbmJEZXB0aDFMaW5rID0gJCgnLnNuYiAuZGVwdGgxLWxpbmsnKTtcclxuICAgIHZhciAkc25iRGVwdGgyID0gJCgnLnNuYiAuZGVwdGgyJyk7XHJcbiAgICB2YXIgJHNuYk1vcmUgPSAkKCcuc25iIC5zbmItbW9yZScpO1xyXG5cclxuICAgICRzbmJEZXB0aDFMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICBpZigkdGhpcy5oYXNDbGFzcygnb24nKSl7XHJcbiAgICAgICAgICAgICRzbmJEZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkc25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuY2hpbGRyZW4oJy5zbmItbW9yZScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkdGhpcy5zaWJsaW5ncygpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICAgICAkc25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyBpc2Eg7YOt66mU64m0IC8vXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICR0YWJNZW51ID0gJCgnLnRhYi1tZW51IGxpJyk7XHJcbiAgICB2YXIgJGNvbnRlbnRzID0gJCgnLnRhYi1jb250ZW50cyBzZWN0aW9uJyk7XHJcbiAgICB2YXIgJHRhYk1lbnVMaW5rID0gJCgnLnRhYi1tZW51LWxpbmsnKTtcclxuXHJcbiAgICAkdGFiTWVudS5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRjb250ZW50cy5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAkdGFiTWVudS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJHRoaXMuaW5kZXgoJy50YWItbWVudSBsaScpO1xyXG5cclxuICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRhYk1lbnUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJGNvbnRlbnRzLmVxKGluZGV4KS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICR0YWJNZW51TGluay5mb2N1cyhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLnBhcmVudHMoKTtcclxuICAgICAgICB2YXIgaW5kZXggPSAkdGhpcy5pbmRleCgnLnRhYi1tZW51IGxpJyk7XHJcblxyXG4gICAgICAgICRjb250ZW50cy5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGFiTWVudS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkY29udGVudHMuZXEoaW5kZXgpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuXHJcbiIsIi8vIHNuYiDrqZTribQgLy9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJG1vcmUgPSAkKCcuc25iIC5tb3JlLXJpZ2h0Jyk7XHJcbiAgICB2YXIgJHNuYkRlcHRoMUxpbmsgPSAkKCcuc25iIC5kZXB0aDEtbGluaycpO1xyXG5cclxuICAgICRzbmJEZXB0aDFMaW5rLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgaWYoJHRoaXMuaGFzQ2xhc3MoJ29uJykpe1xyXG4gICAgICAgICAgICAkbW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAgICAgJHRoaXMuY2hpbGRyZW4oJy5tb3JlLXJpZ2h0JykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJG1vcmUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGNhbGVuZGFyTGluayA9ICQoJy5jYWxlbmRhci1saW5rJyk7XHJcblxyXG4gICAgJGNhbGVuZGFyTGluay5vbignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnRvZ2dsZUNsYXNzKCdvbicpO1xyXG4gICAgfSlcclxuXHJcbn0pO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgICQoJy5kYXRlcGlja2VyJykuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgY2hhbmdlTW9udGg6IHRydWUsXHJcbiAgICAgICAgY2hhbmdlWWVhcjogdHJ1ZSxcclxuICAgICAgICB5ZWFyUmFuZ2U6IFwiMjAwOToyMDI5XCIsXHJcbiAgICAgICAgZmlyc3REYXk6IDEsXHJcbiAgICAgICAgZGF5TmFtZXNNaW46IFsn7J28Jywn7JuUJywgJ+2ZlCcsICfsiJgnLCAn66qpJywgJ+q4iCcsICfthqAnXSxcclxuICAgICAgICBtb250aE5hbWVzU2hvcnQ6IFsnMeyblCcsJzLsm5QnLCcz7JuUJywnNOyblCcsJzXsm5QnLCc27JuUJywnN+yblCcsJzjsm5QnLCc57JuUJywnMTDsm5QnLCcxMeyblCcsJzEy7JuUJ11cclxuICAgIH0pO1xyXG59ICk7XHJcblxyXG5cclxuIl19
