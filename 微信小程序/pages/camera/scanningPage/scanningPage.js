// pages/camera/scanningPage/scanningPage.js
const { postData } = require("../../../data/demoData")
Page({

    /**
     * 页面的初始数据
     */
    data: {
      newData:{},//从服务端获取到的检测结果
      canvasWidth:150,//画布宽度
      lineWidth:153,//线的宽度
      lineHeight:2,//线的高度
      processValue:100
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.position = {
        x: 1,//线的初始坐标
        y: this.data.canvasWidth+40,
      }
      // 通过 SelectorQuery 获取 Canvas 节点
      wx.createSelectorQuery()
        .select('#canvas')
        .fields({
          node: true,
          size: true,
        })
        .exec(this.init.bind(this))
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
      

        var that=this;
        wx.getStorage({
            key:'photoPeople',
            success:function(res){
                that.setData({facePhoto:res.data});
                var picturePath=that.data.facePhoto;
                wx.getImageInfo({
                src: res.data,
                success (res2) {
                  console.log('scanningPage页获取拍摄到的图片宽高：')
                  console.log(res2.width)
                  console.log(res2.height)
                }
              })
            },
        })
        
        // //请求人脸检测
        // wx.initFaceDetect();
        // //人脸检测
        // var array={};
        // wx.faceDetect({
        //   // frameBuffer:array,
        //   enablePoint: true,
        //   enableConf: true,
        //   enableAngle: true,
        //   enableMultiFace: true,
        //   // width:300,//that.data.faceDetect.width,
        //   // height:400,//that.data.faceDetect.height,
        //   success:function(res){
        //     console.log(res)
        //     wx.navigateTo({
        //       url: '/pages/skinResults/skinResults',
        //     })
        //   }
        // })
        console.log('scanningPage页获取到saveData值：')
        var pushAllow=getApp().globalData.saveData
        console.log( pushAllow)//当前状态
        this.setData({newData:postData})
        if(pushAllow){//保存本次测试结果
          getApp().globalData.skinDetectRecord.push(this.data.newData)
          var lastIndex=getApp().globalData.skinDetectRecord.length;
          console.log('当前:'+getApp().globalData.skinDetectRecord.length)
          console.log(getApp().globalData.skinDetectRecord[lastIndex])
        }
        else{
          console.log('scanningPage页不保存扫描结果')
        }
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
    ,
    /**
     * 扫描动画
     */
    init(res) {
      const width = res[0].width
      const height = res[0].height
  
      const canvas = res[0].node
      const ctx = canvas.getContext('2d')
  
      const dpr = wx.getSystemInfoSync().pixelRatio
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
  
      const renderLoop = () => {
        this.render(canvas, ctx)
        canvas.requestAnimationFrame(renderLoop)
      }
      canvas.requestAnimationFrame(renderLoop)
  
      const img = canvas.createImage()
      img.onload = () => {
        this._img = img
      }
      img.src = '/images/检测界面/scan.png'
    
    },
  
    render(canvas, ctx) {
      ctx.clearRect(0, 0, this.data.canvasWidth+5, this.data.canvasWidth+30)
      this.drawCar(ctx)
    },
  
    drawCar(ctx) {
      if (!this._img) return
      if (this.position.y < 0) {
        this.position.y = this.data.lineWidth+40
      }
      ctx.drawImage(this._img, this.position.x, this.position.y-=1, this.data.lineWidth, this.data.lineHeight)
      ctx.restore()
    },

/**
 * 监听扫描完成，切换页面
 */


    onScanningFinish:function(){//扫描完成
      wx.redirectTo({
        url: '/pages/skinResults/skinResults',
      })
      console.log("进度条达到100%")
      
    }
})