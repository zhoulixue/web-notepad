
  
  // 测试环境：
// 10.49.107.200:24459
// 913345:589824
// 正式环境：
// 913345:655360
      declare enum emSubCmd {
        CMD_READ_STOCK_LIST = 0xf675, // 读进货批次(以下简称批次)列表
CMD_READ_STOCK_INFO = 0xf676, // 读批次详情
CMD_WRITE_STOCK = 0xf677, // 0xf3ea, 0xf35a接中转修改批次s// 写批次
CMD_READ_PROD_STORE_INFO = 0xf88f, // 读商品的仓储信息            
CMD_READ_LOCK_SKU_LIST = 0xf808, // 读锁定SKU列表
CMD_READ_LOCK_SKU_INFO = 0xf8e8, // 读锁定详情 
CMD_LOCK_SKU = 0xf809, // 锁定SKU
CMD_RELEASE_SKU = 0xf80b, // 核销SKU
CMD_RELEASE_SKU_BATCH = 0xf909, // 批量核销
CMD_CONSUME_SKU = 0xf80a, // 消耗锁定SKU
      }
      

      declare enum emErrCode {
        RT_QUERY_READ_ERROR = 2001, // 读DB失败
RT_QUERY_WRITE_ERROR = 2002, // 写DB失败
RT_GET_STORE_NAME_ERROR = 2003, // 获取仓库名失败
RT_WRITE_SKU_ERROR = 2004, // 写SKU失败
RT_CHECK_USER_RIGHT_ERROR = 2005, // 鉴权失败
RT_STORE_HAS_NO_STOCK_ERROR = 2006, // 仓储无批次
RT_GET_PROD_SKU_ERROR = 2007, // 获取商品SKU列表失败
RT_GET_SKU_INFO_ERROR = 2008, // 获取SKU信息失败
RT_SKU_NOT_ENOUGH_ERROR = 2009, // SKU数量不够(锁定) 
RT_READ_ORDER_FLOW_ERROR = 2010, // 读订单状态失败
RT_GOODS_NUM_INVALID = 2011, // 订单中SKU数量不合法
RT_CHECK_INVALID = 2012, // 检查错误
      }
      

      declare enum emStatus {
        S_EDITING = 1, // 编辑中
S_IN_USE = 2, // 使用中
S_EXHAUSTED = 3, // 已耗尽
      }
      

      declare enum emStockType {
        ST_NORMAL = 1, // 正常销售
ST_SEC_KILL = 2, // 秒杀
      }
      

      interface STSkuInfo {
        strSkuId?: string; 
dwSupplyPrice?: number; // 供货价
dwInboundNum?: number; // 入库库存
dwConsumedNum?: number; // 已耗库存
      }
      

      interface STSkuStockInfo {
        ddwStockId?: number; // 批次ID
strStockName?: string; // 批次名
iStatus?: number; // 状态，取自emStatus
dwSupplyPrice?: number; // 供货价(单位：分)
dwLeftNum?: number; // 剩余库存
      }
      

      interface STStoreSkuInfo {
        strSkuId?: string; 
vecProps?: STPropInfo[]; //SKU所包含的属性信息
vecSkuStockInfo?: STSkuStockInfo[]; 
      }
      

      interface STStoreInfo {
        strStoreId?: string; 
strStoreName?: string; 
dwSkuNum?: number; 
vecStoreSkuInfo?: STStoreSkuInfo[]; 
      }
      

      interface STStockInfo {
        ddwStockId?: number; // 批次ID
strStockName?: string; // 批次名
iStartTime?: number; // 开始使用时间
iStatus?: number; // 状态，取自emStatus
dwTotSkuSp?: number; // SKU种类
dwTotSkuNum?: number; // 全部SKU数量
dwTotCost?: number; // 总金额：全部SKU的数量 * SKU供货价
stStoreInfo?: STStoreInfo; // 仓库信息
strRemark?: string; // 备注
vecSkuInfo?: STSkuInfo[]; // SKU信息
      }
      

      declare enum emQueryType {
        QT_STOCK_ID = 1, // 批次ID
QT_STOCK_NAME = 2, // 批次名
QT_STATUS = 3, // 批次状态
QT_SELLER_ID = 4, // 仓库ID
QT_SKU_ID = 5, // SKUID
      }
      

      interface STQueryInfo {
        iType?: number; 
strValue?: string; 
      }
      

      interface STReadStockListReq {
        iSeqNum?: number; // 按页码分页
iCurPage?: number; 
vecQueryInfo?: STQueryInfo[]; 
      }
      

      interface STReadStockListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecStockInfo?: STStockInfo[]; // stSkuInfo为空
