const app = getApp()
const WxParse = require('../../wxParse/wxParse.js');

// pages/create.js
Page({
  data: {
    htmlCode: '',
    height: app.globalData.screenHeight,
    title: '',
    focus: false,
    value: ''
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },
  bindKeyInput: function(e) {
    console.log(e);
    this.setData({
      title: e.detail.value
    })
  },
  bindFormSubmit: function (e) {
    var that = this;
    //发起网络请求
    console.log(this.data.title, e.detail.value.textarea)
    if (!this.data.title || !e.detail.value.textarea) {
      return wx.showModal({
        title: '提示',
        content: '请填写标题或者代码',
        success: function(res) {

        }
      })
    }
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://code.wdsm.io/',
      method: 'POST',
      data: {
        title: e.detail.value.title,
        user_id: app.globalData.openid,
        code: '```\n' + e.detail.value.textarea + '\n```'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.navigateTo({
          url: '/pages/code/code?rowId=' + res.data.id
        })
      },
      fail: function(error) {
        return wx.showModal({
          title: '创建失败',
          content: JSON.stringify(error)
        })

      },
      complete: function () {
        wx.hideLoading();
      }
    })
  }
})
