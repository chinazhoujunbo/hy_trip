import {defineStore} from 'pinia';
import {getAllCity} from '@/service/index.js';

const useCityStore = defineStore('city', {
  state: () => ({
    allCities: [],
    currentCity: {
      cityName: '阿富汗',
    },
  }),
  getters: {},
  actions: {
     async fetchAllCitiesData() {
       this.allCities = await getAllCity();
    }
  },
});

export default useCityStore;