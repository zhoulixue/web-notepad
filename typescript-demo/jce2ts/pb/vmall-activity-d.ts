
  // 测试L5： 64393857:196608
  
      declare enum EMActivityCmd {
        E_GET_ACT_LIST_CMD = 0xf49b, //活动列表（B端）
E_ADD_ACT_CMD = 0xf49c, //添加活动（B端）
E_GET_ACT_INFO_CMD = 0xf49d, //活动详情（B端）
E_GET_PROD_ACT_LIST_CMD = 0xf49e, //商品活动列表（C端B端共用，C端读在线活动，B端读过审活动，重新开发）
E_GET_ACT_PROD_LIST_CMD = 0xf49f, //活动商品列表（C端，未开发）
E_OPERATE_ACT_CMD = 0xf4a0, //操作活动（B端）
E_ACT_NOTIFY_CMD = 0xf4ab, //活动中转
E_GET_ACT_BASE_CMD = 0xf4b0, //获取活动信息（C端）商详页显示活动数据
E_ACT_NOTIFY_CMD_ONLINE = 0xf4f8, 
E_GET_ONLINE_ACT_LIST = 0xf54f, //获取线上活动列表(C端）
E_GET_ACT_SCOPE_INFO = 0xf550, //获取活动范围信息（返回活动全部信息，C端）
E_GET_PROD_ACT_LIST_BATCH = 0xf567, //批量获取商品下活动列表
E_GET_QUALIFY_PROD_LIST = 0xf56d, //筛选符合活动规则的商品列表
E_GET_ACT_CHECK_CNT = 0xf65d, //获取待审核活动数量
E_GET_ACT_INFO_CMD_NO_AUTH = 0xf7a8, //	获取活动详情，不鉴权，直接读DB，给搜索导活动数据使用
E_ADD_ACT_SKU = 0xf8fb, //添加SKU活动配置(B端)
E_GET_SKU_VALID_ACT = 0xf907, //计价使用，获取SKU参与的有效活动列表
E_COPY_ACT = 0xf90d, //复制活动(B端)
E_GET_SKU_ACT = 0xf929, //获取SKU指定活动的信息
E_GET_PROD_ACT_SKU = 0xf96b, //B端获取商品指定活动的sku活动价配置
E_GET_SECKILL_SKU_NOW = 0xf9b2, //获取当前秒杀的SKU列表
E_GET_PROD_CONF_ACT_LIST = 0xf9c9, //查询商品配置价格活动列表
E_GET_ACT_UNCONF_PROD = 0xf9ce, //获取活动下未配置价格的商品列表（B端）
E_GET_ACT_BY_LOCK_ID = 0xfa18, //B端，根据锁定ID取对应的活动ID
E_GET_PROD_POOL_ACT = 0xfa41, //获取商品池下活动列表，给搜索及商品池使用
E_EXCLUDE_PRODUCT_CMD = 0xfa4f, //将商品从指定活动中排除(B端)
E_GET_MULTI_PROD_ACT = 0xfa76, //B端，批量查询商品下的活动价设置，商品信息导出使用
      }
      

      declare enum EMAddActivityType {
        E_ADD = 1, 
E_EDIT = 2, 
      }
      

      declare enum EMActivityStatus {
        E_STATUS_ONLINE = 1, //已上线
E_STATUS_OFFLINE = 2, //已下线
E_STATUS_DELETE = 3, //已删除
E_STATUS_IN_EDIT = 4, //编辑中
E_STATUS_WAIT_CHECK = 5, //待审核
E_STATUS_CHECK_OK = 6, //审核通过
E_STATUS_CHECK_UNOK = 7, //审核不通过
E_STATUS_PUBLISH = 8, //发布到外网
      }
      

      declare enum EMActivityOpType {
        E_OP_ONLINE = 1, 
E_OP_OFFLINE = 2, 
E_OP_DELETE = 3, 
E_OP_RECALL = 4, //撤回
E_OP_CHECK_OK = 5, //审核通过
E_OP_CHEKC_UNOK = 6, //审核不通过
E_OP_PUBLISH = 7, //发布到外网 [暂不使用]
E_OP_HIDE = 8, //隐藏活动   [暂不使用]
E_OP_SHOW = 9, //显示活动   [暂不使用]
      }
      

      declare enum EMActivityType {
        E_ACT_SYSTEM = 1, //系统活动
E_ACT_OPERATE = 2, //运营活动
E_ACT_SECKILL = 3, //秒杀活动
E_ACT_OFFLINE = 4, //线下活动
E_ACT_CHANNEL = 5, //渠道活动（渠道）
      }
      

      declare enum EMActivityShowType {
        E_ACT_SHOW = 0, //活动正常展示 
E_ACT_HIDE = 1, //活动对外隐藏
      }
      
