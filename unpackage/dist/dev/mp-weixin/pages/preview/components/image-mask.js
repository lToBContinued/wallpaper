"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_system = require("../../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + WallpaperInfo)();
}
const WallpaperInfo = () => "./wallpaper-info.js";
const _sfc_main = {
  __name: "image-mask",
  props: {
    // 分类图片列表
    classList: {
      type: Array,
      default() {
        return [];
      }
    },
    // 当前图片索引
    currentIndex: {
      type: Number,
      default: 0
    },
    // 当前图片信息
    currentInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    // 当前壁纸分类
    wallPaperClass: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const goBack = () => {
      common_vendor.index.navigateBack({
        // 对于分享页的处理，直接返回首页
        fail: () => {
          common_vendor.index.reLaunch({
            url: "/pages/index/index"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "back",
          color: "#fff",
          size: "20"
        }),
        b: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        c: common_vendor.o(goBack),
        d: common_vendor.t(__props.currentIndex + 1),
        e: common_vendor.t(__props.classList.length),
        f: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        g: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        h: common_vendor.p({
          currentInfo: __props.currentInfo,
          wallPaperClass: __props.wallPaperClass,
          classList: __props.classList,
          currentIndex: __props.currentIndex
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f3cfe566"]]);
wx.createComponent(Component);
