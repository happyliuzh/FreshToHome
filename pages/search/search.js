var pageObj = {
    data:{
        list:[1,2,3,4,5,6,7]
    },
    onPullDownRefresh: function () {
        wx.showNavigationBarLoading();
        setTimeout(function(){
            wx.stopPullDownRefresh();
            wx.hideNavigationBarLoading();
        }, 1000);
    }
};

Page(pageObj);