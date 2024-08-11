"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "info-list",
  props: {
    iconType: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    num: {
      type: String,
      default: ""
    },
    bottomLine: {
      type: Boolean,
      default: true
    },
    pageUrl: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: __props.iconType,
          size: "20",
          color: "#28b389"
        }),
        b: common_vendor.t(__props.title),
        c: common_vendor.t(__props.num),
        d: common_vendor.p({
          type: "right",
          size: "15"
        }),
        e: __props.pageUrl,
        f: __props.bottomLine ? "1px solid #eee" : "none"
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-af629a1c"]]);
wx.createComponent(Component);
