
  
  
      declare enum emPayType {
        EM_PAY_TYPE_NONE = 0, 
EM_PAY_TYPE_ONLY_CASH = 1, //纯现金支付
EM_PAY_TYPE_CASH_AND_VCOIN = 2, //现金加v币组合支付
EM_PAY_TYPE_ONLY_VCOIN = 3, //纯V币支付
EM_PAY_TYPE_RECOMMEND = 4, //需要推荐的支付
EM_PAY_TYPE_CASH_AND_PDD_GOLDS = 5, //新增  现金+片多多金币
EM_PAY_TYPE_ONLY_PDD_GOLDS = 6, // 新增  纯片多多金币支付
      }
      
// 支付方式
      declare enum E_PAY_METHOD {
        EM_PAY_TOTAL = 0, //全款
EM_PAY_PREPAY = 1, //预付定金
      }
      

      declare enum emPricePrivilege {
        EM_PRIVILEGE_VIDEO_VIP = 1, //视频会员
EM_PRIVILEGE_VMALL_NEW_USER = 2, //新用户
      }
      

      declare enum emDiscountType {
        EM_DISCOUNT_TYPE_PRIVILEGE = 1, //用户身份特权抵扣
EM_DISCOUNT_TYPE_ACTIVITY = 2, //活动抵扣
EM_DISCOUNT_TYPE_PRESALE = 3, //预售抵扣
      }
      

      declare enum emProdPriceType {
        EM_PROD_PRICE_TYPE_VIP = 1, //VIP
EM_PROD_PRICE_TYPE_NEW_USER = 2, //新用户
EM_PROD_PRICE_TYPE_ACT = 3, //活动
EM_PROD_PRICE_TYPE_PRESALE = 4, //预售
EM_PROD_PRICE_TYPE_CHANNEL = 5, //渠道
      }
      
// 减免方式
      declare enum emReduceType {
        EM_REDUCE_NONE = 0, //无优惠
EM_REDUCE_TYPE_ACT = 1, //活动优惠
EM_REDUCE_TYPE_COUPON = 2, //优惠券
      }
      
// 支付账号类型
      declare enum emPayUserType {
        EM_PAY_USER_TYPE_QQ = 1, //QQ账号
EM_PAY_USER_TYPE_WX = 2, //微信账号openid
EM_PAY_USER_TYPE_VUID = 3, //视频用户id
      }
      
// 商品参与的活动类型
      declare enum emActType {
        E_ACTIVITY_SYSTEM = 1, //系统活动
E_ACTIVITY_OPERATE = 2, //运营活动
E_ACTIVITY_SECKILL = 3, //秒杀活动
E_ACTIVITY_OFFLINE = 4, //线下活动
      }
      
// 优惠券无法使用原因
      declare enum emCouponUnableUseReason {
        EM_COUPON_UNUSE_REASON_EXPIRE = 1, //优惠券过期
EM_COUPON_UNUSE_REASON_PRODUCT_NOT_MATCH = 2, //没有满足使用范围的商品
EM_COUPON_UNUSE_REASON_BEFORE_START_TIME = 3, //还没到使用起始时间的优惠券ID
EM_COUPON_UNUSE_REASON_NUM_LIMIT = 4, //商品个数多于使用限制
EM_COUPON_UNUSE_REASON_TOTAL_PRICE_NOT_MATCH = 5, //未满足金额要求
EM_COUPON_UNUSE_REASON_TRANS_PRICE_NOT_MATCH = 6, //邮费金额未满足
EM_COUPON_UNUSE_REASON_CHANNEL_NOT_MATCH = 7, //非本渠道优惠券
EM_COUPON_UNUSE_REASON_UNKNOW = 100, //未知原因
      }
      

      declare enum emPayCreditsType {
        EM_PAY_CREDITS_TYPE_VCOIN = 0, //V币
EM_PAY_CREDITS_TYPE_VSCORE = 1, //积分
      }
      
