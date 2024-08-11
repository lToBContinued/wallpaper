"use strict";
const common_vendor = require("../../common/vendor.js");
const api_preview = require("../../api/preview.js");
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
    common_vendor.onLoad(async (e) => {
      currentId.value = e.id;
      if (e.type === "share") {
        const res = await api_preview.getSingleWallpaperDetailService({ id: currentId.value });
        smallPicToBigPic(res.data);
      }
      currentIndex.value = classList.value.findIndex((item) => item._id === currentId.value);
      currentInfo.value = classList.value[currentIndex.value];
      wallPaperClass.value = e.name;
      readImgsFn();
    });
    common_vendor.onShareAppMessage(() => {
      return {
        title: `咸虾米壁纸`,
        path: `/pages/preview/preview?id=${currentId.value}&type=share`
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: `咸虾米壁纸`,
        query: `id=${currentId.value}&type=share`
      };
    });
    const storageClassList = common_vendor.index.getStorageSync("storageClassList") || [];
    smallPicToBigPic(storageClassList);
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
    function smallPicToBigPic(arr) {
      classList.value = arr.map((item) => {
        return {
          ...item,
          picUrl: item.smallPicurl.replace("_small.webp", ".jpg")
        };
      });
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: currentInfo.value
      }, currentInfo.value ? {
        b: common_vendor.f(classList.value, (item, index, i0) => {
          return common_vendor.e({
            a: readImgs.value.includes(index)
          }, readImgs.value.includes(index) ? {
            b: item.picUrl,
            c: common_vendor.o(maskChange, item._id)
          } : {}, {
            d: item._id
          });
        }),
        c: currentIndex.value,
        d: common_vendor.o(swiperChange),
        e: maskState.value,
        f: common_vendor.p({
          classList: classList.value,
          currentIndex: currentIndex.value,
          currentInfo: currentInfo.value,
          wallPaperClass: wallPaperClass.value
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
