
$(function () {

    $('ul.nav li a').click(function () {
        $('ul.nav li a').removeClass('on')

        $(this).addClass('on')

        $('html,body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000)
    });

    $('section').mousewheel(function (event, delta) {

        if (delta > 0) {
            var prev = $(this).prev().offset().left
            //현재 위치의 이전 화면의 높이 값을 읽어 들인다.
            $('html,body').stop().animate({ 'scrollLeft': prev }, 1000, 'easeOutBounce')
        } else if (delta < 0) {
            var next = $(this).next().offset().left
            //현재 위치의 다음 화면의 높이 값을 읽어 들인다.
            $('html,body').stop().animate({ 'scrollLeft': next }, 1000, 'easeOutBounce')
        }
    });

    $(window).scroll(function () {
        var winh = $(window).height();
        var scrT = $(window).scrollTop();

        for (var i = 0; i < 5; i++) {
            if (scrT >= winh * i && scrT < winh * (i + 1)) {
                $("ul.nav li ").removeClass();
                $("ul.nav li ").eq(i).addClass("on");
            };
        }
    });
});