// ------------------------------------------------------------------------------
//Scroll Behaviour --------------------------------------------------------------
$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".section")

    for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]

        if ($(tag).position().top < pageBottom) { 
            $(tag).addClass("visible")
        }
        else { 
            $(tag).removeClass("visible")
        }
    }
})
// ------------------------------------------------------------------------------
//Carousel ----------------------------------------------------------------------
$("#summary-tab, #ux-skills-tab, #tool-set-tab").click(function(e) {
    e.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html,body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    },'slow', function() {});
});
// ------------------------------------------------------------------------------
//Carousel ----------------------------------------------------------------------
$(".side-menu").click(function() {
    if($(window).width() < 600) {
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
// ------------------------------------------------------------------------------
//Tool Set ----------------------------------------------------------------------
