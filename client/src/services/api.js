/* eslint-disable eol-last */
/* eslint-disable */
import axios from 'axios'

export default () => {
  return axios.create({
        baseURL: 'http://localhost:8081',
    })
}
/* eslint-enable */
