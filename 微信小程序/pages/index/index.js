// index.js
// 获取应用实例
const app = getApp()
var recommendListJs=require('../../data/test.js');//引入testData所在的js文件
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    // logoUrl:'C:/Users/WangZhuo/Desktop/魔镜/images/logo.png'
    logoUrl:"https://shoot.photo/images/2022/02/03/q3bF7.png",//logo
    rollingImage1:"https://shoot.photo/images/2022/02/03/q3ebG.png",//142
    rollingImage2:"https://shoot.photo/images/2022/02/03/q3chK.png",//143
    rollingImage3:'https://shoot.photo/images/2022/02/03/q3j6F.png'//144
    ,
    noticeList:[
      "这个双11什么护肤品值得买？",
      "来测一下你适合什么样的妆容？",
      "皮肤爱出油长痘痘？你可能需要它！",
      "秋冬补水保湿秘典来啦！"
    ],
    /**
     * 推荐列表
     */
    recommendList:[
      
      {
        layoutImage:'https://img.zcool.cn/community/0188fc5c7bd9d0a801213f2615e16c.gif',//配图
        artitleUrl:'/pages/index/articlePage/article',//文章
        layoutHead:'\n加载中...\n',//展示标题
        layoutTxt:'请稍等...',//展示摘要
        userImage:'🦸‍♀️',
        nickName:'樱桃小丸犊子',//👩‍🚀👱👧头像 描述
        bottomRightContent:[//右边底部属性
          {img:'💗',value:9289,bottomTabEvent:'giveLike',isSelected:true},//🤍💖💗 点赞数
          {img:'💬',value:218,bottomTabEvent:'comment'},//💬 评论数
          {img:'🔃',value:49,bottomTabEvent:'share'}//🔃🔀 转发数
        ]
      },
      {
        layoutImage:'https://img.zcool.cn/community/0188fc5c7bd9d0a801213f2615e16c.gif',//配图
        artitleUrl:'/pages/index/articlePage/article',
        layoutHead:'\n加载中...\n',//展示标题
        layoutTxt:'loading...',//展示摘要
        userImage:'👧',
        nickName:'不瘦10斤不换头像',
        bottomRightContent:[
          {img:'💗',value:9289,bottomTabEvent:'giveLike',isSelected:true},//🤍💖💗 点赞数
          {img:'💬',value:218,bottomTabEvent:'comment'},//💬 评论数
          {img:'🔃',value:49,bottomTabEvent:'share'}//🔃🔀 转发数
        ]
      },
      {
        layoutImage:'https://img.zcool.cn/community/0188fc5c7bd9d0a801213f2615e16c.gif',//配图
        artitleUrl:'/pages/index/articlePage/article',
        layoutHead:'\n加载中...\n',//展示标题
        layoutTxt:'loading...',//展示摘要
        userImage:'👩‍🚀',
        nickName:'小王今天变美了吗',
        bottomRightContent:[
          {img:'💗',value:9289,bottomTabEvent:'giveLike',isSelected:true},//🤍💖💗 点赞数
          {img:'💬',value:218,bottomTabEvent:'comment'},//💬 评论数
          {img:'🔃',value:49,bottomTabEvent:'share'}//🔃🔀 转发数
        ]
      }
    ],
    arrivedBottom:false//底部渲染条件
  },
  //分享按钮
  onShareAppMessage: function () {
    wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      })
      wx.onshareti
  },
  onShareAppMessage(){
    
  },
  onShareTimeline(){
    
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: './personalPanel/personalPanel'
    })
  },
  //
  giveLike:function(obj){
    var id=obj.target.dataset['id']; console.log(id);
    var original=this.data.recommendList[id].bottomRightContent[0];
    var zaneNum=this.data.recommendList[id].bottomRightContent[0].value;
    var isLiked=this.data.recommendList[id].bottomRightContent[0].isSelected;
    var isSelected='recommendList[id].bottomRightContent[0].isSelected';
    var value='recommendList[id].bottomRightContent[0].value';
    var img='recommendList[id].bottomRightContent[0].img';
    var changed={};

    if(isLiked){//已点赞
      changed[isSelected.replace('id',id)]=false;//取消点赞
      changed[value.replace('id',id)]=zaneNum-1;//赞数-1
      changed[img.replace('id',id)]='🤍';//改变图形
      this.setData(changed);
      console.log(this.data.recommendList[id].bottomRightContent);
    }else{//未点赞
      changed[isSelected.replace('id',id)]=true;//点赞
      changed[value.replace('id',id)]=zaneNum+1;//赞数+1
      changed[img.replace('id',id)]='💗';//改变图形
      this.setData(changed);
      console.log(this.data.recommendList[id].bottomRightContent);
    }

  }
  ,
  onLoad:function(options) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    // wx.request({
    //   url: 'https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b',
    //   header:{'Content-Type':'json'},
    //   success:function(res){ 
    //     console.log(res.data);
    //   }
    // })
    console.dir(recommendListJs.postData);
    this.setData(recommendListJs.postData)
  },
  // errorFunction: function(){
  //   this.setData({
  //    avatar: '/image/default.png'
  //   }) 
  // }
  // ,
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
  ,
  addAnswer:function(){
    //点击添加文章触发
    wx.showActionSheet({
      itemList: ['发布文章','分享日常'],
      success:function(res){//点击其中任一项触发success
        if(res.tapIndex==0){//发布文章
          wx.navigateTo({
            url: '/pages/index/releaseArticle/releaseArticle',
          })
        }
        else if(res.tapIndex==1){//分享日常
          wx.navigateTo({
            url: '/pages/index/releaseArticle/releaseArticle',
          })
        }
      }
    })
  }
  ,
    /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // wx.showToast({
    //     icon:'error',
    //     title: '到达底部',
    //     duration: 1500
    // })
    this.setData({arrivedBottom:true});//渲染到达底部内容
  },
  previewImg:function(res){//轮播图点击事件
      // console.log(res.target.dataset.src);
      wx.previewImage({
        current: res.target.dataset.src, //当前显示图片的http链接
        urls: ["https://shoot.photo/images/2022/02/03/q3ebG.png","https://shoot.photo/images/2022/02/03/q3chK.png",'https://shoot.photo/images/2022/02/03/q3j6F.png'] // 需要预览的图片http链接列表
      })
  }
})

