/*    $("h1").click(function() {
    $("h1").css("color","green")
});

$("button").click(function() {
    $("h1").css("color","blue")
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

$("h1").on("click", function() {
    $("h1").slideToggle();
}) */
$("button").on("click", function() {
    $("h1").animate({opacity: 0.5}).slideUp().slideDown();
});
