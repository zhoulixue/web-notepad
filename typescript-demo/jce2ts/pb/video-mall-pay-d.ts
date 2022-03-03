
  // *
// *
// 1、结算、下单L5
// *
// test:64366145:131072
// *
// online:897537
// 65536
// *
// 秒杀online：
// *
// 2、支付相关
// *
// test:64366145
// 65536
// *
// online:897537
// 131072
  // 交易中心命令号
      declare enum emPayCenterCmd {
        EM_PAY_CENTER_CMD_PLACE_ORDER = 0xf287, //下单
EM_PAY_CENTER_CMD_PAY = 0xf289, //发起支付
EM_PAY_CENTER_CMD_PAY_NOTIFY = 0xf28a, //页面支付回调通知
EM_PAY_CENTER_CMD_DELIVERY_NOTIFY = 0xf28b, //发货回调通知
EM_PAY_CENTER_CMD_PLACE_ORDER_ABNORMAL = 0xf15, 
EM_PAY_CENTER_CMD_PAY_ABNORMAL = 0xf16, 
EM_PAY_CENTER_CMD_REFUND = 0xf28c, //退款
EM_PAY_CENTER_CMD_REFUND_ABNORMAL = 0xf18, 
EM_PAY_CENTER_CMD_REFUND_ORDER_CHECK = 0xf28e, // 退款中订单退款结果校验
EM_PAY_CENTER_CMD_CANCEL_PAY_ORDER = 0xf28d, //取消待支付订单
EM_PAY_CENTER_CMD_PAY_ORDER_TIMEOUT = 0xf28f, //支付中订单状态超时
EM_PAY_CENTER_CMD_BALANCE = 0xf398, //结算
EM_PAY_CENTER_CMD_TRANSFER = 0xf681, //额外退款转账
EM_PAY_CENTER_CMD_DELIVERY_TRANSFER_TEST = 0xf745, //测试环境发货中转
EM_PAY_CENTER_CMD_DELIVERY_TRANSFER = 0xf746, //校验退款结果s//正式环境发货中转
      }
      
// 下单流程返回码（包括结算和下单）
      declare enum emPlaceOrderRetCode {
        EM_PLACE_ORDER_QUANTIGY_NOT_ENOUGH = 2004, //商品库存不足
EM_PLACE_ORDER_BUY_NUM_LIMIT = 2019, //购买数量限制
EM_PLACE_ORDER_VCOIN_NOT_ENOUGH = 2020, //V币余额不足
EM_PLACE_ORDER_VCOIN_LOCK_NOT_NOT_ENOUGH = 2021, //由于V币冻结导致余额不足
EM_PLACE_ORDER_ERRCODE_QUANTIGY_NOT_ENOUGH = 2003, //库存不足
EM_PLACE_ORDER_ERRCODE_NEW_USER_ORDER_LIMIT = 2028, //新人下单限制
EM_PLACE_ORDER_ERRCODE_CHECK_PERFER_FAIL = 2026, //购买的商品无法使用优惠
      }
      
// 支付错误码
      declare enum emPayRetCode {
        EM_PAY_ACROSS_PLATFORM = 2024, //跨平台支付
      }
      
// 支付页面返回的支付结果状态
      declare enum emPayNotifyState {
        EM_PAY_CENTER_NOTIFY_STATE_SUCCESS = 1, //支付成功
EM_PAY_CENTER_NOTIFY_STATE_FAIL = 2, //支付失败
EM_PAY_CENTER_NOTIFY_STATE_UNKNOW = 3, //支付结果未知
      }
      
// 取消待支付订单的场景
      declare enum emCancleOrderScene {
        EM_PAY_CENTER_CANCLE_ORDER_USER = , //用户主动取消
EM_PAY_CENTER_CANCLE_ORDER_TIMEOUT = 2, //订单超时取消
      }
      
// 退款操作类型
      declare enum emRefundOper {
        EM_PAY_CENTER_REFUND_OPER_ARBITRATE = 1, //仲裁结果
EM_PAY_CENTER_REFUND_OPER_SELLER_CONFIRM = 2, //商家确认
EM_PAY_CENTER_REFUND_OPER_EXAMINE_TIMEOUT = 3, //退款单审批超时
      }
      