// 邮寄信息（用户系统DeliAddr与订单系统STOrderInfo的公共信息）
      interface STPostInfo {
        strConsignee?: string; // 收货人
strPhone?: string; // 联系电话
strProvince?: string; // 省
strCity?: string; // 市
strRegion?: string; // 区
strAddrDetail?: string; // 详细地址
strPost?: string; // 邮编
dwAreaId?: number; // 区域ID
      }
      

      declare enum emCredictType {
        E_DEDUCT_TOTAL = 1, //全部抵扣
E_DEDUCT_PARTIAL = 2, //部分抵扣
      }
      
// 积分抵扣配置信息
      interface STCredictInfo {
        iType?: number; //抵扣类型，对应emCredictType
bForce?: boolean; //强制使用
uiCredict?: number; //积分
uiCash?: number; //现金
      }
      
//  片多多金币抵扣商品
      interface STPddGoldsConf {
        iType?: number; //抵扣类型，对应emCredictType
bForce?: boolean; //强制使用
uiGolds?: number; //金币
uiCash?: number; //现金
      }
      
// ==========商品公共协议定义=================
      interface STValInfo {
        strVal?: string; //属性值
strRemark?: string; //属性值备注
      }
      

      interface STPropInfo {
        strPropName?: string; //属性名
vecPropValues?: string[]; //属性值
vecValInfo?: STValInfo[]; //属性值加备注
      }
      
// 商品特权抵扣信息
      interface STDiscountInfo {
        iPrivilegeId?: number; //特权id，参考emPricePrivilege
uiCash?: number; //特权对应的现金抵扣
      }
      
// 特权信息
      interface STPrivilegeInfo {
        iPrivilegeId?: number; //特权id，参考emPricePrivilege
bIsMatch?: boolean; //是否符合特权
uiDiscount?: number; //特权抵扣的金额
iLevel?: number; //特权等级
      }
      

      interface STActDiscountInfo {
        strActId?: string; //活动ID
strActTitle?: string; //活动名称
uiCash?: number; //活动优惠金额（差价）
iType?: number; //活动类型
uiPrice?: number; //指定的价格，这个有值时uiCach无效
      }
      
// 商品价格标签
      interface STPriceTag {
        iPriceType?: number; //参考emProdPriceType
strTagName?: string; //标签名称，如果是活动就是活动名称
uiDiscount?: number; //活动、身份价抵扣金额
uiPrice?: number; //现金价格
iActType?: number; //商品活动类型,只有活动价才有，参考emActType
strActId?: string; //活动ID
uiCredits?: number; //积分价
uiCreditsDiscount?: number; //积分抵扣金额，无则是强制使用积分价
uiDepositPrice?: number; //订金价格
uiRestPrice?: number; //尾款
uiPddGolds?: number; //金币 新增
uiPddGoldsDiscount?: number; //金币抵扣 新增
      }
      
// SKU优惠减免信息
      interface STSkuReduceInfo {
        strSkuId?: string; //skuid
uiReducePrice?: number; //优惠金额
uiGoodsNum?: number; //商品个数
      }
      
// 优惠方式信息
      interface STPerferential {
        iReduceType?: number; //参考emReduceType
strId?: string; //优惠的id。如果是促销就是活动id，优惠券就是优惠券id
vecSkuReduce?: STSkuReduceInfo[]; //符合条件的商品
strBatId?: string; //优惠券批次id
iUnableUseReason?: number; //不能使用的原因,参考emCouponUnableUseReason
iSaleType?: number; //优惠类型，参考EMSaleType
      }
      
// 推广优惠价格信息
      interface STSpreadPriceInfo {
        iPriceType?: number; //参考emProdPriceType
uiReducePrice?: number; //相比实际购买价格优惠金额
uiSpreadPriceSum?: number; //推广总价格
      }
      

      interface STProdAttrInfo {
        uiHeight?: number; //单位，mm
uiLength?: number; 
uiWidth?: number; 
uiWeight?: number; //单位，g
      }
      
