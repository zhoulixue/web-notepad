
  
  // 重要：依赖的文件在其他路径，需要做软连接
// ln
// -s
// ../store_comm/VideoMallComm.jce
// .
// ln
// -s
// ../vmall_express/VmallExpress.jce
// .
// 读测试:
// IP:10.49.123.228:23575
// L5:599873:2424832
// 写测试
// IP:10.49.123.228:23574
// L5:599873:2359296
      declare enum CMD {
        PRE_PAY_ORDER = 0xf1fb, //预下单
MODIFY_PAY_STATUS = 0xf205, //修改支付信息
MODIFY_ORDER_STATUS = 0xf20d, //修改物流订单信息
MODIFY_PACKAGE_STATUS = 0xff3a, //修改包裹订单信息
MODIFY_REFUND_ORDER = 0xf216, //修改退款订单信息
CREATE_REFUND_ORDER_S = 0x5ca7, //创建退款订单信息（不鉴权）
DIVISION_ORDER = 0xf2a2, //拆单服务
ORDER_STATUS_TRANS = 0xf35a, //物流订单状态中转
ORDER_STATUS_TRANS_TEST = 0xf3ea, //订单操作中转（测试环境）
READ_PAY_ORDER = 0xf224, //查支付订单详情
CHECK_PAY_ORDER = 0xf707, //检查支付订单详情（不鉴权，慎用）
READ_PACKAGE_LIST= = 0xff3b, //查询物流单下包裹单列表
READ_ORDER_INFO_S = 0xfc63, //后台查询物流订单详情（不鉴权）
READ_ORDER_INFO_B = 0xf21c, //商家查询物流订单详情
READ_ORDER_INFO = 0xf400, //查询物流订单详情
READ_PACKAGE_INFO_S = 0x5c93, //后台查询包裹订单详情（不鉴权，兼容订单）
READ_USER_ORDER_LIST = 0xf228, //查用户物流订单列表
READ_USER_REFUND_LIST = 0xf3f3, //查用户退货订单列表
READ_REFUND_ORDER = 0xf221, //查退款订单详情
READ_REFUND_ORDER_U = 0xffa0, //用户查退款订单详情（C端）
READ_REFUND_ORDER_S = 0xfdb0, //查询退款单详情（不鉴权）
READ_SELLER_ORDER_LIST = 0xf231, //查商户物流订单列表
READ_SELLER_ORDER_LIST_S = 0xfe82, //查商户物流订单列表（不鉴权）
READ_DELIVERY_ORDER_LIST_S = 0x5c74, //查询待发货列表（不鉴权）
READ_LOG_FLOW = 0xf2a4, //用户查询订单操作历史
READ_LOG_FLOW_B = 0xf7f9, //商家查询订单操作历史
READ_LOG_FLOW_S = 0x5e19, //后台查询订单操作历史（不鉴权）
READ_UNDEAL_ORDER_NUM = 0xf33e, //读取未处理订单数(红点)
READ_UNDEAL_ORDER_NUM_B = 0xf348, //商家读取未处理订单数(红点)
READ_LAST_EXPRESS_INFO = 0xf422, //获取用户最近快递信息
READ_SELLER_SEARCH_LIST = 0xf626, //商家搜索物流订单详情
READ_PAY_EXPRESS_LIST = 0xf965, //查询支付单物流列表
AUTO_DELIVERY_NOTIFY = 0xfc43, //自动发货通知
      }
      

      declare enum RET_CODE {
        ORT_UNKNOW_ERROR = 1000, 
ORT_ERR_PACKET = 1001, 
ORT_NEED_LOGIN = 1002, 
ORT_SERVER_ERROR = 1003, 
ORT_ENCODE_RSP_PKG_FAIL = 1004, 
ORT_GET_ORDER_ID_FAIL = 1005, 
ORT_PACKAGE_TOO_MUCH = 1006, 
ORT_GOODS_TYPE_ERROR = 1007, 
ORT_QUERY_DB_ERROR = 1008, 
ORT_OPERATION_DENY = 1009, 
ORT_UPDATE_DB_ERROR = 1010, 
ORT_INSERT_DB_ERROR = 1011, 
ORT_QUERY_NO_DATA = 1012, 
ORT_INPUT_INVALID = 1013, 
ORT_REQ_FREQUENCE = 1014, 
ORT_STORE_LACK = 1016, 
      }
      

      declare enum O_LOGIC_CODE {
        ORT_REPEAT_LOGIC = 1000, 
      }
      

      declare enum emFlowType {
        LOG_TYPE_EXPRESS = 1, //物流订单
LOG_TYPE_REFUND = 2, //退款订单
LOG_TYPE_PAY = 3, //支付订单
      }
      
