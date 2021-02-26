<template>
	<view>
		<!-- <html2canvas ref="html2canvas" :domId="domId" @renderFinish="renderFinish"> -->
			<view style="width: 100%;height: 100%;display: flex;flex-direction: column;justify-content: space-between;align-items: center"
			 id="poster">
				<!-- 头部背景 -->

				<view class="headWarp">
					<view class="headItem">
						<!-- 头部名字 -->
						<view class="fullName">
							<view class="NameWarp">
								<view style="font-size: 36upx;user-select: text;-webkit-user-select: text;">姓名：{{userName}}{{gender == '男' ? '先生' :'女士'}} ({{gender}}命)</view>
								<view style="user-select: text;-webkit-user-select: text;">公历：{{solarDate}} </view>
								<view style="user-select: text;-webkit-user-select: text;">农历：{{lunarDate}}</view>
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
						<view class="fiveText" >五行健康</view>
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
							<view class="topleft">
								<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFdklEQVRoQ+1aS4wUVRQ951V1zycGMCHGDwyCQTAoBg2JQlQSPwQEZsDQ07gwYUXiTuLwCUFH0JkGZsAhKAGiSIaPMISZgYW60oUxMTFGo8GdGxX5yYBA/6rrHfOqpyXExEmzgIL0XXSnu+pWnXPPe+/eW/UIAAMd6WeswVSC0yALkpagsbIwhKzgAzpFma+LxfDbVHtf0fkd6kw/2ADNBzkRQlKQ3Pnu2M02O3xDggkJAvnb4jWHNtP9P5hpTVuYmUZ6UkQCgCc4bhFYK8ca/J3AYDEZ9qdW9uUA8ESmdboVXxc5GVS9rHySt4Qgyljdl1/+0h8ta480RwQHMq1vgZgjy5mGoKAAYOhIAEq4qFhhiNQeMtfVvPr4ZQns37z0Bcr7gMJ4EKGggnNh5HeLjKJEErrUsubwhAjIsc7WdcZgHsQZgL4T8D3ECyCShJoAvgzIk9hjhrLdzZvLBAczqedB7gY4TsI3AL4kZQCTvNn0HK1h5TzKOBRDi1cf6qwQbDNAs8BJhnw/sDhuEvkLpau+8ZOY6BmvR8IUGnQVcuG2VHvflQpB0uyScA+I7SG9nfUsloKi54b5TbcwURSCes/dmHW53JK2/rMRwf6O1CrQtJC4T+D6i/m6o8vbP8lH83NT+n5J+yXONGWC3RWCA5nWF0nsATha4sbgbOnD1LZofsbGrilItghogrTxsp888Fpb71WH8viWpRNtyesF8aiFMqUztqdCYjCTehYweyWMJfne6fyVHSvaT2Rjw668iAD9mWWrKC0B0SRoU2Ds4SBMFNyxu6zGy2i3iKkG6CqFxY9Mo81l841stPYJetoDYCyADi+f3b4wjgQHO9MbRMwDME3QzwR+kZg3brU1vBvScxLGGOJHC/xEKKBcPtA4AHMAlgRm/MKVnngSzLSutOBsCrNBjBrOKZV85klIMkofKBmgKEAuFbgTBBQInBHRfTFXf6Ayd+MyTMuJviM1GzRTLDWdYCOgOlfJuARPcLSVZpEcLegkwZOAShA8EEUClwSek8IvgofwQyrV5/JnbCwieKJ9YWOQ9BvqPTYUgyRDFI3xkvTDMCgBDxjf9AhmqqSdxoT7FHhZefBsaIREPiyU6gL/fOnvuK2gUboYKdQD76bHw8MBUI9ZoaNUZ3cMl2ojucbi+IgEj2SWNiXl7Rc0g8SWBi/ZPXc4hcSCwQggIoJHti5tCArZ+jFeY5377RJgXeArZL5E+ePpmZ3RCituDQphl0v0twO5f4fosS3LnjahnQzgEQkJQcbQuOLZErgX4Pyow5DtCQqKKpnbiuBAZ/oNELMAPAVhFBm1S85cZ+WDcPXdJRI78Fd2qyu2byuC/Zn0RgIvAXjcNbYCfiWQhZhwfYeEQAanafH5UOH0Z8vbv4rq1NvByv1gZ3o1iEUAHpawx3o66nk8ZwtqSMCYECX3kQvDYKjl7QGn5K1qaquO6XXFNlzjCm2gyR12TW3VV4uhw3CxnVpFmGa4bgLI+DIHF6w9OBRDvFVDukZQXBQ9PAK2MWRv87pDZ6q+WgwdriPoOnoSW+9oggbshsX+O1bBGsEYzrP/g/SfOVhTsKZgvCJQG6Lx0qN6NDUFq49ZvDxqCsZLj+rR1BSsPmbx8qgpGC89qkdTU7D6mMXLo6ZgvPSoHk1NwepjFi+PmoLx0qN6NDUFq49ZvDzK20g6W9tU2Yx3Jz7ZHsik32REEJPce3j5fu+Stt6z8dLixtBUNsSuAbkI0kRB20zo7buj3k0MdLS+Q4MFApsI9ID4uHn1p6duLGbx8iqvop3p9aSaAU4C0BWGxb2vrDv2Z7yg3hiayhBdAXCuoAkQduUK2WOvtp84f2OXjJfXiDud4gW3ejT/AKmlXGYiviB6AAAAAElFTkSuQmCC" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="topright">
								<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFmUlEQVRoQ+2aW2gcVRjH//8zO3vrzWhviiD4ZlEUEQTxQZ/Uh2aTYky1DVqlSrUYk/Syqa1EtFQNFlTw+iD4oJsNaou9ULxQBS3UqsWqqKlG2ipFC+mGmmx2Z85fzmz7IjRCXbKbsIdhYXZmvm9/3/+c7ztn5xAAdmxb/oKlEgTG3blxHzVoViCjAyVIw+Pgnrt7c7+5n5Lva4vH496Nor0Z4GWGCNz9hgaCrCQDGoA6whA/ywsnWjcOHqR7eOcz7QcsmCJQPMsVfT/VTRJpGEAsUhoy1MtLswPfAlB+e1sqXvJaBWQAXc6IBkZwEYEFEFIoCzwI6jCE8Zbe3PsRyI5ty08CSIEIpxrqnD8B0UEwAcETcVwMH2ndMPgRCe18tnmOlFoncbUhmgSVAZYdPCCPoG8VGThAqwOiRlt7889XAJ9p30bCt2DJnVMuKFPdbEmiU+JWEjcBOgHpwUw2/3EEuKF5jm1K95DqBBgC2i3wGIQSqIsJXA/wBkCHJH5EodCyKfdiBPLu08uuSCaTKIbF0CvHawAH+PGwXFQ85ilcA+FREn9K9qFzgPm+ttmJlNcli3Ukfgpt2BmUMBybFVhbTl7sGzRb6TFj8LODtxaF1t6B12sCc76+ke9qS/kLYw+T2gKoIGF1S3bgQ6fgWcAeGwHqS5IrMxtzfzhbb/bdl7woOXEnoacgHCftLiuerjvA1/qWphcnZ6+V9DiJU4BdlcnmP4uyaFdbKrbIdBowC+E7Ews7mtcPDrtrb/V3zJoTlFaA3ELwVwK7AY1ksrk36krBD/qWpsNk+lEAmwCcUsjVY8Z8nU6OyY6ZVMyLP2CBdRR+pOWDZwyPO0DfKyd8a9oJboT0K8APQJ1uyQ68VneAQWJ2J6EsoBiA/QRPiJJA3wDXWOFaEqdBfkqrEZeVSCUFXEXwagiHDfSJgEKmd6C/rgCjsZQqrqDQI2ARATf5iOoAAZdiXQaMSXB53mX8c2XN3UYIozD8DNJBCmcyvblX6wown2/z/F9wHendRmiBgHkQ4pX6zJigJQSXSCoY8gtBBVfw3UwG4ISgMYiHPfJoGASl1s1nZzJTXfEm8+eSSTA/NjcRm/BRTnrGs2SIkH6Ytta7l+Qawv5oA9sZA34PPM+3YUke4jbul3TG98ZSo8Xi+Nyk7uoeHK8rBScF396Wik2YtYbYBPEIQqxo2ZyLksxkbdoA7uvvmDUelnokrCf4TYnhyruyg8dmDKAr9H7Cc0W+G8D3Cu0aMTjuKRmb8APOOktaGisXy3P9ib9H/9Kqvv3FaaNgBZA9pOmsZE/tEXDSJRkr6ybblkRZlj/Q4BcGKGU25w5NG0A32cYl6W4Ja1HJriGIICqDrpRUzkchfE7YL0WeqbtCP9l4erPvlmRTYvEdMridFovd6sdVf1BlAWkCV7qFMICv3ARBsIXWbP65aaOgg9nxZMs8z/ObrIeUh5gtw1qT4HgYaoEJeSeJ1QB/AOxekqczG+us0P9XRjzf9WgxbFPtAJ8A8Jtod6EeVxMXCrhr2z1NAe09ANxKYxgGu43VSHO9rQcvFHDn1rsXyVMHgC5ARyHuqcvVxP8FlNBNamhGAsJgpYXcfzYNwAvtKTV7zo3BhoI1C38VHDcUrEIQa2qioWBNw18F5w0FqxDEmppoKFjT8FfBeUPBKgSxpiYaCtY0/FVw3lCwCkGsqYmGgjUNfxWcNxSsQhBraqKhYE3DXwXnDQWrEMSamvi3gqzsRCxMqxegk0Xwvf6OhQyCDvf+XsKQMXW62/BCu4FT0HrhvQS7BB4lsJfRZryBV6bNG97J4Hc+u/wyCPcL6JQ0bMh9ld2GA9tnBOC7W5dd6nnxVQDWCRiqjEEz0pp956UZAfh239L5qUR6GYiHov2iwsciRluyubdnBOBk3fcfjpXGZlPcy/QAAAAASUVORK5CYII=" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="bottomleft">
								<image src="data:image/png;base64,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" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="bottomright">
								<image src="data:image/png;base64,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" style="width: 56upx;height: 56upx;"></image>
							</view>
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
							<view class="topleft">
								<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFdklEQVRoQ+1aS4wUVRQ951V1zycGMCHGDwyCQTAoBg2JQlQSPwQEZsDQ07gwYUXiTuLwCUFH0JkGZsAhKAGiSIaPMISZgYW60oUxMTFGo8GdGxX5yYBA/6rrHfOqpyXExEmzgIL0XXSnu+pWnXPPe+/eW/UIAAMd6WeswVSC0yALkpagsbIwhKzgAzpFma+LxfDbVHtf0fkd6kw/2ADNBzkRQlKQ3Pnu2M02O3xDggkJAvnb4jWHNtP9P5hpTVuYmUZ6UkQCgCc4bhFYK8ca/J3AYDEZ9qdW9uUA8ESmdboVXxc5GVS9rHySt4Qgyljdl1/+0h8ta480RwQHMq1vgZgjy5mGoKAAYOhIAEq4qFhhiNQeMtfVvPr4ZQns37z0Bcr7gMJ4EKGggnNh5HeLjKJEErrUsubwhAjIsc7WdcZgHsQZgL4T8D3ECyCShJoAvgzIk9hjhrLdzZvLBAczqedB7gY4TsI3AL4kZQCTvNn0HK1h5TzKOBRDi1cf6qwQbDNAs8BJhnw/sDhuEvkLpau+8ZOY6BmvR8IUGnQVcuG2VHvflQpB0uyScA+I7SG9nfUsloKi54b5TbcwURSCes/dmHW53JK2/rMRwf6O1CrQtJC4T+D6i/m6o8vbP8lH83NT+n5J+yXONGWC3RWCA5nWF0nsATha4sbgbOnD1LZofsbGrilItghogrTxsp888Fpb71WH8viWpRNtyesF8aiFMqUztqdCYjCTehYweyWMJfne6fyVHSvaT2Rjw668iAD9mWWrKC0B0SRoU2Ds4SBMFNyxu6zGy2i3iKkG6CqFxY9Mo81l841stPYJetoDYCyADi+f3b4wjgQHO9MbRMwDME3QzwR+kZg3brU1vBvScxLGGOJHC/xEKKBcPtA4AHMAlgRm/MKVnngSzLSutOBsCrNBjBrOKZV85klIMkofKBmgKEAuFbgTBBQInBHRfTFXf6Ayd+MyTMuJviM1GzRTLDWdYCOgOlfJuARPcLSVZpEcLegkwZOAShA8EEUClwSek8IvgofwQyrV5/JnbCwieKJ9YWOQ9BvqPTYUgyRDFI3xkvTDMCgBDxjf9AhmqqSdxoT7FHhZefBsaIREPiyU6gL/fOnvuK2gUboYKdQD76bHw8MBUI9ZoaNUZ3cMl2ojucbi+IgEj2SWNiXl7Rc0g8SWBi/ZPXc4hcSCwQggIoJHti5tCArZ+jFeY5377RJgXeArZL5E+ePpmZ3RCituDQphl0v0twO5f4fosS3LnjahnQzgEQkJQcbQuOLZErgX4Pyow5DtCQqKKpnbiuBAZ/oNELMAPAVhFBm1S85cZ+WDcPXdJRI78Fd2qyu2byuC/Zn0RgIvAXjcNbYCfiWQhZhwfYeEQAanafH5UOH0Z8vbv4rq1NvByv1gZ3o1iEUAHpawx3o66nk8ZwtqSMCYECX3kQvDYKjl7QGn5K1qaquO6XXFNlzjCm2gyR12TW3VV4uhw3CxnVpFmGa4bgLI+DIHF6w9OBRDvFVDukZQXBQ9PAK2MWRv87pDZ6q+WgwdriPoOnoSW+9oggbshsX+O1bBGsEYzrP/g/SfOVhTsKZgvCJQG6Lx0qN6NDUFq49ZvDxqCsZLj+rR1BSsPmbx8qgpGC89qkdTU7D6mMXLo6ZgvPSoHk1NwepjFi+PmoLx0qN6NDUFq49ZvDzK20g6W9tU2Yx3Jz7ZHsik32REEJPce3j5fu+Stt6z8dLixtBUNsSuAbkI0kRB20zo7buj3k0MdLS+Q4MFApsI9ID4uHn1p6duLGbx8iqvop3p9aSaAU4C0BWGxb2vrDv2Z7yg3hiayhBdAXCuoAkQduUK2WOvtp84f2OXjJfXiDud4gW3ejT/AKmlXGYiviB6AAAAAElFTkSuQmCC" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="topright">
								<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFmUlEQVRoQ+2aW2gcVRjH//8zO3vrzWhviiD4ZlEUEQTxQZ/Uh2aTYky1DVqlSrUYk/Syqa1EtFQNFlTw+iD4oJsNaou9ULxQBS3UqsWqqKlG2ipFC+mGmmx2Z85fzmz7IjRCXbKbsIdhYXZmvm9/3/+c7ztn5xAAdmxb/oKlEgTG3blxHzVoViCjAyVIw+Pgnrt7c7+5n5Lva4vH496Nor0Z4GWGCNz9hgaCrCQDGoA6whA/ywsnWjcOHqR7eOcz7QcsmCJQPMsVfT/VTRJpGEAsUhoy1MtLswPfAlB+e1sqXvJaBWQAXc6IBkZwEYEFEFIoCzwI6jCE8Zbe3PsRyI5ty08CSIEIpxrqnD8B0UEwAcETcVwMH2ndMPgRCe18tnmOlFoncbUhmgSVAZYdPCCPoG8VGThAqwOiRlt7889XAJ9p30bCt2DJnVMuKFPdbEmiU+JWEjcBOgHpwUw2/3EEuKF5jm1K95DqBBgC2i3wGIQSqIsJXA/wBkCHJH5EodCyKfdiBPLu08uuSCaTKIbF0CvHawAH+PGwXFQ85ilcA+FREn9K9qFzgPm+ttmJlNcli3Ukfgpt2BmUMBybFVhbTl7sGzRb6TFj8LODtxaF1t6B12sCc76+ke9qS/kLYw+T2gKoIGF1S3bgQ6fgWcAeGwHqS5IrMxtzfzhbb/bdl7woOXEnoacgHCftLiuerjvA1/qWphcnZ6+V9DiJU4BdlcnmP4uyaFdbKrbIdBowC+E7Ews7mtcPDrtrb/V3zJoTlFaA3ELwVwK7AY1ksrk36krBD/qWpsNk+lEAmwCcUsjVY8Z8nU6OyY6ZVMyLP2CBdRR+pOWDZwyPO0DfKyd8a9oJboT0K8APQJ1uyQ68VneAQWJ2J6EsoBiA/QRPiJJA3wDXWOFaEqdBfkqrEZeVSCUFXEXwagiHDfSJgEKmd6C/rgCjsZQqrqDQI2ARATf5iOoAAZdiXQaMSXB53mX8c2XN3UYIozD8DNJBCmcyvblX6wown2/z/F9wHendRmiBgHkQ4pX6zJigJQSXSCoY8gtBBVfw3UwG4ISgMYiHPfJoGASl1s1nZzJTXfEm8+eSSTA/NjcRm/BRTnrGs2SIkH6Ytta7l+Qawv5oA9sZA34PPM+3YUke4jbul3TG98ZSo8Xi+Nyk7uoeHK8rBScF396Wik2YtYbYBPEIQqxo2ZyLksxkbdoA7uvvmDUelnokrCf4TYnhyruyg8dmDKAr9H7Cc0W+G8D3Cu0aMTjuKRmb8APOOktaGisXy3P9ib9H/9Kqvv3FaaNgBZA9pOmsZE/tEXDSJRkr6ybblkRZlj/Q4BcGKGU25w5NG0A32cYl6W4Ja1HJriGIICqDrpRUzkchfE7YL0WeqbtCP9l4erPvlmRTYvEdMridFovd6sdVf1BlAWkCV7qFMICv3ARBsIXWbP65aaOgg9nxZMs8z/ObrIeUh5gtw1qT4HgYaoEJeSeJ1QB/AOxekqczG+us0P9XRjzf9WgxbFPtAJ8A8Jtod6EeVxMXCrhr2z1NAe09ANxKYxgGu43VSHO9rQcvFHDn1rsXyVMHgC5ARyHuqcvVxP8FlNBNamhGAsJgpYXcfzYNwAvtKTV7zo3BhoI1C38VHDcUrEIQa2qioWBNw18F5w0FqxDEmppoKFjT8FfBeUPBKgSxpiYaCtY0/FVw3lCwCkGsqYmGgjUNfxWcNxSsQhBraqKhYE3DXwXnDQWrEMSamvi3gqzsRCxMqxegk0Xwvf6OhQyCDvf+XsKQMXW62/BCu4FT0HrhvQS7BB4lsJfRZryBV6bNG97J4Hc+u/wyCPcL6JQ0bMh9ld2GA9tnBOC7W5dd6nnxVQDWCRiqjEEz0pp956UZAfh239L5qUR6GYiHov2iwsciRluyubdnBOBk3fcfjpXGZlPcy/QAAAAASUVORK5CYII=" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="bottomleft">
								<image src="data:image/png;base64,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" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="bottomright">
								<image src="data:image/png;base64,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" style="width: 56upx;height: 56upx;"></image>
							</view>
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
							<view class="topleft">
								<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFdklEQVRoQ+1aS4wUVRQ951V1zycGMCHGDwyCQTAoBg2JQlQSPwQEZsDQ07gwYUXiTuLwCUFH0JkGZsAhKAGiSIaPMISZgYW60oUxMTFGo8GdGxX5yYBA/6rrHfOqpyXExEmzgIL0XXSnu+pWnXPPe+/eW/UIAAMd6WeswVSC0yALkpagsbIwhKzgAzpFma+LxfDbVHtf0fkd6kw/2ADNBzkRQlKQ3Pnu2M02O3xDggkJAvnb4jWHNtP9P5hpTVuYmUZ6UkQCgCc4bhFYK8ca/J3AYDEZ9qdW9uUA8ESmdboVXxc5GVS9rHySt4Qgyljdl1/+0h8ta480RwQHMq1vgZgjy5mGoKAAYOhIAEq4qFhhiNQeMtfVvPr4ZQns37z0Bcr7gMJ4EKGggnNh5HeLjKJEErrUsubwhAjIsc7WdcZgHsQZgL4T8D3ECyCShJoAvgzIk9hjhrLdzZvLBAczqedB7gY4TsI3AL4kZQCTvNn0HK1h5TzKOBRDi1cf6qwQbDNAs8BJhnw/sDhuEvkLpau+8ZOY6BmvR8IUGnQVcuG2VHvflQpB0uyScA+I7SG9nfUsloKi54b5TbcwURSCes/dmHW53JK2/rMRwf6O1CrQtJC4T+D6i/m6o8vbP8lH83NT+n5J+yXONGWC3RWCA5nWF0nsATha4sbgbOnD1LZofsbGrilItghogrTxsp888Fpb71WH8viWpRNtyesF8aiFMqUztqdCYjCTehYweyWMJfne6fyVHSvaT2Rjw668iAD9mWWrKC0B0SRoU2Ds4SBMFNyxu6zGy2i3iKkG6CqFxY9Mo81l841stPYJetoDYCyADi+f3b4wjgQHO9MbRMwDME3QzwR+kZg3brU1vBvScxLGGOJHC/xEKKBcPtA4AHMAlgRm/MKVnngSzLSutOBsCrNBjBrOKZV85klIMkofKBmgKEAuFbgTBBQInBHRfTFXf6Ayd+MyTMuJviM1GzRTLDWdYCOgOlfJuARPcLSVZpEcLegkwZOAShA8EEUClwSek8IvgofwQyrV5/JnbCwieKJ9YWOQ9BvqPTYUgyRDFI3xkvTDMCgBDxjf9AhmqqSdxoT7FHhZefBsaIREPiyU6gL/fOnvuK2gUboYKdQD76bHw8MBUI9ZoaNUZ3cMl2ojucbi+IgEj2SWNiXl7Rc0g8SWBi/ZPXc4hcSCwQggIoJHti5tCArZ+jFeY5377RJgXeArZL5E+ePpmZ3RCituDQphl0v0twO5f4fosS3LnjahnQzgEQkJQcbQuOLZErgX4Pyow5DtCQqKKpnbiuBAZ/oNELMAPAVhFBm1S85cZ+WDcPXdJRI78Fd2qyu2byuC/Zn0RgIvAXjcNbYCfiWQhZhwfYeEQAanafH5UOH0Z8vbv4rq1NvByv1gZ3o1iEUAHpawx3o66nk8ZwtqSMCYECX3kQvDYKjl7QGn5K1qaquO6XXFNlzjCm2gyR12TW3VV4uhw3CxnVpFmGa4bgLI+DIHF6w9OBRDvFVDukZQXBQ9PAK2MWRv87pDZ6q+WgwdriPoOnoSW+9oggbshsX+O1bBGsEYzrP/g/SfOVhTsKZgvCJQG6Lx0qN6NDUFq49ZvDxqCsZLj+rR1BSsPmbx8qgpGC89qkdTU7D6mMXLo6ZgvPSoHk1NwepjFi+PmoLx0qN6NDUFq49ZvDzK20g6W9tU2Yx3Jz7ZHsik32REEJPce3j5fu+Stt6z8dLixtBUNsSuAbkI0kRB20zo7buj3k0MdLS+Q4MFApsI9ID4uHn1p6duLGbx8iqvop3p9aSaAU4C0BWGxb2vrDv2Z7yg3hiayhBdAXCuoAkQduUK2WOvtp84f2OXjJfXiDud4gW3ejT/AKmlXGYiviB6AAAAAElFTkSuQmCC" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="topright">
								<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFmUlEQVRoQ+2aW2gcVRjH//8zO3vrzWhviiD4ZlEUEQTxQZ/Uh2aTYky1DVqlSrUYk/Syqa1EtFQNFlTw+iD4oJsNaou9ULxQBS3UqsWqqKlG2ipFC+mGmmx2Z85fzmz7IjRCXbKbsIdhYXZmvm9/3/+c7ztn5xAAdmxb/oKlEgTG3blxHzVoViCjAyVIw+Pgnrt7c7+5n5Lva4vH496Nor0Z4GWGCNz9hgaCrCQDGoA6whA/ywsnWjcOHqR7eOcz7QcsmCJQPMsVfT/VTRJpGEAsUhoy1MtLswPfAlB+e1sqXvJaBWQAXc6IBkZwEYEFEFIoCzwI6jCE8Zbe3PsRyI5ty08CSIEIpxrqnD8B0UEwAcETcVwMH2ndMPgRCe18tnmOlFoncbUhmgSVAZYdPCCPoG8VGThAqwOiRlt7889XAJ9p30bCt2DJnVMuKFPdbEmiU+JWEjcBOgHpwUw2/3EEuKF5jm1K95DqBBgC2i3wGIQSqIsJXA/wBkCHJH5EodCyKfdiBPLu08uuSCaTKIbF0CvHawAH+PGwXFQ85ilcA+FREn9K9qFzgPm+ttmJlNcli3Ukfgpt2BmUMBybFVhbTl7sGzRb6TFj8LODtxaF1t6B12sCc76+ke9qS/kLYw+T2gKoIGF1S3bgQ6fgWcAeGwHqS5IrMxtzfzhbb/bdl7woOXEnoacgHCftLiuerjvA1/qWphcnZ6+V9DiJU4BdlcnmP4uyaFdbKrbIdBowC+E7Ews7mtcPDrtrb/V3zJoTlFaA3ELwVwK7AY1ksrk36krBD/qWpsNk+lEAmwCcUsjVY8Z8nU6OyY6ZVMyLP2CBdRR+pOWDZwyPO0DfKyd8a9oJboT0K8APQJ1uyQ68VneAQWJ2J6EsoBiA/QRPiJJA3wDXWOFaEqdBfkqrEZeVSCUFXEXwagiHDfSJgEKmd6C/rgCjsZQqrqDQI2ARATf5iOoAAZdiXQaMSXB53mX8c2XN3UYIozD8DNJBCmcyvblX6wown2/z/F9wHendRmiBgHkQ4pX6zJigJQSXSCoY8gtBBVfw3UwG4ISgMYiHPfJoGASl1s1nZzJTXfEm8+eSSTA/NjcRm/BRTnrGs2SIkH6Ytta7l+Qawv5oA9sZA34PPM+3YUke4jbul3TG98ZSo8Xi+Nyk7uoeHK8rBScF396Wik2YtYbYBPEIQqxo2ZyLksxkbdoA7uvvmDUelnokrCf4TYnhyruyg8dmDKAr9H7Cc0W+G8D3Cu0aMTjuKRmb8APOOktaGisXy3P9ib9H/9Kqvv3FaaNgBZA9pOmsZE/tEXDSJRkr6ybblkRZlj/Q4BcGKGU25w5NG0A32cYl6W4Ja1HJriGIICqDrpRUzkchfE7YL0WeqbtCP9l4erPvlmRTYvEdMridFovd6sdVf1BlAWkCV7qFMICv3ARBsIXWbP65aaOgg9nxZMs8z/ObrIeUh5gtw1qT4HgYaoEJeSeJ1QB/AOxekqczG+us0P9XRjzf9WgxbFPtAJ8A8Jtod6EeVxMXCrhr2z1NAe09ANxKYxgGu43VSHO9rQcvFHDn1rsXyVMHgC5ARyHuqcvVxP8FlNBNamhGAsJgpYXcfzYNwAvtKTV7zo3BhoI1C38VHDcUrEIQa2qioWBNw18F5w0FqxDEmppoKFjT8FfBeUPBKgSxpiYaCtY0/FVw3lCwCkGsqYmGgjUNfxWcNxSsQhBraqKhYE3DXwXnDQWrEMSamvi3gqzsRCxMqxegk0Xwvf6OhQyCDvf+XsKQMXW62/BCu4FT0HrhvQS7BB4lsJfRZryBV6bNG97J4Hc+u/wyCPcL6JQ0bMh9ld2GA9tnBOC7W5dd6nnxVQDWCRiqjEEz0pp956UZAfh239L5qUR6GYiHov2iwsciRluyubdnBOBk3fcfjpXGZlPcy/QAAAAASUVORK5CYII=" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="bottomleft">
								<image src="data:image/png;base64,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" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="bottomright">
								<image src="data:image/png;base64,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" style="width: 56upx;height: 56upx;"></image>
							</view>
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

						<view class="resultItemTwoContent" >
							<view class="topleft">
								<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFdklEQVRoQ+1aS4wUVRQ951V1zycGMCHGDwyCQTAoBg2JQlQSPwQEZsDQ07gwYUXiTuLwCUFH0JkGZsAhKAGiSIaPMISZgYW60oUxMTFGo8GdGxX5yYBA/6rrHfOqpyXExEmzgIL0XXSnu+pWnXPPe+/eW/UIAAMd6WeswVSC0yALkpagsbIwhKzgAzpFma+LxfDbVHtf0fkd6kw/2ADNBzkRQlKQ3Pnu2M02O3xDggkJAvnb4jWHNtP9P5hpTVuYmUZ6UkQCgCc4bhFYK8ca/J3AYDEZ9qdW9uUA8ESmdboVXxc5GVS9rHySt4Qgyljdl1/+0h8ta480RwQHMq1vgZgjy5mGoKAAYOhIAEq4qFhhiNQeMtfVvPr4ZQns37z0Bcr7gMJ4EKGggnNh5HeLjKJEErrUsubwhAjIsc7WdcZgHsQZgL4T8D3ECyCShJoAvgzIk9hjhrLdzZvLBAczqedB7gY4TsI3AL4kZQCTvNn0HK1h5TzKOBRDi1cf6qwQbDNAs8BJhnw/sDhuEvkLpau+8ZOY6BmvR8IUGnQVcuG2VHvflQpB0uyScA+I7SG9nfUsloKi54b5TbcwURSCes/dmHW53JK2/rMRwf6O1CrQtJC4T+D6i/m6o8vbP8lH83NT+n5J+yXONGWC3RWCA5nWF0nsATha4sbgbOnD1LZofsbGrilItghogrTxsp888Fpb71WH8viWpRNtyesF8aiFMqUztqdCYjCTehYweyWMJfne6fyVHSvaT2Rjw668iAD9mWWrKC0B0SRoU2Ds4SBMFNyxu6zGy2i3iKkG6CqFxY9Mo81l841stPYJetoDYCyADi+f3b4wjgQHO9MbRMwDME3QzwR+kZg3brU1vBvScxLGGOJHC/xEKKBcPtA4AHMAlgRm/MKVnngSzLSutOBsCrNBjBrOKZV85klIMkofKBmgKEAuFbgTBBQInBHRfTFXf6Ayd+MyTMuJviM1GzRTLDWdYCOgOlfJuARPcLSVZpEcLegkwZOAShA8EEUClwSek8IvgofwQyrV5/JnbCwieKJ9YWOQ9BvqPTYUgyRDFI3xkvTDMCgBDxjf9AhmqqSdxoT7FHhZefBsaIREPiyU6gL/fOnvuK2gUboYKdQD76bHw8MBUI9ZoaNUZ3cMl2ojucbi+IgEj2SWNiXl7Rc0g8SWBi/ZPXc4hcSCwQggIoJHti5tCArZ+jFeY5377RJgXeArZL5E+ePpmZ3RCituDQphl0v0twO5f4fosS3LnjahnQzgEQkJQcbQuOLZErgX4Pyow5DtCQqKKpnbiuBAZ/oNELMAPAVhFBm1S85cZ+WDcPXdJRI78Fd2qyu2byuC/Zn0RgIvAXjcNbYCfiWQhZhwfYeEQAanafH5UOH0Z8vbv4rq1NvByv1gZ3o1iEUAHpawx3o66nk8ZwtqSMCYECX3kQvDYKjl7QGn5K1qaquO6XXFNlzjCm2gyR12TW3VV4uhw3CxnVpFmGa4bgLI+DIHF6w9OBRDvFVDukZQXBQ9PAK2MWRv87pDZ6q+WgwdriPoOnoSW+9oggbshsX+O1bBGsEYzrP/g/SfOVhTsKZgvCJQG6Lx0qN6NDUFq49ZvDxqCsZLj+rR1BSsPmbx8qgpGC89qkdTU7D6mMXLo6ZgvPSoHk1NwepjFi+PmoLx0qN6NDUFq49ZvDzK20g6W9tU2Yx3Jz7ZHsik32REEJPce3j5fu+Stt6z8dLixtBUNsSuAbkI0kRB20zo7buj3k0MdLS+Q4MFApsI9ID4uHn1p6duLGbx8iqvop3p9aSaAU4C0BWGxb2vrDv2Z7yg3hiayhBdAXCuoAkQduUK2WOvtp84f2OXjJfXiDud4gW3ejT/AKmlXGYiviB6AAAAAElFTkSuQmCC" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="topright">
								<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFmUlEQVRoQ+2aW2gcVRjH//8zO3vrzWhviiD4ZlEUEQTxQZ/Uh2aTYky1DVqlSrUYk/Syqa1EtFQNFlTw+iD4oJsNaou9ULxQBS3UqsWqqKlG2ipFC+mGmmx2Z85fzmz7IjRCXbKbsIdhYXZmvm9/3/+c7ztn5xAAdmxb/oKlEgTG3blxHzVoViCjAyVIw+Pgnrt7c7+5n5Lva4vH496Nor0Z4GWGCNz9hgaCrCQDGoA6whA/ywsnWjcOHqR7eOcz7QcsmCJQPMsVfT/VTRJpGEAsUhoy1MtLswPfAlB+e1sqXvJaBWQAXc6IBkZwEYEFEFIoCzwI6jCE8Zbe3PsRyI5ty08CSIEIpxrqnD8B0UEwAcETcVwMH2ndMPgRCe18tnmOlFoncbUhmgSVAZYdPCCPoG8VGThAqwOiRlt7889XAJ9p30bCt2DJnVMuKFPdbEmiU+JWEjcBOgHpwUw2/3EEuKF5jm1K95DqBBgC2i3wGIQSqIsJXA/wBkCHJH5EodCyKfdiBPLu08uuSCaTKIbF0CvHawAH+PGwXFQ85ilcA+FREn9K9qFzgPm+ttmJlNcli3Ukfgpt2BmUMBybFVhbTl7sGzRb6TFj8LODtxaF1t6B12sCc76+ke9qS/kLYw+T2gKoIGF1S3bgQ6fgWcAeGwHqS5IrMxtzfzhbb/bdl7woOXEnoacgHCftLiuerjvA1/qWphcnZ6+V9DiJU4BdlcnmP4uyaFdbKrbIdBowC+E7Ews7mtcPDrtrb/V3zJoTlFaA3ELwVwK7AY1ksrk36krBD/qWpsNk+lEAmwCcUsjVY8Z8nU6OyY6ZVMyLP2CBdRR+pOWDZwyPO0DfKyd8a9oJboT0K8APQJ1uyQ68VneAQWJ2J6EsoBiA/QRPiJJA3wDXWOFaEqdBfkqrEZeVSCUFXEXwagiHDfSJgEKmd6C/rgCjsZQqrqDQI2ARATf5iOoAAZdiXQaMSXB53mX8c2XN3UYIozD8DNJBCmcyvblX6wown2/z/F9wHendRmiBgHkQ4pX6zJigJQSXSCoY8gtBBVfw3UwG4ISgMYiHPfJoGASl1s1nZzJTXfEm8+eSSTA/NjcRm/BRTnrGs2SIkH6Ytta7l+Qawv5oA9sZA34PPM+3YUke4jbul3TG98ZSo8Xi+Nyk7uoeHK8rBScF396Wik2YtYbYBPEIQqxo2ZyLksxkbdoA7uvvmDUelnokrCf4TYnhyruyg8dmDKAr9H7Cc0W+G8D3Cu0aMTjuKRmb8APOOktaGisXy3P9ib9H/9Kqvv3FaaNgBZA9pOmsZE/tEXDSJRkr6ybblkRZlj/Q4BcGKGU25w5NG0A32cYl6W4Ja1HJriGIICqDrpRUzkchfE7YL0WeqbtCP9l4erPvlmRTYvEdMridFovd6sdVf1BlAWkCV7qFMICv3ARBsIXWbP65aaOgg9nxZMs8z/ObrIeUh5gtw1qT4HgYaoEJeSeJ1QB/AOxekqczG+us0P9XRjzf9WgxbFPtAJ8A8Jtod6EeVxMXCrhr2z1NAe09ANxKYxgGu43VSHO9rQcvFHDn1rsXyVMHgC5ARyHuqcvVxP8FlNBNamhGAsJgpYXcfzYNwAvtKTV7zo3BhoI1C38VHDcUrEIQa2qioWBNw18F5w0FqxDEmppoKFjT8FfBeUPBKgSxpiYaCtY0/FVw3lCwCkGsqYmGgjUNfxWcNxSsQhBraqKhYE3DXwXnDQWrEMSamvi3gqzsRCxMqxegk0Xwvf6OhQyCDvf+XsKQMXW62/BCu4FT0HrhvQS7BB4lsJfRZryBV6bNG97J4Hc+u/wyCPcL6JQ0bMh9ld2GA9tnBOC7W5dd6nnxVQDWCRiqjEEz0pp956UZAfh239L5qUR6GYiHov2iwsciRluyubdnBOBk3fcfjpXGZlPcy/QAAAAASUVORK5CYII=" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="bottomleft">
								<image src="data:image/png;base64,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" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="bottomright">
								<image src="data:image/png;base64,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" style="width: 56upx;height: 56upx;"></image>
							</view>
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
						<view class="resultItemTwoContent">
							<view class="topleft">
								<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFdklEQVRoQ+1aS4wUVRQ951V1zycGMCHGDwyCQTAoBg2JQlQSPwQEZsDQ07gwYUXiTuLwCUFH0JkGZsAhKAGiSIaPMISZgYW60oUxMTFGo8GdGxX5yYBA/6rrHfOqpyXExEmzgIL0XXSnu+pWnXPPe+/eW/UIAAMd6WeswVSC0yALkpagsbIwhKzgAzpFma+LxfDbVHtf0fkd6kw/2ADNBzkRQlKQ3Pnu2M02O3xDggkJAvnb4jWHNtP9P5hpTVuYmUZ6UkQCgCc4bhFYK8ca/J3AYDEZ9qdW9uUA8ESmdboVXxc5GVS9rHySt4Qgyljdl1/+0h8ta480RwQHMq1vgZgjy5mGoKAAYOhIAEq4qFhhiNQeMtfVvPr4ZQns37z0Bcr7gMJ4EKGggnNh5HeLjKJEErrUsubwhAjIsc7WdcZgHsQZgL4T8D3ECyCShJoAvgzIk9hjhrLdzZvLBAczqedB7gY4TsI3AL4kZQCTvNn0HK1h5TzKOBRDi1cf6qwQbDNAs8BJhnw/sDhuEvkLpau+8ZOY6BmvR8IUGnQVcuG2VHvflQpB0uyScA+I7SG9nfUsloKi54b5TbcwURSCes/dmHW53JK2/rMRwf6O1CrQtJC4T+D6i/m6o8vbP8lH83NT+n5J+yXONGWC3RWCA5nWF0nsATha4sbgbOnD1LZofsbGrilItghogrTxsp888Fpb71WH8viWpRNtyesF8aiFMqUztqdCYjCTehYweyWMJfne6fyVHSvaT2Rjw668iAD9mWWrKC0B0SRoU2Ds4SBMFNyxu6zGy2i3iKkG6CqFxY9Mo81l841stPYJetoDYCyADi+f3b4wjgQHO9MbRMwDME3QzwR+kZg3brU1vBvScxLGGOJHC/xEKKBcPtA4AHMAlgRm/MKVnngSzLSutOBsCrNBjBrOKZV85klIMkofKBmgKEAuFbgTBBQInBHRfTFXf6Ayd+MyTMuJviM1GzRTLDWdYCOgOlfJuARPcLSVZpEcLegkwZOAShA8EEUClwSek8IvgofwQyrV5/JnbCwieKJ9YWOQ9BvqPTYUgyRDFI3xkvTDMCgBDxjf9AhmqqSdxoT7FHhZefBsaIREPiyU6gL/fOnvuK2gUboYKdQD76bHw8MBUI9ZoaNUZ3cMl2ojucbi+IgEj2SWNiXl7Rc0g8SWBi/ZPXc4hcSCwQggIoJHti5tCArZ+jFeY5377RJgXeArZL5E+ePpmZ3RCituDQphl0v0twO5f4fosS3LnjahnQzgEQkJQcbQuOLZErgX4Pyow5DtCQqKKpnbiuBAZ/oNELMAPAVhFBm1S85cZ+WDcPXdJRI78Fd2qyu2byuC/Zn0RgIvAXjcNbYCfiWQhZhwfYeEQAanafH5UOH0Z8vbv4rq1NvByv1gZ3o1iEUAHpawx3o66nk8ZwtqSMCYECX3kQvDYKjl7QGn5K1qaquO6XXFNlzjCm2gyR12TW3VV4uhw3CxnVpFmGa4bgLI+DIHF6w9OBRDvFVDukZQXBQ9PAK2MWRv87pDZ6q+WgwdriPoOnoSW+9oggbshsX+O1bBGsEYzrP/g/SfOVhTsKZgvCJQG6Lx0qN6NDUFq49ZvDxqCsZLj+rR1BSsPmbx8qgpGC89qkdTU7D6mMXLo6ZgvPSoHk1NwepjFi+PmoLx0qN6NDUFq49ZvDzK20g6W9tU2Yx3Jz7ZHsik32REEJPce3j5fu+Stt6z8dLixtBUNsSuAbkI0kRB20zo7buj3k0MdLS+Q4MFApsI9ID4uHn1p6duLGbx8iqvop3p9aSaAU4C0BWGxb2vrDv2Z7yg3hiayhBdAXCuoAkQduUK2WOvtp84f2OXjJfXiDud4gW3ejT/AKmlXGYiviB6AAAAAElFTkSuQmCC" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="topright">
								<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFmUlEQVRoQ+2aW2gcVRjH//8zO3vrzWhviiD4ZlEUEQTxQZ/Uh2aTYky1DVqlSrUYk/Syqa1EtFQNFlTw+iD4oJsNaou9ULxQBS3UqsWqqKlG2ipFC+mGmmx2Z85fzmz7IjRCXbKbsIdhYXZmvm9/3/+c7ztn5xAAdmxb/oKlEgTG3blxHzVoViCjAyVIw+Pgnrt7c7+5n5Lva4vH496Nor0Z4GWGCNz9hgaCrCQDGoA6whA/ywsnWjcOHqR7eOcz7QcsmCJQPMsVfT/VTRJpGEAsUhoy1MtLswPfAlB+e1sqXvJaBWQAXc6IBkZwEYEFEFIoCzwI6jCE8Zbe3PsRyI5ty08CSIEIpxrqnD8B0UEwAcETcVwMH2ndMPgRCe18tnmOlFoncbUhmgSVAZYdPCCPoG8VGThAqwOiRlt7889XAJ9p30bCt2DJnVMuKFPdbEmiU+JWEjcBOgHpwUw2/3EEuKF5jm1K95DqBBgC2i3wGIQSqIsJXA/wBkCHJH5EodCyKfdiBPLu08uuSCaTKIbF0CvHawAH+PGwXFQ85ilcA+FREn9K9qFzgPm+ttmJlNcli3Ukfgpt2BmUMBybFVhbTl7sGzRb6TFj8LODtxaF1t6B12sCc76+ke9qS/kLYw+T2gKoIGF1S3bgQ6fgWcAeGwHqS5IrMxtzfzhbb/bdl7woOXEnoacgHCftLiuerjvA1/qWphcnZ6+V9DiJU4BdlcnmP4uyaFdbKrbIdBowC+E7Ews7mtcPDrtrb/V3zJoTlFaA3ELwVwK7AY1ksrk36krBD/qWpsNk+lEAmwCcUsjVY8Z8nU6OyY6ZVMyLP2CBdRR+pOWDZwyPO0DfKyd8a9oJboT0K8APQJ1uyQ68VneAQWJ2J6EsoBiA/QRPiJJA3wDXWOFaEqdBfkqrEZeVSCUFXEXwagiHDfSJgEKmd6C/rgCjsZQqrqDQI2ARATf5iOoAAZdiXQaMSXB53mX8c2XN3UYIozD8DNJBCmcyvblX6wown2/z/F9wHendRmiBgHkQ4pX6zJigJQSXSCoY8gtBBVfw3UwG4ISgMYiHPfJoGASl1s1nZzJTXfEm8+eSSTA/NjcRm/BRTnrGs2SIkH6Ytta7l+Qawv5oA9sZA34PPM+3YUke4jbul3TG98ZSo8Xi+Nyk7uoeHK8rBScF396Wik2YtYbYBPEIQqxo2ZyLksxkbdoA7uvvmDUelnokrCf4TYnhyruyg8dmDKAr9H7Cc0W+G8D3Cu0aMTjuKRmb8APOOktaGisXy3P9ib9H/9Kqvv3FaaNgBZA9pOmsZE/tEXDSJRkr6ybblkRZlj/Q4BcGKGU25w5NG0A32cYl6W4Ja1HJriGIICqDrpRUzkchfE7YL0WeqbtCP9l4erPvlmRTYvEdMridFovd6sdVf1BlAWkCV7qFMICv3ARBsIXWbP65aaOgg9nxZMs8z/ObrIeUh5gtw1qT4HgYaoEJeSeJ1QB/AOxekqczG+us0P9XRjzf9WgxbFPtAJ8A8Jtod6EeVxMXCrhr2z1NAe09ANxKYxgGu43VSHO9rQcvFHDn1rsXyVMHgC5ARyHuqcvVxP8FlNBNamhGAsJgpYXcfzYNwAvtKTV7zo3BhoI1C38VHDcUrEIQa2qioWBNw18F5w0FqxDEmppoKFjT8FfBeUPBKgSxpiYaCtY0/FVw3lCwCkGsqYmGgjUNfxWcNxSsQhBraqKhYE3DXwXnDQWrEMSamvi3gqzsRCxMqxegk0Xwvf6OhQyCDvf+XsKQMXW62/BCu4FT0HrhvQS7BB4lsJfRZryBV6bNG97J4Hc+u/wyCPcL6JQ0bMh9ld2GA9tnBOC7W5dd6nnxVQDWCRiqjEEz0pp956UZAfh239L5qUR6GYiHov2iwsciRluyubdnBOBk3fcfjpXGZlPcy/QAAAAASUVORK5CYII=" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="bottomleft">
								<image src="data:image/png;base64,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" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="bottomright">
								<image src="data:image/png;base64,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" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="resultItemTwoText" style="text-indent: 2em;" v-if="wxjkArr.length==0">
								一切正常 五行齐全
							</view>
							<view class="resultItemTwoText" style="text-indent: 0;" v-else>
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
					<view class="resultItemOneWarp" style="margin-bottom: 20upx;" v-if="liunianFlag">
						<view class="resultItemOneTitle" style="width: 340upx;">
							流年
						</view>
						<view class="resultItemOneContent">
							<view class="topleft">
								<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFdklEQVRoQ+1aS4wUVRQ951V1zycGMCHGDwyCQTAoBg2JQlQSPwQEZsDQ07gwYUXiTuLwCUFH0JkGZsAhKAGiSIaPMISZgYW60oUxMTFGo8GdGxX5yYBA/6rrHfOqpyXExEmzgIL0XXSnu+pWnXPPe+/eW/UIAAMd6WeswVSC0yALkpagsbIwhKzgAzpFma+LxfDbVHtf0fkd6kw/2ADNBzkRQlKQ3Pnu2M02O3xDggkJAvnb4jWHNtP9P5hpTVuYmUZ6UkQCgCc4bhFYK8ca/J3AYDEZ9qdW9uUA8ESmdboVXxc5GVS9rHySt4Qgyljdl1/+0h8ta480RwQHMq1vgZgjy5mGoKAAYOhIAEq4qFhhiNQeMtfVvPr4ZQns37z0Bcr7gMJ4EKGggnNh5HeLjKJEErrUsubwhAjIsc7WdcZgHsQZgL4T8D3ECyCShJoAvgzIk9hjhrLdzZvLBAczqedB7gY4TsI3AL4kZQCTvNn0HK1h5TzKOBRDi1cf6qwQbDNAs8BJhnw/sDhuEvkLpau+8ZOY6BmvR8IUGnQVcuG2VHvflQpB0uyScA+I7SG9nfUsloKi54b5TbcwURSCes/dmHW53JK2/rMRwf6O1CrQtJC4T+D6i/m6o8vbP8lH83NT+n5J+yXONGWC3RWCA5nWF0nsATha4sbgbOnD1LZofsbGrilItghogrTxsp888Fpb71WH8viWpRNtyesF8aiFMqUztqdCYjCTehYweyWMJfne6fyVHSvaT2Rjw668iAD9mWWrKC0B0SRoU2Ds4SBMFNyxu6zGy2i3iKkG6CqFxY9Mo81l841stPYJetoDYCyADi+f3b4wjgQHO9MbRMwDME3QzwR+kZg3brU1vBvScxLGGOJHC/xEKKBcPtA4AHMAlgRm/MKVnngSzLSutOBsCrNBjBrOKZV85klIMkofKBmgKEAuFbgTBBQInBHRfTFXf6Ayd+MyTMuJviM1GzRTLDWdYCOgOlfJuARPcLSVZpEcLegkwZOAShA8EEUClwSek8IvgofwQyrV5/JnbCwieKJ9YWOQ9BvqPTYUgyRDFI3xkvTDMCgBDxjf9AhmqqSdxoT7FHhZefBsaIREPiyU6gL/fOnvuK2gUboYKdQD76bHw8MBUI9ZoaNUZ3cMl2ojucbi+IgEj2SWNiXl7Rc0g8SWBi/ZPXc4hcSCwQggIoJHti5tCArZ+jFeY5377RJgXeArZL5E+ePpmZ3RCituDQphl0v0twO5f4fosS3LnjahnQzgEQkJQcbQuOLZErgX4Pyow5DtCQqKKpnbiuBAZ/oNELMAPAVhFBm1S85cZ+WDcPXdJRI78Fd2qyu2byuC/Zn0RgIvAXjcNbYCfiWQhZhwfYeEQAanafH5UOH0Z8vbv4rq1NvByv1gZ3o1iEUAHpawx3o66nk8ZwtqSMCYECX3kQvDYKjl7QGn5K1qaquO6XXFNlzjCm2gyR12TW3VV4uhw3CxnVpFmGa4bgLI+DIHF6w9OBRDvFVDukZQXBQ9PAK2MWRv87pDZ6q+WgwdriPoOnoSW+9oggbshsX+O1bBGsEYzrP/g/SfOVhTsKZgvCJQG6Lx0qN6NDUFq49ZvDxqCsZLj+rR1BSsPmbx8qgpGC89qkdTU7D6mMXLo6ZgvPSoHk1NwepjFi+PmoLx0qN6NDUFq49ZvDzK20g6W9tU2Yx3Jz7ZHsik32REEJPce3j5fu+Stt6z8dLixtBUNsSuAbkI0kRB20zo7buj3k0MdLS+Q4MFApsI9ID4uHn1p6duLGbx8iqvop3p9aSaAU4C0BWGxb2vrDv2Z7yg3hiayhBdAXCuoAkQduUK2WOvtp84f2OXjJfXiDud4gW3ejT/AKmlXGYiviB6AAAAAElFTkSuQmCC" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="topright">
								<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFmUlEQVRoQ+2aW2gcVRjH//8zO3vrzWhviiD4ZlEUEQTxQZ/Uh2aTYky1DVqlSrUYk/Syqa1EtFQNFlTw+iD4oJsNaou9ULxQBS3UqsWqqKlG2ipFC+mGmmx2Z85fzmz7IjRCXbKbsIdhYXZmvm9/3/+c7ztn5xAAdmxb/oKlEgTG3blxHzVoViCjAyVIw+Pgnrt7c7+5n5Lva4vH496Nor0Z4GWGCNz9hgaCrCQDGoA6whA/ywsnWjcOHqR7eOcz7QcsmCJQPMsVfT/VTRJpGEAsUhoy1MtLswPfAlB+e1sqXvJaBWQAXc6IBkZwEYEFEFIoCzwI6jCE8Zbe3PsRyI5ty08CSIEIpxrqnD8B0UEwAcETcVwMH2ndMPgRCe18tnmOlFoncbUhmgSVAZYdPCCPoG8VGThAqwOiRlt7889XAJ9p30bCt2DJnVMuKFPdbEmiU+JWEjcBOgHpwUw2/3EEuKF5jm1K95DqBBgC2i3wGIQSqIsJXA/wBkCHJH5EodCyKfdiBPLu08uuSCaTKIbF0CvHawAH+PGwXFQ85ilcA+FREn9K9qFzgPm+ttmJlNcli3Ukfgpt2BmUMBybFVhbTl7sGzRb6TFj8LODtxaF1t6B12sCc76+ke9qS/kLYw+T2gKoIGF1S3bgQ6fgWcAeGwHqS5IrMxtzfzhbb/bdl7woOXEnoacgHCftLiuerjvA1/qWphcnZ6+V9DiJU4BdlcnmP4uyaFdbKrbIdBowC+E7Ews7mtcPDrtrb/V3zJoTlFaA3ELwVwK7AY1ksrk36krBD/qWpsNk+lEAmwCcUsjVY8Z8nU6OyY6ZVMyLP2CBdRR+pOWDZwyPO0DfKyd8a9oJboT0K8APQJ1uyQ68VneAQWJ2J6EsoBiA/QRPiJJA3wDXWOFaEqdBfkqrEZeVSCUFXEXwagiHDfSJgEKmd6C/rgCjsZQqrqDQI2ARATf5iOoAAZdiXQaMSXB53mX8c2XN3UYIozD8DNJBCmcyvblX6wown2/z/F9wHendRmiBgHkQ4pX6zJigJQSXSCoY8gtBBVfw3UwG4ISgMYiHPfJoGASl1s1nZzJTXfEm8+eSSTA/NjcRm/BRTnrGs2SIkH6Ytta7l+Qawv5oA9sZA34PPM+3YUke4jbul3TG98ZSo8Xi+Nyk7uoeHK8rBScF396Wik2YtYbYBPEIQqxo2ZyLksxkbdoA7uvvmDUelnokrCf4TYnhyruyg8dmDKAr9H7Cc0W+G8D3Cu0aMTjuKRmb8APOOktaGisXy3P9ib9H/9Kqvv3FaaNgBZA9pOmsZE/tEXDSJRkr6ybblkRZlj/Q4BcGKGU25w5NG0A32cYl6W4Ja1HJriGIICqDrpRUzkchfE7YL0WeqbtCP9l4erPvlmRTYvEdMridFovd6sdVf1BlAWkCV7qFMICv3ARBsIXWbP65aaOgg9nxZMs8z/ObrIeUh5gtw1qT4HgYaoEJeSeJ1QB/AOxekqczG+us0P9XRjzf9WgxbFPtAJ8A8Jtod6EeVxMXCrhr2z1NAe09ANxKYxgGu43VSHO9rQcvFHDn1rsXyVMHgC5ARyHuqcvVxP8FlNBNamhGAsJgpYXcfzYNwAvtKTV7zo3BhoI1C38VHDcUrEIQa2qioWBNw18F5w0FqxDEmppoKFjT8FfBeUPBKgSxpiYaCtY0/FVw3lCwCkGsqYmGgjUNfxWcNxSsQhBraqKhYE3DXwXnDQWrEMSamvi3gqzsRCxMqxegk0Xwvf6OhQyCDvf+XsKQMXW62/BCu4FT0HrhvQS7BB4lsJfRZryBV6bNG97J4Hc+u/wyCPcL6JQ0bMh9ld2GA9tnBOC7W5dd6nnxVQDWCRiqjEEz0pp956UZAfh239L5qUR6GYiHov2iwsciRluyubdnBOBk3fcfjpXGZlPcy/QAAAAASUVORK5CYII=" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="bottomleft">
								<image src="data:image/png;base64,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" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="bottomright">
								<image src="data:image/png;base64,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" style="width: 56upx;height: 56upx;"></image>
							</view>
							<view class="lnTitleWarp">
								<view style="margin-right: 10upx;user-select: text;-webkit-user-select: text;">流年数字密码:</view>
								<view style="user-select: text;-webkit-user-select: text;">{{lnArr.code}}</view>
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
						<view class="bottomBtn" @click="showDateDialog(1, 'number')">测算流年</view>
						<zan-calendar
							:date="date" 
							:time="time" 
							:isHourShow="isHourShow" 
							:isMinShow="isMinShow" 
							:show="dateDialog" 
							:lunarType = "lunarType"
							@closeDialog="closeDialog" 
							@confirmDialog="confirmDialog"
						>
						</zan-calendar>
					</view>
				</view>

			</view>
		<!-- </html2canvas> -->
		<!-- 分享弹窗 -->
		<uni-popup ref="sharepopup" type="bottom">
			<share-btn></share-btn>
		</uni-popup>
		<!-- <uni-popup ref="lnCode" :custom="true">
			<view class="uni-share">
				<view class="uni-share-content">
					<view class="uni-share-title" style="color: #331C01;">流年分界点：前一年的公历10月1号起到本年公历9月30日止</view>
					<view class="resultItemOneContent">
						<view class="topleft">
							<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFdklEQVRoQ+1aS4wUVRQ951V1zycGMCHGDwyCQTAoBg2JQlQSPwQEZsDQ07gwYUXiTuLwCUFH0JkGZsAhKAGiSIaPMISZgYW60oUxMTFGo8GdGxX5yYBA/6rrHfOqpyXExEmzgIL0XXSnu+pWnXPPe+/eW/UIAAMd6WeswVSC0yALkpagsbIwhKzgAzpFma+LxfDbVHtf0fkd6kw/2ADNBzkRQlKQ3Pnu2M02O3xDggkJAvnb4jWHNtP9P5hpTVuYmUZ6UkQCgCc4bhFYK8ca/J3AYDEZ9qdW9uUA8ESmdboVXxc5GVS9rHySt4Qgyljdl1/+0h8ta480RwQHMq1vgZgjy5mGoKAAYOhIAEq4qFhhiNQeMtfVvPr4ZQns37z0Bcr7gMJ4EKGggnNh5HeLjKJEErrUsubwhAjIsc7WdcZgHsQZgL4T8D3ECyCShJoAvgzIk9hjhrLdzZvLBAczqedB7gY4TsI3AL4kZQCTvNn0HK1h5TzKOBRDi1cf6qwQbDNAs8BJhnw/sDhuEvkLpau+8ZOY6BmvR8IUGnQVcuG2VHvflQpB0uyScA+I7SG9nfUsloKi54b5TbcwURSCes/dmHW53JK2/rMRwf6O1CrQtJC4T+D6i/m6o8vbP8lH83NT+n5J+yXONGWC3RWCA5nWF0nsATha4sbgbOnD1LZofsbGrilItghogrTxsp888Fpb71WH8viWpRNtyesF8aiFMqUztqdCYjCTehYweyWMJfne6fyVHSvaT2Rjw668iAD9mWWrKC0B0SRoU2Ds4SBMFNyxu6zGy2i3iKkG6CqFxY9Mo81l841stPYJetoDYCyADi+f3b4wjgQHO9MbRMwDME3QzwR+kZg3brU1vBvScxLGGOJHC/xEKKBcPtA4AHMAlgRm/MKVnngSzLSutOBsCrNBjBrOKZV85klIMkofKBmgKEAuFbgTBBQInBHRfTFXf6Ayd+MyTMuJviM1GzRTLDWdYCOgOlfJuARPcLSVZpEcLegkwZOAShA8EEUClwSek8IvgofwQyrV5/JnbCwieKJ9YWOQ9BvqPTYUgyRDFI3xkvTDMCgBDxjf9AhmqqSdxoT7FHhZefBsaIREPiyU6gL/fOnvuK2gUboYKdQD76bHw8MBUI9ZoaNUZ3cMl2ojucbi+IgEj2SWNiXl7Rc0g8SWBi/ZPXc4hcSCwQggIoJHti5tCArZ+jFeY5377RJgXeArZL5E+ePpmZ3RCituDQphl0v0twO5f4fosS3LnjahnQzgEQkJQcbQuOLZErgX4Pyow5DtCQqKKpnbiuBAZ/oNELMAPAVhFBm1S85cZ+WDcPXdJRI78Fd2qyu2byuC/Zn0RgIvAXjcNbYCfiWQhZhwfYeEQAanafH5UOH0Z8vbv4rq1NvByv1gZ3o1iEUAHpawx3o66nk8ZwtqSMCYECX3kQvDYKjl7QGn5K1qaquO6XXFNlzjCm2gyR12TW3VV4uhw3CxnVpFmGa4bgLI+DIHF6w9OBRDvFVDukZQXBQ9PAK2MWRv87pDZ6q+WgwdriPoOnoSW+9oggbshsX+O1bBGsEYzrP/g/SfOVhTsKZgvCJQG6Lx0qN6NDUFq49ZvDxqCsZLj+rR1BSsPmbx8qgpGC89qkdTU7D6mMXLo6ZgvPSoHk1NwepjFi+PmoLx0qN6NDUFq49ZvDzK20g6W9tU2Yx3Jz7ZHsik32REEJPce3j5fu+Stt6z8dLixtBUNsSuAbkI0kRB20zo7buj3k0MdLS+Q4MFApsI9ID4uHn1p6duLGbx8iqvop3p9aSaAU4C0BWGxb2vrDv2Z7yg3hiayhBdAXCuoAkQduUK2WOvtp84f2OXjJfXiDud4gW3ejT/AKmlXGYiviB6AAAAAElFTkSuQmCC" style="width: 56upx;height: 56upx;"></image>
						</view>
						<view class="topright">
							<image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFmUlEQVRoQ+2aW2gcVRjH//8zO3vrzWhviiD4ZlEUEQTxQZ/Uh2aTYky1DVqlSrUYk/Syqa1EtFQNFlTw+iD4oJsNaou9ULxQBS3UqsWqqKlG2ipFC+mGmmx2Z85fzmz7IjRCXbKbsIdhYXZmvm9/3/+c7ztn5xAAdmxb/oKlEgTG3blxHzVoViCjAyVIw+Pgnrt7c7+5n5Lva4vH496Nor0Z4GWGCNz9hgaCrCQDGoA6whA/ywsnWjcOHqR7eOcz7QcsmCJQPMsVfT/VTRJpGEAsUhoy1MtLswPfAlB+e1sqXvJaBWQAXc6IBkZwEYEFEFIoCzwI6jCE8Zbe3PsRyI5ty08CSIEIpxrqnD8B0UEwAcETcVwMH2ndMPgRCe18tnmOlFoncbUhmgSVAZYdPCCPoG8VGThAqwOiRlt7889XAJ9p30bCt2DJnVMuKFPdbEmiU+JWEjcBOgHpwUw2/3EEuKF5jm1K95DqBBgC2i3wGIQSqIsJXA/wBkCHJH5EodCyKfdiBPLu08uuSCaTKIbF0CvHawAH+PGwXFQ85ilcA+FREn9K9qFzgPm+ttmJlNcli3Ukfgpt2BmUMBybFVhbTl7sGzRb6TFj8LODtxaF1t6B12sCc76+ke9qS/kLYw+T2gKoIGF1S3bgQ6fgWcAeGwHqS5IrMxtzfzhbb/bdl7woOXEnoacgHCftLiuerjvA1/qWphcnZ6+V9DiJU4BdlcnmP4uyaFdbKrbIdBowC+E7Ews7mtcPDrtrb/V3zJoTlFaA3ELwVwK7AY1ksrk36krBD/qWpsNk+lEAmwCcUsjVY8Z8nU6OyY6ZVMyLP2CBdRR+pOWDZwyPO0DfKyd8a9oJboT0K8APQJ1uyQ68VneAQWJ2J6EsoBiA/QRPiJJA3wDXWOFaEqdBfkqrEZeVSCUFXEXwagiHDfSJgEKmd6C/rgCjsZQqrqDQI2ARATf5iOoAAZdiXQaMSXB53mX8c2XN3UYIozD8DNJBCmcyvblX6wown2/z/F9wHendRmiBgHkQ4pX6zJigJQSXSCoY8gtBBVfw3UwG4ISgMYiHPfJoGASl1s1nZzJTXfEm8+eSSTA/NjcRm/BRTnrGs2SIkH6Ytta7l+Qawv5oA9sZA34PPM+3YUke4jbul3TG98ZSo8Xi+Nyk7uoeHK8rBScF396Wik2YtYbYBPEIQqxo2ZyLksxkbdoA7uvvmDUelnokrCf4TYnhyruyg8dmDKAr9H7Cc0W+G8D3Cu0aMTjuKRmb8APOOktaGisXy3P9ib9H/9Kqvv3FaaNgBZA9pOmsZE/tEXDSJRkr6ybblkRZlj/Q4BcGKGU25w5NG0A32cYl6W4Ja1HJriGIICqDrpRUzkchfE7YL0WeqbtCP9l4erPvlmRTYvEdMridFovd6sdVf1BlAWkCV7qFMICv3ARBsIXWbP65aaOgg9nxZMs8z/ObrIeUh5gtw1qT4HgYaoEJeSeJ1QB/AOxekqczG+us0P9XRjzf9WgxbFPtAJ8A8Jtod6EeVxMXCrhr2z1NAe09ANxKYxgGu43VSHO9rQcvFHDn1rsXyVMHgC5ARyHuqcvVxP8FlNBNamhGAsJgpYXcfzYNwAvtKTV7zo3BhoI1C38VHDcUrEIQa2qioWBNw18F5w0FqxDEmppoKFjT8FfBeUPBKgSxpiYaCtY0/FVw3lCwCkGsqYmGgjUNfxWcNxSsQhBraqKhYE3DXwXnDQWrEMSamvi3gqzsRCxMqxegk0Xwvf6OhQyCDvf+XsKQMXW62/BCu4FT0HrhvQS7BB4lsJfRZryBV6bNG97J4Hc+u/wyCPcL6JQ0bMh9ld2GA9tnBOC7W5dd6nnxVQDWCRiqjEEz0pp956UZAfh239L5qUR6GYiHov2iwsciRluyubdnBOBk3fcfjpXGZlPcy/QAAAAASUVORK5CYII=" style="width: 56upx;height: 56upx;"></image>
						</view>
						<view class="bottomleft">
							<image src="data:image/png;base64,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" style="width: 56upx;height: 56upx;"></image>
						</view>
						<view class="bottomright">
							<image src="data:image/png;base64,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" style="width: 56upx;height: 56upx;"></image>
						</view>
						<view class="lnTitleWarp">
							<view style="margin-right: 10upx;user-select: text;-webkit-user-select: text;">流年数字密码:</view>
							<view style="user-select: text;-webkit-user-select: text;">{{newLnArr.code}}</view>
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
		</uni-popup> -->
	</view>
