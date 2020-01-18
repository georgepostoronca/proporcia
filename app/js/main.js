// Polyfill
// include ./polyfill/**/*.js

// Plugins
//= include ../../node_modules/jquery/dist/jquery.min.js
//= include ../../node_modules/slick-carousel/slick/slick.min.js
//= include ../../node_modules/svg4everybody/dist/svg4everybody.min.js
//= include ../../node_modules/jquery-validation/dist/jquery.validate.js
//= include ../../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js
//= include ./jquery.maskedinput.min.js
//= include ./rellax.min.js

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
	var brandslider = {
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
					slidesToShow: 2
				}
			}, {
				breakpoint: 720,
				settings: "unslick"
			}
		]
	}
	$(".brands-slider").slick(brandslider);

	$(window).on('resize', function() {
		if( $(window).width() > 720 &&  !$(".brands-slider").hasClass('slick-initialized')) {
			$(".brands-slider").slick(brandslider);
		}
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

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


if($(".stylistwork__tab").length) {
	var repsliderSetings = {
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 767,
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
	}

	if( $(window).width() < 767 &&  !$(".stylistwork__tab").hasClass('slick-initialized')) {
		$(".stylistwork__tab").slick(repsliderSetings);
	}

	var myEfficientFn = debounce(function() {
		if( $(window).width() < 767 ) {
			$(".stylistwork__tab").slick(repsliderSetings);
			// console.log("slick")
		} else {
			// console.log("Unslick")
			$(".stylistwork__tab").slick("unslick");
		}
	}, 250);

	window.addEventListener('resize', myEfficientFn);
}


// bstylist__grid
if($(".bstylist__grid").length) {
	var bstylistgrid = {
		arrows: false,
		dots: true,
		infinite: true,
		// slidesToScroll: 1,
		variableWidth: true,
		// responsive: [
		// 	{
		// 		// breakpoint: 680,
		// 		// settings: "unslick"
		// 	}
		// ]
	}

	if( $(window).width() > 680) {
		try	{
			$(".bstylist__grid").slick("unslick");

		} catch(e) {
			console.log(e)
		}
	} else {
		$(".bstylist__grid").slick(bstylistgrid);
	}

	$(window).on('resize', function() {
		if( $(window).width() > 680 && !$(".bstylist__grid").hasClass(".slick-initialized")) {
			console.log("Unslick")
			$(".bstylist__grid").slick("unslick");
		} else {
			$(".bstylist__grid").slick(bstylistgrid);
		}
	});
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


// Menu
$(".js__toggle-menu").click(function() {
	$(this).toggleClass("active");
	$(".js__menu-nav").toggleClass("active");
	$(".js__menu").toggleClass("active");
});


// Parallax
var rellax;
document.addEventListener("DOMContentLoaded", function() {
	console.log("Rellax");
	rellax = new Rellax('.rellax', {
		speed: 1
	});

	// var rellax = new Rellax('.rellax', {
	// 	speed: -2,
	// 	center: false,
	// 	wrapper: null,
	// 	round: true,
	// 	vertical: true,
	// 	horizontal: false
	// });
});




// Load More
function refreshFloat() {
	var flag = true;
	$(".bstylist__item.active").each(function() {
		if(flag) {
			$(this).css("float", "left");
			flag = false;
		} else {
			$(this).css("float", "right");
			flag = true;
		}
	});
}
refreshFloat();

// function scanStylistItem() {
// 	var arr = [];
// 	$(".bstylist__item").each(function () {
// 		arr.push({
//
// 		});
// 	});
// }

$(".js__more-article").click(function() {
	var el = $(".js__stylistitem.active");
	var lena = $(".js__stylistitem").length;
	var leng = el.length - 1;

	if(!(leng + 1 == lena)) {
		$("html, body").animate({
			scrollTop: $(".js__stylistitem").eq(leng).offset().top
		});

		$(".js__stylistitem").eq(leng + 1).fadeIn().addClass("active");
		$(".js__stylistitem").eq(leng + 2).fadeIn().addClass("active");
		$(".js__stylistitem").eq(leng + 3).fadeIn().addClass("active");
		$(".js__stylistitem").eq(leng + 4).fadeIn().addClass("active");
		refreshFloat();
		rellax.refresh();
	}
});