// 活动基本信息
      interface STActBaseInfo {
        strId?: string; //活动ID
strName?: string; //活动名称
uiProdNum?: number; //商品数量（废弃）
iStatus?: number; //活动状态
iOnlineTime?: number; //最近上线时间
iType?: number; //活动类型
iModifyTime?: number; //五期添加字段s//修改时间
bHasSale?: boolean; //有无促销
stSaleInfo?: STSaleInfo; //促销信息
strShortTitle?: string; //简称
iStartTime?: number; //活动开始时间
iEndTime?: number; //活动结束时间
iHideAndShow?: number; //活动当前展示状态：0 展示；1 隐藏 参见EMActivityShowType
iLimitProdNum?: number; //活动限购商品数量，为0不限制
strChannelId?: string; //关联的渠道ID，为空不关联
      }
      
// 根据Id获取活动基本信息，C端用
      interface STGetActBaseReq {
        vecId?: string[]; 
      }
      

      interface STGetActBaseRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapActInfo?: {
      [prop: string]: STActBaseInfo
    }; 
      }
      

      interface STIpCatInfo {
        strPriId?: string; 
strPriName?: string; 
strSecId?: string; 
strSecName?: string; 
      }
      
// 活动商品信息
      interface STActProdInfo {
        strId?: string; 
strImg?: string; 
strTitle?: string; 
iStatus?: number; 
vecIpInfo?: STIpCatInfo[]; 
stCatInfo?: STIpCatInfo; 
      }
      
// strPriIpId,	一级IP ID
      declare enum EMProdType {
        E_NO_PROD = 0, 
E_ALL_PROD = 1, 
E_SOME_PROD = 2, 
E_PROD_POOL = 3, 
      }
      
// 活动范围信息
      interface STScopeInfo {
        iType?: number; //类型，0 无商品 1全部商品，2部分商品, 3商品池
vecAddCon?: STConInfo[]; //参与条件
vecDelCon?: STConInfo[]; //剔除条件
vecId?: string[]; //商品池ID，目前只填1个
      }
      

      declare enum emPlayType {
        E_PLAY_NORMAL = 0, //普通活动		（为兼容旧协议，从0开始）
E_PLAY_RAFFLE = 1, //魔方抽奖
      }
      

      declare enum emPlayDimension {
        E_PLAY_DIM_ORDER = 0, //以订单为维度统计次数，一个订单计一次
E_PLAY_DIM_PRODUCT = 1, //以商品为维度统计次数，一件商品计一次
      }
      
// 运营玩法
      interface STPlayInfo {
        iType?: number; //对应emPlayType
strMagicId?: string; //魔方Id
strModId?: string; //模块Id
vecModId?: string[]; //多个模块ID
iDimension?: number; //统计维度 见emPlayDimension
      }
      

      declare enum emOnOffType {
        E_BY_HAND = 0, //手动上架
E_RIGHT_NOW = 1, //立刻上架
E_ON_TIME = 2, //定时上架
      }
      
// 上下架配置
      interface STOnOffCfgInfo {
        iType?: number; //对应emOnOffType
iOnTime?: number; //上架时间
iOffTime?: number; //下架时间
      }
      
// 积分抵扣、特权抵扣信息
      interface STProdDiscountInfo {
        stCredict?: STCredictInfo; //VIP 积分设置
vecDiscountInfo?: STDiscountInfo[]; //特权抵扣信息
iFreeShipping?: number; //0 不包邮；1 渠道包邮 
      }
      
