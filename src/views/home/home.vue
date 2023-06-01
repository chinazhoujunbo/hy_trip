<script setup>

  import HomeNavBar from '@/views/home/components/home-nav-bar.vue';
  import HomeSearchBox from '@/views/home/components/home-search-box.vue';
  import {toRefs} from 'vue';
  import {useHome} from '@/stores/modules/home.js';
	import Category from '@/views/home/components/category.vue';

  const title = '弘源旅途';
  const { hotCity, category } = toRefs(useHome());
  useHome().getHot();
	useHome().fetchCategory();
</script>

<template>
   <div class="home">
       <home-nav-bar :title="title"/>
       <div class="banner">
           <img src="@/assets/img/home/banner.webp" alt="" />
       </div>
       <home-search-box :hot-city="hotCity"/>
       <category :kinds="category"/>
   </div>
</template>

<style lang="less" scoped>

   .banner {
     img {
       width: 100%;
     }
   }


</style>