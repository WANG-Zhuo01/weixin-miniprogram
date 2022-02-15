// pages/skinResults/skinResults.js
var getNewData = require("../../data/demoData")//引入demoData所在的js文件
Page({


    /**
     * 页面的初始数据
     */
    data: {
        skinData:{},//新皮肤检测数据
        skinGlobalData:{},//历史皮肤检测数据
        photo:"",
        // skinData:getApp().globalData.skinDetectRecord
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
        var that=this;
        wx.getStorage({
            key:'photoPeople',
            success:function(res){
                that.setData({photo:res.data})
            },
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.setData({skinGlobalData:getApp().globalData.skinDetectRecord})
        if(getApp().globalData.saveData==true)this.setData({count:getApp().globalData.skinDetectRecord.length})//第length次检测结果
        else this.setData({count:getApp().globalData.skinDetectRecord.length+1})
        this.setData({skinData:getNewData.postData})
        console.log(this.data.skinData)
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

    }
})