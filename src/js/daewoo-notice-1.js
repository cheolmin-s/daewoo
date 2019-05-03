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


