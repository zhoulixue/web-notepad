
  
  // 读测试:
// IP:
      declare enum CMD_SEARCH_ADAPTER {
        CMD_SEARCH_PROD_REQ = 0xf671, //B端搜索商品  (废弃)
CMD_MANAGE_SEARCH_PROD_REQ = 0xf88d, //B端搜索商品 （分tab  重构后接口）
CMD_MALL_SEARCH_REQ = 0xf789, //商城C端搜索:商品、IP、品类、活动
CMD_MALL_PRESET_WORD_REQ = 0xf7a0, //预置词查询
CMD_MALL_OPERATION_WORD_REQ = 0xf7a1, //运营词查询
CMD_MALL_HOT_WORD_REQ = 0xf7a2, //热词查询
      }
      
// IP信息
      interface STSecIpData {
        strId?: string; 
strName?: string; //名称
strPid?: string; //父类目ID
strPname?: string; //父类目名称	
strCid?: string; //关联CID
strLid?: string; //关联LID
strHorPic?: string; //横版图片
strVerPic?: string; //竖版图片
strDesc?: string; //类目介绍
iStatus?: number; //四期新增字段s//状态
strMattingPic?: string; //抠图，如果有干预图的话会把这个图片替换掉
uiProdNum?: number; //商品数
vecProd?: string[]; //前三商品
uiColor?: number; //底色
strUrl?: string; //干预链接
      }
      
// IP名称
      interface STIpData {
        strIpId?: string; 
strIpName?: string; 
      }
      
// 商品类目信息
      interface STCatIpInfo {
        strPid?: string; //一级类目ID
strId?: string; //二级类目ID
      }
      
// 活动基本信息
      interface STActBaseInfo {
        strId?: string; //活动ID
strName?: string; //活动名称
uiProdNum?: number; //商品数量
iStatus?: number; //活动状态
iOnlineTime?: number; //最近上线时间
iType?: number; //活动类型
iModifyTime?: number; //五期添加字段s//修改时间
bHasSale?: boolean; //有无促销
stSaleInfo?: STSaleInfo; //促销信息
strShortTitle?: string; //简称
strUrl?: string; //干预链接
      }
      

      interface STSkuInfo {
        strProductId?: string; //商品ID
strSkuId?: string; //skuid
strImgUrl?: string; //图片
mapProp?: {
      [prop: string]: string
    }; //SKU所包含的属性信息
iQuantity?: number; //可卖库存：实际库存减预扣库存
iSale?: number; //销量
iRealQuantity?: number; //总库存
      }
      
// 商品详细信息
      interface STProductInfo {
        strProductId?: string; //商品ID
strTitle?: string; //商品名
strImgUrl?: string; //图片
iStatus?: number; 
iQuantity?: number; //可卖库存
iSale?: number; //销量
uiVCoinPrice?: number; //V币价格
uiCashPrice?: number; //现金价格
uiOriPrice?: number; //原价
uiPureVCoinPrice?: number; 
uiPureCashPrice?: number; 
vecSku?: STSkuInfo[]; //SKU信息
iSaleType?: number; //销售模式，0 正常 1预售
stCatData?: STCatIpInfo; //真实类目信息
vecIpData?: STCatIpInfo[]; //IP类目信息
iRealQuantity?: number; //总库存
iOnSaleTime?: number; //C端新增字段s//最近上架时间
uiExpectPrice?: number; //期望价格  ---最终外显价格，C端使用
uiSpreadPrice?: number; //推广价格---C端用VIP价
strMattingImg?: string; //抠图---C端用商品图片
vecIpName?: STIpData[]; //IP名字--C端外显使用
vecSpreadPriceTag?: STPriceTag[]; //推广价格标签
vecExpectPriceTag?: STPriceTag[]; //期望价格标签
vecScript?: STScriptInfo[]; //商品角标
vecActScript?: STScriptInfo[]; //活动角标
stCredictConf?: STCredictInfo; //积分配置
      }
      
// 根据给定的条件搜索商品列表 B端 废弃
      interface STSearchProductListReq {
        iPageFlags?: number; //翻页规则0x01：上下文翻页 ;0x02:按页码翻页；
vecSearch?: STConInfo[]; //精确搜索参数（参考iFilerType）
strFullSearch?: string; //全文搜索值
iReqNum?: number; //翻页数量，选择按页码翻页时，前端传入一页请求的条数
iCurPage?: number; //当前页码，从0开始
strContext?: string; //请求上下文
iFilterType?: number; //筛选类型（0：或搜索，1：与搜索）    
      }
      

      interface STSearchProductListRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因   
vecProduct?: STProductInfo[]; //商品详细信息
strContext?: string; //请求上下文
iCurPage?: number; //当前第几页从0开始计数
iPageNum?: number; //总的页数
bHasNext?: boolean; //是否还有数据
iTotal?: number; //总数  
      }
      
