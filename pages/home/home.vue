<template>
	<view class="page flex-col">
		<view class="box_1 flex-col justify-between">
			<view class="block_8 flex-col">
				<image class="block_3 flex-col" src="/static/img_banner@2x.png" mode="scaleToFill" @click="gotoWecome" />
				<view class="block_4 flex-row justify-between">
					<view class="text-wrapper_2">
						<text class="text_4">恭喜</text>
						<text class="text_5">#&nbsp;晓霞陪诊&nbsp;#</text>
						<text class="text_6">&nbsp;入驻</text>
					</view>
					<view class="text-wrapper_3 flex-col" @click="gotoWecome">
						<text class="text_7">我要入驻</text>
					</view>
				</view>
				<view class="box_2 flex-col" @click="isTake = !isTake">
					<view class="block_5 flex-col" style="background: url(/static/img_shuaxin@2x.png); background-size: cover">
						<view class="text-wrapper_4 flex-row">
							<view class="image-text_2 flex-row justify-between">
								<image class="thumbnail_5" referrerpolicy="no-referrer" src="/static/refresh.png" />
								<text class="paragraph_1">
									{{ isTake ? '正在接单中' : '您现在无法接单' }}
									<br />
									<text style="display: block">（点击切换）</text>
								</text>
							</view>
						</view>
					</view>
				</view>
				<!-- <view class="block_6 flex-col"></view> -->
			</view>
			<view class="text-wrapper_5 flex-col" @click="gotoOrder">
				<text class="text_8">去接单</text>
			</view>
		</view>
		<dragButton />
		<!-- 弹窗 -->
		<uni-popup class="pop_agreement" ref="popupAgreement" type="bottom" safeArea :mask-click="false">
			<view class="pop_content">
				<view class="section_1 flex-col" style="background-color: #fff">
					<view class="group_7 flex-col">
						<view class="box_10 flex-col"></view>
						<view class="text-wrapper_7">
							<text class="text_12">欢迎使用专业陪诊官方平台！请您在使用前点击</text>
							<text class="text_13" @click="showAgreement">《隐私协议》</text>
							<text class="paragraph_1">
								并仔细阅读，如您同意全部内容，请点击同意开始使用我们的服务。
								<br />
								若点击“不同意”，您将无法使用我们的产品和服务，并会退出本小程序。
							</text>
						</view>
						<text class="text_14">隐私协议</text>
					</view>
					<view class="group_8 flex-row justify-between">
						<view class="text-wrapper_8 flex-col">
							<navigator class="text_15" open-type="exit" target="miniProgram">不同意，退出</navigator>
						</view>
						<view class="text-wrapper_9 flex-col">
							<text class="text_16" @click="agreeAgreement">同意并继续</text>
						</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
import dragButton from '@/components/drag-button/drag-button.vue'

