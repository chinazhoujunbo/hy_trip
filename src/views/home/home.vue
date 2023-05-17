<script setup>

  import HomeNavBar from '@/views/home/components/home-nav-bar.vue';

  const title = '弘源旅途';
</script>

<template>
   <div class="home">
       <home-nav-bar :title="title"/>
       <div class="banner">
           <img src="@/assets/img/home/banner.webp" alt="" />
       </div>
       <div class="location">
           <div class="city">广州</div>
           <div class="position">
               <span class="text">我的位置</span>
               <img src="@/assets/img/home/icon_location.png" alt=""/>
           </div>
       </div>
   </div>
</template>

<style lang="less" scoped>

   .banner {
     img {
       width: 100%;
     }
   }

   .location {
     display: flex;
     justify-content: center;
     align-items: center;
     height: 44px;
     padding: 0 20px;

     .city {
       flex: 1;
     }

     .position {
       display: flex;
       align-items: center;
       width: 80px;

       img {
           margin-left: 5px;
           width: 18px;
           height: 18px;
       }
     }
   }

</style>