iTotPage?: number; // 总页数
      }
      

      interface STReadStockInfoReq {
        ddwStockId?: number; 
      }
      

      interface STReadStockInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stStockInfo?: STStockInfo; // stSkuInfo非空
      }
      

      interface STWriteStockReq {
        iType?: number; // =1:新增 =2：修改 =3：删除
stStockInfo?: STStockInfo; 
iModType?: number; // =1:修改基本信息 =2：修改SKU详情
      }
      

      interface STWriteStockRsp {
        iErrCode?: number; 
strErrMsg?: string; 
ddwStockId?: number; // 新增时返回
iStartTime?: number; // 返回的开始使用时间
      }
      

      declare enum emLockType {
        LT_ONE_STORE = 1, // 同一个仓储
LT_MULTI_STORE = 2, // 多个仓储
      }
      

      interface STLockSkuInfo {
        ddwLockId?: number; 
strLockName?: string; 
strSkuId?: string; 
stStoreInfo?: STStoreInfo; 
dwLockNum?: number; // 锁定数量
iLockTime?: number; 
vecProps?: STPropInfo[]; 
dwReleaseNum?: number; // 核销数量
bRls?: boolean; // =0:未被核销 =1:已核销 
iLockType?: number; // 锁定类型，取自emLockType
vecStoreInfo?: STStoreInfo[]; // tag4无法表示锁多仓的情况
dwConsNum?: number; // 已耗数量
      }
      

      interface STReadLockSkuListReq {
        iPageFlag?: number; // 翻页规则 =1:页码翻页 =2:上下文翻页
iSeqNum?: number; // 2,3用于页码翻页
iCurPage?: number; // 2,4用于上下文翻页
strPageCtx?: string; 
strProdId?: string; // 商品ID
      }
      

      interface STReadLockSkuListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecLockSkuInfo?: STLockSkuInfo[]; 
iTotNum?: number; // 锁库存条数，页码翻页时返回
strPageCtx?: string; // 5,6上下文翻页时返回
bHasNext?: boolean; 
dwTotNum?: number; // 总锁定数
      }
      

      interface STLockSkuReq {
        strLockName?: string; 
strStoreId?: string; 
strSkuId?: string; 
dwLockNum?: number; 
iLockType?: number; // 锁定类型，取自emLockType
      }
      

      interface STLockSkuRsp {
        iErrCode?: number; 
strErrMsg?: string; 
ddwLockId?: number; 
      }
      

      interface STConsumeSkuReq {
        ddwLockId?: number; 
dwConsumedNum?: number; 
      }
      

      interface STConsumeSkuRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      

      interface STReleaseSkuReq {
        ddwLockId?: number; 
strSkuId?: string; 
dwReleaseNum?: number; 
      }
      

      interface STReleaseSkuRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      

      interface STReadProdStoreInfoReq {
        strProdId?: string; 
      }
      

      interface STReadProdStoreInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecStoreInfo?: STStoreInfo[]; 
dwTotNum?: number; 
      }
      

      interface STReadLockSkuInfoReq {
        vecLockId?: number[]; 
      }
      

      interface STReadLockSkuInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapLockId2Info?: {
      [prop: number]: STLockSkuInfo
    }; 
      }
      
  