<template>
	<view class="page flex-col">
		<view class="box_1 flex-col">
			<view class="group_3 flex-col">
				<view class="box_6 flex-col">
					<text class="text_4">提现至</text>
					<view class="image-text_2 flex-row justify-between">
						<image class="label_2" referrerpolicy="no-referrer" src="/static/weixinlingqian@2x.png" />
						<text class="text-group_1">微信零钱</text>
					</view>
				</view>
				<view class="box_7 flex-col">
					<text class="text_5">到账金额</text>
					<view class="text-wrapper_5 flex-row">
						<text class="text_6">￥</text>
						<input class="text_7" placeholder="可提现余额￥35.00" />
						<text class="text_8">全部</text>
					</view>
					<image class="image_3" referrerpolicy="no-referrer" src="" />
				</view>
				<view class="text-wrapper_3 flex-col" @click="back">
					<text class="text_9">确认提现</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			constants: {},
		}
	},
	methods: {
		back() {
			uni.showToast({
				title: '提现成功',
				icon: 'none',
				duration: 1000,
				success: function () {
					uni.navigateBack()
				},
			})
		},
	},
}
</script>
<style scoped lang="scss">
.page {
	position: relative;
	width: 750rpx;
	// height: 1624rpx;
	overflow: hidden;
	.box_1 {
		background-color: rgba(246, 246, 246, 1);
		// height: 1624rpx;
		.box_2 {
			background-color: rgba(81, 187, 164, 1);
			padding: 32rpx 10rpx 20rpx 40rpx;
			.group_1 {
				margin: 0 18rpx 0 2rpx;
				.text-wrapper_4 {
					width: 108rpx;
					height: 34rpx;
					overflow-wrap: break-word;
					font-size: 0;
					letter-spacing: -0.2800000011920929px;
					font-family: Helvetica, 'Microsoft YaHei', Arial, sans-serif;
					font-weight: normal;
					text-align: right;
					white-space: nowrap;
					line-height: 34rpx;
					.text_10 {
						overflow-wrap: break-word;
						color: rgba(255, 255, 255, 1);
						font-size: 28rpx;
						font-family: Helvetica, 'Microsoft YaHei', Arial, sans-serif;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
					.text_11 {
						overflow-wrap: break-word;
						color: rgba(255, 255, 255, 1);
						font-size: 28rpx;
						font-family: Helvetica, 'Microsoft YaHei', Arial, sans-serif;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
				}
				.thumbnail_4 {
					width: 34rpx;
					height: 22rpx;
					margin: 4rpx 0 8rpx 438rpx;
				}
				.thumbnail_5 {
					width: 30rpx;
					height: 22rpx;
					margin: 2rpx 0 10rpx 10rpx;
				}
				.image_5 {
					width: 50rpx;
					height: 24rpx;
					margin: 2rpx 0 8rpx 10rpx;
				}
			}
			.group_2 {
				margin-top: 30rpx;
				.thumbnail_3 {
					width: 24rpx;
					height: 40rpx;
					margin-bottom: 20rpx;
				}
				.text_3 {
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 34rpx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					text-align: right;
					white-space: nowrap;
					line-height: 48rpx;
					margin-left: 244rpx;
				}
				.image_2 {
					width: 160rpx;
					height: 60rpx;
					margin-left: 136rpx;
				}
			}
		}
		.group_3 {
			padding: 26rpx 24rpx 20rpx 24rpx;
			.box_6 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 6px;
				padding: 18rpx 502rpx 34rpx 20rpx;
				.text_4 {
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 40rpx;
					margin-right: 96rpx;
				}
				.image-text_2 {
					width: 180rpx;
					margin-top: 34rpx;
					.label_2 {
						width: 48rpx;
						height: 42rpx;
					}
					.text-group_1 {
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 40rpx;
						margin-top: 2rpx;
					}
				}
			}
			.box_7 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 6px;
				margin-top: 16rpx;
				padding: 18rpx 16rpx 26rpx 6rpx;
				.text_5 {
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 40rpx;
					margin: 0 554rpx 0 14rpx;
				}
				.text-wrapper_5 {
					margin: 40rpx 2rpx 0 0;
					.text_6 {
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 56rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 80rpx;
					}
					.text_7 {
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 40rpx;
						margin: 24rpx 0 0 14rpx;
					}
					.text_8 {
						overflow-wrap: break-word;
						color: rgba(75, 112, 237, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 40rpx;
						margin: 34rpx 0 0 308rpx;
					}
				}
				.image_3 {
					width: 666rpx;
					height: 2rpx;
					margin: 16rpx 0 0 14rpx;
					background: #e6e6e6;
				}
			}
			.text-wrapper_3 {
				background-color: rgba(80, 186, 174, 1);
				border-radius: 20px;
				align-self: center;
				margin-top: 26rpx;
				width: 690rpx;
				padding: 20rpx 288rpx 20rpx 290rpx;
				.text_9 {
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
			.image_6 {
				width: 268rpx;
				height: 10rpx;
				align-self: center;
				margin-top: 882rpx;
			}
		}
	}
}
</style>
