"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../utils/http.js");
const store_index = require("../../store/index.js");
require("../../utils/config.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    store_index.useStore();
    let title = common_vendor.ref("\u4F53\u91CD\u5C0F\u672C");
    const SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
    SYSTEM_INFO.statusBarHeight || 15;
    common_vendor.onLoad(() => {
      console.log(1);
      setTimeout(() => {
        common_vendor.index.navigateTo({
          url: "/pages/main/main"
        });
      }, 2e3);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(title))
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u65B0\u5EFA\u6587\u4EF6\u5939 (2)/\u8F6F\u4EF6\u5F00\u53D1/\u4F53\u91CD\u672C/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
