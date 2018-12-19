$(function () {
	$('.nav1').click(function () {
		$('.obj').stop().animate({ 'left': '-300px', 'opacity': '0' });
		$('.obj11').stop().delay(0).animate({ 'left': '0', 'opacity': '1' }, 800, 'easeOutBack');
		$('.obj12').stop().delay(200).animate({ 'left': '200px', 'opacity': '1' }, 800, 'easeOutBack');

		$('.navWrap span').animate({ 'left': '12px' });

		$('.txtTitle img').animate({ 'top': '-100px', 'opacity': '0' });

		$('.txtTitle img').eq(0).stop().delay(200).animate({ 'top': '0', 'opacity': '1' });
		$('.txtTitle img').eq(1).stop().delay(100).animate({ 'top': '80px', 'opacity': '1' });
		$('.txtTitle img').eq(2).stop().delay(0).animate({ 'top': '160px', 'opacity': '1' });
	});

	$('.nav2').click(function () {
		$('.obj').stop().animate({ 'left': '-300px', 'opacity': '0' });
		$('.obj21').stop().delay(0).animate({ 'left': '-30px', 'opacity': '1' }, 800, 'easeOutBack');
		$('.obj22').stop().delay(100).animate({ 'left': '250px', 'opacity': '1' }, 800, 'easeOutBack');
		$('.obj23').stop().delay(200).animate({ 'left': '190px', 'opacity': '1' }, 800, 'easeOutBack');
		$('.navWrap span').animate({ 'left': '246px' });


		$('.txtTitle img').animate({ 'top': '-100px', 'opacity': '0' });
		$('.txtTitle img').eq(3).stop().delay(200).animate({ 'top': '0', 'opacity': '1' });
		$('.txtTitle img').eq(4).stop().delay(100).animate({ 'top': '80px', 'opacity': '1' });
		$('.txtTitle img').eq(5).stop().delay(0).animate({ 'top': '160px', 'opacity': '1' });
	});

	$('.nav3').click(function () {
		$('.obj').stop().animate({ 'left': '-300px', 'opacity': '0' });
		$('.obj31').stop().delay(0).animate({ 'left': '0', 'opacity': '1' }, 800, 'easeOutBack');
		$('.obj32').stop().delay(100).animate({ 'left': '330px', 'opacity': '1' }, 800, 'easeOutBack');


		$('.navWrap span').animate({ 'left': '478px' });

		$('.txtTitle img').animate({ 'top': '-100px', 'opacity': '0' });
		$('.txtTitle img').eq(6).stop().delay(200).animate({ 'top': '0', 'opacity': '1' });
		$('.txtTitle img').eq(7).stop().delay(100).animate({ 'top': '80px', 'opacity': '1' });
		$('.txtTitle img').eq(8).stop().delay(0).animate({ 'top': '160px', 'opacity': '1' });
	});

	$('.nav li').click(function () {
		$('.nav li').removeClass('on');
		$(this).addClass('on');
	});

	$(".btn").on({
		mouseenter: function () {
			$('.btn img').stop().animate({ 'right': '-150px' });
		},
		mouseleave: function () {
			$('.btn img').stop().animate({ 'right': '-125px' });
		}
	});
});