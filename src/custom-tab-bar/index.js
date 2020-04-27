Component({
	data: {
		active: 0,
		list: [
			{
				icon: 'wap-home-o',
				text: '主页',
				url: '/pages/index/index'
			},
			{
				icon: 'plus',
				text: '发布',
				url: '/pages/publish/publish'
			},
			{
				icon: 'contact',
				text: '我的',
				url: '/pages/my/my'
			}
		]
	},

	methods: {
		onChange(event) {
			this.setData({ active: event.detail });
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		}
	}
});
