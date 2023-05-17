<script setup>

  import tableBarData from '@/assets/data/tabbar.js'
  import {getImageUrl} from '@/utils/load_assets.js';
  import {ref} from 'vue';

  const currentIndex = ref(0);

  function itemClick(index) {
    currentIndex.value = index;
  }
  function whetherActiveImage(item, index) {
    if (whetherActive(index)) return item.imageActive;
    else return item.image;
  }
  function whetherActive(index) {
    return index === currentIndex.value;
  }
</script>

<template>
  <div class="tab-ber">
      <template v-for="(item, index) in tableBarData" :key="item">
          <div class="tab-bar-item">
              <router-link :to=item.path
                           @click="itemClick(index)"
                           class="tab-bar-item"
                           :class="{ active: whetherActive(index) }">
                  <img :src="getImageUrl(whetherActiveImage(item, index))" :alt="item.text"/>
                  <span class="text">{{ item.text }}</span>
              </router-link>
          </div>
      </template>
  </div>
</template>

<style lang="less" scoped>
.tab-ber {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    border-top: 1px solid #f3f3f3;
}

.tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
    width: 36px;
}

.text {
    font-size: 12px;
    margin-top: 2px;
}

.active {
    color: var(--primary-color);
}
</style>