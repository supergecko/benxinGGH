<template>
	<view class="bg">
		<view class="midItem">
			<view class="itemHeader">
				<image src="../../static/home/leftyun.png" style="width: 60upx;height: 32upx;margin-right: 35upx;"></image>
				<view>完善信息</view>
				<image src="../../static/home/rightyun.png" style="width: 60upx;height: 32upx;margin-left: 35upx;"></image>
			</view>

			<view class="itemInput">
				<view class="inputWarp">
					<view><text style="font-weight: 400;">您的姓名:</text></view>
					<view style="margin-left: 28upx;">
						<input placeholder="请输入您的姓名" style="font-size: 32upx;" v-model="newUserName" />
					</view>
				</view>
				<view class="bottomLine"></view>
			</view>
			<view class="itemInput">
				<view class="inputWarp">
					<view><text style="font-weight: 400;">您的电话:</text></view>
					<view style="margin-left: 28upx;">
						<input placeholder="请输入您的电话" style="font-size: 32upx;" v-model="mobile" />
					</view>
				</view>
				<view class="bottomLine"></view>
			</view>
			<view>
				<view class="inputWarp">
					<view><text style="font-weight: 400;">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</text></view>
					<view style="margin-left: 28upx;">
						<radio-group name="gender" style="font-size: 32upx;transform:scale(0.8);" @change="radioChange">
							<label style="margin-right: 82upx;">
								<radio value="男" color="#9D887C" /><text>男</text>
							</label>
							<label>
								<radio value="女" color="#9D887C" /><text>女</text>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="bottomLine"></view>
			</view>
			<view>
				<view class="inputWarp">
					<view><text style="font-weight: 400;">出生日期:</text></view>
					<view style="margin-left: 28upx;font-size: 32upx;" @click="showDateDialog(1, 'number')">
						<view style="font-size: 32upx;color: #B28B65;" v-if="detail==''">请选择出生日期</view>
						<view style="font-size: 32upx;" v-else>{{detail}}</view>
					</view>

					<zan-calendar :date="date" :time="time" :isHourShow="isHourShow" :isMinShow="isMinShow" :show="dateDialog"
					 :lunarType="lunarType" @closeDialog="closeDialog" @confirmDialog="confirmDialog">
					</zan-calendar>
				</view>
				<view class="bottomLine"></view>
			</view>
		</view>
		<view class="bottomBtn" @click="openNew()">立即测算</view>
	</view>
