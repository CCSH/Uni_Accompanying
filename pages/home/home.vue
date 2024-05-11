<template>
	<view>
		<!-- banner -->
		<image class="banner" />
		<!-- 弹窗 -->
		<uni-popup class="pop_agreement" ref="popupAgreement" type="bottom" :mask-click="false">
			<view class="pop_content">
				123
				<navigator open-type="exit" target="miniProgram">退出</navigator>
				<button @click="() => {this.$refs.popupAgreement.close()}">同意</button>
			</view>
		</uni-popup>
	</view>
</template>
<script>
export default {
	data() {
		return {}
	},
	methods: {},
	onLoad() {},
	onShow() {
		let isAgreement = uni.getStorageSync('isAgreement')
		//判断协议
		if (!isAgreement) {
			this.$refs.popupAgreement.open()
			uni.hideTabBar()
		}
	},
}
</script>
<style scoped>
.banner {
	background-color: gray;
	width: calc(100% - 30px);
	height: 300rpx;
	border-radius: 10rpx;
	margin: 30rpx;
}

.pop_content {
	background: #fff;
	height: 300rpx;
	width: 100%;
}
</style>
