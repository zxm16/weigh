"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Math) {
  (SmallBar + MiddleBar)();
}
const MiddleBar = () => "./MultipleCircularProgressBarMiddle.js";
const SmallBar = () => "./MultipleCircularProgressBarSmall.js";
const _sfc_main = {
  __name: "MultipleCircularProgressBarBig",
  setup(__props) {
    const circleLeft = common_vendor.ref(null);
    const circleRight = common_vendor.ref(null);
    let timer = 0;
    let percent = 0;
    let num = 50;
    const step = () => {
      if (percent < num) {
        percent += 1;
      }
      if (percent < 50) {
        circleRight.value.style.transform = "rotate(" + 3.6 * percent + "deg)";
      } else {
        circleRight.value.style.transform = "rotate(0)";
        circleRight.value.style.borderColor = "#71d5a1";
        circleLeft.value.style.transform = "rotate(" + 3.6 * (percent - 50) + "deg)";
      }
      if (percent < num) {
        window.clearTimeout(timer);
        timer = window.setTimeout(step, 20);
      }
    };
    common_vendor.onMounted(() => {
      const instance = common_vendor.getCurrentInstance().ctx;
      const dom = instance.$refs["circleLeft"];
      console.log(dom);
      step();
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d066b8a6"], ["__file", "D:/\u65B0\u5EFA\u6587\u4EF6\u5939 (2)/\u8F6F\u4EF6\u5F00\u53D1/weighBookFontend/component/common/MultipleCirular/MultipleCircularProgressBarBig.vue"]]);
wx.createComponent(Component);
