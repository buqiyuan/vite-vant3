import axios, {AxiosRequestConfig} from 'axios'
import store from '@/store'
import { Toast } from 'vant'
// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string, // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    hideLoading?: boolean
}

// request拦截器 request interceptor
service.interceptors.request.use(
    (config: CustomAxiosRequestConfig) => {
    // 不传递默认开启loading
    if (!config.hideLoading) {
      // loading
      Toast.loading({
        forbidClick: true
      })
    }
    if (store.getters.token) {
      config.headers['X-Token'] = ''
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)
// respone拦截器
service.interceptors.response.use(
  response => {
    Toast.clear()
    const res = response.data
    if (res.status && res.status !== 200) {
      // 登录超时,重新登录
      if (res.status === 401) {
        store.dispatch('FedLogOut').then(() => {
          location.reload()
        })
      }
      return Promise.reject(res || 'error')
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    Toast.clear()
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
