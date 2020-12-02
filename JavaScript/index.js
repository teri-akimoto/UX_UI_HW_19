
$(".russian-disabled, .russian").click(function() {
    console.log("russian");
    if (window.innerWidth <= 500) { $(".greeting").html("Здравстуй&shy;те, я Лана.<br><br>");}
    else { $(".greeting").html("Здравстуй&shy;те, я Лана.");};
    $("#statement").text("Дизайнер & иллюстратор.");
    $("#end-statement").text("Трёхъязычная с обучением в сферах образования и психологии.");
    $(this).addClass("russian");
    $(this).removeClass("russian-disabled");
    $(".english, .english-disabled").addClass("english-disabled");
    $(".english, .english-disabled").removeClass("english");
    $(".vietnam, .vietnam-disabled").addClass("vietnam-disabled");
    $(".vietnam, .vietnam-disabled").removeClass("vietnam");
})

$(".english-disabled, .english").click(function() {
        console.log("english");
        $(".greeting").text("Hello, my name is Lan.");
        $("#statement").text("Designer & illustrator.");
        $("#end-statement").text("Trilingual with education and psychology background.");
        $(this).addClass("english");
        $(this).removeClass("english-disabled");
        $(".vietnam, .vietnam-disabled").addClass("vietnam-disabled");
        $(".vietnam, .vietnam-disabled").removeClass("vietnam");
        $(".russian, .russian-disabled").addClass("russian-disabled");
        $(".russian, .russian-disabled").removeClass("russian");
})

$(".vietnam-disabled, .vietnam").click(function() {
    console.log("vietnam");
    $(".greeting").text("Xin chào, mình là Lan.");
    $("#statement").text("Nhà thiết kế & người vẽ tranh minh họa.");
    $("#end-statement").text("Mình biết gồm ba thứ tiếng với nền học giáo giục và tâm lý.");
    $(".english, .english-disabled").addClass("english-disabled");
    $(".english, .english-disabled").removeClass("english");
    $(this).addClass("vietnam");
    $(this).removeClass("vietnam-disabled");
    $(".russian, .russian-disabled").addClass("russian-disabled");
    $(".russian, .russian-disabled").removeClass("russian");
})

$("#down").click(function(e) {
    e.preventDefault();
    var offset = 0;
    var target = this.hash;
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html,body').stop().animate({
        'scrollTop': $(target).offset().top - offset
    },'slow', function() {});
});
