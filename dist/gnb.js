$(function(){

    var $infoMenu = $('.info-menu > dl');

    $infoMenu.on('mouseenter', function(){

        var $this = $(this).children('img').index('img');

        $this.attr('src',url('../'))

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

    $sideDepth1.on('click',function(){

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhZXdvby1pbmZvLmpzIiwiZGFld29vLWlzYS0xLmpzIiwiZGFld29vLW5vdGljZS0xLmpzIiwiZGFld29vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImduYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGluZm9NZW51ID0gJCgnLmluZm8tbWVudSA+IGRsJyk7XHJcblxyXG4gICAgJGluZm9NZW51Lm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKS5jaGlsZHJlbignaW1nJykuaW5kZXgoJ2ltZycpO1xyXG5cclxuICAgICAgICAkdGhpcy5hdHRyKCdzcmMnLHVybCgnLi4vJykpXHJcblxyXG4gICAgfSk7XHJcblxyXG59KTsiLCIvLyBzbmIg66mU64m0IC8vXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRzbmJEZXB0aDFMaW5rID0gJCgnLmRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgJHNuYkRlcHRoMkxpbmsgPSAkKCcuc25iLWlzYSAuZGVwdGgyIGEnKTtcclxuICAgIHZhciAkc25iRGVwdGgyID0gJCgnLnNuYi1pc2EgLmRlcHRoMicpO1xyXG4gICAgdmFyICRzbmJNb3JlID0gJCgnLnNuYi1pc2EgLnNuYi1tb3JlJyk7XHJcblxyXG4gICAgJHNuYkRlcHRoMi5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuICAgICRzbmJNb3JlLmVxKDApLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJHNuYkRlcHRoMkxpbmsuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkc25iRGVwdGgxTGluay5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAkc25iRGVwdGgxTGluay5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICRzbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNuYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygkc25iRGVwdGgyKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCRzbmJNb3JlKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICRzbmJEZXB0aDFMaW5rLmZvY3VzKGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAkc25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzbmJEZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICQodGhpcykuc2libGluZ3MoJHNuYkRlcHRoMikuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigkc25iTW9yZSkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuLy8gaXNhIO2DreuplOuJtCAvL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkdGFiTWVudSA9ICQoJy50YWItbWVudSBsaScpO1xyXG4gICAgdmFyICRjb250ZW50cyA9ICQoJy50YWItY29udGVudHMgc2VjdGlvbicpO1xyXG4gICAgdmFyICR0YWJNZW51TGluayA9ICQoJy50YWItbWVudS1saW5rJyk7XHJcblxyXG4gICAgJHRhYk1lbnUuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkY29udGVudHMuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgJHRhYk1lbnUub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG4gICAgICAgIHZhciBpbmRleCA9ICR0aGlzLmluZGV4KCcudGFiLW1lbnUgbGknKTtcclxuXHJcbiAgICAgICAgJGNvbnRlbnRzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0YWJNZW51LnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICRjb250ZW50cy5lcShpbmRleCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkdGFiTWVudUxpbmsuZm9jdXMoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKS5wYXJlbnRzKCk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJHRoaXMuaW5kZXgoJy50YWItbWVudSBsaScpO1xyXG5cclxuICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRhYk1lbnUucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJGNvbnRlbnRzLmVxKGluZGV4KS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4iLCIvLyBzbmIg66mU64m0IC8vXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRzbmJEZXB0aDJMaW5rID0gJCgnLnNuYi1ub3RpY2UgLmRlcHRoMiBhJyk7XHJcbiAgICB2YXIgJHNuYkRlcHRoMiA9ICQoJy5zbmItbm90aWNlIC5zbmItZGVwdGgyJyk7XHJcbiAgICB2YXIgJHNuYk1vcmUgPSAkKCcuc25iLW5vdGljZSAuc25iLW1vcmUnKTtcclxuICAgIHZhciAkbW9yZSA9ICQoJy5zbmItbm90aWNlIC5tb3JlJyk7XHJcblxyXG4gICAgJHNuYkRlcHRoMkxpbmsuZXEoMCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkbW9yZS5lcSgwKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAkc25iRGVwdGgxTGluay5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICRzbmJNb3JlLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNuYkRlcHRoMUxpbmsucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygkc25iRGVwdGgyKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCRzbmJNb3JlKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgICRzbmJEZXB0aDFMaW5rLmZvY3VzKGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAkc25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkc25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzbmJEZXB0aDFMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICQodGhpcykuc2libGluZ3MoJHNuYkRlcHRoMikuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigkc25iTW9yZSkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNuYkRlcHRoMkxpbmsuZm9jdXMoZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICRzbmJEZXB0aDJMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG4iLCIvLyDtl6TrjZQg7IOB64uoIO2MneyXhSAvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLmhlYWRlci1wb3B1cCBidXR0b24nKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLmhlYWRlci1wb3B1cCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gR05CIC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgJGduYkRlcHRoMUxpbmsgPSAkKCcuZ25iLWRlcHRoMS1saW5rJyk7XHJcbiAgICB2YXIgJGduYkRlcHRoMiA9ICQoJy5nbmItZGVwdGgyLXdyYXAnKTtcclxuICAgIHZhciAkZ25iRGVwdGgyTGluayA9ICQoJy5nbmItZGVwdGgyLWxpbmsnKTtcclxuICAgIHZhciAkaGVhZGVyQm90dG9tID0gJCgnLmduYi13cmFwJyk7XHJcbiAgICB2YXIgJGduYk1vcmUgPSAkKCcuZ25iLWRlcHRoMiAubW9yZScpO1xyXG5cclxuXHJcbiAgICAkZ25iRGVwdGgxTGluay5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgaW5kZXggPSAkdGhpcy5pbmRleCgnLmduYi1kZXB0aDEtbGluaycpO1xyXG4gICAgICAgIHZhciAkbWVudUlkeCA9ICQoJy5tZW51JysoaW5kZXgrMSkrJycpO1xyXG5cclxuICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLm5leHQoJGduYkRlcHRoMikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgICAgIGZvcihpID0gMTsgaSA8IDcgOyBpKysgKXtcclxuICAgICAgICAgICAgJCgnLm1lbnUnKyhpICsgMSkrJycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkbWVudUlkeC5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRnbmJNb3JlLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIG1vcmVJZHggPSAkKHRoaXMpLmluZGV4KCcuZ25iLWRlcHRoMiAubW9yZScpO1xyXG4gICAgICAgIHZhciBkZXB0aDMgID0gJCgnLmduYi1kZXB0aDMnKTtcclxuICAgICAgICB2YXIgZGVwdGgyTGlua1RoaXMgPSAkKHRoaXMpLnNpYmxpbmdzKCcuZ25iLWRlcHRoMi1saW5rJyk7XHJcblxyXG4gICAgICAgICRnbmJEZXB0aDJMaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIGRlcHRoMkxpbmtUaGlzLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgICAgICAkZ25iTW9yZS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuXHJcbiAgICAgICAgZGVwdGgzLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgIGRlcHRoMy5lcShtb3JlSWR4KS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRnbmJEZXB0aDFMaW5rLmZvY3VzKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gJHRoaXMuaW5kZXgoJy5nbmItZGVwdGgxLWxpbmsnKTtcclxuICAgICAgICB2YXIgJG1lbnVJZHggPSAkKCcubWVudScrKGluZGV4KzEpKycnKTtcclxuXHJcbiAgICAgICAgZm9yKGkgPSAxOyBpIDwgNyA7IGkrKyApe1xyXG4gICAgICAgICAgICAkKCcubWVudScrKGkgKyAxKSsnJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRtZW51SWR4LmFkZENsYXNzKCdvbicpO1xyXG4gICAgICAgICRnbmJEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMubmV4dCgkZ25iRGVwdGgyKS5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRnbmJEZXB0aDJMaW5rLmxhc3QoKS5mb2N1c291dChmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAkZ25iRGVwdGgxTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGhlYWRlckJvdHRvbS5vbignbW91c2VsZWF2ZScsZnVuY3Rpb24oKXtcclxuICAgICAgICAkZ25iRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICAgICAgICBmb3IoaSA9IDE7IGkgPCA3IDsgaSsrICl7XHJcbiAgICAgICAgICAgICQoJy5tZW51JysoaSArIDEpKycnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG59KTtcclxuXHJcbi8vIOyCrOydtOuTnCDrqZTribQgLy9cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciAkc2lkZURlcHRoMSA9ICQoJy5zaWRlLW1lbnUtd3JhcC1kZXB0aDEgPiBsaSA+IGEnKTtcclxuICAgIHZhciAkc2lkZURlcHRoMiA9ICQoJy5zaWRlLW1lbnUtd3JhcC1kZXB0aDInKTtcclxuICAgIHZhciAkc2lkZURlcHRoMkJnID0gJCgnLmNvbnRlbnRzLWJnJyk7XHJcbiAgICB2YXIgJHNpZGVDbG9zZUJ0biA9ICQoJy5zaWRlLWNsb3NlLWJ0bicpO1xyXG5cclxuICAgICRzaWRlRGVwdGgxLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJHNpZGVEZXB0aDEucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNpZGVEZXB0aDIucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAgICAgJHNpZGVEZXB0aDJCZy5hZGRDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5uZXh0KCkuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNpZGVDbG9zZUJ0bi5vbignY2xpY2snLGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICRzaWRlRGVwdGgxLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgyLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICRzaWRlRGVwdGgyQmcucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcG9zaXRpb24gPSBwYXJzZUludCgkKFwiLnNpZGUtbWVudVwiKS5jc3MoXCJ0b3BcIikpO1xyXG5cclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICAkKFwiLnNpZGUtbWVudVwiKS5zdG9wKCkuYW5pbWF0ZSh7XCJ0b3BcIjpzY3JvbGxUb3ArcG9zaXRpb24rXCJweFwifSwxMDAwKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyDrqZTsnbggaWNvbiDrqZTribQvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRpY29uTGluayA9ICQoJy5pY29uLWxpc3QtbGluaycpO1xyXG5cclxuICAgICRpY29uTGluay5vbignbW91c2VlbnRlcicsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJGljb25MaW5rLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICR0aGlzLmFkZENsYXNzKCdvbicpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJGljb25MaW5rLmZvY3VzKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG4gICAgICAgICRpY29uTGluay5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkdGhpcy5hZGRDbGFzcygnb24nKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vLyDrqZTsnbgg7Iqs65287J2065OcLCDsnbTrsqTtirgg7Iqs65287J2065OcIC8vXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvL+uplOyduCDsiqzrnbzsnbTrk5wvL1xyXG5cclxuICAgIHZhciAkbWFpblNsaWRlID0gJCgnLm1haW4tc2xpZGUgPiB1bCcpO1xyXG5cclxuICAgICRtYWluU2xpZGUuYnhTbGlkZXIoe1xyXG4gICAgICAgIG1pblNsaWRlczo0LFxyXG4gICAgICAgIG1heFNsaWRlczo0LFxyXG4gICAgICAgIHNsaWRlV2lkdGg6MzAwLFxyXG4gICAgICAgIHNsaWRlTWFyZ2luOjIwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy/snbTrsqTtirgg7Iqs65287J2065OcLy9cclxuXHJcbiAgICB2YXIgJGV2ZW50U2xpZGUgPSAkKCcuZXZlbnQtc2xpZGUgPiB1bCcpO1xyXG5cclxuICAgICRldmVudFNsaWRlLmJ4U2xpZGVyKHtcclxuICAgICAgICBtb2RlOidmYWRlJyxcclxuICAgICAgICBhdXRvOnRydWUsXHJcbiAgICAgICAgYXV0b0NvbnRyb2xzOnRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciAkc3RhcnRCdG4gPSAkKCcuYngtc3RhcnQnKTtcclxuICAgIHZhciAkc3RvcEJ0biA9ICQoJy5ieC1zdG9wJyk7XHJcblxyXG4gICAgJHN0YXJ0QnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgJHRoaXMuaGlkZSgpO1xyXG4gICAgICAgICRzdG9wQnRuLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzdG9wQnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAkdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgJHN0YXJ0QnRuLnNob3coKTtcclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vL+2RuO2EsCDshYDroIntirjrsJXsiqQvL1xyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyICRmb290ZXJTZWxlY3QgPSAkKCcuZm9vdGVyLXNlbGVjdC1ib3gnKTtcclxuICAgIHZhciAkY2xvc2VCdG4gPSAkKCcuc2VsZWN0LWNvbnRlbnRzLWNsb3NlJyk7XHJcbiAgICB2YXIgJGNvbnRlbnRzID0gJCgnLnNlbGVjdC1jb250ZW50cycpO1xyXG5cclxuXHJcbiAgICAkZm9vdGVyU2VsZWN0Lm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJGNvbnRlbnRzLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIH0pO1xyXG4gICAgJGNsb3NlQnRuLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcclxuICAgICAgICAkY29udGVudHMucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG4iXX0=
