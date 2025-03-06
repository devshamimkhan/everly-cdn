// Swiper instance for ".heroSliders"
var heroSlidersSwiper = new Swiper(".heroSliders", {
	autoplay: {
		delay: 3000,
	},
	effect: 'slide',
	speed: 800,
	pagination: {
		el: ".swiper-pagination",
	},
});

// Swiper instance for ".influencersSliders"
var influencersSlidersSwiper = new Swiper(".influencersSliders", {
	autoplay: {
		delay: 3000,
	},
	effect: 'slide',
	speed: 800,
	pagination: {
		el: ".swiper-pagination",
	},
});

// Swiper instance for ".catCarousel"
var catCarouselSwiper = new Swiper(".catCarousel", {
	breakpoints: {
		320: {
			slidesPerView: 4.5,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 6,
			spaceBetween: 20,
		},
	},
	effect: 'slide',
	speed: 800,
});


// Swiper instance for ".featuredSliders"
var featuredSlidersSwiper = new Swiper(".featuredSliders", {
	breakpoints: {
		320: {
			slidesPerView: 2.5,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
	},
	effect: 'slide',
	speed: 800,
});

// Swiper instance for ".spTabContentCaro"
var spTabContentCaroSwiper = new Swiper(".spTabContentCaro", {
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 15,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 15,
		},
	},
	effect: 'slide',
	speed: 800,
	pagination: {
		el: ".swiper-pagination",
	},
});

// Swiper instance for ".fpTabContentCaro"
var fpTabContentCaroSwiper = new Swiper(".fpTabContentCaro", {
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 15,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 15,
		},
	},
	effect: 'slide',
	speed: 800,
	pagination: {
		el: ".swiper-pagination",
	},
});

// Swiper instance for ".fpTablistCaro"
var fpTablistCaroSwiper = new Swiper(".fpTablistCaro", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: false,
    freeMode: true,
	effect: 'slide',
	speed: 800,
});

// Swiper instance for ".fptab_slider"
var fptabSliderSwiper = new Swiper(".fptab_slider", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: false,
    freeMode: true,
	effect: 'slide',
	speed: 800,
});



// script.js
// document.addEventListener('DOMContentLoaded', function () {
//   const toggleButton = document.getElementById('fgbmenu-toggle');
//   const closeButton = document.getElementById('fgbMenuclose');

//   const fgbmenuac = document.getElementById('fgbmenuac-toggle');
//   const fgbmenuacclose = document.getElementById('fgbmenuacclose');

//   const menuList = document.getElementById('fgbmenuList');
//   const fgbMenu_ac = document.getElementById('fgbmenuac');

//   toggleButton.addEventListener('click', function () {
//       menuList.classList.toggle('open');
//   });

//   closeButton.addEventListener('click', function () {
//       menuList.classList.remove('open');
//   });

//   fgbmenuac.addEventListener('click', function () {
//     fgbMenu_ac.classList.toggle('open');
//   });

//   fgbmenuacclose.addEventListener('click', function () {
//     fgbMenu_ac.classList.remove('open');
//   });
// });

jQuery(document).ready(function($) {
    $('.reset_variations').on('click', function() {
        $('.variation-img img').removeClass('var-selected');
    });
});

jQuery(document).ready(function($) {
	$('#eye-makeup-tab').addClass('active');
	$('#eye-makeup').addClass('active show');
	
	$('#face-wash-tab').addClass('active');
	$('#face-wash').addClass('active show');
	
	$('#hair-mask-tab').addClass('active');
	$('#hair-mask').addClass('active show');

	$('#eye-makeup-sm-tab').addClass('active');
	$('#eye-makeup-sm').addClass('active show');
	
	$('#face-wash-sm-tab').addClass('active');
	$('#face-wash-sm').addClass('active show');
	
	$('#hair-mask-sm-tab').addClass('active');
	$('#hair-mask-sm').addClass('active show');
	
});

var swiper = new Swiper(".product_varSliders", {
  slidesPerView: 4.5,
  spaceBetween: 5,
  effect: 'slide',
  speed: 800, 
});



var variationImageSlider = new Swiper('.variation-image-slider-container', {
  freeMode: true,
  breakpoints: {
    320: {
        slidesPerView: 4.5,
        spaceBetween: 5,
    },
    effect: 'slide',
    speed: 800, 

},
});



jQuery(document).ready(function($) {

    // Handle variation image swatch clicks
    $('.variation-image-slider .swiper-slide').on('click', function() {
        var $slide = $(this);
        var value = $slide.data('value');
        var attribute_name = $slide.data('attribute');
        var $selectOption = $('.variations_form select[name="attribute_' + attribute_name + '"]');

        // Mark the clicked swatch as selected
        $slide.addClass('selected').siblings().removeClass('selected');

        // Update the select dropdown value to match the clicked swatch
        $selectOption.val(value).trigger('change');

        function capitalizeWords(str) {
          return str.replace(/\b\w/g, function(char) {
              return char.toUpperCase();
          });
        }
        
        $('.variatio-name').text(capitalizeWords(value));

    });
});




document.addEventListener("DOMContentLoaded", function () {
    const isMobile = window.matchMedia("(max-width: 768px)");
    
    if (isMobile.matches) { 
 		const headerElement = document.querySelector(".whb-row.whb-general-header.whb-sticky-row.whb-without-bg.whb-border-fullwidth.whb-color-dark.whb-flex-flex-middle");       
		window.addEventListener("scroll", function () {
			const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

			if (currentScroll > 0) {
				// When scrolling down (away from top)
				headerElement.style.transition = "0.3s";
				headerElement.style.display = "none";
				headerElement.style.pointerEvents = "none";
			} else {
				// When at the very top
				headerElement.style.transition = "0.3s";
				headerElement.style.display = "block";
				headerElement.style.pointerEvents = "auto";
			}
		});
    }
});


