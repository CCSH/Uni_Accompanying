<template>
	<view class="page flex-col">
		<view class="box_1 flex-col justify-between">
			<view class="block_8 flex-col">
				<image class="block_3 flex-col" src="/static/img_banner@2x.png" mode="scaleToFill" @click="gotoWecome" />
				<view class="block_4 flex-row justify-between">
					<swiper class="text-wrapper_2" autoplay interval="“2”" vertical circular>
						<swiper-item>
							<text class="text_4">恭喜</text>
							<text class="text_5">#&nbsp;晓霞陪诊&nbsp;#</text>
							<text class="text_6">&nbsp;入驻</text>
						</swiper-item>
						<swiper-item>
							<text class="text_4">恭喜</text>
							<text class="text_5">#&nbsp;啦啦啦啦啦陪诊&nbsp;#</text>
							<text class="text_6">&nbsp;入驻</text>
						</swiper-item>
						<swiper-item>
							<text class="text_4">恭喜</text>
							<text class="text_5">#&nbsp;你好陪诊&nbsp;#</text>
							<text class="text_6">&nbsp;入驻</text>
						</swiper-item>
					</swiper>
					<view class="text-wrapper_3 flex-col" @click="gotoWecome">
						<text class="text_7">我要入驻</text>
					</view>
				</view>
				<view class="box_2 flex-col" @click="takeVisible = true">
					<view class="block_5 flex-col">
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
		<dialogPop
			:visible="takeVisible"
			:title="isTake ? '停止接单' : '开始接单'"
			:content="isTake ? '停止接单后，您将会在用户端隐藏，是否确定停止接单？' : '点击“确定”开始接单'"
			contentAlign="center"
			@close="takeVisible = false"
			@sure="
				takeVisible = false
				isTake = !isTake
			" />
	</view>
</template>
<script>
import dragButton from '@/components/drag-button/drag-button.vue'
import dialogPop from '@/components/dialog-pop.vue'

export default {
	components: {
		dragButton,
		dialogPop,
	},
	data() {
		return {
			takeVisible: false,
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
					width: 100%;
					height: 40rpx;
					overflow-wrap: break-word;
					font-size: 0;
					font-weight: normal;
					text-align: left;
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
					background-image: url('data:image/png;base64,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');
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

.dialog {
	background: #fff;
	.group_3 {
		background: #fff;
		// background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngcb35ff0cd823ed383a1e9d36753420090c769b076fc9a52a536095391a4ea5f8) 100% no-repeat;
		// background-size: 100% 100%;
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
				text-align: center;
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
}
</style>
