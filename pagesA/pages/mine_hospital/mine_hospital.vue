<template>
	<view class="page flex-col">
		<view class="box_3 flex-col">
			<view class="box_4 flex-col">
				<view class="box_7 flex-row">
					<view class="image-text_1 flex-row justify-between">
						<image class="thumbnail_10" referrerpolicy="no-referrer" src="/static/sousuo@2x.png" />
						<input class="text-group_1" placeholder="请输入医院名称" />
					</view>
				</view>
			</view>
			<view class="box_8 flex-col">
				<view class="group_2 flex-row justify-between" @click="handleClick(0)">
					<view class="image-text_2 flex-row justify-between">
						<image class="thumbnail_11" referrerpolicy="no-referrer" src="/static/dingwei@2x.png" />
						<text class="text-group_2">成都市新津区龙蟠路509路</text>
					</view>
					<image v-show="isEdit" class="thumbnail_12" referrerpolicy="no-referrer" :src="list.indexOf(0) != -1 ? '/static/quan_h@2x.png' : '/static/quan_n@2x.png'" />
					<view class="image-text_3 flex-row justify-between">
						<view class="box_9 flex-col"></view>
						<view class="box_10 flex-col">
							<text class="text-group_3">四川省骨科医院（天府院区）</text>
							<view class="text-wrapper_4 flex-col">
								<text class="text_8">三甲医院</text>
							</view>
						</view>
					</view>
				</view>

				<view class="group_2 flex-row justify-between" @click="handleClick(1)">
					<view class="image-text_2 flex-row justify-between">
						<image class="thumbnail_11" referrerpolicy="no-referrer" src="/static/dingwei@2x.png" />
						<text class="text-group_2">成都市新津区龙蟠路509路</text>
					</view>
					<image v-show="isEdit" class="thumbnail_12" referrerpolicy="no-referrer" :src="list.indexOf(1) != -1 ? '/static/quan_h@2x.png' : '/static/quan_n@2x.png'" />
					<view class="image-text_3 flex-row justify-between">
						<view class="box_9 flex-col"></view>
						<view class="box_10 flex-col">
							<text class="text-group_3">四川省骨科医院（天府院区）</text>
							<view class="text-wrapper_4 flex-col">
								<text class="text_8">三甲医院</text>
							</view>
						</view>
					</view>
				</view>

				<view class="group_2 flex-row justify-between" @click="handleClick(2)">
					<view class="image-text_2 flex-row justify-between">
						<image class="thumbnail_11" referrerpolicy="no-referrer" src="/static/dingwei@2x.png" />
						<text class="text-group_2">成都市新津区龙蟠路509路</text>
					</view>
					<image v-show="isEdit" class="thumbnail_12" referrerpolicy="no-referrer" :src="list.indexOf(2) != -1 ? '/static/quan_h@2x.png' : '/static/quan_n@2x.png'" />
					<view class="image-text_3 flex-row justify-between">
						<view class="box_9 flex-col"></view>
						<view class="box_10 flex-col">
							<text class="text-group_3">四川省骨科医院（天府院区）</text>
							<view class="text-wrapper_4 flex-col">
								<text class="text_8">三甲医院</text>
							</view>
						</view>
					</view>
				</view>

				<view class="group_2 flex-row justify-between" @click="handleClick(3)">
					<view class="image-text_2 flex-row justify-between">
						<image  class="thumbnail_11" referrerpolicy="no-referrer" src="/static/dingwei@2x.png" />
						<text class="text-group_2">成都市新津区龙蟠路509路</text>
					</view>
					<image v-show="isEdit" class="thumbnail_12" referrerpolicy="no-referrer" :src="list.indexOf(3) != -1 ? '/static/quan_h@2x.png' : '/static/quan_n@2x.png'" />
					<view class="image-text_3 flex-row justify-between">
						<view class="box_9 flex-col"></view>
						<view class="box_10 flex-col">
							<text class="text-group_3">四川省骨科医院（天府院区）</text>
							<view class="text-wrapper_4 flex-col">
								<text class="text_8">三甲医院</text>
							</view>
						</view>
					</view>
				</view>

				<view class="group_2 flex-row justify-between" @click="handleClick(4)">
					<view class="image-text_2 flex-row justify-between">
						<image class="thumbnail_11" referrerpolicy="no-referrer" src="/static/dingwei@2x.png" />
						<text class="text-group_2">成都市新津区龙蟠路509路</text>
					</view>
					<image v-show="isEdit" class="thumbnail_12" referrerpolicy="no-referrer" :src="list.indexOf(4) != -1 ? '/static/quan_h@2x.png' : '/static/quan_n@2x.png'" />
					<view class="image-text_3 flex-row justify-between">
						<view class="box_9 flex-col"></view>
						<view class="box_10 flex-col">
							<text class="text-group_3">四川省骨科医院（天府院区）</text>
							<view class="text-wrapper_4 flex-col">
								<text class="text_8">三甲医院</text>
							</view>
						</view>
					</view>
				</view>
				<view class="text-wrapper_10 flex-col" @click="isEdit = !isEdit">
					<text class="text_4">{{ isEdit ? '确定' : '修改' }}</text>
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
			list: [],
			isEdit: false,
		}
	},
	methods: {
		handleClick(val) {
			if (this.list.indexOf(val) != -1) {
				this.list.splice(this.list.indexOf(val), 1)
			} else {
				this.list.push(val)
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
	.box_3 {
		background-color: rgba(246, 246, 246, 1);
		position: relative;
		padding-bottom: 26rpx;
		margin-bottom: 100rpx;
		.box_4 {
			background-color: rgba(81, 187, 164, 1);
			padding: 30rpx 10rpx 18rpx 30rpx;
			.box_5 {
				margin: 0 18rpx 0 12rpx;
				.text-wrapper_3 {
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
					.text_6 {
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
				.thumbnail_7 {
					width: 34rpx;
					height: 22rpx;
					margin: 4rpx 0 8rpx 438rpx;
				}
				.thumbnail_8 {
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
			.box_6 {
				margin: 30rpx 0 0 10rpx;
				.thumbnail_9 {
					width: 24rpx;
					height: 40rpx;
					margin: 2rpx 0 18rpx 0;
				}
				.text_7 {
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
				.image_4 {
					width: 160rpx;
					height: 60rpx;
					margin-left: 136rpx;
				}
			}
			.box_7 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 17px;
				margin: 24rpx 20rpx 0 0;
				padding: 16rpx 462rpx 16rpx 20rpx;
				.image-text_1 {
					width: 208rpx;
					.thumbnail_10 {
						width: 30rpx;
						height: 30rpx;
						margin-top: 4rpx;
						margin-right: 10rpx;
					}
					.text-group_1 {
						overflow-wrap: break-word;
						color: rgba(153, 153, 153, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
				}
			}
		}
		.box_8 {
			background-color: rgba(255, 255, 255, 1);
			border-radius: 5px;
			margin: 26rpx 10rpx 0 12rpx;
			padding: 24rpx 20rpx 24rpx 16rpx;
			.group_2 {
				position: relative;
				width: 672rpx;
				margin-right: 20rpx;
				padding: 56rpx 0 2rpx 166rpx;
				margin-bottom: 60rpx;
				.image-text_2 {
					width: 312rpx;
					margin-top: 54rpx;
					.thumbnail_11 {
						width: 22rpx;
						height: 28rpx;
						margin: 2rpx 0 4rpx 0;
					}
					.text-group_2 {
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
				}
				.thumbnail_12 {
					width: 36rpx;
					height: 36rpx;
					// border: 1px solid rgba(77, 187, 177, 1);
					margin-bottom: 52rpx;
				}
				.image-text_3 {
					position: absolute;
					left: 0;
					top: 0;
					width: 528rpx;
					height: 146rpx;
					.box_9 {
						border-radius: 10px;
						background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/e91d7715cc9e4c22b2048328cb3dae9c_mergeImage.png);
						width: 144rpx;
						height: 144rpx;
						margin-top: 2rpx;
					}
					.box_10 {
						margin-bottom: 54rpx;
						.text-group_3 {
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 28rpx;
							font-family: PingFangSC-Semibold;
							font-weight: 600;
							text-align: left;
							white-space: nowrap;
							line-height: 40rpx;
						}
						.text-wrapper_4 {
							background-color: rgba(82, 183, 175, 1);
							border-radius: 3px;
							margin: 16rpx 252rpx 0 0;
							padding: 0 10rpx 2rpx 6rpx;
							.text_8 {
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
			.group_3 {
				position: relative;
				width: 672rpx;
				margin: 58rpx 20rpx 0 0;
				padding: 56rpx 0 2rpx 166rpx;
				.image-text_4 {
					width: 380rpx;
					margin-top: 54rpx;
					.thumbnail_13 {
						width: 22rpx;
						height: 28rpx;
						margin: 2rpx 0 4rpx 0;
					}
					.text-group_4 {
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
				}
				.box_11 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 50%;
					width: 36rpx;
					height: 36rpx;
					border: 1px solid rgba(220, 220, 220, 1);
					margin-bottom: 52rpx;
				}
				.image-text_5 {
					position: absolute;
					left: 0;
					top: 0;
					width: 360rpx;
					height: 146rpx;
					.box_12 {
						border-radius: 10px;
						background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/f67b2699d7d64cbbaf9a6f08d4510a72_mergeImage.png);
						width: 144rpx;
						height: 144rpx;
						margin-top: 2rpx;
					}
					.box_13 {
						margin-bottom: 54rpx;
						.text-group_5 {
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 28rpx;
							font-family: PingFangSC-Semibold;
							font-weight: 600;
							text-align: left;
							white-space: nowrap;
							line-height: 40rpx;
						}
						.text-wrapper_5 {
							background-color: rgba(82, 183, 175, 1);
							border-radius: 3px;
							margin: 16rpx 84rpx 0 0;
							padding: 0 10rpx 2rpx 6rpx;
							.text_9 {
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
			.group_4 {
				position: relative;
				width: 672rpx;
				margin: 56rpx 20rpx 0 0;
				padding: 56rpx 0 2rpx 166rpx;
				.image-text_6 {
					width: 284rpx;
					margin-top: 54rpx;
					.thumbnail_14 {
						width: 22rpx;
						height: 28rpx;
						margin: 2rpx 0 4rpx 0;
					}
					.text-group_6 {
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
				}
				.thumbnail_15 {
					width: 36rpx;
					height: 36rpx;
					border: 1px solid rgba(77, 187, 177, 1);
					margin-bottom: 52rpx;
				}
				.image-text_7 {
					position: absolute;
					left: 0;
					top: 0;
					width: 322rpx;
					height: 146rpx;
					.box_14 {
						border-radius: 10px;
						background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/01685d6468344ff481a5567b74340782_mergeImage.png);
						width: 144rpx;
						height: 144rpx;
						margin-top: 2rpx;
					}
					.box_15 {
						margin-bottom: 54rpx;
						.text-group_7 {
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 28rpx;
							font-family: PingFangSC-Semibold;
							font-weight: 600;
							text-align: left;
							white-space: nowrap;
							line-height: 40rpx;
						}
						.text-wrapper_6 {
							background-color: rgba(82, 183, 175, 1);
							border-radius: 3px;
							margin: 16rpx 46rpx 0 0;
							padding: 0 10rpx 2rpx 6rpx;
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
			.group_5 {
				position: relative;
				width: 672rpx;
				margin: 58rpx 20rpx 0 0;
				padding: 56rpx 0 2rpx 166rpx;
				.image-text_8 {
					width: 298rpx;
					margin-top: 54rpx;
					.thumbnail_16 {
						width: 22rpx;
						height: 28rpx;
						margin: 2rpx 0 4rpx 0;
					}
					.text-group_8 {
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
				}
				.thumbnail_17 {
					width: 36rpx;
					height: 36rpx;
					border: 1px solid rgba(77, 187, 177, 1);
					margin-bottom: 52rpx;
				}
				.image-text_9 {
					position: absolute;
					left: 0;
					top: 0;
					width: 388rpx;
					height: 146rpx;
					.group_6 {
						border-radius: 10px;
						background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/529dea41bdf64eaf82b973dad386afac_mergeImage.png);
						width: 144rpx;
						height: 144rpx;
						margin-top: 2rpx;
					}
					.group_7 {
						margin-bottom: 54rpx;
						.text-group_9 {
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 28rpx;
							font-family: PingFangSC-Semibold;
							font-weight: 600;
							text-align: left;
							white-space: nowrap;
							line-height: 40rpx;
						}
						.text-wrapper_7 {
							background-color: rgba(82, 183, 175, 1);
							border-radius: 3px;
							margin: 16rpx 112rpx 0 0;
							padding: 0 10rpx 2rpx 6rpx;
							.text_11 {
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
			.group_8 {
				position: relative;
				width: 672rpx;
				margin: 56rpx 20rpx 0 0;
				padding: 56rpx 0 2rpx 166rpx;
				.image-text_10 {
					width: 406rpx;
					margin-top: 54rpx;
					.thumbnail_18 {
						width: 22rpx;
						height: 28rpx;
						margin: 2rpx 0 4rpx 0;
					}
					.text-group_10 {
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
				}
				.box_16 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 50%;
					width: 36rpx;
					height: 36rpx;
					border: 1px solid rgba(220, 220, 220, 1);
					margin-bottom: 52rpx;
				}
				.image-text_11 {
					position: absolute;
					left: 0;
					top: 0;
					width: 360rpx;
					height: 146rpx;
					.group_9 {
						border-radius: 10px;
						background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/88bd1c65e72a4b938ab8f647bb25dd02_mergeImage.png);
						width: 144rpx;
						height: 144rpx;
						margin-top: 2rpx;
					}
					.group_10 {
						margin-bottom: 54rpx;
						.text-group_11 {
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 28rpx;
							font-family: PingFangSC-Semibold;
							font-weight: 600;
							text-align: left;
							white-space: nowrap;
							line-height: 40rpx;
						}
						.text-wrapper_8 {
							background-color: rgba(82, 183, 175, 1);
							border-radius: 3px;
							margin: 16rpx 84rpx 0 0;
							padding: 0 10rpx 2rpx 6rpx;
							.text_12 {
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
			.group_11 {
				position: relative;
				width: 672rpx;
				margin: 58rpx 20rpx 0 0;
				padding: 56rpx 0 2rpx 166rpx;
				.image-text_12 {
					width: 336rpx;
					margin-top: 54rpx;
					.thumbnail_19 {
						width: 22rpx;
						height: 28rpx;
						margin: 2rpx 0 4rpx 0;
					}
					.text-group_12 {
						overflow-wrap: break-word;
						color: rgba(102, 102, 102, 1);
						font-size: 24rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
				}
				.box_17 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 50%;
					width: 36rpx;
					height: 36rpx;
					border: 1px solid rgba(220, 220, 220, 1);
					margin-bottom: 52rpx;
				}
				.image-text_13 {
					position: absolute;
					left: 0;
					top: 0;
					width: 388rpx;
					height: 146rpx;
					.section_1 {
						border-radius: 10px;
						background-image: url(https://lanhu-dds-backend.oss-cn-beijing.aliyuncs.com/merge_image/imgs/ebecd770f18e4bd1ad9ea70a3d37cb8a_mergeImage.png);
						width: 144rpx;
						height: 144rpx;
						margin-top: 2rpx;
					}
					.section_2 {
						margin-bottom: 54rpx;
						.text-group_13 {
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 28rpx;
							font-family: PingFangSC-Semibold;
							font-weight: 600;
							text-align: left;
							white-space: nowrap;
							line-height: 40rpx;
						}
						.text-wrapper_9 {
							background-color: rgba(82, 183, 175, 1);
							border-radius: 3px;
							margin: 16rpx 112rpx 0 0;
							padding: 0 10rpx 2rpx 6rpx;
							.text_13 {
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
		}
	}
	.image-wrapper_2 {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 750rpx;
		height: 28rpx;
		.image_5 {
			width: 268rpx;
			height: 10rpx;
			margin: -2rpx 240rpx 20rpx 242rpx;
		}
	}
}

.text-wrapper_10 {
	position: fixed;
	bottom: 10rpx;
	background: #50baae;
	border-radius: 40rpx;
	margin: 2rpx 0 0 2rpx;
	padding: 20rpx 316rpx 20rpx 318rpx;
	.text_4 {
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
</style>
