// Components/timemicro-ui/timemicro-search/timemicro-search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    iconColor: {
      type: String,
      value: "#b2b2b2"
    },
    iconSize: {
      type: Number,
      value: 38
    },
    fontSize: {
      type: Number,
      value: 32
    },
    fontColor: {
      type: String,
      value: "#323233"
    },
    iconPostion: {
      type: String,
      value: "left"
    },
    iconSpace: {
      type: Number,
      value: 20
    },
    inputSpace: {
      type: Number,
      value: 10
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
    onInput: function (e) {
      this.triggerEvent("onInput",e)
    },
    onBlur: function (e) {
      this.triggerEvent("onBlur",e)
    },
    onConfirm: function (e) {
      this.triggerEvent("onConfirm",e)
    },
  }
})