/* ===================================
--------------------------------------
	Boto | Photography HTML Template
	Version: 1.0
	Copyright By: ColorLib
--------------------------------------
======================================*/

'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Navigation
	--------------------*/
    $(".nav-switch").on('click', function (e) {
		e.preventDefault();
        $(".slicknav_btn").click();
	});
	
	$('.nav__menu').slicknav({
		'appendTo' : '.main__menu',
		'openedSymbol': '<i class="fa fa-angle-up"></i>',
		'closedSymbol': '<i class="fa fa-angle-right"></i>'
	});

	/*---------------
		Search
	----------------*/
    $('.search-switch').on('click', function (e) {
		e.preventDefault();
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
	});

	/*-------------------
		Hero Slider
	-------------------*/
	$('.hero-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		centerMode: true,
		arrows: false,
		asNavFor: '.hero-text-slider',
		autoplay: true,
		pauseOnHover:false,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	var hero_slider = $('.hero-slider');

	hero_slider.on('wheel', (function(e) {
		e.preventDefault();
		if (e.originalEvent.deltaY < 0) {
			$(this).slick('slickPrev');
		} else {
			$(this).slick('slickNext');
		}
	}));

	hero_slider.on('click', '.slick-slide', function (e) {
		e.preventDefault();
		var index = $(this).data("slick-index");
		if ($('.slick-slider').slick('slickCurrentSlide') !== index) {
			$('.slick-slider').slick('slickGoTo', index);
		}
	});

	$('.hero-text-slider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		arrows: false,
		asNavFor: '.hero-slider',
	});

	/*-------------------
		Blog Slider
	-------------------*/
	$('.blog__slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		arrows: false,
		centerMode: true,
		centerPadding: '190px',
		slidesToShow: 2,
		autoplay: true,
		pauseOnHover:false,
		responsive: [
			{
				breakpoint: 991,
				settings: {
				centerPadding: '0',
				slidesToShow: 2,
				slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: '0',
				}
			}
		]
	});

	/*-------------------
		Progress Bars
	-------------------*/
	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '"></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%"></div>');
		}
	});

	// file transfer to server
	// scream
	$('#btnUpload1').on('click', function(event) {
    event.preventDefault();
    
    var form = $('#uploadForm1')[0][1].files[0];
    var data = new FormData();
	data.append('file', form, form.name);
    
    $('#btnUpload1').prop('disabled', true);
	
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://34.64.170.176:8000/api/v1/images/?model=scream.ckpt",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000});
	})

	// la muse
	$('#btnUpload2').on('click', function(event) {
    event.preventDefault();
    
    var form = $('#uploadForm2')[0][1].files[0];
    var data = new FormData();
	data.append('file', form, form.name);
    
    $('#btnUpload2').prop('disabled', true);
	
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://34.64.170.176:8000/api/v1/images/?model=la_muse.ckpt",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000});
	})

	// Rain princess
	$('#btnUpload3').on('click', function(event) {
    event.preventDefault();
    
    var form = $('#uploadForm3')[0][1].files[0];
    var data = new FormData();
	data.append('file', form, form.name);
    
    $('#btnUpload3').prop('disabled', true);
	
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://34.64.170.176:8000/api/v1/images/?model=rain_princess.ckpt",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000});
	})

	// udnie
	$('#btnUpload4').on('click', function(event) {
    event.preventDefault();
    
    var form = $('#uploadForm4')[0][1].files[0];
    var data = new FormData();
	data.append('file', form, form.name);
    
    $('#btnUpload4').prop('disabled', true);
	
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://34.64.170.176:8000/api/v1/images/?model=udnie.ckpt",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000});
	})

	// Wave
	$('#btnUpload5').on('click', function(event) {
    event.preventDefault();
    
    var form = $('#uploadForm5')[0][1].files[0];
    var data = new FormData();
	data.append('file', form, form.name);
    
    $('#btnUpload5').prop('disabled', true);
	
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://34.64.170.176:8000/api/v1/images/?model=wave.ckpt",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000});
	})

	// wreck
	$('#btnUpload6').on('click', function(event) {
    event.preventDefault();
    
    var form = $('#uploadForm6')[0][1].files[0];
    var data = new FormData();
	data.append('file', form, form.name);
    
    $('#btnUpload6').prop('disabled', true);
	
    $.ajax({
        type: "POST",
        enctype: 'multipart/form-data',
        url: "http://34.64.170.176:8000/api/v1/images/?model=wreck.ckpt",
        data: data,
        processData: false,
        contentType: false,
        cache: false,
        timeout: 600000});
	})

})(jQuery);

