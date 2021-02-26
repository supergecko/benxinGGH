// router/modules/home.js
const home = [
	{
        //注意：path必须跟pages.json中的地址对应，最前面别忘了加'/'哦
      path: '/pages/active/active',
      aliasPath:'/',  //对于h5端你必须在首页加上aliasPath并设置为/
      name: 'index',
        meta: {
	        title: '首页',
	    },
    },
    {
	    path: '/pages/message/message',
        name: 'list',
        meta: {
	        title: '列表',
	    },
	},
]
export default home