// pages/index/index.js

Page({
  data: {
    showLine: false, // 控制线段显示与隐藏
    lineWidth: 0, // 线段的宽度
  },

  startAnimation: function () {
    // 点击元素后触发动画
    this.setData({
      showLine: true,
      lineWidth: 10, // 设置线段的初始宽度
    });

    // 动画结束后隐藏线段
    setTimeout(() => {
      this.setData({
        showLine: false,
        lineWidth: 0, // 重置线段宽度
      });
    }, 500); // 这里的 500 毫秒需要和过渡效果的时间一致
  },
});
