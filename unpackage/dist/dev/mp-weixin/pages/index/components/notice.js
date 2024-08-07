"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _component_uni_icons = common_vendor.resolveComponent("uni-icons");
  _component_uni_icons();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      type: "sound-filled",
      size: "20",
      color: "#28b389"
    }),
    b: common_vendor.f(4, (item, k0, i0) => {
      return {
        a: item
      };
    }),
    c: common_vendor.p({
      type: "right",
      size: "16",
      color: "#28b389"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c772460e"]]);
wx.createComponent(Component);
