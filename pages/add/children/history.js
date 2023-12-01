// pages/add/children/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // showModal: 0,
    HaveCommitted: true,
    showModal: false,
    commitHistory:[
      {
        Addid:1,
        AddName: '只因',
        AddNumber: '1',
        AddStatus: '0',
        AddDetail: '你太美',
        AddPhoto: '/images/Default-pic.png',
      },
      {
        Addid:2,
        AddName: '我不知道喵',
        AddNumber: '1',
        AddStatus: '1',
        AddDetail: '要是事先知道我就会阻止了(TAT)//小桂子非要拉着我来这么一出(TAT)//对不起没能阻止她(TAT)//对不起没能阻止她(TAT)//',
        AddPhoto: '/images/firefox.png',
      },
      {
        Addid:3,
        AddName: '物资',
        AddNumber: '1',
        AddStatus: '1',
        AddDetail: '不行，他行吗？如行。他真行吗？如行。所以他到底行不行？如行。这这这是为什么呢？中国人有句古话：宇宙万法的那个源头，它是什么？它是如如。所以有一个词叫做如来。我总是说，如来这个词很有意思。所以那他来了吗？如来。他真来了吗？如来。所以他到底来没来？如来。你说什么？啊对对对',
        AddPhoto: '/images/Default-pic.png',
      },
      {
        Addid:1,
        AddName: '只因',
        AddNumber: '1',
        AddStatus: '0',
        AddDetail: '你太美',
        AddPhoto: '/images/Default-pic.png',
      },
      {
        Addid:2,
        AddName: '米浴',
        AddNumber: '1',
        AddStatus: '1',
        AddDetail: '要是事先知道我就会阻止了(TAT)//小桂子非要拉着我来这么一出(TAT)//对不起没能阻止她(TAT)//对不起没能阻止她(TAT)//',
        AddPhoto: '/images/Default-pic.png',
      },
      {
        Addid:3,
        AddName: '物资',
        AddNumber: '1',
        AddStatus: '1',
        AddDetail: '不行，他行吗？如行。他真行吗？如行。所以他到底行不行？如行。这这这是为什么呢？中国人有句古话：宇宙万法的那个源头，它是什么？它是如如。所以有一个词叫做如来。我总是说，如来这个词很有意思。所以那他来了吗？如来。他真来了吗？如来。所以他到底来没来？如来。你说什么？啊对对对',
        AddPhoto: '/images/Default-pic.png',
      }
    ],
    /* currentCardIndex 是用于在小卡片具体展示中获取的CurrentIndex。 */
    currentCardIndex: null,
    /*
    CurrentData:{
      AddName: '',
      AddNumber: '',
      AddStatus: '1',
      AddDetail: '',
      AddPhoto: '',
    },
    */
  },
  /**
   * 小窗口展示和取消展示
   */
  showModal: function (e) {
    const cardIndex = e.currentTarget.dataset.cardIndex;
    console.log("1ws")
    console.log(cardIndex);
    console.log(this.data.commitHistory[cardIndex]);
    this.setData({
      showModal: true,
      currentCardIndex: cardIndex,
    });
  },

  hideModal: function () {
    this.setData({
      showModal: false,
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