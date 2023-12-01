// index.js
let availableLendButtonColorStyle = `
--background:#07C160;
`
let unavailableLendButtonColorStyle = `
--background:#414141;
`

Page({
  data: {
    NotBlank: 1,
    navBarHeight: 0, //导航栏高度
    titleBottom: 0, //顶部距离
    title: '自定义顶部',
    searchInputData: '',
    viewData: [{
      lendButtonColor: availableLendButtonColorStyle,
    }],
    boxArray: [{
      title: '长绮',
      materialStruct: [{
        index: '1',
        status: 1,
        lendInfoStruct: [{
          lender: "张三",
          lenderNum: "U202114514",
          useFor: "组织活动",
          returnDate: "2月30日",
          verify: "Lucy",
        }],
      }, {
        index: '2',
        status: 1,
        lendInfoStruct: [{
          lender: "张三",
          lenderNum: "U202114514",
          useFor: "组织活动",
          returnDate: "2月30日",
          verify: "Lucy",
        }],
      }, {
        index: '3',
        status: 0,
        lendInfoStruct: [{
          lender: "张三",
          lenderNum: "U202114514",
          useFor: "组织活动",
          returnDate: "2月30日",
          verify: "Lucy",
        }],
      }],
      updateInfoStruct: [{
        update: '王五',
        updateNumber: 'U121212122',
        updateDate: "1月1日",
        verify: "Mike",
      }],
      detail: '这只是个备注',
      detailPhoto: '/images/Default-pic.png',
      // unavaliableNumber: 3,
    },{
      title: '素食',
      materialStruct: [{
        index: '1',
        status: 0,
        lendInfoStruct: [{
          lender: "张三",
          lenderNum: "U202114514",
          useFor: "组织活动",
          returnDate: "2月30日",
          verify: "Lucy",
        }],
      }, {
        index: '2',
        status: 0,
        lendInfoStruct: [{
          lender: "张三",
          lenderNum: "U202114514",
          useFor: "组织活动",
          returnDate: "2月30日",
          verify: "Lucy",
        }],
      }, {
        index: '3',
        status: 0,
        lendInfoStruct: [{
          lender: "张三",
          lenderNum: "U202114514",
          useFor: "组织活动",
          returnDate: "2月30日",
          verify: "Lucy",
        }],
      }],
      updateInfoStruct: [{
        update: '王五',
        updateNumber: 'U121212122',
        updateDate: "1月1日",
        verify: "Mike",
      }],
      detail: '这只是个备注',
      detailPhoto: '/images/Default-pic.png',
      // unavaliableNumber: 3,
    }]
  },

  goBack() {
    wx.navigateBack(-1)
  },

  navigateToPage() {
    console.log(111)
    wx.navigateTo({
      url: '/pages/index1/index1',
    })
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

  countAvailable: function (index = 0) {
    console.log("喵");
    const dataArray = this.data.boxArray[index];
    let number = 0;
    for (let i = 0; i < dataArray.materialStruct.length; i++) {
      if (dataArray.materialStruct[i].status) {
        number = 1;
      }
    }
    return number;
  },

  lend: function (e) {
    /* 没有接入数据库，这里采取这种办法 */
    const cardIndex = e.currentTarget.dataset.cardIndex;
    console.log(cardIndex);
    const dataArray = this.data.boxArray[cardIndex];
    console.log("物资："+dataArray.title+" 被成功借用，数量由"+this.countAvailable(cardIndex)+"减少到"+(this.countAvailable(cardIndex)-1))
    wx.showToast({
      title: '成功借用',
    })
  },

  handleInputChange: function (e) {
    const inputValue = e.detail.value;
    console.log(inputValue);
    console.log(boxArray[0])
    this.setData({
      searchInputData: inputValue,
    })
  }
})