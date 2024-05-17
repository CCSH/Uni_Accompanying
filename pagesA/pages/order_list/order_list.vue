<template>
	<view class="page flex-col">
		<view class="section_1 flex-col">
			<view class="list_2 flex-col">
				<view class="list-items_1 flex-col" v-for="(item, index) in loopData0" :key="index">
					<view class="box_7 flex-row justify-between">
						<view class="image-text_3 flex-row justify-between">
							<view class="group_3 flex-col"></view>
							<text class="text-group_1">{{ item.lanhutext0 }}</text>
						</view>
						<text class="text_4">{{ item.lanhutext1 }}</text>
					</view>
					<view class="box_3 flex-row">
						<view class="section_2 flex-col"></view>
						<text class="text_5">{{ item.lanhutext2 }}</text>
						<view class="image-text_4 flex-row justify-between">
							<text class="text-group_2">{{ item.lanhutext3 }}</text>
							<image class="thumbnail_7" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
						</view>
					</view>
					<view class="text-wrapper_6 flex-row justify-between">
						<text class="text_6">{{ item.lanhutext4 }}</text>
						<text class="text_7">{{ item.lanhutext5 }}</text>
					</view>
					<image class="image_3" referrerpolicy="no-referrer" />
					<view class="box_8 flex-row justify-between">
						<view class="text-wrapper_3 flex-col" @click="gotoMap">
							<text class="text_8">{{ item.lanhutext6 }}</text>
						</view>
						<view class="text-wrapper_4 flex-col" @click="gotoOrder">
							<text class="text_9">{{ item.lanhutext7 }}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="image-wrapper_2 flex-col">
				<image class="image_6" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5a55bce0e61824e6b35e82f487c8fc2828194ab82d71f586b93de2f8b36bc031" />
			</view>
		</view>
		<!-- 弹窗 -->
		<uni-popup ref="popup_cancel" type="dialog" class="dialog" background-color="#fff" borderRadius="10rpx   10rpx   10rpx   10rpx">
			<view class="group_3 flex-col">
				<view class="box_7 flex-row justify-between">
					<view class="block_2 flex-col"></view>
					<image class="thumbnail_6" referrerpolicy="no-referrer" src="/static/guanbi@2x.png" @click="$refs.popup_cancel.close()" />
					<text class="text_4">接单成功</text>
				</view>
				<view class="box_8 flex-row">
					<view class="block_3 flex-col"></view>
					<text class="text_8">恭喜您，接单成功！请查看订单详情，在规定时间之内联系客户呦~</text>
				</view>
				<view class="box_9 flex-row justify-between">
					<view class="text-wrapper_3 flex-col" @click="$refs.popup_cancel.close()">
						<text class="text_9">取消</text>
					</view>
					<view class="text-wrapper_4 flex-col" @click="$refs.popup_cancel.close()">
						<text class="text_10">确定</text>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
