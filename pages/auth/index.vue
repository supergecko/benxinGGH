<template>
	<view class="container">
		<view class="intro"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onShow () {
			let url = window.location.href
			url = url.replace('?from=timeline', '')
			url = url.replace('?from=groupmessage', '')
			url = url.replace('?from=singlemessage', '')
			url = url.replace('&isappinstalled=0', '')
			url = url.replace('#', '$')
			url = url.replace('pages/auth/index', uni.getStorageSync("nowUrl").replace('/', ''))
			window.location.href = 'https://api.benxinzixun.com/api/app/wechat/getUserInfo?url=' + url
		},
		methods: {
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>
