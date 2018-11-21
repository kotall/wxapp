// 以下是业务服务器API地址
// 本机开发时使用
//var WxApiRoot = 'http://kotall.s1.natapp.cc/wx/';
// 局域网测试使用
 var WxApiRoot = 'http://192.168.1.101:8081/rms/wx/';
// 云平台部署时使用
// var WxApiRoot = 'http://122.152.206.172:8080/wx/';
// 云平台上线时使用
// var WxApiRoot = 'https://www.menethil.com.cn/wx/';
var appId = "WXSTORE201811190001";
module.exports = {
 IndexUrl: WxApiRoot + 'home/index?appId='+appId , //首页数据接口
 CatalogList: WxApiRoot + 'catalog/index?appId=' + appId, //分类目录全部分类数据接口
 CatalogCurrent: WxApiRoot + 'catalog/current?appId=' + appId, //分类目录当前分类数据接口

 AuthLoginByWeixin: WxApiRoot + 'auth/login_by_weixin?appId=' + appId, //微信登录
 AuthLoginByAccount: WxApiRoot + 'auth/login?appId=' + appId, //账号登录
 AuthLogout: WxApiRoot + 'auth/logout?appId=' + appId, //账号登出
 AuthRegister: WxApiRoot + 'auth/register?appId=' + appId, //账号注册
 AuthReset: WxApiRoot + 'auth/reset?appId=' + appId, //账号密码重置
 AuthRegisterCaptcha: WxApiRoot + 'auth/regCaptcha?appId=' + appId, //验证码
 AuthBindPhone: WxApiRoot + 'auth/bindPhone?appId=' + appId, //绑定微信手机号

 GoodsCount: WxApiRoot + 'goods/count?appId=' + appId, //统计商品总数
 GoodsList: WxApiRoot + 'goods/list?appId=' + appId, //获得商品列表
 GoodsCategory: WxApiRoot + 'goods/category?appId=' + appId, //获得分类数据
 GoodsDetail: WxApiRoot + 'goods/detail?appId=' + appId, //获得商品的详情
 GoodsNew: WxApiRoot + 'goods/new?appId=' + appId, //新品
 GoodsHot: WxApiRoot + 'goods/hot?appId=' + appId, //热门
 GoodsRelated: WxApiRoot + 'goods/related?appId=' + appId, //商品详情页的关联商品（大家都在看）

 BrandList: WxApiRoot + 'brand/list?appId=' + appId, //品牌列表
 BrandDetail: WxApiRoot + 'brand/detail?appId=' + appId, //品牌详情

 CartList: WxApiRoot + 'cart/index?appId=' + appId, //获取购物车的数据
 CartAdd: WxApiRoot + 'cart/add?appId=' + appId, // 添加商品到购物车
 CartFastAdd: WxApiRoot + 'cart/fastadd?appId=' + appId, // 立即购买商品
 CartUpdate: WxApiRoot + 'cart/update?appId=' + appId, // 更新购物车的商品
 CartDelete: WxApiRoot + 'cart/delete?appId=' + appId, // 删除购物车的商品
 CartChecked: WxApiRoot + 'cart/checked?appId=' + appId, // 选择或取消选择商品
 CartGoodsCount: WxApiRoot + 'cart/goodscount?appId=' + appId, // 获取购物车商品件数
 CartCheckout: WxApiRoot + 'cart/checkout?appId=' + appId, // 下单前信息确认

 CollectList: WxApiRoot + 'collect/list?appId=' + appId, //收藏列表
 CollectAddOrDelete: WxApiRoot + 'collect/addordelete?appId=' + appId, //添加或取消收藏

 CommentList: WxApiRoot + 'comment/list?appId=' + appId, //评论列表
 CommentCount: WxApiRoot + 'comment/count?appId=' + appId, //评论总数
 CommentPost: WxApiRoot + 'comment/post?appId=' + appId, //发表评论

 TopicList: WxApiRoot + 'topic/list?appId=' + appId, //专题列表
 TopicDetail: WxApiRoot + 'topic/detail?appId=' + appId, //专题详情
 TopicRelated: WxApiRoot + 'topic/related?appId=' + appId, //相关专题

 SearchIndex: WxApiRoot + 'search/index?appId=' + appId, //搜索关键字
 SearchResult: WxApiRoot + 'search/result?appId=' + appId, //搜索结果
 SearchHelper: WxApiRoot + 'search/helper?appId=' + appId, //搜索帮助
 SearchClearHistory: WxApiRoot + 'search/clearhistory?appId=' + appId, //搜索历史清楚

 AddressList: WxApiRoot + 'address/list?appId=' + appId, //收货地址列表
 AddressDetail: WxApiRoot + 'address/detail?appId=' + appId, //收货地址详情
 AddressSave: WxApiRoot + 'address/save?appId=' + appId, //保存收货地址
 AddressDelete: WxApiRoot + 'address/delete?appId=' + appId, //保存收货地址

 ExpressQuery: WxApiRoot + 'express/query?appId=' + appId, //物流查询

 RegionList: WxApiRoot + 'region/list?appId=' + appId, //获取区域列表

 OrderSubmit: WxApiRoot + 'order/submit?appId=' + appId, // 提交订单
 OrderPrepay: WxApiRoot + 'order/prepay?appId=' + appId, // 订单的预支付会话
 OrderList: WxApiRoot + 'order/list?appId=' + appId, //订单列表
 OrderDetail: WxApiRoot + 'order/detail?appId=' + appId, //订单详情
 OrderCancel: WxApiRoot + 'order/cancel?appId=' + appId, //取消订单
 OrderRefund: WxApiRoot + 'order/refund?appId=' + appId, //退款取消订单
 OrderDelete: WxApiRoot + 'order/delete?appId=' + appId, //删除订单
 OrderConfirm: WxApiRoot + 'order/confirm?appId=' + appId, //确认收货
 OrderGoods: WxApiRoot + 'order/goods?appId=' + appId, // 代评价商品信息
 OrderComment: WxApiRoot + 'order/comment?appId=' + appId, // 评价订单商品信息

 FeedbackAdd: WxApiRoot + 'feedback/submit?appId=' + appId, //添加反馈
 FootprintList: WxApiRoot + 'footprint/list?appId=' + appId, //足迹列表
 FootprintDelete: WxApiRoot + 'footprint/delete?appId=' + appId, //删除足迹

 UserFormIdCreate: WxApiRoot + 'formid/create?appId=' + appId, //用户FromId，用于发送模版消息

 GroupOnList: WxApiRoot + 'groupon/list?appId=' + appId, //团购列表
 GroupOn: WxApiRoot + 'groupon/query?appId=' + appId, //团购API-查询
 GroupOnMy: WxApiRoot + 'groupon/my?appId=' + appId, //团购API-我的团购
 GroupOnDetail: WxApiRoot + 'groupon/detail?appId=' + appId, //团购API-详情
 GroupOnJoin: WxApiRoot + 'groupon/join?appId=' + appId, //团购API-详情
 StorageUpload: WxApiRoot + 'storage/upload?appId=' + appId, //图片上传,

 UserIndex: WxApiRoot + 'user/index?appId=' + appId, //个人页面用户相关信息

};