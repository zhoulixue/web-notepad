
  // 正式L5：897473:655360
  
      declare enum ModuleCmd {
        CMD_MNG_MODIFY_COUPON_BATCH = , //添加、修改优惠券批次
CMD_MNG_CHANGE_COUPON_BATCH_STATUS = 0xf55f, //审核、撤销审核、删除、失效
CMD_MNG_EDIT_PRODUCT = 0xf539, //生效状态下修改优惠券适用商品ID，无需再次审核
CMD_MNG_INC_COUPON_NUM = 0xf53a, //补制券，需要转入审核状态       
CMD_MNG_READ_COUPON_BATCH_LIST = 0xf53b, //获取优惠券批次列表
CMD_MNG_READ_COUPON_BATCH_INFO = 0xf53c, //获取某优惠券详细信息
CMD_MNG_READ_PRODUCT_COUPON = 0xf542, //管理端获取商品可用优惠券列表
CMD_MNG_GET_PRODUCT_COUPON = 0xf8a8, //管理端获取商品可用优惠券列表(分页)
CMD_MNG_EXCLUDE_PRODUCT = 0xf924, //指定商品不可使用指定批次优惠券
CMD_MNG_COUPON_TO_CDK = 0xfc97, //根据优惠券号查询是哪个cdk兑换而来的
CMD_MNG_ADD_COUPON_BATCH = 0xf533, //增加优惠券批次
CMD_MNG_EDIT_COUPON_BATCH = 0xf534, //未生效状态下修改优惠券批次信息
CMD_MNG_AUDIT_COUPON_BATCH = 0xf535, //审核优惠券批次
CMD_MNG_CANCEL_AUDIT_COUPON_BATCH = 0xf536, //审核状态下撤销审核
CMD_MNG_DELETE_COUPON_BATCH = 0xf537, //删除优惠券批次，隐藏不可见
CMD_MNG_INVALID_COUPON_BATCH = 0xf538, //用户端协议s//使优惠券批次失效
CMD_USER_GET_COUPON_SAFE = 0xfabd, //领优惠券接口，加入安全机制
CMD_USER_READ_AVAILABLE_COUPON_LIST = 0xf53e, //获取订单可用优惠券列表
CMD_USER_CHECK_COUPON = 0xf53f, //检查优惠券是否可使用
CMD_USER_USE_COUPON = 0xf540, //使用优惠券
CMD_USER_RETURN_COUPON = 0xf541, //退回优惠券
CMD_USER_READ_COUPON_LIST = 0xf543, //获取用户优惠券列表
CMD_USER_READ_COUPON_INFO = 0xf544, //获取某优惠券详情
CMD_USER_GET_QUALIFY_PRODUCT = 0xf58d, //筛选符合优惠券批次规则的商品
CMD_USER_GET_COUPON_NUM = 0xf595, //获取用户可使用的优惠券数量
CMD_USER_GET_COUPON_BATCH_PRODUCT = 0xf596, //获取优惠券批次可用的商品
CMD_USER_BATCH_READ_COUPON_BATCH_INFO = 0xf597, //批量获取优惠券批次详情  (提供http接口给玲珑系统读取，C端读取，不鉴权；ady B端订单那里也用到了，后续增加字段需要更新cgi)
CMD_USER_BATCH_READ_COUPON_INFO = 0xf598, //批量获取优惠券详情
CMD_USER_READ_PRODUCT_COUPON = 0xf59d, //用户端获取商品优惠券列表
CMD_USER_GET_COUPON = 0xf53d, //CDK接口s//发放优惠券 废弃
CMD_CDK_GET_CDK = 0xf730, //生成优惠券CDK
CMD_CDK_REDEEM_CDK = 0xf731, //给搜索系统的接口s//兑换优惠券CDK 
CMD_SEARCH_READ_COUPON_BATCH_LIST = 0xf545, //返回优惠券批次ID列表
CMD_SEARCH_READ_COUPON_BATCH_INFO = 0xf546, //返回优惠券批次详情中的条件信息，包括包含条件和排除条件
CMD_SEARCH_READ_PROD_POOL_COUPON_BATCH_LIST = 0xfa03, //中转命令字s//返回商品池ID被哪些优惠券批次关联
CMD_VMALL_COUPON_STATUS_TRANSFER_TEST = 0xf8b3, //优惠券中转测试环境
CMD_VMALL_COUPON_STATUS_TRANSFER_ONLINE = 0xf8b2, //给VIP的接口s//优惠券中转正式环境
CMD_VIP_GET_COUPON_BATCH_INFO = 0xf576, //查询优惠券批次详情，VIP使用
      }
      

      declare enum ModuleErrCode {
        RT_SUC = 0, 
RT_ERR_PACKET = 1001, 
RT_INPUT_INVALID = 1002, 
RT_SERVER_ERROR = 1003, 
RT_ENCODE_RSP_PKG_FAIL = 1004, //自定义错误码
EM_RT_QUERY_ROLE_CHECK_FAIL = 2001, // 查询权限系统失败
EM_RT_ACTION_NOT_PERMITTED_ERR = 2002, // 该用户无权限执行此操作
EM_RT_QUERY_NUM_ALLOC_FAIL = 2003, // 查询放号系统失败
EM_RT_QUERY_MYSQL_FAIL = 2004, // 数据库操作失败
EM_RT_QUERY_REDIS_FAIL = 2005, // redis操作失败
EM_RT_COUPON_BATCH_NOT_FOUND = 2006, // 优惠券批次不存在
EM_RT_COUPON_BATCH_NOT_IN_EDIT_AVAILABLE_STATUS = 2007, //优惠券批次是生效或者补制券或者失效状态，不能编辑
EM_RT_STATUS_CMD_NOT_FOUND = 2008, // 状态动作未找到，无法执行操作
EM_RT_NOT_IN_AUDIT_STATUS = 2009, // 不在审核状态，无法通过或者不通过审核或者取消审核
EM_RT_ONLINE_COUPON_CAN_NOT_DEL = 2010, // 生效、失效、补制券状态的优惠券批次无法删除
EM_RT_NOT_IN_ONLINE_STATUS_ERR = 2011, // 优惠券批次不是生效状态，不能单独添加商品
EM_RT_COUPON_BATCH_DELETED_CANNOT_READ = 2012, //不能读取已经删除的优惠券批次
EM_RT_NOT_IN_ONLINE_STATUS = 2013, // 优惠券批次不是生效或者补制券状态
EM_RT_COUPON_BATCH_TIME_END = 2014, // 优惠券批次有效期已过
EM_RT_COUPON_BATCH_OUT_OF_STOCK = 2015, // 优惠券无剩余数量，无法领取
EM_RT_LIMIT_BATCH_DAY = 2016, // 总领取次数已达到该批次每日上限，无法领取
EM_RT_LIMIT_USER_NUM = 2017, // 用户领取次数已达到该批次每人上限，无法领取
EM_RT_LIMIT_USER_DAY_NUM = 2018, // 用户领取次数已达到该批次每人每日上限，无法领取
EM_RT_WRITE_AB_QUEUE_FAIL = 2019, // 写异常队列失败，系统错误
EM_RT_BATCH_RESEARCH_ITEM_FAIL = 2020, // 批量反向查询搜索系统失败
EM_RT_COUPON_NOT_FOUND = 2021, // 优惠券不存在
EM_RT_COUPON_ALREADY_USED = 2022, // 优惠券已被使用，无法重复使用
EM_RT_NOT_IN_USE_TIME = 2023, // 不在优惠券可使用时间区间，无法使用
EM_RT_RESEARCH_ITEM_FAIL = 2024, // 反向查询搜索系统失败
EM_RT_COUPON_NOT_FOUND_IN_REDIS = 2025, // Redis中查询不到优惠券信息
EM_RT_WRONG_AB_MSG_CMD = 2026, // 错误异常队列消息命令字
EM_RT_QUERY_FREQ_CONTROL_FAIL = 2027, // 查询频控系统失败
EM_RT_GET_COUPON_FREQ_CONTROL_LIMITED = 2028, //用户短时间内领券次数超过频限系统限制
EM_RT_QUERY_USER_INFO_FAIL = 2029, //查询用户权限系统失败
EM_RT_MUST_BE_VIP = 2030, //必须是VIP
EM_RT_MUST_BE_NEW_CUSTOMER = 2031, //必须是新用户
EM_RT_QUERY_CHECK_OPTION_FAIL = 2032, // 查询搜索系统判断商品是否可用于优惠券批次失败
EM_RT_NO_PRODUCT_CAN_USE_THIS_COUPON = 2033, // 没有商品可用于这个优惠券，无法使用
EM_RT_SEND_TOUCHUP_FAIL = 2034, //给触达系统发送消息失败
EM_RT_ENCODE_CDK_FAIL = 2035, //加密生成CDK失败
EM_RT_DECODE_CDK_FAIL = 2036, //解密CDK信息失败
EM_RT_CDK_TIME_ERR = 2037, //CDK里面的时间信息不对
EM_RT_CDK_ALREADY_REDEEM = 2038, //CDK已经被兑换过了，无法兑换
EM_RT_USER_NEED_LOGIN = 2039, //用户未登录错误
EM_RT_SYSTEM_ERR = 2040, //系统故障
EM_RT_QUERY_ACT_ERR = 2041, //查询活动信息失败
EM_RT_COUPON_ORDER_ID_ERR = 2042, //退优惠券的时候带的strOrderId和优惠券信息里面存储的不一致
EM_RT_GIVE_APPID_NOT_FOUND = 2043, //发券接口appid未找到
EM_RT_GIVE_APPKEY_WRONG = 2044, //发券接口appid对应的appkey不匹配
EM_RT_GIVE_INTERFACE_IP_NOT_PERMITED = =2045, //发券接口IP鉴权失败
EM_RT_NOT_PERMITED_TO_GIVE_THIS_BATCH = 2046, //批次在发券接口黑名单中，无法通过这个接口发券
EM_RT_SECRET_NOT_RIGHT = 2050, //密钥不对，无法领券
EM_RT_VIP7_FREESHIPPING_ERR = 2051, //VIP7默认全场包邮，领取包邮券失败时返回这个错误码
EM_RT_CHANNEL_ID_NOT_SAME = 2052, //渠道ID不匹配
EM_RT_LOGIN_TOKEN_CHECK_FAIL = 10000, //登录票据校验失败
      }
      

      declare enum CouponType {
        CASH_COUPONS = 1, //现金券
FULL_CUT_COUPONS = 2, //满减券
FREE_SHIPPING_COUPONS = 3, //免邮券
PERCENT_COUPONS = 4, //折扣券
FREE_COUPONS = 5, //免单券      
      }
      

      declare enum CouponBatchStatus {
        STATUS_EDIT = 1, //编辑中
STATUS_AUDIT = 2, //审核中
STATUS_AUDIT_NOT_PASS = 3, //审核不通过
STATUS_EFFECTIVE = 4, //生效中
STATUS_INVALID = 5, //失效
STATUS_EXPIRED = 6, //已过期
      }
      
