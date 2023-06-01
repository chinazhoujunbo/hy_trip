<script setup>

  import HomeNavBar from '@/views/home/components/home-nav-bar.vue';
  import HomeSearchBox from '@/views/home/components/home-search-box.vue';
	import {computed, toRefs, watch} from 'vue';
  import {useHome} from '@/stores/modules/home.js';
	import Category from '@/views/home/components/category.vue';
	import HomeContent from '@/views/home/components/home-content.vue';
	import {useScroll} from '@/hooks/home.js';
	import SearchBar from '@/components/search-bar/search-bar.vue';

  const title = '弘源旅途';
  const { hotCity, category, startDay, endDay } = toRefs(useHome());
  useHome().getHot();
	useHome().fetchCategory();
	useHome().fetchHouseListData();

	const { reachBottom, scrollTop } = toRefs(useScroll());
	watch(reachBottom, (newValue) => {
		if (newValue) {
			useHome().fetchHouseListData();
			reachBottom.value = false;
		}
	})
  const isShowSearchBar = computed(() => {
		return scrollTop.value >= 200;
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
		   <div class="search" v-show="isShowSearchBar">
				 <search-bar :start-day="startDay" :end-day="endDay"/>
			 </div>
   </div>
</template>

<style lang="less" scoped>

   .banner {
     img {
       width: 100%;
     }
   }
	 .search {
		 position: fixed;
		 top: 0;
		 left: 0;
		 right: 0;
		 height: 45px;
		 padding: 16px 16px 10px;
		 background-color: #fff;
	 }
</style>