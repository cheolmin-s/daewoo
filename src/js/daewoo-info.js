$(function(){

    var $infoMenu = $('.info-menu > dl');

    $infoMenu.on('mouseenter', function(){

        var $this = $(this).children('img').index('img');

        $this.attr('src',url('../'))

    });

});