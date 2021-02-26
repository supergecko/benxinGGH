<template>
	<view class="sharebtn">
		<view class="uni-share">
			<view class="uni-share-content">
				<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box" @click='btnShare(index)'>
					<view class="uni-share-content-image">
						<image :src="item.icon" class="content-image" />
					</view>
					<text class="uni-share-content-text">{{ item.text }}</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	let wx= require('jweixin-module');
	export default {
		data() {
			return {
				bottomData: [{
						text: '微信',
						icon: '/static/index/weixin.png',
						name: 'wx'
					},
					{
						text: '朋友圈',
						icon: '/static/index/pengyouquan.png',
						name: 'copy'
					}
				],
				sharedataTemp: {
					type: 0,
					strShareUrl: "https://uniapp.dcloud.io",
					strShareTitle: "分享标题",
					strShareSummary: "分享描述",
					strShareImageUrl: "/static/sharemenu/copyurl.png"
				}
			}
		},
		// props: ["sharedataTemp"],
		// onLoad() {
		// 	console.log('sharedataTemp',this.sharedataTemp);
		// },
		methods: {
			btnShare(ind) {
				console.log(ind);
				var strProvider = "",
					strScene = "",
					mytype = '';
				switch (ind) {
					case 0:
						strProvider = "weixin"
						strScene = "WXSceneSession"
						mytype = 0
						break;
					case 1:
						strProvider = "weixinpengyou"
						strScene = "WXSenceTimeline"
						mytype = 0
						break;
				}
				if (strProvider == "weixin") { //微信分享
					wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
					  wx.updateAppMessageShareData({ 
					    title: this.sharedataTemp.strShareTitle, // 分享标题
					    desc: this.sharedataTemp.strShareSummary, // 分享描述
					    link: this.sharedataTemp.strShareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					    imgUrl: this.sharedataTemp.strShareImageUrl, // 分享图标
					    success: function () {
					      // 设置成功
						  console.log('成功了')
					    },
						err:function(err){
							console.log(err)
						}
					  })
					}); 
				}
				if (strProvider == "weixinpengyou") { //微信朋友圈分享
					wx.ready(function () {      //需在用户可能点击分享按钮前就先调用
					  wx.updateTimelineShareData({ 
					    title: this.sharedataTemp.strShareTitle, // 分享标题
					    link: this.sharedataTemp.strShareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					    imgUrl: this.sharedataTemp.strShareImageUrl, // 分享图标
					    success: function () {
					      // 设置成功
					    }
					  })
					}); 
				}
			}
		}
	}
</script>

<style lang="scss">
	/* 底部分享 */
	.sharebtn {
		.uni-share {
			width: 690rpx;
			// margin: 30rpx;
			border-radius: 30rpx;
			/* #ifndef APP-NVUE */
			display: flex;
			flex-direction: column;
			/* #endif */
			background-color: #fff;
			.uni-share-content {
				/* #ifndef APP-NVUE */
				display: flex;
				/* #endif */
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: center;
				overflow-x: scroll;
				justify-content: space-around;
				// padding: 15px 50rpx;
				.uni-share-content-box {
					/* #ifndef APP-NVUE */
					display: flex;
					/* #endif */
					flex-direction: column;
					align-items: center;
					// width: 25%;
					// justify-content: space-between;
					margin-right: 60rpx;
					&:nth-last-child(1) {
						margin-right: 0;
					}
					.uni-share-content-image {
						/* #ifndef APP-NVUE */
						display: flex;
						/* #endif */
						flex-direction: row;
						justify-content: center;
						align-items: center;
						width: 90rpx;
						height: 90rpx;
						overflow: hidden;
						border-radius: 10rpx;
						.content-image {
							width: 90rpx;
							height: 90rpx;
						}
					}
					&:nth-last-child(1){
						// .uni-share-content-image .content-image {
						// 	width: 50rpx!important;
						// 	height: 50rpx!important;
						// }
					}
					.uni-share-content-text {
						font-size: 26rpx;
						color: #333;
						padding-top: 5px;
						padding-bottom: 10px;
					}
				}
			}
		}
	}
</style>