// 退款类型
      declare enum emRefundType {
        EM_RF_TYPE_GB_PAY = 1, //仅退款
EM_RF_TYPE_GB_PAY_PRODUCT = 2, //退货退款
EM_RF_TYPE_CHANGE = 3, //换货
      }
      

      declare enum emReStoreType {
        EM_RS_TYPE_DEFAULT = 0, //不特殊指定，依据退款类型
EM_RS_TYPE_RESTORE = 1, //退库存
EM_RS_TYPE_REJECT = 2, //不退库存
      }
      
// 退款方式
      declare enum E_REFUND_METHOD {
        EM_REFUND_SRC = 0, //原路返回
EM_REFUND_TRANS= = 1, //赔付退款
      }
      
// 退款反馈码
      declare enum E_REFUND_RET {
        EM_REFUND_SUC = 0, 
EM_REFUND_LACK = 1, //缺钱
EM_REFUND_OTHER = 2, //其他异常
      }
      
// 退款原因类型
      declare enum emRefundReasonType {
        EM_RF_REASON_TYPE_GB_FREIGHT = 2, //退运费
EM_RF_REASON_TYPE_OVERMUCH = 14, //多拍/错拍/不想要
EM_RF_REASON_TYPE_EXPRESS_SLOW = 15, //快递一直未送到 
EM_RF_REASON_TYPE_NO_ONTIME = 11, //未按约定时间发货 
EM_RF_REASON_TYPE_NO_EXPRESS_RECORD = 16, //快递无跟踪记录 
EM_RF_REASON_TYPE_MISS = 8, //空包裹/少件/漏发
EM_RF_REASON_TYPE_7DAY_NOREASON = 1, //7天无理由
EM_RF_REASON_TYPE_OBJECT_NO_MATCH = 18, //大小/尺寸与商品描述不符
EM_RF_REASON_TYPE_QUALITY_ISSUE = 6, //质量问题
EM_RF_REASON_TYPE_DELIVER_NO_MATCH = 19, //卖家承诺发货时间/提货地点不符
EM_RF_REASON_TYPE_MISTAKE = 13, //卖家发错货
EM_RF_REASON_TYPE_BROKEN = 9, //包装/商品破损/污渍
EM_RF_REASON_TYPE_OTHER = 17, //其他
EM_RF_REASON_TYPE_SIZE_NO_MATCH = 3, //大小/尺寸与商品描述不符
EM_RF_REASON_TYPE_STYLE_NO_MATCH = 4, //颜色/图案/款式与商品描述不符
EM_RF_REASON_TYPE_STUFF_NO_MATCH = 5, //材质与商品描述不符
EM_RF_REASON_TYPE_ALLERGY = 7, //商品使用后过敏
EM_RF_REASON_TYPE_FAKE = 10, //假冒品牌
EM_RF_REASON_TYPE_BILL_ISSUE = 12, //发票问题
      }
      
// 商品类型
      declare enum TYPE_GOODS {
        TYPE_INVALID = 0, //非法类型
TYPE_REAL = 1, //实物
TYPE_VIRTUAL = 2, //虚拟物品
TYPE_OFFLINE = 3, //线下商品
      }
      
// 物流类型
      declare enum TYPE_POST {
        TYPE_EXPRESS = 1, //手动物流
TYPE_NONE = 2, //无需物流
TYPE_TEST = 3, //测试订单
TYPE_AUTO_EXPRESS = 4, //系统自动物流
      }
      
// 物流订单状态
      declare enum STATUS_EXPRESS_ORDER {
        EST_PRE_ORDER = 1, //预下单
EST_WAIT_FOR_PAY = 2, //待支付
EST_WAIT_FOR_CONFIRM = 3, //支付待确认
EST_WAIT_FOR_DELIVER = 4, //待发货
EST_WAIT_FOR_RECEIVE = 5, //待收货
EST_GOODS_CONFIRM = 6, //确认收货
EST_DEAL_CANCEL = 7, //交易取消
EST_DEAL_FINISH = 8, //交易完成
EST_EARNEST_PAYED = 9, //定金已支付   
EST_WAIT_FOR_FINAL_AFFIRM = 10, //支付尾款待确定
      }
      
