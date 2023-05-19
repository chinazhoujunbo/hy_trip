<script setup>
import {computed,  } from 'vue';
import useCityStore from '@/stores/modules/city.js';
import {useRouter} from 'vue-router';

const props = defineProps({
  currentGroup: Object,
  default: () => ({})
});
const router = useRouter();

// 动态索引
const indexList = computed(() => {
  const list = props.currentGroup?.cities?.map(item => item.group);
  return ['#'].concat(list);
});

// 监听点击获取选中城市
function cityClick(cityName) {
  useCityStore().currentCity.cityName = cityName;
  router.go(-1);
}

</script>

<template>
  <div class="city-group">
          <van-index-bar :index-list="indexList">

              <van-index-anchor index="热门"/>
              <div class="hot-city-list">
                  <template v-for="item in currentGroup?.hotCities" :key="item">
                      <div class="hot-city" @click="cityClick(item.cityName)">
                          <span>{{ item.cityName }}</span>
                      </div>
                  </template>
              </div>

              <template v-for="item in currentGroup?.cities" :key="item">
              <van-index-anchor :index="item?.group" />
              <template v-for="city in item?.cities">
                  <van-cell :title="city?.cityName" @click="cityClick(item.cityName)"/>
              </template>
              </template>

          </van-index-bar>
<!--      <template v-for="item in currentGroup?.cities" :key="item">-->
<!--          <div class="group-item">-->
<!--              <h2 class="title">标题：{{ item?.group }}</h2>-->
<!--              <div class="list">-->
<!--                  <template v-for="city in item?.cities" :key="city">-->
<!--                      <div class="city">-->
<!--                          {{ city.cityName }}-->
<!--                      </div>-->
<!--                  </template>-->
<!--              </div>-->
<!--          </div>-->
<!--      </template>-->
  </div>
</template>

<style scoped lang="less">
.city-group {

  .hot-city-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 10px 25px 10px 10px;

    .hot-city {
      background-color: #fff4ec;
      border-radius: 14px;
      margin: 10px 0;
      font-size: 12px;
      text-align: center;
      line-height: 28px;
      width: 70px;
      height: 28px;
    }

  }

  :deep(.van-index-anchor) {
    color: var(--primary-color);
  }
}
</style>