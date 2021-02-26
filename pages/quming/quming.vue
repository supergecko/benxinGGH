<template>
	<view>
		<html2canvas ref="html2canvas" :domId="domId" @renderFinish="renderFinish">
			<view id="poster">
				<view class="testTitle">737</view>
				<view>
					<text class = "testClass" v-for="(item,i) in test1" :key="i">{{item}}</text>
				</view>
				
				<view class="testTitle">758</view>
				<view>
					<text class = "testClass" v-for="(item,i) in test2" :key="i">{{item}}</text>
				</view>
				
				<view class="testTitle">789</view>
				<view>
					<text class = "testClass" v-for="(item,i) in test3" :key="i">{{item}}</text>
				</view>
				
				<view class="testTitle">377</view>
				<view>
					<text class = "testClass" v-for="(item,i) in test4" :key="i">{{item}}</text>
				</view>
				
				<view class="testTitle">398</view>
				<view>
					<text class = "testClass" v-for="(item,i) in test5" :key="i">{{item}}</text>
				</view>
			</view>
		</html2canvas>
	</view>
</template>

<script>
	import html2canvas from '../../components/jcboy-html2canvas/html2canvas.vue'
	export default {
		components: {
			html2canvas
		},
		data() {
			return {
				sixArr:['回','那','米','关','百','兴','观','羽','名','优','宇','贞','乔','安','亚'],
				sevenArr:['步','丽','花','杏','远','希','牡','言','芬','芳','辛'],
				threeArr:['久','山','千','凡'],
				fiveArr:['加','可','禾','立','本','兰','宁','未','丘','弘'],
				eightArr:['金','空','茉','牧','枝','官','枫','宜','幸','松','欣'],
				nineArr:['美','南','语','秋','闻','宣','虹','茴','宫','荣'],
				test1:[],
				test2:[],
				test3:[],
				test4:[],
				test5:[],
				domId: ''
			}
		},
		mounted() {
			this.domId = '#poster'
		},
		onLoad: function(option) {
			this.test1 = this.quming(this.sevenArr,this.threeArr,this.sevenArr) //737
			this.test2 = this.quming(this.sevenArr,this.fiveArr,this.eightArr) //758
			this.test3 = this.quming(this.sevenArr,this.eightArr,this.nineArr) //789
			this.test4 = this.quming(this.threeArr,this.sevenArr,this.sevenArr) //377
			this.test5 = this.quming(this.threeArr,this.nineArr,this.eightArr) //398
		},
		//操作方法（参考vue文档）
		methods: {
			quming(A,B,C){
				var nameArr = []
				for(let j = 0,len=A.length; j < len; j++) {
					for( let i= 0,len=B.length;  i< len; i++) {
						for( let k= 0,len=C.length;  k< len; k++) {
							var name = A[j]+B[i]+C[k]
							nameArr.push(name)
						}
					}
				}
				return nameArr
			},
			/**
			 * 渲染完毕接收图片
			 * @param {String} filePath
			 */
			renderFinish(filePath) {
				this.filePath = filePath;
				// console.log("filePath", filePath)
				console.log(1111111111)
			},
		}
	}
</script>

<style>
	.testClass{
		font-size: 40upx;margin-right: 26upx
	}
	.testTitle{
		font-size: 60upx;
		font-weight: bold;
		color: red;
	}
</style>
