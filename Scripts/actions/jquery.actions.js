// Variables
var $mScroll = $('.ap-scroll'),
		$mClose = $('.ap-btn-close'),
		$termsData = '',
		$termsDataIns = '',
		$card = $('.ap-form--info'),
		$tltip = $('.ap-field-ttip'),
		$tltipvis = 'ap-field-ttip--visible',
		$burguer = $('.ap-btn-menu'),
		$burguerCls = 'ap-btn-menu--is-open',
		$menLink = $('.ap-nav-link'),
		$elhead = $('.ap-header'),
		$elnav = $('.ap-header-navigation');



$(function () {
	slideTop()
	loader();
	explorer();
	burguerMenu();



	$('#ap-nav').onePageNav({
		currentClass: 'ap-nav-item--active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing'
	});


	var waypoints = $('#ap-lid--estadisticas').waypoint(function(direction) {
			countNumbers();
		}, {
		offset: '25%'
	})

	var waypoints = $('#ap-lid-sections').waypoint(function(direction) {
			$elhead.toggleClass('ap-header--visible')
		}, {
		offset: '25%'
	})

	var waypoints = $('#ap-lid--descripcion').waypoint(function(direction) {
			$elhead.toggleClass('ap-header--ov-white')
		}, {
		offset: '25%'
	})

	var waypoints = $('#ap-lid--blog').waypoint(function(direction) {
			$elhead.toggleClass('ap-header--ov-white')
		}, {
		offset: '25%'
	})

	var waypoints = $('#ap-lid--ultimos-entrenamientos').waypoint(function(direction) {
			$elhead.toggleClass('ap-header--ov-white')
		}, {
		offset: '25%'
	})

});

function countNumbers() {
	$('.ap-txt--number').each(function () {
		var $this = $(this);
		jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
			duration: 1000,
			easing: 'swing',
			step: function () {
				$this.text(Math.ceil(this.Counter));
			}
		});
	});
}

function loader() {
	setTimeout(function () {
		if (!isFootball) {
			$('.ap-modal--loading').fadeOut(function () {
				$('.ap-main').removeClass('ap-loading').addClass('ap-main--ready');
				$(this).removeClass('ap-modal--is-visible').removeAttr('style');
			});
		}
	}, 2000);
}

function explorer() {
	if (/MSIE 9/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
		$('body').addClass('ap-ie')
	}
	if (/Edge/i.test(navigator.userAgent)) {
		$('body').addClass('ap-edge');
	}
	if (/rv:11.0/i.test(navigator.userAgent)) {
		$('body').addClass('ap-ie-11')
	}
}



function slideTop() {
	var mySwiper = new Swiper ('.ap-art-slide-container', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
	})
}


function menu() {
	burguerMenu();

	function burguerMenu() {
		$burguer.on('click', function(){showMenu()console.log('Cola')});
		$menLink.on('click', function(){showMenu()});
	}

	function showMenu() {
		$burguer.toggleClass($burguerCls);
		$elnav.toggleClass('ap-header-navigation--is-open');
		$elhead.toggleClass('ap-header--is-open');
	}

}
