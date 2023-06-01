<script setup>
defineProps({
	data: {
		type: Object,
		default: () => ({}),
	}
})
</script>

<template>
	<div class="box">
		<img :src="data?.image?.url" alt="" />
		<div class="info">
			<div class="summary">{{ data?.summaryText }}</div>
			<div class="houseName">{{ data?.houseName }}</div>
			<div class="comment_price">
				<div class="commentScore">{{ data?.commentScore }}</div>
				<div class="price">{{ data?.finalPrice }}</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">
.box {
	width: 40vw;
	padding: 2.67vw  /* 10/3.75 */;
	position: relative;

	img {
		width: inherit;
		border-radius: 1.33vw  /* 5/3.75 */;
	}

	.info {
		color: white;
		padding: 3.33vw /* 5/3.75 */ 7vw 3.33vw 3vw;
		position: absolute;
		bottom: 2.67vw  /* 10/3.75 */;

		.houseName {
			margin: 2.67vw  /* 10/3.75 */ 0;
			overflow:hidden;
			text-overflow:ellipsis;
			display:-webkit-box;
			-webkit-box-orient:vertical;
			-webkit-line-clamp:2;
		}

		.comment_price {
			display: flex;
			margin-top: 2.67vw  /* 10/3.75 */;
			justify-content: space-between;
		}
	}
}
</style>