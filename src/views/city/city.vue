<script setup>

import {computed, ref, toRefs} from 'vue';
   import router from '@/router/index.js';
   import useCityStore from '@/stores/modules/city.js';
import CityGroup from '@/views/city/components/city-group.vue';

   const searchValue = ref('');
   const tabActive = ref('');
   const { allCities } = toRefs(useCityStore());
   const currentGroup = computed(() => allCities.value[tabActive.value]);
   function onCancel() {
     searchValue.value = '';
     router.go(-1);
   }
   function onSearch() {
     console.log('commit');
   }

   // 这个位置发送网络请求两个缺点
   // 网络请求过多，那么页面组件种就包含大量对于网络请求和数据的处理逻辑
   // 封装很多子组件，必须一步一步传递过去
   // 获取城市数据
   // const allCity = ref({});
   // getAllCity().then(res => {
   //   allCity.value = res;
   // })
   useCityStore().fetchAllCitiesData();
</script>

<template>
 <div class="city top-page">
   <div class="top">
       <van-search v-model="searchValue"
                   shape="round"
                   show-action
                   @search="onSearch"
                   @cancel="onCancel"
                   placeholder="城市/区域/位置"
       />
       <van-tabs v-model:active="tabActive"
                 color="#ff9854"
                 line-height="3"
       >
           <template v-for="(item, key, ) in allCities" :key="item">
               <van-tab :title="item?.title" :name="key"></van-tab>
           </template>
           <!--       <van-tab :title="allCity?.cityGroup?.title">-->
           <!--       </van-tab>-->
           <!--       <van-tab :title="allCity?.cityGroupOverSea?.title">-->
           <!--       </van-tab>-->
       </van-tabs>
   </div>
   <div class="content">
       <template v-for="(value, key) in allCities" :key="key">
           <city-group v-show="key === tabActive" :current-group="value"/>
       </template>
   </div>
 </div>
</template>

<style scoped lang="less">
  .city {

    // top固定定位
    //.top {
    //  position: fixed;
    //  left: 0;
    //  right: 0;
    //  top: 0;
    //}
    //
    //.content {
    //  margin-top: 100px;
    //}

    // 局部滚动
    .content {
      height: calc(100vh - 98px);
      overflow-y: auto;
    }
  }
</style>