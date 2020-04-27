<template>
	<view class="content">
		<van-tabs :active="activeindex">
			<van-tab title="关注">关注</van-tab>
			<van-tab title="推荐">推荐</van-tab>
		</van-tabs>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'index',
				activeindex:1
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