</template>
<script>
	import {
		mapState
	} from 'vuex'
	import zanCalendar from '../..//components/quick-calendar/calendar'
	import wx from 'weixin-js-sdk'
	export default {
		components: {
			zanCalendar
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		data() {
			return {
				detail: '',
				newUserName: '', //用户名字
				mobile: '', //用户手机
				userData: '', //日期
				gender: '', //性别
				lunarDate: '', //农历(阴历)
				solarDate: '', //公历(阳历)
				date: '2019-01-22', //日期
				time: '13-26', //时间
				isHourShow: false, //是否显示时辰（小时）
				isMinShow: false, //是否显示分钟
				lunarType: 'number', //年月日显示方式
				dateDialog: false, //是否弹出日历组件
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
				yearMouthDay: [], //存放年月日数组
				code: '', //微信code
				orderId: '' //订单ID
			}
		},
		onLoad(options) {
			console.log(options)
			if (typeof options.openid !== 'undefined') {
				uni.setStorage({
					key: "openid",
					data: options.openid
				})
			}
			const openid = uni.getStorageSync("openid")
			let url = window.location.href
			console.log(url.substr(url.indexOf('#') + 1))
			if (!openid) {
				if (url.indexOf('auth') < 0) {
					uni.setStorage({
						key: "nowUrl",
						data: url.substr(url.indexOf('#') + 1)
					})
					uni.navigateTo({
						url: '/pages/auth/index'
					})
				}
			}
		},
		methods: {
			//进行支付流程
			openNew() {
				if (this.newUserName === '') {
					uni.showToast({
						icon: 'none',
						title: '请输入您的姓名'
					});
					return;
				}
				if (this.gender === '') {
					uni.showToast({
						icon: 'none',
						title: '请选择您的性别'
					});
					return;
				}
				if (this.userData === '') {
					uni.showToast({
						icon: 'none',
						title: '请选择您的出生日期'
					});
					return;
				}
				uni.setStorage({
					key: "data",
					data: this.userData
				})
				uni.setStorage({
					key: "userName",
					data: this.newUserName
				})
				uni.setStorage({
					key: "gender",
					data: this.gender
				})
				uni.setStorage({
					key: "lunarDate",
					data: this.lunarDate
				})
				uni.setStorage({
					key: "solarDate",
					data: this.solarDate
				})
				this.splitMethod(parseInt(this.userData))
				this._resulContent()
			},
			//单选框（获取性别）		
			radioChange(evt) {
				this.gender = evt.detail.value
			},
			//展示三种不同的选择调度
			showDateDialog: function(type, lunarType) {
				switch (type) {
					case 1:
						this.isHourShow = false;
						this.isMinShow = false;
						break;
					case 2:
						this.isHourShow = true;
						this.isMinShow = false;
						break;
					case 3:
						this.isHourShow = true;
						this.isMinShow = true;
						break;
				}

				this.dateDialog = true;
				this.lunarType = lunarType;
			},
			//在为确认是就点击了取消，直接关闭弹窗
			closeDialog: function() {
				this.dateDialog = false;
			},
			//点击了确认后的相关操作，并再次点击确认时间后的返回，这里可以写自己的操作了
			confirmDialog: function(e) {
				this.lunarDate = e.lunarDate
				this.solarDate = e.solarDate
				this.detail = e.solarDate
				var a = e.date
				var b = a.replace(/[^\d]/g, '')
				this.userData = b
				console.log(this.userData)
				this.dateDialog = false
				// alert("选择的时间是：" + e.time);
			},

			//创建测算订单接口
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
				const mobile = this.mobile //手机号
				const trueName = this.newUserName
				const birth = this.userData
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
					mobile,
					trueName,
					birth,
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
						this.orderId = newData.id
						uni.setStorage({
							key: "orderId",
							data: newData.id
						})
						// uni.redirectTo({
						//     url: '../message/message'
						// })
						this._pay(newData.id)
					}
				}).catch((err) => {
					uni.hideLoading()
					// uni.showToast({
					// 	title: err,
					// 	duration: 2000
					// });
				})
			},
			//支付测算订单接口
			_pay(orderId) {
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
				let params2 = {}
				this.$ajax.post({
					url: this.$service.api_lists.getSign,
					data: params2
				}).then((res) => {
					if (res.data.code == 200) {
						//初始化信息
						var config = res.data.data
						const id = orderId //订单ID
						const openId = localStorage.getItem('openid')
						let params = {
							id,
							openId
						}
						this.$ajax.post({
							url: this.$service.api_lists.pay,
							data: params
						}).then((res) => {
							if (res.data.code == 200) {
								//初始化信息
								var newData = res.data.data
								// console.log(newData)
								// console.log(config)
								this.wxPayInvoke(newData,config)
							}
							uni.hideLoading()
						}).catch((err) => {
							uni.hideLoading()
							// uni.showToast({
							// 	title: err,
							// 	duration: 2000
							// });
						})
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
			//调起微信支付
			wxPayInvoke(payRes,config) {
				//发起微信支付
				const appId = payRes.appid
				const timestamp = Math.ceil((new Date() - 0) / 1000)
				const nonceStr = payRes.nonce_str
				const packages = 'prepay_id=' + payRes.prepay_id
				const signature = payRes.sign
				const paySign = this.$md5('appId=' + appId + '&nonceStr=' + nonceStr + '&package=' + packages + '&signType=MD5&timeStamp=' + timestamp + '&key=qo5WzE1ihSRshGdw1KSzc6aslAFdevtt')
				// console.log('wexinPay', config, data, 'appId=' + appId + '&nonceStr=' + nonceStr + '&package=' + packages + '&signType=MD5&timeStamp=' + timestamp + '&key=qo5WzE1ihSRshGdw1KSzc6aslAFdevtt')
				const Fn = Function
				wx.config(new Fn('return ' + config)())
				wx.ready(function () {
				  wx.chooseWXPay({
				    timestamp: timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
				    nonceStr: nonceStr, // 支付签名随机串，不长于 32 位
				    package: packages, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
				    signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
				    paySign: paySign, // 支付签名
				    success: function (res) {
				      // 支付成功后的回调函数
				      // uni.showToast({
				      // 	icon: 'none',
				      // 	title: '支付成功'
				      // })
				      setTimeout(() => {
						uni.redirectTo({
						    url: '../message/message'
						})
				      }, 1000)
				    },
					cancel: function(res) {
						//提示引用的是mint-UI里toast
					// 	setTimeout(() => {
					// 		uni.showToast({
					// 			icon: 'none',
					// 			title: '已取消支付'
					// 		})
					
					// 	}, 2000)
						// window.history.go(-1) //跳转到上一页
					},
				    fail: function (res) {
				      // window.history.go(-1) //跳转到上一页
				      setTimeout(() => {
				      	uni.showToast({
				      		icon: 'none',
				      		title: '支付失败，请重试'
				      	})
				      }, 2000)
				    }
				  })
				})
				wx.error(function (res) {
				  // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
				  // alert('config信息验证失败')
				  console.log(JSON.stringify(res))
				})
			},
			//拆分年月日
			splitMethod(number) {
				// var number = 12354987,
				var sNumber = number.toString();
				for (var i = 0, len = sNumber.length; i < len; i += 1) {
					this.yearMouthDay.push(+sNumber.charAt(i));
				}
				// console.log(this.yearMouthDay);
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
				// this.JudgeTheFive(this.K)
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
	.bg {
		background-image: url(../../static/home/bg.png);
		background-size: 100% 100%;
		width: 750upx;
	}

	.bottomBtn {
		background-image: url(../../static/home/button.png);
		width: 370upx;
		height: 98upx;
		margin: 0 auto;
		background-size: 100% 100%;
		line-height: 90upx;
		text-align: center;
		font-size: 34upx;
		color: #090500;
		font-weight: 400;
		margin-top: -68upx;
	}

	.midItem {
		background-image: url(../../static/home/midbg.png);
		background-size: 100% 100%;
		width: 674upx;
		height: 740upx;
		margin: 0 auto;
		margin-top: 255upx;
	}

	.itemHeader {
		font-size: 40upx;
		font-family: PingFang SC;
		color: #A07348;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 60upx;
	}

	.inputWarp {
		display: flex;
		font-size: 32upx;
		color: #331C01;
		width: 560upx;
		margin: 0 auto;
		padding-top: 49upx;
		font-family: PingFang SC;
	}

	.uni-input-placeholder {
		color: #B28B65;
	}

	.bottomLine {
		width: 558upx;
		height: 1upx;
		background-color: #B28B65;
		margin: 0 auto;
		margin-top: 36upx;
	}
</style>
