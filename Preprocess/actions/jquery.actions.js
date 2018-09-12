var $mScroll = $('.ap-scroll'),
		$mClose = $('.ap-btn-close'),
		$burguer = $('.ap-btn-menu'),
		$burguerCls = 'ap-btn-menu--is-open',
		$menLink = $('.ap-nav-link'),
		$elhead = $('.ap-header'),
		$elnav = $('.ap-header-navigation');

// Waypoints
var waypoints = $('#ap-op-areas').waypoint(function(direction) {
		$elhead.toggleClass('ap-header--ov-white')
	}, {
	offset: '25%'
});
var waypoints = $('#ap-op-who').waypoint(function(direction) {
		$elhead.toggleClass('ap-header--ov-white');
		countNumbers();
	}, {
	offset: '25%'
});
var waypoints = $('#ap-op-lawyers').waypoint(function(direction) {
		$elhead.toggleClass('ap-header--ov-white')
	}, {
	offset: '25%'
});


$(function(){
	loader();
	customScroll();

	$('#ap-nav').onePageNav({
		currentClass: 'ap-nav-item--active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing'
	});
});

$(document).ready(function(){
	 menu();
	 txtellipsis();
	 sliders();
	 maps();
});

function loader() {
	setTimeout(function () {
		$('.ap-modal--loading').fadeOut(function () {
			$('body.ap').addClass('ap-is--ready');
			$('.ap-main').removeClass('ap-loading').addClass('ap-main--ready');
			$(this).removeClass('ap-modal--is-visible').removeAttr('style');
		});
	}, 3000);
}

function menu() {
	burguerMenu();

	function burguerMenu() {
		$burguer.on('click', function(){showMenu()});
		$menLink.on('click', function(){showMenu()});
	}

	function showMenu() {
		$elhead.toggleClass('ap-header--is-open');
		$burguer.toggleClass($burguerCls);

		if ($burguer.hasClass($burguerCls)) {
			$elnav.addClass('ap-header-navigation--is-open');
		} else {
			$elnav.addClass('ap-header-navigation--is-leaving')
			setTimeout(function(){
				$elnav.removeClass('ap-header-navigation--is-leaving ap-header-navigation--is-open');
			},2000);
		}

		$('.ap-hd-link').on('click', function(){
			returnburguer();
		});
	}

	function returnburguer() {
		$elnav.removeClass('ap-header-navigation--is-leaving ap-header-navigation--is-open');
		$burguer.toggleClass($burguerCls);
	}
}

function customScroll() {
	if ($mScroll.length) {
		$mScroll.perfectScrollbar({
			suppressScrollX:true
		});
	}
}

function txtellipsis() {
	$('.ap-news-txt').ellipsis({
		responsive: true
	});
}

function sliders() {
	var swiper = new Swiper('.ap-top-slider', {
		pagination: {
			el: '.swiper-pagination'
		},
		autoplay: {
			delay: 5000,
		},
		speed: 1000,
		delay: 6000
	});
}

function maps() {
	var map;

	function initialize() {
	  var myLatlng = new google.maps.LatLng(20.6158426,-87.0944725);
	  var mapOptions = {
	    zoom: 13,
	    disableDefaultUI: true,
	    center: myLatlng
	  };
	  map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);

	  var marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    title: 'Chávez Velásco | Abogados'
	  });

	}
	google.maps.event.addDomListener(window, 'load', initialize);
}

function countNumbers() {
	$('.ap-who-data--number').each(function () {
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
