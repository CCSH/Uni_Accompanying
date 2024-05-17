<template>
	<view class="page flex-col">
		<view class="block_1 flex-col">
			<view class="block_3 flex-col">
				<view class="image-text_1 flex-row justify-between">
					<image class="thumbnail_4" referrerpolicy="no-referrer" src="/static/pingjia@2x.png" />
					<text class="text-group_1">请留言，我们会尽快回复！</text>
				</view>
				<view class="group_1 flex-row justify-between">
					<text class="paragraph_1">
						姓名：
						<br />
						电话：
					</text>
					<view class="paragraph_2 justify-between flex-col">
						<input type="text" placeholder="请输入" />
						<input type="text" placeholder="请输入" />
					</view>
					<image class="image_3" referrerpolicy="no-referrer" src="" />
				</view>
				<view class="justify-between flex-col" style="height: 100%">
					<view class="text-wrapper_2 flex-col">
						<textarea class="text_4" placeholder="留言内容…"></textarea>
					</view>
					<view class="text-wrapper_3 flex-col" @click="handleSubmit">
						<text class="text_5">提交</text>
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
			constants: {},
		}
	},
	methods: {
		handleSubmit() {
			uni.showToast({
				title: '留言成功！',
				icon: 'none',
				duration: 1000,
			})
			setTimeout(() => {
				uni.navigateBack()
			}, 1000)
		},
	},
}
</script>
<style scoped lang="scss">
.page {
	position: relative;
	width: 750rpx;
	overflow: hidden;
	.block_1 {
		background-color: rgba(246, 246, 246, 1);
		// height: 1624rpx;
		.block_2 {
			background-color: rgba(81, 187, 164, 1);
			padding: 32rpx 10rpx 20rpx 40rpx;
			.section_1 {
				margin: 0 18rpx 0 2rpx;
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
						color: rgba(255, 255, 255, 1);
						font-size: 28rpx;
						font-family: Helvetica, 'Microsoft YaHei', Arial, sans-serif;
						font-weight: normal;
						text-align: left;
						white-space: nowrap;
						line-height: 34rpx;
					}
					.text_2 {
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
			.section_2 {
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
					margin-left: 278rpx;
				}
				.image_2 {
					width: 160rpx;
					height: 60rpx;
					margin-left: 170rpx;
				}
			}
		}
		.block_3 {
			position: relative;
			padding: 18rpx 20rpx 20rpx 20rpx;
			.image-text_1 {
				width: 322rpx;
				align-self: center;
				.thumbnail_4 {
					width: 24rpx;
					height: 22rpx;
					margin: 6rpx 0 6rpx 0;
				}
				.text-group_1 {
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 24rpx;
					font-weight: normal;
					text-align: right;
					white-space: nowrap;
					line-height: 34rpx;
				}
			}
			.group_1 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 12px;
				position: relative;
				width: 710rpx;
				margin-top: 20rpx;
				padding: 18rpx 28rpx 22rpx 30rpx;
				.paragraph_1 {
					width: 84rpx;
					height: 136rpx;
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					line-height: 68rpx;
				}
				.paragraph_2 {
					padding-top: 15rpx;
					padding-bottom: 15rpx;
					width: 300rpx;
					height: 136rpx;
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: right;
					line-height: 68rpx;
				}
				.image_3 {
					position: absolute;
					left: 28rpx;
					top: 88rpx;
					width: 654rpx;
					height: 2rpx;
					background-color: #e2e2e2;
				}
			}
			.text-wrapper_2 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 12px;
				margin-top: 20rpx;
				padding: 36rpx 36rpx 36rpx 36rpx;
				.text_4 {
					overflow-wrap: break-word;
					color: rgba(51, 51, 51, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 40rpx;
					width: 100%;
				}
			}
			.text-wrapper_3 {
				background-color: rgba(80, 186, 174, 1);
				border-radius: 20px;
				align-self: center;
				margin-top: 200rpx;
				width: 690rpx;
				padding: 20rpx 316rpx 20rpx 318rpx;
				.text_5 {
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
			.image_4 {
				width: 268rpx;
				height: 10rpx;
				align-self: center;
				margin-top: 40rpx;
			}
		}
	}
}
</style>
