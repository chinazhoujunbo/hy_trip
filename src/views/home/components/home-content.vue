<script setup>
import {useHome} from '@/stores/modules/home.js';
import {storeToRefs} from 'pinia';
import HouseItemNight from '@/components/house-item-night/house-item-night.vue';
import HouseItemThree from '@/components/house-item-three/house-item-three.vue';

const homeStore = useHome();
const { houseList } = storeToRefs(homeStore);
</script>

<template>
	<div class="container">
		<template v-for="(item, index) in houseList" :key="index">
			<house-item-night v-if="item?.discoveryContentType === 9" :data="item?.data"/>
			<house-item-three v-if="item?.discoveryContentType === 3" :data="item?.data"/>
		</template>
		<house-item-night class="remove_block"/>
	</div>
</template>

<style scoped lang="less">
.container {
	width: 92vw  /* 492/3.75 */;
	display: flex;
	flex-wrap: wrap;
  justify-content: flex-start;

	padding-bottom: 61px;
	margin: 2.67vw  /* 10/3.75 */ auto;

	.remove_block {
		visibility: hidden;
	}
}
</style>