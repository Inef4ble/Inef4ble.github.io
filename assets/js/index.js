$(document).ready(function() {
    $(".menu > ul > li").click(function(e){
        $(this).siblings().removeClass("active");
        $(this).toggleClass("active");
        $(this).find("ul").slideToggle();
        $(this).siblings().find("ul").slideUp();
        $(this).siblings().find("ul").find("li").removeClass("active");
    })
});

$(document).ready(function() {
    $(".menu-btn").click(function(e){
        $(".sidebar").toggleClass("active");
    })
});