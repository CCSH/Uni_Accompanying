<template>
	<view class="page flex-col">
		<view class="box_1 flex-col">
			<view class="section_2 flex-col">
				<view class="text-wrapper_22 flex-row">
					<view class="tab">
						<text :class="index == 0 ? 'text_h text_4' : 'text_4'" @click="index = 0">全部</text>
						<view v-show="index == 0" class="group_1 flex-col"></view>
					</view>
					<view class="tab">
						<text :class="index == 1 ? 'text_h text_5' : 'text_5'" @click="index = 1">可提现</text>
						<view v-show="index == 1" class="group_1 flex-col"></view>
					</view>
					<view class="tab">
						<text :class="index == 2 ? 'text_h text_6' : 'text_6'" @click="index = 2">已提现</text>
						<view v-show="index == 2" class="group_1 flex-col"></view>
					</view>
					<view class="tab">
						<text :class="index == 3 ? 'text_h text_7' : 'text_7'" @click="index = 3">已完成</text>
						<view v-show="index == 3" class="group_1 flex-col"></view>
					</view>
				</view>
			</view>
			<!-- 内容 -->
			<view class="content">
				<view class="box_3 flex-col">
					<view class="group_8 flex-row justify-between">
						<view class="image-text_4 flex-row justify-between">
							<view class="section_1 flex-col"></view>
							<text class="text-group_1">代取报告</text>
						</view>
						<text class="text_8">酬劳￥120.00</text>
					</view>
					<view class="group_6 flex-row">
						<view class="block_2 flex-col"></view>
						<text class="paragraph_1">
							四川省成都市余杭区
							<br />
							力宝广场A座1702
						</text>
						<view class="image-text_5 flex-row justify-between">
							<text class="text-group_2">距离5.5KM</text>
							<image class="thumbnail_6" src="/static/dizhi@2x.png" />
						</view>
					</view>
					<view class="text-wrapper_9 flex-row justify-between" @click="gotoDetail">
						<text class="paragraph_2">
							<text style="display: block">就诊人：</text>

							<br />
							<text style="display: block">联系电话：</text>

							<br />
							<text style="display: block">就诊时间：</text>

							<br />
							<text style="display: block">服务需求：</text>
						</text>
						<text class="paragraph_3">
							<text style="display: block">张远山</text>

							<br />
							<text style="display: block">193****0290</text>

							<br />
							<text style="display: block">2024-04-30&nbsp;10:00</text>

							<br />
							<text style="display: block">暂无</text>
						</text>
					</view>
					<image class="image_3" referrerpolicy="no-referrer" src="" />
					<view class="group_9 flex-row">
						<view class="text-wrapper_4 flex-col">
							<text class="text_9" @click="gotoMap">查看地图</text>
						</view>
						<view class="text-wrapper_5 flex-col">
							<text class="text_10" @click="$refs.popup_take.open()">接单</text>
						</view>
						<view class="text-wrapper_6 flex-col" @click="$refs.popup_cancel.open()">
							<text class="text_11">转单</text>
						</view>
					</view>
				</view>
				<view class="box_3 flex-col">
					<view class="group_8 flex-row justify-between">
						<view class="image-text_4 flex-row justify-between">
							<view class="section_1 flex-col"></view>
							<text class="text-group_1">代取报告</text>
						</view>
						<text class="text_8">酬劳￥120.00</text>
					</view>
					<view class="group_6 flex-row">
						<view class="block_2 flex-col"></view>
						<text class="paragraph_1">
							四川省成都市余杭区
							<br />
							力宝广场A座1702
						</text>
						<view class="image-text_5 flex-row justify-between">
							<text class="text-group_2">距离5.5KM</text>
							<image class="thumbnail_6" src="/static/dizhi@2x.png" />
						</view>
					</view>
					<view class="text-wrapper_9 flex-row justify-between" @click="gotoDetail">
						<text class="paragraph_2">
							<text style="display: block">就诊人：</text>

							<br />
							<text style="display: block">联系电话：</text>

							<br />
							<text style="display: block">就诊时间：</text>

							<br />
							<text style="display: block">服务需求：</text>
						</text>
						<text class="paragraph_3">
							<text style="display: block">张远山</text>

							<br />
							<text style="display: block">193****0290</text>

							<br />
							<text style="display: block">2024-04-30&nbsp;10:00</text>

							<br />
							<text style="display: block">暂无</text>
						</text>
					</view>
					<image class="image_3" referrerpolicy="no-referrer" src="" />
					<view class="group_9 flex-row">
						<view class="text-wrapper_4 flex-col">
							<text class="text_9" @click="gotoMap">查看地图</text>
						</view>
						<view class="text-wrapper_5 flex-col">
							<text class="text_10" @click="gotoMap">出发</text>
						</view>
						<!-- <view class="text-wrapper_6 flex-col" @click="$refs.popup_cancel.open()">
							<text class="text_11">转单</text>
						</view> -->
					</view>
				</view>
				<view class="box_3 flex-col">
					<view class="group_8 flex-row justify-between">
						<view class="image-text_4 flex-row justify-between">
							<view class="section_1 flex-col"></view>
							<text class="text-group_1">代取报告</text>
						</view>
						<text class="text_8">酬劳￥120.00</text>
					</view>
					<view class="group_6 flex-row">
						<view class="block_2 flex-col"></view>
						<text class="paragraph_1">
							四川省成都市余杭区
							<br />
							力宝广场A座1702
						</text>
						<view class="image-text_5 flex-row justify-between">
							<text class="text-group_2">距离5.5KM</text>
							<image class="thumbnail_6" src="/static/dizhi@2x.png" />
						</view>
					</view>
					<view class="text-wrapper_9 flex-row justify-between" @click="gotoDetail">
						<text class="paragraph_2">
							<text style="display: block">就诊人：</text>

							<br />
							<text style="display: block">联系电话：</text>

							<br />
							<text style="display: block">就诊时间：</text>

							<br />
							<text style="display: block">服务需求：</text>
						</text>
						<text class="paragraph_3">
							<text style="display: block">张远山</text>

							<br />
							<text style="display: block">193****0290</text>

							<br />
							<text style="display: block">2024-04-30&nbsp;10:00</text>

							<br />
							<text style="display: block">暂无</text>
						</text>
					</view>
					<image class="image_3" referrerpolicy="no-referrer" src="" />
					<view class="group_9 flex-row">
						<view class="text-wrapper_4 flex-col">
							<text class="text_9" @click="gotoMap">查看地图</text>
						</view>
						<view class="text-wrapper_5 flex-col">
							<text class="text_10">提交工作</text>
						</view>
						<!-- <view class="text-wrapper_6 flex-col" @click="$refs.popup_cancel.open()">
							<text class="text_11">转单</text>
						</view> -->
					</view>
				</view>
				<view class="box_3 flex-col" >
					<view class="group_8 flex-row justify-between">
						<view class="image-text_4 flex-row justify-between">
							<view class="section_1 flex-col"></view>
							<text class="text-group_1">代取报告</text>
						</view>
						<text class="text_8">酬劳￥120.00</text>
					</view>
					<view class="group_6 flex-row">
						<view class="block_2 flex-col"></view>
						<text class="paragraph_1">
							四川省成都市余杭区
							<br />
							力宝广场A座1702
						</text>
						<view class="image-text_5 flex-row justify-between">
							<text class="text-group_2">距离5.5KM</text>
							<image class="thumbnail_6" src="/static/dizhi@2x.png" />
						</view>
					</view>
					<view class="text-wrapper_9 flex-row justify-between" @click="gotoDetail">
						<text class="paragraph_2">
							<text style="display: block">就诊人：</text>

							<br />
							<text style="display: block">联系电话：</text>

							<br />
							<text style="display: block">就诊时间：</text>

							<br />
							<text style="display: block">服务需求：</text>
						</text>
						<text class="paragraph_3">
							<text style="display: block">张远山</text>

							<br />
							<text style="display: block">193****0290</text>

							<br />
							<text style="display: block">2024-04-30&nbsp;10:00</text>

							<br />
							<text style="display: block">暂无</text>
						</text>
					</view>
					<image class="image_3" referrerpolicy="no-referrer" src="" />
					<view class="group_9 flex-row justify-between">
						<view class="flex-col money">
							<text class="">佣金：￥35.00</text>
						</view>
						<view class="text-wrapper_5 flex-col" @click="gotoWithdrawal">
							<text class="text_10">提现</text>
						</view>
						<!-- <view class="text-wrapper_6 flex-col" @click="$refs.popup_cancel.open()">
							<text class="text_11">转单</text>
						</view> -->
					</view>
				</view>
				<view class="box_3 flex-col">
					<view class="group_8 flex-row justify-between">
						<view class="image-text_4 flex-row justify-between">
							<view class="section_1 flex-col"></view>
							<text class="text-group_1">代取报告</text>
						</view>
						<text class="text_8">酬劳￥120.00</text>
					</view>
					<view class="group_6 flex-row">
						<view class="block_2 flex-col"></view>
						<text class="paragraph_1">
							四川省成都市余杭区
							<br />
							力宝广场A座1702
						</text>
						<view class="image-text_5 flex-row justify-between">
							<text class="text-group_2">距离5.5KM</text>
							<image class="thumbnail_6" src="/static/dizhi@2x.png" />
						</view>
					</view>
					<view class="text-wrapper_9 flex-row justify-between" @click="gotoDetail">
						<text class="paragraph_2">
							<text style="display: block">就诊人：</text>

							<br />
							<text style="display: block">联系电话：</text>

							<br />
							<text style="display: block">就诊时间：</text>

							<br />
							<text style="display: block">服务需求：</text>
						</text>
						<text class="paragraph_3">
							<text style="display: block">张远山</text>

							<br />
							<text style="display: block">193****0290</text>

							<br />
							<text style="display: block">2024-04-30&nbsp;10:00</text>

							<br />
							<text style="display: block">暂无</text>
						</text>
					</view>
					<image class="image_3" referrerpolicy="no-referrer" src="" />
					<view class="group_9 flex-row justify-between">
						<view class="flex-col money">
							<text class="">佣金：￥35.00</text>
						</view>
						<view class="flex-col withdraw">
							<text class="text_10">已提现</text>
						</view>
						<!-- <view class="text-wrapper_6 flex-col" @click="$refs.popup_cancel.open()">
							<text class="text_11">转单</text>
						</view> -->
					</view>
				</view>
					<view class="box_3 flex-col">
					<view class="group_8 flex-row justify-between">
						<view class="image-text_4 flex-row justify-between">
							<view class="section_1 flex-col"></view>
							<text class="text-group_1">代取报告</text>
						</view>
						<text class="text_8">酬劳￥120.00</text>
					</view>
					<view class="group_6 flex-row">
						<view class="block_2 flex-col"></view>
						<text class="paragraph_1">
							四川省成都市余杭区
							<br />
							力宝广场A座1702
						</text>
						<view class="image-text_5 flex-row justify-between">
							<text class="text-group_2">距离5.5KM</text>
							<image class="thumbnail_6" src="/static/dizhi@2x.png" />
						</view>
					</view>
					<view class="text-wrapper_9 flex-row justify-between" @click="gotoDetail">
						<text class="paragraph_2">
							<text style="display: block">就诊人：</text>

							<br />
							<text style="display: block">联系电话：</text>

							<br />
							<text style="display: block">就诊时间：</text>

							<br />
							<text style="display: block">服务需求：</text>
						</text>
						<text class="paragraph_3">
							<text style="display: block">张远山</text>

							<br />
							<text style="display: block">193****0290</text>

							<br />
							<text style="display: block">2024-04-30&nbsp;10:00</text>

							<br />
							<text style="display: block">暂无</text>
						</text>
					</view>
					<image class="image_3" referrerpolicy="no-referrer" src="" />
					<view class="group_9 flex-row justify-between">
						<view class="text-wrapper_4 flex-col">
							<text class="text_9" @click="gotoMap">查看地图</text>
						</view>
						<!-- <view class="text-wrapper_5 flex-col">
							<text class="text_10" @click="$refs.popup_take.open()">接单</text>
						</view> -->
						<view class="text-wrapper_6 flex-col" @click="gotoComment">
							<text class="text_11">查看评价</text>
						</view>
					</view>
				</view>
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
			index: 0,
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
		handlePlay() {
			uni.showToast({
				title: '支付成功',
				icon: 'success',
				mask: true,
				duration: 1000,
			})
		},
		handleCancel() {
			this.$refs.popup_cancel.open()
		},
		gotoDetail() {
			uni.navigateTo({ url: '/pagesA/pages/order_detail/order_detail' })
		},
		gotoWithdrawal() {
			uni.navigateTo({ url: '/pagesA/pages/commission_withdrawal/commission_withdrawal' })
		},
		gotoComment(){
			uni.navigateTo({ url: '/pagesA/pages/comment_list/comment_list' })
		}
	},
	onShow() {
		if (!this.isLogin()) {
			return
		}
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
		.section_2 {
			background-color: rgba(246, 246, 246, 1);
			align-self: center;
			margin-top: 28rpx;
			width: 710rpx;
			padding: 10rpx 32rpx 14rpx 40rpx;
			.text-wrapper_22 {
				justify-content: space-between;
				.text_h {
					color: rgba(80, 186, 174, 1) !important;
					font-weight: 600 !important;
					font-size: 34rpx !important;
				}
				.text_4 {
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: right;
					white-space: nowrap;
					line-height: 40rpx;
					margin: 4rpx 0 0 0;
				}
				.text_5 {
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: right;
					white-space: nowrap;
					line-height: 40rpx;
					margin: 4rpx 0 0 0;
				}
				.text_6 {
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: right;
					white-space: nowrap;
					line-height: 40rpx;
					margin: 4rpx 0 0 0;
				}
				.text_7 {
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: right;
					white-space: nowrap;
					line-height: 40rpx;
					margin: 4rpx 0 0 0;
				}
			}
			.tab {
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			.group_1 {
				margin-top: 22rpx;
				background-color: rgba(80, 186, 174, 1);
				border-radius: 2px;
				width: 24rpx;
				height: 6rpx;
			}

			// 内容
		}
	}
}

