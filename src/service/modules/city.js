import request from '@/service/request/index.js';

// 网络请求： 请求城市数据
export function getAllCity() {
  return request.get({
    url: '/city/all',
  });
}