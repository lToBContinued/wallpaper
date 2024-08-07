"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
if (!Math) {
  (Banner + Notice + _easycom_uni_icons + _easycom_uni_dateformat + CommonTitle + ThemeItem)();
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
          size: "18"
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
        f: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
