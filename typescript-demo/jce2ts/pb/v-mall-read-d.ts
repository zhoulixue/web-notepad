
  // 以下为C端使用协议，商品读模块
  
      declare enum emVMallReadCmd {
        EM_READ_BASE_INFO = 0xf274, //0x1f21,
EM_READ_INFO = 0xf273, //0x1f22,
EM_READ_PRODUCT_SKU = 0xf276, //0x1f23,
EM_READ_SKU = 0xf275, //0x1f24,
EM_READ_VIEW_CAT = 0xf2ad, 
EM_READ_ACT_PROD = 0xf4a7, 
EM_READ_SEARCH_INFO = 0xf57f, 
EM_READ_INFO_ADMIN = 0xf66b, 
EM_READ_PROD_LIST_INFO = 0xf7f2, 
EM_READ_PROD_STATIC_INFO = 0xf96a, 
      }
      

      interface STCatInfo {
        strCatId?: string; 
strCatName?: string; 
      }
      

      interface STGetViewCatReq {
        strType?: string; //"0"读取全部
      }
      

      interface STGetViewCatRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecCat?: STCatInfo[]; 
      }
      

      interface STIpData {
        strIpId?: string; 
strIpName?: string; 
strPriIpId?: string; 
      }
      

      interface STLabelInfo {
        strLabelId?: string; //标签ID
strLabelName?: string; //标签名
strLabelDesc?: string; //标签具体描述
      }
      

      interface STUserDiscountInfo {
        iId?: number; //对应VideoMallComm.jce里emPricePrivilege
uiCash?: number; 
bIsMatch?: boolean; 
      }
      

      interface STSkuQuanInfo {
        strSkuId?: string; 
strBatchId?: string; 
iQuantity?: number; 
uiPureCashPrice?: number; 
strActId?: string; //用于SKU计价的活动
      }
      
// 商品基本信息，列表页展示
      interface STProductBaseInfo {
        strProductId?: string; //商品ID
strTitle?: string; //商品名
strCategoryId?: string; //商品类别
strViewCategoryId?: string; //外显类别
strImgUrl?: string; //图片
strSellerId?: string; //卖家ID
uiVCoinPrice?: number; //V币价格
uiCashPrice?: number; //现金价格
uiOriPrice?: number; //原价
uiPureVCoinPrice?: number; //纯V币价格
uiPureCashPrice?: number; //纯现金价格，单位：分
vecLabel?: STLabelInfo[]; //商品标签
iSaleType?: number; //0 正常 1 预售
iPreSaleTime?: number; //预售发货时间
vecIpList?: string[]; //IP列表（废弃）
uiExpressFee?: number; //邮费（废弃）
strMattingImg?: string; //三期字段s//抠图
iSaleStartTime?: number; //开售时间
uiRealPrice?: number; //实际显示价格，可能是特权价格
vecPrivilegeId?: number[]; //特权ID，用于计算特权价格的特权，为空，则表示没有特权，目前有的话只有一个值，就是VIP特权(废弃）
vecIpName?: STIpData[]; //四期字段s//IP列表
vecDiscount?: STUserDiscountInfo[]; //五期字段s//优惠列表
vecAct?: STActDiscountInfo[]; //活动优惠信息，这里有数据，说明使用的是活动价格，会给出活动简称和活动ID，为空，则表示没有使用活动价
uiExpectPrice?: number; //期望价格
vecRealPriceTag?: STPriceTag[]; //最终价格标签
vecExpectPriceTag?: STPriceTag[]; //期望价格标签
uiSpreadPrice?: number; //推广价格
vecSpreadPriceTag?: STPriceTag[]; //推广价格标签
uiViewSale?: number; //外显销量
iQuantity?: number; //可卖库存
strShortTitle?: string; //商品简称
vecSearchWord?: string[]; //商品关键词
uiPresaleDiscount?: number; //预售折扣，前端不关心
vecSku?: STSkuQuanInfo[]; //SKU及库存数据
strRepSkuId?: string; //代表SKUId
uiProdSale?: number; //商品总销量，包括锁定ID对应的销量
strScript?: string; //角标
iTotalQuan?: number; //商品总剩余库存，包括锁定的库存
stCredictConf?: STCredictInfo; //商品积分配置
vecScript?: STScriptInfo[]; //商品角标
strPriCatId?: string; //商品一级类目ID
vecActScript?: STScriptInfo[]; //活动角标
iExpTempId?: number; //商品邮费模板
strProdUrl?: string; //商详链接
stDeposit?: STDepositInfo; //定金信息
iPresaleType?: number; //预售类型
      }
      

      interface STExpTempInfo {
        iId?: number; 
strDesc?: string; 
      }
      

      interface STRePolicyInfo {
        iId?: number; 
strDesc?: string; 
      }
      

      interface STSkuSearchInfo {
        strSkuId?: string; 
      }
      
