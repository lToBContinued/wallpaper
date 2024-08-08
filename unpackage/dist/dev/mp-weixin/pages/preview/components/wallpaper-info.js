"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_rate = () => "../../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "wallpaper-info",
  setup(__props) {
    const infoPopup = common_vendor.ref(null);
    const checkDetail = () => {
      infoPopup.value.open();
    };
    const closePopup = () => {
      infoPopup.value.close();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "info",
          size: "24"
        }),
        b: common_vendor.o(checkDetail),
        c: common_vendor.p({
          type: "star",
          size: "24"
        }),
        d: common_vendor.p({
          type: "download",
          size: "24"
        }),
        e: common_vendor.o(closePopup),
        f: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        g: common_vendor.p({
          readonly: true,
          touchable: true,
          value: "3",
          size: "16"
        }),
        h: common_vendor.f(3, (item, k0, i0) => {
          return {
            a: item
          };
        }),
        i: common_vendor.sr(infoPopup, "5acf9712-3", {
          "k": "infoPopup"
        }),
        j: common_vendor.p({
          type: "bottom"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5acf9712"]]);
wx.createComponent(Component);
