
$(function () {

    var ht = $(window).height();

    $("section").height(ht);

    $(window).on("resize", function () {
        var ht = $(window).height();
        $("section").height(ht);
    });


    $(".nav li").on("click", function (e) {
        e.preventDefault();

        var ht = $(window).height();

        var i = $(this).index();

        var nowTop = i * ht;

        $("html,body").stop().animate({ "scrollTop": nowTop }, 1000);

        $('.nav li').removeClass('on')
        $(this).addClass('on')

    });//click	

    $(window).scroll(function () {
        var ht = $(window).height();
        var scrT = $(window).scrollTop();
        var sec1 = $('#sec1').offset().top;
        var sec2 = $('#sec2').offset().top;
        var sec3 = $('#sec3').offset().top;
        var sec4 = $('#sec4').offset().top;

        for (var i = 0; i < 4; i++) {
            if (scrT >= i * ht && scrT < ht * (i + 1)) {
                $('.nav li').removeClass('on')
                $('.nav li').eq(i).addClass('on')

            }
        }
    });

    $("section").on("mousewheel", function (event, delta) {

        if (delta > 0) {
            var prev = $(this).prev().offset().top;
            $("html,body").stop().animate({ "scrollTop": prev }, 1000, "easeOutBounce");

        } else if (delta < 0) {
            var next = $(this).next().offset().top;
            $("html,body").stop().animate({ "scrollTop": next }, 1000, "easeOutBounce");
        }

    });
});
