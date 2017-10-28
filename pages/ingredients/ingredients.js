
const hudUtil = require('../../utils/hudUtil.js');

var categoryList = ["vegetable","meat","fruit"];

var pageObj = {
    //data
    data:{
        list:[{
            id : "3270",
            name:"花菜",
            price:"7.00元/500g",
            picUrl:""
        },{
            id : "3270",
            name:"花菜",
            price:"7.00元/500g",
            picUrl:""
        },{
            id : "3270",
            name:"花菜",
            price:"7.00元/500g",
            picUrl:""
        },{
            id : "3270",
            name:"花菜",
            price:"7.00元/500g",
            picUrl:""
        },{
            id : "3270",
            name:"花菜",
            price:"7.00元/500g",
            picUrl:""
        },{
            id : "3270",
            name:"花菜",
            price:"7.00元/500g",
            picUrl:""
        }],
        nextAction:[],
        topTabItems:["蔬菜","水果","肉类"],
        currentTopItem:0,
        fruitDataList:[{
            id : "3270",
            name:"花菜",
            price:"7.00元/500g",
            picUrl:""
        },{
            id : "3270",
            name:"花菜",
            price:"7.00元/500g",
            picUrl:""
        }],
        vegitableDataList:[{
            id : "3270",
            name:"花菜",
            price:"7.00元/500g",
            picUrl:""
        },{
            id : "3270",
            name:"花菜",
            price:"7.00元/500g",
            picUrl:""
        }],
        meatDataList:[{
            id : "3270",
            name:"花菜",
            price:"7.00元/500g",
            picUrl:""
        },{
            id : "3270",
            name:"花菜",
            price:"7.00元/500g",
            picUrl:""
        }],
        swiperHeight:'0'

    },
    //生命周期方法
    onLoad:function(options)
    {
        hudUtil.showToast_waiting();
    },
    //生命周期函数-监听页面初次渲染完毕
    onReady:function(){
        var that = this;
        wx.getSystemInfo({
        success: function(res) {
            that.setData({
                swiperHeight: (res.windowHeight-37)
            });
        }
        })
    },
    //事件处理
   
    //2.下拉刷新
    onPullDownRefresh: function () {
        wx.showNavigationBarLoading();
        setTimeout(function(){
            wx.stopPullDownRefresh();
            wx.hideNavigationBarLoading();
        }, 1000);
    },
    //切换顶部标签
  switchTab:function(e){
    this.setData({
      currentTopItem:e.currentTarget.dataset.idx
    });
    // //如果需要加载数据
    // if (this.needLoadNewDataAfterSwiper()) {
    //   this.refreshNewData();
    // }
  },

  //swiperChange
  bindChange:function(e){
    var that = this;
    that.setData({
      currentTopItem:e.detail.current
    });

    //如果需要加载数据
    // if (this.needLoadNewDataAfterSwiper()) {
    //   this.refreshNewData();
    // }
  }
}

Page(pageObj);