//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: 'cuiblog-436a75',
      traceUser: true
    });
  },
  globalData: {
    blog: {}
  }
});
