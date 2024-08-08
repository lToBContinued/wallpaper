"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (CustomNavBar + ThemeItem)();
}
const ThemeItem = () => "../../components/global/theme-item.js";
const CustomNavBar = () => "../../components/global/custom-nav-bar.js";
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "分类"
        }),
        b: common_vendor.f(15, (item, k0, i0) => {
          return {
            a: item,
            b: "6bcfa975-1-" + i0
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6bcfa975"]]);
wx.createPage(MiniProgramPage);
