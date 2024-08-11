"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index = require("../../api/index.js");
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_mp_html2 = common_vendor.resolveComponent("mp-html");
  (_easycom_uni_tag2 + _easycom_uni_dateformat2 + _easycom_mp_html2)();
}
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_mp_html = () => "../../uni_modules/mp-html/components/mp-html/mp-html.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_dateformat + _easycom_mp_html)();
}
const _sfc_main = {
  __name: "notice",
  setup(__props) {
    const noticeDetail = common_vendor.ref({});
    let noticeId;
    common_vendor.onLoad((e) => {
      const { name = "公告详情", id } = e;
      noticeId = id;
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
      getNoticeDetail();
    });
    const getNoticeDetail = async () => {
      const res = await api_index.getNoticeDetailService({ id: noticeId });
      noticeDetail.value = res.data;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: noticeDetail.value.select
      }, noticeDetail.value.select ? {
        b: common_vendor.p({
          inverted: true,
          text: "置顶",
          type: "error"
        })
      } : {}, {
        c: common_vendor.t(noticeDetail.value.title),
        d: common_vendor.t(noticeDetail.value.author),
        e: common_vendor.p({
          date: noticeDetail.value.publish_date,
          format: "yyyy-MM-dd hh:mm:ss"
        }),
        f: common_vendor.p({
          content: noticeDetail.value.content
        }),
        g: common_vendor.t(noticeDetail.value.view_count)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1c2e4c1e"]]);
wx.createPage(MiniProgramPage);
