"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
const _sfc_main = {
  __name: "Login",
  setup(__props) {
    let toArticle = (data) => {
      if (data === 1) {
        console.log(data);
      } else {
        console.log(data);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "arrow-left",
          color: "#303133",
          size: "50"
        }),
        b: common_vendor.p({
          name: "phone"
        }),
        c: common_vendor.p({
          name: "lock"
        }),
        d: common_vendor.o(($event) => common_vendor.unref(toArticle)(1)),
        e: common_vendor.o(($event) => common_vendor.unref(toArticle)(2)),
        f: common_vendor.p({
          name: "qq-circle-fill",
          color: "#2979ff",
          size: "100"
        }),
        g: common_vendor.p({
          name: "weixin-circle-fill",
          color: "#19be6b",
          size: "100"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-461d1d79"], ["__file", "D:/\u65B0\u5EFA\u6587\u4EF6\u5939 (2)/\u8F6F\u4EF6\u5F00\u53D1/weighBookFontend/pages/Login/Login.vue"]]);
wx.createPage(MiniProgramPage);
