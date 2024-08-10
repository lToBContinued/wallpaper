"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_preview = require("../../../api/preview.js");
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
  props: {
    // 分类图片列表
    classList: {
      type: Array,
      default() {
        return [];
      }
    },
    // 当前图片索引
    currentIndex: {
      type: Number,
      default: 0
    },
    // 当前图片信息
    currentInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    // 当前壁纸分类
    wallPaperClass: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const infoPopup = common_vendor.ref(null);
    const scorePopup = common_vendor.ref(null);
    const userScore = common_vendor.ref(0);
    const isScore = common_vendor.ref(false);
    const checkDetail = () => {
      infoPopup.value.open();
    };
    const closeInfoPopup = () => {
      infoPopup.value.close();
    };
    const giveScore = () => {
      if (props.currentInfo.userScore) {
        isScore.value = true;
        userScore.value = props.currentInfo.userScore;
      }
      scorePopup.value.open();
    };
    const closeScorePopup = () => {
      scorePopup.value.close();
      userScore.value = 0;
      isScore.value = false;
    };
    const submitScore = async () => {
      common_vendor.index.showLoading({
        title: "评分中~"
      });
      let { classid, _id: wallId } = props.currentInfo;
      const params = {
        classid,
        wallId,
        userScore: userScore.value
      };
      const res = await api_preview.getSetupScoreService(params);
      common_vendor.index.hideLoading();
      if (res.errCode === 0) {
        common_vendor.index.showToast({
          title: "评分成功",
          icon: "none"
        });
        props.classList[props.currentIndex]["userScore"] = userScore.value;
        common_vendor.index.setStorageSync("storageClassList", props.classList);
        closeScorePopup();
      }
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
        d: common_vendor.t(__props.currentInfo.score),
        e: common_vendor.o(giveScore),
        f: common_vendor.p({
          type: "download",
          size: "24"
        }),
        g: common_vendor.o(closeInfoPopup),
        h: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        i: common_vendor.t(__props.currentInfo._id),
        j: common_vendor.t(__props.wallPaperClass),
        k: common_vendor.t(__props.currentInfo.nickname),
        l: common_vendor.p({
          readonly: true,
          touchable: true,
          value: __props.currentInfo.score,
          size: "16"
        }),
        m: common_vendor.t(__props.currentInfo.score),
        n: common_vendor.t(__props.currentInfo.description),
        o: common_vendor.f(__props.currentInfo.tabs, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        }),
        p: common_vendor.sr(infoPopup, "5acf9712-3", {
          "k": "infoPopup"
        }),
        q: common_vendor.p({
          type: "bottom"
        }),
        r: common_vendor.t(isScore.value ? "评分过了~" : "壁纸评分"),
        s: common_vendor.o(closeScorePopup),
        t: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        v: common_vendor.o(($event) => userScore.value = $event),
        w: common_vendor.p({
          touchable: true,
          size: "20",
          allowHalf: true,
          disabled: isScore.value,
          ["disabled-color"]: "#ffca3e",
          modelValue: userScore.value
        }),
        x: common_vendor.t(userScore.value),
        y: isScore.value,
        z: common_vendor.o(submitScore),
        A: common_vendor.sr(scorePopup, "5acf9712-6", {
          "k": "scorePopup"
        }),
        B: common_vendor.p({
          ["is-mask-click"]: false
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5acf9712"]]);
wx.createComponent(Component);