// 商品适用范围
      declare enum CouponUseType {
        ALL_PRODUCT = 1, //全站商品
LIMIT_PRODUCT = 2, //部分商品
ACT_PRODUCT_POOL = 3, //活动或者商品池
      }
      
// 优惠券批次审核命令
      declare enum CouponAuditAction {
        AUDIT_PASS = 0, //审核通过
AUDIT_DROP = 1, //审核不通过
      }
      
// 审核、撤销审核、删除、失效
      declare enum CouponStatusAction {
        STATUS_ACTION_AUDIT_PASS = 1, //审核通过
STATUS_ACTION_AUDIT_DROP = 2, //审核不通过
STATUS_ACTION_CANCEL_AUDIT = 3, //撤销审核
STATUS_ACTION_DELETE = 4, //删除优惠券批次
STATUS_ACTION_OFFLINE = 5, //下线优惠券批次
      }
      
// 领取和使用的身份限制条件
      declare enum IdentityLimitType {
        LIMIT_VIP = 1, //所有VIP用户可领
LIMIT_NEW_CUSTOMER = 2, //新用户
LIMIT_VIP1 = 3, //VIP1可领
LIMIT_VIP2 = 4, //VIP2可领
LIMIT_VIP3 = 5, //VIP3可领    
LIMIT_VIP4 = 6, //VIP4可领
LIMIT_VIP5 = 7, //VIP5可领
LIMIT_VIP6 = 8, //VIP6可领
LIMIT_VIP7 = 9, //VIP7可领
      }
      
