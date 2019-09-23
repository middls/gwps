import Plugin from "@/scripts/core/Plugin";
import init from "@/scripts/core/init";

class Header extends Plugin {
  defaults() {
    return {};
  }

  init() {}

  buildCache() {}

  bindEvents() {}
}

export default init(Header, "header");
