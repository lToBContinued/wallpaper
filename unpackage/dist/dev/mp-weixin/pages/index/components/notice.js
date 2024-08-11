"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_index = require("../../../api/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "notice",
  setup(__props) {
    const newsList = common_vendor.ref([]);
    const getNewList = async () => {
      const params = {
        select: true
      };
      const res = await api_index.getNewsListService(params);
      newsList.value = res.data;
    };
    getNewList();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "sound-filled",
          size: "20",
          color: "#28b389"
        }),
        b: common_vendor.f(newsList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item._id
          };
        }),
        c: common_vendor.p({
          type: "right",
          size: "16"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c772460e"]]);
wx.createComponent(Component);
