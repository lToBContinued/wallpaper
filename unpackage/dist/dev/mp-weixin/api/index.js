"use strict";
const utils_request = require("../utils/request.js");
const getBannerListService = async () => {
  return utils_request.request({
    url: "/homeBanner"
  });
};
const getDayRandomWallpaperListService = () => {
  return utils_request.request({
    url: "/randomWall"
  });
};
const getNewsListService = (data = {}) => {
  return utils_request.request({
    url: "/wallNewsList",
    data
  });
};
const getRecommendListService = (data) => {
  return utils_request.request({
    url: "/classify",
    data
  });
};
exports.getBannerListService = getBannerListService;
exports.getDayRandomWallpaperListService = getDayRandomWallpaperListService;
exports.getNewsListService = getNewsListService;
exports.getRecommendListService = getRecommendListService;
