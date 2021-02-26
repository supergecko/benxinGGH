<template>
	<view>
		<view class="html2canvas" :prop="domId" :change:prop="html2canvas.create">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'html2canvas',
		props: {
			domId: {
				type: String,
				required: true
			}
		},
		methods: {
			async renderFinish(base64) {
				try {
					this.$emit('renderFinish', base64);
				} catch (e) {
					//TODO handle the exception
					console.log('html2canvas error', e)
				}
			},
			showLoading() {
				uni.showToast({
					title: "正在生成数据 请稍后",
					icon: "none",
					mask: true,
					duration: 100000
				})
			},
			hideLoading() {
				uni.hideToast();
			}
		}
	}
</script>



<script module="html2canvas" lang="renderjs">
	import html2canvas from 'html2canvas'
	import jspdf from 'jspdf'
	export default {
		methods: {
			async create(domId) {
				try {
					this.$ownerInstance.callMethod('showLoading', true);
					const timeout = setTimeout(async () => {
						const shareContent = document.querySelector(domId);
						const canvas = await html2canvas(shareContent, {
							width: shareContent.offsetWidth, //设置canvas尺寸与所截图尺寸相同，防止白边
							height: shareContent.offsetHeight, //防止白边
							logging: true,
							useCORS: true
						});
						// var contentWidth = canvas.width;
						// var contentHeight = canvas.height;
						// //一页pdf显示html页面生成的canvas高度;
						// var pageHeight = contentWidth / 595.28 * 841.89;
						// //未生成pdf的html页面高度
						// var leftHeight = contentHeight;
						// //pdf页面偏移
						// var position = 0;
						// //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
						// var imgWidth = 555.28;
						// var imgHeight = 555.28 / contentWidth * contentHeight;
						const base64 = canvas.toDataURL('image/jpeg', 0.7);
						// var pdf = new jspdf('', 'pt', 'a4');
						// //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
						// //当内容未超过pdf一页显示的范围，无需分页
						// if (leftHeight < pageHeight) {
						// 	pdf.addImage(base64, 'JPEG', 20, 0, imgWidth, imgHeight);
						// } else {
						// 	while (leftHeight > 0) {
						// 		pdf.addImage(base64, 'JPEG', 20, position, imgWidth, imgHeight)
						// 		leftHeight -= pageHeight;
						// 		position -= 841.89;
						// 		//避免添加空白页
						// 		if (leftHeight > 0) {
						// 			pdf.addPage();
						// 		}
						// 	}
						// }
						// pdf.save('test.pdf');
						this.$ownerInstance.callMethod('renderFinish', base64);
						this.$ownerInstance.callMethod('hideLoading', true);
						clearTimeout(timeout);
					}, 500);
				} catch (error) {
					console.log(error)
				}
			}
		}
	}
</script>


<style lang="scss">

</style>
