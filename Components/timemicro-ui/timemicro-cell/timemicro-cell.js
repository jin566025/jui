// Components/Cell/timemicro-cell/timemicro-cell.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  properties: {
    title: {
      type: String,
      value: '',
    },
    value: {
      type: String,
      value: '',
    },
    padding: {
      type: Number,
      value: 10,
    },
    height: {
      type: String,
      value: '100%',
    },
    titleFont: {
      type: Number,
      value: 16,
    },
    valueFont: {
      type: Number,
      value: 14,
    },
    valueFontColor: {
      type: String,
      value: '#000000',
    },
    valueFontColor: {
      type: String,
      value: '#000000',
    },
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
    onCellClick: function () {
      this.triggerEvent('onCellClick', '')
    }
  }
})