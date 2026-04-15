var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
//根据分辨率初始化文字大小
var handlerOrientationChange = function () {
    var width = window.innerWidth <= 320 ? 320 : window.innerWidth >= 1200 ? 1200 : window.innerWidth;
    var fontSize = 100 * (width / 320);
    document.documentElement.style.fontSize = fontSize + 'px';
};
window.onresize = handlerOrientationChange;
setTimeout(function () {
    handlerOrientationChange();
}, 0);

$(function(){

	$("nav li").each(function(){
		var id = $(this).attr("data-id");
		$(this).on({
			"mouseenter": function(){
				$(".sub-nav[data-name="+id+"]").stop().slideDown(400);
			},
			"mouseleave": function(){
				$(".sub-nav[data-name="+id+"]").stop().slideUp(400);
			},
		})
	})
	$(".sub-nav").each(function(){
		$(this).on({
			"mouseenter": function(){
				$(this).stop().slideDown(400);
			},
			"mouseleave": function(){
				$(this).stop().slideUp(400);
			},
		})
	})

	$(".side-trigger").on("click",function(){
		$("body").addClass("open-side");
		swiperNav.update();
	})
	$(".close-nav").on("click",function(event){
		if($("body").hasClass("open-side")){
			event.stopPropagation();
			$("body").removeClass("open-side");
		}
	})
	$(".nav-content .sub-nav-tit span").on("click",function(){
		$(".nav-content .side-nav-sub").stop().slideUp(300);
		$(this).parent().siblings(".side-nav-sub").stop().slideToggle(300,function(){
			swiperNav.update();
		});
	})

	/*回到顶部*/
	$(window).scroll(function(){
		var winTop=$(window).scrollTop();
		var winHeight=$(window).height();
		if(winTop+winHeight>900){
			$(".go-top").show();
		}else{
			$(".go-top").hide();
		};
	})
	$('.go-top').on('click',function(){
		$('html,body').animate({scrollTop: '0px'}, 300);
	});

	// about-2
    $(".history-list").each(function(){
        var t = $(this);
        t.find(".history-list-item:odd").addClass("odd");
        t.find(".history-list-item:even").addClass("even");
    })
    $(".history-list:first").show();
    $(".history-swiper .swiper-slide").each(function(e){
        $(this).click(function(){
            $(".history-list").hide().eq(e).show();
            swiperHistory.slideTo(e);
            $(this).addClass("on").siblings().removeClass("on");
        })
    })

    $('.history-list-item .content .text-list .text-list-item.y h4 i').on('click', function(){
        var $this = $(this);
        $this.parent().parent().children('.drop-down').slideToggle()
    })

	// about-4
    $(".director-tit.on").next(".director-detail").show();
    $(".director-tit").on("click", function() {
        $(".director-tit").removeClass("on");
        $(".director-detail").stop().slideUp(300);
        $(this).addClass("on").next(".director-detail").stop().slideDown(300);
    })

	// category-5
    $(".research-list li").each(function(e) {
        $(this).on("click mouseenter", function() {
            $(this).addClass("on").siblings().removeClass("on");
            $(".tech-research-item").hide().eq(e).show();
        })
    })

	// tinynav
	$('.select_menu_ul').tinyNav();

})



var swiperNav = new Swiper('.nav-content .swiper-container', {
	direction: 'vertical',
	slidesPerView: 'auto',
	freeMode: true,
	scrollbar: {
		el: '.nav-content .swiper-scrollbar',
	},
	on: {
		resize: function(){
			this.update();
		},
	},
});
}

/*
     FILE ARCHIVED ON 00:05:22 Mar 06, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:13:23 Apr 14, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.714
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.068
  esindex: 0.008
  cdx.remote: 55.156
  LoadShardBlock: 294.274 (3)
  PetaboxLoader3.datanode: 130.342 (4)
  load_resource: 36.493
*/