// 是增加还是修改
      declare enum ModifyCmd {
        MODIFY_ADD = 1, //增加批次
MODIFY_EDIT = 2, //修改批次
      }
      

      declare enum GiveType {
        GIVE_VMALL = 1, //商城正常发券
GIVE_OTHER = 2, //第三发放发券
      }
      

      declare enum ExpireType {
        EXPIRE_FIXED = 0, //固定过期时间 
EXPIRE_FLOAT = 1, //浮动过期时间
      }
      

      interface STRecvLimit {
        iVipLevel?: number; //VIP等级：1-7
bLimitDay?: boolean; //为true是限制每天，为false不是
uiLimit?: number; //限制数量 
      }
      

      interface STCouponBatchInfo {
        strCouponTitle?: string; //优惠券标题  10字以内
strCouponShortTitle?: string; //优惠券短标题 5字以内
strCouponContent?: string; //优惠券说明   30个字上限
iCouponType?: number; //优惠券类型，参考CouponType枚举值
uiStartTime?: number; //优惠券有效期起始时间
uiEndTime?: number; //优惠券有效期结束时间
uiCouponNum?: number; //制券数量，必须大于0
uiStatus?: number; //优惠券状态，参考CouponBatchStatus枚举值
dThreshold?: number; //抵现门槛
dDiscount?: number; //可抵现金
bHasIdentityLimit?: boolean; //是否有身份限制
vecIdentityLimit?: unsignedint[]; //身份规则,参照IdentityLimitType取值
uiLimitUser?: number; //领取限制，每人能领取多少张，为0不限制
bLimitUserDaily?: boolean; //领取限制，每人领取张数限制为每天
uiLimitAllDaily?: number; //领取限制，该优惠券每天能领多少张，为0不限制
uiUseType?: number; //适用范围，全站或者部分商品，参考CouponUseType枚举值
vecValidCondition?: STConInfo[]; //适用的条件   
vecInvalidCondition?: STConInfo[]; //剔除的条件   
uiIncNum?: number; //补制券数量,请求的时候不需要填写
strCouponBatchId?: string; //优惠券批次ID，增加优惠券批次的时候不用填写   
uiReceivedNum?: number; //已领取数量，请求的时候不用填写
uiUsedNum?: number; //已使用数量，请求的时候不用填写
uiGiveType?: number; //发券类型，参照GiveType取值
uiCdkNum?: number; //CDK数量，请求的时候不用填写
uiCdkRedeemNum?: number; //2018/8/28新增s//CDK兑换数量，请求的时候不用填写
iExpireType?: number; //过期时间类型：0 固定过期时间; 1 动态过期时间，过期时间从领取时间开始算起 参见 ExpireType
iExpireDayNum?: number; //单位：天。如果是动态过期时间，标识领取几天后过期
iPercent?: number; //折扣券折扣百分比，比如10%折扣填10
iLimitProductNum?: number; //优惠券使用条件，为1则订单中仅限一件商品；为0则不限制
vecProdPoolId?: string[]; //适用商品范围：商品池ID，目前只能填一个，使用数组方便后续扩展
strSecret?: string; //优惠券批次密钥，系统自动生成
strCouponType?: string; //优惠券类型文案
vecRecvLimit?: STRecvLimit[]; //分VIP等级设置领取限制需要传入这个
strChannelId?: string; //关联的渠道ID，为空不关联
      }
      

      interface STCouponBatchInfoForVip {
        strCouponBatchId?: string; //优惠券批次号
uiCouponNum?: number; //优惠券数量，必须大于0
uiGiveStartTime?: number; //发放开始时间
uiGiveEndTime?: number; //发放结束时间
uiUseStartTime?: number; //使用开始时间
uiUseEndTime?: number; //使用结束时间
uiStatus?: number; //状态，参见CouponBatchStatus枚举
uiCouponType?: number; //券类型，参见CouponType枚举
uiLimitAllDaily?: number; //领取限制，该优惠券每天能领多少张，为0不限制
bLimitUserDaily?: boolean; //领取限制，true uiLimitUser的含义是每人每天能领多少张， false uiLimitUser的含义是每人总共能领多少张
uiLimitUser?: number; //领取限制，每人能领取多少张，为0不限制
vecRecvLimit?: STRecvLimit[]; //分VIP等级设置领取限制
      }
      
