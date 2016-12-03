//获取应用实例
var app = getApp()
Page({
  data:{
    userInfo: {}
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh', new Date())
    var that = this;
    that.setData({hidden : false});
       setTimeout(function(){
         
       }, 3000);
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      console.log(userInfo);
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onAboutUsTapped:function(){
    wx.navigateTo({
      url: '../aboutus/aboutus'
    })
  },
  onPullDownRefresh: function () {
        wx.showNavigationBarLoading();
        setTimeout(function(){
            wx.stopPullDownRefresh();
            wx.hideNavigationBarLoading();
        }, 1000);
    }
});