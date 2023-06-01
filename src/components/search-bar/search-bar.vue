<script setup>
defineProps({
	startDay: String,
	endDay: String,
})
</script>

<template>
	<div class="search-bar">
		<div class="left">
			<div class="top">
				<div class="enter">住</div>
				<div class="date">{{ startDay }}</div>
			</div>
			<div class="bottom">
				<div class="exit">离</div>
				<div class="date">{{ endDay }}</div>
			</div>
		</div>
		<div class="center">
			<div class="keyword">关键字/位置/民宿</div>
		</div>
		<div class="right">
			<i class="icon-search"></i>
		</div>
	</div>
</template>

<style scoped lang="less">
.search-bar {
	display: flex;
	position: fixed;
	height: 12vw  /* 45/3.75 */;
	line-height: 12vw  /* 45/3.75 */;
	z-index: 9;
	background-color: #f2f4f6;
	padding: 0 2.67vw  /* 10/3.75 */;
	border-radius: 1.33vw  /* 5/3.75 */;

	.left {
		font-size: 3.2vw  /* 12/3.75 */;
		color: #777;
		line-height: normal;
		margin-top: 1.67vw  /* 10/3.75 */;
		.top {
			display: flex;
		}
		.bottom {
			display: flex;
		}
		.date {
			color: black;
		}
	}

	.center {
		width: 66vw  /* 100/3.75 */;
		position: relative;
		flex: 1;
		padding: 0 6px;
		text-align: left;
		border-left: 1px solid #fff;
    color: #777;

		.keyword {
			max-width: 155px;
			font-size: 12px;
		}

	}

	.right {
		display: flex;
		align-items: center;
		.icon-search {
			position: absolute;
			top: 30%;
			right: 2.67vw  /* 10/3.75 */;
			display: inline-block;
			background-image: url(../../assets/img/sprite.png);
			background-position: -92px -58.5px;
			width: 14.5px;
			height: 15px;
			background-size: 125px 110px;
		}
	}

}
</style>