"use strict";
const common_vendor = require("../common/vendor.js");
const list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
async function routerInterception() {
  list.forEach((item) => {
    common_vendor.index.addInterceptor(item, {
      //页面跳转前拦截并处置
      invoke(e) {
        console.log("invoke", e);
      },
      success(args) {
        console.log("success", args);
      },
      fail(err) {
        console.log("interceptor-fail", err);
      }
    });
  });
}
exports.routerInterception = routerInterception;
