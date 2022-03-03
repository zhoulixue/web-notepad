
  // 正式环境L5:64363521:131073
// 测试环境L5:64363521:131072
  //  包命令类型
      declare enum emUserInfoCmd {
        EM_ADD_BASEINFO_REQ = 0xf24f, // 新增基本信息
EM_MOD_BASEINFO_REQ = 0xf250, // 修改基本信息
EM_GET_BASEINFO_REQ = 0xf251, // 查询基本信息
EM_READ_USER_IDENTITY_REQ = 0xf568, // 读取用户身份信息
EM_ADD_DELIADDR_REQ = 0xf252, // 新增收货地址
EM_DEL_DELIADDR_REQ = 0xf253, // 删除收货地址
EM_GET_DELIADDR_REQ = 0xf254, // 查询收货地址
EM_MOD_DELIADDR_REQ = 0xf255, // 修改收货地址
EM_GET_PERSONAL_CENTER_REQ = 0xf33c, // 获取用户个人中心	
EM_READ_BUY_RECORD_REQ = 0xf35b, // 0xf3ea(测试)，0xf35a写购买记录s// 读购买记录
EM_CHECK_PRESELL_REQ = 0xf4a8, // 检查用户是否预约
EM_ADD_PRESELL_REQ = 0xf4a9, // 新增或取消预约
EM_READ_PRESELL_NUM = 0xfe78, // 查询商品预约数
EM_SET_DEFDELIADDR_REQ = 0xf291, // 设为默认收货地址
      }
      

      declare enum emErrCode {
        RT_GET_BUY_NUM_ERROR = 2001, // 读取购买(未付款)数量失败
RT_WRITE_BUY_NUM_ERROR = 2002, // 写购买(未付款)数量失败
RT_QUERY_READ_ERROR = 2003, // 读DB失败
RT_QUERY_WRITE_ERROR = 2004, // 写DB失败
RT_CHECK_INVALID = 2005, // 检查失败 
RT_READ_PRESELL_INFO_ERROR = 2006, // 读预约信息失败
RT_WRITE_PRESELL_INFO_ERROR = 2007, // 写预约信息失败
RT_ADD_TIMER_TASK_ERROR = 2008, // 新增定时任务失败
RT_DEL_TIMER_TASK_ERROR = 2009, // 删除定时任务失败
RT_PARSE_MSG_ERROR = 2010, // 解析消息失败
RT_NOTIFY_USER_ERROR = 2011, // 触达用户失败
RT_READ_ADDR_INFO_ERROR = 2012, 
RT_WRITE_ADDR_INFO_ERROR = 2013, 
RT_EARLY_SEND_RSP_PKG_ERROR = 2014, 
RT_READ_DB_ADDR_INFO_ERROR = 2015, 
RT_READ_PRESELL_NUM_ERROR = 2016, 
RT_ADD_PRESELL_NUM_ERROR = 2017, 
RT_DEL_PRESELL_NUM_ERROR = 2018, 
      }
      
//  用户基本信息
      interface STUserBaseInfo {
        strUserId?: string; // 用户ID，为视频的vuid 
strPhone?: string; // 绑定的手机号
strMail?: string; // 绑定的邮箱
      }
      
//  收货地址详情
      interface STDeliAddr {
        ulDeliAddrId?: number; // 地址ID
strUserId?: string; // 用户ID
stPostInfo?: STPostInfo; // 邮购信息
strCreateTime?: string; // 创建时间
strModifyTime?: string; // 修改时间
bIsDefault?: boolean; // 是否默认
      }
      
//  用户财富信息
      interface STUserWealth {
        ulVBNum?: number; // V币数量
ulCouponNum?: number; // 礼品券数量
      }
      
//  用户购买记录
      interface STBuyRecord {
        strSkuId?: string; // 库存ID        
uiBuyNum?: number; // 购买数量
      }
      

      declare enum emReadBuyRecordType {
        EM_ALL_SKU_TYPE = 1, // 所有商品的购买记录
EM_SPECIFIED_SKU_TYPE = 2, // 指定商品的购买记录
      }
      
//  身份种类 
      declare enum emUserIdentityId {
        EM_VIP_TYPE = 1, // VIP
EM_DOKI_TYPE = 2, // Doki
EM_IWAN_TYPE = 3, // iwan
EM_MALL_TYPE = 4, // 商城
      }
      
//  身份的状态
      declare enum emIdentityStatus {
        EM_IDENTITY_VALID = 1, // 身份有效
EM_IDENTITY_EXPIRED = 2, // 身份过期
EM_IDENTITY_INVALID = 3, // 无身份
      }
      

      interface STUserIdentityInfo {
        iIdentityId?: number; // 取自emUserIdentityId
iLevel?: number; // 等级
mapExtraInfo?: {
      [prop: string]: string
    }; // 其他信息, 查商城用户等级信息从emOrderCnt中取
iStatus?: number; // 取自emIdentityStatus 
      }
      
