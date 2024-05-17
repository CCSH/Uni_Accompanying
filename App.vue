<script>
// import dragButton from '@/components/drag-button/drag-button.vue'

export default {
	// components: {
	// 	dragButton,
	// },
	globalData: {
		clickInterval: 2000, //防重复点击间隔
		toastDuration: 2000, //toast时间
		requestInterval: 1000, //请求间隔
	},
	onLaunch: function () {},
	onShow: function () {},
	onHide: function () {},
}
</script>

<style lang="scss">
/*每个页面公共css */
@import 'static/css/global.scss';
@import 'static/css/common.scss';
</style>