// 增加、修改优惠券批次请求与返回结构
      interface STModifyCouponBatchReq {
        stCouponBatchInfo?: STCouponBatchInfo; //优惠券详情：修改必填写优惠券批次ID，增加时不填写，ID由系统自动生成
uiCmd?: number; //命令，标识是新增还是修改，参照ModifyCmd枚举值
      }
      

      interface STModifyCouponBatchRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
strCouponBatchId?: string; //返回优惠券批次ID
      }
      
// 增加优惠券批次  请求与返回结构
      interface STAddCouponBatchReq {
        stCouponBatchInfo?: STCouponBatchInfo; //优惠券详情：不必填写优惠券批次ID，ID由系统自动生成
      }
      

      interface STAddCouponBatchRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
strCouponBatchId?: string; //返回优惠券批次ID
      }
      
// 未生效状态下修改优惠券批次信息      请求与返回结构
      interface STEditCouponBatchReq {
        stCouponBatchInfo?: STCouponBatchInfo; //优惠券详情：必须填写优惠券批次ID
      }
      

      interface STEditCouponBatchRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
      }
      
// 审核、撤销审核、删除、失效         请求与返回结构
      interface STChangeCouponBatchStatusReq {
        strCouponBatchId?: string; //优惠券批次ID 
uiStatusAction?: number; //动作,参照 CouponStatusAction的值
      }
      

      interface STChangeCouponBatchStatusRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因    
