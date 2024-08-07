"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _component_uni_icons = common_vendor.resolveComponent("uni-icons");
  const _component_uni_dateformat = common_vendor.resolveComponent("uni-dateformat");
  (_component_uni_icons + _component_uni_dateformat)();
}
if (!Math) {
  (Banner + Notice + CommonTitle + ThemeItem)();
}
const CommonTitle = () => "../../components/global/common-title.js";
const Banner = () => "./components/banner.js";
const Notice = () => "./components/notice.js";
const ThemeItem = () => "../../components/global/theme-item.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "calendar",
          size: "18",
          color: "#28b389"
        }),
        b: common_vendor.p({
          date: Date.now(),
          format: "dd日"
        }),
        c: common_vendor.f(8, (item, k0, i0) => {
          return {
            a: item
          };
        }),
        d: common_assets._imports_0,
        e: common_vendor.f(8, (item, k0, i0) => {
          return {
            a: item,
            b: "1cf27b2a-6-" + i0
          };
        }),
        f: _ctx.item,
        g: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