// 用于搜索的商品数据
      interface STProdSearchInfo {
        strProductId?: string; //商品ID
strTitle?: string; //商品名
strCategoryId?: string; //二级类目ID
uiExpressFee?: number; //邮费
bIsExpressFree?: boolean; //是否免邮
strSellerId?: string; //卖家ID
iStatus?: number; //商品状态
uiVCoinPrice?: number; //组合价中的V币价格
uiCashPrice?: number; //组合价中的现金价格
uiOriPrice?: number; //原价
uiPureVCoinPrice?: number; //纯V价格，单位：分
uiPureCashPrice?: number; //纯现金价格，单位：分
uiSale?: number; //销量
iQuantity?: number; //库存
vecProps?: STPropInfo[]; //商品属性列表
vecLabel?: STLabelInfo[]; //二期新增字段s//商品的标签，如 “正品”
vecIpList?: string[]; //IP列表
iSaleType?: number; //0 正常 1 预售
iPreSaleTime?: number; //预售发货时间
stExpInfo?: STLabelInfo; //邮费模板信息
stRePolicyInfo?: STLabelInfo; //退换货策略
uiCash?: number; //V币优惠可抵扣的现金
uiVCoin?: number; //三期新增字段s//V币优惠的V币数
iSaleStartTime?: number; //开售时间
vecDiscount?: STUserDiscountInfo[]; //优惠列表
vecIpName?: STIpData[]; //IP名字
strPriCat?: string; //一级类目ID
uiViewSale?: number; //外显销量
vecSku?: STSkuSearchInfo[]; //Sku信息
iOnSaleTime?: number; 
strCatName?: string; //二级类目名
strPriCatName?: string; //一级类目名
iTestType?: number; //沙箱标识，0 正式商品  1沙箱商品
strMattingImg?: string; //商品抠图
vecSearchWord?: string[]; //关键词
uiVipDiscount?: number; //VIP 抵扣
stCredict?: STCredictInfo; //VIP 积分设置
iRelateStatus?: number; //商品优惠券关联，0 关联，1 不关联
strSuppler?: string; //供货商ID
iPresaleType?: number; 
stDeposit?: STDepositInfo; //定金
      }
      

      interface STReadResearchInfoReq {
        strId?: string; 
iType?: number; //0 -- 商品ID ，1 -- SKUID
      }
      

      interface STReadResearchInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stInfo?: STProdSearchInfo; 
      }
      
// 商品列表类目信息
      interface STProdCatInfo {
        strPriId?: string; 
strSecId?: string; 
strPriName?: string; 
strSecName?: string; 
      }
      
// 商品列表折扣信息	
      interface STProdDiscountInfo {
        uiVCoin?: number; 
uiVip?: number; 
uiFresh?: number; 
uiAct?: number; 
strActId?: string; 
strActName?: string; 
uiPresale?: number; //预售折扣
stCredict?: STCredictInfo; //积分抵扣
      }
      