//  下单量
      declare enum emOrderCnt {
        EM_ALL_ORDER_CNT = 1, // 历史总下单量
EM_MONTH_ORDER_CNT = 2, // 月下单量
EM_QUARTER_ORDER_CNT = 3, // 季度下单量
EM_HALF_YEAR_ORDER_CNT = 4, // 半年下单量
EM_YEAR_ORDER_CNT = 5, // 年下单量
      }
      
//  读用户身份请求和回应包
      interface STReadUserIdentityReq {
        vecIdentityId?: number[]; // 数组中的值取自emUserIdentityId
      }
      

      interface STReadUserIdentityRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecIdentityInfo?: STUserIdentityInfo[]; 
      }
      
//  读用户购买记录
      interface STReadBuyRecordReq {
        eReadType?: emReadBuyRecordType; 
vecSkuId?: string[]; 
      }
      

      interface STReadBuyRecordRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapBuyRecord?: {
      [prop: string]: STBuyRecord
    }; 
      }
      
//  获取用户个人中心请求及回应包
      interface STGetPersonalCenterReq {
        strUserId?: string; 
      }
      

      interface STVipInfo {
        iLevel?: number; 
      }
      

      interface STGetPersonalCenterRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strPortraitUrl?: string; // 用户头像
strNickName?: string; // 昵称
stUserWealth?: STUserWealth; // 用户财富
stUndealOrderNumInfo?: STUndealOrderNumInfo; // 未完成订单数 
bIsVip?: boolean; 
stVipInfo?: STVipInfo; // 腾讯视频VIP信息
      }
      
//  新增基本信息请求及回应包
      interface STAddBaseInfoReq {
        stUserBaseInfo?: STUserBaseInfo; 
      }
      

      interface STAddBaseInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
//  获取基本信息请求及回应包
      interface STGetBaseInfoReq {
        strUserId?: string; 
      }
      

      interface STGetBaseInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stUserBaseInfo?: STUserBaseInfo; 
      }
      
//  修改基本信息请求及回应包
      interface STModBaseInfoReq {
        stUserBaseInfo?: STUserBaseInfo; 
      }
      

      interface STModBaseInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
//  新增收货地址请求及回应包
      interface STAddDeliAddrReq {
        stDeliAddr?: STDeliAddr; 
      }
      

      interface STAddDeliAddrRsp {
        iErrCode?: number; 
strErrMsg?: string; 
ulDeliAddrId?: number; // 返回该地址的ID
      }
      
//  删除收货地址(支持批量)请求及回应包
      interface STDelDeliAddrReq {
        vecDeliAddrId?: number[]; 
      }
      

      interface STDelDeliAddrRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
//  获取收货地址请求及回应包
      interface STGetDeliAddrReq {
        strUserId?: string; 
ddwDeliAddrId?: number; 
      }
      

      interface STGetDeliAddrRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecDeliAddr?: STDeliAddr[]; 
      }
      

      interface STAddrCacheInfo {
        strUserId?: string; 
vecDeliAddr?: STDeliAddr[]; 
iCacheTime?: number; 
      }
      
//  修改收货地址请求及回应包
      interface STModDeliAddrReq {
        stDeliAddr?: STDeliAddr; 
      }
      

      interface STModDeliAddrRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
//  设为默认收货地址请求及回应包
      interface STSetDefDeliAddrReq {
        ulDeliAddrId?: number; 
      }
      

      interface STSetDefDeliAddrRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      

      interface STPresellInfo {
        strUserId?: string; // 用户ID, 前端传来的包存在包头，后台传来的包存在此处
strProductId?: string; // 商品ID
strProductName?: string; // 商品名
strOnsaleTime?: string; // 开售时间
strPhone?: string; // 预留电话
strMsgId?: string; // 提交定时系统成功时的返回
      }
      
//  检查是否预约请求及回应包
      interface STCheckPresellReq {
        strProductId?: string; 
strOnsaleTime?: string; 
      }
      

      interface STCheckPresellRsp {
        iErrCode?: number; 
strErrMsg?: string; 
bPresell?: boolean; // 用户是否预约
strPhone?: string; // 用户关联的电话号码
      }
      
//  增加预购、删除预约请求及回应包
      interface STAddPresellReq {
        iType?: number; // 1:新增 2:删除
stPresellInfo?: STPresellInfo; 
      }
      

      interface STAddPresellRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strPresellInfo?: string; // 预售信息
      }
      

      interface STReadPresellNumReq {
        vecProdId?: string[]; 
      }
      

      interface STReadPresellNumRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapProd2Num?: {
      [prop: string]: unsignedint
    }; 
      }
      
  