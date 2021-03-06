import Plugin from "@/js/core/Plugin";
import init from "@/js/core/init";
import Swiper from "swiper";

class Slider extends Plugin {
    defaults() {
        return {
            sliderSettings: {
                slidesPerView: 1.1,
                centeredSlides: true,
                spaceBetween: 10,
                autoHeight: true,

                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: false,
                },
            }
        };
    }

    init() {
        this.mySwiper = new Swiper('.swiper-container', this.options.sliderSettings);
    }

    buildCache() {
    }

    bindEvents() {

    }
}

export default init(Slider, "slider");
