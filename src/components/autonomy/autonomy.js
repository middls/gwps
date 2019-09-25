import Plugin from "@/js/core/Plugin";
import init from "@/js/core/init";
import Swiper from "swiper";


class Autonomy extends Plugin {
  defaults() {
    return {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },

    };
  }

  init() {

  }

  buildCache() {
     this.mySwiper = new Swiper()
  }


  bindEvents() {}
}

export default init(Autonomy, "autonomy");
