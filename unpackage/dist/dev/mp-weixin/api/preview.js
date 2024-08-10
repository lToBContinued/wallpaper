"use strict";
const utils_request = require("../utils/request.js");
const getSetupScoreService = (data) => {
  return utils_request.request({
    url: "/setupScore",
    data
  });
};
exports.getSetupScoreService = getSetupScoreService;
