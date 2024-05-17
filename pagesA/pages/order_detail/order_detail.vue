<template>
	<view class="page flex-col">
		<view class="block_1 flex-col justify-between">
			<view>
        <view class="section_5 flex-col">
				<view class="group_7 flex-row">
					<view class="block_5 flex-col"></view>
					<text class="text_11">就诊人信息</text>
				</view>
				<view class="text-wrapper_7 flex-row justify-between">
					<text class="paragraph_1">
						<text style="display: block">就诊医院</text>

						<br />
						<text style="display: block">就诊科室</text>

						<br />
						<text style="display: block">就诊时间</text>

						<br />
						<text style="display: block">就诊人</text>

						<br />
						<text style="display: block">联系电话</text>

						<br />
						<text style="display: block">身份证号</text>

						<br />
						<text style="display: block">就诊人关系</text>
					</text>
					<text class="paragraph_2">
						<text style="display: block">四川省骨科语言</text>

						<br />
						<text style="display: block">足裸2科</text>

						<br />
						<text style="display: block">2024-05-28&nbsp;21:35</text>

						<br />
						<text style="display: block">赵洪莉</text>

						<br />
						<text style="display: block">193****95</text>

						<br />
						<text style="display: block">1306********024</text>

						<br />
						<text style="display: block">本人</text>
					</text>
				</view>
			</view>
			<view class="section_6 flex-col">
				<view class="group_8 flex-row">
					<view class="group_9 flex-col"></view>
					<text class="text_12">订单信息</text>
				</view>
				<view class="group_10 flex-row justify-between">
					<text class="paragraph_3">
						<text style="display: block">服务项目</text>

						<br />
						<text style="display: block">陪诊时长</text>

						<br />
						<text style="display: block">订单号</text>

						<br />
						<text style="display: block">下单时间</text>

						<br />
						<text style="display: block">订单金额</text>
					</text>
					<view class="text-wrapper_8">
						<text class="paragraph_4">
							<text style="display: block">全程陪诊</text>

							<br />
							<text style="display: block">半天陪诊</text>

							<br />
							<text style="display: block">2825058EW2S</text>

							<br />
							<text style="display: block">2024-05-28&nbsp;19:00:00</text>

							<br />
							<text class="text_13">￥268.00</text>
						</text>
					</view>
				</view>
			</view>
      </view>
