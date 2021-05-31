(function($){

    // 햄버거버튼
    function openNav(){
        $('#header').toggleClass('on')
        if ($('#header').hasClass('on')) {
            $('#nav').css({
                display: 'block'
            }).animate({
                right: '0'
            }, 500)
            $('.outLayer').css({
                display: 'block'
            })
            $('.mNavLogo').animate({
                opacity: '1'
            }, 700)
        } else {
            $('#nav').animate({
                right: '-260px'
            }, 500, function(){
                $(this).css({
                    display: 'none'
                })
            })
            $('.outLayer').css({
                display: 'none'
            })
            $('.mNavLogo').animate({
                opacity: '0'
            }, 500)
        }
    }
    $('.mOpenBtn, .outLayer').on('click', openNav)

 

    // 리사이즈
    var winWidth
    function init(){
        winWidth = $(window).innerWidth()
        // 메인_footer 위치잡기
        mainH = $(window).outerHeight();
        $('#footer').css({top: mainH})
        $('#testObj').css({height: mainH})
        if( winWidth > 1184 && !$('html').hasClass('pc') ){
            // PC로 바뀔때
            $('#header').removeClass('on')
            $('.outLayer').css({display: 'none'})
            $('#nav').css({ display: 'block', right: '0' })
            $('html').addClass('pc').removeClass('mobile tablet')
                // 카테고리 전체랑 하위메뉴도 다보이게
            $('.cateWrap').css({ height: '65px' }).find('.cateAll').removeClass('on').find('.cateMenu').css({ display: 'inline-block' })
            $('.cateWrap2').css({ height: '65px' }).find('.cateAll').removeClass('on').find('.cateMenu').css({ display: 'inline-block' })
                // 공간_왼쪽 오른쪽 높이 같게
            var hh = $(".explanWrap").height();
	        $('.pcImg').css({height: hh + 'px'})
        } else if ( winWidth <= 848 && !$('html').hasClass('mobile') ){
            // 모바일로 바뀔때
            $('#header').removeClass('on')
            $('#nav').css({ display: 'none', right: '-260px' })
            $('html').addClass('mobile').removeClass('pc tablet')
                // 카테고리 전체 버튼만 남게
            $('.cateWrap').css({ height: '65px' }).find('.cateAll').removeClass('on').find('.cateMenu').css({ display: 'none' })
            $('.cateWrap2').css({ height: '65px' }).find('.cateAll').removeClass('on').find('.cateMenu').css({ display: 'none' })
        } else if ( winWidth > 848 && winWidth <= 1184 && !$('html').hasClass('tablet') ){
            $('html').addClass('tablet').removeClass('pc mobile')
                // 카테고리 전체 버튼만 남게
            $('.cateWrap').css({ height: '65px' }).find('.cateAll').removeClass('on').find('.cateMenu').css({ display: 'none' })
            $('.cateWrap2').css({ height: '65px' }).find('.cateAll').removeClass('on').find('.cateMenu').css({ display: 'none' })
        }
    }
    init()
    $(window).resize(function(){ init() })

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


})(jQuery)

