// app.js

App({
  globalData: {
    userInfo: null,
    // logoUrl:"/images/首页/logo.png"
    saveData:false,//是否存入新数据
    skinDetectRecord:[//皮肤检测记录
        {score:97,
          healthLevel:97,dryLevel:53,youngLevel:92,confirmLevwl:31,smoothLevel:42,
          proposal:['你的肌肤正常偏干，耐受性良好，现价段护理要点如下','• 加强保湿，考虑滋润度高的保湿乳霜','• 针对痘痘使用局部急救型祛痘方案','• 注意调理角质代谢，疏通毛孔','• 坚持防晒，抗晒老']
        },//score评分，满分100
        {score:59,healthLevel:59,dryLevel:53,youngLevel:92,confirmLevwl:31,smoothLevel:42,
          proposal:['你的肌肤正常偏干，耐受性良好，现价段护理要点如下','• 加强保湿，考虑滋润度高的保湿乳霜','• 针对痘痘使用局部急救型祛痘方案','• 注意调理角质代谢，疏通毛孔','• 坚持防晒，抗晒老']},
        {score:72,healthLevel:72,dryLevel:53,youngLevel:92,confirmLevwl:31,smoothLevel:42,
          proposal:['你的肌肤正常偏干，耐受性良好，现价段护理要点如下','• 加强保湿，考虑滋润度高的保湿乳霜','• 针对痘痘使用局部急救型祛痘方案','• 注意调理角质代谢，疏通毛孔','• 坚持防晒，抗晒老']},
        {score:83,healthLevel:83,dryLevel:53,youngLevel:92,confirmLevwl:31,smoothLevel:42,
          proposal:['你的肌肤正常偏干，耐受性良好，现价段护理要点如下','• 加强保湿，考虑滋润度高的保湿乳霜','• 针对痘痘使用局部急救型祛痘方案','• 注意调理角质代谢，疏通毛孔','• 坚持防晒，抗晒老']},
        {score:79,healthLevel:79,dryLevel:53,youngLevel:92,confirmLevwl:31,smoothLevel:42,
          proposal:['你的肌肤正常偏干，耐受性良好，现价段护理要点如下','• 加强保湿，考虑滋润度高的保湿乳霜','• 针对痘痘使用局部急救型祛痘方案','• 注意调理角质代谢，疏通毛孔','• 坚持防晒，抗晒老']},
        {score:85,healthLevel:85,dryLevel:53,youngLevel:92,confirmLevwl:31,smoothLevel:42,
          proposal:['你的肌肤正常偏干，耐受性良好，现价段护理要点如下','• 加强保湿，考虑滋润度高的保湿乳霜','• 针对痘痘使用局部急救型祛痘方案','• 注意调理角质代谢，疏通毛孔','• 坚持防晒，抗晒老']},
        {score:90,healthLevel:90,dryLevel:53,youngLevel:92,confirmLevwl:31,smoothLevel:42,
          proposal:['你的肌肤正常偏干，耐受性良好，现价段护理要点如下','• 加强保湿，考虑滋润度高的保湿乳霜','• 针对痘痘使用局部急救型祛痘方案','• 注意调理角质代谢，疏通毛孔','• 坚持防晒，抗晒老']}
    ]
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    
    let that=this//getApp().globalData.arr
    // console.log(that.globalData.skinDetectRecord)
    
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  
})
