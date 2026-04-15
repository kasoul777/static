var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
$(function(){

    //banner图   
    var swiper1 = new Swiper('.index-banner .swiper-container', {
        pagination: {
            el: '.index-banner .swiper-pagination',
            clickable: true,
        },
        watchOverflow: true,
        speed: 1000,
        effect:'fade',
        autoplay: true,
        on: {
            resize: function(){
                this.update();
            }
        }
    });


    //发展
    var swiper2 = new Swiper('.development-swiper .swiper-container', {
        watchOverflow: true,
        speed: 1000,
        effect:'left',
        slidesPerView: 'auto',
        spaceBetween: 100,
centerInsufficientSlides: true,
        breakpoints: {
            480: {
                spaceBetween: 20,
        //slidesPerView: 'auto',
centerInsufficientSlides: false,
            }
        }
    });

    
});






}

/*
     FILE ARCHIVED ON 00:05:48 Mar 06, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:13:37 Apr 14, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 3.272
  exclusion.robots: 0.094
  exclusion.robots.policy: 0.078
  esindex: 0.011
  cdx.remote: 22.079
  LoadShardBlock: 352.738 (3)
  PetaboxLoader3.datanode: 126.784 (4)
  PetaboxLoader3.resolve: 13016.959 (2)
  load_resource: 12970.611
*/