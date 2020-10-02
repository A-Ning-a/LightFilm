<script>
	export default {
		onLaunch: function() {
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
	@font-face {
		font-family: "iconfont";
		src: url('//at.alicdn.com/t/font_1640718_z5kkdqzcvf.eot?t=1582090458728');
		/* IE9 */
		src: url('//at.alicdn.com/t/font_1640718_z5kkdqzcvf.eot?t=1582090458728#iefix') format('embedded-opentype'),
			/* IE6-IE8 */
			url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
			url('//at.alicdn.com/t/font_1640718_z5kkdqzcvf.woff?t=1582090458728') format('woff'),
			url('//at.alicdn.com/t/font_1640718_z5kkdqzcvf.ttf?t=1582090458728') format('truetype'),
			/* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
			url('//at.alicdn.com/t/font_1640718_z5kkdqzcvf.svg?t=1582090458728#iconfont') format('svg');
		/* iOS 4.1- */
	}

	.iconfont {
		font-family: "iconfont" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-hao:before {
		content: "\e608";
	}

	.icon-sandian:before {
		content: "\e68f";
	}

	.icon--cool:before {
		content: "\e6e9";
	}

	.icon-shumulu:before {
		content: "\e619";
	}

	.icon-ku:before {
		content: "\e6e2";
	}

	.icon-erji:before {
		content: "\e60b";
	}

	.icon-dianying4:before {
		content: "\e605";
	}

	.icon-dianying1:before {
		content: "\e606";
	}

	.icon-shuben:before {
		content: "\e682";
	}

	.icon-kafei:before {
		content: "\e674";
	}

	.icon-dianzan:before {
		content: "\e604";
	}

	.icon-santiaogang:before {
		content: "\e60d";
	}

	.icon-jiantou-xia:before {
		content: "\e607";
	}

	.icon-icon:before {
		content: "\e602";
	}

	.icon-pinglun1:before {
		content: "\e66f";
	}

	.icon-fenxiangzhuanfafasongzhijiantoufangxingshar:before {
		content: "\e937";
	}

	.icon-huizhang:before {
		content: "\e699";
	}

	.icon-pinglun:before {
		content: "\e69b";
	}

	.icon-lishi:before {
		content: "\e656";
	}

	.icon-qiaquan:before {
		content: "\e603";
	}

	.icon-pinglun2:before {
		content: "\e641";
	}

	.icon-xin-copy:before {
		content: "\e938";
	}

	.icon-xingxing-copy:before {
		content: "\e68d";
	}

	.icon-xingxing:before {
		content: "\e62a";
	}

	.icon-dianying-copy:before {
		content: "\e689";
	}

	.icon-dongtai-copy:before {
		content: "\e68a";
	}

	.icon-index-copy-copy:before {
		content: "\e68b";
	}

	.icon-wode-copy:before {
		content: "\e68c";
	}

	.icon-sousuo:before {
		content: "\e61a";
	}

	.icon-dianying:before {
		content: "\e688";
	}

	.icon-dongtai:before {
		content: "\e62f";
	}

	.icon-index-copy:before {
		content: "\e600";
	}

	.icon-wode:before {
		content: "\e601";
	}
</style>