// SKU的活动配置信息
      interface STActSkuInfo {
        strActId?: string; 
strProdId?: string; 
strProdName?: string; 
strSkuId?: string; 
mapSkuProp?: {
      [prop: string]: string
    }; 
uiActPrice?: number; 
uiBasePrice?: number; 
uiSupplyPrice?: number; //渠道活动填写供货价
iTotalQuan?: number; //隔离库存，批次ID为空时使用这个字段隔离库存
iRemainQuan?: number; 
strBatchId?: string; //优先使用批次ID，批次ID为空且总库存为0，表示不隔离库存
uiBuyLimit?: number; 
iActType?: number; //活动类型
strActName?: string; //活动名称，只在批量读商品活动价接口使用
bFreeShipping?: number; //sku是否包邮:0不包邮，1包邮
uiPercent?: number; //sku分成比例，当渠道选择按比例分成时可设置
      }
      

      declare enum EMActSkuAddType {
        E_ACT_SKU_EDIT = 1, 
E_ACT_SKU_DEL = 2, 
      }
      
// 活动添加SKU的配置
      interface STAddActSkuReq {
        iType?: number; //1、添加/修改  2、核销
strActId?: string; 
vecSku?: STActSkuInfo[]; 
strProdId?: string; 
stDiscountInfo?: STProdDiscountInfo; //积分抵扣，特权抵扣信息
      }
      

      interface STAddActSkuRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      

      declare enum EMSeckillStatus {
        E_SECKILL_NOT_START = 1, 
E_SECKILL_ING = 2, 
E_SECKILL_OVER = 3, 
      }
      
//  秒杀信息
      interface STSeckillInfo {
        iStartTime?: number; 
iEndTime?: number; 
iStatus?: number; //1、未开始 2 进行中  3、已停止  
      }
      
// 渠道类型
      declare enum EMChannelType {
        E_CHANNEL_CPS = 1, //CPS渠道
E_CHANNEL_OPEN = 2, //商品开放平台
      }
      
// 渠道成本结算类型
      declare enum EMChannelCostType {
        E_CHANNEL_COST_PERCENT = 1, //按比例分成
E_CHANNEL_COST_SUPPLY_PRICE = 2, //渠道供货价分成
      }
      
// 渠道特权
      declare enum EMChannelPrivilege {
        E_CHANNEL_PRI_NULL = 0, //无
E_CHANNELL_PRI_VIP = 1, //腾讯视频VIP
      }
      
// 渠道成本结算信息
      interface STChannelCostInfo {
        iType?: number; //成本结算类型： 1 按比例分成  2 渠道供货价 见EMChannelCostType
iPercent?: number; //分成比例
      }
      
//  渠道信息
      interface STChannelInfo {
        iType?: number; // 渠道类型 1 CPS渠道， 2 商品开放平台 见EMChannelType
stCost?: STChannelCostInfo; //成本结算
iPrivilege?: number; //渠道特权，0 无， 1腾讯视频VIP 见EMChannelPrivilege
      }
      
// 活动详细信息
      interface STActInfo {
        stBaseInfo?: STActBaseInfo; 
strBanner?: string; //Banner图
strCustomUrl?: string; //专题连接
bUseCustomUrl?: boolean; //是否优先跳转专题页
strDefaultUrl?: string; //默认的货架url
vecActProd?: STActProdInfo[]; //活动商品列表（废弃）
vecProdId?: string[]; //五期新增字段s//全量商品ID（废弃）
strDesc?: string; //活动说明
stScopeInfo?: STScopeInfo; //活动范围
strThemeImg?: string; //主题图
uiThemeColor?: number; //主题色
stPlay?: STPlayInfo; //运营玩法
stOnOffCfg?: STOnOffCfgInfo; //上下架设置
vecColor?: unsignedint[]; //主题色值
stSeckillInfo?: STSeckillInfo; //秒杀信息
vecSku?: STActSkuInfo[]; //SKU 信息
vecUnConfProd?: string[]; //未设置价格的商品列表
vecScriptInfo?: STScriptInfo[]; //活动角标信息
stChannelInfo?: STChannelInfo; //渠道相关配置，仅渠道活动需要这个配置
vecScopeInfo?: STScopeInfo[]; //活动范围，配置的商品池是子商品池的时候会填充父商品池条件
mapDiscountInfo?: {
      [prop: string]: STProdDiscountInfo
    }; //积分抵扣、特权抵扣信息,key为商品ID
stScopeInfoComm?: STScopeInfo; //Comm里面的范围格式
      }
      