// 包裹订单状态
      declare enum STATUS_PACKAGE_ORDER {
        PKGST_WAIT_FOR_DELIVER = 4, //待发货
PKGST_WAIT_FOR_RECEIVE = 5, //已发货
PKGST_CANCLE = 7, //取消发货
PKGST_DEAL_FINISH = 8, //交易完成         
PKGST_EARNEST_PAYED = 9, //定金已支付   
PKGST_WAIT_FOR_FINAL_AFFIRM = 10, //支付尾款待确定
      }
      
// 支付订单状态
      declare enum STATUS_PAY_ORDER {
        PST_PRE_ORDER = 1, //预下单
PST_WAIT_FOR_PAY = 2, //待支付
PST_WAIT_FOR_AFFIRM = 3, //支付待确定
PST_PAYED = 4, //已支付
PST_CANCEL = 5, //为了兼容前端的外显，6、7、8先不用了s//支付取消
PST_EARNEST_PAYED = 9, //定金已支付    
PST_WAIT_FOR_FINAL_AFFIRM = 10, //支付尾款待确定
      }
      
// 商品订单（退货订单）状态
      declare enum STATUS_REFUND_ORDER {
        RST_WAIT_FOR_EXAMINE = 1, //待商家确认
RST_WAIT_FOR_BACK = 2, //待退货
RST_WAIT_FOR_CONFIRM = 3, //待退货确认
RST_WAIT_FOR_SERVICE = 4, //退货前待客服仲裁
RST_WAIT_FOR_REFUND = 5, //退款中
RST_REFUND_CONFIRM = 6, //已退款
RST_REFUND_CANCEL = 7, //取消退款
RST_REFUND_COMMIT = 8, //退款已提交
RST_REFUND_FAILED = 9, //退款失败
RST_WAIT_FOR_SERVICE_B = 10, //退货后待客服仲裁
RST_REFUND_REJECT = 11, //运营仲裁驳回
RST_WAIT_FOR_COMP = 12, //待运营赔付退款
RST_WAIT_SELLER_DEAL = 400, //虚拟状态，待商家处理
      }
      
// 支付订单操作码
      declare enum CODE_PAY_OPERATION {
        POP_MIN = 100, //支付操作起始
POP_CREATE_ORDER = 101, //创建订单
POP_PAY_ORDER = 102, //支付
POP_PAY_CONFIRM = 103, //确认支付
POP_PAY_TIMEOUT = 104, //支付超时
POP_PAY_CANCEL = 105, //取消支付
POP_PAY_UNPAYED = 106, //确认未支付
POP_APPEND_PAY_INFO = 107, //写入支付附加信息
POP_APPEND_PAY_USER = 108, //写入支付用户信息
POP_CREATE_FREE_ORDER = 109, //无需支付，直接流转待发货（慎用）s//创建免单订单 		
POP_PAY_PREPAY_ORDER = 110, //支付预付订单      
POP_PAY_PREPAY_UNPAYED = 111, //确认预付订单未支付
POP_PAY_PREPAY_CONFIRM = 112, //确认支付预付订单
POP_MAX = 199, //支付操作结束
      }
      
// 物流订单操作码
      declare enum CODE_EXPRESS_OPERATION {
        EOP_MIN = 200, 
EOP_CREATE_ORDER = 201, //创建订单（已废弃）
EOP_PAY_ORDER = 202, //支付（已废弃）
EOP_PAY_CONFIRM = 203, //确认支付（已废弃）
EOP_DELIVER_ORDER = 204, //发货
EOP_RECEIVE_CONFIRM = 205, //确认收获
EOP_RECEIVE_TIMEOUT = 206, //确认收货超时
EOP_COMMENT = 207, //评论
EOP_PAY_TIMEOUT = 208, //支付超时
EOP_DELAY_CONFIRM = 209, //延长确认收获
EOP_URGE_DELIVER = 210, //催促发货
EOP_FINISH = 211, //自动完成订单(暂未实现)
EOP_DELETE = 212, //删除订单
EOP_APPEND_EXPRESS_INFO = 213, //附加物流单信息
EOP_MODIFY_EXPRESS_INFO = 214, //修改物流单信息
EOP_MODIFY_ADDRESS_INFO = 215, //修改订单地址信息
EOP_MAX = 299, 
      }
      