uiStatus?: number; //优惠券批次状态
      }
      
// 审核  请求与返回结构
      interface STAuditCouponBatchReq {
        strCouponBatchId?: string; //优惠券批次ID 
uiCouponAuditAction?: number; //审核命令，通过或者不通过，参照CouponAuditAction枚举值
      }
      

      interface STAuditCouponBatchRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因    
      }
      
// 审核状态下撤销审核  请求与返回结构
      interface STCancelAuditCouponBatchReq {
        strCouponBatchId?: string; //优惠券批次ID 
      }
      

      interface STCancelAuditCouponBatchRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因    
      }
      
// 删除优惠券批次  请求与返回结构
      interface STDeleteCouponBatchReq {
        strCouponBatchId?: string; //优惠券批次ID  
      }
      

      interface STDeleteCouponBatchRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因     
      }
      
// 下线失效优惠券批次  请求与返回结构
      interface STInvalidCouponBatchReq {
        strCouponBatchId?: string; //优惠券批次ID  
      }
      

      interface STInvalidCouponBatchRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因     
      }
      
// 生效状态下修改商品ID 请求与返回结构
      interface STEditProductReq {
        strCouponBatchId?: string; //优惠券批次ID  
uiUseType?: number; //适用范围，全站或者部分商品，参考CouponUseType枚举值
vecValidCondition?: STConInfo[]; //适用的条件   
vecInvalidCondition?: STConInfo[]; //剔除的条件
uiGiveType?: number; //发券类型，参照GiveType取值
vecProdPoolId?: string[]; //适用商品范围：商品池ID，目前只能填一个，使用数组方便后续扩展
      }
      

      interface STEditProductRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因       
      }
      
// 指定商品不可使用指定批次优惠券
      interface STExcludeProductReq {
        strCouponBatchId?: string; //优惠券批次ID  
vecProductId?: string[]; //需要剔除的商品ID列表
      }
      

      interface STExcludeProductRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因    
      }
      
// 补制券       请求与返回结构
      interface STIncCouponNumReq {
        strCouponBatchId?: string; //优惠券批次ID  
uiIncNum?: number; //要增加的数量      
      }
      

      interface STIncCouponNumRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
uiStatus?: number; //优惠券批次状态
      }
      
// 分页返回，不返回已经删除的，创建时间排序
      interface STReadCouponBatchListReq {
        iPageFlags?: number; //翻页规则0x01：从新到旧 ;0x02:按页码翻页；0x03:生效中tab;0x04:失效tab      
uiReqNum?: number; //翻页数量：前端传入一页请求的优惠券批次数
uiCurPage?: number; //当前页码
strPageContext?: string; //请求上下文，当选择从新到旧时，传入时间
mapCondition?: {
      [prop: string]: string
    }; //筛选条件: name,status,id,type,channel_id
      }
      

      interface STReadCouponBatchListRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
