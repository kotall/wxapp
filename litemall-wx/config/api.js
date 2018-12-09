// 以下是业务服务器API地址
// 本机开发时使用
//var WxApiRoot = 'http://kotall.s1.natapp.cc/rms/wx/';
// 局域网测试使用
 var WxApiRoot = 'http://192.168.1.101:8080/rms/wx/';
// 云平台部署时使用
// var WxApiRoot = 'http://122.152.206.172:8080/wx/';
// 云平台上线时使用
// var WxApiRoot = 'https://www.menethil.com.cn/wx/';
var sid = "WXSTORE201811190001";
module.exports = {
 IndexUrl: WxApiRoot + 'home/index?sid='+sid , //首页数据接口
 CatalogList: WxApiRoot + 'catalog/index?sid=' + sid, //分类目录全部分类数据接口
 CatalogCurrent: WxApiRoot + 'catalog/current?sid=' + sid, //分类目录当前分类数据接口

 AuthLoginByWeixin: WxApiRoot + 'auth/login_by_weixin?sid=' + sid, //微信登录
 AuthLoginByAccount: WxApiRoot + 'auth/login?sid=' + sid, //账号登录
 AuthLogout: WxApiRoot + 'auth/logout?sid=' + sid, //账号登出
 AuthRegister: WxApiRoot + 'auth/register?sid=' + sid, //账号注册
 AuthReset: WxApiRoot + 'auth/reset?sid=' + sid, //账号密码重置
 AuthRegisterCaptcha: WxApiRoot + 'auth/regCaptcha?sid=' + sid, //验证码
 AuthBindPhone: WxApiRoot + 'auth/bindPhone?sid=' + sid, //绑定微信手机号

 GoodsCount: WxApiRoot + 'goods/count?sid=' + sid, //统计商品总数
 GoodsList: WxApiRoot + 'goods/list?sid=' + sid, //获得商品列表
 GoodsCategory: WxApiRoot + 'goods/category?sid=' + sid, //获得分类数据
 GoodsDetail: WxApiRoot + 'goods/detail?sid=' + sid, //获得商品的详情
 GoodsNew: WxApiRoot + 'goods/new?sid=' + sid, //新品
 GoodsHot: WxApiRoot + 'goods/hot?sid=' + sid, //热门
 GoodsRelated: WxApiRoot + 'goods/related?sid=' + sid, //商品详情页的关联商品（大家都在看）

 BrandList: WxApiRoot + 'brand/list?sid=' + sid, //品牌列表
 BrandDetail: WxApiRoot + 'brand/detail?sid=' + sid, //品牌详情

 CartList: WxApiRoot + 'cart/index?sid=' + sid, //获取购物车的数据
 CartAdd: WxApiRoot + 'cart/add?sid=' + sid, // 添加商品到购物车
 CartFastAdd: WxApiRoot + 'cart/fastadd?sid=' + sid, // 立即购买商品
 CartUpdate: WxApiRoot + 'cart/update?sid=' + sid, // 更新购物车的商品
 CartDelete: WxApiRoot + 'cart/delete?sid=' + sid, // 删除购物车的商品
 CartChecked: WxApiRoot + 'cart/checked?sid=' + sid, // 选择或取消选择商品
 CartGoodsCount: WxApiRoot + 'cart/goodscount?sid=' + sid, // 获取购物车商品件数
 CartCheckout: WxApiRoot + 'cart/checkout?sid=' + sid, // 下单前信息确认

 CollectList: WxApiRoot + 'collect/list?sid=' + sid, //收藏列表
 CollectAddOrDelete: WxApiRoot + 'collect/addordelete?sid=' + sid, //添加或取消收藏

 CommentList: WxApiRoot + 'comment/list?sid=' + sid, //评论列表
 CommentCount: WxApiRoot + 'comment/count?sid=' + sid, //评论总数
 CommentPost: WxApiRoot + 'comment/post?sid=' + sid, //发表评论

 TopicList: WxApiRoot + 'topic/list?sid=' + sid, //专题列表
 TopicDetail: WxApiRoot + 'topic/detail?sid=' + sid, //专题详情
 TopicRelated: WxApiRoot + 'topic/related?sid=' + sid, //相关专题

 SearchIndex: WxApiRoot + 'search/index?sid=' + sid, //搜索关键字
 SearchResult: WxApiRoot + 'search/result?sid=' + sid, //搜索结果
 SearchHelper: WxApiRoot + 'search/helper?sid=' + sid, //搜索帮助
 SearchClearHistory: WxApiRoot + 'search/clearhistory?sid=' + sid, //搜索历史清楚

 AddressList: WxApiRoot + 'address/list?sid=' + sid, //收货地址列表
 AddressDetail: WxApiRoot + 'address/detail?sid=' + sid, //收货地址详情
 AddressSave: WxApiRoot + 'address/save?sid=' + sid, //保存收货地址
 AddressDelete: WxApiRoot + 'address/delete?sid=' + sid, //保存收货地址

 ExpressQuery: WxApiRoot + 'express/query?sid=' + sid, //物流查询

 RegionList: WxApiRoot + 'region/list?sid=' + sid, //获取区域列表

 OrderSubmit: WxApiRoot + 'order/submit?sid=' + sid, // 提交订单
 OrderPrepay: WxApiRoot + 'order/prepay?sid=' + sid, // 订单的预支付会话
 OrderList: WxApiRoot + 'order/list?sid=' + sid, //订单列表
 OrderDetail: WxApiRoot + 'order/detail?sid=' + sid, //订单详情
 OrderCancel: WxApiRoot + 'order/cancel?sid=' + sid, //取消订单
 OrderRefund: WxApiRoot + 'order/refund?sid=' + sid, //退款取消订单
 OrderDelete: WxApiRoot + 'order/delete?sid=' + sid, //删除订单
 OrderConfirm: WxApiRoot + 'order/confirm?sid=' + sid, //确认收货
 OrderGoods: WxApiRoot + 'order/goods?sid=' + sid, // 代评价商品信息
 OrderComment: WxApiRoot + 'order/comment?sid=' + sid, // 评价订单商品信息

 FeedbackAdd: WxApiRoot + 'feedback/submit?sid=' + sid, //添加反馈
 FootprintList: WxApiRoot + 'footprint/list?sid=' + sid, //足迹列表
 FootprintDelete: WxApiRoot + 'footprint/delete?sid=' + sid, //删除足迹

 UserFormIdCreate: WxApiRoot + 'formid/create?sid=' + sid, //用户FromId，用于发送模版消息

 GroupOnList: WxApiRoot + 'groupon/list?sid=' + sid, //团购列表
 GroupOn: WxApiRoot + 'groupon/query?sid=' + sid, //团购API-查询
 GroupOnMy: WxApiRoot + 'groupon/my?sid=' + sid, //团购API-我的团购
 GroupOnDetail: WxApiRoot + 'groupon/detail?sid=' + sid, //团购API-详情
 GroupOnJoin: WxApiRoot + 'groupon/join?sid=' + sid, //团购API-详情
 StorageUpload: WxApiRoot + 'storage/upload?sid=' + sid, //图片上传,

 UserIndex: WxApiRoot + 'user/index?sid=' + sid, //个人页面用户相关信息

};