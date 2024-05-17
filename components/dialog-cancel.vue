<template>
	<!-- 弹窗 -->
	<uni-popup ref="popup_cancel" type="dialog" class="dialog">
		<view class="group_3 flex-col">
			<view class="box_7 flex-row justify-between">
				<view class="block_2 flex-col"></view>
				<image class="thumbnail_6" referrerpolicy="no-referrer" src="/static/guanbi@2x.png" @click="$refs.popup_cancel.close()" />
				<text class="text_4">取消订单</text>
			</view>
			<view class="box_8 flex-row">
				<view class="block_3 flex-col"></view>
				<text class="text_5">取消</text>
				<text class="text_8">取消订单后，您将无法查看该订单，确认继续删除该订单吗？</text>
			</view>
			<view class="box_9 flex-row justify-between">
				<view class="text-wrapper_3 flex-col" @click="$refs.popup_cancel.close()">
					<text class="text_9">取消</text>
				</view>
				<view class="text-wrapper_4 flex-col">
					<text class="text_10">确定</text>
				</view>
			</view>
		</view>
	</uni-popup>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {
		// 取消订单
		cancelOrder() {
			this.$refs.popup_cancel.close()
		},
		// 取消订单
		cancelOrder_sure() {
			this.$refs.popup_cancel.show()
		},
	},
}
</script>

<style scoped lang="scss">
.group_3 {
	background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngcb35ff0cd823ed383a1e9d36753420090c769b076fc9a52a536095391a4ea5f8) 100% no-repeat;
	background-size: 100% 100%;
	padding: 40rpx 38rpx 58rpx 36rpx;
	.box_7 {
		position: relative;
		width: 514rpx;
		margin: 0 4rpx 0 2rpx;
		padding: 6rpx 0 10rpx 52rpx;
		.block_2 {
			background-color: rgba(167, 227, 219, 1);
			border-radius: 4px;
			width: 62rpx;
			height: 16rpx;
			margin: 14rpx 0 2rpx 0;
		}
		.thumbnail_6 {
			width: 32rpx;
			height: 32rpx;
		}
		.text_4 {
			position: absolute;
			left: 0;
			top: 0;
			overflow-wrap: break-word;
			color: rgba(51, 51, 51, 1);
			font-size: 34rpx;
			letter-spacing: 2.5999999046325684px;
			font-family: PingFangSC-Medium;
			font-weight: 500;
			text-align: right;
			white-space: nowrap;
			line-height: 48rpx;
		}
	}
	.box_8 {
		position: relative;
		margin: 56rpx 16rpx 0 0;
		padding: 8rpx 450rpx 44rpx 0;
		.block_3 {
			background-color: rgba(255, 255, 255, 1);
			width: 54rpx;
			height: 28rpx;
		}
		.text_5 {
			position: absolute;
			left: 0;
			top: 0;
			overflow-wrap: break-word;
			color: rgba(70, 70, 70, 1);
			font-size: 28rpx;
			font-weight: normal;
			text-align: right;
			white-space: nowrap;
			line-height: 40rpx;
		}
		.text_8 {
			position: absolute;
			left: 0;
			top: 0;
			width: 504rpx;
			height: 80rpx;
			overflow-wrap: break-word;
			color: rgba(51, 51, 51, 1);
			font-size: 28rpx;
			font-weight: normal;
			text-align: left;
			line-height: 40rpx;
		}
	}
	.box_9 {
		width: 520rpx;
		margin-top: 60rpx;
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
