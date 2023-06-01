<script setup>
import {useHome} from '@/stores/modules/home.js';

const homeStore = useHome();
</script>

<template>
	<h1>{{ homeStore.startDate }}</h1>
	<h1>{{ homeStore.interValDay }}</h1>
	<h1>{{ homeStore.endDate }}</h1>
</template>

<style scoped lang="less">

</style>