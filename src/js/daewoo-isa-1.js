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

    var $tabMenu = $('.tab-menu .button')

    $tabMenu.on('click',function(e){
        e.preventDefault();
        e.stopPropagation();

        var currTab = e.currentTarget;

        activeTab(currTab);
        activeTabPanel(currTab);

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
                    if(e.target.nextiousElementSibling){
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
                

    }

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
    }

    $('.tab-menu .button:first-of-type').trigger('click');

});


