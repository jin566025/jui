// Components/timemicro-ui/timemicro-loading/timemicro-loading.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    fontSize: {
      type: Number,
      value: 30,
    },
    fontColor: {
      type: String,
      value: "#78D500"
    },
    type: {
      type: String,
      value: "primary"
    },
    speed: {
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    iconName: "icon_loading_primary"
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  attached: function () {
    const object = new Map([
      ["primary", "icon_loading_primary"],
      ["spinner", "icon_loading_spinner"],
      ["info", "icon_loading_info"],
    ])
    const type = this.properties.type;
    const iconName = object.get(type);
    this.setData({
      iconName
    })
  }
})