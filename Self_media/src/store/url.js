// const url = "http://106.14.223.238:8081/api"
const url ="http://api.aimymusic.com/api"

const urls ={

	//手机验证码
	loginsend :`${url}/passport/sms/send`,
	//自媒体登录
	passportlogin:`${url}/passport/login`,
	//上传作品
	backstageRelease:`${url}/works/video/backstageRelease`,
	//获取自己音视频作品列表
	viewUserWorks:`${url}/selfMedia/viewUserWorks`,
	//获取所以公开音视频作品列表
	viewPublicWorks:`${url}/selfMedia/viewPublicWorks`,
	//获取自己的专题
	viewUserTopic:`${url}/selfMedia/viewUserTopic`,
	//发布专题
	create:`${url}/special/create`,

	//图片上传
	getUploadIp : `${url}/upload/getUploadIp`,
}


export default urls
