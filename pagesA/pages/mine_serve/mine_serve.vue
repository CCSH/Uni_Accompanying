<template>
	<view class="page flex-col">
		<view class="group_1 flex-col">
			<view class="block_3 flex-col">
				<view class="section_3 flex-col">
					<view class="group_5 flex-row justify-between" @click="handleClick(0)">
						<view class="image-text_1 flex-row justify-between">
							<view class="box_1 flex-col"></view>
							<view class="text-group_1 flex-col">
								<text class="text_7">全程陪诊</text>
								<text class="text_8">全程陪同服务，手续代办服务</text>
								<view class="text-wrapper_4">
									<text class="text_9">￥&nbsp;398.00</text>
									<text class="text_10">起</text>
								</view>
							</view>
						</view>
						<image class="thumbnail_6" referrerpolicy="no-referrer" v-show="isEdit" :src="list.indexOf(0) != -1 ? '/static/quan_h@2x.png' : '/static/quan_n@2x.png'" />
					</view>
					<view class="group_6 flex-row justify-between" @click="handleClick(1)">
						<view class="image-text_2 flex-row justify-between">
							<view class="section_4 flex-col"></view>
							<view class="text-group_2 flex-col">
								<text class="text_11">代办买药</text>
								<text class="text_12">人工排队代买药服务</text>
								<view class="text-wrapper_5">
									<text class="text_13">￥&nbsp;298.00</text>
									<text class="text_14">起</text>
								</view>
							</view>
						</view>
						<image class="thumbnail_7" referrerpolicy="no-referrer" v-show="isEdit" :src="list.indexOf(1) != -1 ? '/static/quan_h@2x.png' : '/static/quan_n@2x.png'" />
					</view>
					<view class="group_7 flex-row justify-between" @click="handleClick(2)">
						<view class="image-text_3 flex-row justify-between">
							<view class="group_8 flex-col"></view>
							<view class="text-group_3 flex-col">
								<text class="text_15">代办问诊</text>
								<text class="text_16">代客户到机构咨询及代开检查单服务</text>
								<view class="text-wrapper_6">
									<text class="text_17">￥&nbsp;298.00</text>
									<text class="text_18">起</text>
								</view>
							</view>
						</view>
						<image class="thumbnail_8" referrerpolicy="no-referrer" v-show="isEdit" :src="list.indexOf(2) != -1 ? '/static/quan_h@2x.png' : '/static/quan_n@2x.png'" />
					</view>
					<view class="group_7 flex-row justify-between" @click="handleClick(3)">
						<view class="image-text_3 flex-row justify-between">
							<view class="group_8 flex-col" style="background: url(/static/qusongjieguo2@2x.png); background-size: cover"></view>
							<view class="text-group_3 flex-col">
								<text class="text_15">送取结果</text>
								<text class="text_16">送/取结果快递到家服务,服务仅限当天有效</text>
								<view class="text-wrapper_6">
									<text class="text_17">￥&nbsp;138.00</text>
									<text class="text_18">起</text>
								</view>
							</view>
						</view>
						<image class="thumbnail_8" referrerpolicy="no-referrer" v-show="isEdit" :src="list.indexOf(3) != -1 ? '/static/quan_h@2x.png' : '/static/quan_n@2x.png'" />
					</view>
				</view>
			</view>
		</view>
		<view class="text-wrapper_2 flex-col" @click="isEdit = !isEdit">
			<text class="text_4">{{ isEdit ? '确认' : '修改' }}</text>
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
	overflow: hidden;
	.group_1 {
		background-color: rgba(246, 246, 246, 1);
		margin-bottom: 120rpx;

		.block_3 {
			padding: 24rpx 20rpx 20rpx 20rpx;
			.section_3 {
				.thumbnail_6 {
					width: 36rpx;
					height: 36rpx;
					// border: 1px solid rgba(77, 187, 177, 1);
					margin: 42rpx 0 42rpx 0;
				}
				.group_5 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 8px;
					width: 710rpx;
					padding: 46rpx 30rpx 44rpx 28rpx;
					.image-text_1 {
						width: 452rpx;
						.box_1 {
							border-radius: 3px;
							background-image: url(/static/quanchengpeizhen2@2x.png);
							width: 120rpx;
							height: 120rpx;
							background-size: cover;
						}
						.text-group_1 {
							margin-top: 4rpx;
							.text_7 {
								overflow-wrap: break-word;
								color: rgba(51, 51, 51, 1);
								font-size: 28rpx;
								font-family: PingFangSC-Medium;
								font-weight: 500;
								text-align: left;
								white-space: nowrap;
								line-height: 40rpx;
								margin-right: 200rpx;
							}
							.text_8 {
								overflow-wrap: break-word;
								color: rgba(153, 153, 153, 1);
								font-size: 24rpx;
								font-weight: normal;
								text-align: left;
								white-space: nowrap;
								line-height: 34rpx;
							}
							.text-wrapper_4 {
								width: 136rpx;
								height: 34rpx;
								overflow-wrap: break-word;
								font-size: 0;
								font-weight: normal;
								text-align: left;
								white-space: nowrap;
								line-height: 34rpx;
								margin: 8rpx 176rpx 0 0;
								.text_9 {
									overflow-wrap: break-word;
									color: rgba(245, 63, 61, 1);
									font-size: 24rpx;
									font-weight: normal;
									text-align: left;
									white-space: nowrap;
									line-height: 34rpx;
								}
								.text_10 {
									overflow-wrap: break-word;
									color: rgba(51, 51, 51, 1);
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
				.group_6 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 8px;
					width: 710rpx;
					margin-top: 20rpx;
					padding: 46rpx 30rpx 36rpx 28rpx;
					.image-text_2 {
						width: 358rpx;
						.section_4 {
							border-radius: 3px;
							background-image: url(/static/daibanmaiyao2@2x.png);
							width: 120rpx;
							height: 120rpx;
							margin-bottom: 8rpx;
							background-size: cover;
						}
						.text-group_2 {
							.text_11 {
								overflow-wrap: break-word;
								color: rgba(51, 51, 51, 1);
								font-size: 28rpx;
								font-family: PingFangSC-Medium;
								font-weight: 500;
								text-align: left;
								white-space: nowrap;
								line-height: 40rpx;
								margin: 0 104rpx 0 2rpx;
							}
							.text_12 {
								overflow-wrap: break-word;
								color: rgba(102, 102, 102, 1);
								font-size: 24rpx;
								font-weight: normal;
								text-align: left;
								white-space: nowrap;
								line-height: 34rpx;
								margin-left: 2rpx;
							}
							.text-wrapper_5 {
								width: 136rpx;
								height: 34rpx;
								overflow-wrap: break-word;
								font-size: 0;
								font-weight: normal;
								text-align: left;
								white-space: nowrap;
								line-height: 34rpx;
								margin: 20rpx 82rpx 0 0;
								.text_13 {
									overflow-wrap: break-word;
									color: rgba(245, 63, 61, 1);
									font-size: 24rpx;
									font-weight: normal;
									text-align: left;
									white-space: nowrap;
									line-height: 34rpx;
								}
								.text_14 {
									overflow-wrap: break-word;
									color: rgba(51, 51, 51, 1);
									font-size: 24rpx;
									font-weight: normal;
									text-align: left;
									white-space: nowrap;
									line-height: 34rpx;
								}
							}
						}
					}
					.thumbnail_7 {
						width: 36rpx;
						height: 36rpx;
						// border: 1px solid rgba(77, 187, 177, 1);
						margin: 42rpx 0 50rpx 0;
					}
				}
				.group_7 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 8px;
					width: 710rpx;
					margin-top: 20rpx;
					padding: 46rpx 30rpx 36rpx 28rpx;
					.image-text_3 {
						width: 524rpx;
						.group_8 {
							border-radius: 3px;
							background-image: url(/static/daibanwenzhen2@2x.png);
							width: 120rpx;
							height: 120rpx;
							margin-bottom: 8rpx;
							background-size: cover;
						}
						.text-group_3 {
              margin-left: 20rpx;
							.text_15 {
								overflow-wrap: break-word;
								color: rgba(51, 51, 51, 1);
								font-size: 28rpx;
								font-family: PingFangSC-Medium;
								font-weight: 500;
								text-align: left;
								white-space: nowrap;
								line-height: 40rpx;
								margin-right: 272rpx;
							}
							.text_16 {
								overflow-wrap: break-word;
								color: rgba(102, 102, 102, 1);
								font-size: 24rpx;
								font-weight: normal;
								text-align: left;
								white-space: nowrap;
								line-height: 34rpx;
							}
							.text-wrapper_6 {
								width: 136rpx;
								height: 34rpx;
								overflow-wrap: break-word;
								font-size: 0;
								font-weight: normal;
								text-align: left;
								white-space: nowrap;
								line-height: 34rpx;
								margin: 20rpx 248rpx 0 0;
								.text_17 {
									overflow-wrap: break-word;
									color: rgba(245, 63, 61, 1);
									font-size: 24rpx;
									font-weight: normal;
									text-align: left;
									white-space: nowrap;
									line-height: 34rpx;
								}
								.text_18 {
									overflow-wrap: break-word;
									color: rgba(51, 51, 51, 1);
									font-size: 24rpx;
									font-weight: normal;
									text-align: left;
									white-space: nowrap;
									line-height: 34rpx;
								}
							}
						}
					}
					.thumbnail_8 {
						width: 36rpx;
						height: 36rpx;
						// border: 1px solid rgba(77, 187, 177, 1);
						margin: 42rpx 0 50rpx 0;
					}
				}
				.group_9 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 8px;
					width: 710rpx;
					margin-top: 20rpx;
					padding: 44rpx 30rpx 44rpx 28rpx;
					.group_10 {
						border-radius: 3px;
						background-image: url(/static/qusongjieguo@2x.png);
						width: 120rpx;
						height: 120rpx;
						margin-top: 2rpx;
						background-size: cover;
					}
					.group_11 {
						.text_19 {
							overflow-wrap: break-word;
							color: rgba(51, 51, 51, 1);
							font-size: 28rpx;
							font-family: PingFangSC-Medium;
							font-weight: 500;
							text-align: left;
							white-space: nowrap;
							line-height: 40rpx;
							// margin-right: 400rpx;
						}
						.image-text_4 {
							// width: 512rpx;
							.text-group_4 {
								.text_20 {
									overflow-wrap: break-word;
									color: rgba(102, 102, 102, 1);
									font-size: 24rpx;
									font-weight: normal;
									text-align: left;
									white-space: nowrap;
									line-height: 34rpx;
								}
								.text-wrapper_7 {
									width: 130rpx;
									height: 34rpx;
									overflow-wrap: break-word;
									font-size: 0;
									font-weight: normal;
									text-align: left;
									white-space: nowrap;
									line-height: 34rpx;
									margin: 14rpx 322rpx 0 0;
									.text_21 {
										overflow-wrap: break-word;
										color: rgba(245, 63, 61, 1);
										font-size: 24rpx;
										font-weight: normal;
										text-align: left;
										white-space: nowrap;
										line-height: 34rpx;
									}
									.text_22 {
										overflow-wrap: break-word;
										color: rgba(51, 51, 51, 1);
										font-size: 24rpx;
										font-weight: normal;
										text-align: left;
										white-space: nowrap;
										line-height: 34rpx;
									}
								}
							}
							.group_12 {
								background-color: rgba(255, 255, 255, 1);
								border-radius: 50%;
								width: 36rpx;
								height: 36rpx;
								border: 1px solid rgba(220, 220, 220, 1);
								margin: 4rpx 0 42rpx 0;
							}
						}
					}
				}
			}

			.image_5 {
				width: 268rpx;
				height: 10rpx;
				align-self: center;
				margin-top: 40rpx;
			}
		}
	}
	.text-wrapper_2 {
		position: fixed;
		background-color: rgba(80, 186, 174, 1);
		border-radius: 20px;
		align-self: center;
		bottom: 40rpx;
		width: 690rpx;
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
}
</style>
