$("#summary-tab, #ux-skills-tab, #tool-set-tab").click(function(e) {
    e.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html,body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    },'slow', function() {});
});

$(".side-menu").click(function() {
    if($(window).width() < 500) {
        if ($(".side-menu").height() > 20) {
            console.log("shrink!");
            $(this).animate({height: '20'}, 300);
            $(".side-tab").hide(200);
        }

        else if ($(".side-menu").height() == 20){
            console.log('show');
            var menuHeight = window.innerHeight / 6;
            var resumeLoc = window.innerHeight / 6 + 70 + 20;
            $(this).animate({height: menuHeight}, 300);
            $(".side-tab").show(400);
        }
    }
});