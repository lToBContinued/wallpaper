"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/classify/classify.js";
  "./pages/user/user.js";
  "./pages/classlist/classlist.js";
  "./pages/preview/preview.js";
  "./pages/notice/notice.js";
  "./pages/search/search.js";
}
const _sfc_main = {
  onLaunch: function() {
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
