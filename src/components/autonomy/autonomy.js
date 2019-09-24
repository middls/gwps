import Plugin from "@/scripts/core/Plugin";
import init from "@/scripts/core/init";
import { swiper, swiperSlide} from "vue-awesome-swiper/src";

class Autonomy extends Plugin {
  defaults() {
    return {};
  }

  init() {}

  buildCache() {}

  bindEvents() {}
}
export default {
  components: {
    swiper,
    swiperSlide
  }
}
export default init(Autonomy, "autonomy");
