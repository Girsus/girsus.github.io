$( document ).ready(function() {
   
    $('.menu-btn').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('menu-btn_active');
        $('.menu-nav').toggleClass('menu-nav_active');
      });

    scrollSpy();
    if($(window).width > 500){
    var canonHeight = $('.about_me').height(),
    windowH = $( window ).height();
    if(canonHeight<windowH) $('.about_me').css('height',windowH);
    }
    

    $( window ).resize(function() {
        if($(window).width > 500){
        if(canonHeight<windowH) $('.about_me').css('height',windowH);
        else{
            $('.about_me').css('height',canonHeight);
        }
    }
    });

	$(".menu-nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 60;
		$('body,html').animate({scrollTop: top}, 1500);
    });

    $(".nav_menu ul li").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top - 60;
		$('body,html').animate({scrollTop: top}, 1500);
    });
    
});

$(window).scroll(function() {
	scrollSpy();
});

function scrollSpy(){
	$(".nav_menu>ul>li>a").removeClass("active_item");

	var divs = [];
	$(".nav_menu>ul>li>a").each(function(i) {
		var appo = $(this).attr("target");
        divs[i] = $("#" + appo).offset().top;
        
	});
	var pos = $(window).scrollTop();
	var off = ($(window).height()) / 2;

	pos = pos + off;

	var index = 0;

	for (index = 0; index < divs.length; index++) {
		if (pos < divs[index]) {
			break;
		}
	}
	index--;
	$(".nav_menu>ul>li:eq(" + index + ") a").addClass("active_item");
};