// 商品列表预售信息
      interface STProdPresaleInfo {
        iPresaleType?: number; 
iPresaleDiscount?: number; 
iSaleStartTime?: number; //预售开始时间
iDeliveryTime?: number; //发货时间
iPresaleSubType?: number; 
stDeposit?: STDepositInfo; //定金
      }
      

      declare enum EmSKuStatus {
        E_SKU_STATUS_NORMAL = 1, //正常
E_SKU_STATUS_UNSOLD = 2, //商品未上架
E_SKU_STATUS_HIDDEN = 3, //隐藏
      }
      
// 商品列表SKU信息
      interface STProdSkuInfo {
        strSkuId?: string; 
mapProp?: {
      [prop: string]: string
    }; //规格
strImgUrl?: string; 
uiPureCashPrice?: number; 
uiSale?: number; 
iQuantity?: number; 
iRealQuantity?: number; 
uiSupplyPrice?: number; //供货价
iTotalQuan?: number; //总剩余库存（普通 + 锁定)
iLockQuan?: number; //锁定总库存
uiTotalSale?: number; //总销量（普通+锁定）
uiLockSale?: number; //锁定总销量
iLockHold?: number; //锁定预扣库存
iStatus?: number; //SKu状态
uiPayNum?: number; //SKU历史销量
      }
      
// 商品列表信息
      interface STProdListInfo {
        strProductId?: string; //商品ID
strTitle?: string; //商品名
vecImgUrls?: string[]; //商品图片列表
iStatus?: number; 
stCat?: STProdCatInfo; 
vecIp?: STProdCatInfo[]; 
uiSale?: number; 
iQuantity?: number; 
iRealQuantity?: number; 
iOnSaleTime?: number; 
iOffSaleTime?: number; 
uiPureCashPrice?: number; //商品基础价
stDiscount?: STProdDiscountInfo; //折扣信息
stPresale?: STProdPresaleInfo; //预售信息
vecSku?: STProdSkuInfo[]; //SKU 信息
iTotalQuan?: number; //总剩余库存（普通 + 锁定)
iLockQuan?: number; //锁定总库存
uiTotalSale?: number; //总销量（普通+锁定）
uiLockSale?: number; //锁定总销量
iLockHold?: number; //锁定预扣库存
uiPayNum?: number; //历史销量
strProdCus?: string; //商品定制信息
      }
      

      interface STGetProdListReq {
        vecId?: string[]; 
      }
      

      interface STGetProdListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapProd?: {
      [prop: string]: STProdListInfo
    }; 
      }
      

      declare enum emPresaleStatus {
        E_PRESALE_TYPE_FULL = 0, 
E_PRESALE_TYPE_DEPOSIT = 1, 
      }
      

      interface STProductInfo {
        strProductId?: string; //商品ID
strTitle?: string; //商品名
strCategoryId?: string; //类别ID
strViewCategoryId?: string; //外显类别ID
vecImgUrls?: string[]; //商品图片列表
strContent?: string; //商品详情描述，html结构体
vecImgDesc?: string[]; //商品详情图片
uiExpressFee?: number; //邮费
bIsExpressFree?: boolean; //是否免邮
strSellerId?: string; //卖家ID
iStatus?: number; //商品状态
uiVCoinPrice?: number; //组合价中的V币价格
uiCashPrice?: number; //组合价中的现金价格
uiOriPrice?: number; //原价
uiPureVCoinPrice?: number; //纯V价格，单位：分
uiPureCashPrice?: number; //纯现金价格，单位：分
uiSale?: number; //销量
iQuantity?: number; //库存
vecProps?: STPropInfo[]; //商品属性列表
vecSkus?: STProductSkuInfo[]; //sku 列表
vecLabel?: STLabelInfo[]; //商品的标签，如 “正品”
strTargetId?: string; //二期新增字段s//评论使用
vecIpList?: string[]; //IP列表
iSaleType?: number; //0 正常 1 预售
iPreSaleTime?: number; //预售发货时间
strMattingImg?: string; //产品抠图
iSellerType?: number; //商家类型 0 普通 1 自营
stExpInfo?: STLabelInfo; //邮费模板信息
stRePolicyInfo?: STLabelInfo; //退换货策略
uiCash?: number; //V币优惠可抵扣的现金
uiVCoin?: number; //三期新增字段s//V币优惠的V币数
iSaleStartTime?: number; //开售时间
vecDiscount?: STUserDiscountInfo[]; //优惠列表
uiRealPrice?: number; //目前商品的实际价格
vecPrivilegeId?: number[]; //目前使用的特权ID
vecIpName?: STIpData[]; //五期新增字段s//IP名字
vecAct?: STActDiscountInfo[]; //活动信息，表示uiRealPrice是否用活动价计算
uiExpectPrice?: number; //期望价格
vecRealPriceTag?: STPriceTag[]; //最终价格标签
vecExpectPriceTag?: STPriceTag[]; //期望价格标签
uiSpreadPrice?: number; //推广价格
vecSpreadPriceTag?: STPriceTag[]; //推广价格标签
uiViewSale?: number; //外显销量
strShortTitle?: string; //商品简称
vecSearchWord?: string[]; //商品搜索关键字
iOnSaleTime?: number; //上架时间
iRealQuantity?: number; //商品总库存
uiPresaleDiscount?: number; //预售折扣，前端不关心
strScript?: string; //角标
strCredictConf?: STCredictInfo; //积分配置
vecScript?: STScriptInfo[]; //商品角标
vecActScript?: STScriptInfo[]; //活动角标
strProdCus?: string; //商品定制信息
iPresaleType?: number; //预售类型， 0 -- 全额， 1 -- 定金
stDeposit?: STDepositInfo; //商品定金信息
uiCrowdNum?: number; //众筹数量
strPddGoldsConf?: STPddGoldsConf; //片多多金币数据
      }
      
