const BASE_URL = "http://mock.studyinghome.com/mock/5e55fc372cb0d073b813a5a9/qingying/"
const request = url => {
	return new Promise(success => {
		uni.showLoading({
			title: "加载中"
		})
		uni.request({
			url: BASE_URL + url,
			success,
			complete(){
				uni.hideLoading();
			}
		})
	})
}

module.exports = {
	request
}