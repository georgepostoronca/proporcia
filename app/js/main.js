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
$('#phone').mask("+7 999 999 99 99", {
	autoclear: true
});

