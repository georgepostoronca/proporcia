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
//= include ./lax.min.js
//= include ./aos.min.js
//= include ./browser-deeplink.min.js

// Include All JS
//= include ../block/**/*.js


// Zoom
// function parallax() {
// 	var $slider = document.querySelector(".zoom");

// 	var yPos = window.pageYOffset / $slider.dataset.speed;
// 	yPos = -yPos;

// 	var coords = '0% '+ yPos + 'px';

// 	// $slider.style.backgroundPosition = coords;
// 	console.log(yPos)
// 	// $slider.style.transform = "scale("+  +")"
// }


// window.addEventListener("scroll", function(){
// 	parallax();	
// });

// Parallax
var rellax;
document.addEventListener("DOMContentLoaded", function () {
	// console.log("Rellax");
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

// LAX
window.onload = function () {
	lax.setup() // init

	var updateLax = function () {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}


// AOS
AOS.init({
	// disable: "mobile",
	startEvent: "load",
	delay: 0,
	disable: false,
	once: true,
	duration: 600,
});

// SVG
svg4everybody();

// Phone Mask
$('.phone').each(function () {
	$(this).mask("+7 999 999 99 99", {
		autoclear: true
	});
})

$.validator.setDefaults({
	debug: false,
	success: 'valid',
	rules: {
		email: {
			required: true,
			email: true,
		}
	},
	errorPlacement: function (error, element) {
		$(this).removeClass('valid');
		$(this).addClass('error');
	},
	success: function (label, element) {
		$(this).removeClass('error');
		$(this).addClass('valid');
	},
	submitHandler: function (form) {
		var data = $(form).serialize();

		$.post({
			url: "mail.php",
			data: data,
			success: function (res) {
				$.fancybox.close();
				$.fancybox.open({
					src: '#popup-postform',
					type: 'inline'
				});

				setInterval(function () {
					$.fancybox.close();
				}, 10000)
			}
		});

		form.reset();
	}
});

$("form").each(function (index, item) {
	$(item).validate();
});


// ===========================
// ===========================
// ===========================

try {
	if ($(".brands-slider").length) {
		var brandslider = {
			arrows: false,
			dots: true,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 20,
			responsive: [{
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
			}]
		}
		$(".brands-slider").slick(brandslider);

		$(window).on('resize', function () {
			if ($(window).width() > 720 && !$(".brands-slider").hasClass('slick-initialized')) {
				$(".brands-slider").slick(brandslider);
			}
		});
	}
} catch (error) {

}



try {
	if ($(".teamslider").length) {
		var teamslider = $(".teamslider").slick({
			infinite: true,
			adaptiveHeight: true,
			arrows: false,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 20,
		});

		$(".teamslider__prev").click(function () {
			$(".teamslider").slick("slickPrev");
		});

		$(".teamslider__next").click(function () {
			$(".teamslider").slick("slickNext");
		});
	}

} catch (error) {

}



try {
	if ($(".studyslide").length) {
		$(".studyslide").slick({
			// lazyLoad: 'ondemand',
			arrows: false,
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 20,
			// adaptiveHeight: true,
			responsive: [{
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
			}, {
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
				}
			}, {
				breakpoint: 400,
				settings: {
					slidesToShow: 1
				}
			}]
		});
	}

} catch (error) {

}



try {
	if ($(".repslider").length) {
		var repsliderSetings = {
			lazyLoad: 'ondemand',
			arrows: false,
			dots: true,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 20,
			responsive: [{
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
			}, {
				breakpoint: 580,
				settings: {
					slidesToShow: 2,
				}
			}, {
				breakpoint: 400,
				settings: {
					slidesToShow: 1
				}
			}]
		}
		$(".repslider").slick(repsliderSetings);

		// $(window).on('resize', function() {
		// 	if( $(window).width() > 992 &&  !$(".repslider").hasClass('slick-initialized')) {
		// 		$(".repslider").slick(repsliderSetings);
		// 	}
		// });
	}

} catch (error) {

}

function debounce(func, wait, immediate) {
	var timeout;
	return function () {
		var context = this,
			args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};



try {
	if ($(".stylistwork__tab").length) {
		var repsliderSetings = {
			arrows: false,
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 20,
			responsive: [{
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
			}, {
				breakpoint: 580,
				settings: {
					slidesToShow: 1,
				}
			}, {
				breakpoint: 400,
				settings: {
					slidesToShow: 1
				}
			}]
		}

		if ($(window).width() < 767 && !$(".stylistwork__tab").hasClass('slick-initialized')) {
			$(".stylistwork__tab").slick(repsliderSetings);
		}

		var myEfficientFn = debounce(function () {
			if ($(window).width() < 767) {
				$(".stylistwork__tab").slick(repsliderSetings);
				// console.log("slick")
			} else {
				// console.log("Unslick")
				$(".stylistwork__tab").slick("unslick");
			}
		}, 250);

		window.addEventListener('resize', myEfficientFn);
	}

} catch (error) {

}




try {
	// bstylist__grid
	if ($(".bstylist__grid").length) {
		var bstylistgrid = {
			arrows: false,
			dots: true,
			infinite: true,
			// slidesToScroll: 1,
			variableWidth: true,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 20,
			// responsive: [
			// 	{
			// 		// breakpoint: 680,
			// 		// settings: "unslick"
			// 	}
			// ]
		}

		if ($(window).width() > 680) {
			try {
				$(".bstylist__grid").slick("unslick");

			} catch (e) {
				// console.log(e)
			}
		} else {
			$(".bstylist__grid").slick(bstylistgrid);
		}

		$(window).on('resize', function () {
			if ($(window).width() > 680 && !$(".bstylist__grid").hasClass(".slick-initialized")) {
				// console.log("Unslick")
				$(".bstylist__grid").slick("unslick");
			} else {
				$(".bstylist__grid").slick(bstylistgrid);
			}
		});
	}

} catch (error) {

}


// Tab
$(".js__tab-ourall").click(function () {
	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".bourall__items").eq(index).fadeIn(500).siblings().hide();
});

$(".js__stylwork-tab").click(function () {
	var index = $(this).index();
	$(this).addClass("active").siblings().removeClass("active");
	$(".stylistwork__pic").eq(index).fadeIn(500).siblings().hide();
});


// Menu
$(".js__toggle-menu").click(function () {
	$(this).toggleClass("active");
	$(".js__menu-nav").toggleClass("active");
	$(".js__menu").toggleClass("active");
	$("body").toggleClass("block-scroll");
});

// Load More
function refreshFloat(length) {
	var flag = true;
	$(".bstylist__item.active").each(function () {
		if (flag) {
			$(this).css("float", "left");
			// $(this).attr("data-aos", "fade-left");

			flag = false;
		} else {
			$(this).css("float", "right");
			// $(this).attr("data-aos", "fade-right");
			flag = true;
		}
	});

	if (length % 2 == 1) {
		$(".loadmore").addClass("loadmore--even")
	} else {
		$(".loadmore").removeClass("loadmore--even")
	}

	AOS.refresh();
}

refreshFloat($(".js__stylistitem.active").length);


$(".js__more-article").click(function () {
	var el = $(".js__stylistitem.active");
	var lena = $(".js__stylistitem").length;
	var leng = el.length - 1;

	if (!(leng + 1 == lena)) {
		// $("html, body").animate({
		// 	scrollTop: $(".js__stylistitem").eq(leng).offset().top + $(".js__stylistitem.active").height()
		// });

		$(".js__stylistitem").eq(leng + 1).fadeIn().addClass("active");
		$(".js__stylistitem").eq(leng + 2).fadeIn().addClass("active");
		$(".js__stylistitem").eq(leng + 3).fadeIn().addClass("active");
		$(".js__stylistitem").eq(leng + 4).fadeIn().addClass("active");
		refreshFloat($(".js__stylistitem.active").length);
		rellax.refresh();
		AOS.refresh();

		// console.log(leng + 1, lena);
		if ((leng + 4 >= lena)) {
			$(this).fadeOut()
		}

		setTimeout(function () {
			refreshFloat($(".js__stylistitem.active").length);
		}, 500)
	} else {
		$(this).fadeOut()
	}
});

// Load More review
$(".js__readrew-more").click(function () {
	var el = $(".js__readrew.active");
	var lena = $(".js__readrew").length;
	var leng = el.length - 1;

	// console.log(leng + 4, lena)

	if (!(leng + 1 == lena)) {
		// $("html, body").animate({
		// 	scrollTop: $(".js__readrew").eq(leng).offset().top
		// });

		$(".js__readrew").eq(leng + 1).fadeIn().addClass("active");
		$(".js__readrew").eq(leng + 2).fadeIn().addClass("active");
		$(".js__readrew").eq(leng + 3).fadeIn().addClass("active");
		$(".js__readrew").eq(leng + 4).fadeIn().addClass("active");

		if ((leng + 4 >= lena)) {
			$(this).fadeOut()
		}
	} else {
		$(this).fadeOut()
	}
});

// Open Review
var flagReadrew = false;
$(".js__openrew").click(function () {
	if (flagReadrew) {
		$(this).find("span").text("Читать отзывы")
		flagReadrew = false;
	} else {
		$(this).find("span").text("Скрыть отзывы")
		flagReadrew = true;
	}
	$(".readrew").fadeToggle().toggleClass("active");
});


// Menu Anchor
$("[data-anchor]").each(function () {
	$(this).on("click", function (e) {
		e.preventDefault();
		var href = $(this).attr("href") || $(this).data("anchor");
		$("html, body").animate({
			scrollTop: $(href).offset().top - 50
		}, 1000);

		$(".js__toggle-menu").removeClass("active");
		$(".js__menu-nav").removeClass("active");
		$(".js__menu").removeClass("active");
		$("body").removeClass("block-scroll");
	});
});



// Android iOS Link
deeplink.setup({
    iOS: {
        appName: "PROпорция",
		appId: "id1477303478",
		storeUrl: "https://apps.apple.com/ru/app/pro%D0%BF%D0%BE%D1%80%D1%86%D0%B8%D1%8F/id1477303478"
    },
    android: {
		appId: "com.arnica.network959",
		storeUrl: "https://play.google.com/store/apps/details?id=com.arnica.network959"
    }
});

$(".js__isoandroid").click(function(event) {
	event.preventDefault();
	deeplink.open("myapp://object/xyz");
});

// ToTop
$(window).scroll(function () {
	if($(window).scrollTop() >= $(window).height() / 1.5) {
		$(".totop").addClass("active")
	} else {
		$(".totop").removeClass("active")
	}

	if($(window).scrollTop() + $(window).height() == $(document).height()) {
		$(".totop").addClass("end")
	} else {
		$(".totop").removeClass("end")
	}
});

$(".js__totop").click(function() {
	var body = $("html, body");
	body.stop().animate({scrollTop:0}, 800, 'swing');
});
