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


