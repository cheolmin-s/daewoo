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


