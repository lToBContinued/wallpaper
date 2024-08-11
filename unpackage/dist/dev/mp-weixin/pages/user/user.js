"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
const api_user = require("../../api/user.js");
if (!Array) {
  const _component_template = common_vendor.resolveComponent("template");
  _component_template();
}
if (!Math) {
  (InfoList + Loading)();
}
const InfoList = () => "./components/info-list.js";
const Loading = () => "../../components/global/loading.js";
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const userInfo = common_vendor.ref(null);
    const getUserInfo = async () => {
      const res = await api_user.getUserInfoService();
      userInfo.value = res.data;
    };
    getUserInfo();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: userInfo.value
      }, userInfo.value ? {
        b: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        c: common_assets._imports_0,
        d: common_vendor.t(userInfo.value.IP),
        e: common_vendor.t(userInfo.value.address.city || userInfo.value.address.province || userInfo.value.address.country),
        f: common_vendor.p({
          title: "我的下载",
          iconType: "download-filled",
          num: userInfo.value.downloadSize
        }),
        g: common_vendor.p({
          title: "我的评分",
          iconType: "star-filled",
          num: userInfo.value.scoreSize
        }),
        h: common_vendor.p({
          title: "联系客服",
          iconType: "chatboxes-filled",
          bottomLine: false
        }),
        i: common_vendor.p({
          title: "订阅更新",
          iconType: "notification-filled"
        }),
        j: common_vendor.p({
          title: "常见问题",
          iconType: "flag-filled",
          bottomLine: false
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
