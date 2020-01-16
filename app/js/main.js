// Polyfill
// include ./polyfill/**/*.js

// Plugins
//= include ../../node_modules/jquery/dist/jquery.min.js
//= include ../../node_modules/slick-carousel/slick/slick.min.js
//= include ../../node_modules/svg4everybody/dist/svg4everybody.min.js
//= include ../../node_modules/jquery-validation/dist/jquery.validate.js
//= include ./jquery.maskedinput.min.js

// Include All JS
//= include ../block/**/*.js

// SVG
svg4everybody();

// Phone Mask
$('.phone').each(function() {
	$(this).mask("+7 999 999 99 99", {
		autoclear: true
	});
})

if($(".brands-slider").length) {
	$(".brands-slider").slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1
	});
}

if($(".teamslider").length) {
	var teamslider =  $(".teamslider").slick({
		infinite: true,
		adaptiveHeight: true,
		arrows: false,
	});

	$(".teamslider__prev").click(function() {
		$(".teamslider").slick("slickPrev");
	});

	$(".teamslider__next").click(function() {
		$(".teamslider").slick("slickNext");
	});
}


if($(".studyslide").length) {
	$(".studyslide").slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		// adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 720,
				settings: {
					slidesToShow: 2
				}
			}, {
				breakpoint: 680,
				settings: {
					dots: true,
					slidesToShow: 2
				}
			},{
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
				}
			}, {
				breakpoint: 400,
				settings: {
					slidesToShow: 1
				}
			}
		]

	});
}

if($(".repslider").length) {
	var repsliderSetings = {
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 720,
				settings: {
					slidesToShow: 3
				}
			}, {
				breakpoint: 680,
				settings: {
					dots: true,
					slidesToShow: 2
				}
			},{
				breakpoint: 580,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 400,
				settings: {
					slidesToShow: 1
				}
			}
		]
	}
	$(".repslider").slick(repsliderSetings);

	// $(window).on('resize', function() {
	// 	if( $(window).width() > 992 &&  !$(".repslider").hasClass('slick-initialized')) {
	// 		$(".repslider").slick(repsliderSetings);
	// 	}
	// });
}




// Tab
$(".js__tab-ourall").click(function() {
	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".bourall__items").eq(index).fadeIn(500).siblings().hide();
});

$(".js__stylwork-tab").click(function() {
	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".stylistwork__pic").eq(index).fadeIn(500).siblings().hide();
});
