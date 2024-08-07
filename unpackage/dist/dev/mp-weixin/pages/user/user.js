"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _component_template = common_vendor.resolveComponent("template");
  _component_template();
}
if (!Math) {
  InfoList();
}
const InfoList = () => "./components/info-list.js";
const _sfc_main = {
  __name: "user",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.p({
          title: "我的下载",
          iconType: "download-filled",
          num: "33"
        }),
        c: common_vendor.p({
          title: "我的评分",
          iconType: "star-filled",
          num: "33"
        }),
        d: common_vendor.p({
          title: "联系客服",
          iconType: "chatboxes-filled",
          bottomLine: false
        }),
        e: common_vendor.p({
          title: "订阅更新",
          iconType: "notification-filled"
        }),
        f: common_vendor.p({
          title: "常见问题",
          iconType: "flag-filled",
          bottomLine: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
