import Plugin from "@/js/core/Plugin";
import init from "@/js/core/init";
import Swiper from "swiper";

class Slider extends Plugin {
    defaults() {
        return {
            sliderSettings: {
                slidesPerView: 1.1,
                centeredSlides: false,
                spaceBetween: 10,
                autoHeight: true,
                // setWrapperSize: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: false,
                },
            }
        };
    }

    init() {
        // this.changePaddingLeft();
        // window.onresize = this.changePaddingLeft;
        this.mySwiper = new Swiper('.swiper-container', this.options.sliderSettings);
    }

    buildCache() {
    }

    bindEvents() {
    }

    // changePaddingLeft() {
    //     let sliderBlock = document.querySelector('.slider');
    //     let headerWrapper = document.querySelector('.header__wrapper');
    //     let containerWidth = headerWrapper.offsetWidth;
    //
    //     sliderBlock.style.paddingLeft = ((window.innerWidth - containerWidth) / 2) + 'px';
    // }
}

export default init(Slider, "slider");