// 退换货策略类型
      declare enum EMRepolicyType {
        E_RETURN_NO_REASON = 0, //无理由退换货
E_RETURN_NOT_SUPPORT = 1, //不支持退换货
E_RETURN_AFTER_DELIVERY = 2, //发货前不支持退换货
      }
      
// 预售金额相关信息
      interface STDepositInfo {
        iDepRatio?: number; //定金比例， 为0表示非定金
iDepStartTime?: number; //定金支付开始时间
iDepEndTime?: number; //定金支付结束时间
iRestStartTime?: number; //尾款支付开始时间
iRestEndTime?: number; //尾款支付结束时间
iCrowdStartTime?: number; //众筹开始时间
iCrowdEndTime?: number; //众筹结束时间
uiTargetNum?: number; //众筹目标件数
      }
      

      declare enum emPresaleStatus {
        E_PRESALE_TYPE_FULL = 0, 
E_PRESALE_TYPE_DEPOSIT = 1, 
      }
      
// 商品SKU信息（商品STProductSkuInfo与订单系统STGOrderInfo的公共信息）
      interface STProductSkuInfo {
        strSKUId?: string; //SKUID
strProductId?: string; //商品ID
vecProps?: STPropInfo[]; //SKU所包含的属性信息
strImgUrl?: string; //SKU所对应图片
iQuantity?: number; //可卖库存：实际库存减预扣库存
uiVCoinPrice?: number; //V币价格
uiCashPrice?: number; //现金价格，单位：分
uiPureVCoinPrice?: number; //纯V币价格
uiPureCashPrice?: number; //纯现金价格，单位：分
uiOriPrice?: number; //原价，单位：分 
uiBuyLimit?: number; //限购数量
strTitle?: string; //商品标题
strSellerId?: string; //卖家ID
strSeller?: string; //卖家名称
iSaleType?: number; //0 -- 正常  1 -- 预售
iPreSaleTime?: number; //三期新增字段s//预计发货时间
uiRealPrice?: number; //实际显示价格，可能是特权价格
vecPrivilegeId?: number[]; //计算特权价格的特权
vecPrivelegeInfo?: STPrivilegeInfo[]; //全部折扣信息
iSaleStartTime?: number; //五期字段s//实际开售时间
vecActInfo?: STActDiscountInfo[]; //活动信息
uiExpectPrice?: number; //期望价格
vecRealPriceTag?: STPriceTag[]; //最终价格标签
vecExpectPriceTag?: STPriceTag[]; //期望价格标签
uiSpreadPrice?: number; //推广价格
vecSpreadPriceTag?: STPriceTag[]; //推广价格标签
uiViewSale?: number; //外显销量
iRealQuantity?: number; //SKU总库存
uiSale?: number; //SKU实际销量
iExpTempId?: number; //运费模板ID
uiPresaleDiscount?: number; //预售折扣
stProdAttr?: STProdAttrInfo; //商品的基础属性，长宽高等
strSecCatId?: string; //二级真实类目ID
strSerialNum?: string; //SKU序列号
strBatchId?: string; //批次ID
strStore?: string; //仓储ID
strOuterId?: string; //第三方ID
strCredictConf?: STCredictInfo; //积分配置
iStatus?: number; //SKU 状态
uiGiftCredict?: number; //赠送积分
strJsExtInfo?: string; //json串，SKU的扩展信息
uiSupPrice?: number; //SKU供货价，草场地设置
strPriCatId?: string; //一级真实类目ID
strProdCus?: string; //商品定制信息,json串，{"bCustom":false}
strSkuCus?: string; //退换货策略IDs//46 optional string strRePolicy;						s//SKU定制信息,{"strDesign":"123"}
iRePolicyType?: number; //退换货策略类型, EMRepolicyType
mapExtInfo?: {
      [prop: string]: string
    }; //SKU扩展信息，map形式，与41字段内容相同
stDeposit?: STDepositInfo; //定金预售信息
iPresaleType?: number; //预售类型
strPddGoldsConf?: STPddGoldsConf; //片多多配置
      }
      
