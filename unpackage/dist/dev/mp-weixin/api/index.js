"use strict";
const utils_request = require("../utils/request.js");
const getBannerListService = async () => {
  return utils_request.request({
    url: "/homeBanner"
  });
};
exports.getBannerListService = getBannerListService;
