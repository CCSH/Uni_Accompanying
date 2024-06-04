<template>
	<uni-popup ref="popup" type="dialog">
		<view class="pop-content flex-col">
			<view class="head flex-row justify-between align-center">
				<view class="title align-center flex-col">
					<text>{{ title }}</text>
					<view class="line"></view>
				</view>
				<image class="close" referrerpolicy="no-referrer" src="/static/pop-guanbi@2x.png" @click="close" />
			</view>
			<view
				class="content"
				:style="{
					textAlign: contentAlign,
				}">
				{{ content }}
			</view>
			<view class="bottom flex-row justify-between">
				<view class="text-wrapper_3 flex-col" @click="close">
					<text class="text_9">取消</text>
				</view>
				<view class="text-wrapper_4 flex-col" @click="sure">
					<text class="text_10">确定</text>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
export default {
	// name: 'dialog-pop',
	props: {
		title: {
			type: String,
			default: '',
		},
		content: {
			type: String,
			default: '',
		},
		visible: {
			type: Boolean,
			default: false,
		},
		contentAlign: {
			type: String,
			default: 'left',
		},
	},
	data() {},
	watch: {
		visible(val) {
			if (val) {
				this.$refs.popup.open()
			} else {
				this.$refs.popup.close()
			}
		},
	},
	methods: {
		// 关闭
		close() {
			this.$emit('close')
		},
		// 确认
		sure() {
			this.$emit('sure')
		},
	},
}
</script>

<style scoped lang="scss">
.pop-content {
	width: 594rpx;
	border-radius: 10rpx;
	background: #fff;
	padding: 38rpx 38rpx 58rpx 38rpx;
	.head {
		position: relative;
		padding-right: 4rpx;
		height: 48rpx;

		.title {
			position: relative;
			overflow-wrap: break-word;
			color: rgba(51, 51, 51, 1);
			font-size: 34rpx;
			letter-spacing: 2.5999999046325684px;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			text-align: center;
			white-space: nowrap;
			line-height: 48rpx;
			text {
				z-index: 1;
			}
		}

		.line {
			position: absolute;
			bottom: 10rpx;
			background-color: rgba(167, 227, 219, 1);
			border-radius: 4px;
			width: 62rpx;
			height: 16rpx;
		}

		.close {
			width: 32rpx;
			height: 32rpx;
		}
	}
	.content {
		max-height: 400rpx;
		overflow: auto;
		margin-top: 60rpx;
		margin-bottom: 50rpx;
		font-family: PingFangSC, PingFang SC;
		font-weight: 400;
		font-size: 28rpx;
		color: #666666;
		line-height: 40rpx;
		text-align: left;
		font-style: normal;
	}
	.bottom {
		.text-wrapper_3 {
			background-color: rgba(255, 255, 255, 1);
			border-radius: 19px;
			border: 1px solid rgba(230, 230, 230, 1);
			padding: 20rpx 94rpx 18rpx 94rpx;
			.text_9 {
				overflow-wrap: break-word;
				color: rgba(102, 102, 102, 1);
				font-size: 24rpx;
				font-weight: normal;
				text-align: left;
				white-space: nowrap;
				line-height: 34rpx;
			}
		}
		.text-wrapper_4 {
			background-color: rgba(240, 98, 96, 1);
			border-radius: 19px;
			padding: 22rpx 96rpx 20rpx 96rpx;
			.text_10 {
				overflow-wrap: break-word;
				color: rgba(255, 255, 255, 1);
				font-size: 24rpx;
				font-weight: normal;
				text-align: left;
				white-space: nowrap;
				line-height: 34rpx;
			}
		}
	}
}
</style>
