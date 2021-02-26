// router/index.js

import modules from './modules'
import Vue from 'vue'
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
import Router from 'uni-simple-router'

Vue.use(Router)
//初始化
const router = new Router({
	routes: [...modules] //路由表
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log("全局路由前置守卫")
	// if (typeof to.query.openid !== 'undefined') {
	// 	localStorage.setItem('openid', to.query.openid)
	// }
	// const openid = localStorage.getItem('openid')
	// if (!openid) {
	// 	if (to.path === '/pages/active/active') {
	// 		next()
	// 	} else {
	// 		localStorage.setItem('nowUrl', to.fullPath) // 当前页url与参数放入缓存
	// 		next('/pages/active/active')
	// 	}
	// 	return
	// }
	next()
})
// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log("全局路由后置守卫")
	// next()
})
export default router;
