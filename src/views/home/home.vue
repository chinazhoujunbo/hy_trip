<script setup>

  import HomeNavBar from '@/views/home/components/home-nav-bar.vue';
  import HomeSearchBox from '@/views/home/components/home-search-box.vue';

  const title = '弘源旅途';
</script>

<template>
   <div class="home">
       <home-nav-bar :title="title"/>
       <div class="banner">
           <img src="@/assets/img/home/banner.webp" alt="" />
       </div>
       <home-search-box/>
   </div>
</template>

<style lang="less" scoped>

   .banner {
     img {
       width: 100%;
     }
   }


</style>