// 商品价格信息
      interface STPriceInfo {
        iPayType?: number; //支付类型，参考emPayType
uiCashPrice?: number; //现金价格，单位：分
uiVCoinPrice?: number; //V币价格
uiVCoinDiscount?: number; //其中V币抵扣的金额
uiOriPrice?: number; //原价
vecDisPrivilege?: STPrivilegeInfo[]; //用于抵扣的特权
uiPrivilegeDiscount?: number; //特权抵扣金额
uiPureCashPrice?: number; //纯现金价格，单位：分
vecActInfo?: STActDiscountInfo[]; //活动信息
uiPreferentialPrice?: number; //促销或优惠券优惠金额
vecPerferential?: STPerferential[]; //优惠信息
vecRealPriceTag?: STPriceTag[]; //最终价格标签
uiPddGoldsPrice?: number; //新增  金币价格
uiPddGoldsDiscount?: number; //新增  金币抵扣金额
      }
      
// 统计价格信息
      interface STPayPriceInfo {
        uiRealCashSum?: number; //实际支付现金总额
uiRealVCoinSum?: number; //实际支付积分总额
uiVCoinDiscountSum?: number; //积分抵扣金额
uiVIPReduceCashSum?: number; //VIP特权优惠金额
uiTransPriceSum?: number; //运费总金额
uiProductCashSum?: number; //商品累计总金额
uiReduceCashSum?: number; //所有优惠的总金额
uiPreferentialSum?: number; //促销或优惠券优惠金额
vecPerferential?: STPerferential[]; //优惠信息
vecSpreadPriceInfo?: STSpreadPriceInfo[]; //推广优惠信息(废弃)
uiProductReduceSum?: number; //商品优惠金额
usPayCreditsType?: number; //积分类型，参考emPayCreditsType
uiDeposit?: number; //订金 
uiPddRealGoldsSum?: number; //实际支付金币总额
uiPddGoldsDiscountSum?: number; //金币抵扣金额
      }
      
// 物流单价格信息
      interface STExpressOrderPriceInfo {
        strSellerId?: string; //商家id
stSumPriceInfo?: STPayPriceInfo; //物流单总价信息     
mapSku2PriceInfo?: {
      [prop: string]: STPriceInfo
    }; //各sku价格信息
strNote?: string; //留言信息
strStoreId?: string; //仓储ID
      }
      
// 未读数结构
      interface STUndealOrderNumInfo {
        uiUnpayNum?: number; //待付款数
uiUndeliveryNum?: number; //待发货数
uiDeliverNum?: number; //待收货数
uiUncommentNum?: number; //待评价数
uiRefundNum?: number; //售后订单数
uiArbitrateNum?: number; //维权订单数
uiFreightNum?: number; //退运费单数
      }
      
// ==============商品订单公共协议定义===============
      interface STGOrderBase {
        strGOrderId?: string; //商品订单ID
strSkuId?: string; //SKUID
uiGoodsNum?: number; //购买数量
strCTime?: string; //购买时间
uiVCoinPrice?: number; //V币数
uiPriceSum?: number; //现金价格，单位：分
strSkuTitle?: string; //商品标题
strProductId?: string; //商品ID
strExpressOrderId?: string; //相关物流订单ID
strBatchId?: string; //批次ID
      }
      
// 单条快递物流信息
      interface STExpressNode {
        iState?: number; //状态
strStateName?: string; //状态名称
strTime?: string; //物流更新时间
strContext?: string; //物流内容
      }
      
// 优惠类型
      declare enum EMSaleType {
        E_DIRECT_DISCOUNT = 1, //现金直减
E_THRESHOLD_DISCOUNT = 2, //满额减
E_FREE_SHIPPING_DISCOUNT = 3, //免邮
E_PERCENT_DISCOUNT = 4, //折扣
E_FREE_DISCOUNT = 5, //免单
      }
      