// 退货订单操作码
      declare enum CODE_REFUND_OPERATION {
        ROP_MIN = 300, 
ROP_CREATE_REFUND = 301, //创建退货订单
ROP_REFUND_ALLOWED = 302, //退货审核通过
ROP_ARBITRATE_EXPRESS = 303, //仲裁录入快递单号
ROP_SET_EXPRESS = 304, //录入快递单号
ROP_REFUND_REJECT = 305, //退货前商家发起仲裁（复用之前的商家拒绝退款，所以协议里名字不变）
ROP_DELIVER_REJECT = 306, //退货后商家发起仲裁（复用之前的商品不完整，所以协议里名字不变）
ROP_ARBITRATE_REFUND = 307, //仲裁退款
ROP_DELIVER_CONFIRM = 308, //商品完整
ROP_REFUND_PAYED = 309, //退款到账
ROP_REFUND_CANCEL = 310, //取消退款
ROP_REFUND_COMMIT = 311, //提交到退款通道
ROP_SELLER_REFUND = 312, //商家主动退货
ROP_REBATE_ALLOWED = 313, //退款审核通过
ROP_REFUND_FAILED = 314, //退款失败
ROP_BACK_TIMEOUT = 315, //录入单号超时
ROP_APPLY_TIMEOUT = 316, //退货审核超时通过
ROP_MODIFY_APPLY = 317, //修改退货申请
ROP_EXAMINE_TIMEOUT = 318, //退款审批超时退款
ROP_ARBITRATE_REJECT = 319, //仲裁审核不通过
ROP_DELIVER_TIMEOUT = 320, //商品确认收货超时
ROP_REFUND_MPAYED = 321, //人工设置退款到账
ROP_REFUND_MFAILED = 322, //人工设置退款失败
ROP_USER_ARBITRATE = 323, //用户发起仲裁
ROP_SELLER_REJECT = 324, //商家拒绝退货
ROP_DELIVER_CONFIRM_COMP = 325, //商家确认收货赔付退款
ROP_REBATE_ALLOWED_COMP = 326, //商家退款审核赔付退款
ROP_ARBITRATE_REFUND_COMP = 327, //运营仲裁通过赔付退款
ROP_EXAMINE_TIMEOUT_COMP = 328, //退款审批超时赔付退款
ROP_MAX = 399, 
      }
      
// 包裹订单操作码
      declare enum CODE_PACKAGE_OPERATION {
        PKGOP_MIN = 400, 
PKGOP_DELIVER_ORDER = 401, 
PKGOP_MAX = 499, 
      }
      

      declare enum TYPE_SCORE {
        DESC_TYPE = 1, //描述评分类型
FLOW_TYPE = 2, //物流评分类型
SEVICE_TYPE = 3, //服务评分类型
      }
      

      declare enum VCOIN_TYPE {
        VCOIN = 0, //老V币
CHANNEL_CREDITS = 1, //渠道积分
      }
      

      declare enum JD_DELIVER_STATUS {
        EM_DELIVER = 1, //出库
EM_CANCLE_DELIVER = 2, 
EM_CANCLE_FAILED = 3, 
EM_APPEND_EXPRESS_INFO = 4, //推送快递信息
      }
      

      interface STScoreInfo {
        iType?: number; //评分type，对应ScoreType的取值
dwScore?: number; //分值
      }
      

      interface STPayInfo {
        strPayOrderId?: string; //支付订单ID（预下单不需要）
strUserId?: string; //用户ID（VUID）
uiCashPrice?: number; //支付总价
uiVCoinSum?: number; //支付积分总数（最早是V币，后来根据渠道使用积分）
uiVCoinDiscount?: number; //积分抵扣额（最早是V币，后来根据渠道使用积分）
uiStatus?: number; //支付状态（查询返回）
strPayUserId?: string; //支付用户ID
iMTimestamp?: number; //修改时间戳
vecCouponId?: string[]; //优惠券ID列表
stPayUserInfo?: STPayUserInfo; //支付用户信息
strPayTag?: string; //下单渠道信息
uiTransPrice?: number; //包含的运费
stPayPriceInfo?: STPayPriceInfo; //支付价格信息，统一收敛到这个结构
iPayPlatform?: number; //支付平台号
strOmgId?: string; //下单时的OMGID
strChannelId?: string; //渠道ID
iVCoinType?: number; //积分类型 (对应VCOIN_TYPE)
strPTime?: string; //支付时间
strCTime?: string; //创建时间
iPayMethod?: number; //支付方式（对应E_PAY_METHOD）
uiPddGlodsCoinSum?: number; //金币支付总额
uiPddGlodsDiscount?: number; //支付金币抵扣额
      }
      

      interface STGOrderInfo {
        strRefundOrder?: string; //商品订单ID（退货仅退货用）
strSKUId?: string; //商品（SKU）ID
strSKUTitle?: string; //商品标题
strSKUPic?: string; //商品图片
iGoodsType?: number; //商品类型（参考TYPE_GOODS
strSellerId?: string; //商家ID
stPriceInfo?: STPriceInfo; //价格信息
dfProfitRatio?: number; //分成比例
uiGoodsNum?: number; //商品数量
vecProps?: STPropInfo[]; //SKU所包含的属性信息
strProductId?: string; //商品ID
uiRefundFlag?: number; //退货标记
iSaleType?: number; //销售类型（0：正常，1：预售）
iPreSaleTime?: number; //预计发货时间（时间戳）
strPreSaleTime?: string; //预计发货时间（字符）
uiRefundStatus?: number; //退货状态
vecIPId?: string[]; //商品所属IPId
uiTaxRate?: number; //税率，单位 万分之一
strBarCode?: string; //条码
uiRefundNum?: number; //退款数量
strBatchId?: string; //批次ID
strStoreId?: string; //仓储ID
strPackageId?: string; //包裹ID
strActId?: string; //活动ID
strExtData?: string; //扩展存储信息（渠道分成信息等）
strJsDesignData?: string; //退换货策略IDs//26  optional string strRePolicy; 					s//用户定制Js信息（DesignKey等）
iRePolicyType?: number; //退换货策略类型, 对应公共库EMRepolicyType
iPresaleType?: number; //预售类型
iGiftStatus?: number; //礼物状态
iModifyAddrForbidden?: number; //标识订单页是否可以修改地址
      }
      

      interface STLogFlow {
        strId?: string; //当前ID
iOperationId?: number; //操作ID
iStatusBefore?: number; //操作前状态
iStatusAfter?: number; //操作后状态
strMTime?: string; //修改时间
iMTimestamp?: number; //修改时间戳
strExtData?: string; //操作附加信息
      }
      

      interface STUserInfo {
        strUserNick?: string; 
strQQ?: string; 
strOpenId?: string; 
      }
      