// 支付通知回调操作类型
      declare enum emPayNotifyOper {
        EM_PAY_CENTER_PAYNOTIFY_OPER_QUERY = 1, //查询支付结果
      }
      
// 平台id
      declare enum emPlatformID {
        EM_PLATFORM_NONE = 0, 
EM_PLATFORM_VIDEO_APP = 1, //视频APP
EM_PLATFORM_WEIXIN_APP = =2, //微信APP
EM_PLATFORM_QQ_APP = 3, //手Q APP
EM_PLATFORM_MINI_PROGRAM = 4, //微信小程序
      }
      
// 结算操作类型
      declare enum emBlanceOperation {
        EM_BLANCE_OPER_TYPE_RECOMMEND = 100, //系统默认推荐结算
EM_BLANCE_OPER_TYPE_USER_CHOOSE = 101, //用户选择价格结算
      }
      
// 退款校验操作
      declare enum emRefundCheckOper {
        EM_REFUND_CHECK_OPER_REFUND_ORDER = 1, //订单退款检验
EM_REFUND_CHECK_OPER_PAY_CANCEL_ORDER = 2, //支付取消的订单自动退款校验
EM_REFUND_CHECK_OPER_REPAY_ORDER = 3, //订单重复支付退款
      }
      
// 转账状态
      declare enum emTranscationStatus {
        EM_TRANS_STATUS_SUCC = 1, //转账成功
EM_TRANS_STATUS_FAIL = 2, //转账失败
EM_TRANS_STATUS_PROCESSING = 3, //转账处理中
      }
      
// 排队状态
      declare enum emQueueUpStatus {
        QUEUEUP_STATUS_INIT = 0, //没有排队
QUEUEUP_STATUS_FINISH = 1, //已经排队完成并下单
QUEUEUP_STATUS_QUEUING = 2, //资源不足s//QUEUEUP_STATUS_SRC_LACK = 5,  s//节点已被淘汰s//QUEUEUP_STATUS_DESERT = 4,    s//队列已满s//QUEUEUP_STATUS_FULL = 3,      s//排队中
      }
      
// 限购类型
      declare enum emBuyLimitType {
        EM_BUY_LIMIT_TYPE_NONE = 0, 
EM_BUY_LIMIT_TYPE_ACT = 1, //活动限购
EM_BUY_LIMIT_TYPE_ACT_SKU = 2, //活动商品限购
EM_BUY_LIMIT_TYPE_SKU = 3, //商品基本限购
      }
      
// 支付订单
      interface STPayDivisionOrderInfo {
        strNote?: string; //留言信息
      }
      
// 排队信息
      interface STQueueUpInfo {
        iStatus?: number; //排队状态，参考emQueueUpStatus
ddwSeqNum?: number; //排第几
strQueueSession?: string; //排队会话信息，同一个会话业务需要回带
      }
      
// 登录态信息
      interface STVmallLoginInfo {
        TokenUin?: number; 
TokenValue?: string; 
TokenAppID?: string; 
TokenKeyType?: number; 
bMainLogin?: boolean; 
      }
      
