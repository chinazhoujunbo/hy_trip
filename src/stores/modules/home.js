import {defineStore} from 'pinia';
import {addDay, formatDate, getDaysBetweenDates} from '@/utils/format_date.js';
import nzhcn from 'nzh/cn';
import {getHotCity} from '@/service/modules/home.js';


export const useHome = defineStore('home', {
  state: () => ({
    startDay: formatDate(new Date()),
    startDate: new Date(),
    endDay: formatDate(new Date().setDate(new Date().getDate() + 1)),
    endDate: addDay(1),
    hotCity: [],
  }),
  getters: {
    interValDay(state, ) {
      return nzhcn.encodeS(getDaysBetweenDates(state.startDate, this.endDate));
    }
  },
  actions: {
    getHot() {
      getHotCity().then(res => this.hotCity = res);
    }
  },
});