// 退款信息
      interface STRefundInfo {
        strExpressOrderId?: string; //物流订单
strSKUId?: string; //商品SKUId
strExpressId?: string; //快递单号
uiExpressCode?: number; //快递公司代码
uiCashPrice?: number; //退货现金金额
uiRefundVCoin?: number; //退货V币数
uiRefundType?: number; //退款类型，参考emRefundType
iRefundReasonType?: number; //退款理由类型，参考emRefundReasonType
stPostInfo?: STPostInfo; //退货邮寄地址
strDesc?: string; //退货描述
strProvePic?: string; //证明图片
strArbitResult?: string; //仲裁描述
strPayOrderId?: string; //支付订单ID
strRefundOrder?: string; //退货订单
uiStatus?: number; //退货订单状态
strUserId?: string; //用户ID
uiGoodsNum?: number; //退货数量
stGoodsInfo?: STGOrderInfo; //商品信息
strMTime?: string; //修改时间
strExpressPic?: string; //运单图片
strArbitDesc?: string; //商家仲裁描述
vecArbitProvePic?: string[]; //商家仲裁证明图片
uiArbitCashPrice?: number; //仲裁退款现金金额
vecRefundFlow?: STLogFlow[]; //退货操作流水
vecOperation?: unsignedint[]; //该状态下可以执行的操作码 
uiArbitrateOp?: number; //仲裁的操作
strPayUserId?: string; //支付用户ID
uiOrderStatus?: number; //关联物流订单状态
strUserNick?: string; //用户昵称
strSellerName?: string; //商家名称
stUserInfo?: STUserInfo; //用户信息
uiTransPrice?: number; //需要退的运费
iRemainingTime?: number; //剩余自动流转时间
strCTime?: string; //创建时间
strPTime?: string; //支付时间
uiRefundMethod?: number; //退款方式
stPayUserInfo?: STPayUserInfo; //支付用户信息
uiRefundRet?: number; //退款反馈码
iReStoreType?: number; //退库存类型emReStoreType
      }
      

      interface STStoreInfo {
        strStoreId?: string; //仓库ID
strStoreName?: string; //仓库名称
      }
      

      interface STPackageInfo {
        strPackageId?: string; //包裹ID
strExpressOrderId?: string; //物流订单ID （用户订单ID）
strPayId?: string; //支付单ID
strUserId?: string; //用户ID（VUID）
uiStatus?: number; //包裹状态
strExpressId?: string; //快递单号
uiExpressCode?: number; //快递公司代码
stExpressNode?: STExpressNode; //最近快递信息
vecGOrderInfo?: STGOrderInfo[]; //包裹订单下属商品
strMTime?: string; //修改时间
strCTime?: string; //创建时间
stStoreInfo?: STStoreInfo; //仓库ID
iOrderType?: number; //物流订单类型（参考TYPE_POST）
      }
      

      interface STExpressOrderInfo {
        strExpressOrderId?: string; //物流订单ID（预下单不需要）
strPayOrderId?: string; //相关支付订单ID（预下单不需要）
strUserId?: string; //用户ID（VUID）
iOrderType?: number; //物流订单类型（参考TYPE_POST）
vecGOrderInfo?: STGOrderInfo[]; //物流订单下属商品
uiCashPrice?: number; //支付总价
uiVCoinSum?: number; //支付积分总数（最早是V币，后来根据渠道使用积分）
uiVCoinDiscount?: number; //积分抵扣额（最早是V币，后来根据渠道使用积分）
uiStatus?: number; //物流订单状态
uiRefundFlag?: number; //退货标记
GoodsSum?: number; //商品总数
strSellerId?: string; //商家ID
stPostInfo?: STPostInfo; //邮寄信息
strExpressId?: string; //快递单号
uiExpressCode?: number; //快递公司代码
iPayType?: number; //支付类型，参考emPayType
iCommentFlag?: number; //评论标记
strMTime?: string; //修改时间
strCTime?: string; //创建时间
vecRefundInfo?: STRefundInfo[]; //物流订单下退货商品
uiTransPrice?: number; //运费
vecOrderFlow?: STLogFlow[]; //操作流水
uiDelayTime?: number; //延迟收货次数
strLastRemindTime?: string; //上次提醒时间
strNote?: string; //用户留言
strSellerName?: string; //增加商家名称
vecScoreInfo?: STScoreInfo[]; //评论评分信息
strCancelResult?: string; //取消原因
uiVIPDiscount?: number; //VIP抵扣
stUserInfo?: STUserInfo; //用户信息
stPayPriceInfo?: STPayPriceInfo; //订单价格信息，统一收敛到这个结构
iRemainingTime?: number; //剩余自动流转时间
strStoreId?: string; //仓储ID
iVCoinType?: number; //积分类型 (对应VCOIN_TYPE)
strPreDeliverTime?: string; //预计到货时间
vecPackageInfo?: STPackageInfo[]; //包裹列表
strPayExtData?: string; //下单时存储的扩展信息
cFlag?: number; //订单是否展示
uiPddGoldsSum?: number; //新增 支付金币总数
uiPddGlodsDiscount?: number; //新增 金币抵扣额
      }
      

      interface STExpressOrderBaseInfo {
        stExpressOrderPriceInfo?: STExpressOrderPriceInfo; 
strNode?: string; 
strSellerId?: string; 
vecGOrderInfo?: STGOrderInfo[]; //物流订单下属商品
      }
      
