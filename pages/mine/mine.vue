<template>
	<view class="page flex-col">
		<view class="box_1 flex-col">
			<view class="section_1 flex-col">
				<view class="block_1 flex-col" style="background: url(/static/img_bg.png); background-size: cover">
					<view class="section_5 flex-col">
						<view class="box_5 flex-row">
							<view class="image-text_6 flex-row justify-between">
								<view class="block_2 flex-col"></view>
								<text class="text-group_2">193****1095</text>
							</view>
						</view>
					</view>
				</view>
				<view class="ad flex-col"></view>
			</view>
			<view class="section_6 flex-col">
				<view class="list_5 flex-col">
					<view class="list-items_1 flex-row justify-between" v-for="(item, index) in loopData0" :key="index" @click="handleClick(index)">
						<text class="text_4">{{ item.lanhutext0 }}</text>
						<image class="thumbnail_1" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
					</view>
				</view>
				<view class="text-wrapper_4">
					<text class="text_5">服务热线：</text>
					<text class="text_6" @click="handleCall">400-899-9999</text>
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
					lanhutext0: '我的医院',
					lanhuimage0: '/static/more@2x.png',
				},
				{
					lanhutext0: '我的服务',
					lanhuimage0: '/static/more@2x.png',
				},
				{
					lanhutext0: '修改个人简历',
					lanhuimage0: '/static/more@2x.png',
				},
				{
					lanhutext0: '隐私协议',
					lanhuimage0: '/static/more@2x.png',
				},
				{
					lanhutext0: '注销账号',
					lanhuimage0: '/static/more@2x.png',
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
		handleCall() {
			uni.makePhoneCall({
				phoneNumber: '400-8999-999', //仅为示例
			})
		},
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
		gotoClient() {
			uni.navigateTo({
				url: '/pagesA/pages/manage_client/manage_client',
			})
		},
		gotoCoupon() {
			uni.navigateTo({ url: '/pagesA/pages/coupon/coupon' })
		},
		handleClick(index) {
			switch (index) {
				case 0:
					{
						uni.navigateTo({ url: '/pagesA/pages/mine_hospital/mine_hospital' })
					}
					break
				case 1:
					{
						uni.navigateTo({ url: '/pagesA/pages/mine_serve/mine_serve' })
					}
					break
				case 2:
					{
						uni.navigateTo({ url: '/pagesA/pages/register/register?edit=true' })
					}
					break
				case 3:
					{
						uni.navigateTo({ url: '/pagesA/pages/privacy_agreement/privacy_agreement' })
					}
					break
				case 4:
					{
						uni.showModal({
							title: '注销',
							content: '是否确认注销账号！',
							showCancel: true,
							success: ({ confirm, cancel }) => {
								if (confirm) {
									uni.removeStorageSync('userInfo')
									uni.reLaunch({ url: '/pages/home/home' })
								}
							},
						})
					}
					break
				default:
					break
			}
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
		.section_1 {
			padding-bottom: 60rpx;
			position: relative;
			.block_1 {
				background-size: cover;
				padding-top: 30rpx;
				.box_7 {
					margin: 0 28rpx 0 42rpx;
					.text-wrapper_6 {
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
					.thumbnail_5 {
						width: 34rpx;
						height: 22rpx;
						margin: 4rpx 0 8rpx 438rpx;
					}
					.thumbnail_6 {
						width: 30rpx;
						height: 22rpx;
						margin: 4rpx 0 8rpx 10rpx;
					}
					.image_5 {
						width: 50rpx;
						height: 24rpx;
						margin: 2rpx 0 8rpx 10rpx;
					}
				}
				.image_3 {
					width: 160rpx;
					height: 60rpx;
					margin: 30rpx 10rpx 0 580rpx;
				}
				.section_5 {
					// background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng848af39fc3734d24d5f33d7868413e407a853613f7994834dbf794160b68109f) 100% no-repeat;
					background-size: 100% 100%;
					margin-top: 24rpx;
					.box_5 {
						height: 366rpx;
						// background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng42e70f0c8801f74927dba0c3a9b21d07710938d99920cb87ff6ee4a7e56269da) 0rpx 0rpx no-repeat;
						background-size: 750rpx 368rpx;
						margin: 18rpx 0 -2rpx 0;
						padding: 110rpx 306rpx 106rpx 30rpx;
						.image-text_6 {
							width: 414rpx;
							.block_2 {
								border-radius: 50%;
								background-image: url(/static/morentouxiang@2x.png);
								width: 150rpx;
								height: 150rpx;
								background-size: cover;
							}
							.text-group_2 {
								overflow-wrap: break-word;
								color: rgba(255, 255, 255, 1);
								font-size: 40rpx;
								font-weight: normal;
								text-align: left;
								white-space: nowrap;
								line-height: 56rpx;
								margin-top: 48rpx;
							}
						}
					}
				}
			}
			.block_3 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 4px;
				position: absolute;
				left: 386rpx;
				top: 380rpx;
				width: 336rpx;
				height: 120rpx;
				padding: 38rpx 28rpx 40rpx 32rpx;
				.image-text_7 {
					width: 140rpx;
					margin-top: 2rpx;
					.group_1 {
						width: 44rpx;
						height: 44rpx;
						background: url(/static/youhuiquan@2x.png);
						background-size: cover;
						// margin: 8rpx 0 4rpx 0;
					}
					.text_2 {
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 40rpx;
					}
				}
				.thumbnail_4 {
					width: 20rpx;
					height: 6rpx;
					margin: 0 0 36rpx -136rpx;
				}
				.text-wrapper_3 {
					background-color: rgba(255, 255, 255, 1);
					margin: 8rpx 0 0 110rpx;
					.text_3 {
						height: 40rpx;
						overflow-wrap: break-word;
						color: rgba(118, 203, 180, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 40rpx;
						margin: -6rpx 4rpx 0 6rpx;
					}
				}
			}
			.block_4 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 4px;
				position: absolute;
				left: 30rpx;
				top: 380rpx;
				width: 336rpx;
				height: 120rpx;
				padding: 38rpx 26rpx 38rpx 28rpx;
				.image-text_8 {
					width: 198rpx;
					.group_2 {
						width: 44rpx;
						height: 44rpx;
						background: url(/static/jiuzhenrenguanli@2x.png);
						background-size: cover;
					}
					.text_1 {
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: right;
						white-space: nowrap;
						line-height: 40rpx;
						margin-top: 2rpx;
					}
				}
				.text_9 {
					overflow-wrap: break-word;
					color: rgba(118, 203, 180, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 40rpx;
					margin-top: 2rpx;
				}
			}
		}
		.section_6 {
			padding: 24rpx 28rpx 38rpx 28rpx;
			.list_5 {
				height: 512rpx;
				.list-items_1 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 4px;
					width: 692rpx;
					margin: 0 0 24rpx 2rpx;
					padding: 34rpx 28rpx 36rpx 32rpx;
					.text_4 {
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: right;
						white-space: nowrap;
						line-height: 40rpx;
					}
					.thumbnail_1 {
						width: 10rpx;
						height: 24rpx;
						margin: 10rpx 0 6rpx 0;
					}
				}
			}
			.text-wrapper_4 {
				width: 342rpx;
				height: 40rpx;
				overflow-wrap: break-word;
				font-size: 0;
				font-weight: normal;
				text-align: right;
				white-space: nowrap;
				line-height: 40rpx;
				align-self: center;
				margin-top: 232rpx;
				.text_5 {
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 40rpx;
				}
				.text_6 {
					overflow-wrap: break-word;
					color: rgba(56, 196, 171, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 40rpx;
				}
			}
		}
		.section_3 {
			box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.04);
			background-color: rgba(254, 255, 255, 1);
			margin-top: -2rpx;
			padding: 26rpx 70rpx 18rpx 70rpx;
			.list_6 {
				width: 610rpx;
				height: 84rpx;
				justify-content: space-between;
				.image-text_9 {
					margin-right: 140rpx;
					.label_2 {
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
			.image_6 {
				width: 268rpx;
				height: 10rpx;
				align-self: center;
				margin-top: 22rpx;
			}
		}
	}
}
.ad {
	border-radius: 4px;
	background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/67f8ef14d7f0402784f5fe53609511dd_mergeImage.png);
	position: absolute;
	left: 30rpx;
	top: 344rpx;
	width: 690rpx;
	height: 150rpx;
}
</style>
