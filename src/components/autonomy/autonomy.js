import Plugin from "@/scripts/core/Plugin";
import init from "@/scripts/core/init";

class Autonomy extends Plugin {
  defaults() {
    return {};
  }

  init() {}

  buildCache() {}

  bindEvents() {}
}

export default init(Autonomy, "autonomy");
