import axios from 'axios'
import {BASE_URL, TIMEOUT} from '@/service/request/config.js';

class HYRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  async get(config) {
    const res = await this.request({ ...config, method: "get" });
    return Promise.resolve(res.data);
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new HYRequest(BASE_URL, TIMEOUT);

