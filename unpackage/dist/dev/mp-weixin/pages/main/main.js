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
  (_easycom_u_icon + bigCircleBar + multipleCirclar + smallCircleBar)();
}
const bigCircleBar = () => "../../component/common/CircularProgressBarBigOne.js";
const smallCircleBar = () => "../../component/common/CircularProgressBarSmallOne.js";
const multipleCirclar = () => "../../component/common/MultipleCirular/MultipleCircularProgressBarBig.js";
const _sfc_main = {
  __name: "main",
  setup(__props) {
    common_vendor.useCssVars((_ctx) => ({
      "4f50ca8f-overCardHeigh": common_vendor.unref(overCardHeigh),
      "4f50ca8f-overCardMoveHeigh": common_vendor.unref(overCardMoveHeigh),
      "4f50ca8f-chartHeigh": common_vendor.unref(chartHeigh),
      "4f50ca8f-chartMoveHeigh": common_vendor.unref(chartMoveHeigh)
    }));
    const store = store_index.useStore();
    const { screenTopNavHeight } = common_vendor.storeToRefs(store);
    common_vendor.reactive([
      {
        iconPath: "list",
        selectedIconPath: "list",
        text: "\u8BB0\u5F55",
        count: 2,
        isDot: true,
        customIcon: false
      },
      {
        iconPath: "account",
        selectedIconPath: "account-fill",
        text: "\u8BBE\u7F6E",
        count: 23,
        isDot: false,
        customIcon: false
      }
    ]);
    common_vendor.ref(0);
    let height = common_vendor.reactive({
      navHeight: 0,
      cardHeight: 0,
      overCardHeigh: 0,
      topNav: 0
    });
    let overCardHeigh = common_vendor.ref(0);
    let overCardMoveHeigh = common_vendor.ref(0);
    let chartHeigh = common_vendor.ref(0);
    let chartMoveHeigh = common_vendor.ref(0);
    let control = common_vendor.reactive({
      controlValue: 0,
      swiperControl: 1,
      navLocation: "right",
      navStyle: "main-topBox-innerBox-nav-middle",
      navIcon: true,
      openOverCardStyle: "main-overCard",
      chartStyle: "main-chart",
      topNavColor: false
    });
    let changeNavStyle = (e) => {
      if (e === "left") {
        control.navLocation = "left";
        control.navStyle = "main-topBox-innerBox-nav-middley";
        control.controlValue = 1;
        control.swiperControl = 0;
        setTimeout(() => {
          control.topNavColor = true;
        }, 250);
      } else {
        if (control.controlValue === 1) {
          control.navLocation = "right";
          control.navStyle = "main-topBox-innerBox-nav-middlex";
        }
        setTimeout(() => {
          control.topNavColor = false;
        }, 250);
        control.controlValue = 0;
        control.swiperControl = 1;
      }
    };
    let changeSwiper = (e) => {
      if (e.detail.current === 0) {
        control.navLocation = "left";
        control.navStyle = "main-topBox-innerBox-nav-middley";
        if (control.openOverCardStyle !== "main-overCard") {
          control.openOverCardStyle = "main-overCardClose";
        }
        changeNavStyle("left");
      } else {
        control.navLocation = "right";
        control.navStyle = "main-topBox-innerBox-nav-middlex";
        changeNavStyle("right");
      }
    };
    let OpenCard = (e) => {
      if (e === "main-overCard") {
        control.openOverCardStyle = "main-overCardOpen";
      } else if (e === "main-overCardOpen") {
        control.openOverCardStyle = "main-overCardClose";
      } else {
        control.openOverCardStyle = "main-overCardOpen";
      }
    };
    common_vendor.watch(() => control.openOverCardStyle, (newVal) => {
      console.log(newVal);
      if (newVal === "main-overCardOpen") {
        control.chartStyle = "main-chartOpen";
      } else {
        control.chartStyle = "main-chartClose";
      }
    });
    common_vendor.onLoad(() => {
      if (screenTopNavHeight.value === "0") {
        height.navHeight = "54";
      } else {
        height.navHeight = screenTopNavHeight.value;
      }
      height.topNav = Number(height.navHeight) * 2 + 100;
      height.cardHeight = Number(height.navHeight) + 200;
      height.overCardHeigh = Number(height.navHeight) + 800;
      overCardHeigh.value = height.overCardHeigh - 200 + "rpx";
      overCardMoveHeigh.value = height.overCardHeigh - 100 + "rpx";
      chartHeigh.value = height.overCardHeigh + 50 + "rpx";
      chartMoveHeigh.value = height.overCardHeigh + 150 + "rpx";
      control.navIcon = false;
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          name: "account",
          size: "20px"
        }),
        b: common_vendor.n(common_vendor.unref(control).navStyle),
        c: common_vendor.unref(control).topNavColor === false ? "#c0c4cc" : "#606266",
        d: common_vendor.o(($event) => common_vendor.unref(changeNavStyle)("left")),
        e: common_vendor.o(($event) => common_vendor.unref(changeNavStyle)("right")),
        f: common_vendor.unref(control).topNavColor === true ? "#c0c4cc" : "#606266",
        g: common_vendor.unref(control).navIcon
      }, common_vendor.unref(control).navIcon ? {
        h: common_vendor.p({
          name: "search",
          size: "20px"
        })
      } : {}, {
        i: common_vendor.unref(control).navIcon
      }, common_vendor.unref(control).navIcon ? {
        j: common_vendor.p({
          name: "calendar",
          size: "20px"
        })
      } : {}, {
        k: common_vendor.unref(height).topNav + "rpx",
        l: common_vendor.p({
          mealsTime: "\u65E9\u9910",
          color: "#71d5a1",
          progress: "20"
        }),
        m: common_vendor.p({
          mealsTime: "\u4E2D\u9910",
          color: "#a0cfff",
          progress: "40"
        }),
        n: common_vendor.p({
          mealsTime: "\u665A\u9910",
          color: "#fcbd71",
          progress: "75"
        }),
        o: common_vendor.p({
          mealsTime: "\u52A0\u9910",
          color: "#fab6b6",
          progress: "100"
        }),
        p: common_vendor.o(($event) => common_vendor.unref(OpenCard)(common_vendor.unref(control).openOverCardStyle)),
        q: common_vendor.o(($event) => common_vendor.unref(OpenCard)(common_vendor.unref(control).openOverCardStyle)),
        r: common_vendor.p({
          size: "45",
          name: "edit-pen-fill"
        }),
        s: common_vendor.o((...args) => common_vendor.unref(changeSwiper) && common_vendor.unref(changeSwiper)(...args)),
        t: common_vendor.unref(control).swiperControl,
        v: common_vendor.unref(height).cardHeight + "rpx",
        w: common_vendor.n(common_vendor.unref(control).openOverCardStyle),
        x: common_vendor.n(common_vendor.unref(control).chartStyle),
        y: common_vendor.s(_ctx.__cssVars())
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4f50ca8f"], ["__file", "D:/\u65B0\u5EFA\u6587\u4EF6\u5939 (2)/\u8F6F\u4EF6\u5F00\u53D1/weighBookFontend/pages/main/main.vue"]]);
wx.createPage(MiniProgramPage);
