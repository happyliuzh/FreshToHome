
const hudUtil = require('../../utils/hudUtil.js');

var categoryList = ["vegetable","meat","fruit"];

var pageObj = {
    //data
    data:{
        selectedcategory:"vegetable",
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
        nextAction:[]
    },
    //生命周期方法
    onLoad:function(options)
    {
        hudUtil.showToast_waiting();
    },
    //事件处理
    //1.处理切换分类
    onCategoryTapped:function(e)
    {
        this.setData({
            selectedcategory : e.currentTarget.id
        });
    },
    //2.下拉刷新
    onPullDownRefresh: function () {
        wx.showNavigationBarLoading();
        setTimeout(function(){
            wx.stopPullDownRefresh();
            wx.hideNavigationBarLoading();
        }, 1000);
    }
}

Page(pageObj);