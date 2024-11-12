"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../utils/http.js");
const store_index = require("../../store/index.js");
require("../../utils/config.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
const _sfc_main = {
  __name: "main",
  setup(__props) {
    const store = store_index.useStore();
    const { screenTopNavHeight } = common_vendor.storeToRefs(store);
    let height = common_vendor.reactive({
      navHeight: 0,
      cardHeight: 0
    });
    let control = common_vendor.reactive({
      controlValue: 0,
      swiperControl: 1,
      navLocation: "right",
      navStyle: "main-topBox-innerBox-nav-middle",
      navIcon: true
    });
    let changeNavStyle = (e) => {
      if (e === "left") {
        control.navLocation = "left";
        control.navStyle = "main-topBox-innerBox-nav-middley";
        control.controlValue = 1;
        control.swiperControl = 0;
      } else {
        if (control.controlValue === 1) {
          control.navLocation = "right";
          control.navStyle = "main-topBox-innerBox-nav-middlex";
        }
        control.controlValue = 0;
        control.swiperControl = 1;
      }
    };
    let changeSwiper = (e) => {
      if (e.detail.current === 0) {
        control.navLocation = "left";
        control.navStyle = "main-topBox-innerBox-nav-middley";
        changeNavStyle("left");
      } else {
        control.navLocation = "right";
        control.navStyle = "main-topBox-innerBox-nav-middlex";
        changeNavStyle("right");
      }
    };
    common_vendor.onLoad(() => {
      if (screenTopNavHeight.value === "0") {
        height.navHeight = "54";
      } else {
        height.navHeight = screenTopNavHeight.value;
      }
      height.cardHeight = Number(height.navHeight) + 200;
      control.navIcon = false;
      console.log(control.navIcon);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          name: "account",
          size: "20px"
        }),
        b: common_vendor.n(common_vendor.unref(control).navStyle),
        c: common_vendor.o(($event) => common_vendor.unref(changeNavStyle)("left")),
        d: common_vendor.o(($event) => common_vendor.unref(changeNavStyle)("right")),
        e: common_vendor.unref(control).navIcon
      }, common_vendor.unref(control).navIcon ? {
        f: common_vendor.p({
          name: "search",
          size: "20px"
        })
      } : {}, {
        g: common_vendor.unref(control).navIcon
      }, common_vendor.unref(control).navIcon ? {
        h: common_vendor.p({
          name: "calendar",
          size: "20px"
        })
      } : {}, {
        i: common_vendor.unref(height).navHeight + "px",
        j: common_vendor.o((...args) => common_vendor.unref(changeSwiper) && common_vendor.unref(changeSwiper)(...args)),
        k: common_vendor.unref(control).swiperControl,
        l: common_vendor.unref(height).cardHeight + "rpx"
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4f50ca8f"], ["__file", "D:/\u65B0\u5EFA\u6587\u4EF6\u5939 (2)/\u8F6F\u4EF6\u5F00\u53D1/\u4F53\u91CD\u672C/pages/main/main.vue"]]);
wx.createPage(MiniProgramPage);
