<script>
	import uniInPageInit from '@/uni_modules/uni-id-pages/init.js'
	import routerInterception from './utils/storage.js';
	export default {
		onLaunch: function() {
			routerInterception();
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
