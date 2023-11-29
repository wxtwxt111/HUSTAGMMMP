// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal1: false,
  },

  goSearch() {
    wx.navigateTo({
      url: '/pages/search/index',
    })
  },

  goSchedule() {
    wx.navigateTo({
      url: '/pages/schedule/index',
    })
  },

    /**
   * 小窗口展示和取消展示
   */
  showModal: function (e) {
    console.log("1ws")
    this.setData({
      showModal1: true,
      // currentCardIndex: cardIndex,
    });
  },

  hideModal: function () {
    this.setData({
      showModal1: false,
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})