<view class="section_3 flex-col">
        <view class="section_4 flex-row">
          <view class="text-wrapper_3 flex-col" @click="gotoMap">
            <text class="text_6">查看地图</text>
          </view>
          <view class="text-wrapper_4 flex-col" @click="$refs.popup_take.open()">
            <text class="text_7">接单</text>
          </view>
          <view class="text-wrapper_5 flex-col" @click="$refs.popup_cancel.open()">
            <text class="text_8">转单</text>
          </view>
        </view>
        <!-- <view class="image-wrapper_2 flex-row">
          <image
            class="image_5"
            referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5a55bce0e61824e6b35e82f487c8fc2828194ab82d71f586b93de2f8b36bc031"
          />
        </view> -->
      </view>
		</view>
    		<!-- 弹窗 -->
		<uni-popup ref="popup_take" type="dialog" class="dialog" background-color="#fff" borderRadius="10rpx   10rpx   10rpx   10rpx">
			<view class="group_3 flex-col">
				<view class="box_7 flex-row justify-between">
					<view class="block_2 flex-col"></view>
					<image class="thumbnail_6" referrerpolicy="no-referrer" src="/static/guanbi@2x.png" @click="$refs.popup_take.close()" />
					<text class="text_4">接单成功</text>
				</view>
				<view class="box_8 flex-row">
					<view class="block_3 flex-col"></view>
					<text class="text_8">恭喜您，接单成功！请查看订单详情，在规定时间之内联系客户呦~</text>
				</view>
				<view class="box_9 flex-row justify-between">
					<view class="text-wrapper_3 flex-col" @click="$refs.popup_take.close()">
						<text class="text_9">取消</text>
					</view>
					<view class="text-wrapper_4 flex-col" @click="$refs.popup_take.close()">
						<text class="text_10">确定</text>
					</view>
				</view>
			</view>
		</uni-popup>
		<!-- 转单 -->
		<uni-popup ref="popup_cancel" type="dialog" class="dialog" background-color="#fff" borderRadius="10rpx   10rpx   10rpx   10rpx">
			<view class="group_3 flex-col">
				<view class="box_7 flex-row justify-between">
					<view class="block_2 flex-col"></view>
					<image class="thumbnail_6" referrerpolicy="no-referrer" src="/static/guanbi@2x.png" @click="$refs.popup_cancel.close()" />
					<text class="text_4">转单成功</text>
				</view>
				<view class="box_8 flex-row">
					<view class="block_3 flex-col"></view>
					<text class="text_8">恭喜您，转单成功！</text>
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
  },
}
</script>
<style scoped lang="scss">
.page {
	position: relative;
	width: 750rpx;
	// height: 1624rpx;
	overflow: hidden;
	.block_1 {
		background-color: rgba(246, 246, 246, 1);
		position: relative;
    min-height: 100vh;
		.group_1 {
			background-color: rgba(81, 187, 164, 1);
			padding: 32rpx 10rpx 20rpx 40rpx;
			.group_5 {
				margin: 0 18rpx 0 2rpx;
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
				.image_4 {
					width: 50rpx;
					height: 24rpx;
					margin: 2rpx 0 8rpx 10rpx;
				}
			}
			.group_6 {
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
		.section_2 {
			padding: 62rpx 20rpx 22rpx 46rpx;
			.block_3 {
				margin-right: 508rpx;
				.block_2 {
					background-color: rgba(255, 255, 255, 1);
					position: relative;
					padding: 20rpx 60rpx 12rpx 52rpx;
					.section_1 {
						background-color: rgba(164, 227, 216, 1);
						border-radius: 4px;
						width: 64rpx;
						height: 16rpx;
					}
					.text_4 {
						position: absolute;
						left: 6rpx;
						top: 0;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 34rpx;
						font-family: PingFangSC-Semibold;
						font-weight: 600;
						text-align: left;
						white-space: nowrap;
						line-height: 48rpx;
					}
				}
			}
			.block_4 {
				margin: 1090rpx 0 0 518rpx;
				.text-wrapper_2 {
					background-color: rgba(255, 255, 255, 1);
					padding: 8rpx 28rpx 20rpx 18rpx;
					.text_5 {
						overflow-wrap: break-word;
						color: rgba(80, 186, 174, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 40rpx;
					}
				}
			}
		}
		.section_3 {
			background-color: rgba(255, 255, 255, 1);
			margin-top: 20rpx;
			padding: 16rpx 44rpx 18rpx 44rpx;
			.section_4 {
				.text-wrapper_3 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 19px;
					border: 1px solid rgba(153, 153, 153, 1);
					padding: 16rpx 40rpx 16rpx 40rpx;
					.text_6 {
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
					margin-left: 38rpx;
					padding: 18rpx 70rpx 18rpx 70rpx;
					.text_7 {
						overflow-wrap: break-word;
						color: rgba(255, 255, 255, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 40rpx;
					}
				}
				.text-wrapper_5 {
					background-color: rgba(255, 255, 255, 1);
					border-radius: 19px;
					border: 1px solid rgba(80, 186, 174, 1);
					margin-left: 36rpx;
					padding: 16rpx 68rpx 16rpx 68rpx;
					.text_8 {
						overflow-wrap: break-word;
						color: rgba(80, 186, 174, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 40rpx;
					}
				}
			}
			.image-wrapper_2 {
				width: 268rpx;
				align-self: center;
				margin-top: 40rpx;
				.image_5 {
					width: 268rpx;
					height: 10rpx;
				}
			}
		}
		.section_5 {
			background-color: rgba(255, 255, 255, 1);
			border-radius: 6px;
			height: 694rpx;
			width: 710rpx;
			margin-left: 20rpx;
			margin-top: 20rpx;
			padding: 42rpx 28rpx 16rpx 30rpx;
			.group_7 {
				position: relative;
				margin: 0 480rpx 0 2rpx;
				padding: 24rpx 56rpx 4rpx 34rpx;
				.block_5 {
					background-color: rgba(165, 229, 215, 1);
					border-radius: 5px;
					width: 80rpx;
					height: 20rpx;
				}
				.text_11 {
					position: absolute;
					left: 0;
					top: 0;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 34rpx;
					font-family: PingFangSC-Semibold;
					font-weight: 600;
					text-align: left;
					white-space: nowrap;
					line-height: 48rpx;
				}
			}
			.text-wrapper_7 {
				width: 652rpx;
				margin-top: 36rpx;
				.paragraph_1 {
					width: 140rpx;
					height: 552rpx;
					overflow-wrap: break-word;
					color: rgba(153, 153, 153, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					line-height: 78rpx;
				}
				.paragraph_2 {
					width: 248rpx;
					height: 552rpx;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: right;
					line-height: 78rpx;
				}
			}
		}
		.section_6 {
			background-color: rgba(255, 255, 255, 1);
			border-radius: 6px;
			height: 532rpx;
			width: 710rpx;
			margin-left: 20rpx;
			margin-top: 20rpx;
			// top: 912rpx;
			padding: 30rpx 28rpx 20rpx 30rpx;
			.group_8 {
				position: relative;
				margin: 0 514rpx 0 2rpx;
				padding: 24rpx 22rpx 4rpx 34rpx;
				.group_9 {
					background-color: rgba(165, 229, 215, 1);
					border-radius: 5px;
					width: 80rpx;
					height: 20rpx;
				}
				.text_12 {
					position: absolute;
					left: 0;
					top: 0;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 34rpx;
					font-family: PingFangSC-Semibold;
					font-weight: 600;
					text-align: left;
					white-space: nowrap;
					line-height: 48rpx;
				}
			}
			.group_10 {
				width: 652rpx;
				margin-top: 38rpx;
				.paragraph_3 {
					width: 112rpx;
					height: 396rpx;
					overflow-wrap: break-word;
					color: rgba(153, 153, 153, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					line-height: 78rpx;
				}
				.text-wrapper_8 {
					width: 288rpx;
					height: 396rpx;
					overflow-wrap: break-word;
					font-size: 0;
					font-weight: normal;
					text-align: center;
					line-height: 78rpx;
					.paragraph_4 {
						width: 288rpx;
						height: 396rpx;
						overflow-wrap: break-word;
						color: rgba(51, 51, 51, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: right;
						line-height: 78rpx;
					}
					.text_13 {
            display: block;
						width: 288rpx;
						height: 396rpx;
						overflow-wrap: break-word;
						color: rgba(80, 186, 174, 1);
						font-size: 28rpx;
						font-weight: normal;
						text-align: right;
						line-height: 78rpx;
					}
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
