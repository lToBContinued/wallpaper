"use strict";
const common_vendor = require("../../common/vendor.js");
const api_classlist = require("../../api/classlist.js");
const api_user = require("../../api/user.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (Loading + _easycom_uni_load_more)();
}
const Loading = () => "../../components/global/loading.js";
const _sfc_main = {
  __name: "classlist",
  setup(__props) {
    const currentPageName = common_vendor.ref("");
    const classList = common_vendor.ref([]);
    const params = {
      pageNum: 1,
      pageSize: 12
    };
    const noData = common_vendor.ref(false);
    let pageName = common_vendor.ref("");
    common_vendor.onLoad((e) => {
      let { id = null, name = null, type = null } = e;
      if (type) {
        params["type"] = type;
      }
      if (id) {
        params["classid"] = id;
      }
      currentPageName.value = name;
      pageName.value = name;
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getClassList();
    });
    common_vendor.onUnload(() => {
      common_vendor.index.removeStorageSync("storageClassList");
    });
    common_vendor.onReachBottom(() => {
      if (noData.value)
        return;
      params["pageNum"]++;
      getClassList();
    });
    common_vendor.onShareAppMessage(() => {
      return {
        title: `咸虾米壁纸-${pageName.value}`,
        path: `/pages/classlist/classlist?id=${params.classid}&name=${pageName.value}`
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: `咸虾米壁纸-${pageName.value}`,
        query: `id=${params.classid}&name=${pageName.value}`
      };
    });
    const getClassList = async () => {
      let res;
      if (params.classid) {
        res = await api_classlist.getClassListService(params);
      }
      if (params.type) {
        res = await api_user.getUserHistoryWallListService(params);
      }
      if (res.data.length < params.pageSize) {
        noData.value = true;
      }
      classList.value = [...classList.value, ...res.data];
      common_vendor.index.setStorageSync("storageClassList", classList.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !classList.value.length && !noData.value
      }, !classList.value.length && !noData.value ? {} : {}, {
        b: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id,
            c: `/pages/preview/preview?id=${item._id}&name=${currentPageName.value}`
          };
        }),
        c: classList.value.length || noData.value
      }, classList.value.length || noData.value ? {
        d: common_vendor.p({
          status: noData.value ? "noMore" : "loading"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bd381383"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
