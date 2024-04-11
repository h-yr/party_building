<template>
	<view class="content">
		<view class="cgjq" hover-class="nav">
			<navigator url="/pages/cgjq/cgjq">创岗建区</navigator>
		</view>
		<view class="cgjq" hover-class="nav">
			<navigator url="/pages/dnpp/dnpp">党内品牌</navigator>
		</view>
		<view class="cgjq" hover-class="nav">
			<navigator url="/pages/swjs/swjs">三无竞赛</navigator>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		view {
			margin-bottom: 100rpx;
			font-size: 40px;
		}
		.nav {
			background-color: pink;
		}
	}
	 
</style>
