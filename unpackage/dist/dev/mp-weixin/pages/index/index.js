"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
if (!Math) {
  (CustomNavBar + Banner + Notice + _easycom_uni_icons + _easycom_uni_dateformat + CommonTitle + ThemeItem)();
}
const CommonTitle = () => "../../components/global/common-title.js";
const Banner = () => "./components/banner.js";
const Notice = () => "./components/notice.js";
const ThemeItem = () => "../../components/global/theme-item.js";
const CustomNavBar = () => "../../components/global/custom-nav-bar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const dayRandomWallpaperList = common_vendor.ref([]);
    const recommendList = common_vendor.ref([]);
    common_vendor.onShareAppMessage(() => {
      return {
        title: "咸虾米壁纸，好看的手机壁纸",
        path: "/pages/index/index"
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "咸虾米壁纸，好看的手机壁纸"
      };
    });
    const goPreview = (id) => {
      common_vendor.index.setStorageSync("storageClassList", dayRandomWallpaperList.value);
      common_vendor.index.navigateTo({
        url: `/pages/preview/preview?id=${id}`
      });
    };
    const getDayRandomWallpaperList = async () => {
      const res = await api_index.getDayRandomWallpaperListService();
      dayRandomWallpaperList.value = res.data;
    };
    getDayRandomWallpaperList();
    const getRecommendList = async () => {
      const params = {
        select: true
      };
      const res = await api_index.getRecommendListService(params);
      recommendList.value = res.data;
    };
    getRecommendList();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "推荐"
        }),
        b: common_vendor.p({
          type: "calendar",
          size: "18"
        }),
        c: common_vendor.p({
          date: Date.now(),
          format: "dd日"
        }),
        d: common_vendor.f(dayRandomWallpaperList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id,
            c: common_vendor.o(($event) => goPreview(item._id), item._id)
          };
        }),
        e: common_vendor.f(recommendList.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "1cf27b2a-7-" + i0,
            c: common_vendor.p({
              item
            })
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
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
