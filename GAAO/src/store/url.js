// const url = "http://192.168.10.147/cms"
// const url ="http://192.168.10.152/cms"
// const url = "http://106.14.223.238:8082/cms"
const url = "http://www.aimymusic.com/cms"
const urls ={
	//账户token查询
	login :`${url}/passport/login`,
	//账户权限
	getMyAuthMap:`${url}/auth/getMyAuthMap`,
	//账户管理
	//部门查询
	getDepartmentList : `${url}/auth/getDepartmentList`,
	//添加账户
	passportcreate : `${url}/passport/create`,
	//账户列表
	getCmsUserList : `${url}/passport/getCmsUserList`,
	//修改权限
	modify : `${url}/passport/modify`,
	//用户管理
	//用户列表
	getAllUserList : `${url}/user/getAllUserList`,	
	//封号列表
	getAllUserBanList : `${url}/user/getAllUserBanList`,
	//粉丝列表
	getFanList : `${url}/user/getFanList`,	
	//关注列表
	getFollowList : `${url}/user/getFollowList`,
	//用户查询
	getUserInfo : `${url}/user/getUserInfo`,	
	//艺人查询
	getArtistList : `${url}/user/getArtistList`,
	//资产管理
	getUserAssets : `${url}/assets/getUserAssets`,
	//作品管理
	//作品列表
	getAllWorksList : `${url}/works/getAllWorksList`,
	//作品列表
	getVideoWorksList : `${url}/works/getVideoWorksList`,
	//添加专题池
	addToTopicPool : `${url}/works/addToTopicPool`,
	//添加精选池
	addToFeaturePool : `${url}/works/addToFeaturePool`,
	//专题池
	getTopicPoolList : `${url}/works/getTopicPoolList`,
	//移除专题池
	removeFromTopicPool : `${url}/works/removeFromTopicPool`,
	//精选池
	getFeaturePoolList : `${url}/works/getFeaturePoolList`,
	//移除精选池
	removeFromFeaturePool : `${url}/works/removeFromFeaturePool`,
	//音频素材管理
	//音频素材管理
	getAudioMaterialList : `${url}/audioMaterial/getAudioMaterialList`,
	//删除音频素材
	deleteAudioMaterial : `${url}/audioMaterial/delete`,
	//标签管理
	//标签列表
	getTagList : `${url}/tag/getTagList`,
	//添加标签
	create : `${url}/tag/create`,
	//编辑标签
	edit : `${url}/tag/edit`,
	//获取推荐标签列表
	getRecommendTagList : `${url}/tag/getRecommendTagList`,
	//添加推荐标签
	addRecommendTag : `${url}/tag/addRecommendTag`,
	//删除推荐标签
	removeRecommendTag : `${url}/tag/removeRecommendTag`,
	//运营管理
	//专题列表
	getTopicList : `${url}/topic/getTopicList`,
	//创建专题
	topiccreate: `${url}/topic/create`,
	//下架
	disable:`${url}/topic/disable`,
	//上架
	enable:`${url}/topic/enable`,
	//删除
	delete:`${url}/topic/delete`,
	//精选列表
	getFeatureList:`${url}/feature/getFeatureList`,
	//获取精选详情
	getFeatureDetails:`${url}/feature/getFeatureDetails`,
	//流行榜列表
	getPopList:`${url}/poplist/getPopList`,
	//发布流行榜
	publish:`${url}/poplist/publish`,
	//编辑流行榜
	modify:`${url}/poplist/modify`,
	//添加精选
	featurecreate:`${url}/feature/create`,
	//Banner列表
	getBannerList:`${url}/banner/getBannerList`,
	//添加Banner
	getBannercreate:`${url}/banner/create`,
	//删除Banner
	getBannerdelete:`${url}/banner/delete`,
	//编辑Banner
	getBannermodify:`${url}/banner/modify`,
	//下架Banner
	getBannerdisable:`${url}/banner/disable`,
	//上架Banner
	getBannerenable:`${url}/banner/enable`,
	//充值消费管理
	//充值列表
	getRechargeList:`${url}/payment/getRechargeList`,
	//消费列表
	getConsumeList:`${url}/payment/getConsumeList`,
	//艺人管理
	//已审核艺人申请
	getReviewedUserReviews:`${url}/artist/getReviewedUserReviews`,
	//未审核艺人申请
	getPendingUserReviews:`${url}/artist/getPendingUserReviews`,
	//已审核机构申请
	getReviewedOrgReviews:`${url}/artist/getReviewedOrgReviews`,
	//未审核机构申请
	getPendingOrgReviews:`${url}/artist/getPendingOrgReviews`,
	//获取艺人历史审批记录
	getUserReviewHistory:`${url}/artist/getUserReviewHistory`,
	//获取机构历史审批记录
	getOrgReviewHistory:`${url}/artist/getOrgReviewHistory`,
	//审批通过艺人申请
	passUserReview:`${url}/artist/passUserReview`,
	//审批通过机构申请
	passOrgReview:`${url}/artist/passOrgReview`,
	//审批拒绝艺人申请
	refuseUserReview:`${url}/artist/refuseUserReview`,
	//审批拒绝机构申请
	refuseOrgReview:`${url}/artist/refuseOrgReview`,
	//重置艺人申请为待审核
	resetUserReview:`${url}/artist/resetUserReview`,
	//重置机构申请为待审核
	resetOrgReview:`${url}/artist/resetOrgReview`,

	//系统通知公告
	//系统通知列表
	getAnnouncementList:`${url}/message/getAnnouncementList`,
	//创建系统通知
	schedule:`${url}/message/schedule`,
	//删除系统通知
	messagedelete:`${url}/message/delete`,
	//修改系统通知
	messagecreate:`${url}/message/modify`,
	//反馈与举报
	//反馈列表
	getFeedbackList:`${url}/cs/getFeedbackList`,
	//举报列表
	getReportList:`${url}/cs/getReportList`,
	//处理反馈
	handleFeedback:`${url}/cs/handleFeedback`,

	//图片上传
	getUploadIp : `${url}/upload/getUploadIp`,
}


export default urls
