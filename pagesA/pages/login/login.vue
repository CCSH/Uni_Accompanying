<template>
	<view class="page flex-col">
		<view class="section_1 flex-col">
			<view class="image-text_1 flex-col">
				<image class="image_3" referrerpolicy="no-referrer" src="/static/logo.png" />
				<text class="text-group_1">专业陪诊师</text>
			</view>
			<view class="text-wrapper_2 flex-col">
				<text class="text_4" @click="login">一键登录</text>
			</view>
			<view class="group_3 flex-row">
				<view class="box_1 flex-col">
					<text class="text_5" @click="back">取消登录</text>
					<view class="text-wrapper_3">
						<text class="text_6">我已阅读并同意</text>
						<text class="text_7" @click="showAgreement">《隐私条款》《服务协议》</text>
					</view>
				</view>
				<view class="box_2 flex-col">
					<checkbox class="flex-col" checked="true" color="#51BBA4" style="transform: scale(0.7)" />
				</view>
			</view>
			<view class="group_4 flex-row justify-between">
				<image class="image_4" referrerpolicy="no-referrer" src="/static/line@2x.png" />
				<text class="text_8">其他登录方式</text>
				<image class="image_5" referrerpolicy="no-referrer" src="/static/line@2x.png" />
			</view>
			<view class="image-text_2 flex-col" @click="login">
				<view class="box_4 flex-col"></view>
				<text class="text-group_2">手机号登录</text>
			</view>
			<image class="image_6" referrerpolicy="no-referrer" src="/static/shoujihao@2x.png" />
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
			uni.reLaunch({ url: '/pages/home/home' })
			uni.exitMiniProgram()
		},
		showAgreement() {
			uni.navigateTo({ url: '/pagesA/pages/privacy_agreement/privacy_agreement' })
		},
		login() {
			uni.setStorageSync('userInfo', { name: '132' })
			uni.showToast({
				title: '登录成功',
				duration: 1000,
			})
			setTimeout(() => {
				this.back()
			}, 1000)
		},
		gotoPhone() {
			// uni.navigateTo({ url: '/pagesA/pages/phone_login/phone_login' })
		},
	},
}
</script>
<style scoped lang="scss">
.page {
	position: relative;
	width: 750rpx;
	overflow: hidden;
	.section_1 {
		height: 100vh;
		background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/9dd69e70c91948318d9bbf69ed3712ff_mergeImage.png);
		padding: 32rpx 10rpx 18rpx 0;
		.group_1 {
			margin: 0 18rpx 0 42rpx;
			.text-wrapper_1 {
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
				.text_1 {
					overflow-wrap: break-word;
					color: rgba(0, 0, 0, 1);
					font-size: 28rpx;
					font-family: Helvetica, 'Microsoft YaHei', Arial, sans-serif;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 34rpx;
				}
				.text_2 {
					overflow-wrap: break-word;
					color: rgba(0, 0, 0, 1);
					font-size: 28rpx;
					font-family: Helvetica, 'Microsoft YaHei', Arial, sans-serif;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 34rpx;
				}
			}
			.thumbnail_1 {
				width: 34rpx;
				height: 22rpx;
				margin: 4rpx 0 8rpx 438rpx;
			}
			.thumbnail_2 {
				width: 30rpx;
				height: 22rpx;
				margin: 2rpx 0 10rpx 10rpx;
			}
			.image_1 {
				width: 50rpx;
				height: 24rpx;
				margin: 2rpx 0 8rpx 10rpx;
			}
		}
		.group_2 {
			margin: 28rpx 0 0 40rpx;
			.thumbnail_3 {
				width: 24rpx;
				height: 40rpx;
				margin: 2rpx 0 18rpx 0;
			}
			.text_3 {
				overflow-wrap: break-word;
				color: rgba(51, 51, 51, 1);
				font-size: 34rpx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				text-align: right;
				white-space: nowrap;
				line-height: 48rpx;
				margin-left: 22rpx;
			}
			.image_2 {
				width: 160rpx;
				height: 60rpx;
				margin-left: 426rpx;
			}
		}
		.image-text_1 {
			margin: 302rpx 0 0 0;
			.image_3 {
				width: 160rpx;
				height: 166rpx;
				align-self: center;
			}
			.text-group_1 {
				overflow-wrap: break-word;
				color: rgba(28, 190, 167, 1);
				font-size: 56rpx;
				font-family: REEJI-FlashItalicGB-Flash-DemiBold;
				font-weight: normal;
				text-align: center;
				white-space: nowrap;
				line-height: 56rpx;
				margin-top: 18rpx;
			}
		}
		.text-wrapper_2 {
			background: url(/static/login_bg.png) 100% no-repeat;
			background-size: 100% 100%;
			margin: 130rpx 24rpx 0 36rpx;
			padding: 26rpx 272rpx 26rpx 272rpx;
			.text_4 {
				overflow-wrap: break-word;
				color: rgba(255, 255, 255, 1);
				font-size: 34rpx;
				font-weight: normal;
				text-align: right;
				white-space: nowrap;
				line-height: 48rpx;
			}
		}
		.group_3 {
			position: relative;
			margin: 24rpx 164rpx 0 -130rpx;
			padding: 0 0 326rpx 226rpx;
			.box_1 {
				.text_5 {
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: right;
					white-space: nowrap;
					line-height: 40rpx;
					margin: 0 144rpx 0 224rpx;
				}
				.text-wrapper_3 {
					width: 480rpx;
					height: 34rpx;
					overflow-wrap: break-word;
					font-size: 0;
					font-weight: normal;
					text-align: right;
					white-space: nowrap;
					line-height: 34rpx;
					margin-top: 42rpx;
					.text_6 {
						overflow-wrap: break-word;
						color: rgba(89, 104, 135, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
					.text_7 {
						overflow-wrap: break-word;
						color: rgba(17, 187, 166, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
				}
			}
			.box_2 {
				// height: 426rpx;
				// background: url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga88179567606f10a0a99e5d8d0c34425cd3189aa48c9a1dc52da4227ea20a820) 130rpx -238rpx no-repeat;
				// background-size: 534rpx 902rpx;
				// width: 426rpx;
				position: absolute;
				left: 0;
				top: 16rpx;
				padding: 58rpx 212rpx 324rpx 178rpx;
			}
		}
		.group_4 {
			width: 396rpx;
			margin: 70rpx 166rpx 0 178rpx;
			.image_4 {
				width: 114rpx;
				height: 2rpx;
				margin: 16rpx 0 16rpx 0;
			}
			.text_8 {
				overflow-wrap: break-word;
				color: rgba(102, 102, 102, 1);
				font-size: 24rpx;
				font-weight: normal;
				text-align: right;
				white-space: nowrap;
				line-height: 34rpx;
			}
			.image_5 {
				width: 114rpx;
				height: 2rpx;
				margin: 16rpx 0 16rpx 0;
			}
		}
		.image-text_2 {
			margin: 36rpx 304rpx 0 316rpx;
			.box_4 {
				width: 70rpx;
				height: 70rpx;
				background: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/87d84de38feb45eca3cfe6cf2b5943f6_mergeImage.png) 100% no-repeat;
				background-size: 100% 100%;
				margin: 0 26rpx 0 24rpx;
			}
			.text-group_2 {
				overflow-wrap: break-word;
				color: rgba(102, 102, 102, 1);
				font-size: 24rpx;
				font-weight: normal;
				text-align: right;
				white-space: nowrap;
				line-height: 34rpx;
				margin-top: 12rpx;
			}
		}
		.image_6 {
			width: 268rpx;
			height: 10rpx;
			margin: 102rpx 230rpx 0 242rpx;
		}
	}
}
</style>
