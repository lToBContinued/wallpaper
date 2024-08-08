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
wx.createPage(MiniProgramPage);