// 优惠信息
      interface STSaleInfo {
        iStartTime?: number; //开始时间
iEndTime?: number; //结束时间
iSaleType?: number; //优惠类型
uiCash?: number; //可减现金
uiThreshold?: number; //门槛
iPercent?: number; //折扣百分比
iLimitProductNum?: number; //优惠券使用条件，为1则订单中仅限一件商品；为0则不限制
      }
      
// 库存搜索：iUnderstock（3:充足，2不足，1:无库存）
      interface STConInfo {
        strKey?: string; 
vecVal?: string[]; 
vecExtInfo?: string[]; //各val的额外数据，比如二级类目的一级类目ID
      }
      
// 范围信息结构
      interface STScopeInfoElem {
        iType?: number; //类型，0 无商品 1全部商品，2部分商品, 3商品池
vecAddCon?: STConInfo[]; //参与条件
vecDelCon?: STConInfo[]; //剔除条件
      }
      
// 范围信息
      interface STScopeInfo {
        vecScope?: STScopeInfoElem[]; 
vecProdId?: string[]; //干预的商品列表
iSortType?: number; //排序类型
      }
      
//  提醒类型
      declare enum emRemindType {
        EM_SKU_LACK_REMIND = 1, // 库存及缺货提醒,已弃用
EM_TO_DELIVER_REMIND = 2, // 非预约商品待发货订单提醒
EM_AFTER_SALE_REMIND = 3, // 售后提醒(待维权订单提醒)
EM_ARBIT_REMIND = 4, // 仲裁提醒(待仲裁订单提醒)
EM_VERIFY_REMIND = 5, // 审核提醒(商品，活动，优惠券的审核),已弃用
EM_PROD_VERIFY_REMIND = 6, // 商品审核提醒
EM_ACT_VERIFY_REMIND = 7, // 活动审核提醒
EM_COUP_VERIFY_REMIND = 8, // 优惠券审核提醒
EM_PRESELL_TO_DELIVER_REMIND = 9, // 预约商品待发货订单提醒
      }
      
//  定时任务的消息
      interface STRemindMsgInfo {
        strQqNumber?: string; // 用户QQ
strWxVuid?: string; // 用户微信对应的vuid
iRemindId?: number; // 提醒类型
strHltQqNumber?: string; // HeadLoginToken中QQ号
strHltQqKey?: string; // HeadLoginToken中skey
strHltVuid?: string; // HeadLoginToken中vuid
      }
      
//  定时任务本地存储(用于删除定时任务)
      interface STRemindTaskInfo {
        strQqNumber?: string; // 用户QQ
iRemindId?: number; // 提醒类型
strAppId?: string; // 业务ID
strMsgId?: string; // 消息ID
strCfgKey?: string; // 定时ID
      }
      
// 支付用户信息
      interface STPayUserInfo {
        iUserType?: number; //账号类型，参考emPayUserType
strUserId?: string; //账号
      }
      
// ==========================商品及活动角标公共协议====================
      declare enum emScriptType {
        E_UPPER_RIGHT_SCRIPT = 1, //简单角标,文字角标
E_COVER_SCRIPT = 2, //图片角标
      }
      
// 角标内容
      interface STScriptContentInfo {
        iType?: number; //角标类型,emScriptType
strText?: string; //角标文案
strPic?: string; //角标图片
iStyle?: number; //角标样式，前端负责解释含义
strComposPic?: string; //抠图合成图片
strCovComposPic?: string; //封面合成图片
      }
      

      declare enum emScriptScene {
        E_VMALL = 1, //商城内
E_PLAY_BANNER = 2, //播放底层banner
      }
      
// 角标
      interface STScriptInfo {
        iScene?: number; //显示场景，对应emScriptScene
bShow?: boolean; //是否显示
vecContent?: STScriptContentInfo[]; //角标
      }
      
// /***********************快递信息***********************
      interface STExpCompanyInfo {
        iCompanyId?: number; //快递公司ID
strCompanyCode?: string; //快递公司编码
strCompanyName?: string; //快递公司名称
      }
      
  