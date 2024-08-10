"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  ImageMask();
}
const ImageMask = () => "./components/image-mask.js";
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const classList = common_vendor.ref([]);
    const currentId = common_vendor.ref(null);
    const currentIndex = common_vendor.ref(0);
    common_vendor.onLoad((e) => {
      currentId.value = e.id;
      currentIndex.value = classList.value.findIndex((item) => item._id === currentId.value);
    });
    const storageClassList = common_vendor.index.getStorageSync("storageClassList") || [];
    classList.value = storageClassList.map((item) => {
      return {
        ...item,
        picUrl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    const swiperChange = (e) => {
      currentIndex.value = e.detail.current;
    };
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.picUrl,
            b: common_vendor.o(maskChange, item._id),
            c: item._id
          };
        }),
        b: currentIndex.value,
        c: common_vendor.o(swiperChange),
        d: maskState.value,
        e: common_vendor.p({
          classList: classList.value,
          currentIndex: currentIndex.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