export default {
	data() {
		return {
			loopData0: [
				{
					lanhutext0: '半天陪诊',
					lanhutext1: '酬劳￥240.00',
					lanhutext2: '四川省成都市余杭区\n力宝广场A座1702',
					lanhutext3: '距离1.5KM',
					lanhuimage0: '/static/dizhi@2x.png',
					lanhutext4: '就诊人：\n联系电话：\n就诊时间：\n服务需求：',
					lanhutext5: '张远山\n193****0290\n2024-04-30 10:00\n暂无',
					lanhuimage1: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc4c4f84bc7509da0f4eb777002ac2c6b106095fe12198fa3bec8cec345c1cb44',
					lanhutext6: '查看地图',
					lanhutext7: '接单',
				},
				{
					lanhutext0: '代取报告',
					lanhutext1: '酬劳￥120.00',
					lanhutext2: '四川省成都市余杭区\n力宝广场A座1702',
					lanhutext3: '距离5.5KM',
					lanhuimage0: '/static/dizhi@2x.png',
					lanhutext4: '就诊人：\n联系电话：\n就诊时间：\n服务需求：',
					lanhutext5: '张远山\n193****0290\n2024-04-30 10:00\n暂无',
					lanhuimage1: 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngc4c4f84bc7509da0f4eb777002ac2c6b106095fe12198fa3bec8cec345c1cb44',
					lanhutext6: '查看地图',
					lanhutext7: '接单',
				},
			],
			constants: {},
		}
	},
	methods: {
		gotoMap() {
			uni.openLocation({
				longitude: Number(116.404),
				latitude: Number(39.915),
				name: 'ccsh',
				address: '',
			})
		},
		gotoOrder() {
			this.$refs.popup_cancel.open()
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
	.section_1 {
		background-color: rgba(246, 246, 246, 1);
		// height: 1624rpx;
		.box_1 {
			background-color: rgba(81, 187, 164, 1);
			padding: 32rpx 10rpx 20rpx 40rpx;
			.box_5 {
				margin: 0 18rpx 0 2rpx;
				.text-wrapper_5 {
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
					margin: 2rpx 0 10rpx 10rpx;
				}
				.image_5 {
					width: 50rpx;
					height: 24rpx;
					margin: 2rpx 0 8rpx 10rpx;
				}
			}
			.box_6 {
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
		.list_2 {
			width: 706rpx;
			height: 1284rpx;
			align-self: center;
			margin-top: 24rpx;
			.list-items_1 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 6px;
				margin-bottom: 24rpx;
				padding: 30rpx 22rpx 24rpx 0;
				.box_7 {
					width: 684rpx;
					.image-text_3 {
						width: 162rpx;
						.group_3 {
							background-color: rgba(80, 186, 174, 1);
							border-radius: 0px 100px 100px 0px;
							width: 14rpx;
							height: 14rpx;
							margin: 14rpx 0 12rpx 0;
						}
						.text-group_1 {
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 28rpx;
							font-weight: normal;
							text-align: right;
							white-space: nowrap;
							line-height: 40rpx;
						}
					}
					.text_4 {
						width: 176rpx;
						overflow-wrap: break-word;
						color: rgba(233, 102, 94, 1);
						font-size: 28rpx;
						font-family: PingFangSC-Semibold;
						font-weight: 600;
						text-align: left;
						white-space: nowrap;
						line-height: 40rpx;
					}
				}
				.box_3 {
					background-color: rgba(246, 246, 246, 1);
					border-radius: 6px;
					margin: 30rpx 0 0 22rpx;
					padding: 20rpx 20rpx 20rpx 24rpx;
					.section_2 {
						background-color: rgba(80, 186, 174, 1);
						border-radius: 50%;
						width: 8rpx;
						height: 8rpx;
						margin: 36rpx 0 36rpx 0;
					}
					.text_5 {
						width: 252rpx;
						height: 80rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: left;
						line-height: 40rpx;
						margin-left: 24rpx;
					}
					.image-text_4 {
						width: 174rpx;
						margin: 20rpx 0 20rpx 160rpx;
						.text-group_2 {
							width: 142rpx;
							overflow-wrap: break-word;
							color: rgba(80, 186, 174, 1);
							font-size: 28rpx;
							font-weight: normal;
							text-align: left;
							white-space: nowrap;
							line-height: 40rpx;
						}
						.thumbnail_7 {
							width: 24rpx;
							height: 30rpx;
							margin: 6rpx 0 4rpx 0;
						}
					}
				}
				.text-wrapper_6 {
					width: 402rpx;
					margin: 10rpx 260rpx 0 22rpx;
					.text_6 {
						width: 140rpx;
						height: 248rpx;
						overflow-wrap: break-word;
						color: rgba(128, 128, 128, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: left;
						line-height: 62rpx;
						margin-top: 2rpx;
					}
					.text_7 {
						width: 248rpx;
						height: 248rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: left;
						line-height: 62rpx;
					}
				}
				.image_3 {
					width: 658rpx;
					height: 2rpx;
					margin: 24rpx 6rpx 0 20rpx;
					background: #e9e9e9;
				}
				.box_8 {
					width: 430rpx;
					margin: 24rpx 232rpx 0 22rpx;
					.text-wrapper_3 {
						background-color: rgba(255, 255, 255, 1);
						border-radius: 19px;
						border: 1px solid rgba(153, 153, 153, 1);
						padding: 16rpx 40rpx 16rpx 40rpx;
						.text_8 {
							overflow-wrap: break-word;
							color: rgba(102, 102, 102, 1);
							font-size: 28rpx;
							font-weight: normal;
							text-align: left;
							white-space: nowrap;
							line-height: 40rpx;
						}
					}
					.text-wrapper_4 {
						background-color: rgba(80, 186, 174, 1);
						border-radius: 19px;
						padding: 18rpx 70rpx 18rpx 70rpx;
						.text_9 {
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
		.image-wrapper_2 {
			padding: 112rpx 240rpx 20rpx 242rpx;
			.image_6 {
				width: 268rpx;
				height: 10rpx;
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
}
</style>
