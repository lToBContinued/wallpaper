"use strict";
const utils_request = require("../utils/request.js");
const getClassifyListService = () => {
  return utils_request.request({
    url: "/classify"
  });
};
exports.getClassifyListService = getClassifyListService;
