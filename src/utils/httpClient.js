import axios from 'axios'
let config = require('../../config')
console.log('__config: ')
console.log(config)
console.log('NODE_ENV: ')
console.log(process.env.NODE_ENV)

let hostname = config.dev.host

if (process.env.NODE_ENV === 'production') {
  hostname = config.build.host
}

function send (_method, _url, _config, _params, _res, _err) {
  let options = Object.assign({
    method: _method,
    url: hostname + _url,
    data: _params
  }, _config)
  axios(options)
    .then((res) => {
      if (res.code === 403) {
        // 未登录，跳转到登录页
      }
      _res(res)
    })
    .catch((err) => {
      _err(err)
    })
}

export default{
  get (url, param, _res, _err) {
    send('get', url, {}, param, _res, _err)
  },
  post (url, param, _res, _err) {
    send('post', url, {}, param, _res, _err)
  },
  delete (url, param, _res, _err) {
    send('delete', url, {}, param, _res, _err)
  }
}
