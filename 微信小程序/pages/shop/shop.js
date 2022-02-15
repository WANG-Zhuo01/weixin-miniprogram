// pages/shop/shop.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        //我的定制区域
        customGoods:{
            caizhuang://彩妆
                [
                {name:"全部",sub:['ysl小金条','MAC口红','纪梵希小羊皮','香缇卡保湿隔离霜','YSL黑丝段保湿底霜','阿玛尼权力遮瑕粉底','ITO洗脸巾']},
                {name:"口红/唇彩/唇蜜",sub:["雅诗兰黛眼妆密集修护精华","NARS定妆粉饼","纪梵希四宫格","CPB肌肤之钥","兰蔻天鹅颈睫毛膏","迪奥静态眼线液","汤姆福特四色眼影盘"]},
                {name:"妆前乳",sub:['ysl小金条','MAC口红','纪梵希小羊皮','香缇卡保湿隔离霜','YSL黑丝段保湿底霜','阿玛尼权力遮瑕粉底','ITO洗脸巾']},
                {name:"粉底/遮瑕",sub:["雅诗兰黛眼妆密集修护精华","NARS定妆粉饼","纪梵希四宫格","CPB肌肤之钥","兰蔻天鹅颈睫毛膏","迪奥静态眼线液","汤姆福特四色眼影盘"]},
                {name:"眉笔眉粉",sub:['ysl小金条','MAC口红','纪梵希小羊皮','香缇卡保湿隔离霜','YSL黑丝段保湿底霜','阿玛尼权力遮瑕粉底','ITO洗脸巾']},
                {name:"化妆工具",sub:["雅诗兰黛眼妆密集修护精华","NARS定妆粉饼","纪梵希四宫格","CPB肌肤之钥","兰蔻天鹅颈睫毛膏","迪奥静态眼线液","汤姆福特四色眼影盘"]},
                {name:"蜜粉腮红",sub:['ysl小金条','MAC口红','纪梵希小羊皮','香缇卡保湿隔离霜','YSL黑丝段保湿底霜','阿玛尼权力遮瑕粉底','ITO洗脸巾']},
                {name:"眼线笔/睫毛膏",sub:["雅诗兰黛眼妆密集修护精华","NARS定妆粉饼","纪梵希四宫格","CPB肌肤之钥","兰蔻天鹅颈睫毛膏","迪奥静态眼线液","汤姆福特四色眼影盘"]}
            ]
            ,
           hufu:[//护肤
                {name:"全部",sub:[]},
                {name:"卸妆油",sub:[]},
                {name:"洁面",sub:[]},
                {name:"爽肤水/化妆水",sub:[]},
                {name:"面霜乳液",sub:[]},
                {name:"眼霜",sub:[]},
                {name:"精华/精油",sub:[]},
                {name:"身体乳",sub:[]}
            ]
        },


        // rollingImage1:"/images/首页/u142.png",
        // rollingImage2:"/images/首页/u143.png",
        // rollingImage3:'/images/首页/u144.jpg'
        //forRollImage:["/images/首页/u142.png","/images/首页/u143.png",'/images/首页/u144.jpg']
        forRollImage://轮播图
        [
            {imgUrl:"https://s3.bmp.ovh/imgs/2022/02/8f16171fe1926135.png"},
            {imgUrl:"https://s3.bmp.ovh/imgs/2022/02/690e31781cc74135.jpg"},
            {imgUrl:'https://s3.bmp.ovh/imgs/2022/02/11b0672d466826f7.jpg'}
        ],
        // commendList:[
        //     {
        //         layoutPicture:"https://shoot.photo/images/2022/02/03/q3chK.png",
        //         dis:"描述文字",
        //         comment: [{url:'',sum:'998'},
        //         {url:'',sum:'452'},
        //         {url:'',sum:'69'}
        //         ]
        //     },
        //     //{layoutPicture:"",comment:[support,discuss,share]},
        //     //{layoutPicture:"",comment:[support,discuss,share]},
        //    // {layoutPicture:"",comment:[support,discuss,share]},
        // ],
    articleList:    
      [  //文章列表  articleList.reviewList.reviewItem:num selectStatus
        {
            layoutPicture:'https://shoot.photo/images/2022/02/13/qdrwH.jpg',//配图
            //layoutPicture:'https://img.zcool.cn/community/01415f5996acdaa8012156038f6b78.gif',
            layoutText:'lorem',//文字描述
            reviewList:[//评论区
                {reviewItem:'👀',num:9819,reviewTapEvent:'lookCount',selectStatus:true},//查看
                {reviewItem:'💖',num:736,reviewTapEvent:'giveLike',selectStatus:true},//点赞
                {reviewItem:'📃',num:86,reviewTapEvent:'giveComment',selectStatus:false},//评论
                {reviewItem:'⭐',num:449,reviewTapEvent:'addCollect',selectStatus:true}//收藏
            ]
        },
        {
            layoutPicture:'https://shoot.photo/images/2022/02/13/qdWIP.jpg',//配图
            layoutText:'lorem',//文字描述
            reviewList:[//评论区
                {reviewItem:'👀',num:819,reviewTapEvent:'lookCount',selectStatus:true},//查看
                {reviewItem:'💖',num:736,reviewTapEvent:'giveLike',selectStatus:true},//点赞
                {reviewItem:'📃',num:83,reviewTapEvent:'giveComment',selectStatus:false},//评论
                {reviewItem:'⭐',num:449,reviewTapEvent:'addCollect',selectStatus:true}//收藏
            ]
        },
        {
            layoutPicture:'https://shoot.photo/images/2022/02/13/qdb0O.jpg',//配图https://img.zcool.cn/community/01415f5996acdaa8012156038f6b78.gif
            layoutText:'lorem',//文字描述
            reviewList:[//评论区
                {reviewItem:'👀',num:192,reviewTapEvent:'lookCount',selectStatus:true},//查看
                {reviewItem:'💖',num:369,reviewTapEvent:'giveLike',selectStatus:true},//点赞
                {reviewItem:'📃',num:36,reviewTapEvent:'giveComment',selectStatus:false},//评论
                {reviewItem:'⭐',num:469,reviewTapEvent:'addCollect',selectStatus:true}//收藏
            ]
        },
        {
            layoutPicture:'https://shoot.photo/images/2022/02/13/qdany.jpg',//配图
            layoutText:'lorem',//文字描述
            reviewList:[//评论区
                {reviewItem:'👀',num:992,reviewTapEvent:'lookCount',selectStatus:true},//查看
                {reviewItem:'💖',num:739,reviewTapEvent:'giveLike',selectStatus:true},//点赞
                {reviewItem:'📃',num:83,reviewTapEvent:'giveComment',selectStatus:false},//评论
                {reviewItem:'⭐',num:449,reviewTapEvent:'addCollect',selectStatus:true}//收藏
            ]
        },
        {
            layoutPicture:'https://shoot.photo/images/2022/02/13/qdoNh.jpg',//配图
            layoutText:'lorem',//文字描述
            reviewList:[//评论区
                {reviewItem:'👀',num:692,reviewTapEvent:'lookCount',selectStatus:true},//查看
                {reviewItem:'💖',num:369,reviewTapEvent:'giveLike',selectStatus:true},//点赞
                {reviewItem:'📃',num:36,reviewTapEvent:'giveComment',selectStatus:false},//评论
                {reviewItem:'⭐',num:49,reviewTapEvent:'addCollect',selectStatus:true}//收藏
            ]
        },
        {
            layoutPicture:'https://shoot.photo/images/2022/02/13/qdcpo.jpg',//配图
            layoutText:'lorem',//文字描述
            reviewList:[//评论区
                {reviewItem:'👀',num:981,reviewTapEvent:'lookCount',selectStatus:true},//查看
                {reviewItem:'💖',num:739,reviewTapEvent:'giveLike',selectStatus:true},//点赞
                {reviewItem:'📃',num:86,reviewTapEvent:'giveComment',selectStatus:false},//评论
                {reviewItem:'⭐',num:469,reviewTapEvent:'addCollect',selectStatus:true}//收藏
            ]
        },
        {
            layoutPicture:'https://shoot.photo/images/2022/02/13/qdjPD.jpg',//配图
            layoutText:'lorem',//文字描述
            reviewList:[//评论区
                {reviewItem:'👀',num:9192,reviewTapEvent:'lookCount',selectStatus:true},//查看
                {reviewItem:'💖',num:369,reviewTapEvent:'giveLike',selectStatus:true},//点赞
                {reviewItem:'📃',num:36,reviewTapEvent:'giveComment',selectStatus:false},//评论
                {reviewItem:'⭐',num:469,reviewTapEvent:'addCollect',selectStatus:true}//收藏
            ]
        },
        {
            layoutPicture:'https://shoot.photo/images/2022/02/13/qdeek.jpg',//配图
            layoutText:'lorem',//文字描述
            reviewList:[//评论区
                {reviewItem:'👀',num:192,reviewTapEvent:'lookCount',selectStatus:true},//查看
                {reviewItem:'💖',num:73,reviewTapEvent:'giveLike',selectStatus:true},//点赞
                {reviewItem:'📃',num:36,reviewTapEvent:'giveComment',selectStatus:false},//评论
                {reviewItem:'⭐',num:44,reviewTapEvent:'addCollect',selectStatus:true}//收藏
            ]
        }
      ]  

    },
    /**
     * 点赞事件
     */
    // var container=document.getElementById("container");
    // var btn=document.getElementById("btn");
    // var flag=1;
    giveLike:function (obj){
        console.log(obj.target.dataset.id);//定位点赞位置
        console.log(obj.target.dataset.isSlected);//点赞状态
        var id=obj.target.dataset.id;//元素id
        var isSelected=obj.target.dataset.isSlected;//赞状态
        var oldNum=this.data.articleList[id].reviewList[1].num;//点赞数

        var str = 'articleList[id].reviewList[1]';
        var n = str.replace("id", id);
        var changed={};
        if(isSelected){//已点赞
            changed[n.concat('.','reviewItem')]='🤍';
            changed[n.concat('.','selectStatus')]=false;
            changed[n.concat('.','num')]=oldNum-1;
            this.setData(changed);
        }else if(!isSelected){//未点赞
            changed[n.concat('.','reviewItem')]='💖';
            changed[n.concat('.','selectStatus')]=true;
            changed[n.concat('.','num')]=oldNum+1;
            this.setData(changed);
        }
        // if(oldNum<=0){
        //     switch(id){
        //         case 0:
        //         this.setData({
        //             'articleList[0].reviewList[1].reviewItem':'🤍',
        //             'articleList[0].reviewList[1].num':0,
        //             'articleList[0].reviewList[1].selectStatus':false
        //         })
        //             break;
        //         case 1:
        //             this.setData({
        //                 'articleList[1].reviewList[1].reviewItem':'🤍',
        //                 'articleList[1].reviewList[1].num':0,
        //                 'articleList[1].reviewList[1].selectStatus':false
        //             })
        //             break;
        //         case 2:
        //             this.setData({
        //                 'articleList[2].reviewList[1].reviewItem':'🤍',
        //                 'articleList[2].reviewList[1].num':0,
        //                 'articleList[2].reviewList[1].selectStatus':false
        //             })
        //             break;
        //         case 3:
        //             this.setData({
        //                 'articleList[3].reviewList[1].reviewItem':'🤍',
        //                 'articleList[3].reviewList[1].num':0,
        //                 'articleList[3].reviewList[1].selectStatus':false
        //             })
        //             break;
        //         case 4:
        //             this.setData({
        //                 'articleList[4].reviewList[1].reviewItem':'🤍',
        //                 'articleList[4].reviewList[1].num':0,
        //                 'articleList[4].reviewList[1].selectStatus':false
        //             })
        //             break;
        //         default:
        //             console.log('暂无更多渲染项');
        //     }

        // }
        // if(obj.target.dataset.id!=undefined){
        //     if(isSelected===true){//已点赞
        //         console.log('赞数'+oldNum);
        //         switch(id){
        //             case 0:
        //                 this.setData({
        //                     'articleList[0].reviewList[1].reviewItem':'🤍',//取消赞
        //                     'articleList[0].reviewList[1].num':oldNum-1,//赞数减一
        //                     'articleList[0].reviewList[1].selectStatus':false//设为未赞状态
        //                 });
        //                 break;
        //             case 1:
        //                 this.setData({
        //                     'articleList[1].reviewList[1].reviewItem':'🤍',//取消赞
        //                     'articleList[1].reviewList[1].num':oldNum-1,//赞数减一
        //                     'articleList[1].reviewList[1].selectStatus':false//设为未赞状态
        //                 });
        //                 break;
        //             case 2:
        //                 this.setData({
        //                     'articleList[2].reviewList[1].reviewItem':'🤍',//取消赞
        //                     'articleList[2].reviewList[1].num':oldNum-1,//赞数减一
        //                     'articleList[2].reviewList[1].selectStatus':false//设为未赞状态
        //                 });
        //                 break;
        //             case 3:
        //                 this.setData({

        //                     'articleList[3].reviewList[1].reviewItem':'🤍',//取消赞
        //                     'articleList[3].reviewList[1].num':oldNum-1,//赞数减一
        //                     'articleList[3].reviewList[1].selectStatus':false//设为未赞状态
        //                 });
        //                 break;
        //             case 4:
        //                 this.setData({

        //                     'articleList[4].reviewList[1].reviewItem':'🤍',//取消赞
        //                     'articleList[4].reviewList[1].num':oldNum-1,//赞数减一
        //                     'articleList[4].reviewList[1].selectStatus':false//设为未赞状态
        //                 });
        //                 break;
        //         default:
        //             console.log('暂无更多渲染项');
        //     }
        //         console.log('取消赞'+this.data.articleList[id].reviewList[1].selectStatus);
        //     }
        //     else if(isSelected===false){//未点赞
        //         console.log('赞数'+oldNum);
        //         switch(id){
        //             case 0:
        //             this.setData({
        //                 'articleList[0].reviewList[1].reviewItem':'💖',//点赞
        //                 'articleList[0].reviewList[1].num':oldNum+1,//赞数加一
        //                 'articleList[0].reviewList[1].selectStatus':true//设为已赞状态
        //             });
        //             break;
        //             case 1:
        //             this.setData({
        //                 'articleList[1].reviewList[1].reviewItem':'💖',//点赞
        //                 'articleList[1].reviewList[1].num':oldNum+1,//赞数加一
        //                 'articleList[1].reviewList[1].selectStatus':true//设为已赞状态
        //             });
        //             break;
        //             case 2:
        //             this.setData({
        //                 'articleList[2].reviewList[1].reviewItem':'💖',//点赞
        //                 'articleList[2].reviewList[1].num':oldNum+1,//赞数加一
        //                 'articleList[2].reviewList[1].selectStatus':true//设为已赞状态
        //             });
        //             break;
        //             case 3:
        //             this.setData({
        //                 'articleList[3].reviewList[1].reviewItem':'💖',//点赞
        //                 'articleList[3].reviewList[1].num':oldNum+1,//赞数加一
        //                 'articleList[3].reviewList[1].selectStatus':true//设为已赞状态
        //             });
        //             break;
        //             case 4:
        //             this.setData({
        //                 'articleList[4].reviewList[1].reviewItem':'💖',//点赞
        //                 'articleList[4].reviewList[1].num':oldNum+1,//赞数加一
        //                 'articleList[4].reviewList[1].selectStatus':true//设为已赞状态
        //             });
        //             break;
        //             default:
        //                 console.log('暂无更多渲染项');
        //                 break;
        //         }
        //         console.log('点赞'+this.data.articleList[id].reviewList[1].selectStatus);    
            
        //     }
        // }  
    },
    previewImg:function(res){//轮播图点击事件
        var i=res.target.dataset.imgindex;
        // console.log(res.target.dataset.imgindex);
        // var currentImg=this.data.forRollImage[i].imgUrl;
        // console.log(currentImg);
        wx.previewImage({
        current: this.data.forRollImage[i].imgUrl , //当前显示图片的http链接
        urls: ["https://s3.bmp.ovh/imgs/2022/02/8f16171fe1926135.png","https://s3.bmp.ovh/imgs/2022/02/690e31781cc74135.jpg",'https://s3.bmp.ovh/imgs/2022/02/11b0672d466826f7.jpg'] // 需要预览的图片http链接列表
        })
    }
    ,
    commingSoon:function(){//推荐列表项点击事件
        wx.showToast(
            {title:'敬请期待',
            image:'../../images/logo (1).png',
            mask:true,
            //duration: 2000
        }
        )
    }
    ,
    /**
     * 输入事件
     */
    inputed:function(obj){
       // console.dir(obj.target.dataset);
        console.log(obj.detail.value);
       this.setData({output:obj.detail.value});
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
       // console.log(options)
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
        wx.showToast({
            icon:'error',
            title: '已到底部',
            duration: 1500
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
    
})