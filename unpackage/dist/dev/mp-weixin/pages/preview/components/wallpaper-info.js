"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_preview = require("../../../api/preview.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_rate = () => "../../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "wallpaper-info",
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
    const props = __props;
    const infoPopup = common_vendor.ref(null);
    const scorePopup = common_vendor.ref(null);
    const userScore = common_vendor.ref(0);
    const isScore = common_vendor.ref(false);
    const checkDetail = () => {
      infoPopup.value.open();
    };
    const closeInfoPopup = () => {
      infoPopup.value.close();
    };
    const giveScore = () => {
      if (props.currentInfo.userScore) {
        isScore.value = true;
        userScore.value = props.currentInfo.userScore;
      }
      scorePopup.value.open();
    };
    const closeScorePopup = () => {
      scorePopup.value.close();
      userScore.value = 0;
      isScore.value = false;
    };
    const submitScore = async () => {
      common_vendor.index.showLoading({
        title: "评分中~"
      });
      let { classid, _id: wallId } = props.currentInfo;
      const params = {
        classid,
        wallId,
        userScore: userScore.value
      };
      const res = await api_preview.getSetupScoreService(params);
      common_vendor.index.hideLoading();
      if (res.errCode === 0) {
        common_vendor.index.showToast({
          title: "评分成功",
          icon: "none"
        });
        props.classList[props.currentIndex]["userScore"] = userScore.value;
        common_vendor.index.setStorageSync("storageClassList", props.classList);
        closeScorePopup();
      }
    };
    const downloadPic = async () => {
      try {
        common_vendor.index.showLoading({
          title: "全力下载中~",
          mask: true
        });
        const params = {
          classid: props.currentInfo.classid,
          wallId: props.currentInfo._id
        };
        const res = await api_preview.getDownloadRecordService(params);
        if (res.errCode !== 0)
          throw res;
        common_vendor.index.getImageInfo({
          src: props.currentInfo.picUrl,
          success: (res2) => {
            common_vendor.index.saveImageToPhotosAlbum({
              filePath: res2.path,
              // 同意授权
              success: () => {
                common_vendor.index.showToast({
                  title: "保存成功",
                  icon: "none"
                });
              },
              // 不同意授权
              fail: (err) => {
                if (err.errMsg === "saveImageToPhotosAlbum:fail cancel") {
                  common_vendor.index.showToast({
                    title: "保存失败，请重新点击下载",
                    icon: "none"
                  });
                  return;
                }
                common_vendor.index.showModal({
                  title: "提示",
                  content: "需要授权相册权限",
                  success: (res3) => {
                    if (res3.confirm) {
                      common_vendor.index.openSetting({
                        success: (setting) => {
                          console.log(setting);
                          if (setting.authSetting["scope.writePhotosAlbum"]) {
                            common_vendor.index.showToast({
                              title: "获取授权成功",
                              icon: "none"
                            });
                          } else {
                            common_vendor.index.showToast({
                              title: "获取授权失败",
                              icon: "none"
                            });
                          }
                        }
                      });
                    }
                  }
                });
              },
              complete: () => {
                common_vendor.index.hideLoading();
              }
            });
          }
        });
      } catch (err) {
        console.dir(err);
        common_vendor.index.hideLoading();
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "info",
          size: "24"
        }),
        b: common_vendor.o(checkDetail),
        c: common_vendor.p({
          type: "star",
          size: "24"
        }),
        d: common_vendor.t(Number(__props.currentInfo.score) ? __props.currentInfo.score + "分" : "暂无评分"),
        e: common_vendor.o(giveScore),
        f: common_vendor.p({
          type: "download",
          size: "24"
        }),
        g: common_vendor.o(downloadPic),
        h: common_vendor.o(closeInfoPopup),
        i: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        j: common_vendor.t(__props.currentInfo._id),
        k: common_vendor.t(__props.wallPaperClass),
        l: common_vendor.t(__props.currentInfo.nickname),
        m: common_vendor.p({
          readonly: true,
          touchable: true,
          value: __props.currentInfo.score,
          size: "16"
        }),
        n: common_vendor.t(Number(__props.currentInfo.score) ? __props.currentInfo.score + "分" : "暂无评分"),
        o: common_vendor.t(__props.currentInfo.description),
        p: common_vendor.f(__props.currentInfo.tabs, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        }),
        q: common_vendor.sr(infoPopup, "5acf9712-3", {
          "k": "infoPopup"
        }),
        r: common_vendor.p({
          type: "bottom"
        }),
        s: common_vendor.t(isScore.value ? "评分过了~" : "壁纸评分"),
        t: common_vendor.o(closeScorePopup),
        v: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        w: common_vendor.o(($event) => userScore.value = $event),
        x: common_vendor.p({
          touchable: true,
          size: "20",
          allowHalf: true,
          disabled: isScore.value,
          ["disabled-color"]: "#ffca3e",
          modelValue: userScore.value
        }),
        y: common_vendor.t(userScore.value),
        z: isScore.value,
        A: common_vendor.o(submitScore),
        B: common_vendor.sr(scorePopup, "5acf9712-6", {
          "k": "scorePopup"
        }),
        C: common_vendor.p({
          ["is-mask-click"]: false
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5acf9712"]]);
wx.createComponent(Component);
