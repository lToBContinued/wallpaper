"use strict";
const common_vendor = require("../../common/vendor.js");
const api_classlist = require("../../api/classlist.js");
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    const classList = common_vendor.ref([]);
    const params = {};
    common_vendor.onLoad((e) => {
      let { classid = null, name = null } = e;
      params.classid = classid;
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getClassList();
    });
    const getClassList = async () => {
      const res = await api_classlist.getClassListService(params);
      classList.value = res.data;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bd381383"]]);
wx.createPage(MiniProgramPage);
