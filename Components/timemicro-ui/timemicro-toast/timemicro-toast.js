// Components/timemicro-toast/timemicro-toast.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    animationData: {},
    params:{
      content: '提示内容',
      mask: true,
      textAlign: 'center',
      icon:'',
      iconColor:'#fff',
      iconSpace:0,
      width: 300,
      height: 160,
      radius: 10,
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showToast(params) {
      var animation = wx.createAnimation({
        duration: 50,
        timingFunction: 'ease',
      })
      this.animation = animation
      animation.opacity(1).step()
      this.setData({
        animationData: animation.export(),
        params
      })
      /**
       * 延时消失
       */
      setTimeout(function () {
        animation.opacity(0).step()
        this.setData({
          animationData: animation.export()
        })
      }.bind(this), params.duration)
    }
  }
})