vecCouponBatchInfo?: STCouponBatchInfo[]; //优惠券批次列表
bHasNextPage=false?: boolean; //是否还有数据标志位
strPageContext?: string; //请求上下文
uiPageNum?: number; //总的页数      
      }
      
// 获取某优惠券批次详细信息  请求与返回结构
      interface STReadCouponBatchInfoReq {
        strCouponBatchId?: string; //优惠券批次ID         
      }
      

      interface STReadCouponBatchInfoRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因     
stBatchInfo?: STCouponBatchInfo; //优惠券批次详情
iFlag?: number; //是否返回secret信息      
      }
      
// B端获取商品可用优惠券列表  请求与返回结构
      interface STMngGetProductCouponReq {
        strProductId?: string; //商品ID
iPageFlags?: number; //翻页规则0x01：按页码翻页
uiReqNum?: number; //翻页数量：前端传入一页请求的优惠券批次数
uiCurPage?: number; //当前页码：从0开始
strPageContext?: string; //请求上下文，占位，暂未使用
      }
      

      interface STMngGetProductCouponRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因        
vecBatchInfo?: STCouponBatchInfo[]; //优惠券批次详情
bHasNextPage=false?: boolean; //是否还有数据标志位
strPageContext?: string; //请求上下文
uiPageNum?: number; //总的页数
      }
      
// 根据优惠券号查询是哪个cdk兑换而来的
      interface STCdkInfo {
        strVuid?: string; //vuid字符串
strCouponId?: string; //优惠券号字符串
strCdk?: string; //CDK字符串
      }
      

      interface STMngCouponToCdkReq {
        vecCdkInfo?: STCdkInfo[]; 
      }
      

      interface STMngCouponToCdkRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因    
mapInfo?: {
      [prop: string]: STCdkInfo
    }; //CDK信息，key是优惠券字符串+vuid字符串连接在一起，注意顺序       
      }
      
// 发放优惠券    请求与返回结构
      interface STGetCouponReq {
        strCouponBatchId?: string; //优惠券批次ID
strSecret?: string; //优惠券批次密钥
strAppId?: string; //发券接口AppId
strAppKey?: string; //发券接口AppKey
      }
      

      interface STGetCouponRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因    
strCouponId?: string; //返回优惠券ID   
iStatus?: number; //是否可以继续领取：0 可以继续领取；1 不可继续领取    
vecIdentityLimit?: unsignedint[]; //身份规则,参照IdentityLimitType取值      
      }
      
// 获取订单可用优惠券列表   请求与返回结构
      interface STReadAvailableCouponListReq {
        vecProductId?: string[]; //商品ID 
strChannelId?: string; //渠道ID，为空不检查
      }
      
// 给支付时用的结构 
      interface STCouponInfo {
        stInfo?: STSaleInfo; 
strCouponBatchId?: string; 
vecCouponId?: string[]; 
      }
      

      declare enum ReasonType {
        COUPON_EXIPIRE = 1, //已过期的优惠券ID
NO_PROD_CAN_USE = 2, //购买商品不参与满减的优惠券ID
BEFORE_START_TIME = 3, //还没到使用起始时间的优惠券ID
NOT_ALL_PROD_CAN_USE = 4, //折扣券、包邮券、免单券必须所有商品都可以使用
CHANNEL_ID_NOT_SAME = 5, //渠道ID不匹配
      }
      

      interface STCouponAndReason {
        strCouponId?: string; //优惠券ID与批次ID及优惠券
iReason?: number; //不能使用原因 参见ReasonType
strCouponBatchId?: string; //对应的优惠券批次ID
      }
      

      interface STReadAvailableCouponListRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因  
mapInfo?: {
      [prop: string]: STCouponInfo[]
    }; //商品ID对应的优惠券列表信息
vecCouponAndReason?: STCouponAndReason[]; //不能使用的优惠券及原因     
      }
      
