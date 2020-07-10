// Components/timemicro-skeleton/timemicro-skeleton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selector: {
      type: String,
      value: 'skeleton'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    systemInfo: {
      windowWidth: 0,
      windowHeight: 0,
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    rectHandle: function() {
      const that = this;
      //绘制不带样式的节点
      // 选择所有 .skeleton-rect的节点
      wx.createSelectorQuery().selectAll(`.${this.properties.selector}-rect`).boundingClientRect().exec(function(res) {
        console.log(res);
        // 保存数据，一维数组是节点，二维数组是节点的信息
        that.setData({
          skeletonRectLists: res[0]
        })
      });
    },
    radiusHandle: function() {
      const that = this;
      // 同样地选择所有的 .skeleton-radius节点
      wx.createSelectorQuery().selectAll(`.${this.properties.selector}-radius`).boundingClientRect().exec(function(res) {
        console.log(res);
        that.setData({
          skeletonCircleLists: res[0]
        })
      });
    },
  },
  attached: function () {
    const systemInfo = wx.getSystemInfoSync();
    this.setData({
      systemInfo
    })
  },

  ready: function() {
    const that = this;
 
    //绘制背景
    // selectAll: 在当前页面下选择匹配选择器 selector 的所有节点。
    wx.createSelectorQuery().selectAll(`.${this.properties.selector}`).boundingClientRect().exec(function(res) {
      console.log(res);
      that.setData({
        'systemInfo.windowHeight': res[0][0].height + res[0][0].top
      })
    });
    this.rectHandle();
    this.radiusHandle();
  },
})