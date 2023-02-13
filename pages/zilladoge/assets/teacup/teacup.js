$(document).ready(function () {

	let seedRoundCountDown = new Date(Date.UTC(2021, 9, 10, 10, 0, 0)).getTime();

	let seedRoundInterval = setInterval(function () {

		let now = new Date().getTime();
		let distance = seedRoundCountDown - now;
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		if ($('#the_round_count_down').length) {
			$('#the_round_count_down .counter-days').text(days <= 0 ? 0 : days);
			$('#the_round_count_down .counter-hours').text(hours <= 0 ? 0 : hours);
			$('#the_round_count_down .counter-minutes').text(minutes <= 0 ? 0 : minutes);
			$('#the_round_count_down .counter-seconds').text(seconds <= 0 ? 0 : seconds);
		}

		let inWhitelist = -1;
		if (typeof selectedAccount !== 'undefined') {
			let listWhitelist = WHITELIST_2000.concat(WHITELIST_200);
			inWhitelist = listWhitelist.indexOf(selectedAccount.toLowerCase());
		}

		if (distance < 0) {
			clearInterval(seedRoundInterval);
			$('.btn-buy-token').attr('disabled', false);
		} else {
			let now = (parseInt(Date.now() / 1000));
			if (now > 1633770000) {
				$('.btn-buy-token').attr('disabled', false);
			} else {
				$('.btn-buy-token').attr('disabled', true);
			}
		}
	}, 1000);

});

$(".home1_news").slick({

	// normal options...
	slidesToShow: 3,
	infinite: true,
	dots: false,
	arrows: false,
	autoplay: true,
	// the magic
	responsive: [{

		breakpoint: 1024,
		settings: {
			slidesToShow: 3,

		}

	}, {

		breakpoint: 600,
		settings: {
			slidesToShow: 2,

		}

	}, {

		breakpoint: 300,
		settings: "unslick" // destroys slick

	}]
});

$(document).ready(function () {

	if ($('#back-to-top').length) {
		var scrollTrigger = 600;
		var scrollTrigger2 = 50;

		backToTop = function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > scrollTrigger) {
				$('#back-to-top').addClass('show');
			} else {
				$('#back-to-top').removeClass('show');
			}


			if (scrollTop > scrollTrigger2) {
				$('nav.navbar').addClass('bg-dark');
			} else {
				$('nav.navbar').removeClass('bg-dark');
			}

		};

		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});


	}
});

$('.copyform .copybtn').click(function () {
	/* Select the text field */
	var copyText = $(this).parents('.copyform').children('.copydata');
	copyText.select();
	/* Copy the text inside the text field */
	document.execCommand("copy");
	var thistarget = $(this);
	thistarget.addClass('copied');
	setTimeout(function () {
		thistarget.removeClass('copied');
	}, 2000);
});

function copyFunction(thetarget) {
	console.log('#' + thetarget);
	/* Get the text field */
	var copyText = document.getElementById(thetarget);

	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */

	/* Copy the text inside the text field */
	document.execCommand("copy");

	$('#' + thetarget).addClass('copied');
	setTimeout(function () {
		$('#' + thetarget).removeClass('copied');
	}, 2000);
}

$('#investment_home_4 .item a').click(function (event) {
	event.preventDefault();

	$(this).siblings('.short').removeClass('short');
	$(this).remove();
});

$('#investment_home_9 .item a').click(function (event) {
	event.preventDefault();
	var theitem = $(this).parents('.item');
	theitem.children(".short").removeClass('short');
	$(this).remove();
});

$('.mobileNav a').click(function (event) {
	/* Act on the event */

	$("#mobileCheck").prop("checked", false);
});

$('.navbar a').click(function (event) {
	/* Act on the event */
	var theurl = $(this).attr('href');
	if (theurl.indexOf("#") >= 0) {
		event.preventDefault();
		if (theurl == '#') {
			$(window).scrollTop(0);
		} else {
			$('html, body').animate({scrollTop: $(theurl).offset().top - 100}, '0');
		}

		$('.navbar a.active').removeClass('active');
		$(this).addClass('active');
	}


});

var addClassOnScroll = function () {
	var windowTop = $(window).scrollTop();
	$('section[id]').each(function (index, elem) {
		var offsetTop = $(elem).offset().top;
		var outerHeight = $(this).outerHeight(true);

		if (windowTop > (offsetTop - 110) && windowTop < (offsetTop + outerHeight)) {
			var elemId = $(elem).attr('id');
			$(".navbar a.active").removeClass('active');
			$(".navbar a[href='#" + elemId + "']").addClass('active');
		} else if (windowTop == 0) {
			$(".navbar a.active").removeClass('active');
			$(".navbar a.thetop").addClass('active');
		}
	});
};

$(function () {
	$(window).on('mousewheel', function () {
		addClassOnScroll();
	});
});

$('#bnb_amount').keyup(function (event) {
	let displayElement = $(this).data('target');
	let buyAmount = parseFloat($(this).val()) || 0;
	let rate = $('#price_bnb').val();
	let receiveAmount = formatNumber(buyAmount * rate, 4);
	$('#' + displayElement).text(receiveAmount);
});

$('#bsc_usd_amount').keyup(function (event) {
	let displayElement = $(this).data('target');
	let buyAmount = parseFloat($(this).val()) || 0;
	let rate = $('#price_bsc_usd').val()
	let receiveAmount = formatNumber(buyAmount * rate, 4);
	$('#' + displayElement).text(receiveAmount);
});

$('#busd_amount').keyup(function (event) {
	let displayElement = $(this).data('target');
	let buyAmount = parseFloat($(this).val()) || 0;
	let rate = $('#price_busd').val()
	let receiveAmount = formatNumber(buyAmount * rate, 4);
	$('#' + displayElement).text(receiveAmount);
});

let truncate = function (fullStr) {
	let separator = '...';
	let sepLen = separator.length,
		frontChars = 4,
		backChars = 4;

	return fullStr.substr(0, frontChars) +
		separator +
		fullStr.substr(fullStr.length - backChars);
};

$(document).ready(function () {
	$('.btn.address').each(function (index, el) {
		var theaddress = $(this).text();
		console.log(theaddress);
		var theaddress = truncate(theaddress);
		$(this).text(theaddress);
	});
});

function formatNumber(number, decimals = 8, dec_point, thousands_sep) {
	// Strip all characters but numerical ones.
	number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
	let n = !isFinite(+number) ? 0 : +number,
		prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
		sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
		dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
		s = '',
		toFixedFix = function (n, prec) {
			var k = Math.pow(10, prec);
			return '' + Math.round(n * k) / k;
		};
	// Fix for IE parseFloat(0.55).toFixed(0) = 0;
	s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	if (s[0].length > 3) {
		s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	}
	if ((s[1] || '').length < prec) {
		s[1] = s[1] || '';
		s[1] += new Array(prec - s[1].length + 1).join('0');
	}
	return s.join(dec);
}
