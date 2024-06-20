<template>
	<view class="page flex-col">
		<view class="box_1 flex-col">
			<view class="box_3 flex-col">
				<view class="group_5 flex-row">
					<!-- 文件上传 -->
					<view @click="openFile" class="image-text_1 flex-col">
						<image class="thumbnail_6" referrerpolicy="no-referrer" src="/static/xiangji1@2x.png" />
						<text class="text-group_1">添加照片</text>
					</view>
				</view>
				<image class="image_4" referrerpolicy="no-referrer" src="" />
				<input class="text_6" placeholder="设置您称呼用于服务展示" />
				<image class="image_5" referrerpolicy="no-referrer" />
				<uni-segmented-control class="group_6" :current="current" :values="items" active-color="#51BBA4" @clickItem="onClickItem" />
				<image class="image_6" referrerpolicy="no-referrer" />
				<image class="image_7" referrerpolicy="no-referrer" />
				<view class="paragraph_1">
					<text style="display: block">形象照片</text>
					<br />
					<text style="display: block">展示称呼</text>
					<br />
					<text style="display: block">性别</text>
					<br />
					<text style="display: block">年龄</text>
					<br />
					<text style="display: block">手机号</text>
					<br />
				</view>
				<view class="paragraph_2 justify-between flex-col">
					<input placeholder="请填写周岁年龄" />
					<br />
					<input placeholder="请填写您的手机号" />
				</view>
			</view>
			<view class="box_4 flex-col">
				<view class="box_5 flex-row">
					<image class="image_8" referrerpolicy="no-referrer" />
					<image class="image_9" referrerpolicy="no-referrer" />
					<view class="paragraph_3 justify-between flex-col">
						<input placeholder="请填写身份证上姓名" />
						<br />
						<input placeholder="请填写身份证号" />
					</view>
					<view class="paragraph_4">
						<text style="display: block">身份证名称</text>

						<br />
						<text style="display: block">身份证号</text>
					</view>
				</view>
				<view class="box_6 flex-row justify-between">
					<view class="block_1 flex-row">
						<view class="image-text_2 flex-col" @click="openFile">
							<image class="thumbnail_7" referrerpolicy="no-referrer" src="/static/xiangji1@2x.png" />
							<text class="text-group_2">添加照片</text>
						</view>
					</view>
					<view class="block_2 flex-row">
						<view class="image-text_3 flex-col" @click="openFile">
							<image class="thumbnail_8" referrerpolicy="no-referrer" src="/static/xiangji1@2x.png" />
							<text class="text-group_3">添加照片</text>
						</view>
					</view>
				</view>
				<image class="image_10" referrerpolicy="no-referrer" />
				<view class="box_7 flex-row">
					<view class="image-text_4 flex-col" @click="openFile">
						<image class="thumbnail_9" referrerpolicy="no-referrer" src="/static/xiangji1@2x.png" />
						<text class="text-group_4">添加照片</text>
					</view>
				</view>
				<image class="image_11" referrerpolicy="no-referrer" />
				<view class="box_8 flex-row">
					<view class="image-text_5 flex-col" @click="openFile">
						<image class="thumbnail_10" referrerpolicy="no-referrer" src="/static/xiangji1@2x.png" />
						<text class="text-group_5">添加照片</text>
					</view>
				</view>
				<image class="image_12" referrerpolicy="no-referrer" />
				<view class="box_9 flex-row">
					<view class="image-text_6 flex-col" @click="openFile">
						<image class="thumbnail_11" referrerpolicy="no-referrer" src="/static/xiangji1@2x.png" />
						<text class="text-group_6">添加照片</text>
					</view>
				</view>
				<image class="image_13" referrerpolicy="no-referrer" />
				<view class="box_10 flex-row">
					<view class="image-text_7 flex-col" @click="openFile">
						<image class="thumbnail_12" referrerpolicy="no-referrer" src="/static/xiangji1@2x.png" />
						<text class="text-group_7">添加照片</text>
					</view>
				</view>
				<text class="paragraph_5">
					<text style="display: block">身份证照片(正反两面)</text>

					<br />
					<text style="display: block">医护证(执业证)</text>

					<br />
					<text style="display: block">健康师证</text>

					<br />
					<text style="display: block">营养师证</text>

					<br />
					<text style="display: block">其他证件</text>
				</text>
			</view>
			<view class="box_11 flex-col">
				<view class="image-text_8 flex-row justify-between" v-show="!isEdit">
					<image class="box_12 flex-col" :src="isAgreement ? '/static/quan_n@2x.png' : '/static/quan_h@2x.png'" @click="isAgreement = !isAgreement" />
					<view class="text-group_8">
						<text class="text_9">我已阅读并同意</text>
						<text class="text_10" @click="gotoAgreement">《用户协议》</text>
						<text class="text_11">和</text>
						<text class="text_12" @click="gotoAgreement">《服务协议》</text>
					</view>
				</view>
				<view class="text-wrapper_4 flex-col" @click="hantdleSubmit">
					<text class="text_13">{{ isEdit ? '保存' : '注册成为陪诊师' }}</text>
				</view>
				<!-- <image class="image_14" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5a55bce0e61824e6b35e82f487c8fc2828194ab82d71f586b93de2f8b36bc031" /> -->
				<!-- <image class="thumbnail_13" referrerpolicy="no-referrer" src="https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e9f615ad5d4a4af2add234d3e4a81e8c_mergeImage.png" /> -->
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			constants: {},
			current: 0,
			items: ['男', '女'],
			styleType: 'line',
			isAgreement: true,
			isEdit: false,
		}
	},
	onLoad(val) {
		this.isEdit = val.edit
		if (this.isEdit) {
			uni.setNavigationBarTitle({ title: '修改个人简历' })
		}
	},
	methods: {
		onClickItem(e) {
			if (this.current !== e.currentIndex) {
				this.current = e.currentIndex
			}
		},
		openFile() {
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['album', 'camera'],
				success: ({ tempFilePaths, tempFiles }) => {},
				fail: error => {},
			})
		},
		gotoAgreement() {
			uni.navigateTo({ url: '/pagesA/pages/privacy_agreement/privacy_agreement' })
		},
		hantdleSubmit() {
			uni.setStorageSync('userInfo', { name: 'ccsh' })
			uni.showToast({
				title: '注册成功',
				icon: 'success',
				mask: true,
				duration: 1000,
				success: function () {
					uni.reLaunch({ url: '/pages/home/home' })
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
	overflow: hidden;
	.box_1 {
		background-color: rgba(246, 246, 246, 1);
		.group_2 {
			background-color: rgba(81, 187, 164, 1);
			padding: 30rpx 10rpx 22rpx 40rpx;
			.group_3 {
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
				.image_3 {
					width: 50rpx;
					height: 24rpx;
					margin: 2rpx 0 8rpx 10rpx;
				}
			}
			.group_4 {
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
					margin-left: 226rpx;
				}
				.image_2 {
					width: 160rpx;
					height: 60rpx;
					margin-left: 118rpx;
				}
			}
		}
		.box_3 {
			background-color: rgba(255, 255, 255, 1);
			border-radius: 10px;
			position: relative;
			width: 710rpx;
			align-self: center;
			margin-top: 22rpx;
			padding: 18rpx 30rpx 122rpx 30rpx;
			.group_5 {
				background-color: rgba(241, 241, 241, 1);
				border-radius: 5px;
				margin: 0 2rpx 0 548rpx;
				padding: 18rpx 10rpx 12rpx 10rpx;
				.image-text_1 {
					.thumbnail_6 {
						width: 38rpx;
						height: 36rpx;
						margin: 0 22rpx 0 20rpx;
					}
					.text-group_1 {
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 20rpx;
						font-weight: normal;
						text-align: center;
						white-space: nowrap;
						line-height: 28rpx;
						margin-top: 6rpx;
					}
				}
			}
			.image_4 {
				width: 650rpx;
				height: 2rpx;
				margin-top: 16rpx;
				background: #e6e6e6;
			}
			.text_6 {
				overflow-wrap: break-word;
				color: rgba(210, 210, 210, 1);
				font-size: 28rpx;
				font-weight: normal;
				text-align: right;
				line-height: 60rpx;
				margin: 24rpx 0 0 342rpx;
			}
			.image_5 {
				width: 650rpx;
				height: 2rpx;
				margin-top: 26rpx;
				background: #e6e6e6;
			}
			.group_6 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 3px;
				width: 180rpx;
				// border: 1px solid rgba(218, 218, 218, 1);
				padding-right: 28rpx;
				margin: 14rpx 2rpx 0 468rpx;
				.text-wrapper_3 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 3px 0px 0px 3px;
					border: 1px solid rgba(218, 218, 218, 1);
					padding: 18rpx 30rpx 18rpx 28rpx;
					.text_7 {
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: center;
						white-space: nowrap;
						line-height: 40rpx;
					}
				}
				.text_8 {
					overflow-wrap: break-word;
					color: rgba(153, 153, 153, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: center;
					white-space: nowrap;
					line-height: 40rpx;
					margin-top: 20rpx;
				}
			}
			.image_6 {
				width: 650rpx;
				height: 2rpx;
				margin-top: 16rpx;
				background: #e6e6e6;
			}
			.image_7 {
				width: 650rpx;
				height: 2rpx;
				margin-top: 108rpx;
				background: #e6e6e6;
			}
			.paragraph_1 {
				position: absolute;
				left: 30rpx;
				top: 20rpx;
				width: 112rpx;
				height: 560rpx;
				overflow-wrap: break-word;
				color: rgba(102, 102, 102, 1);
				font-size: 28rpx;
				font-weight: normal;
				text-align: left;
				line-height: 112rpx;
			}
			.paragraph_2 {
				position: absolute;
				left: 456rpx;
				top: 385rpx;
				width: 224rpx;
				height: 156rpx;
				overflow-wrap: break-word;
				color: rgba(210, 210, 210, 1);
				font-size: 28rpx;
				font-weight: normal;
				text-align: right;
				line-height: 108rpx;
			}
		}
		.box_4 {
			background-color: rgba(255, 255, 255, 1);
			border-radius: 10px;
			position: relative;
			width: 710rpx;
			align-self: center;
			margin-top: 24rpx;
			padding: 16rpx 28rpx 16rpx 30rpx;
			.box_5 {
				position: relative;
				margin-right: 2rpx;
				.image_8 {
					width: 650rpx;
					height: 2rpx;
					margin-top: 230rpx;
				}
				.image_9 {
					width: 650rpx;
					height: 2rpx;
					margin: 118rpx 0 112rpx -650rpx;
				}
				.paragraph_3 {
					width: 252rpx;
					height: 151rpx;
					margin-top: 42rpx;
					overflow-wrap: break-word;
					color: rgba(210, 210, 210, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: right;
					line-height: 116rpx;
					margin-left: -252rpx;
				}
				.paragraph_4 {
					position: absolute;
					left: 0;
					top: 4rpx;
					width: 140rpx;
					height: 224rpx;
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					line-height: 112rpx;
				}
			}
			.box_6 {
				width: 216rpx;
				margin: 16rpx 0 0 436rpx;
				.block_1 {
					background-color: rgba(241, 241, 241, 1);
					border-radius: 5px;
					padding: 18rpx 10rpx 12rpx 10rpx;
					.image-text_2 {
						.thumbnail_7 {
							width: 38rpx;
							height: 36rpx;
							margin: 0 22rpx 0 20rpx;
						}
						.text-group_2 {
							overflow-wrap: break-word;
							color: rgba(153, 153, 153, 1);
							font-size: 20rpx;
							font-weight: normal;
							text-align: center;
							white-space: nowrap;
							line-height: 28rpx;
							margin-top: 6rpx;
						}
					}
				}
				.block_2 {
					background-color: rgba(241, 241, 241, 1);
					border-radius: 5px;
					padding: 18rpx 10rpx 12rpx 10rpx;
					.image-text_3 {
						.thumbnail_8 {
							width: 38rpx;
							height: 36rpx;
							margin: 0 22rpx 0 20rpx;
						}
						.text-group_3 {
							overflow-wrap: break-word;
							color: rgba(153, 153, 153, 1);
							font-size: 20rpx;
							font-weight: normal;
							text-align: center;
							white-space: nowrap;
							line-height: 28rpx;
							margin-top: 6rpx;
						}
					}
				}
			}
			.image_10 {
				width: 650rpx;
				height: 2rpx;
				margin: 14rpx 2rpx 0 0;
				background: #e6e6e6;
			}
			.box_7 {
				background-color: rgba(241, 241, 241, 1);
				border-radius: 5px;
				margin: 14rpx 0 0 552rpx;
				padding: 18rpx 10rpx 12rpx 10rpx;
				.image-text_4 {
					.thumbnail_9 {
						width: 38rpx;
						height: 36rpx;
						margin: 0 22rpx 0 20rpx;
					}
					.text-group_4 {
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 20rpx;
						font-weight: normal;
						text-align: center;
						white-space: nowrap;
						line-height: 28rpx;
						margin-top: 6rpx;
					}
				}
			}
			.image_11 {
				width: 650rpx;
				height: 2rpx;
				margin: 14rpx 2rpx 0 0;
				background: #e6e6e6;
			}
			.box_8 {
				background-color: rgba(241, 241, 241, 1);
				border-radius: 5px;
				margin: 16rpx 0 0 552rpx;
				padding: 18rpx 10rpx 12rpx 10rpx;
				.image-text_5 {
					.thumbnail_10 {
						width: 38rpx;
						height: 36rpx;
						margin: 0 22rpx 0 20rpx;
					}
					.text-group_5 {
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 20rpx;
						font-weight: normal;
						text-align: center;
						white-space: nowrap;
						line-height: 28rpx;
						margin-top: 6rpx;
					}
				}
			}
			.image_12 {
				width: 650rpx;
				height: 2rpx;
				margin: 18rpx 2rpx 0 0;
				background: #e6e6e6;
			}
			.box_9 {
				background-color: rgba(241, 241, 241, 1);
				border-radius: 5px;
				margin: 16rpx 0 0 552rpx;
				padding: 18rpx 10rpx 12rpx 10rpx;
				.image-text_6 {
					.thumbnail_11 {
						width: 38rpx;
						height: 36rpx;
						margin: 0 22rpx 0 20rpx;
					}
					.text-group_6 {
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 20rpx;
						font-weight: normal;
						text-align: center;
						white-space: nowrap;
						line-height: 28rpx;
						margin-top: 6rpx;
					}
				}
			}
			.image_13 {
				width: 650rpx;
				height: 2rpx;
				margin: 18rpx 2rpx 0 0;
				background: #e6e6e6;
			}
			.box_10 {
				background-color: rgba(241, 241, 241, 1);
				border-radius: 5px;
				margin: 18rpx 0 0 552rpx;
				padding: 18rpx 10rpx 12rpx 10rpx;
				.image-text_7 {
					.thumbnail_12 {
						width: 38rpx;
						height: 36rpx;
						margin: 0 22rpx 0 20rpx;
					}
					.text-group_7 {
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 20rpx;
						font-weight: normal;
						text-align: center;
						white-space: nowrap;
						line-height: 28rpx;
						margin-top: 6rpx;
					}
				}
			}
			.paragraph_5 {
				position: absolute;
				left: 30rpx;
				top: 246rpx;
				width: 272rpx;
				height: 670rpx;
				overflow-wrap: break-word;
				color: rgba(102, 102, 102, 1);
				font-size: 28rpx;
				font-weight: normal;
				text-align: left;
				line-height: 134rpx;
			}
		}
		.box_11 {
			background-color: rgba(255, 255, 255, 1);
			position: relative;
			margin-top: 28rpx;
			padding: 26rpx 36rpx 18rpx 34rpx;
			.image-text_8 {
				width: 514rpx;
				margin: 0 110rpx 0 56rpx;
				.box_12 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 50%;
					width: 28rpx;
					height: 28rpx;
					// border: 2px solid rgba(151, 151, 151, 1);
					margin-top: 6rpx;
				}
				.text-group_8 {
					width: 480rpx;
					height: 34rpx;
					overflow-wrap: break-word;
					font-size: 0;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 34rpx;
					.text_9 {
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
					.text_10 {
						overflow-wrap: break-word;
						color: rgba(81, 187, 164, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
					.text_11 {
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
					.text_12 {
						overflow-wrap: break-word;
						color: rgba(81, 187, 164, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
				}
			}
			.text-wrapper_4 {
				// background-color: rgba(240, 240, 240, 1);
				background: #51bba4;
				border-radius: 25px;
				margin-top: 22rpx;
				padding: 26rpx 220rpx 26rpx 220rpx;
				.text_13 {
					overflow-wrap: break-word;
					// color: rgba(173, 173, 173, 1);
					color: #fff;
					font-size: 34rpx;
					font-weight: normal;
					text-align: center;
					white-space: nowrap;
					line-height: 48rpx;
				}
			}
			.image_14 {
				width: 268rpx;
				height: 10rpx;
				align-self: center;
				margin-top: 44rpx;
			}
			.thumbnail_13 {
				position: absolute;
				left: 90rpx;
				top: -10rpx;
				width: 28rpx;
				height: 28rpx;
			}
		}
	}
}
</style>