// 预下单
      interface STPreorderReq {
        stPayInfo?: STPayInfo; //支付信息
vecGOrderInfo?: STGOrderInfo[]; //下单商品
stPostInfo?: STPostInfo; //用户快递信息
strAppId?: string; 
strAppKey?: string; 
strNote?: string; //用户留言
vecExpressOrderPriceInfo?: STExpressOrderPriceInfo[]; //拆单加个结构
      }
      

      interface STPreorderRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strPayOrderId?: string; 
      }
      
// 修改支付订单状态
      interface STModifyPayStatusReq {
        strPayOrderId?: string; 
uiOperation?: number; 
strAppId?: string; 
strAppKey?: string; 
strPayUserId?: string; 
strCancleResult?: string; //取消原因
stPayUserInfo?: STPayUserInfo; //支付用户信息
iPayPlatform?: number; //支付平台号
      }
      

      interface STModifyPayStatusRsp {
        iErrCode?: number; 
strErrMsg?: string; 
uiPayStatus?: number; 
      }
      
// 修改物流订单状态
      interface STModifyOrderStatusReq {
        stExpressOrderInfo?: STExpressOrderInfo; 
uiOperation?: number; 
strAppId?: string; 
strAppKey?: string; 
      }
      

      interface STModifyOrderStatusRsp {
        iErrCode?: number; 
strErrMsg?: string; 
uiOrderStatus?: number; 
iLogicCode?: number; //逻辑执行码,对应枚举LOGIC_CODE
      }
      

      interface STModifyPackageStatusReq {
        strPackageId?: string; //包裹订单ID
uiOperation?: number; //操作码
strExpressId?: string; //快递公司
uiExpressCode?: number; //公司编码
strPreDeliverTime?: string; //预计送达时间
      }
      

      interface STModifyPackageStatusRsp {
        iErrCode?: number; 
strErrMsg?: string; 
uiPackageStatus?: number; 
      }
      
