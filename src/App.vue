<script setup>

  import TabBar from './components/tab-bar/tab-bar.vue';
  import {useRoute} from 'vue-router';

</script>

<template>
  <div class="app">
      <router-view></router-view>
      <tab-bar v-show="!useRoute()?.meta?.hideTabBar" />
  </div>
</template>

<style scoped>

</style>
