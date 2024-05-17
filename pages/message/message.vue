<template>
	<view class="page flex-col">
		<view class="group_1 flex-col">
			<view class="section_3 flex-col">
				<view class="text-wrapper_3 flex-col">
					<text class="text_6">昨天20:43</text>
				</view>
				<view class="block_1 flex-col">
					<view class="block_2 flex-row">
						<view class="image-text_2 flex-row justify-between">
							<image class="thumbnail_6" referrerpolicy="no-referrer" src="/static/naoling@2x.png" />
							<text class="text-group_2">系统通知</text>
						</view>
						<text class="text_7">查看详情</text>
						<image class="thumbnail_7" referrerpolicy="no-referrer" src="/static/more_hui@2x.png" />
					</view>
					<image class="image_5" referrerpolicy="no-referrer" src="" />
					<view class="text-group_3 flex-col">
						<text class="text_8">订单通知</text>
						<text class="text_9">订单2824029WEW2离您5.2KM，请及时接单。</text>
					</view>
				</view>
				<view class="text-wrapper_4 flex-col">
					<text class="text_10">2023-04-28&nbsp;19:51</text>
				</view>
				<view class="block_3 flex-col">
					<view class="group_5 flex-row">
						<view class="image-text_3 flex-row justify-between">
							<image class="thumbnail_8" referrerpolicy="no-referrer" src="/static/naoling@2x.png" />
							<text class="text-group_4">系统通知</text>
						</view>
						<text class="text_11">查看详情</text>
						<image class="thumbnail_9" referrerpolicy="no-referrer" src="/static/more_hui@2x.png" />
					</view>
					<image class="image_6" referrerpolicy="no-referrer" src="" />
					<view class="text-group_5 flex-col">
						<text class="text_12">客户评价</text>
						<text class="text_13">您的订单2824029WEW2收到1个客</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			loopData0: [
				{
					lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng59c0b079185be5c4665da8b43dfd53f1f91154eb6b9537c8ff79e3b307a15c63',
					lanhutext0: '首页',
					lanhufontColor0: 'rgba(102,102,102,1)',
				},
				{
					lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng38ddf57f17e05fb63dbb7da810e0e92f154c350f1e82e721e5da3414db22af78',
					lanhutext0: '订单',
					lanhufontColor0: 'rgba(102,102,102,1)',
				},
				{
					lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge484e5751ef0a9985817fd575cd66593d1e9844d123bdbd14e68903d04db4653',
					lanhutext0: '消息',
					lanhufontColor0: 'rgba(56,196,171,1)',
				},
				{
					lanhuimage0: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng60d05caf502eb47837f95629455272416a922cbe755ef5631c7fff7dbba741f1',
					lanhutext0: '我的',
					lanhufontColor0: 'rgba(102,102,102,1)',
				},
			],
			constants: {},
		}
	},
	onShow() {
		if (!this.isLogin()) {
			return
		}
	},
	methods: {
		isLogin() {
			let userInfo = uni.getStorageSync('userInfo')
			if (!userInfo) {
				uni.showToast({
					title: '用户未登录',
					icon: 'none',
					duration: 1000,
				})
				setTimeout(() => {
					uni.navigateTo({ url: '/pagesA/pages/login/login' })
				}, 1000)
				return false
			}
			return true
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
	.group_1 {
		background-color: rgba(246, 246, 246, 1);
		.section_1 {
			background-color: rgba(81, 187, 164, 1);
			padding: 30rpx 10rpx 22rpx 40rpx;
			.box_1 {
				margin: 0 18rpx 0 2rpx;
				.text-wrapper_2 {
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
					.text_4 {
						overflow-wrap: break-word;
						color: rgba(255, 255, 255, 1);
						font-size: 28rpx;
						font-family: Helvetica, 'Microsoft YaHei', Arial, sans-serif;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
					.text_5 {
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
					margin: 4rpx 0 8rpx 10rpx;
				}
				.image_4 {
					width: 50rpx;
					height: 24rpx;
					margin: 2rpx 0 8rpx 10rpx;
				}
			}
			.box_2 {
				margin-top: 30rpx;
				.thumbnail_3 {
					width: 24rpx;
					height: 40rpx;
					margin: 2rpx 0 18rpx 0;
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
					margin-left: 278rpx;
				}
				.image_2 {
					width: 160rpx;
					height: 60rpx;
					margin-left: 170rpx;
				}
			}
		}
		.section_3 {
			padding: 40rpx 20rpx 526rpx 20rpx;
			.text-wrapper_3 {
				background-color: rgba(221, 221, 221, 1);
				border-radius: 4px;
				align-self: center;
				width: 240rpx;
				padding: 4rpx 64rpx 2rpx 64rpx;
				.text_6 {
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 24rpx;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 34rpx;
				}
			}
			.block_1 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 8px;
				margin-top: 24rpx;
				padding: 28rpx 44rpx 38rpx 38rpx;
				.block_2 {
					margin-right: 2rpx;
					.image-text_2 {
						width: 150rpx;
						.thumbnail_6 {
							width: 26rpx;
							height: 28rpx;
							margin: 6rpx 0 6rpx 0;
						}
						.text-group_2 {
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 28rpx;
							font-weight: normal;
							text-align: left;
							white-space: nowrap;
							line-height: 40rpx;
						}
					}
					.text_7 {
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
						margin: 4rpx 0 0 360rpx;
					}
					.thumbnail_7 {
						width: 6rpx;
						height: 16rpx;
						margin: 14rpx 0 10rpx 14rpx;
					}
				}
				.image_5 {
					width: 628rpx;
					height: 2rpx;
					margin-top: 36rpx;
					background: #e6e6e6;
				}
				.text-group_3 {
					margin: 32rpx 108rpx 0 0;
					.text_8 {
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 34rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 48rpx;
						margin-right: 350rpx;
					}
					.text_9 {
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
						margin-top: 22rpx;
					}
				}
			}
			.text-wrapper_4 {
				background-color: rgba(221, 221, 221, 1);
				border-radius: 4px;
				align-self: center;
				margin-top: 38rpx;
				width: 240rpx;
				padding: 4rpx 16rpx 2rpx 16rpx;
				.text_10 {
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 24rpx;
					font-weight: normal;
					text-align: right;
					white-space: nowrap;
					line-height: 34rpx;
				}
			}
			.block_3 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 8px;
				margin-top: 22rpx;
				padding: 28rpx 44rpx 38rpx 38rpx;
				.group_5 {
					margin-right: 2rpx;
					.image-text_3 {
						width: 150rpx;
						.thumbnail_8 {
							width: 26rpx;
							height: 28rpx;
							margin: 6rpx 0 6rpx 0;
						}
						.text-group_4 {
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 28rpx;
							font-weight: normal;
							text-align: left;
							white-space: nowrap;
							line-height: 40rpx;
						}
					}
					.text_11 {
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
						margin: 4rpx 0 0 360rpx;
					}
					.thumbnail_9 {
						width: 6rpx;
						height: 16rpx;
						margin: 14rpx 0 10rpx 14rpx;
					}
				}
				.image_6 {
					width: 628rpx;
					height: 2rpx;
					margin-top: 36rpx;
					background: #e6e6e6;
				}
				.text-group_5 {
					margin: 32rpx 108rpx 0 0;
					.text_12 {
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 34rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 48rpx;
						margin-right: 350rpx;
					}
					.text_13 {
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
						margin-top: 22rpx;
					}
				}
			}
		}
		.section_2 {
			box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.04);
			background-color: rgba(254, 255, 255, 1);
			margin-top: -2rpx;
			padding: 26rpx 70rpx 18rpx 70rpx;
			.list_2 {
				width: 610rpx;
				height: 84rpx;
				justify-content: space-between;
				.image-text_4 {
					margin-right: 140rpx;
					.label_1 {
						width: 44rpx;
						height: 44rpx;
						align-self: center;
					}
					.text-group_1 {
						overflow-wrap: break-word;
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
						margin-top: 6rpx;
					}
				}
			}
			.image_7 {
				width: 268rpx;
				height: 10rpx;
				align-self: center;
				margin-top: 22rpx;
			}
		}
	}
}
</style>