// 修改商品退货订单
      interface STModifyRefundReq {
        stRefundInfo?: STRefundInfo; 
uiOperation?: number; 
strAppId?: string; 
strAppKey?: string; 
strRefundOrder?: string; 
      }
      

      interface STModifyRefundRsp {
        iErrCode?: number; 
strErrMsg?: string; 
uiRefundStatus?: number; 
strRefundOrder?: string; 
      }
      
// 读支付订单详细信息
      interface STReadPayOrderInfoReq {
        strPayOrderId?: string; 
strAppId?: string; 
strAppKey?: string; 
      }
      

      interface STReadPayOrderInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stPayInfo?: STPayInfo; //支付信息
vecGOrderInfo?: STGOrderInfo[]; //下单商品
stPostInfo?: STPostInfo; //用户快递信息
strNote?: string; //用户留言
vecOrderId?: string[]; //物流订单列表（目前只随机返回一个）
      }
      
// 读支付订单详细信息
      interface STReadPayExpressListReq {
        strOrderId?: string; 
strPayId?: string; 
      }
      

      interface STReadPayExpressListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecExpressOrderInfo?: STExpressOrderInfo[]; //物流单信息
stPayInfo?: STPayInfo; //支付单信息
      }
      
// 读物流订单详细信息
      interface STReadOrderInfoReq {
        strOrderId?: string; 
strAppId?: string; 
strAppKey?: string; 
strPackageId?: string; 
      }
      

      interface STChannelInfo{ {
        strChannelId?: 0; 
strChannelName?: string; 
      }
      

      interface STReadOrderInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stExpressOrderInfo?: STExpressOrderInfo; 
stChannelInfo?: STChannelInfo; //渠道信息
      }
      
// 读包裹单详细信息
      interface STReadPackageInfoReq {
        strPackageId?: string; 
      }
      

      interface STReadPackageInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stPackageInfo?: STPackageInfo; 
stPostInfo?: STPostInfo; 
      }
      
// 读物流订单包裹列表信息
      interface STReadPackageListReq {
        strOrderId?: string; 
strAppId?: string; 
strAppKey?: string; 
      }
      

      interface STReadPackageListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecPackageInfo?: STPackageInfo[]; 
      }
      
// 查询用户物流订单
      interface STReadUserOrderListReq {
        strUserId?: string; 
uiOrderStatus?: number; 
uiPageNum?: number; 
uiPageSize?: number; 
strAppId?: string; 
strAppKey?: string; 
      }
      

      interface STReadUserOrderListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecExpressOrderInfo?: STExpressOrderInfo[]; 
iTotalCount?: number; 
      }
      

      interface STReadUserRefundListReq {
        uiRefundStatus?: number; 
uiPageNum?: number; 
uiPageSize?: number; 
      }
      

      interface STReadUserRefundListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecRefundOrderInfo?: STRefundInfo[]; 
iTotalCount?: number; 
mapSellerName?: {
      [prop: string]: string
    }; 
      }
      
// 查询退货订单
      interface STReadRefundOrderReq {
        strRefundOrder?: string; 
strAppId?: string; 
strAppKey?: string; 
      }
      

      interface STReadRefundOrderRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stRefundInfo?: STRefundInfo; 
stPayInfo?: STPayInfo; 
      }
      
// 订单列表筛选项
      interface STFilterInfo {
        strStartCTime?: string; 
strEndCTime?: string; 
strOrderId?: string; 
strUserId?: string; 
strPhoneNum?: string; 
strSearchTerms?: string; 
      }
      
// iActType, 活动类型  //100以后是其他筛选入101定制商品
      interface STSearchRange {
        strSearchKey?: string; 
strSearchStart?: string; 
strSearchEnd?: string; 
      }
      

      interface STSearchInfo {
        vecConInfo?: STConInfo[]; //搜索筛选条件
strFullSearch?: string; //全文搜索关键词
vecSearchRange?: STSearchRange[]; //范围搜索关键词
      }
      
// 查询商户物流订单
      interface STReadSellerOrderListReq {
        strSellerId?: string; //商户ID
uiOrderStatus?: number; //订单状态
uiPageNum?: number; //页码
uiPageSize?: number; //页大小
strAppId?: string; 
strAppKey?: string; 
uiRefundFlag?: number; //退货标记
stFilterInfo?: STFilterInfo; //列表筛选项
uiArbitrateFlag?: number; //仲裁标记
uiRefundStatus?: number; //退货状态
uiShowRefund?: number; //显示退货订单
stSearchInfo?: STSearchInfo; //搜索用结构
vecOrderStatus?: number[]; //订单状态列表                            
vecRefundStatus?: number[]; //退款单状态列表（仅在退货标记生效时有用）
iReqType?: number; //请求类型（1：实时请求，2：离线拉取，3：离线全量拉取）
strContext?: string; //离线扫表上下文
      }
      

      interface STReadSellerOrderListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecExpressOrderInfo?: STExpressOrderInfo[]; 
