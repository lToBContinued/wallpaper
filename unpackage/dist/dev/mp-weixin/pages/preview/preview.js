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
    const readImgs = common_vendor.ref([]);
    const currentInfo = common_vendor.ref(null);
    const wallPaperClass = common_vendor.ref("");
    common_vendor.onLoad((e) => {
      currentId.value = e.id;
      currentIndex.value = classList.value.findIndex((item) => item._id === currentId.value);
      currentInfo.value = classList.value[currentIndex.value];
      wallPaperClass.value = e.name;
      readImgsFn();
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
      currentInfo.value = classList.value[currentIndex.value];
      readImgsFn();
    };
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    function readImgsFn() {
      readImgs.value.push(
        currentIndex.value <= 0 ? classList.value.length - 1 : currentIndex.value - 1,
        currentIndex.value,
        currentIndex.value >= classList.value.length - 1 ? 0 : currentIndex.value + 1
      );
      readImgs.value = [...new Set(readImgs.value)];
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(classList.value, (item, index, i0) => {
          return common_vendor.e({
            a: readImgs.value.includes(index)
          }, readImgs.value.includes(index) ? {
            b: item.picUrl,
            c: common_vendor.o(maskChange, item._id)
          } : {}, {
            d: item._id
          });
        }),
        b: currentIndex.value,
        c: common_vendor.o(swiperChange),
        d: maskState.value,
        e: common_vendor.p({
          classList: classList.value,
          currentIndex: currentIndex.value,
          currentInfo: currentInfo.value,
          wallPaperClass: wallPaperClass.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
