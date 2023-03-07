<template>
	<view class="home">
		<scroll-view scroll-x class="navscroll">
			<view class="itemScroll" :class="{avtive:item.isClick}" v-for="item in navList" :key="item.id" @click="clickNav(item)">{{item.classname}}</view>
		</scroll-view>
	<view class="content">
		<view class="row" v-for="ite in newsList" :key="ite.id">
			<newsbos :item="ite" @click.native="goDetail(ite)"></newsbos>
		</view>
	</view>
	<view class="loading" v-if="newsList.length">
		<view v-if="loading == 1">数据加载中...</view>
		<view v-if="loading == 2">没有更多了</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [],
				newsList:[],
				currentPage:1,
				loading:0
			}
		},
		onLoad() {
			this.getNavData()
		},
		onReachBottom(){
			if(this.loading == 2){
				return
			}
			this.currentPage++;
			this.loading = 1;
			let item = this.navList.filter(item=>{return item.isClick})
			this.getNewsData(item[0])
		},
		methods: {
			// 获取导航列表数据
			getNavData() {
				const vm = this;
				uni.request({
					url: "https://ku.qingnian8.com/dataApi/news/navlist.php",
					success: (res) => {
						if(res.statusCode === 200){
							res.data.forEach((item, index) => {
								if (index === 0) {
									item.isClick = true
									vm.getNewsData(item)
								} else {
									item.isClick = false;
								}
							
							})
							vm.navList = res.data
						}
						
					}
				})
			},
		
		    //点击头部导航
			clickNav(item){
				this.navList.forEach((ite,index)=>{
					if(ite.id === item.id){
						ite.isClick = true
					}else{
						ite.isClick = false
					}
				})
				this.emptyData()
				this.getNewsData(item)
			},
			// 跳转到详情页面
		goDetail(item){
			uni.navigateTo({
				url:`/pages/detail/detail?cid=${item.classid}&id=${item.id}`
			})
		},
			// 获取新闻列表数据
			getNewsData(item){
				const vm = this;
				uni.request({
					url:'https://ku.qingnian8.com/dataApi/news/newslist.php',
					data:{
						cid:item.id,
						page:vm.currentPage
					},
					success: (res) => {
						if(res.data.length === 0){
							vm.loading = 2
						}
						vm.newsList = [...vm.newsList,...res.data]
					}
				})
			},
			// 清空数据
			emptyData(){
				this.newsList=[];
				this.currentPage=1;
				this.loading=0
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		.navscroll {
			height: 100rpx;
			display: flex;
			justify-content: center;
			background: #F7F8FA;
			align-items: center;
			white-space: nowrap;
            position: fixed;
			top: var(--window-top);
			left: 0;
			z-index: 9;
			/deep/ ::-webkit-scrollbar {
				width: 4px !important;
				height: 1px !important;
				overflow: auto !important;
				background: transparent !important;
				-webkit-appearance: auto !important;
				display: block;
			}

			.itemScroll {
				display: inline-block;
				padding: 0 30rpx;
				font-size: 40rpx;
				line-height: 100rpx;
				color:#333;
				&.avtive{
					color:#31C27C ;
				}
			}
		}
	.content{
		padding: 30rpx;
		padding-top: 130rpx;
		.row{
			border-bottom: 1px dotted #efefef;
			padding: 20rpx 0;
		}
	}
	.loading{
		text-align: center;
		font-size: 26rpx;
		color:#888;
		line-height: 2em;
	}
	}
</style>
