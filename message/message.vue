<template>
	<view>
		<html2canvas ref="html2canvas" :domId="domId" @renderFinish="renderFinish">
			<view style="width: 100%;height: 100%;display: flex;flex-direction: column;justify-content: space-between;align-items: center"
			 id="poster">
				<!-- 头部背景 -->

				<view class="headWarp">
					<view class="headItem">
						<!-- 头部名字 -->
						<view class="fullName">
							<view class="NameWarp" style="padding-top: 40upx;">
								<view style="font-size: 36upx;">姓名：{{userName}}{{gender == '男' ? '先生' :'女士'}} ({{gender}}命)</view>
								<view>公历：{{CC}}{{DD}} 年 {{BB}} 月 {{AA}} 日 </view>
								<!-- <view>农历：一九七九年二月廿五日子时</view> -->
							</view>
						</view>
						<!-- 头部名字 -->
						<!-- 表格测算 -->
						<view class="logicWarp">
							<view class="classU bigText">{{U}}</view> <!-- U -->
							<view class="classAA midText">{{AA}}</view> <!-- AA -->
							<view class="classBB midText">{{BB}}</view> <!-- BB -->
							<view class="classCC midText">{{CC}}</view> <!-- CC -->
							<view class="classDD midText">{{DD}}</view> <!-- DD -->
							<view class="classE smallText">{{E}}</view> <!-- E -->
							<view class="classF smallText">{{F}}</view> <!-- F -->
							<view class="classG smallText">{{G}}</view> <!-- G -->
							<view class="classH smallText">{{H}}</view> <!-- H -->
							<view class="classI smallText">{{I}}</view> <!-- I -->
							<view class="classJ smallText">{{J}}</view> <!-- J -->
							<view class="classV bigText">{{V}}</view> <!-- V -->
							<view class="classK bigText">{{K}}</view> <!-- K -->
							<view class="classW bigText">{{W}}</view> <!-- W -->
							<view class="classL smallText">{{L}}</view> <!-- L -->
							<view class="classM smallText">{{M}}</view> <!-- M -->
							<view class="classQ midText">{{Q}}</view> <!-- Q -->
							<view class="classP midText">{{P}}</view> <!-- P -->
							<view class="classO midText">{{O}}</view> <!-- O -->
							<view class="classR midText">{{R}}</view> <!-- R -->
							<view class="classS midText">{{S}}</view> <!-- S -->
							<view class="classT midText">{{T}}</view> <!-- T -->
							<view class="classN bigText">{{N}}</view> <!-- N -->
						</view>
						<!-- 表格测算 -->
					</view>

					<!-- 五行健康 -->
					<view class="fiveElementsWarp">
						<view class="fiveText">五行健康</view>
						<table style="width: 606upx;height: 152upx;text-align: center;border-collapse:collapse;margin: 0 auto;">
							<tr>
								<td>自身五行</td>
								<td>财富子女</td>
								<td>事业伴侣</td>
								<td>官鬼疾病</td>
								<td>贵人父母</td>
							</tr>
							<tr>
								<td>{{zswx}}</td>
								<td>{{cfzn}}</td>
								<td>{{sybl}}</td>
								<td>{{ggjb}}</td>
								<td>{{grfm}}</td>
							</tr>
							<tr>
								<td>{{zswxNumber}}</td>
								<td>{{cfznNumber}}</td>
								<td>{{syblNumber}}</td>
								<td>{{ggjbNumber}}</td>
								<td>{{grfmNumber}}</td>
							</tr>
							<tr>
								<td>{{zswxNumber == 4 ? '平衡' : zswxNumber > 4 ? '过旺' : zswxNumber < 4 ? '弱' :'极端不平衡'}}</td>
								<td>{{cfznNumber == 3 ? '平衡' : cfznNumber > 3 ? '过旺' : cfznNumber < 3 ? '弱' :'极端不平衡'}}</td>
								<td>{{syblNumber == 3 ? '平衡' : syblNumber > 3 ? '过旺' : syblNumber < 3 ? '弱' :'极端不平衡'}}</td>
								<td>{{ggjbNumber == 3 ? '平衡' : ggjbNumber > 3 ? '过旺' : ggjbNumber < 3 ? '弱' :'极端不平衡'}}</td>
								<td>{{grfmNumber == 3 ? '平衡' : grfmNumber > 3 ? '过旺' : grfmNumber < 3 ? '弱' :'极端不平衡'}}</td>
							</tr>
						</table>
					</view>
					<!-- 五行健康 -->
				</view>
				<!-- 头部背景 -->

				<!-- 中间背景 -->
				<view class="bgAll">
					<!-- 最长的加*号的 12个-->
					<view class="resultItemOneWarp" v-for="(item,i) in longContentArr" :key="i">
						<view class="resultItemOneTitle" :style="{'width':(item.title.length>6?'500upx':'340upx')}" v-if="item.title">
							{{item.title}}
						</view>
						<view class="resultItemOneContent">
							<view style="margin-top: 27upx;">
								<view class="resultItemOneText1">
									<rich-text :nodes="item.judgment.replace(/\n/g, '<br/>')" v-if="item.judgment"></rich-text>
								</view>
							</view>
							<view class="resultItemOneText2">
								{{item.description}}
							</view>
						</view>
					</view>

					<!-- 最短的3个 -->
					<view class="resultItemOneWarp" v-for="(item,i) in smallContentArr" :key="i">
						<view class="resultItemOneTitle" :style="{'width':(item.title.length>6?'500upx':'340upx')}" v-if="item.title">
							{{item.title}}
						</view>

						<view class="resultItemTwoContent">
							<view class="resultItemTwoText" style="text-indent: 2em;">
								{{item.description}}
							</view>
						</view>
					</view>

					<!-- 长的不加*号的 -->
					<view class="resultItemOneWarp" v-for="(item,i) in midContentArr" :key="i">
						<view class="resultItemOneTitle" :style="{'width':(item.title.length>6?'500upx':'340upx')}" v-if="item.title">
							{{item.title}}
						</view>
						<view class="newMidBg">
							<view class="resultItemTwoText" style="text-indent: 2em;">
								{{item.description}}
							</view>
						</view>
					</view>

					<!-- 适合对象 -->
					<view class="resultItemOneWarp">
						<view class="resultItemOneTitle" style="width: 340upx;">
							适合对象
						</view>

						<view class="resultItemTwoContent newBgItemBgClass" >
							<view class="resultItemTwoText" style="text-indent: 0;">
								<rich-text :nodes="shdxArr.description.replace(/\n/g, '<br/>')" v-if="shdxArr.description"></rich-text>
							</view>
						</view>
					</view>

					<!-- 五行健康 -->
					<view class="resultItemOneWarp">
						<view class="resultItemOneTitle" style="width: 340upx;">
							五行健康
						</view>
						<view v-if="wxjkArr.length==0" class="resultItemTwoContent">
							<view class="resultItemTwoText" style="text-indent: 2em;">
								一切正常 五行齐全
							</view>
						</view>
						<view class="resultItemTwoContent newBgItemBgClass" v-else>
							<view class="resultItemTwoText" style="text-indent: 0;">
								<view v-for="(item,i) in wxjkArr" :key="i">
									<view style="font-weight: bold;margin-bottom: 30upx;">{{item.code}}</view>
									<view style="margin-bottom: 30upx;">
										<rich-text :nodes="item.description.replace(/\n/g, '<br/>')" v-if="item.description"></rich-text>
									</view>
								</view>
							</view>
						</view>
					</view>

					<!-- 流年 -->
					<view class="resultItemOneWarp" style="margin-bottom: 20upx;">
						<view class="resultItemOneTitle" style="width: 340upx;">
							流年
						</view>
						<view class="resultItemOneContent">
							<view class="lnTitleWarp">
								<view style="margin-right: 10upx;">流年数字密码:</view>
								<view>{{lnArr.code}}</view>
								<image  src="data:image/png;base64,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" style="width: 28upx;height: 28upx;margin-left: 10upx;"></image>
							</view>
							<view style="margin-top: 27upx;">
								<view class="resultItemOneText1">
									<rich-text :nodes="lnArr.judgment.replace(/\n/g, '<br/>')" v-if="lnArr.judgment"></rich-text>
								</view>
							</view>
							<view class="resultItemOneText2">
								{{lnArr.description}}
							</view>
						</view>
					</view>
					<view>
						<view class="bottomBtn" @click="selectDatePicker()">测算流年</view>
						<view class="bottomBtn" @click="handleDownloadQrIMg()">下载图片</view>
						<date-time-picker ref='date-time' :indicatorStyle='indicatorStyle' type='date' @change='dateTimeChange'></date-time-picker>
					</view>
				</view>

			</view>
		</html2canvas>
		<uni-popup ref="lnCode" :custom="true">
			<view class="uni-share">
				<view class="uni-share-content">
					<view class="uni-share-title" style="color: #331C01;">流年分界点：前一年的公历10月1号起到本年公历9月30日止</view>
					<view class="resultItemOneContent">
						<view class="lnTitleWarp">
							<view style="margin-right: 10upx;">流年数字密码:</view>
							<view>{{newLnArr.code}}</view>
							<image src="../../static/result/liunianLogo.png" style="width: 28upx;height: 28upx;margin-left: 10upx;"></image>
						</view>
						<view style="margin-top: 27upx;">
							<view class="resultItemOneText1" style="font-size: 26upx;">
								<rich-text :nodes="newLnArr.judgment.replace(/\n/g, '<br/>')" v-if="newLnArr.judgment"></rich-text>
							</view>
						</view>
						<view class="resultItemOneText2" style="font-size: 26upx;">
							{{newLnArr.description}}
						</view>
					</view>
				</view>
				<view class="uni-share-btn" @click="cancel('lnCode')">取消</view>
			</view>
		</uni-popup>
	</view>
