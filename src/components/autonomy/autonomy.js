import Plugin from "@/js/core/Plugin";
import init from "@/js/core/init";
import Swiper from "swiper";


class Autonomy extends Plugin {
  defaults() {
    return {
        sliderSettings: {
          pagination: {
            el:'.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
           scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
          },
        }
    };
  }

  init() {
  this.mySwiper = new Swiper('.swiper-container', this.options.sliderSettings);
  }

  buildCache() {}

  bindEvents() {}

}

export default init(Autonomy, "autonomy");
