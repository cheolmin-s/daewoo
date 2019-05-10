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


