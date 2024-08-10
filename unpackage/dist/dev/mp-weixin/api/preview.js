"use strict";
const utils_request = require("../utils/request.js");
const getSetupScoreService = (data) => {
  return utils_request.request({
    url: "/setupScore",
    data
  });
};
const getDownloadRecordService = (data) => {
  return utils_request.request({
    url: "/downloadWall",
    data
  });
};
exports.getDownloadRecordService = getDownloadRecordService;
exports.getSetupScoreService = getSetupScoreService;
