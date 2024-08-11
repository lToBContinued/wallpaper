"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_index = require("../../../api/index.js");
const _sfc_main = {
  __name: "banner",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const getBannerList = async () => {
      const res = await api_index.getBannerListService();
      bannerList.value = res.data;
    };
    getBannerList();
    const gotoLink = (data) => {
      if (data.target === "miniProgram") {
        common_vendor.index.navigateToMiniProgram({
          appId: data.appid
        });
      }
      if (data.target === "self") {
        common_vendor.index.navigateTo({
          url: `/pages/classlist/classlist?${data.url}`
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(bannerList.value, (item, k0, i0) => {
          return {
            a: item.picurl,
            b: common_vendor.o(($event) => gotoLink(item), item._id),
            c: item._id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5addc23e"]]);
wx.createComponent(Component);
