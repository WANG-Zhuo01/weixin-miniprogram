// pages/camera/camera.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        saveData:true,//是否保存数据
        cameraPosition:'back',//默认后置相机
        show:false,//默认不使用相机
        btnSize:'default',
        itemAlign:'center'
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
     * 从相册选择照片
     */
    chooseGallery:function(){
        var that=this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original'],//原图
            sourceType: ['album'],//相册
            success (res) {
              wx.getImageInfo({
                src: res.tempFilePaths[0],
                success (res1) {
                  console.log('本地路径'+res.path)
                  console.log("图片方向:"+res.orientation)
                  console.log('图片宽度:'+res1.width+'px')
                  console.log('图片高度:'+res1.height+'px')
                }
              })
              // tempFilePath可以作为img标签的src属性显示图片
              const tempFilePaths = res.tempFilePaths
              //设定到缓存中
              wx.setStorage({
                key:'photoPeople',
                data:tempFilePaths,
              })

              wx.navigateTo({
                url: '/pages/camera/scanningPage/scanningPage',
              })
            }
          })
    },
    /**
     * 双击或点按切换前后置相机
     */
    changeCameraPosition:function(res){
        if(this.data.cameraPosition=='back'){
            this.setData({ cameraPosition:'front'})
        }
        else{
            this.setData({ cameraPosition:'back'})
        }
    },
    /**
     * 显示相机
     */
    showCamera:function(){
        this.setData({show:true,btnSize:'mini',itemAlign:'space-between'})

    },
/**
 * 拍照事件
 */
    takeAPhoto: function(){
        const ctx=wx.createCameraContext();
        ctx.takePhoto({
            quality:'high',
            success:(res)=>{
                //设定到缓存中
                wx.setStorage({
                    key:'photoPeople',
                    data:res.tempImagePath,
            })
            //请求API

            //跳转页面
            wx.navigateTo({
              url: '/pages/camera/scanningPage/scanningPage',
            })
            }
        }
        );
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.setData({show:false,btnSize:'default',itemAlign:'center'})

        wx.showActionSheet({ //选择测试对象
          itemList: ['你想帮谁测?','自己测','帮朋友测'],
          success :res=> {
              if(res.tapIndex==0){
                  wx.showModal({
                    cancelColor: 'cancelColor',
                    title:'将选择为“自己测”',
                    success:function(res){
                        console.log(res);
                    }
                  })
              }
              if(res.tapIndex==0||res.tapIndex==1){
                  // getApp().setData({saveData:true});//记录数据
                  getApp().globalData.saveData = true
              }
              if(res.tapIndex==2){
                  // getApp().setData({saveData:false});//不记录数据
                  getApp().globalData.saveData = false
              }
          },
          fail (res) {
            console.log(res)
          }
      })
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
    /**
     * 相机授权
     */
    haveNotAllow:function(){
      // wx.getSetting({
        // success:res=>{console.log(res.authSetting)
          // if(res.authSetting['scope.camera']!==true){
            // console.log('请开启相机授权')
            // wx.authorize({
              // sccope: 'scope.camera',
              // success:function(){
                // console.log('相机授权成功')
              // },
              // fail(){
                console.log('相机授权失败')
                wx.showModal({
                  title: '提示',
                  content: '请打开相机授权后继续',
                  success (res) {
                    if (res.confirm) {
                      console.log('用户点击确定')
                      wx.openSetting({
                        success (res) {
                          console.log(res.authSetting)
                          res.authSetting = {
                            "scope.userInfo": true,
                            "scope.camera": true
                          }
                        }
                      })
                    } else if (res.cancel) {
                      console.log('用户点击取消')
                    }
                  }
                })
              
              // }
            // })
          // }
        // }
      // })
    }
})