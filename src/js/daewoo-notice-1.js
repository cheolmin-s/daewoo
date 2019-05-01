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