</template>
<script>
	import {
		base64ToPath,
		pathToBase64
	} from '@/static/libs/image-tools.js';
	import html2canvas from '../../components/jcboy-html2canvas/html2canvas.vue'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import saveHeadImgFile from "../../common/baocun.js"
	import DateTimePicker from '../../components/bory-dateTimePicker/bory-dateTimePicker.vue'
	import headWarp from '../../static/result/bgHead.png'
	export default {
		components: {
			html2canvas,
			uniPopup,
			DateTimePicker
		},
		data() {
			return {
				headWarp:headWarp,
				lnData: '', //流年的日期
				newLnArr: [], //新的流年
				domId: '',
				filePath: '',
				yearMouthDay: [], //存放年月日数组
				userName: '', //用户名字
				gender: '', //性别
				longContentArr: [], //长内容带*数组
				smallContentArr: [], //短内容数组
				midContentArr: [], //中内容数组
				lnArr: {}, //流年数据
				shdxArr: [], //适合对象数据
				wxjkArr: [], //五行健康数据
				U: 0,
				E: 0,
				F: 0,
				G: 0,
				H: 0,
				I: 0,
				J: 0,
				V: 0,
				K: 0,
				W: 0,
				L: 0,
				M: 0,
				Q: 0,
				P: 0,
				O: 0,
				R: 0,
				S: 0,
				T: 0,
				N: 0,
				AA: 0,
				BB: 0,
				CC: 0,
				DD: 0,
				zswx: '',
				cfzn: '',
				sybl: '',
				ggjb: '',
				grfm: '',
				zswxNumber: 0,
				cfznNumber: 0,
				syblNumber: 0,
				ggjbNumber: 0,
				grfmNumber: 0,
				gold: 0, //金
				wood: 0, //木
				water: 0, //水
				fire: 0, //火
				soil: 0, //土
				zxj: "281", //主性格IJK
				fxjy: "393", //父系基因EFI
				mxjy: "775", //母系基因GHJ
				qysmm: "8", //潜意识密码(E+H+K)
				nxmm: "7", //内心密码(I+J+K)
				wxmm: "363", //外心密码Q+N+T  这里注意
				dnsmxx: "415", //对内生命信息IKM
				dwsmxx: "617", //对外生命信息JKL
				hsxg: "5", //孩时性格 K
				shzy: "9", //适合职业 K
				wxjk: ["缺土", "水多"], //（在IJKLM 5个数中，1和6为金，2和7为水，3和8为火，4和9为木，5为土，五行中两个以上包括两个为多，缺的为缺，各1个的为正常） 注意！！！！
				dxpygk: "393", //当下朋友或顾客（20--40岁）OPQ
				dxpygkysOne: "347", //当下朋友或顾客的延伸一 EIO
				dxpygkysTwo: "944", //当下朋友或顾客的延伸二 FIP
				enxs: "551", //儿女和下属（40--60岁）LMN
				wlwn: "363", //未来或晚年（60岁以后）RST 81条
				wlwnOne: "371", //未来或晚年的延伸一GJR
				wlwnTwo: "742", //未来或晚年的延伸二HJS
				jtmm: "5", //家庭密码：2000年以后出生者只一个：F+G 2000年以前出生者有两个：F+G;F+G+1  以上两个数字或三个数相加后所得变的是什么数） 注意！！！！ 判断this.CC 是否大于20 
				aqtz: "8", //爱情特征 K
				shdx: "9", //适合对象：本命K数+对象K数
				liunian: "562", //流年IJK
			}
		},
		onLoad: function(option) {
			this.userName = option.userName
			this.gender = option.gender
			this.splitMethod(parseInt(option.id))
			this._resulContent()
		},
		mounted() {
			this.domId = '#poster'
		},
		computed: {
			indicatorStyle() {
				return {
					background: 'rgba(178,139,101,.2)',
					height: '40px',
				};
			}
		},
		methods: {
			//获取流年短语
			_lnResult(IJK) {
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
				});
				const orderId = '' //订单ID
				const ln = {
					"code": IJK
				} //流年
				let params = {
					orderId,
					ln
				}
				this.$ajax.post({
					url: this.$service.api_lists.resulContent,
					data: params
				}).then((res) => {
					if (res.data.code == 200) {
						//初始化信息
						var newData = res.data.data
						this.newLnArr = newData.ln //流年
						this.$refs.lnCode.open()
					}
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
				})
			},

			//打开日期插件
			selectDatePicker() {
				this.$refs['date-time'].show();
			},
			//日期选完
			dateTimeChange(value) {
				var b = value.replace(/[^\d]/g, '')
				var yearMouthDay = []
				var sNumber = b.toString()
				for (var i = 0, len = sNumber.length; i < len; i += 1) {
					yearMouthDay.push(+sNumber.charAt(i));
				}
				const E = this.twoNumberAdd(yearMouthDay[6], yearMouthDay[7]) //AA
				const F = this.twoNumberAdd(yearMouthDay[4], yearMouthDay[5]) //BB
				const G = this.twoNumberAdd(yearMouthDay[0], yearMouthDay[1]) //CC
				const H = this.twoNumberAdd(yearMouthDay[2], yearMouthDay[3]) //DD
				const I = this.twoNumberAdd(E, F)
				const J = this.twoNumberAdd(G, H)
				const K = this.twoNumberAdd(I, J)
				const IJK = I + "" + J + "" + K
				this._lnResult(IJK)
				yearMouthDay = []
			},
			// 通用关闭弹框
			cancel(type) {
				this.$refs[type].close()
			},
			//下载图片
			handleDownloadQrIMg() {
				var that = this
				uni.showModal({
				    title: '提示',
				    content: '是否确定保存图片',
				    success: function (res) {
				        if (res.confirm) {
							uni.showLoading({
								title: '保存中'
							})
							let base64 = that.filePath;
							const bitmap = new plus.nativeObj.Bitmap("test");
							bitmap.loadBase64Data(base64, function() {
								const url = "_doc/" + new Date().getTime() + ".png";  // url为时间戳命名方式
								console.log('saveHeadImgFile', url)
								bitmap.save(url, {
									overwrite: true,  // 是否覆盖
									// quality: 'quality'  // 图片清晰度
								}, (i) => {
									uni.saveImageToPhotosAlbum({
										filePath: url,
										success: function() {
											uni.hideLoading()
											uni.showToast({
												title: '图片保存成功',
												icon: 'none'
											})
											bitmap.clear()
										}
									});
								}, (e) => {
									uni.hideLoading()
									uni.showToast({
										title: '图片保存失败,请重试',
										icon: 'none'
									})
									bitmap.clear()
								});
							}, (e) => {
								uni.hideLoading()
								uni.showToast({
									title: '图片保存失败,请重试',
									icon: 'none'
								})
								bitmap.clear()
							});
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
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
			//获取断语
			_resulContent() {
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
				});
				const orderId = '' //订单ID
				const aqtz = {
					"code": this.aqtz
				} //爱情特征
				const dnsmxx = {
					"code": this.dnsmxx
				} //对内的生命信息
				const dwsmxx = {
					"code": this.dwsmxx
				} //对外的生命信息
				const enxs = {
					"code": this.enxs
				} //儿女和下属
				const fxjy = {
					"code": this.fxjy
				} //父系基因
				const hsxgtz = {
					"code": this.hsxg
				} //孩时性格特征
				const jtmm = {
					"code": this.jtmm
				} //家庭密码
				const ln = {
					"code": this.liunian
				} //流年
				const mxjy = {
					"code": this.mxjy
				} //母系基因
				const nxmm = {
					"code": this.nxmm
				} //内心密码
				const pygk = {
					"code": this.dxpygk
				} //当下朋友或顾客
				const pygkExtra1 = {
					"code": this.dxpygkysOne
				} //当下朋友或顾客延伸1
				const pygkExtra2 = {
					"code": this.dxpygkysTwo
				} //当下朋友或顾客延伸2
				const qysmm = {
					"code": this.qysmm
				} //潜意识密码
				const shdx = {
					"code": this.shdx
				} //适合对象
				const sszy = {
					"code": this.shzy
				} // 适合职业
				const wlwn = {
					"code": this.wlwn
				} // 未来或晚年
				const wlwnExtra1 = {
					"code": this.wlwnOne
				} //未来或晚年的延伸一
				const wlwnExtra2 = {
					"code": this.wlwnTwo
				} //未来或晚年的延伸二
				const wxjkCodeList = this.wxjk //五行健康
				const wxmm = {
					"code": this.wxmm
				} //外心密码
				const zxgtz = {
					"code": this.zxj
				} //主性格特征
				let params = {
					orderId,
					aqtz,
					dnsmxx,
					dwsmxx,
					enxs,
					fxjy,
					hsxgtz,
					jtmm,
					ln,
					mxjy,
					nxmm,
					pygk,
					pygkExtra1,
					pygkExtra2,
					qysmm,
					shdx,
					sszy,
					wlwn,
					wlwnExtra1,
					wlwnExtra2,
					wxjkCodeList,
					wxmm,
					zxgtz
				}
				this.$ajax.post({
					url: this.$service.api_lists.resulContent,
					data: params
				}).then((res) => {
					if (res.data.code == 200) {
						//初始化信息
						var newData = res.data.data
						this.longContentArr.push(newData.zxgtz) //主性格
						this.longContentArr.push(newData.fxjy) //父系基因
						this.longContentArr.push(newData.mxjy) //母系基因
						// this.longContentArr.push(newData.dnsmxx)//对内的生命信息
						this.longContentArr.push(newData.dwsmxx) //对外的生命信息
						this.longContentArr.push(newData.pygk) //当下朋友或顾客
						this.longContentArr.push(newData.pygkExtra1) //当下朋友或顾客延伸1
						this.longContentArr.push(newData.pygkExtra2) //当下朋友或顾客延伸2
						this.longContentArr.push(newData.enxs) //儿女和下属
						this.longContentArr.push(newData.wlwn) //未来或晚年
						this.longContentArr.push(newData.wlwnExtra1) //未来或晚年的延伸一
						this.longContentArr.push(newData.wlwnExtra2) //未来或晚年的延伸二
						this.lnArr = newData.ln //流年

						this.smallContentArr.push(newData.qysmm) //潜意识密码
						this.smallContentArr.push(newData.nxmm) //内心密码
						this.smallContentArr.push(newData.jtmm) //家庭密码

						this.midContentArr.push(newData.wxmm) //外心密码
						this.midContentArr.push(newData.hsxgtz) //孩时性格
						this.midContentArr.push(newData.sszy) //适合职业
						this.midContentArr.push(newData.aqtz) //爱情特征
						this.shdxArr = newData.shdxList[0] //适合对象
						this.wxjkArr = newData.wxjkList
					}
					uni.hideLoading()
				}).catch((err) => {
					uni.hideLoading()
					// uni.showToast({
					// 	title: err,
					// 	duration: 2000
					// });
				})
			},

			//拆分年月日
			splitMethod(number) {
				// var number = 12354987,
				var sNumber = number.toString();
				for (var i = 0, len = sNumber.length; i < len; i += 1) {
					this.yearMouthDay.push(+sNumber.charAt(i));
				}
				console.log(this.yearMouthDay);
				this.AA = this.yearMouthDay[6] + '' + this.yearMouthDay[7] //AA
				this.BB = this.yearMouthDay[4] + '' + this.yearMouthDay[5] //BB
				this.CC = this.yearMouthDay[0] + '' + this.yearMouthDay[1] //CC
				this.DD = this.yearMouthDay[2] + '' + this.yearMouthDay[3] //DD
				this.benxin()
			},
			//两数相加 大于10 则两数相加 小于10 则 返回
			twoNumberAdd(a, b) {
				var c = a + b
				var dayS = []
				if (c >= 10) {
					var d = c.toString()
					for (var i = 0, len = d.length; i < len; i += 1) {
						dayS.push(+d.charAt(i));
					}
					var e = dayS[0] + dayS[1]
					return e
				} else {
					return c
				}
			},
			//三数相加 大于10 则两数相加 小于10 则 返回
			threeNumberAdd(a, b, c) {
				var d = a + b + c
				var dayS = []
				if (d >= 10) {
					var e = d.toString()
					for (var i = 0, len = e.length; i < len; i += 1) {
						dayS.push(+e.charAt(i));
					}
					var f = dayS[0] + dayS[1]
					var newDays = []
					if (f >= 10) {
						var newD = f.toString()
						for (var j = 0, len = newD.length; j < len; j += 1) {
							newDays.push(+newD.charAt(j));
						}
						var newE = newDays[0] + newDays[1]
						return newE
					} else {
						return f
					}
				} else {
					return d
				}
			},
			//算法
			//this.yearMouthDay[0] --A
			//this.yearMouthDay[1] --A
			//this.yearMouthDay[2] --B
			//this.yearMouthDay[3] --B
			//this.yearMouthDay[4] --C
			//this.yearMouthDay[5] --C
			//this.yearMouthDay[6] --D
			//this.yearMouthDay[7] --D
			benxin() {
				this.E = this.twoNumberAdd(this.yearMouthDay[6], this.yearMouthDay[7]) //AA
				this.F = this.twoNumberAdd(this.yearMouthDay[4], this.yearMouthDay[5]) //BB
				this.G = this.twoNumberAdd(this.yearMouthDay[0], this.yearMouthDay[1]) //CC
				this.H = this.twoNumberAdd(this.yearMouthDay[2], this.yearMouthDay[3]) //DD
				this.I = this.twoNumberAdd(this.E, this.F)
				this.J = this.twoNumberAdd(this.G, this.H)
				this.K = this.twoNumberAdd(this.I, this.J)
				this.L = this.twoNumberAdd(this.J, this.K)
				this.M = this.twoNumberAdd(this.I, this.K)
				this.N = this.twoNumberAdd(this.L, this.M)
				this.O = this.twoNumberAdd(this.E, this.I)
				this.P = this.twoNumberAdd(this.F, this.I)
				this.Q = this.twoNumberAdd(this.O, this.P)
				this.R = this.twoNumberAdd(this.G, this.J)
				this.S = this.twoNumberAdd(this.H, this.J)
				this.T = this.twoNumberAdd(this.R, this.S)
				this.U = this.threeNumberAdd(this.E, this.H, this.K)
				this.V = this.threeNumberAdd(this.Q, this.N, this.T)
				this.W = this.threeNumberAdd(this.I, this.J, this.K)
				this.JudgeTheFive(this.K)
				this.zxj = this.I + "" + this.J + "" + this.K
				this.fxjy = this.E + "" + this.F + "" + this.I
				this.mxjy = this.G + "" + this.H + "" + this.J
				this.qysmm = this.U
				this.nxmm = this.W
				this.wxmm = this.Q + "" + this.N + "" + this.T
				this.dnsmxx = this.I + "" + this.K + "" + this.M
				this.dwsmxx = this.J + "" + this.K + "" + this.L
				this.hsxg = this.K
				this.shzy = this.K
				this.wxjk = this.computeWxJk()
				console.log(this.wxjk)
				this.dxpygk = this.O + "" + this.P + "" + this.Q
				this.dxpygkysOne = this.E + "" + this.I + "" + this.O
				this.dxpygkysTwo = this.F + "" + this.I + "" + this.P
				this.enxs = this.L + "" + this.M + "" + this.N
				this.wlwn = this.R + "" + this.S + "" + this.T
				this.wlwnOne = this.G + "" + this.J + "" + this.R
				this.wlwnTwo = this.H + "" + this.J + "" + this.S
				this.jtmm = this.computeJtMm() + ''
				this.aqtz = this.K
				this.shdx = this.K
				this.liunian = this.I + "" + this.J + "" + this.K
				this.yearMouthDay = []
			},
			//判断五行
			JudgeTheFive(K) {
				this.computeFiveNumber()
				switch (K) {
					case 1:
						this.zswx = '金'
						this.zswxNumber = this.gold
						this.cfzn = '水'
						this.cfznNumber = this.water
						this.sybl = '木'
						this.syblNumber = this.wood
						this.ggjb = '火'
						this.ggjbNumber = this.fire
						this.grfm = '土'
						this.grfmNumber = this.soil
						break;
					case 6:
						this.zswx = '金'
						this.zswxNumber = this.gold
						this.cfzn = '水'
						this.cfznNumber = this.water
						this.sybl = '木'
						this.syblNumber = this.wood
						this.ggjb = '火'
						this.ggjbNumber = this.fire
						this.grfm = '土'
						this.grfmNumber = this.soil
						break;
					case 2:
						this.zswx = '水'
						this.zswxNumber = this.water
						this.cfzn = '木'
						this.cfznNumber = this.wood
						this.sybl = '火'
						this.syblNumber = this.fire
						this.ggjb = '土'
						this.ggjbNumber = this.soil
						this.grfm = '金'
						this.grfmNumber = this.gold
						break;
					case 7:
						this.zswx = '水'
						this.zswxNumber = this.water
						this.cfzn = '木'
						this.cfznNumber = this.wood
						this.sybl = '火'
						this.syblNumber = this.fire
						this.ggjb = '土'
						this.ggjbNumber = this.soil
						this.grfm = '金'
						this.grfmNumber = this.gold
						break;
					case 3:
						this.zswx = '火'
						this.zswxNumber = this.fire
						this.cfzn = '土'
						this.cfznNumber = this.soil
						this.sybl = '金'
						this.syblNumber = this.gold
						this.ggjb = '水'
						this.ggjbNumber = this.water
						this.grfm = '木'
						this.grfmNumber = this.wood
						break;
					case 8:
						this.zswx = '火'
						this.zswxNumber = this.fire
						this.cfzn = '土'
						this.cfznNumber = this.soil
						this.sybl = '金'
						this.syblNumber = this.gold
						this.ggjb = '水'
						this.ggjbNumber = this.water
						this.grfm = '木'
						this.grfmNumber = this.wood
						break;
					case 4:
						this.zswx = '木'
						this.zswxNumber = this.wood
						this.cfzn = '火'
						this.cfznNumber = this.fire
						this.sybl = '土'
						this.syblNumber = this.soil
						this.ggjb = '金'
						this.ggjbNumber = this.gold
						this.grfm = '水'
						this.grfmNumber = this.water
						break;
					case 9:
						this.zswx = '木'
						this.zswxNumber = this.wood
						this.cfzn = '火'
						this.cfznNumber = this.fire
						this.sybl = '土'
						this.syblNumber = this.soil
						this.ggjb = '金'
						this.ggjbNumber = this.gold
						this.grfm = '水'
						this.grfmNumber = this.water
						break;
					default:
						this.zswx = '土'
						this.zswxNumber = this.soil
						this.cfzn = '金'
						this.cfznNumber = this.gold
						this.sybl = '水'
						this.syblNumber = this.water
						this.ggjb = '木'
						this.ggjbNumber = this.wood
						this.grfm = '火'
						this.grfmNumber = this.fire
				}
			},
			//计算五行数量
			computeFiveNumber() {
				var arr = [this.E, this.F, this.G, this.H, this.I, this.J, this.K, this.L, this.M, this.N, this.O, this.P, this.Q,
					this.R, this.S, this.T
				]
				for (var j = 0, len = arr.length; j < len; j++) {
					switch (arr[j]) {
						case 1:
							this.gold++
							break;
						case 6:
							this.gold++
							break;
						case 2:
							this.water++
							break;
						case 7:
							this.water++
							break;
						case 3:
							this.fire++
							break;
						case 8:
							this.fire++
							break;
						case 4:
							this.wood++
							break;
						case 9:
							this.wood++
							break;
						default:
							this.soil++
					}
				}
			},

			//判断家庭密码
			computeJtMm() {
				var year = parseInt(this.CC + this.DD)
				if (year >= 2000) {
					var c = this.F + this.G
					var dayS = []
					if (c >= 10) {
						var d = c.toString()
						for (var i = 0, len = d.length; i < len; i += 1) {
							dayS.push(+d.charAt(i));
						}
						var e = this.twoNumberAdd(dayS[0], dayS[1])
						return e
					} else {
						return c
					}
				} else {
					var a = this.F + this.G
					var b = this.F + this.G + 1
					var c = a + b
					var dayS = []
					if (c >= 10) {
						var d = c.toString()
						for (var i = 0, len = d.length; i < len; i += 1) {
							dayS.push(+d.charAt(i));
						}
						
						var e = this.twoNumberAdd(dayS[0], dayS[1])
						return e
					} else {
						return c
					}
				}
			},
			//判断五行健康
			computeWxJk() {
				var arr = [this.I, this.J, this.K, this.L, this.M]
				var gold = 0 //金
				var water = 0 //水
				var fire = 0 //火
				var wood = 0 //木
				var soil = 0 //土
				var wxjkArr = []
				for (var j = 0, len = arr.length; j < len; j++) {
					switch (arr[j]) {
						case 1:
							gold++
							break;
						case 6:
							gold++
							break;
						case 2:
							water++
							break;
						case 7:
							water++
							break;
						case 3:
							fire++
							break;
						case 8:
							fire++
							break;
						case 4:
							wood++
							break;
						case 9:
							wood++
							break;
						default:
							soil++
					}
				}
				if (gold == 0) {
					wxjkArr.push('缺金');
				} else if (gold > 1) {
					wxjkArr.push('多金');
				} else {}

				if (water == 0) {
					wxjkArr.push('缺水');
				} else if (water > 1) {
					wxjkArr.push('多水');
				} else {}

				if (fire == 0) {
					wxjkArr.push('缺火');
				} else if (fire > 1) {
					wxjkArr.push('多火');
				} else {}

				if (wood == 0) {
					wxjkArr.push('缺木');
				} else if (wood > 1) {
					wxjkArr.push('多木');
				} else {}

				if (soil == 0) {
					wxjkArr.push('缺土');
				} else if (soil > 1) {
					wxjkArr.push('多土');
				} else {}

				return wxjkArr
			}
		}
	}
</script>

<style>
	@import url("../../common/index.css")
</style>
