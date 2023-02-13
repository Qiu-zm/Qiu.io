(function ($) {
    "use strict";
    // JQ监听滚动 更改顶部导航的样式
    // $(window).scroll(function () {
    //     var scroll = $(window).scrollTop();
    //     if (scroll >= 50) {
    //         $(".sticky").addClass("nav-sticky");
    //     } else {
    //         $(".sticky").removeClass("nav-sticky");
    //     }
    // });
    // 原生监听滚动 更改顶部导航的样式
    window.onscroll = function(){
        // 获取滚动距离
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollTop >= 50) {
            document.querySelector('.sticky').classList.add('nav-sticky')
        }else {
            document.querySelector('.sticky').classList.remove('nav-sticky')
        }
    }
    $('.nav-item a, .mouse-down a').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    $('.video-play-icon').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $("#navbarCollapse").scrollspy({
        offset: 70
    });
    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });
    $('#clock').countdown('2020/10/10').on('update.countdown', function (event) {
        var _DateInput = '' +
            '<div><span>%-d</span> Day%!d</div>' +
            '<div><span>%H</span> Hours</div>' +
            '<div><span>%M</span> Minutes</div>' +
            '<div><span>%S</span> Seconds</div>';
        var $this = $(this).html(event.strftime(_DateInput));
    });
    $("#owl-demo").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [991, 3],
        itemsTablet: [767, 2],
        itemsMobile: [575, 1],
        pagination: false,
        autoPlay: false,
        slideSpeed: 300
    });
    (function ($) {
        var owl = $("#owl-demo");
        owl.owlCarousel();
        $(".next-roadmap").click(function () {
            owl.trigger('owl.next');
        })
        $(".prev-roadmap").click(function () {
            owl.trigger('owl.prev');
        })
    })(jQuery);
    $(".element").each(function () {
        var $this = $(this);
        $this.typed({
            strings: $this.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000
        });
    });
    var mSlider = $("#market-rate");
    if (mSlider.length) {
        mSlider.owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 1000,
            smartSpeed: 1200,
            autoplayHoverPause: true,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1300: {
                    items: 4,
                }
            },
        })
    }
})(jQuery);