<script setup>

  import HomeNavBar from '@/views/home/components/home-nav-bar.vue';
  import HomeSearchBox from '@/views/home/components/home-search-box.vue';
	import {toRefs, watch} from 'vue';
  import {useHome} from '@/stores/modules/home.js';
	import Category from '@/views/home/components/category.vue';
	import HomeContent from '@/views/home/components/home-content.vue';
	import {useScroll} from '@/hooks/home.js';

  const title = '弘源旅途';
  const { hotCity, category } = toRefs(useHome());
  useHome().getHot();
	useHome().fetchCategory();
	useHome().fetchHouseListData();

	const { reachBottom } = toRefs(useScroll());
	watch(reachBottom, (newValue) => {
		if (newValue) {
			useHome().fetchHouseListData();
			reachBottom.value = false;
		}
	})
</script>

<template>
   <div class="home">
       <home-nav-bar :title="title"/>
       <div class="banner">
           <img src="@/assets/img/home/banner.webp" alt="" />
       </div>
       <home-search-box :hot-city="hotCity"/>
       <category :kinds="category"/>
		   <home-content />
   </div>
</template>

<style lang="less" scoped>

   .banner {
     img {
       width: 100%;
     }
   }

</style>