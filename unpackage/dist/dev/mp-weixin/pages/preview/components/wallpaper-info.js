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
    const scorePopup = common_vendor.ref(null);
    const userScore = common_vendor.ref(0);
    const checkDetail = () => {
      infoPopup.value.open();
    };
    const closeInfoPopup = () => {
      infoPopup.value.close();
    };
    const giveScore = () => {
      scorePopup.value.open();
    };
    const closeScorePopup = () => {
      scorePopup.value.close();
    };
    const submitScore = () => {
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
        d: common_vendor.o(giveScore),
        e: common_vendor.p({
          type: "download",
          size: "24"
        }),
        f: common_vendor.o(closeInfoPopup),
        g: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        h: common_vendor.p({
          readonly: true,
          touchable: true,
          value: "3",
          size: "16"
        }),
        i: common_vendor.f(3, (item, k0, i0) => {
          return {
            a: item
          };
        }),
        j: common_vendor.sr(infoPopup, "5acf9712-3", {
          "k": "infoPopup"
        }),
        k: common_vendor.p({
          type: "bottom"
        }),
        l: common_vendor.o(closeScorePopup),
        m: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        n: common_vendor.o(($event) => userScore.value = $event),
        o: common_vendor.p({
          touchable: true,
          size: "20",
          allowHalf: true,
          modelValue: userScore.value
        }),
        p: common_vendor.t(userScore.value),
        q: !userScore.value,
        r: common_vendor.o(submitScore),
        s: common_vendor.sr(scorePopup, "5acf9712-6", {
          "k": "scorePopup"
        }),
        t: common_vendor.p({
          ["is-mask-click"]: false
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5acf9712"]]);
wx.createComponent(Component);
