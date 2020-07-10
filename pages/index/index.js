//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onInput:function(e){
    console.log("onInput",e)
  },
  onBlur:function(e){
    console.log("onBlur",e)
  },
  onConfirm:function(e){
    console.log("onConfirm",e)
  },
  onCellClick: function (e) {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onButtonClick: function (e) {
    this.toast.showToast({
      content: '恭喜你，获得了toast',
      width: 400,
      height: 200,
      fontSize: 28,
      textAlign: 'center',
      duration: 3000,
      mask: true,
    });
  },
  onButtonClick2: function (e) {
    this.toast.showToast({
      icon:'icon_tips',
      content: '恭喜你，获得了toast',
      width: 400,
      height: 200,
      fontSize: 28,
      textAlign: 'center',
      duration: 3000,
      mask: true,
      iconColor:'#fff',
      iconSpace:10,
      iconSize:30,
    });
  },
  onButtonClick3: function (e) {
    this.toast.showToast({
      icon:'loading',
      content: '恭喜你，获得了toast',
      width: 400,
      height: 200,
      fontSize: 28,
      textAlign: 'center',
      duration: 3000,
      iconSpace:10,
      mask: true,
    });
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function () {
    this.toast = this.selectComponent("#timemicro-toast");
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})