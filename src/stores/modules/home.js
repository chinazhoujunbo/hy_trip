import {defineStore} from 'pinia';
import {addDay, formatDate, getDaysBetweenDates} from '@/utils/format_date.js';
import nzhcn from 'nzh/cn';


export const useHome = defineStore('home', {
  state: () => ({
    startDay: formatDate(new Date()),
    startDate: new Date(),
    endDay: formatDate(new Date().setDate(new Date().getDate() + 1)),
    endDate: addDay(1),
  }),
  getters: {
    interValDay(state, ) {
      return nzhcn.encodeS(getDaysBetweenDates(state.startDate, this.endDate));
    }
  },
  actions: {},
});
