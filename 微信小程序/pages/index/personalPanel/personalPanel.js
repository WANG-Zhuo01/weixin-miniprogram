// pages/index/personalPanel/personalPanel.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    navToLogs(){//日志
        wx.navigateTo({
          url: '/pages/logs/logs',
        //   events: events,
          success: (result) => {

          },
          fail: (res) => {},
          complete: (res) => {},
        })
    },
    //设置
    setting(){
        wx.openSetting({
            success (res) {
              console.log(res.authSetting)
            }
          })
    },
    //退出程序
    exit(){
        wx.exitMiniProgram({
            success:function(){
                wx:wx.showToast({
                  title: '退出程序',
                  duration:1000
                })
            }
        })
        
    }
})