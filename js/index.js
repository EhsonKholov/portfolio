$(document).ready(function () {


    $(".navbar-toggler").click(() => {
        $("#navbarTogglerDemo03").toggle(200)
    })

    $(".nav-link").click(function () {
        $("#navbarTogglerDemo03").hide(200)
    })

    $("#checkbox").on("change", () => {
        // Toggle website theme
        $("body").toggleClass("dark");
    });

    const li = $(".nav-item")
    const sec = $("section")

    scroll();
    $(document).scroll(scroll);

    function scroll () {
        let len = sec.length
        while (--len && window.scrollY + 97 < sec[len].offsetTop){}
        $(li).removeClass("active")
        li[len].classList.add("active")
    }

})