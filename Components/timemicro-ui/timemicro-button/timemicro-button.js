// Components/timemicro-button/timemicro-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    fontSize: {
      type: Number,
      value: 30
    },
    width: {
      type: Number,
      value: 120,
    },
    height: {
      type: Number,
      value: 80
    },
    fontColor: {
      type: String,
      value: "#ffffff"
    },
    radius: {
      type: Number,
      value: 10
    },
    borderWeight: {
      type: Number,
      value: 1,
    },
    borderColor: {
      type: String,
      value: '',
    },
    bgColor: {
      type: String,
      value: "#ffffff",
    },
    to: {
      type: String,
      value: '',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onButtonClick: function () {
      const url = this.properties.to;
      if (url) {
        wx.navigateTo({
          url,
        })
      } else {
        this.triggerEvent('buttonClick')
      }
    }
  }
})