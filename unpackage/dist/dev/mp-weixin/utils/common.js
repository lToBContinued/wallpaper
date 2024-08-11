"use strict";
const common_vendor = require("../common/vendor.js");
function compareTimestamp(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  const minute = 60 * 1e3;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  if (diff < minute) {
    return "1分钟内";
  } else if (diff < hour) {
    return `${Math.floor(diff / minute)}分钟`;
  } else if (diff < day) {
    return `${Math.floor(diff / hour)}小时`;
  } else if (diff < month) {
    return `${Math.floor(diff / day)}天`;
  } else if (diff < 3 * month) {
    return `${Math.floor(diff / month)}个月`;
  } else {
    return "3个月";
  }
}
const gotoHome = () => {
  common_vendor.index.showModal({
    title: "提示",
    content: "页面错误，将返回首页",
    showCancel: false,
    success: (res) => {
      if (res.confirm) {
        common_vendor.index.reLaunch({
          url: "/pages/index/index"
        });
      }
    }
  });
};
exports.compareTimestamp = compareTimestamp;
exports.gotoHome = gotoHome;
