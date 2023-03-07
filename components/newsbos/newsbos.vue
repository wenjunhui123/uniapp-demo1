<template>
	<view class="newsbox">
		<view class="pic">
			<image :src="item.picurl"></image>
		</view>
		<view class="content">
			<view class="title">{{item.title}}</view>
			<view class="info" v-if="!item.looktime">
				<text>{{item.author}}</text>
				<text>{{item.hits}}浏览</text>
			</view>
			<view class="info" v-else>
				<text>浏览时间：{{item.looktime}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "newsbos",
		props: {
			item: {
				type: Object,
				default: () => {
					return {
						author: '张三',
						picurl: "static/images/nopic.png",
						title: "组件默认的主题",
						hits: 600
					}
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.newsbox {
		display: flex;

		.pic {
			width: 230rpx;
			height: 160rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.content {
			padding-left: 20rpx;
			width: calc(100% - 250rpx);
			height: 160rpx;

			.title {
				font-size: 36rpx;
				color: #333;
				text-overflow: -o-ellipsis-lastline;
				overflow: hidden; //溢出内容隐藏
				text-overflow: ellipsis; //文本溢出部分用省略号表示
				display: -webkit-box; //特别显示模式
				-webkit-line-clamp: 2; //行数
				line-clamp: 2;
				-webkit-box-orient: vertical; //盒子中内容竖直排列
			}

			.info {
				font-size: 26rpx;
				color: #999;
padding-top: 30rpx;
				text {
					padding-right: 30rpx;
					
				}
			}
		}
	}
</style>
