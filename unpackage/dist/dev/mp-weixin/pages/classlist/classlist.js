"use strict";
const common_vendor = require("../../common/vendor.js");
const api_classlist = require("../../api/classlist.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    const classList = common_vendor.ref([]);
    const params = {
      pageNum: 1,
      pageSize: 12
    };
    const noData = common_vendor.ref(false);
    common_vendor.onLoad((e) => {
      let { classid = null, name = null } = e;
      params["classid"] = classid;
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getClassList();
    });
    common_vendor.onReachBottom(() => {
      if (noData.value)
        return;
      params["pageNum"]++;
      getClassList();
    });
    const getClassList = async () => {
      const res = await api_classlist.getClassListService(params);
      if (res.data.length < params.pageSize) {
        noData.value = true;
      }
      classList.value = [...classList.value, ...res.data];
      common_vendor.index.setStorageSync("storageClassList", classList.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !classList.value.length && !noData.value
      }, !classList.value.length && !noData.value ? {
        b: common_vendor.p({
          status: "loading"
        })
      } : {}, {
        c: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id,
            c: `/pages/preview/preview?id=${item._id}`
          };
        }),
        d: classList.value.length || noData.value
      }, classList.value.length || noData.value ? {
        e: common_vendor.p({
          status: noData.value ? "noMore" : "loading"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bd381383"]]);
wx.createPage(MiniProgramPage);
