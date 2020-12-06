$("#summary-tab, #ux-research-tab, #definition-tab, #prototyping-tab, #final-tab, #reflection-tab").click(function(e) {
    e.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html,body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    },'slow', function() {});
});

$(".side-case-menu").click(function() {
    if($(window).width() < 500) {  
        if ($(".side-case-menu").height() > 20) {
            console.log("shrink!");
            $(this).animate({height: '20'}, 300);
            $(".side-tab").hide(200);
        }

        else if ($(".side-case-menu").height() == 20){
            console.log('show');
            var menuHeight = window.innerHeight / 6;
            var resumeLoc = window.innerHeight / 6 + 70 + 20;
            $(this).animate({height: menuHeight}, 300);
            $(".side-tab").show(400);
        }
    }
});
if($(window).width() < 600) {
    $("#MichaelRefines-frame").insertAfter("#MichaelRefines-p");
};
// ------------------------------------------------------------------------------
//Carousel ----------------------------------------------------------------------
$(".shrink-icon").click(function() {
    console.log('hide');
    $("#bullet-user1").addClass("active-bullet");
    $(".bullet").addClass("bullet");
    $(".full-deck").fadeOut();
    $(".full-deck").removeClass("full-deck-visible");
});
$(".overlay-center").children("img").click(function() {
    console.log('hide2');
    $(".full-deck").fadeOut();
    $(".full-deck").removeClass("full-deck-visible");
})
// ------------------------------------------------------------------------------
//Carousel "User Path"-----------------------------------------------------------
$(".bullet-user1, .expand-user").click(function() {
    console.log("user 1");
    $("#user-path1").fadeIn().delay(300);
    $("#user-path2, #user-path3, #user-path4, #user-path5, #user-path6").fadeOut()
});
$(".bullet-user2").click(function() {
    console.log("user 2");
    $("#user-path2").fadeIn().delay(300);
    $("#user-path1, #user-path3, #user-path4, #user-path5, #user-path6").fadeOut();
});
$(".bullet-user3").click(function() {
    console.log("user 3");
    $("#user-path3").fadeIn().delay(300);
    $("#user-path2, #user-path1, #user-path4, #user-path5, #user-path6").fadeOut();
});
$(".bullet-user4").click(function() {
    console.log("user 4");
    $("#user-path4").fadeIn().delay(300);
    $("#user-path2, #user-path1, #user-path3, #user-path5, #user-path6").fadeOut();
});
$(".bullet-user5").click(function() {
    console.log("user 5")
    $("#user-path5").fadeIn().delay(300);
    $("#user-path2, #user-path1, #user-path4, #user-path3, #user-path6").fadeOut();
});
$(".bullet-user6").click(function() {
    console.log("user 6")
    $("#user-path6").fadeIn().delay(300);
    $("#user-path2, #user-path1, #user-path4, #user-path5, #user-path3").fadeOut();
});
// ------------------------------------------------------------------------------
//Carousel "Findings Prioritization matrix"--------------------------------------
$(".bullet-matrix1, .expand-matrix").click(function() {
    console.log("matrix 1");
    $("#matrix1").fadeIn().delay(300);
    $("#matrix2, #matrix3, #matrix4, #matrix5, #matrix6").fadeOut()
});
$(".bullet-matrix2").click(function() {
    console.log("matrix 2");
    $("#matrix2").fadeIn().delay(300);
    $("#matrix1, #matrix3, #matrix4, #matrix5, #matrix6").fadeOut();
});
$(".bullet-matrix3").click(function() {
    console.log("matrix 3");
    $("#matrix3").fadeIn().delay(300);
    $("#matrix2, #matrix1, #matrix4, #matrix5, #matrix6").fadeOut();
});
$(".bullet-matrix4").click(function() {
    console.log("matrix 4");
    $("#matrix4").fadeIn().delay(300);
    $("#matrix2, #matrix1, #matrix3, #matrix5, #matrix6").fadeOut();
});
$(".bullet-matrix5").click(function() {
    console.log("matrix 5")
    $("#matrix5").fadeIn().delay(300);
    $("#matrix2, #matrix1, #matrix4, #matrix3, #matrix6").fadeOut();
});
$(".bullet-matrix6").click(function() {
    console.log("matrix 6")
    $("#matrix6").fadeIn().delay(300);
    $("#matrix2, #matrix1, #matrix4, #matrix5, #matrix3").fadeOut();
});
// ------------------------------------------------------------------------------
//Carousel "Site Map"------------------------------------------------------------
$(".bullet-map1, .expand-map").click(function() {
    console.log("map 1");
    $("#map1").fadeIn().delay(300);
    $("#map2").fadeOut()
});
$(".bullet-map2").click(function() {
    console.log("map 2");
    $("#map2").fadeIn().delay(300);
    $("#map1").fadeOut();
});
// ------------------------------------------------------------------------------
//Carousel "UI style tile"-------------------------------------------------------
$(".bullet-style1, .expand-style").click(function() {
    console.log("style 1");
    $("#style1").fadeIn().delay(300);
    $("#style2, #style3, #style4, #style5, #style6, #style7").fadeOut()
});
$(".bullet-style2").click(function() {
    console.log("style 2");
    $("#style2").fadeIn().delay(300);
    $("#style1, #style3, #style4, #style5, #style6, #style7").fadeOut();
});
$(".bullet-style3").click(function() {
    console.log("style 3");
    $("#style3").fadeIn().delay(300);
    $("#style1, #style2, #style4, #style5, #style6, #style7").fadeOut();
});
$(".bullet-style4").click(function() {
    console.log("style 4");
    $("#style4").fadeIn().delay(300);
    $("#style1, #style3, #style2, #style5, #style6, #style7").fadeOut();
});
$(".bullet-style5").click(function() {
    console.log("style 5");
    $("#style5").fadeIn().delay(300);
    $("#style1, #style3, #style4, #style2, #style6, #style7").fadeOut();
});
$(".bullet-style6").click(function() {
    console.log("style 6");
    $("#style6").fadeIn().delay(300);
    $("#style1, #style3, #style4, #style5, #style2, #style7").fadeOut();
});
$(".bullet-style7").click(function() {
    console.log("style 7");
    $("#style7").fadeIn().delay(300);
    $("#style1, #style3, #style4, #style5, #style6, #style2").fadeOut();
});
// ------------------------------------------------------------------------------
//View Toggle 1 "Search Suggestions"---------------------------------------------
$("#desktop-MichaelSearches").click(function() {
    console.log("MichaelSearches desktop");
    var image = $(".MichaelSearches");
    image.fadeOut(function() {
        image.css({"min-height": "300px",})
        image.attr("src", "../images/Endangered/UI Interactions/desktop-search-bar-ui.gif").fadeIn();
        image.css({
            "box-shadow": "none",
            "width": "100%",
            "min-height": "300px",
            "border-radius": "0",
            "object-fit": "contain",
        });
        image.fadeIn("fast");
    }).delay(300);
    $(this).attr("class", "desktop-icon desktop-active");
    $("#mobile-MichaelSearches").attr("class", "mobile-icon mobile-disabled");
});
$("#mobile-MichaelSearches").click(function() {
    console.log("MichaelSearches mobile");
    var image = $(".MichaelSearches");
    image.fadeOut(function() {
        image.css({"min-height": "600px",})
        image.attr("src", "../images/Endangered/UI Interactions/mobile v2 search.gif");
        image.css({
            "box-shadow": "0 0 10px rgba(0,0,0,0.25)",
            "width": "300px",
            "border-radius": "45px",
            "object-fit": "cover",
        });
        image.fadeIn("fast");
    }).delay(300);
    $(this).attr("class", "mobile-icon mobile-active");
    $("#desktop-MichaelSearches").attr("class", "desktop-icon desktop-disabled");
});
// ------------------------------------------------------------------------------
//View Toggle 2 "Search Refine"--------------------------------------------------
$("#desktop-MichaelRefines").click(function() {
    console.log("MichaelRefines desktop");
    var image = $(".MichaelRefines");
    image.fadeOut(function() {
        image.css({"min-height": "300px",})
        image.attr("src", "../images/Endangered/UI Interactions/desktop-filters-ui.gif");
        image.css({
            "box-shadow": "none",
            "width": "100%",
            "border-radius": "0",
            "object-fit": "contain",
        });
        image.fadeIn("fast");
    }).delay(300);
    $(this).attr("class", "desktop-icon desktop-active");
    $("#mobile-MichaelRefines").attr("class", "mobile-icon mobile-disabled");
});
$("#mobile-MichaelRefines").click(function() {
    console.log("MichaelRefines mobile");
    var image = $(".MichaelRefines");
    image.fadeOut(function() {
        image.css({"min-height": "600px",})
        image.attr("src", "../images/Endangered/UI Interactions/mobile v2 refine.gif");
        image.css({
            "box-shadow": "0 0 10px rgba(0,0,0,0.25)",
            "width": "300px",
            "border-radius": "45px",
            "object-fit": "cover",
        });
        image.fadeIn("fast");
    }).delay(300);
    $(this).attr("class", "mobile-icon mobile-active");
    $("#desktop-MichaelRefines").attr("class", "desktop-icon desktop-disabled");
});
// ------------------------------------------------------------------------------
//View Toggle 3 "Download Button"------------------------------------------------
$("#desktop-Profile").click(function() {
    console.log("MichaelProfile desktop");
    var image1 = $(".MichaelDownloads");
    var image2 = $(".MichaelSaves");
    $.merge(image1, image2).fadeOut(function() {
        $.merge(image1, image2).css({"min-height": "300px",})
        image1.attr("src", "../images/Endangered/UI Interactions/desktop-download-ui.gif");
        image2.attr("src", "../images/Endangered/UI Interactions/desktop-save-ui.gif");
        if($(window).width() < 600) {
            console.log("efefefe")
            $.merge(image1, image2).css({
                "width": "100%",
                "margin-left": "-20px",
                "align-items": "flex-start",
            })
        }
        else {
            $.merge(image1, image2).css({
                "width": "170%",
            });
            $(".demo-frame-1-2, .demo-frame-2-2").css({"align-items": "center",});
        };
        $.merge(image1, image2).css({
            "box-shadow": "none",
            "border-radius": "0",
        });
        $.merge(image1, image2).fadeIn("fast");
    }).delay(300);
    $(this).attr("class", "desktop-icon desktop-active");
    $("#mobile-Profile").attr("class", "mobile-icon mobile-disabled");
});
$("#mobile-Profile").click(function() {
    console.log("MichaelProfile mobile");
    var image1 = $(".MichaelDownloads");
    var image2 = $(".MichaelSaves");
    $.merge(image1, image2).fadeOut(function() {
        $.merge(image1, image2).css({"min-height": "600px",})
        image1.attr("src", "../images/Endangered/UI Interactions/mobile v2 download.gif");
        image2.attr("src", "../images/Endangered/UI Interactions/mobile v2 save.gif");
        if($(window).width() < 600) {
            console.log("efefefe")
            $.merge(image1, image2).css({
                "width": "100%",
                "margin-left": "-20px",
                "align-items": "flex-start",
            })
        }
        else {
        $.merge(image1, image2).css({
            "box-shadow": "0 0 10px rgba(0,0,0,0.25)",
            "width": "300px",
            "border-radius": "45px",
        })};
        $.merge(image1, image2).fadeIn("fast");
    }).delay(300);
    $(this).attr("class", "mobile-icon mobile-active");
    $("#desktop-Profile").attr("class", "desktop-icon desktop-disabled");
});