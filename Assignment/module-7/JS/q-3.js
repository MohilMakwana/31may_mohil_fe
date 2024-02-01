$(document).ready(function () {
    let slideIndex = 0;
    const totalSlides = $(".slide").length;
    const slideWidth = $(".slide").width();

    $(".next").click(function () {
        slideIndex = (slideIndex + 1) % totalSlides;
        $(".slides").animate({ marginLeft: -slideIndex * slideWidth }, 500);
    });

    $(".prev").click(function () {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        $(".slides").animate({ marginLeft: -slideIndex * slideWidth }, 500);
    });
});