.content {
	padding-left: 22rpx;
	.box_3 {
		background-color: rgba(255, 255, 255, 1);
		border-radius: 6px;
		width: 706rpx;
		align-self: center;
		margin-top: 6rpx;
		padding: 30rpx 22rpx 24rpx 0;
		margin-bottom: 20rpx;
		.group_8 {
			width: 680rpx;
			margin-right: 4rpx;
			.image-text_4 {
				width: 166rpx;
				.section_1 {
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
			.text_8 {
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
		.group_6 {
			background-color: rgba(246, 246, 246, 1);
			border-radius: 6px;
			margin: 30rpx 0 0 22rpx;
			padding: 20rpx 20rpx 20rpx 24rpx;
			.block_2 {
				background-color: rgba(80, 186, 174, 1);
				border-radius: 50%;
				width: 8rpx;
				height: 8rpx;
				margin: 36rpx 0 36rpx 0;
			}
			.paragraph_1 {
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
			.image-text_5 {
				width: 174rpx;
				margin: 20rpx 0 20rpx 160rpx;
				.text-group_2 {
					overflow-wrap: break-word;
					color: rgba(80, 186, 174, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 40rpx;
				}
				.thumbnail_6 {
					width: 24rpx;
					height: 30rpx;
					margin: 6rpx 0 4rpx 0;
				}
			}
		}
		.text-wrapper_9 {
			width: 402rpx;
			margin: 10rpx 260rpx 0 22rpx;
			.paragraph_2 {
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
			.paragraph_3 {
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
		.group_9 {
			margin: 24rpx 0 0 22rpx;
			.text-wrapper_4 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 19px;
				border: 1px solid rgba(153, 153, 153, 1);
				padding: 16rpx 40rpx 16rpx 40rpx;
				.text_9 {
					overflow-wrap: break-word;
					color: rgba(102, 102, 102, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: left;
					white-space: nowrap;
					line-height: 40rpx;
				}
			}
			.money {
				// width: 188rpx;
				height: 40rpx;
				font-family: PingFangSC, PingFang SC;
				font-weight: 400;
				font-size: 28rpx;
				color: #333333;
				line-height: 40rpx;
				text-align: left;
				font-style: normal;
				margin-top: 20rpx;
			}
			.text-wrapper_5 {
				background-color: rgba(80, 186, 174, 1);
				border-radius: 19px;
				margin-left: 38rpx;
				width: 196rpx;
				padding: 18rpx 0 18rpx 0;
				.text_10 {
					overflow-wrap: break-word;
					color: rgba(255, 255, 255, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: center;
					white-space: nowrap;
					line-height: 40rpx;
				}
			}
			.withdraw {
				// background-color: rgba(80, 186, 174, 1);
				border-radius: 19px;
				border: 2rpx solid #d6d6d6;
				margin-left: 38rpx;
				width: 196rpx;
				padding: 18rpx 0 18rpx 0;
				.text_10 {
					overflow-wrap: break-word;
					color: #d6d6d6;
					font-size: 28rpx;
					font-weight: normal;
					text-align: center;
					white-space: nowrap;
					line-height: 40rpx;
				}
			}
			.text-wrapper_6 {
				background-color: rgba(255, 255, 255, 1);
				border-radius: 19px;
				border: 1px solid rgba(80, 186, 174, 1);
				margin-left: 36rpx;
				padding: 16rpx 0 16rpx 0;
				width: 196rpx;
				.text_11 {
					overflow-wrap: break-word;
					color: rgba(80, 186, 174, 1);
					font-size: 28rpx;
					font-weight: normal;
					text-align: center;
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
