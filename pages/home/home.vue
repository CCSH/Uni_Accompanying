<template>
	<movable-area>

	<movable-area class="block_2 flex-col">
		<view class="block_3 flex-col"></view>
		<view class="block_4 flex-row justify-between">
			<view class="text-wrapper_2">
				<text class="text_4">恭喜</text>
				<text class="text_5">#&nbsp;晓霞陪诊&nbsp;#</text>
				<text class="text_6">&nbsp;入驻</text>
			</view>
			<view class="text-wrapper_3 flex-col">
				<text class="text_7">我要入驻</text>
			</view>
		</view>
		<view class="block_5 flex-col">
			<view class="text-wrapper_4 flex-col">
				<text class="paragraph_1">
					您现在无法接单
					<br />
					（点击切换）
				</text>
			</view>
		</view>
		<!-- <view class="block_6 flex-col"></view> -->
		<view class="text-wrapper_5 flex-col">
			<text class="text_8">去接单</text>
		</view>
		<!-- 弹窗 -->
		<uni-popup class="pop_agreement" ref="popupAgreement" type="bottom" :mask-click="false">
			<view class="pop_content">
				123
				<navigator open-type="exit" target="miniProgram">退出</navigator>
				<button @click="agreeAgreement">同意</button>
			</view>
		</uni-popup>
	</movable-area>
</template>
<script>
export default {
	data() {
		return {}
	},
	methods: {
		agreeAgreement() {
			uni.showTabBar()
			this.$refs.popupAgreement.close()
			uni.setStorageSync('isAgreement', true)
		},
	},
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
<style scoped lang="scss">
.block_2 {
	padding: 24rpx 0 26rpx 24rpx;
	.block_3 {
		border-radius: 4px;
		background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/81548c6845e34027b7acbdfdebaa01b9_mergeImage.png);
		width: 702rpx;
		height: 304rpx;
		margin-right: 24rpx;
	}
	.block_4 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 20px;
		width: 702rpx;
		padding-left: 28rpx;
		margin: 18rpx 24rpx 0 0;
		.text-wrapper_2 {
			width: 296rpx;
			height: 40rpx;
			overflow-wrap: break-word;
			font-size: 0;
			font-weight: normal;
			text-align: center;
			white-space: nowrap;
			line-height: 40rpx;
			margin: 20rpx 0 20rpx 0;
			.text_4 {
				overflow-wrap: break-word;
				color: rgba(51, 51, 51, 1);
				font-size: 28rpx;
				font-weight: normal;
				text-align: left;
				white-space: nowrap;
				line-height: 40rpx;
			}
			.text_5 {
				overflow-wrap: break-word;
				color: rgba(255, 63, 44, 1);
				font-size: 28rpx;
				font-weight: normal;
				text-align: left;
				white-space: nowrap;
				line-height: 40rpx;
			}
			.text_6 {
				overflow-wrap: break-word;
				color: rgba(51, 51, 51, 1);
				font-size: 28rpx;
				font-weight: normal;
				text-align: left;
				white-space: nowrap;
				line-height: 40rpx;
			}
		}
		.text-wrapper_3 {
			background-color: rgba(81, 187, 164, 1);
			border-radius: 0px 20px 20px 0px;
			padding: 20rpx 34rpx 20rpx 34rpx;
			.text_7 {
				overflow-wrap: break-word;
				color: rgba(255, 255, 255, 1);
				font-size: 28rpx;
				font-weight: normal;
				text-align: center;
				white-space: nowrap;
				line-height: 40rpx;
			}
		}
	}
	.block_5 {
		background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8553ce2fd1beab190aa54f9dc5e9d0fe72b895ef20115983e533fd4ec363fe73) 0rpx 0rpx no-repeat;
		background-size: 702rpx 122rpx;
		margin: 20rpx 24rpx 0 0;
		padding: 22rpx 258rpx 16rpx 262rpx;
		.text-wrapper_4 {
			background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6a586f9297b87776281db03dfabbb2f383e551237c5a455f1ec3289b53fe1470) 100% no-repeat;
			background-size: 100% 100%;
			.paragraph_1 {
				width: 196rpx;
				height: 80rpx;
				overflow-wrap: break-word;
				color: rgba(255, 255, 255, 1);
				font-size: 28rpx;
				font-weight: normal;
				text-align: right;
				line-height: 40rpx;
				margin: -2rpx 0 4rpx -14rpx;
			}
		}
	}
	.block_6 {
		box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/37949625996d420b97ce2e46da340284_mergeImage.png);
		width: 96rpx;
		height: 96rpx;
		margin: 450rpx 0 0 630rpx;
	}
	.text-wrapper_5 {
		background-color: rgba(80, 186, 174, 1);
		border-radius: 20px;
		margin-right:30rpx;
		width: 100%;
		// padding: 20rpx 302rpx 20rpx 304rpx;
		.text_8 {
			overflow-wrap: break-word;
			color: rgba(255, 255, 255, 1);
			font-size: 28rpx;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			text-align: right;
			white-space: nowrap;
			line-height: 40rpx;
		}
	}
}

.pop_content {
	background: #fff;
	height: 300rpx;
	width: 100%;
}
</style>
