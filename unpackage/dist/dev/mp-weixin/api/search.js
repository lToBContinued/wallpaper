"use strict";
const utils_request = require("../utils/request.js");
const getSearchDataService = (data = {}) => {
  return utils_request.request({
    url: "/searchWall",
    data
  });
};
exports.getSearchDataService = getSearchDataService;