export default {
	components: {
		dragButton,
	},
	data() {
		return {
			isTake: false,
		}
	},
	methods: {
		gotoOrder() {
			uni.navigateTo({ url: '/pagesA/pages/order_list/order_list' })
		},
		gotoWecome() {
			uni.showToast({
				title: '跳转落地页',
				icon: 'none',
				duration: 1000,
			})
		},
		agreeAgreement() {
			uni.showTabBar()
			uni.setStorageSync('isAgreement', true)
			this.configUI()
		},

		showAgreement() {
			uni.navigateTo({ url: '/pagesA/pages/privacy_agreement/privacy_agreement' })
		},

		isLogin() {
			let userInfo = uni.getStorageSync('userInfo')
			if (!userInfo) {
				uni.navigateTo({ url: '/pagesA/pages/login/login' })
				return false
			}
			return true
		},
		configUI() {
			uni.showTabBar()
			let isAgreement = uni.getStorageSync('isAgreement')
			//判断协议
			if (!isAgreement) {
				this.$refs.popupAgreement.open()
				uni.hideTabBar()
				return
			}
			//判断登录
			if (!this.isLogin()) {
				uni.navigateTo({ url: '/pagesA/pages/login/login' })
				uni.hideTabBar()
				return
			}
			//判断注册
			let userInfo = uni.getStorageSync('userInfo')
			if (userInfo.name != 'ccsh') {
				//弹窗
				uni.showModal({
					title: '注册陪诊师',
					content: '您当前还未注册陪诊师，立即注册',
					showCancel: true,
					success: ({ confirm, cancel }) => {
						if (confirm) {
							uni.navigateTo({ url: '/pagesA/pages/register/register' })
						}
						if (cancel) {
							uni.exitMiniProgram()
						}
					},
				})
				uni.hideTabBar()
				return
			}
		},
	},
	onShow() {
		this.configUI()
	},
}
</script>
<style scoped lang="scss">
.page {
	position: relative;
	width: 750rpx;
	overflow: hidden;
	.box_1 {
		height: 100vh;
		background-color: rgba(246, 246, 246, 1);
		.block_1 {
			background-color: rgba(81, 187, 164, 1);
			padding: 32rpx 10rpx 20rpx 42rpx;
			.group_1 {
				margin-right: 18rpx;
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
					.text_9 {
						overflow-wrap: break-word;
						color: rgba(255, 255, 255, 1);
						font-size: 28rpx;
						font-family: Helvetica, 'Microsoft YaHei', Arial, sans-serif;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
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
				}
				.thumbnail_3 {
					width: 34rpx;
					height: 22rpx;
					margin: 4rpx 0 8rpx 438rpx;
				}
				.thumbnail_4 {
					width: 30rpx;
					height: 22rpx;
					margin: 2rpx 0 10rpx 10rpx;
				}
				.image_4 {
					width: 50rpx;
					height: 24rpx;
					margin: 2rpx 0 8rpx 10rpx;
				}
			}
			.group_2 {
				width: 416rpx;
				margin: 30rpx 0 0 282rpx;
				.text_3 {
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 34rpx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					text-align: right;
					white-space: nowrap;
					line-height: 48rpx;
				}
				.image_2 {
					width: 160rpx;
					height: 60rpx;
				}
			}
		}
		.block_8 {
			padding: 24rpx 0 26rpx 24rpx;

			.block_3 {
				border-radius: 4px;
				// background-image: url(/static/img_banner@2x.png);
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
			.box_2 {
				background-color: rgba(216, 216, 216, 1);
				border-radius: 30px;
				margin: 20rpx 24rpx 0 0;
				.block_5 {
					background-size: 702rpx 122rpx;
					padding: 22rpx 258rpx 16rpx 176rpx;
					.text-wrapper_4 {
						// background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4f316750aeeb8e925d9ebdb8f2763a1a3e3c002d9ab71432f38340a835e4fc42) 100% no-repeat;
						background-size: 100% 100%;
						.image-text_2 {
							width: 246rpx;
							height: 80rpx;
							margin: -2rpx 0 4rpx 22rpx;
							.thumbnail_5 {
								width: 36rpx;
								height: 36rpx;
								margin: 22rpx 0 22rpx 0;
							}
							.paragraph_1 {
								width: 196rpx;
								height: 80rpx;
								overflow-wrap: break-word;
								color: rgba(255, 255, 255, 1);
								font-size: 28rpx;
								font-weight: normal;
								text-align: center;
								line-height: 40rpx;
							}
						}
					}
				}
			}
			.block_6 {
				box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
				border-radius: 4px;
				background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/773cf507c20e4a81a1320fe34eae77f2_mergeImage.png);
				width: 96rpx;
				height: 96rpx;
				margin: 450rpx 0 0 630rpx;
			}
		}
		.text-wrapper_5 {
			background-color: rgba(80, 186, 174, 1);
			border-radius: 20px;
			margin: 0 30rpx 24rpx 30rpx;
			padding: 20rpx 302rpx 24rpx 304rpx;
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
		.block_7 {
			box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.04);
			background-color: rgba(254, 255, 255, 1);
			margin-top: -2rpx;
			padding: 26rpx 70rpx 18rpx 70rpx;
			.list_2 {
				width: 610rpx;
				height: 84rpx;
				justify-content: space-between;
				.image-text_3 {
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
			.image_5 {
				width: 268rpx;
				height: 10rpx;
				align-self: center;
				margin-top: 22rpx;
			}
		}
	}
}

.pop_content {
	.section_1 {
		border-radius: 17px 17px 0px 0px;
		padding: 34rpx 42rpx 50rpx 42rpx;
		.group_7 {
			background-color: rgba(255, 255, 255, 1);
			position: relative;
			margin-right: 16rpx;
			padding: 26rpx 0 12rpx 2rpx;
			.box_10 {
				background-color: rgba(168, 226, 215, 1);
				border-radius: 5px;
				width: 62rpx;
				height: 18rpx;
				margin: 0 544rpx 0 46rpx;
			}
			.text-wrapper_7 {
				width: 668rpx;
				height: 220rpx;
				overflow-wrap: break-word;
				font-size: 0;
				font-weight: normal;
				text-align: left;
				line-height: 44rpx;
				margin: 64rpx -16rpx 0 0;
				.text_12 {
					width: 668rpx;
					height: 220rpx;
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					line-height: 44rpx;
				}
				.text_13 {
					width: 668rpx;
					height: 220rpx;
					overflow-wrap: break-word;
					color: rgba(80, 186, 174, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					line-height: 44rpx;
				}
				.paragraph_1 {
					width: 668rpx;
					height: 220rpx;
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					line-height: 44rpx;
				}
			}
			.text_14 {
				position: absolute;
				left: 0;
				top: 6rpx;
				overflow-wrap: break-word;
				color: rgba(51, 51, 51, 1);
				font-size: 34rpx;
				letter-spacing: 2px;
				font-family: PingFangSC-Semibold;
				font-weight: 600;
				text-align: center;
				white-space: nowrap;
				line-height: 48rpx;
			}
		}
		.group_8 {
			width: 670rpx;
			margin-top: 46rpx;
			.text-wrapper_8 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 19px;
				border: 1px solid rgba(215, 215, 215, 1);
				padding: 16rpx 62rpx 14rpx 64rpx;
				.text_15 {
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 40rpx;
				}
			}
			.text-wrapper_9 {
				background-color: rgba(80, 186, 174, 1);
				border-radius: 19px;
				padding: 18rpx 100rpx 16rpx 102rpx;
				.text_16 {
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 40rpx;
				}
			}
		}
	}
}
</style>
