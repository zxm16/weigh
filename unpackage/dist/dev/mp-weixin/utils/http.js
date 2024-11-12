"use strict";
const utils_config = require("./config.js");
const common_vendor = require("../common/vendor.js");
common_vendor.axios.create({
  baseURL: utils_config.URL,
  timeout: 6e3,
  adapter: common_vendor.axiosAdapterUniapp.exports
});