// 下单请求
      interface STPlaceOrderReq {
        vecGoodsInfo?: STGoodsInfo[]; //购买的商品信息
stPostInfo?: STPostInfo; //邮寄地址信息
strNote?: string; //买家留言
uiPayVCoin?: number; //支付的V币
stPerfInfo?: STPerferential; //用户选择的优惠方式
strPayTag?: string; //下单渠道信息
ulDeliAddrId?: number; //用户地址ID
vecPayDivisionOrderInfo?: STPayDivisionOrderInfo[]; 
strOmgId?: string; 
strChannelId?: string; //渠道ID
      }
      

      interface STSkuErrInfo {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      

      interface STBuyLimitErrInfo {
        strSkuId?: string; 
strActId?: string; 
iLimitNum?: number; //限购数量
iBuyLimitType?: number; //限购类型,参考emBuyLimitType
      }
      
// 下单响应
      interface STPlaceOrderRsp {
        iRetCode?: number; //返回码, 参考枚举值
strErrMsg?: string; //错误信息
strPayOrderId?: string; //支付订单id
mapSKUId2ErrInfo?: {
      [prop: string]: STSkuErrInfo
    }; //信息的sku错误信息（废弃）
stQueueInfo?: STQueueUpInfo; //排队信息
stBuyLimitErrInfo?: STBuyLimitErrInfo; //限购错误信息
      }
      
// 下单异常请求消息
      interface STPlaceOrderAbnormalReq {
        strPayOrderId?: string; //支付订单id
strUserId?: string; //用户id
iTime?: number; //下单时间
      }
      
// 支付请求
      interface STPayReq {
        strPayOrderId?: string; //支付订单id
emPayPlatform?: emPlatformID; //支付的平台，参考emPlatformID
strPayOpenId?: string; //支付的用户ID，微信openid
      }
      
// 支付响应
      interface STPayRsp {
        iRetCode?: number; //返回码, 参考枚举值
strErrMsg?: string; //错误信息
strGoodsTokenUrl?: string; //调用米大师页面时需要的参数
strTokenId?: string; //调用米大师页面是的token参数
iAppId?: number; //调用米大师页面的appid
strFPayOpenId?: string; //米大师支付下单时的openid
      }
      
// 支付异常请求消息
      interface STPayAbnormalReq {
        strPayOrderId?: string; //支付订单id
strUserId?: string; //用户id
      }
      
// 支付通知请求(H5调用)
      interface STPayNotifyReq {
        strPayOrderId?: string; //支付订单id
iPayState?: number; //支付状态，参考emPayNotifyState
uiOperation?: number; //操作类型，参考emPayNotifyOper
      }
      
// 支付通知响应(H5调用)
      interface STPayNotifyRsp {
        iRetCode?: number; //返回码, 参考枚举值
strErrMsg?: string; //错误信息
iResultState?: number; //支付状态，参考emPayNotifyState
      }
      
// 发货通知请求
      interface STDeliveryNotifyReq {
        iAppId?: number; 
strProductId?: string; 
iProductNum?: number; 
iAmt?: number; //用户实际支付金额，单位：分（人民币）
strPayOrderId?: string; 
strMidasOrderId?: string; 
strVersion?: string; 
strProvideType?: string; 
strMetaData?: string; 
strChannel?: string; 
strChannelOrderId?: string; 
strOpenId?: string; 
vecLoginInfo?: STVmallLoginInfo[]; 
strOutTradeNo?: string; 
emPayPlatform?: emPlatformID; //支付的平台，参考emPlatformID
      }
      
// 发货通知响应
      interface STDeliveryNotifyRsp {
        iRetCode?: number; //返回码, 参考枚举值
strErrMsg?: string; //错误信息
      }
      
// 退款请求
      interface STRefundReq {
        strRefundOrderId?: string; //支付单
uiOperation?: number; //退款操作，参考订单系统的退款操作码STATUS_REFUND_ORDER
uiArbitCashPrice?: number; //仲裁退款现金金额
strArbitResult?: string; //仲裁描述
      }
      
// 退款响应
      interface STRefundRsp {
        iRetCode?: number; //返回码, 参考枚举值
strErrMsg?: string; //错误信息
uiRefundStatus?: number; //退款单状态
      }
      
// 退款异常请求消息
      interface STRefundAbnormalReq {
        strPayOrderId?: string; 
strRefundOrderId?: string; 
uiOperation?: number; //退款操作，参考emRefundOper
      }
      
// 取消待支付订单
      interface STCancelPayOrderReq {
        strPayOrderId?: string; //支付订单号
uiScene?: number; //场景，参考emCancleOrderScene
strReason?: string; //取消原因
      }
      

      interface STCancelPayOrderRsp {
        iRetCode?: number; //返回码, 参考枚举值
strErrMsg?: string; //错误信息
      }
      
// 结算请求
      interface STBalanceReq {
        iOperationId?: number; //操作id,参考emBlanceOperation
vecGoodsInfo?: STGoodsInfo[]; //购买的商品信息
stPerfInfo?: STPerferential; //用户选择的优惠方式
ulDeliAddrId?: number; //用户地址ID
stPostInfo?: STPostInfo; //邮寄地址信息
uiPayVCoin?: number; //支付的V币
strChannelId?: string; //渠道ID
      }
      

      interface STPaySkuInfo {
        stProductSkuInfo?: STProductSkuInfo; 
stPriceInfo?: STPriceInfo; 
      }
      

      interface STExressOrderProductInfo {
        strSellerId?: string; //商家id
strSeller?: string; //商家名称			
stSumPriceInfo?: STPayPriceInfo; //物流单总价信息  
map2PaySkuInfo?: {
      [prop: string]: STPaySkuInfo
    }; 
      }
      
// 结算响应
      interface STBalanceRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapSKUId2ErrInfo?: {
      [prop: string]: STSkuErrInfo
    }; //sku错误信息（废弃）
stPayPriceInfo?: STPayPriceInfo; 
vecExpressOrderProductInfo?: STExressOrderProductInfo[]; 
stUserPayProp?: STUserPayProp; //用户具有的支付属性，比如V币等
vecAllPreferentail?: STPerferential[]; //支持的所有优惠方式
vecResultPreferentail?: STPerferential[]; //计价使用的优惠方式
vecUnableUsePreferentail?: STPerferential[]; //不能使用的优惠方式
stBuyLimitErrInfo?: STBuyLimitErrInfo; //限购错误信息
stUserPddGlodsProp?: UserPddGlodsProp; //用户具有的支付属性，比如金币等
      }
      

      interface STVMallTranscationIdInfo {
        wIdType?: short; //订单类型，参考EM_TRANS_ID_TYPE_WX
strTranscationId?: string; //订单id
      }
      

      interface STVMallTransferReq {
        stUserInfo?: STPayUserInfo; //转账用户账号信息
uiCash?: number; //转账金额，单位：分
strRefundOrder?: string; //额外退款订单号
lVUid?: number; //转账用户vuid
      }
      

      interface STVMallTransferRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iStatus?: number; //转账状态，参考emTranscationStatus
      }
      