// is_channel=0，展示活动  is_channel=1，展示渠道
      interface STGetActListReq {
        iPage?: number; 
iPageSize?: number; 
mapCondition?: {
      [prop: string]: string
    }; 
      }
      

      interface STGetActListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecActInfo?: STActBaseInfo[]; //(废弃)
iTotal?: number; 
vecAllActInfo?: STActInfo[]; //新增，列表也返回全部信息
      }
      
// 新增或修改活动
      interface STAddActReq {
        iType?: number; //1 新增 2 修改
stActInfo?: STActInfo; //活动信息,里面vecActProd只填ID，其它不填
      }
      

      interface STAddActRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strActId?: string; //新增返回活动ID
      }
      
// 读取活动详情
      interface STGetActInfoReq {
        strActId?: string; 
iPage?: number; //用于商品列表的分页
iPageSize?: number; 
      }
      

      interface STGetActInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stActInfo?: STActInfo; 
iTotal?: number; //一共有多少个商品
      }
      
// 活动操作，上线/下线
      interface STOperateActReq {
        iOpType?: number; 
strId?: string; //活动ID
iLastModityTime?: number; //修改时间，审核时防重
      }
      

      interface STOperateActRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iStatus?: number; //活动的新状态
iOnlineTime?: number; //最近上线时间
      }
      

      declare enum EMProdActListType {
        E_CPROD_INFO_SCENE = 0, //C端商品详情页调用
E_BPROD_INFO_SCENE = 1, //B端商品详情页调用,会查DB获取是否配置价格的标志
      }
      
// 获取商品的活动列表,C端使用
      interface STGetProdActListReq {
        strId?: string; //商品ID
iType?: number; //标志，表示场景
strChannelId?: string; //渠道ID，为空不检查
iFlag?: number; //0 返回活动，1 返回渠道
      }
      

      interface STGetProdActListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecActInfo?: STActInfo[]; //商品所属活动信息
vecHasConfPrice?: boolean[]; 
      }
      
// 批量获取商品下活动的列表，结算使用
      interface STGetProdActListBatchReq {
        vecProdId?: string[]; //商品ID
strChannelId?: string; //渠道ID，为空不检查
      }
      

      interface STGetProdActListBatchRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapActInfo?: {
      [prop: string]: STActInfo[]
    }; 
      }
      

      declare enum EMActNotifyType {
        E_NOTIFY_ACT_ADD = 1, 
E_NOTIFY_ACT_EDIT = 2, 
E_NOTIFY_ACT_ONLINE = 3, 
E_NOTIFY_ACT_OFFLINE = 4, 
E_NOTIFY_ACT_DELETE = 5, 
E_NOTIFY_ACT_CHECK_OK = 6, 
E_NOTIFY_ACT_CHECK_UNOK = 7, 
E_NOTIFY_ACT_RECALL = 8, 
E_NOTIFY_ACT_PUBLISH = 9, 
E_NOTIFY_ACT_HIDE = 10, 
E_NOTIFY_ACT_SHOW = 11, 
E_PROD_SET_ACT_PRICE = 100, //商品设置活动价
      }
      
// 活动更新中转
      interface STActNotifyReq {
        iType?: number; 
strId?: string; 
bTestFlag?: boolean; 
strProdId?: string; //商品设置活动价时的商品ID
      }
      
// 上线活动列表
      interface STGetOnlineActReq {
        uiPageFlag?: number; //0x01 一次性全部  0x02 页码翻页 0x03 上下翻页
iPageSize?: number; //页大小
iCurPage?: number; //当前页码
strContext?: string; //翻页上下文
vecType?: number[]; //指定活动类型
      }
      

      interface STGetOnlineActRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecId?: string[]; 
