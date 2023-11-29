Page({
  data: {
    statusRange: ['全部', '待审核', '已通过'],
    selectedStatus: '全部',
    progressData: []
  },
  statusChange: function (e) {
    this.setData({
      selectedStatus: this.data.statusRange[e.detail.value]
    });
  },
  queryProgress: function () {
    var item = this.data.itemInput || "";
    var status = this.data.selectedStatus === "全部" ? "all" : (this.data.selectedStatus === "待审核" ? "pending" : "approved");
    var result = borrowedProgress.queryProgress(item, status);
    this.setData({
      progressData: result
    });
  }
});