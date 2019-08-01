var init = (function(){

    var $win = $(window);

    //헤더
    var header = function(){

        var $gnbDepth1Link = $('.common-header .gnb-depth1-link');
        var $gnbDepth2 = $('.common-header .gnb-depth2-container');
        var $gnbDepth2Link = $('.common-header .gnb-depth2-link');
        var $headerBottom = $('.common-header .gnb-wrap');
        var $gnbMore = $('.common-header .more');

        //헤더 팝업
        $('.header-popup button').on('click',function(){
            $('.header-popup').addClass('on');
        });

        //GNB
        $gnbDepth1Link.on('mouseenter focus', function(){

            var $this = $(this);
            
            $gnbDepth1Link.removeClass('on').siblings().removeClass('on');
            $this.addClass('on').siblings().addClass('on');
        });

        $headerBottom.on('mouseleave', function(){
            $gnbDepth1Link.removeClass('on').siblings().removeClass('on');
        });

        $gnbMore.on('click', function(e){

            e.preventDefault();

            var $this = $(this);

            if($this.hasClass('on')){
                $gnbMore.removeClass('on').siblings().removeClass('on');
            } else {
                $gnbMore.removeClass('on').siblings().removeClass('on');
                $this.addClass('on').siblings().addClass('on');
            }

        });

        $gnbDepth2Link.last().on('blur', function(){
            
            $gnbDepth1Link.removeClass('on').siblings().removeClass('on');
        });

    };

    //사이드메뉴
    var sideMenu = function(){

        var $sideDepth1 = $('.side-menu-wrap-depth1 > li');
        var $sideDepth2Bg = $('.contents-bg');
        var $sideCloseBtn = $('.side-close-btn');
        var position = parseInt($('.side-menu').css('top'));
        var $sideMenu = $('.side-menu');

        $sideDepth1.on('click', function(e){

            e.preventDefault();

            var $this = $(this);

            if($this.hasClass('on')){
                $sideDepth2Bg.removeClass('on');
                $sideDepth1.removeClass('on').children().removeClass('on');
            } else {
                $sideDepth2Bg.addClass('on');
                $sideDepth1.removeClass('on').children().removeClass('on');
                $this.addClass('on').children().addClass('on');
            }
        });

        $sideCloseBtn.on('click', function(e){

            e.stopPropagation();

            $sideDepth2Bg.removeClass('on');
            $sideDepth1.removeClass('on').children().removeClass('on');

        });

        $win.on('scroll', function(){

            var st = $win.scrollTop();

            $sideMenu.stop().animate({'top':st + position },500);
        });

    };

    //메인 아이콘 리스트
    var iconList = function(){

        var $icon = $('.icon-list-link');

        $icon.on('mouseenter', function(){

            var $this = $(this);

            $icon.removeClass('on');
            $this.addClass('on');

        });
    };

    //슬라이더
    var mainSlider = function(){

        var $mainBanner = $('.main-banner .main-slide');
        var $eventSlider = $('.event-wrap .event-slide');
        var $toggleBtn = $('.event-wrap .toggle-btn');
 
        $mainBanner.touchSlider({
            view: 4,
            gap: 20,
        });

        $eventSlider.touchSlider({
            mode: 'fade',
            autoplay:{
                    enable: true,
                    pauseHover: false,
                    addHoverTarget: '',
                    interval: 3500,
            }
        });

        //슬라이더 재생/정지 버튼
        $toggleBtn.on('click', function(){

            var $this = $(this);

            if( $this.hasClass('on') ){
                $eventSlider[0].autoPlay();
                $this.removeClass('on').text('일시정지');                
            } else {
                $eventSlider[0].autoStop();
                $this.addClass('on').text('재생');
            }
        });
    };

    //푸터 셀렉트박스
    var footerSelect = function(){

        var $footerSelect = $('.footer-select-box');
        var $closeBtn = $('.select-contents-close button');
        var $contents = $('.select-contents');
        var $listLink = $('.select-contents .ko-wrap dd:first-of-type a');
 
        $footerSelect.on('click',function(){
            $contents.addClass('on');    
        });

        $closeBtn.on('click',function(e){
            $contents.removeClass('on');
        });

        $closeBtn.on('keydown', function(e){

            e.preventDefault();

            var keyCode = e.keyCode === 9;
            
            if(keyCode){
                $listLink.focus();   
            }
        });

    };

    //스크롤 효과
    var scrollActive = function(){

        $win.on('scroll', function(){
    
            var $active = $('.scroll-active');
    
            var a = $win.scrollTop() + $win.height() - 100;
    
            $active.each(function(){
    
                var $this = $(this);
                var b = $this.offset().top;
    
                if(a >= b){
                    $this.addClass('on');
                }else{
                    $this.removeClass('on');
                }
            });
        });
    };

    //SNB 메뉴
    var snbMenu = function(){

        var $snbDepth1Link = $('.snb .depth1-link');
        var $more = $('.snb .more-right');

        $snbDepth1Link.on('click',function(e){

            e.preventDefault();
    
            var $this = $(this);
    
            if($this.hasClass('on')){
                $more.removeClass('on');
                $this.removeClass('on').children().removeClass('on').parent().siblings().removeClass('on');
                $this.children('.more-right').addClass('on');
            } else {
                $more.removeClass('on');
                $snbDepth1Link.removeClass('on').children().removeClass('on').parent().siblings().removeClass('on');
                $this.addClass('on').children().addClass('on').parent().siblings().addClass('on');
                $more.removeClass('on');
            }    
        });
    };

    //ISA 탭메뉴
    var tabMenu = function(){
        
        var $tabMenu = $('.tab-menu .button');

        $tabMenu.on('click',function(e){
            e.preventDefault();
            e.stopPropagation();

            var currentTab = e.currentTarget;

            activeTab(currentTab);
            activeTabPanel(currentTab);

        });

        $tabMenu.on('keydown',function(e){
            e.stopPropagation();

            var keyCode = e.keyCode || e.which;

            switch(keyCode){
                case 37:
                    if(e.target.previousElementSibling){
                        $(e.target)
                            .attr({
                                'tabindex':'-1'
                            })
                            .prev()
                                .attr({
                                    'tabindex':'0'
                                })
                                .focus()
                    } else {
                        $(e.target)
                            .attr({
                                'tabindex':'-1'
                            })
                            .siblings(':last')
                                .attr({
                                    'tabindex':'0'
                                })
                                .focus()
                    }
                            break;

                    case 39:
                        if(e.target.nextElementSibling){
                            $(e.target)
                                .attr({
                                    'tabindex':'-1'
                                })
                                .next()
                                    .attr({
                                        'tabindex':'0'
                                    })
                                    .focus()
                        } else {
                            $(e.target)
                                .attr({
                                    'tabindex':'-1'
                                })
                                .siblings(':first')
                                    .attr({
                                        'tabindex':'0'
                                    })
                                    .focus()
                        }
                            break;

                        case 32:
                        case 13:
                            e.preventDefault();
                            activeTab(e.target);
                            activeTabPanel(e.target);

                            break;          
            }
        });

        function activeTab(tab){    
            $(tab).addClass('on')
                .attr({
                    'tabindex': '0',
                    'aria-selected' : 'true',
                })
                .focus()
                .siblings()
                    .removeClass('on')
                    .attr({
                        'tabindex': '-1',
                        'aria-selected' : 'false',
                    })
        };

        function activeTabPanel(tab){
            $('#'+ tab.getAttribute('aria-controls'))
                .attr({
                    'tabindex':'0'
                })
                .prop({
                    'hidden':false
                })
                .addClass('on')
                .siblings('.panel')
                    .attr({
                        'tabindex':'-1'
                    })
                    .prop({
                        'hidden':true
                    })
                    .removeClass('on')
        };

        $('.tab-menu .button:first-of-type, .panel:nth-of-type(2)').addClass('on').attr({ 'tabindex':'0' });
    };

    //캘린더
    var calendar = function(){

        var $calendarLink = $('.calendar-link');
        var $datepicker = $('.datepicker');

        $calendarLink.on('click',function(e){

            e.preventDefault();

            var $this = $(this);
    
            $this.siblings().toggleClass('on');

            $datepicker.datepicker({
                changeMonth: true,
                changeYear: true,
                yearRange: "2009:2029",
                firstDay: 1,
                dayNamesMin: ['일','월', '화', '수', '목', '금', '토'],
                monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
            });
        })

    };

    //아코디언 메뉴
    var accordion = function(){

        var $contentsLink = $('.question-contents-link');

        $contentsLink.on('click',function(e){
    
            e.preventDefault();
    
            var $this = $(this);

            if( $this.hasClass('on') ){
                $this.removeClass('on').siblings().removeClass('on');
            } else {
                $contentsLink.removeClass('on').siblings().removeClass('on');
                $this.addClass('on').siblings().addClass('on');
            }
        });
    };

    //실행
    header();
    sideMenu();
    iconList();
    mainSlider();
    footerSelect();
    scrollActive();
    snbMenu();
    tabMenu();
    calendar();
    accordion();
});

//실행
$(init);
//# sourceMappingURL=../maps/common.js.map
