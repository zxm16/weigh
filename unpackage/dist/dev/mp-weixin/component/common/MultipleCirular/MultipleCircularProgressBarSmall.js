"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "MultipleCircularProgressBarSmall",
  setup(__props) {
    const circleSmallLeft = common_vendor.ref(null);
    const circleSmallRight = common_vendor.ref(null);
    let timer = 0;
    let percent = 0;
    let num = 70;
    const step = () => {
      if (percent < num) {
        percent += 1;
      }
      if (percent < 50) {
        circleSmallRight.value.style.transform = "rotate(" + 3.6 * percent + "deg)";
      } else {
        circleSmallRight.value.style.transform = "rotate(0)";
        circleSmallRight.value.style.borderColor = "#fcbd71";
        circleSmallLeft.value.style.transform = "rotate(" + 3.6 * (percent - 50) + "deg)";
      }
      if (percent < num) {
        window.clearTimeout(timer);
        timer = window.setTimeout(step, 20);
      }
    };
    common_vendor.onMounted(() => {
      const instance = common_vendor.getCurrentInstance();
      const query = common_vendor.index.createSelectorQuery().in(instance);
      query.select("#circleLeft").boundingClientRect((data) => {
        if (data) {
          circleLeft.value = data;
        }
      }).exec();
      query.select("#circleRight").boundingClientRect((data) => {
        if (data) {
          circleRight.value = data;
        }
      }).exec();
      step();
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2723632e"], ["__file", "D:/\u65B0\u5EFA\u6587\u4EF6\u5939 (2)/\u8F6F\u4EF6\u5F00\u53D1/weighBookFontend/component/common/MultipleCirular/MultipleCircularProgressBarSmall.vue"]]);
wx.createComponent(Component);
