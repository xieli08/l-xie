import Vue from 'vue'
import store from './store'


import axios from 'axios'

export default {
  aRequest: function (options) {
    setTimeout(() => {
      // var headers = {}
      // if (!options.withoutHeaders) {
      //   headers.Authorization = 'Bearer ' + store.state.access_token
      //   for (var i in (options.headers || {})) {
      //     headers[i] = options.headers[i]
      //   }
      //   headers.hospital = store.state.hospital
      // }
      // 开始发送ajax请求
      var self = this
      // var data = options.data || null
      axios({
        method: 'GET',
        url: 'https://api.chinacaring.com:20224/salary/user/1208/',
        asyn: true,
        // cache: false,
        // headers: headers,
        // data: data
      })
      .then(function (res) {
        var successCallback = options.success || null
        if (typeof successCallback === 'function') {
          successCallback(res.data, res.headers)
        }
      })
      .catch(function (xhr) {
        var code = xhr && xhr.responseJSON && xhr.responseJSON.code || -1
        if (code === 30006) {
          console.error('token失效')
        } else if (code === 30007) {
          console.error('token过期')
          // 刷新token以后重试请求
          self.refreshTokenEvent(function () {
            var retryCallback = self.caringRequest(options) || null
            if (typeof retryCallback === 'function') {
              retryCallback()
            }
          })
        } else {
          // 其他网络连接性错误，计划采用toast.............................
          console.error(xhr && xhr.responseJSON && xhr.responseJSON.message || '网络请求异常')
          self.toast({
            message: xhr && xhr.responseJSON && xhr.responseJSON.message || '网络请求异常'
          })
        }
      })
    }, Math.random() * 1000)
  },
}