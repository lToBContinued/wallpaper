"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  ThemeItem();
}
const ThemeItem = () => "../../components/global/theme-item.js";
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(15, (item, k0, i0) => {
          return {
            a: item,
            b: "6bcfa975-0-" + i0
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6bcfa975"]]);
wx.createPage(MiniProgramPage);
