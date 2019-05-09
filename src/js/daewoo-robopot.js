$(function(){

    var $snbDepth1Link = $('.snb .depth1-link');
    var $more = $('.snb .more-right');

    $snbDepth1Link.eq(0).addClass('on');
    $more.eq(0).addClass('on');

    $snbDepth1Link.on('click',function(){

        var $this = $(this);


        if($this.hasClass('on')){
            $snbDepth1Link.removeClass('on');
            $more.removeClass('on');
        } else {
            $more.removeClass('on');
            $snbDepth1Link.removeClass('on');
            $this.children().addClass('on');
            $this.addClass('on');

        }

    });


});
