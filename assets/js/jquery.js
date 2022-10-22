$(window).on("scroll", (function () {
    $(".navbar").css("height", "7%");
    $(".navbar").css("transition", "all 0.8s");
    $(".navbar").css("opacity", "0.8");
    $(".navbar").css("padding-top", "5px");
    $(".navbar").css("padding-bottom", "5px");
    $(".nav-link").css("color", "var(--blackColor)");
    $(".navbar-brand").css("color", "var(--blackColor)");


}))

$(window).on("scroll", (function () {
    if ($(window).scrollTop() == 0) {
        $(".navbar").css("height", "10%");
        $(".navbar").css("transition", "all 0.8s");
        $(".navbar").css("opacity", "1");
        $(".heads").css("color", "var(--whiteColor)");
        $(".word").css("color", "var(--mainColor)");
        $(".navbar").css("padding-top", "1rem");
        $(".navbar").css("padding-bottom", "1rem");

    }

}))

let clickAcc = 0

$('.navbar-toggler').on("click", () => {
    $(".heads").css("color", "var(--blackColor)");
    $(".word").css("color", "var(--blackColor)");
    $(".navbar-nav").css("padding", "16px");
    $(".heads").css("padding-bottom", "10px");
    $(".word").css("padding", "5px");

    if (clickAcc % 2 == 0) {
        $(".cat h3").css("z-index", "-1");
    }
    else {
        $(".cat h3").css("z-index", "1");

    }
    clickAcc++
})


$(document).ready(() => {
    //  start loader

    $('.loader').css("display", "none")
    $('.spinner').css("display", "none")
    $('body').css("overflow", "unset")

    // end loader 

})



// btnTop


$(window).on("scroll", (function () {
    if ($(window).scrollTop() == 0) {
        $('.btnTop').css("display", "none")
        $(".btnTop").css("transition", "all 0.8s");

    }
    else {
        $('.btnTop').css("display", "block")
    }
    let off = $('.about').offset().top - ($('.about').height())

    let t = $(window).scrollTop();

    if (t > off) {
        $('.btnTop').css("backgroundColor", "var(--whiteColor)")
        $('.btnTop').css("color", "var(--mainColor)")
    }

    else {
        $('.btnTop').css("backgroundColor", "var(--mainColor)")
        $('.btnTop').css("color", "var(--whiteColor)")
    }


}))

$(document).ready(function () {
    $(".btnTop").hover(
        function () { $(this).css("transform", "scale(1.25)"); },
        function () {
            $(this).css("transform", "scale(1)")
            ;
        });
});


$(window).on("scroll", (() => {

    if ($(window).scrollTop() == 500) {
        $('.animation').slideUp(2000)
    }


}))



$(window).scroll(() => {
    let t = $(window).scrollTop();
    let off = $('.about').offset().top - ($('.about').height())
    if (t >= off) {
        $(".move").addClass("animate__animated animate__slideInRight ")
    }

})



// scroll to the content 


$(".nav-link").click((e) => {

    let attr = $(e.target).attr("href")

    let sec = $(attr).offset().top

    $('html, body').animate({ scrollTop: sec }, 200)

})