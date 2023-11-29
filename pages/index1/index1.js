// pages/index1/index1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: 0, //导航栏高度
  },

  submit() {
    wx.showToast({
      title: '已提交',
      icon: 'success',
      duration: 2000
    })
    setTimeout(() => {
      wx.navigateBack(-1)
    }, 2000)
  },

  goBack() {
    wx.navigateBack(-1)
  },

  /**
   * 事件处理
   */
  getHeights() {
    let that = this
    // 1.获取胶囊按钮的布局位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    // 2.获取设备信息
    const systemInfo = wx.getSystemInfoSync();
    // 3.计算:计算公式：导航栏高度 = 状态栏高度 + 44。
    // 导航栏高度 = 状态栏高度 + 44
    this.setData({
      navBarHeight: systemInfo.statusBarHeight + 44,
      titleBottom: systemInfo.statusBarHeight
    })
    console.log(systemInfo.statusBarHeight)
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getHeights()
  },
})