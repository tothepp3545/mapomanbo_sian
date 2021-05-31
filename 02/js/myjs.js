(function($){

    // footer 제휴처 슬라이드
    $('.footSlide').slick({
        slidesToScroll: 1,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 600,
        draggable: true,
        arrows: true,
        prevArrow: '<button class="prev arr-box"><span class="arr arr-left"></span></button>',
        nextArrow: '<button class="next arr-box"><span class="arr arr-right"></span></button>',
        responsive:[
            { breakpoint: 960,
                settings: { slidesToShow:3 } },
            { breakpoint: 760,
                settings: { slidesToShow:2 } }
        ]
    })

    // 유튜브_메인
    $('.mainVideo').YTPlayer({
        videoURL:'https://www.youtube.com/embed/-OykgAaaxHQ',
        mute: true,
        showControls: false,
        useOnMobile: false,
        quality: 'highres',
        containment: 'body',
        loop: true,
        autoPlay: true,
        stopMovieOnBlur: false,
        startAt: 0,
        opacity: 1
    })

    // 유튜브_서브
    $('.subVideo').YTPlayer({
        videoURL:'https://www.youtube.com/embed/-OykgAaaxHQ',
        mute: true,
        showControls: false,
        useOnMobile: false,
        quality: 'highres',
        containment: '.subVis',
        loop: true,
        autoPlay: true,
        stopMovieOnBlur: false,
        startAt: 0,
        opacity: 1
    })


})(jQuery)

