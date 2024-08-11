"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
if (!Math) {
  (CustomNavBar + ThemeItem)();
}
const ThemeItem = () => "../../components/global/theme-item.js";
const CustomNavBar = () => "../../components/global/custom-nav-bar.js";
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    const recommendList = common_vendor.ref([]);
    common_vendor.onShareAppMessage(() => {
      return {
        title: "咸虾米壁纸，精选分类",
        path: "/pages/classify/classify"
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "咸虾米壁纸，精选分类"
      };
    });
    const getRecommendList = async () => {
      const params = {
        pageSize: 20
      };
      const res = await api_index.getRecommendListService(params);
      recommendList.value = res.data;
    };
    getRecommendList();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "分类"
        }),
        b: common_vendor.f(recommendList.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "6bcfa975-1-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6bcfa975"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