// 退款订单超时请求
      interface STRefuncOrderTimeOutReq {
        strRefundOrderId?: string; //退款单id
strUserId?: string; //用户id
strPayOrderId?: string; //对应支付订单id
uiRefundCashPrice?: number; //退货现金金额
uiRefundVCoin?: number; //退货V币数
iRefundReasonType?: number; //退款理由类型
strPayUserId?: string; //支付用户ID
uiTransPrice?: number; //需要退的运费
uiArbitCashPrice?: number; //仲裁退款现金金额
iOperation?: number; //操作id，参考emRefundCheckOper
strPhone?: string; //用户联系电话
strSkuId?: string; //申请退款的sku
uiRefundType?: number; //退款类型，参考emRefundType
strChannelId?: string; //渠道ID
usPayCreditsType?: number; //积分类型，参考emPayCreditsType
uiGoodsNum?: number; //退货数量
strBatchId?: string; //商品批次ID
vecRealPriceTag?: STPriceTag[]; //标签
uiRefundMethod?: number; //退款方式对应E_REFUND_METHOD
stUserInfo?: STPayUserInfo; //转账用户账号信息
      }
      

      interface STRefuncOrderTimeOutRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
// 支付单超时请求
      interface STPayOrderTimeOutReq {
        strPayOrderId?: string; //支付订单id
strUserId?: string; //用户VUID
uiStatus?: number; //当前订单状态
strPayUserId?: string; //支付用户ID
emPayPlatform?: emPlatformID; //支付的平台，参考emPlatformID
      }
      

      interface STPayOrderTimeOutRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
// 额外退款结果校验请求
      interface STTransferCheckResultReq {
        strRefundOrder?: string; //额外退款单id
stUserInfo?: STPayUserInfo; //转账用户账号信息
lVUid?: number; //转账用户vuid
      }
      
// 转账结果校验请求
      interface STTransferCheckResultRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
// 发货信息转发
      interface STDeliveryTransferReq {
        strPayOrderId?: string; //支付订单
lVUid?: number; //用户vuid
strOpenId?: string; //midas下单时的openid	
strChannelOrderId?: string; //通道订单号，比如微信订单号
uiPayCash?: number; //支付金额（单位：分）
strMidasOutTradeNo?: string; //米大师订单号
emPayPlatform?: emPlatformID; //支付的平台，参考emPlatformID
      }
      

      interface STDeliveryTransferRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
  