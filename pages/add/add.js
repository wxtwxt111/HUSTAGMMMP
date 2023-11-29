// pages/add/add.js
let showMenuButtonContainerStyle = `
--background:#FFF;

`
let ChangeShowMenuButtonContainerStyle = `
--background:transparent;
`


Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMenu: false,
    showMenuButtonBackground: false,
    showMenuButtonBackgroundopacity: 1,
    viewData: {
      MyshowMenuButtonContainerStyle: ChangeShowMenuButtonContainerStyle
    },
    SRC1: '/images/Default-pic.png',
    PostData: {
      AddName: '',
      AddNumber: '',
      AddStatue: '1',
      AddDetail: '',
      AddPhoto: '/images/Default-pic.png', /*图片是什么格式来着哦好像这玩意返回的是临时存储路径*/
    },
  },

  /**
   * 动画
   */


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

  },
  /**
   * 选择按钮
   */
  radioChange: function(e){
    console.log('单选：', e.detail.value)
    this.setData({
      'PostData.AddStatue': e.detail.value
    });
  },

  /**
   * 提交图片 
   */
  ImageSelect: function(){
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success: res=>{
        this.setData({
          'PostData.AddPhoto':res.tempFiles[0].tempFilePath,
          SRC1: res.tempFiles[0].tempFilePath
        })
        console.log(this.data.PostData.AddPhoto)
        console.log(res.tempFiles[0].tempFilePath)
        /*this.up(); 这个函数用于上传，但是这里大概不需要，在后面提交表单时使用应该是正常的情况*/
      }
      /*
      success: res=>{
        this.setData({
          srcI:res.tempFiles[0].tempFilePath
        })
        console.log(this.data.srcI)
        console.log(res.tempFiles[0].tempFilePath)
        this.up();
        }
      })
    },
  // 上传方法 ，这个name属性是最重要的属性，他对应着后端传参数的指
  // 也就是 MultipartFile file 的file
    up(){
      console.log(this.data.srcI)
      wx.uploadFile({
        filePath: this.data.srcI,
        name: 'file',
        url: 'http://localhost:8200/data/uploadImage',
        */
    })
  },

  /**
   * 更新图片
   */
  UpDateImage: function () {
    
  },

  /**
   * 提交物资
   */
  AddForm: function (data) {
    wx.showModal({
      title: '提交',
      content: '确定提交吗',
      complete: (res) => {
        if (res.cancel) {
          // 爆了！
        }
  
        if (res.confirm) {
          console.log(data.detail.value)
          this.setData({
            'PostData.AddName': data.detail.value.AddName.toString(),
            'PostData.AddNumber': data.detail.value.AddNumber.toString(),
            'PostData.AddDetail': data.detail.value.AddDetail.toString(),
          })
          this.SendData()
        }
      }
    })


  },
  /**
   * 发送数据：这里没有数据库，于是输出当前数据
   */
  SendData: function () {
    console.log(this.data.PostData)
    // 创建动画
    const animation = wx.createAnimation({
      duration: 1000, // 动画持续时间
      timingFunction: 'linear', // 动画时间函数，线性
    });
    // 逐渐改变透明度
    animation.opacity(0).step();
    // 将动画导出，并通过setData更新数据
    this.setData({
      animationData: animation.export(),
      showToast: true, // 控制提示框的显示与隐藏
    });

    // 在动画结束后，隐藏提示框
    setTimeout(() => {
      this.setData({
        showToast: false,
      });
    }, 1000); // 与动画持续时间一致
    wx.showToast({
      title: '上传成功',
      icon: '/images/Complete.png'
    })
  },
  /**
   * 下拉菜单出现函数
   */
  HistoryMenuAppear: function () {
    this.setData({
      showMenu: !this.data.showMenu,
      showMenuButtonBackground: !this.data.showMenuButtonBackground,
    });
    /*
    if (this.data.showMenuButtonBackground) {
      this.setData({'viewData.MyshowMenuButtonContainerStyle': showMenuButtonContainerStyle})
    }
    else{
      this.setData({'viewData.MyshowMenuButtonContainerStyle': ChangeShowMenuButtonContainerStyle})
    }
    */
  },
})


