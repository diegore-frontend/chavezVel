var $mScroll = $('.ap-scroll'),
		$mClose = $('.ap-btn-close'),
		$burguer = $('.ap-btn-menu'),
		$burguerCls = 'ap-btn-menu--is-open',
		$menLink = $('.ap-nav-link'),
		$elhead = $('.ap-header'),
		$elnav = $('.ap-header-navigation');

$(function(){
	loader();
	customScroll();
});

$(document).ready(function(){
	 menu();
	 txtellipsis();
	 sliders();
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