// 商城C端搜索
      interface STMallSearchReq {
        strQuery?: string; //搜索关键词
iSortFlags?: number; //商品搜索排序规则:0x01 综合排序； 0x02 销量排序；0x03上新时间排序
iReqNum?: number; //翻页数量，前端传入一页请求的条数
iCurPage?: number; //当前页码，从0开始
strQueryContext?: string; //搜索商品的上下文，对应prevQid，第一次传空，后续请求填写上次返回的，必须填写
      }
      

      interface STMallSearchRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因  
vecProduct?: STProductInfo[]; //IP信息+类目信息s//商品详细信息
vecCatIpData?: STSecIpData[]; //活动信息s//IP信息
vecActInfo?: STActBaseInfo[]; //商品信息翻页s//活动信息
iCurPage?: number; //当前第几页从0开始计数
iPageNum?: number; //总的页数
iTotal?: number; //总数，搜索结果中商品的总数	
strQueryContext?: string; //搜索的上下文
      }
      
// 预置词查询
      interface STMallPresetWordReq {
        strPlatform?: string; // 终端
      }
      

      interface STMallPresetWordRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因  
vecWord?: string[]; //预置词    
      }
      
// 运营词查询
      interface STMallOperationWordReq {
        strPlatform?: string; // 0为全部终端、1为移动APP、其他等待添加配置 
      }
      

      interface STOperationWordInfo {
        strWord?: string; //运营词
strUrl?: string; //跳转链接
      }
      

      interface STMallOperationWordRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
vecWord?: STOperationWordInfo[]; //运营词
      }
      
// 热词查询
      interface STMallHotWordReq {
        strPlatform?: string; // 终端
      }
      

      interface STHotWordInfo {
        strWord?: string; //热词
bShowIcon?: boolean; //是否有火的Icon图标
      }
      

      interface STMallHotWordRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因  
vecWord?: STHotWordInfo[]; //热词
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
        iPresaleType?: number; // 0 正常状态  1 预售
iPresaleDiscount?: number; 
iSaleStartTime?: number; //预售开始时间
iDeliveryTime?: number; //发货时间
iPresaleSubType?: number; 
stDeposit?: STDepositInfo; //定金
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
iRealQuantity?: number; //正常库存
uiSupplyPrice?: number; //供货价
iStatus?: number; //SKu状态
uiPayNum?: number; //SKU历史销量
iLockQuan?: number; //锁定总库存  锁定库存
iTotalQuan?: number; //总剩余库存（普通 + 锁定) 销售库存
uiPercent?: number; //sku分成比例，渠道按比例分成时展示
      }
      
// 价格区间值通用结构
      interface STPriceScopeComm {
        uiPriceBegin?: number; //区间最小值
uiPriceEnd?: number; //区间最大值
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
iRealQuantity?: number; //正常库存
iOnSaleTime?: number; 
iOffSaleTime?: number; 
uiPureCashPrice?: number; //商品基础价
stDiscount?: STProdDiscountInfo; //折扣信息
stPresale?: STProdPresaleInfo; //预售信息
vecSku?: STProdSkuInfo[]; //SKU 信息
uiPayNum?: number; //历史销量
iLockQuan?: number; //锁定总库存 锁定库存 
iTotalQuan?: number; //总剩余库存（普通 + 锁定)  销售库存
strProdCus?: string; //搜索这边新增s//商品定制信息
stSkuPureCashPriceScope?: STPriceScopeComm; //SKU基础价的区间值
stSkuVipPriceScope?: STPriceScopeComm; //SKUVIP价的区间值
stSkuFreshPriceScope?: STPriceScopeComm; //SKU新人价的区间值
stSkuActPriceScope?: STPriceScopeComm; //SKU活动价的区间值
stSkuSupplyPriceScope?: STPriceScopeComm; //SKU供货价的区间值
stSkuPreSalePriceScope?: STPriceScopeComm; //SKU预售价的区间值 
      }
      
// B端搜索商品 （分tab  重构后接口）
      interface STManageSearchProductListReq {
        iPageFlags?: number; //翻页规则0x01：上下文翻页 ;0x02:按页码翻页；
vecSearch?: STConInfo[]; //精确搜索参数（参考iFilerType）
strFullSearch?: string; //全文搜索值
iReqNum?: number; //翻页数量，选择按页码翻页时，前端传入一页请求的条数
iCurPage?: number; //当前页码，从0开始
strContext?: string; //请求上下文
iFilterType?: number; //筛选类型（0：或搜索，1：与搜索）    
strChannelId?: string; //渠道ID
iRestrictType?: number; //限制类型EM_KTYPE（EM_KTYPE_PRODPOOL = 7商品池）
strRestrictId?: string; //限制ID (限制ID，如果是商品池就是商品池ID)
      }
      

      interface STManageSearchProductListRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因   
vecProduct?: STProdListInfo[]; //商品详细信息
strContext?: string; //请求上下文
iCurPage?: number; //当前第几页从0开始计数
iPageNum?: number; //总的页数
bHasNext?: boolean; //是否还有数据
iTotal?: number; //总数  
      }
      

      interface //-------------------------------B端搜索在线商品新接口 end------------------------------------------ {
        
      }
      
  