// 检查优惠券是否可使用    请求与返回结构
      interface STCheckCouponReq {
        strCouponId?: string; //优惠券ID     
strProductId?: string[]; //商品ID      
      }
      

      interface STCheckCouponRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因   
uiFlag?: number; //优惠券是否可使用: 0 不可使用； 1 可使用
      }
      
// 使用优惠券    请求与返回结构
      interface STUseCouponReq {
        strCouponId?: string; //优惠券ID  
strOrderId?: string; //订单号   
vecProductId?: string[]; //商品ID 
strChannelId?: string; //渠道ID
      }
      

      interface STUseCouponRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因   
      }
      
// 退回优惠券    请求与返回结构
      interface STReturnCouponReq {
        strCouponId?: string; //优惠券ID  
strOrderId?: string; //订单号
      }
      

      interface STReturnCouponRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因      
      }
      
// 获取某优惠券详细信息  请求与返回结构
      interface STReadCouponInfoReq {
        strCouponId?: string; //优惠券ID         
      }
      

      interface STReadCouponInfoRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因        
stBatchInfo?: STCouponBatchInfo; //优惠券批次详情
strCouponId?: string; //优惠券ID
uiStatus?: number; //2018/8/28添加s//是否已使用 
uiStartTime?: number; //有效期起始
uiEndTime?: number; //有效期结束
iDayToExpire?: number; //还剩几天过期      
      }
      
// 获取用户优惠券列表 请求与返回结构
      interface STReadCouponListReq {
        iPageFlags?: number; //翻页规则0x01：按未过期在前，已过期在后翻页; 0x02:未使用优惠券tab   0x03:已使用优惠券tab 0x04:已过期优惠券tab
iReqNum?: number; //翻页数量，选择按页码翻页时，前端传入一页请求的条数
iCurPage?: number; //当前页码
      }
      

      interface STCoponAndBatch {
        stCouponId?: string; //优惠券ID
stCouponBatchId?: string; //优惠券批次ID
uiStatus?: number; //优惠券是否已使用：0 未使用   1已使用
uiIsExpired?: number; //2018/8/28添加s//优惠券是否已过期：0 未过期 1已过期
uiStartTime?: number; //有效期起始
uiEndTime?: number; //有效期结束
iDayToExpire?: number; //还剩几天过期
      }
      

      interface STReadCouponListRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因      
vecCouponAndBatch?: STCoponAndBatch[]; //优惠券ID与批次ID及优惠券状态
mapBatchInfo?: {
      [prop: string]: STCouponBatchInfo
    }; //优惠券批次详情
iCurPage?: number; //当前第几页从0开始计数
iPageNum?: number; //总的页数
      }
      
// 获取用户可使用的优惠券数量
      interface STReadUserCouponNumReq {
        uiType?: number; //类型： 0  获取用户可用优惠券数量
      }
      

      interface STReadUserCouponNumRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因  
uiCnt?: number; //优惠券数量
      }
      
// 获取商品可用优惠券列表  请求与返回结构
      interface STReadProductCouponReq {
        strProductId?: string; //商品ID
strChannelId?: string; //渠道ID，为空不检查
      }
      

      interface STReadProductCouponRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因        
vecBatchInfo?: STCouponBatchInfo[]; //优惠券批次详情
mapStatus?: {
      [prop: string]: number
    }; //是否可领取: 0 可以领取    1 不可领取
      }
      
// 筛选符合优惠券批次规则的商品 请求与返回结构
      interface STGetQualifyProductReq {
        strCouponId?: string; //优惠券ID   
vecProductId?: string[]; //商品ID列表
      }
      

      interface STGetQualifyProductRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因 
vecProductId?: string[]; //符合优惠券批次使用条件的商品ID列表
      }
      
// 获取优惠券批次可用的商品  请求与返回结构
      interface STGetCouponBatchProductReq {
        strCouponBatchId?: string; //优惠券批次ID
iPageFlags?: number; //翻页规则0x01：上下文翻页 ;0x02:按页码翻页；
iReqNum?: number; //翻页数量，选择按页码翻页时，前端传入一页请求的条数
iCurPage?: number; //当前页码
strContext?: string; //请求上下文
      }
      

      interface STGetCouponBatchProductRsp {
        iErrCode?: number; //返回码
strErrMsg?: string; //出错的原因描述
vecIdList?: string[]; //返回ID列表
strContext?: string; //请求上下文
iCurPage?: number; //当前第几页从0开始计数
iPageNum?: number; //总的页数
      }
      
