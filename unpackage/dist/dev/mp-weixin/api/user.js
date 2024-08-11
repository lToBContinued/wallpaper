"use strict";
const utils_request = require("../utils/request.js");
const getUserInfoService = () => {
  return utils_request.request({
    url: "/userInfo"
  });
};
const getUserHistoryWallListService = (data = {}) => {
  return utils_request.request({
    url: "/userWallList",
    data
  });
};
exports.getUserHistoryWallListService = getUserHistoryWallListService;
exports.getUserInfoService = getUserInfoService;
