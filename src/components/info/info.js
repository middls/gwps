import Plugin from "@/scripts/core/Plugin";
import init from "@/scripts/core/init";

class Info extends Plugin {
  defaults() {
    return {};
  }

  init() {}

  buildCache() {}

  bindEvents() {}
}

export default init(Info, "info");
