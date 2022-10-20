$(window).on("scroll", (function () {
    $(".navbar").css("height", "7%");
    $(".navbar").css("transition", "all 0.8s");
    $(".navbar").css("opacity", "0.8");
    $(".nav-link").css("color", "var(--blackColor)");

}))

$(window).on("scroll", (function () {
    if ($(window).scrollTop() == 0) {
        $(".navbar").css("height", "10%");
        $(".navbar").css("transition", "all 0.8s");
        $(".navbar").css("opacity", "1");
        $(".heads").css("color", "var(--whiteColor)");
        $(".word").css("color", "var(--mainColor)");
    }

}))


$(document).ready((() => {
    //  start loader

    $('.loader').css("display", "none")
    $('.spinner').css("display", "none")
    $('body').css("overflow", "unset")

    // end loader 
}))