iTotalCount?: number; 
strContext?: string; //离线扫表上下文
iRealTotalCount?: number; //实际命中数（可能不准）
      }
      
// 查询需要发货的包裹单列表
      interface STReadDeliveryOrderListReq {
        uiPageNum?: number; //页码
uiPageSize?: number; //页大小
stSearchInfo?: STSearchInfo; //搜索用结构
iReqType?: number; //请求类型（1：实时请求，2：离线拉取，3：离线全量拉取）
strContext?: string; //离线扫表上下文
vecFilterSKUId?: string[]; //过滤用的SKUList
uiShowRefund?: number; //显示退货订单
vecFilterProductId?: string[]; //过滤用的ProductList
      }
      

      interface STReadDeliveryOrderListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecExpressOrderInfo?: STExpressOrderInfo[]; 
iTotalCount?: number; 
strContext?: string; //离线扫表上下文
iRealTotalCount?: number; //实际命中数（可能不准）
bHasNext?: boolean; //离线拉取是否需要继续请求下一页
      }
      
// 日志流数据
      interface STLogFlowReq {
        strId?: string; 
emFlowType?: number; 
strAppId?: string; 
strAppKey?: string; 
      }
      

      interface STLogFlowRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecOrderFlow?: STLogFlow[]; 
      }
      

      interface STDivisionOrderInfo {
        strSellerId?: string; //商家ID
ddwPostageId?: number; //运费模版
vecGOrderInfo?: STGOrderInfo[]; 
iPreSaleTime?: number; //预计发货时间（时间戳）
strStoreId?: string; //仓储ID
strProductId?: string; //商品ID
      }
      

      interface STDivisionOrderReq {
        vecGOrderInfo?: STGOrderInfo[]; //下单SKUID
strChannelId?: string; //渠道ID
      }
      

      interface STDivisionOrderRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapExpressOrderInfo?: {
      [prop: string]: STExpressOrderInfo
    }; //物流订单结构(逐步废弃)
vecDivisionOrderInfo?: STDivisionOrderInfo[]; //拆单结构
strStoreId?: string; //仓储ID
      }
      
// 查询未处理订单数
      interface STReadUndealOrderNumReq {
        uiReqRole?: number; //角色(0用户，1商家，2运营)
strAppId?: string; 
strAppKey?: string; 
      }
      

      interface STReadUndealOrderNumRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stUndealOrderNumInfo?: STUndealOrderNumInfo; 
      }
      

      interface STUserOrderTransfer {
        strUserId?: string; //用户ID
strOrderId?: string; //订单ID  （依据操作的不同可能是支付ID，物流订单ID，维权ID）                       
uiOperation?: number; //订单操作（对应CODE_EXPRESS_OPERATION）
vecGOrderBase?: STGOrderBase[]; //相关商品订单结构
stPriceInfo?: STPriceInfo; //相关订单价格信息
strExpressId?: string; //快递单号
strExpressCode?: string; //快递公司代码
strPhoneNum?: string; //电话
uiCurStatus?: number; //操作后状态
stPostInfo?: STPostInfo; //邮寄信息
strRefundId?: string; //退款订单ID
iMTimestamp?: number; //修改时间戳
vecExpressOrderId?: string[]; //支付订单中转出来的相关物流订单ID
strSellerId?: string; //退款中转附带的商家ID
strPayOrderId?: string; //订单相关的支付流水号（支付单号）
strChannelId?: string; //下单渠道ID
      }
      

      interface STExpressInfo {
        strExpressId?: string; 
strOrderId?: string; 
stGOrderInfo?: STGOrderInfo; 
stExpressNode?: STExpressNode; 
      }
      

      interface STReadLastExpressReq {
        iReqNum?: number; //请求数量
      }
      

      interface STReadLastExpressRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecExpressInfo?: STExpressInfo[]; 
      }
      

      interface STAutoDeliverNotifyReq {
        strOrderId?: string; //订单号
strExpressId?: string; //快递单号
strExpressCode?: string; //快递公司代码
iStatus?: number; //当前状态（对应JD_DELIVER_STATUS）
strPreDeliverTime?: string; //预计到货时间
      }
      

      interface STAutoDeliverNotifyRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
  