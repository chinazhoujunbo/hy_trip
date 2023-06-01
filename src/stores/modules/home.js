import {defineStore} from 'pinia';
import {addDay, formatDate, getDaysBetweenDates} from '@/utils/format_date.js';
import nzhcn from 'nzh/cn';
import {
  getCategory,
  getHomeHouseList,
  getHotCity,
} from '@/service/modules/home.js';


export const useHome = defineStore('home', {
  state: () => ({
    startDay: formatDate(new Date()),
    startDate: new Date(),
    endDay: formatDate(new Date().setDate(new Date().getDate() + 1)),
    endDate: addDay(1),
    currentPage: 1,
    hotCity: [],
    category: [],
    houseList: [],
  }),
  getters: {
    interValDay(state, ) {
      return nzhcn.encodeS(getDaysBetweenDates(state.startDate, this.endDate));
    }
  },
  actions: {
    getHot() {
      getHotCity().then(res => this.hotCity = res);
    },
    fetchCategory() {
      getCategory().then(res => this.category = res);
    },
    fetchHouseListData() {
      getHomeHouseList(this.currentPage ++).then(res => this.houseList.push(...res));
    }
  },
});
