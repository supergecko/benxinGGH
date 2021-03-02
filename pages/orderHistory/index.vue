<template>
	<view class="historyBg" :style="{backgroundImage:`url(${historyBg})`}">
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		 @scroll="scroll" style="height: 100%;">
			<view class="new" v-for="(item,i) in 20" :key="i">
				<view class="n-img">
					<image src="../../static/images/audit.png" mode=""></image>
				</view>
				<view class="n-con">
					<text class="n-tit">测试</text><br />
					<text class="n-txt">年月日</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import historyBg from "@/static/images/historyBg.png"
	export default {
		data() {
			return {
				newInfo: [],
				historyBg: historyBg,
			}
		},
		onLoad() {
			// this._Sys_info()
		},
		methods: {
			toPath(Url) {
				uni.navigateTo({
					url: Url
				})
			},
			//系统消息
			_Sys_info() {
				uni.getNetworkType({
					success: (res) => {
						if (res.networkType == 'none') {
							uni.showToast({
								icon: 'none',
								title: '当前网络不可用'
							})
						}
					}
				})
				uni.showLoading({
					title: '加载中'
				})
				const mobile = uni.getStorageSync('user_mobile')
				const timestamp = Date.parse(new Date()) / 1000
				const sign = this.$md5(`${mobile}**${timestamp}**cglhhaofengshui`)
				let params = {
					timestamp,
					sign
				}
				this.$ajax.post({
					url: this.$service.api_lists.Sys_info,
					data: params
				}).then((res) => {
					if (res.data.code == 1) {
						// 初始化信息
						this.newInfo = res.data.data
					}
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
					uni.showToast({
						title: err,
						duration: 2000
					})
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	// page {background-color: #F8F8F8;}
	.historyBg {
		background-size: cover;
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		padding-top: 20upx;
	}

	.text {
		background-color: #FFFFFF;
		width: 100%;
	}

	.line {
		// width: 100%;
		height: 1upx;
		background-color: #E6E8ED;
	}

	.content {
		box-sizing: border-box;
		// width: 100%;
		padding: 28upx 0 0 30upx;
		background-color: #fff;
	}

	.new {
		display: flex;
		// flex-direction: row;
		// flex-wrap: nowrap;
		// justify-content: space-between;
		margin-bottom: 20upx;
		border-bottom: 2upx solid #E6E8ED;
	}

	.n-img {
		width: 120upx;
		margin-right: 30upx;

		image {
			width: 120upx;
			height: 120upx;
		}
	}

	.n-con {
		padding: 0 30upx 35upx 0;

		.n-tit {
			font-size: 34upx;
			color: #151414;
		}

		.n-txt {
			font-size: 26upx;
			color: #888;
		}
	}

	.n-con.no {
		border: none;
	}
</style>
