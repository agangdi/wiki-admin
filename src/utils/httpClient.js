import axios from 'axios'
import md5 from 'md5'
import wikiConst from './wikiConst'
let config = require('../../config')
let qs = require('qs')
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
    data: qs.stringify(_params),
    headers: {
      'X-EMAIL': localStorage.getItem(wikiConst.email),
      'X-TOKEN': localStorage.getItem(wikiConst.token)
    }
  }, _config)
  axios(options)
    .then((res) => {
      if (res.data.code === 403) {
        // 未登录，跳转到登录页
        location.hash = 'login'
      } else if (res.data.code !== 0) {
        alert(res.data.msg)
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
  },
  md5 (str) {
    return md5(str)
  },
  logout () {
    localStorage.removeItem(wikiConst.email)
    localStorage.removeItem(wikiConst.email)
    location.hash = '/login'
  }
}
