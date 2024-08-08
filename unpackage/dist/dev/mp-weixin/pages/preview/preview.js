"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  ImageMask();
}
const ImageMask = () => "./components/image-mask.js";
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, k0, i0) => {
          return {
            a: common_vendor.o(maskChange, item),
            b: item
          };
        }),
        b: common_assets._imports_0$1,
        c: maskState.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
