"use strict";
const utils_request = require("../utils/request.js");
const getUserInfoService = () => {
  return utils_request.request({
    url: "/userInfo"
  });
};
exports.getUserInfoService = getUserInfoService;
