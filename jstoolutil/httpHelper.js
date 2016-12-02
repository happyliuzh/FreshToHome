//http请求的工具类

function request(action,success,failure,complete)
{
    wx.request({
      url: action.href,
      data: action.params,
      method: action.method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: _commonHeader(), // 设置请求的 header
      success: function(res){
        // success
        success(res);
      },
      fail: function() {
        // fail
        failure();
      },
      complete: function() {
        // complete
        complete();
      }
    })
}

function _commonHeader()
{
    var header = new Object();
    header.appType = "weApp";
    return header;
}

module.exports = {
    request : request
}


