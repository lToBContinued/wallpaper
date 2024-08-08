"use strict";
const utils_request = require("../utils/request.js");
const getClassListService = (data) => {
  return utils_request.request({
    url: "/wallList",
    data
  });
};
exports.getClassListService = getClassListService;
