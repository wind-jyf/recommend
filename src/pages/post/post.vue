<template>
	<view class="content">
		帖子详情页面
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '详情'
			}
		},
		onLoad() {

		},
		onShow(){
			const page = this.$mp.page;
            if (typeof page.getTabBar === 'function' &&  page.getTabBar()){  
                page.getTabBar().setData({  
					active:0
				}) 
            }
		},
		methods: {
			
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
