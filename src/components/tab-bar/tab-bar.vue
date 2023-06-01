<script setup>

  import tableBarData from '@/assets/data/tabbar.js'
  import {getImageUrl} from '@/utils/load_assets.js';
	import {computed, } from 'vue';
	import {useRoute} from 'vue-router';

  const currentIndex = computed(() => {
		return tableBarData.findIndex(item =>  item.path === useRoute().path);
	});

  function whetherActiveImage(item, index) {
    if (whetherActive(index)) return item.imageActive;
    else return item.image;
  }
  function whetherActive(index) {
    return index === currentIndex.value;
  }
</script>

<template>
  <div class="tab-bar">
      <van-tabbar
					v-model="currentIndex"
					:route="true"
			>
          <template v-for="(item, index) in tableBarData" :key="item">
              <van-tabbar-item :to="item.path">
              <template #icon>
                  <img :src="getImageUrl(whetherActiveImage(item, index))"
                       alt=""/>
              </template>
                  <span :class="{active: whetherActive(index)}">{{ item.text }}</span>
              </van-tabbar-item>
          </template>
      </van-tabbar>
  </div>
</template>

<style lang="less" scoped>

.tab-bar {

  img {
    height: 26px;
  }

	.active{
		color: orange;
	}
}


</style>