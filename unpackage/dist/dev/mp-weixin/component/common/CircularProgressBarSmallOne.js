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
  __name: "CircularProgressBarSmallOne",
  props: ["mealsTime", "color", "progress"],
  setup(__props) {
    const props = __props;
    const circleLeft = common_vendor.ref(null);
    const circleRight = common_vendor.ref(null);
    let timer = 0;
    let percent = 0;
    let num = 0;
    let mealsTime = common_vendor.ref("");
    let color = common_vendor.ref("");
    const step = () => {
      if (percent < num) {
        percent += 1;
      }
      if (percent < 50) {
        circleRight.value.style.transform = "rotate(" + 3.6 * percent + "deg)";
      } else {
        circleRight.value.style.transform = "rotate(0)";
        circleRight.value.style.borderColor = color.value;
        circleLeft.value.style.transform = "rotate(" + 3.6 * (percent - 50) + "deg)";
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
      mealsTime.value = props.mealsTime;
      color.value = props.color;
      num = Number(props.progress);
      step();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "plus",
          color: "white",
          size: "30rpx"
        }),
        b: "inset 0 0 0 10rpx " + common_vendor.unref(color),
        c: common_vendor.t(common_vendor.unref(mealsTime))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-306b0b5e"], ["__file", "D:/\u65B0\u5EFA\u6587\u4EF6\u5939 (2)/\u8F6F\u4EF6\u5F00\u53D1/weighBookFontend/component/common/CircularProgressBarSmallOne.vue"]]);
wx.createComponent(Component);