</template>
<script>
	import {
		base64ToPath,
		pathToBase64
	} from '@/static/libs/image-tools.js';
	// import html2canvas from '../../components/jcboy-html2canvas/html2canvas.vue'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import shareBtn from '@/components/share-btn/share-btn.vue'
	import saveHeadImgFile from "../../common/baocun.js"
	import zanCalendar from '../..//components/quick-calendar/calendar'
	export default {
		components: {
			// html2canvas,
			uniPopup,
			zanCalendar,
			shareBtn
		},
		data() {
			return {
				liunianFlag:false,//流年的显示
				lunarDate:'',//农历(阴历)
				solarDate:'',//公历(阳历)
				date: '2019-01-22',//日期
				time: '13-26',//时间
				isHourShow: false,//是否显示时辰（小时）
				isMinShow: false,//是否显示分钟
				lunarType: 'number', //年月日显示方式
				dateDialog: false, //是否弹出日历组件
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
				orderId:''//订单ID
			}
		},
		onNavigationBarButtonTap(e) {
			// this.handleDownloadQrIMg() //
			this.shareOn()
		},
		onLoad: function(options) {
			this.userName = uni.getStorageSync("userName") //用户名字
			this.gender = uni.getStorageSync("gender") //用户性别
			this.lunarDate = uni.getStorageSync("lunarDate") //农历(阴历)
			this.solarDate = uni.getStorageSync("solarDate") //公历(阳历)
			this.orderId = uni.getStorageSync("orderId") //订单ID
			var timeData = uni.getStorageSync("data")
			if (!this.orderId) {
				uni.redirectTo({
					url: '../active/active'
				})
			}
			this.splitMethod(parseInt(timeData))
			this._detailById()//查询测算订单接口
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
			shareOn(){
				this.$refs.sharepopup.open();
			},
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
				
				const id = this.orderId //订单ID
				let params = {
					id
				}
				this.$ajax.post({
					url: this.$service.api_lists.detailById,
					data: params
				}).then((res) => {
					if (res.data.code == 200) {
						//初始化信息
						var newData = JSON.parse(res.data.data.result)
						this.lnArr = newData.ln //流年
						this.liunianFlag = true
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
			//展示三种不同的选择调度
			showDateDialog: function(type, lunarType) {
				switch(type){
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
				var a = e.date
				var b = a.replace(/[^\d]/g, '')
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
				this.dateDialog = false
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
								// console.log('saveHeadImgFile', url)
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
			// renderFinish(filePath) {
			// 	this.filePath = filePath;
			// 	// console.log("filePath", filePath)
			// 	console.log(1111111111)
			// },
			//查询测算订单接口
			_detailById() {
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
				const id = this.orderId //订单ID
				let params = {
					id
				}
				this.$ajax.post({
					url: this.$service.api_lists.detailById,
					data: params
				}).then((res) => {
					if (res.data.code == 200) {
						//初始化信息
						var newData = JSON.parse(res.data.data.result)
						if (!newData) {
							uni.redirectTo({
							    url: '../active/active'
							})
						}
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
	@import url("../../common/index.css");
	.topleft{
		position: absolute;
		left: 0;
		top: 0;
	}
	.topright{
		position: absolute;
		right: 0;
		top: 0;
	}
	.bottomleft{
		position: absolute;
		bottom: -8upx;
		left: 0;
	}
	.bottomright{
		position: absolute;
		bottom: -8upx;
		right: 0;
	}
	.uni-page-head-btn{
		text-align: center;
	}
	.resultItemOneTitle, .resultItemOneText1, .resultItemOneText2,.resultItemTwoText{
		user-select: text;
		-webkit-user-select: text;
	}
	
</style>
