// // 管理账号信息
// const USERS_KEY = 'USERS_KEY';
// const STATE_KEY = 'STATE_KEY';

// const getUsers = function () {
//     let ret = '';
//     ret = uni.getStorageSync(USERS_KEY);
//     if (!ret) {
//         ret = '[]';
//     }
//     return JSON.parse(ret);
// }

// const addUser = function (userInfo) {
//     let users = getUsers();
//     users.push({
//         account: userInfo.account,
//         password: userInfo.password
//     });
//     uni.setStorageSync(USERS_KEY, JSON.stringify(users));
// }

// export default {
//     getUsers,
//     addUser
// }
// 管理账号信息
const api_baseurl = 'https://api.benxinzixun.com/api';//线上

const api_lists = {
	"resulContent":'/app/ceSuanOrder/create',//创建测算订单接口
	"pay":"/app/ceSuanOrder/pay",//支付测算订单接口
	"detailById":"/app/ceSuanOrder/detailById" ,//查询测算订单接口
	"getSign":"/app/wechat/getSign" //微信支付获取签名
}

export default {
	api_baseurl,
	api_lists
}
