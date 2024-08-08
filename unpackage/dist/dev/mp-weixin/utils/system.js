"use strict";
const common_vendor = require("../common/vendor.js");
const SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 15;
const getTitleBarHeight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    let { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    return (top - getStatusBarHeight()) * 2 + height;
  } else {
    return 40;
  }
};
const getFillHeight = () => {
  return getTitleBarHeight() + getStatusBarHeight();
};
const getLeftIconLeft = () => {
  return 0;
};
exports.getFillHeight = getFillHeight;
exports.getLeftIconLeft = getLeftIconLeft;
exports.getStatusBarHeight = getStatusBarHeight;
exports.getTitleBarHeight = getTitleBarHeight;
