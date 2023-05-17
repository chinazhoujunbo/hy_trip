<script setup>

  import tableBarData from '@/assets/data/tabbar.js'
  import {ref} from 'vue';

  const currentIndex = ref(0);

</script>

<template>
  <div class="tab-bar">
      <van-tabbar v-model="currentIndex">
          <template v-for="(item, ) in tableBarData" :key="item">
              <van-tabbar-item :to="item.path"  icon="home-o">
                  <span>{{ item.text }}</span>
              </van-tabbar-item>
          </template>
      </van-tabbar>
  </div>
</template>

<style lang="less" scoped>

.tab-bar {

  //--van-tabbar-item-icon-size: 30px !important;  // 定义局部变量
  // :deep() 深度选择器 找到子组件类
  :deep(.van-tabbar-item__icon ) {
    color: red;
    font-size: 50px ;
  }

  img {
    height: 25px;
  }
}


</style>