strContext?: string; //翻页上下文
iTotal?: number; //总数
bHasNextPage=false?: boolean; //是否还有数据
      }
      
// 活动范围信息（查活动配置的条件）
      interface STGetActScopeReq {
        vecId?: string[]; 
iType?: number; //iType为0时走本地缓存;iType为1时不走本地缓存
iIsNewScope?: number; //是否请求新格式条件  0 返回旧格式条件  1返回comm里面的新格式条件
      }
      

      interface STGetActScopeRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapAct?: {
      [prop: string]: STActInfo
    }; 
      }
      
// 筛选符合规则的商品
      interface STGetQualifyProdReq {
        strActId?: string; 
vecProdId?: string[]; 
      }
      

      interface STGetQualifyProdRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecProdId?: string[]; 
      }
      
// 获取待审核数量
      interface STGetCheckActCntReq {
        iTime?: number; 
      }
      

      interface STGetCheckActCntRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iWaitCheckCnt?: number; 
      }
      
// 请求基本结构
      interface STSkuActReqInfo {
        strProdId?: string; 
strSkuId?: string; 
vecActType?: number[]; 
strActId?: string; 
strChannelId?: string; //渠道ID，为空不检查		
      }
      
// 获取SKU参与的有效活动列表
      interface STGetSkuValidActReq {
        vecSku?: STSkuActReqInfo[]; 
      }
      

      interface STGetSkuValidActRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapSkuAct?: {
      [prop: string]: STActInfo[]
    }; 
      }
      
// 查询SKU指定活动信息
      interface STGetSkuActReq {
        vecSku?: STSkuActReqInfo[]; 
      }
      

      interface STGetSkuActRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapActSku?: {
      [prop: string]: STActInfo
    }; //key是活动ID，SKU在STActInfo的Sku列表里
      }
      
// 复制活动
      interface STCopyActReq {
        iType?: number; 
strActId?: string; 
      }
      

      interface STCopyActRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strNewActId?: string; 
      }
      
// 查询商品下SKU参与的指定活动配置 B端接口
      interface STGetProdActSkuReq {
        strProdId?: string; 
strActId?: string; 
      }
      

      interface STGetProdActSkuRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecSku?: STActSkuInfo[]; 
stDiscountInfo?: STProdDiscountInfo; //积分抵扣，特权抵扣信息
      }
      

      interface STGetSeckillSkuReq {
        iType?: number; 
      }
      

      interface STGetSeckillSkuRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecSku?: STActSkuInfo[]; 
      }
      

      interface STGetProdConfActReq {
        strProdId?: string; 
      }
      

      interface STGetProdConfActRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecActId?: string[]; 
      }
      
// 获取活动下未配置价格商品列表
      interface STGetActUnConfProdReq {
        strActId?: string; 
iPageSize?: number; 
iPageFlag?: number; //0x01 上下文翻页 0x02 页码翻页
iCurPage?: number; 
strPageContext?: string; 
      }
      

      interface STGetActUnConfProdRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecProdId?: string[]; 
iTotal?: number; 
strPageContext?: string; 
bHasNext?: boolean; 
      }
      
// B 端，根据锁定ID取对应的活动信息
      interface STGetActByLockReq {
        vecLockId?: string[]; 
      }
      

      interface STGetActByLockRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapAct?: {
      [prop: string]: STActInfo
    }; 
      }
      
// 获取商品池下活动列表，给搜索及商品池使用
      interface STGetProdPoolActListReq {
        strId?: string; //Id值，商品池ID
      }
      

      interface STGetProdPoolActListRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因 
vecId?: string[]; //对应的活动ID
      }
      
// 将商品从指定活动中排除(B端)
      interface STExcludeProductReq {
        strId?: string; //活动ID
vecProductId?: string[]; //需要剔除的商品ID列表
      }
      

      interface STExcludeProductRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因    
      }
      
// 批量查询商品的活动价格,B端用
      interface STGetMultiProdActReq {
        vecProdId?: string[]; 
      }
      

      interface STGetMultiProdActRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapProdAct?: {
      [prop: string]: STActSkuInfo[]
    }; 
      }
      
  