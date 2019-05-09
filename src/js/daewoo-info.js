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