function showToast_waiting(title='请稍后')
{
    wx.showToast({
        title: title,
        icon: 'loading',
        duration: 2000
    });
}

module.exports={
    showToast_waiting : showToast_waiting
}
