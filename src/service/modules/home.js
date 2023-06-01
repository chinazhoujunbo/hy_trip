import request from '@/service/request/index.js';

// 网络请求： 请求热门城市
export function getHotCity() {
  return request.get({
    url: '/home/hotSuggests',
  });
}

export function getCategory() {
  return request.get({
    url: '/home/categories',
  })
}

export function getHomeHouseList(page) {
  return request.get({
    url: `/home/houselist?page=${page}`,
  })
}