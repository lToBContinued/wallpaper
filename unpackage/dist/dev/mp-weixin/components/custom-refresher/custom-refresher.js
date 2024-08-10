"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  computed: {
    statusText() {
      const statusTextArr = ["哎呀，用点力继续下拉！", "拉疼我啦，松手刷新~~", "正在努力刷新中...", "刷新成功啦~"];
      return statusTextArr[this.status];
    }
  },
  props: {
    status: {
      type: Number,
      default: function() {
        return 0;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($options.statusText)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7a509e9f"]]);
wx.createComponent(Component);
