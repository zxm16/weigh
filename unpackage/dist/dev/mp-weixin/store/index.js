"use strict";
const common_vendor = require("../common/vendor.js");
const useStore = common_vendor.defineStore("main", {
  state: () => {
    return {
      screenTopNavHeight: "54"
    };
  },
  getters: {},
  actions: {
    setScreenTopNavHeight(data) {
      this.screenTopNavHeight = data;
    }
  },
  persist: {
    enabled: true
  }
});
exports.useStore = useStore;
