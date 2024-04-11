//设置禁止通过url直接跳转页面路径
const BLACKLIST = [
	"/pages/index/index",
];
//所需监听路由的方法
const list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];

//判断跳转权限(返回true或者false)：不在url黑名单或者缓存中有的
function hasPermission(url) {
	//在黑名单中有或者缓存中不存在返回false
	if (BLACKLIST.indexOf(url) !== -1 || uni.getStorageSync("TOKEN")) {
		return false;
	}
	return true;
};

//遍历监听路由方法，调用拦截器，对请求url进行处置
export default async function() {
list.forEach((item)=>{
	uni.addInterceptor(item, {
		//页面跳转前拦截并处置
		invoke(e) {
		    // request 触发前拼接 url 
		    console.log("invoke",e)
		  },
		  success(args) {
		    // 请求成功后，修改code值为1
		    console.log("success",args)
		  }, 
		  fail(err) {
		    console.log('interceptor-fail',err)
		  }
	})

})
}