// 请求商品简要信息时，需要带上商品ID和计价要用的活动ID，秒杀里面使用
      interface STProdActInfo {
        strProdId?: string; 
strActId?: string; 
      }
      
// 读商品简要信息，支持批量
      interface STReadBaseInfoReq {
        vecProductIds?: string[]; 
strActId?: string; 
strChannelId?: string; 
      }
      

      interface STReadBaseInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapId2Info?: {
      [prop: string]: STProductBaseInfo
    }; 
      }
      
// 读商品详细信息
      interface STReadInfoReq {
        strProductId?: string; 
strActId?: string; //线下活动使用
strChannelId?: string; 
      }
      

      interface STReadInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stInfo?: STProductInfo; 
      }
      
// 根据商品ID获取所有SKU信息
      interface STProductSkuReq {
        strProductId?: string; 
      }
      

      interface STProductSkuRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecSkus?: STProductSkuInfo[]; 
      }
      
// 查询SKU时秒杀场景下需要带活动ID
      interface STSkuActReqInfo {
        strSkuId?: string; 
strActId?: string; 
strChannelId?: string; 
      }
      
// 根据SKUID获取SKU信息
      interface STSkuReq {
        vecSkuIds?: string[]; 
vecSkuWithAct?: STSkuActReqInfo[]; 
      }
      

      interface STSkuRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapId2Info?: {
      [prop: string]: STProductSkuInfo
    }; 
      }
      

      interface STIpCatInfo {
        strPriId?: string; 
strPriName?: string; 
strSecId?: string; 
strSecName?: string; 
      }
      

      interface STActProdDBInfo {
        strId?: string; 
strImg?: string; 
strTitle?: string; 
iStatus?: number; 
vecIpInfo?: STIpCatInfo[]; 
stCatInfo?: STIpCatInfo; 
      }
      
// 直接从DB读取商品基本信息
      interface STReadActProdInfoReq {
        vecProductIds?: string[]; 
      }
      

      interface STReadActProdInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapId2Info?: {
      [prop: string]: STActProdDBInfo
    }; 
      }
      
  