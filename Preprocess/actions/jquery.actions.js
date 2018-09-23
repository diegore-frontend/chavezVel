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
		$elhead.toggleClass('ap-header--ov-white');
		$('.ap-op-sect--lawyers').toggleClass('ap-op-sect--lawyers-active')
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
		filter: ':not(.ap-nav-link--ext-link)',
		easing: 'swing'
	});
});

$(document).ready(function(){
	getlatestNew();
	menu();
	sliders();
	heightAr();
	acordion();
});


$(window).smartresize(function(){
	heightAr();
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

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 20.6158426, lng: -87.0944725},
		zoom: 13,
		disableDefaultUI: true
	});
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


function heightAr() {
	var $hbas = $('.ap-area-wt').innerHeight() + 'px',
			$whos = $('.ap-who-img-bg').height() + 'px',
			$wwdt = $(window).width();

  if ($wwdt >= 1000) {
  	$(".ap-area-dsk").css("height", $hbas);
  	$(".ap-who-block").css("height", $hbas);
  }

  clearHeight();

  function clearHeight() {
  	if (($wwdt <= 1000)) {
  		$(".ap-area-dsk").removeAttr('style');
  		$(".ap-who-block").removeAttr('style');
  	}
  }

}

function acordion() {
	var $activeClass = 'ap-ar-info-head--active',
			$infoBox = '.ap-ar-info-box';

	if (detectmob()) {

		$('.ap-ar-info').find('.ap-ar-info-head').click(function(){
			$(this).next().css('height', 'auto').slideToggle('fast');

			if ($(this).find('.ap-ar-toggl').hasClass('ap-ar-toggl-up')) {
				$(this).find('.ap-ar-toggl').removeClass('ap-ar-toggl-up').addClass('ap-ar-toggl-down');
			} else {
				$('.ap-tabs-box').find('.ap-ar-toggl').removeClass('ap-ar-toggl-up').addClass('ap-ar-toggl-down');
				$(this).find('.ap-ar-toggl').removeClass('ap-ar-toggl-down').addClass('ap-ar-toggl-up');
			}

			//Hide the other panels
     	$('.ap-ar-info-box').not($(this).next()).slideUp('fast');
		});
	}
}

function getlatestNew() {
	var data = [ {
	    url: 'https://www.chavezvelascoabogados.com/blog', // url string rquired
	    selector: 'div#comp-il2tzr1b_MediaLeftPage_Array__0_0_thisinlineContent', // selector string rquired
	    loop: false, // each boolean rquired
	    result: [
	        {
	            name: 'title', // key string rquired
	            find: 'div#comp-il2tzr1b_MediaLeftPage_PhotoPost__0_0_0_0_def_7 h2 em', // selector child string rquired
	            grab: {
	                by: 'text', // attribut string rquired
	                value: '' // attribut value string optional
	            }
	        },
	        {
	            name: 'text', // key string rquired
	            find: 'div#comp-il2tzr1b_MediaLeftPage_PhotoPost__0_0_0_0_def_25 p', // selector child string rquired
	            grab: {
	                by: 'text', // attribut string rquired
	                value: '' // attribut value string optional
	            }
	        },
	        {
	            name: 'link', // key string rquired
	            find: 'div#comp-il2tzr1b_MediaLeftPage_PhotoPost__0_0_0_0_def_27 a', // selector child string rquired
	            grab: {
	               by: 'attr',
	               value: 'href'
	            }
	        }
	    ]
	}];

	ygrab(data, function(result) {
		var $opDat = JSON.stringify(result),
				$ntitl = result[0].title,
				$nText = result[0].text,
				$nlink = result[0].link;

		$('.ap-nws-slider .ap-tt-sect').html($ntitl);
		$('.ap-nws-slider .ap-news-txt').html($nText);
		$('.ap-nws-slider .ap-news-link').attr('href', $nlink)

		txtellipsis();
	});
}
