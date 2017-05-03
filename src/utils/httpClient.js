
import axios from 'axios'

export default{
  get (url, _res, _err) {
    axios.get('/')
      .then(function (res) {
        _res(res)
      })
      .catch(function (err) {
        _err(err)
      })
  }
}