// 批量获取优惠券批次详情  请求与返回结构
      interface STBatchReadCouponBatchInfoReq {
        vecCouponBatchId?: string[]; //优惠券批次ID  
iFlag?: number; //为1返回是否可领状态，为0不返回
      }
      

      interface STBatchReadCouponBatchInfoRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因      
mapBatchInfo?: {
      [prop: string]: STCouponBatchInfo
    }; //优惠券批次详情 
mapStatus?: {
      [prop: string]: number
    }; //是否可领取: 0 可以领取    1 不可领取
mapTodayNum?: {
      [prop: string]: number
    }; //批次当日已领取数量
      }
      
// 批量获取优惠券详情  请求与返回结构
      interface STBatchReadCouponInfoReq {
        vecCouponId?: string[]; //优惠券ID
      }
      

      interface STBatchReadCouponInfoRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因      
vecCouponAndBatch?: STCoponAndBatch[]; //优惠券ID与批次ID及优惠券状态
mapBatchInfo?: {
      [prop: string]: STCouponBatchInfo
    }; //优惠券批次详情
      }
      
// 生成优惠券CDK    
      interface STGetCdkReq {
        strCouponBatchId?: string; //优惠券批次ID
iReqNum?: number; //生成的CDK数量
uiCurIdx?: number; //当前编号，第一次请求填0；后续请求填上一次请求返回的
      }
      

      interface STGetCdkRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因  
uiCurIdx?: number; //当前编号
vecCdk?: string[]; //生成的CDK
      }
      
// 兑换优惠券CDK 
      interface STRedeemCdkReq {
        strCdk?: string; //CDK字符串
      }
      

      interface STRedeemCdkRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因    
strCouponId?: string; //返回优惠券ID         
      }
      
// 给搜索系统返回优惠券批次ID列表    请求与返回结构
      interface STSearchReadCouponBatchListReq {
        strContext?: string; //请求上下文
uiCnt?: number; //请求的优惠券批次ID数量
      }
      

      interface STSearchReadCouponBatchListRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因  
vecCouponBatchId?: string[]; //优惠券批次列表
strContext?: string; //请求上下文
bHasNextPage=false?: boolean; //是否还有数据标志位      
      }
      
// 优惠券范围信息
      interface STScopeInfo {
        iType?: number; //类型 1全部商品，2部分商品
vecAddCon?: STConInfo[]; //参与条件
vecDelCon?: STConInfo[]; //剔除条件
      }
      
// 给搜索系统返回优惠券批次详情中的条件信息，包括包含条件和排除条件    请求与返回结构
      interface STSearchReadCouponBatchInfoReq {
        strCouponBatchId?: string; //优惠券批次ID
      }
      

      interface STSearchReadCouponBatchInfoRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因  
strCouponBatchId?: string; //优惠券批次ID
iType?: number; // 1 全站商品     2部分商品
vecValidItem?: STConInfo[]; //包含的
vecInValidItem?: STConInfo[]; //排除的
vecScopeInfo?: STScopeInfo[]; //优惠券条件,如果配置了子商品池，那么父商品池的也会加入这个里面
      }
      
// 返回商品池ID被哪些优惠券批次关联
      interface STSearchReadProdPoolCouponBatchListReq {
        strId?: string; //Id值
      }
      

      interface STSearchReadProdPoolCouponBatchListRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因 
vecId?: string[]; //对应的优惠券批次ID
      }
      
// 获取某优惠券批次详细信息给VIP使用        请求与返回结构
      interface STReadCouponBatchInfoVipReq {
        strCouponBatchId?: string; //优惠券批次ID         
      }
      

      interface STReadCouponBatchInfoVipRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因     
stBatchInfo?: STCouponBatchInfoForVip; //优惠券批次详情     
      }
      

      interface STCouponTransfer {
        strCouponBatchId?: string; //优惠券批次ID
iOper?: number; //操作：1 审批通过   2 修改商品         3 过期
      }
      
  