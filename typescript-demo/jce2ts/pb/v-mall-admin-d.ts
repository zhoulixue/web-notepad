
  
  
      declare enum VMallAdminCmd {
        E_CMD_OPERATE_PRODUCT = 0xf23d, 
E_CMD_MODIFY_DICT = 0xf243, 
E_CMD_GET_DICT_LIST = 0xf244, 
E_CMD_MODIFY_CAT_PROP = 0xf245, 
E_CMD_MODIFY_SELLER = 0xf246, 
E_CMD_GET_SELLER = 0xf247, 
E_CMD_MODIFY_CAT = 0xf248, 
E_CMD_GET_CAT = 0xf249, 
E_CMD_GET_CAT_PROP = 0xf24a, 
E_CMD_GET_SELLER_BY_QQ = 0xf240, 
E_CMD_MODIFY_PRODUCT = 0xf23c, 
E_CMD_MODIFY_QUANTITY = 0xf3c6, 
E_CMD_GET_PUB_TEMPLATE = 0xf23b, 
E_CMD_GET_PRODUCT_LIST = 0xf23e, 
E_CMD_SAVE_DRAFT = 0xf24b, 
E_CMD_GET_DRAFT = 0xf24c, 
E_CMD_HOT_MGR = 0xf29f, 
E_CMD_GET_DRAFT_BY_ID = 0xf2d3, 
E_CMD_GET_ROLE_REQ = 0xf2e7, 
E_CMD_GET_SELLER_LIST = 0xf36f, 
E_CMD_GET_SELLER_BASE = 0xf3c1, 
E_CMD_MODIFY_SUPPLY_PRICE = 0xf416, 
E_CMD_GET_SKU_WARN_DATA = 0xf657, 
E_CMD_GET_PROD_CHECK_CNT = 0xf658, 
E_CMD_GET_SKU_STOCK_INFO = 0xf682, 
E_CMD_MODIFY_QUANTITY_BATCH = 0xf6bf, 
E_CMD_GET_PRESALE_PROD_DATA = 0xf7f5, 
E_CMD_GET_STORE_LIST = 0xfbe6, 
E_CMD_SKU_OP = 0xfcce, 
E_CMD_CHECK_PROD = 0xfee2, 
E_CMD_COUPON_RELATE = 0xffda, 
E_ORDER_LOAD_PROD_INFO = 0x5cbe, //订单导商品数据的接口，不查销量和库存，与productList共用协议
      }
      
// 输入类型
      declare enum emInputType {
        E_INPUT_TYPE_ENUM = 1, //单选的枚举输入
E_INPUT_TYPE_ENUM_MULTI = 2, //多选的枚举输入
E_INPUT_TYPE_INPUT = 3, //单选的用户输入
E_INPUT_TYPE_INPUT_MULTI = 4, //多选的用户输入
      }
      
// 商品属性值
      interface STPropValInfo {
        strVal?: string; //属性值
strRemark?: string; //属性值备注
      }
      
// 商品添加时使用
      interface STPropWInfo {
        strPropLabel?: string; //属性ID
strPropName?: string; //属性中文名
bIsSku?: boolean; //是否SKU属性
iInputType?: number; //输入类型
vecValue?: string[]; //属性值列表
vecPropVal?: STPropValInfo[]; //属性值列表，加备注，该字段使用后，5 字段废弃
      }
      

      declare enum EMSkuStatus {
        E_SKU_STATUS_DELETE = 0, 
E_SKU_STATUS_NORMAL = 1, 
E_SKU_STATUS_UNSOLD = 2, //不可卖，此时商品处于非上架状态
E_SKU_STATUS_HIDDEN = 3, //隐藏
      }
      

      interface STSkuPackage {
        strSkuId?: string; 
iNum?: number; 
      }
      

      interface STSkuWInfo {
        strSerialNum?: string; //SKU序列号，商家自定，目前暂为空
uiVCoinPrice?: number; //组合价格中的V币价格
uiCashPrice?: number; //组合价格中的现金价格
uiPureVCoinPrice?: number; //纯V币价格
uiPureCashPrice?: number; //纯现金价格
uiOriPrice?: number; //原价
iQuantity?: number; //库存
iSaleNum?: number; //销量
strImgUrl?: string; //图片
mapProp2Val?: {
      [prop: string]: string
    }; //SKU属性，如：2：白色；4：XL，表示颜色：白色且尺寸：XL
uiBuyLimit?: number; //限购数量
iRealQuantity?: number; //总库存
strSkuId?: string; //SKU ID
strRemark?: string; //SKU备注信息
bFreezeQuan?: boolean; //是否可修改库存
strOuterId?: string; //第三方iD编码
iPresaleQuan?: number; //预售库存，写入时为增量，读出时为全量
iLockQuan?: number; //锁定库存
iLockHold?: number; //锁定预扣
strSkuCus?: string; //定制信息，json串,{"strDesign":"123"}
vecPackage?: STSkuPackage[]; //套餐内SKU
      }
      

      declare enum ProductStatus {
        E_STATUS_WAIT_COMMIT = 0, //待提交
E_STATUS_WAIT_CHECK = 1, //待审核
E_STATUS_CHECK_OK = 2, //审核通过
E_STATUS_CHECK_FAIL = 3, //审核不通过
E_STATUS_ON_SALE = 4, //已上架
E_STATUS_OFF_SALE = 5, //已下架
E_STATUS_DELETE = 6, //已删除
      }
      

      declare enum enumProductOpType {
        E_PROUDCT_OP_PUBLISH = 1, //发布(失效）
E_PRODUCT_OP_COMMIT = 2, //提交（失效）	
E_PRODUCT_OP_RECALL = 3, //撤回
E_PRODUCT_OP_APPROVE = 4, //审核通过
E_PRODUCT_OP_REJECT = 5, //审核不通过
E_PRODUCT_OP_ONSALE = 6, //上架
E_PRODUCT_OP_OFFSALE = 7, //下架
E_PRODUCT_OP_EDIT = 8, //编辑（这里只用于商品列表处的显示，不用做实际的操作码）
E_PRODUCT_OP_DELETE = 9, //删除
      }
      

      declare enum emOnSaleType {
        E_ONSALE_AT_ONECE = 0, 
E_ONSALE_BY_HAND = 1, 
E_ONSALE_ON_TIME = 2, 
      }
      

      declare enum emSaleType {
        E_SALE_TYPE_NORMAL = 0, 
E_SALE_TYPE_PRESALE = 1, 
      }
      

      declare enum emAddSellerType {
        E_NORMAL_SELLER = 0, 
E_OWN_SELLER = 1, 
      }
      

      interface STCatIpInfo {
        strPid?: string; //一级类目ID
strId?: string; //二级类目ID
strPriName?: string; 
strName?: string; 
      }
      

      interface STDisInfo {
        bIsSelect?: boolean; //是否勾选
uiVCoin?: number; //V币折扣
uiCash?: number; //现金折扣
strId?: string; //关联ID
strName?: string; //折扣标签
      }
      

      declare enum emCredictType {
        E_DEDUCT_NULL = 0, 
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
      

      declare enum emProdCouponRelateStatus {
        E_RELATE_STATUS_ON = 0, 
E_RELATE_STATUS_OFF = 1, 
      }
      

      declare enum emPresaleType {
        E_PRESALE_TYPE_FULL = 0, //全款预售
E_PRESALE_TYPE_DEPOSIT = 1, //定金预售
E_PRESALE_TYPE_CROWD_FUNDING = 2, //众筹
      }
      
// iCrowdStartTime   众筹开始时间， iCrowdEndTime  众筹结束时间   uiTargetNum   众筹目标件数
      interface STProductWInfo {
        strProductId?: string; //ID,创建商品时商品ID填0 
strTitle?: string; //名字
strCatId?: string; //实际类别
strViewCatId?: string; //外显类别
vecImgs?: string[]; //商品图片列表
uiExpressFee?: number; //快递费用
bIsExpressFree?: boolean; //是否免邮
iOnSaleTime?: number; //上架时间
iOffSaleTime?: number; //下架时间
mapId2Props?: {
      [prop: string]: STPropWInfo
    }; //商品属性和值，包括SKU的属性。
vecSkus?: STSkuWInfo[]; //商品的SKU列表
iStatus?: number; //防止修改商品期间商品状态发生变化
strContent?: string; //商品的文字描述
vecImgDesc?: string[]; //商品的图片描述
vecLabel?: string[]; //二期新增字段s//商品标签
vecIpList?: string[]; //IP列表
iOnSaleType?: number; //上下架方式，0 立刻上架 1 手动 2定时
iSaleType?: number; //销售方式，0 普通 1预售
iPreSaleTime?: number; //预计发货时间，预售用
strMattingImg?: string; //产品抠图
iSellerType?: number; //卖家类型，0 普通 1 自营
strSeller?: string; //卖家ID
iExpTemId?: number; //邮费模板ID
iRePolicyId?: number; //退换货策略ID
bHasDiscount?: boolean; //是否有优惠
uiVCoin?: number; //二期字段，已废弃
uiCash?: number; //二期字段，已废弃
strPriCat?: string; //真实类目信息
vecIpData?: STCatIpInfo[]; //IP类目信息
mapExtData?: {
      [prop: string]: string
    }; //三期字段s//扩展信息
iSaleStartTime?: number; //上架后，真正开始销售的时间
stVCoinDiscount?: STDisInfo; //V币折扣信息列表
stVipDiscount?: STDisInfo; //五期字段s//VIP 折扣
vecActDiscount?: STDisInfo[]; //活动价
vecPriDiscount?: STDisInfo[]; //身份价
iRealQuantity?: number; //总库存
strShortTitle?: string; //商品简称
vecSearchWord?: string[]; //商品搜索关键词
uiWeight?: number; //重量,单位（g）
uiLength?: number; //长度，单位（mm）
uiWidth?: number; //宽度，单位（mm）
uiHeight?: number; //高度，单位（mm）
uiPresaleDiscount?: number; //预售折扣
iQuantity?: number; //商品总可卖库存
iOwner?: number; //商品负责人ID
strScript?: string; //角标
iTotalQuan?: number; //总剩余库存（普通 + 锁定)
iLockQuan?: number; //锁定总库存
uiTotalSale?: number; //总销量（普通+锁定）
uiLockSale?: number; //锁定总销量
iLockHold?: number; //锁定预扣库存
strStorehouse?: string; //仓储
strJdCategory?: string; //京东类目ID
strNewScript?: string; //角标配置，json格式，参考VideoMallComm.jce里的定义，该字段使用后，56 字段废弃
stCredict?: STCredictInfo; //积分配置
strCredictTpl?: string; //积分赠送模板
iCouponRelate?: number; //是否关联优惠券，0 关联， 1 不关联 
strProdCus?: string; //商品定制信息，json串,{"bCustom":false}
      }
      

      declare enum ModifyType {
        E_ADD_PRODUCT = 1, //添加商品
E_RECOMMIT_PRODUCT = 2, //重新提交商品
E_UPDATE_PRODUCT = 3, //更新商品
      }
      
// 商品信息修改（包括添加和更改）
      interface STModifyProductReq {
        stInfo?: STProductWInfo; 
iLastStatus?: number; 
iOpType?: number; 
      }
      

      interface STModifyProductRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strProductId?: string; //添加商品时，返回的商品ID
      }
      
// cmd 0x1ef5
      interface STOperateProductReq {
        iOperateType?: number; //操作类型
strProductId?: string; //商品ID
iLastModifyTime?: number; //最后修改时间，用于验证商品是否已修改
      }
      

      interface STOperateProductRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iStatus?: number; 
vecOp?: number[]; 
iModifyTime?: number; 
      }
      
// 修改SKU供货价
      interface STModifySupplyPriceReq {
        uiPrice?: number; 
vecSku?: string[]; 
      }
      

      interface STModifySupplyPriceRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      

      declare enum EMModifyQuanType {
        EM_MODIFY_SOLD = 0, //直接修改可卖
EM_MODIFY_INC = 1, //增量修改
      }
      

      interface STStockInfo {
        uiSupplyPrice?: number; 
      }
      
// 修改商品库存
      interface STModifyQuantityReq {
        strProductId?: string; 
mapSku2Num?: {
      [prop: string]: number
    }; 
iType?: number; 
mapSkuStock?: {
      [prop: string]: STStockInfo
    }; 
strStockId?: string; 
      }
      

      interface STModifyQuantityRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      

      interface STSkuListInfo {
        strProductId?: string; 
strSkuId?: string; 
strImgUrl?: string; 
mapProp?: {
      [prop: string]: string
    }; 
iQuantity?: number; 
iSale?: number; //三期字段
uiSupplyPrice?: number; //供货价
iRealQuantity?: number; //总库存
bFreezeQuan?: boolean; //是否可修改库存
strSerialNum?: string; //SKU 序列号
iTotalQuan?: number; //总剩余库存（普通 + 锁定)
iLockQuan?: number; //锁定总库存
uiTotalSale?: number; //总销量（普通+锁定）
uiLockSale?: number; //锁定总销量
iLockHold?: number; //锁定预扣库存
uiPayNum?: number; //历史销量
      }
      

      interface STProdListActPriceInfo {
        strActId?: string; 
strActName?: string; //活动名
strSkuId?: string; //SKU ID
uiActPrice?: number; //活动价
      }
      

      interface STProductListInfo {
        strProductId?: string; //商品ID
strTitle?: string; //商品名
strImgUrl?: string; //图片
iModifyTime?: number; 
iStatus?: number; 
iQuantity?: number; //可卖库存
iSale?: number; 
uiVCoinPrice?: number; //V币抵扣数
uiCashPrice?: number; //V币抵扣现金数
uiOriPrice?: number; //原价
uiPureVCoinPrice?: number; 
uiPureCashPrice?: number; //二期新增字段
vecSku?: STSkuListInfo[]; //SKU信息
vecOp?: number[]; //可执行操作列表
iOffSaleTime?: number; //下架时间
iSaleType?: number; //销售模式，0 正常 1预售
stCatData?: STCatIpInfo; //真实类目信息
vecIpData?: STCatIpInfo[]; //IP类目信息
mapExtData?: {
      [prop: string]: string
    }; //扩展信息
iRealQuantity?: number; //总库存
iOnSaleTime?: number; //上架时间
strSeller?: string; //供应商
strSupplier?: string; //供货商
uiVipPrice?: number; //VIP价格
uiFreshPrice?: number; //新人价格
uiPresalePrice?: number; //预售价格
iDeliveryTime?: number; //预计发货时间
iSaleStartTime?: number; //预售开始时间
iOwner?: number; //商品负责人
iFirstOnSaleTime?: number; //初始上架时间
vecProdActPrice?: STProdListActPriceInfo[]; //活动价信息
strOwner?: string; //负责人名
iTotalQuan?: number; //总剩余库存（普通 + 锁定)
iLockQuan?: number; //锁定总库存
uiTotalSale?: number; //总销量（普通+锁定）
uiLockSale?: number; //锁定总销量
iLockHold?: number; //锁定预扣库存
uiPayNum?: number; 
strProdCus?: string; //商品定制信息，json串
      }
      

      declare enum EMTabType {
        E_TAB_OFL = 0, //非线上商品tab
E_TAB_OL = 1, //线上商品tab
      }
      
// 按商品状态获取商品，管理台使用
      interface STGetProductListReq {
        mapCondition?: {
      [prop: string]: string
    }; //查询的条件
iPageSize?: number; //一页显示的商品数目
strContext?: string; //
iTab?: number; //对应EMTabType
      }
      

      interface STGetProductListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecProduct?: STProductListInfo[]; 
strContext?: string; 
      }
      

      declare enum emHotMgrType {
        E_ADD_TO_HOT = 1, //加入精选
E_DEL_FROM_HOT = 2, //移出精选
      }
      
// 精选管理，暂时未使用
      interface STHotMgrReq {
        iType?: number; //1、加入精选  2、移出精选
vecProductIds?: string[]; 
      }
      

      interface STHotMgrRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      

      interface STLabelInfo {
        strLabelId?: string; 
strLabelName?: string; 
strLabelDesc?: string; 
iLabelType?: number; 
      }
      

      interface STValRInfo {
        strId?: string; //属性值ID
strName?: string; //属性值中文
      }
      

      interface STCatPropRInfo {
        strPropId?: string; //属性ID，如：4
strPropName?: string; //属性名字，如：尺寸
iInputType?: number; //输入类型
iDataType?: number; //数据类型，即改属性对应的属性值的真实数据类型，
bIsSku?: boolean; //是否为SKU属性	
bIsRequire?: boolean; //是否为必填属性
iOrder?: number; //属性展示的顺序
iStatus?: number; //属性状态
uiMaxLen?: number; //可填的最大长度（暂时不用）
vecROnlyStatus?: number[]; //只读状态列表（暂时不用）
bIsReadOnly?: boolean; //是否只读（暂时不用）
vecOptions?: STValRInfo[]; //可选属性值列表，只有当输入类型为枚举时才有
      }
      
// 获取发布商品所需的信息
      interface STGetPubTemplateReq {
        strCatId?: string; //发布商品，必须传入catid,productId为“0”
strProductId?: string; //编辑商品，必须传入productId，此时catId会被忽略
      }
      

      interface STGetPubTemplateRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecPropField?: STCatPropRInfo[]; 
bHasInfo?: boolean; 
stInfo?: STProductWInfo; 
vecLabel?: STLabelInfo[]; //二期新增字段
vecExpTemp?: STLabelInfo[]; 
vecRePolicy?: STLabelInfo[]; 
vecOptLabel?: STLabelInfo[]; //从vecLabel中取中间几个填入
vecPriDiscount?: STDisInfo[]; //身份特权列表
      }
      

      declare enum emSellerType {
        E_COR_SELLER = 1, //合作供应商
E_SUPPLIER = 2, //	供货商
E_ADMIN_SELLER = 3, //运营供应商
      }
      

      interface STSellerInfo {
        strSellerId?: string; //商家ID
strName?: string; //商家名字
strOrcId?: string; //结算信息
strOrcName?: string; //结算信息
strCltId?: string; //结算信息
strCltName?: string; //结算信息
vecUins?: number[]; //二期新增字段s//商家关联的QQ号列表
iType?: number; 
strPerson?: string; //商家服务信息，json ,key:  phone(服务电话) time(服务时间) service_qq(服务QQ） mail(邮件) address(联系地址）
strExtInfo?: string; //json，key: desc(运营范围简介）
      }
      
// 0x1f02 添加或修改商家信息
      interface STModifySellerReq {
        stInfo?: STSellerInfo; 
      }
      

      interface STModifySellerRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strSellerId?: string; //添加商家时返回的商家ID
      }
      
//  读取商家信息
      interface STGetSellerReq {
        vecIds?: string[]; 
      }
      

      interface STGetSellerRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapId2Info?: {
      [prop: string]: STSellerInfo
    }; 
      }
      

      interface STGetSellerByQQReq {
        ddwUin?: number; 
      }
      

      interface STGetSellerByQQRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stInfo?: STSellerInfo; 
      }
      
// 二期新增接口，用于获取列表页中展示的商家信息
      interface STGetSellerListReq {
        iPage?: number; 
iPageSize?: number; //PageSize == 0表示不分页，用于获取简单的商家列表，只包含ID和名字
mapCondition?: {
      [prop: string]: string
    }; 
      }
      

      interface STGetSellerListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecSeller?: STSellerInfo[]; 
iTotal?: number; 
      }
      

      declare enum emCatType {
        EM_CAT_TYPE_REAL = 1, //真实类别
EM_CAT_TYPE_VIEW = 2, //外显类别
      }
      

      declare enum emCatStatus {
        EM_CAT_STATUS_DELETE = 0, //类别已删除
EM_CAT_STATUS_NORMAL = 1, //类别正常
      }
      
// 商品类别信息，写商品类别时使用
      interface STCatInfo {
        strCatId?: string; //类别ID
iType?: number; //类别类型
strName?: string; //类别名字
dfProfitRatio?: number; //费率
iStatus?: number; //状态
vecProp?: STCatPropRInfo[]; 
      }
      
// 0x1f04 添加、修改分类
      interface STModifyCatReq {
        stInfo?: STCatInfo; 
      }
      

      interface STModifyCatRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strCatId?: string; 
      }
      
// 0x1f05
      interface STGetCatReq {
        vecCatId?: string[]; //0 表示取所有类别
      }
      

      interface STGetCatRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapCatInfo?: {
      [prop: string]: STCatInfo
    }; 
      }
      

      declare enum emDataType {
        EM_DATA_TYPE_INT = 1, //整型
EM_DATA_TYPE_STRING = 2, //字符串
EM_DATA_TYPE_DOUBLE = 3, //浮点
      }
      

      interface STGetCatPropReq {
        strCatId?: string; 
      }
      

      interface STGetCatPropRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecProp?: STCatPropRInfo[]; 
      }
      
// 增加或者修改类别所包含的属性信息
      interface STCatPropWInfo {
        strPropId?: string; 
iInputType?: number; 
iDataType?: number; //实际数据类型
uiMaxLen?: number; 
bIsSku?: boolean; 
bIsRequire?: boolean; 
iOrder?: number; 
vecROnlyStatus?: number[]; //未使用
iStatus?: number; 
vecValues?: string[]; //该属性的可选属性值列表，只有在可枚举情况下才有这一项                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
      }
      
// 0x1f01 修改或添加类别所有的属性相关信息
      interface STModifyCatPropReq {
        strCatId?: string; 
mapId2Prop?: {
      [prop: string]: STCatPropWInfo
    }; 
      }
      

      interface STModifyCatPropRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      

      declare enum emDictType {
        E_ID_TYPE_PROP = 1, 
E_ID_TYPE_VAL = 2, 
      }
      
// 读写字典表时使用
      interface STDictInfo {
        strId?: string; //ID 
strName?: string; //中文含义
strEnName?: string; //英文名
iType?: number; //1、属性，2属性值
iStatus?: number; //0、废弃 1、正常
      }
      
// 0x1ef9,添加或者修改字典表，包括属性ID和属性值ID
      interface STModifyDictReq {
        vecDicts?: STDictInfo[]; 
      }
      

      interface STModifyDictRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      

      interface STGetDictListReq {
        iType?: number; 
      }
      

      interface STGetDictListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecDict?: STDictInfo[]; 
      }
      
// 0x1f09
      interface STSaveDraftReq {
        strSellerId?: string; //商家ID
strJsonDraft?: string; //草稿内容
      }
      

      interface STSaveDraftRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strDraftId?: string; 
      }
      
// 0x1f0a
      interface STGetDraftReq {
        strSellerId?: string; 
      }
      

      interface STGetDraftRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strJsonDraft?: string; 
      }
      
// 根据草稿ID查草稿
      interface STGetDraftByIdReq {
        strDraftId?: string; 
      }
      

      interface STGetDraftByIdRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strDraft?: string; 
      }
      
// 查询用户的角色类型, 0xf2e7
      interface STGetRoleReq {
        iType?: number; //暂时不用，请求用户的QQ号从登录态获取
strId?: string; //暂时不用
      }
      

      interface STGetRoleRsp {
        iErrCode?: number; 
strErrMsg?: string; 
uiRole?: number; //角色类型，0x01卖家，0x02运营，可能有多种身份
strExtInfo?: string; //角色附带的额外信息，比如商家的商家ID
      }
      

      interface STSkuWarnData {
        strSkuId?: string; 
strProdId?: string; 
strProp?: string; 
strTitle?: string; 
strSeller?: string; 
iQuantity?: number; 
      }
      
// 提醒的数据
      interface STGetWarnSkuReq {
        vecSku?: string[]; 
      }
      

      interface STGetWarnSkuRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapSkuData?: {
      [prop: string]: STSkuWarnData
    }; 
      }
      

      interface STGetProdCheckCntReq {
        iTime?: number; 
strSeller?: string; 
      }
      

      interface STGetProdCheckCntRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iWaitCheckCnt?: number; 
      }
      

      interface STCatCommInfo {
        strPriId?: string; 
strPriName?: string; 
strSecId?: string; 
strSecName?: string; 
      }
      
// 进货管理查SKU信息的接口
      interface STSkuStockInfo {
        strSkuId?: string; 
strProdId?: string; 
strProdTiTle?: string; 
mapProp?: {
      [prop: string]: string
    }; 
strSerialNum?: string; 
stCat?: STCatCommInfo; 
vecIp?: STCatCommInfo[]; 
strOuterId?: string; 
iTotalQuan?: number; 
strStore?: string; 
strSeller?: string; 
      }
      

      interface STGetSkuStockInfoReq {
        vecSkuId?: string[]; 
      }
      

      interface STGetSkuStockInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapSkuInfo?: {
      [prop: string]: STSkuStockInfo
    }; 
      }
      
// 获取预售发货时间的商品数，按照商家维度返回
      interface STGetPresaleProdCntReq {
        iType?: number; 
      }
      

      interface STGetPresaleProdCntRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapSellerProdCnt?: {
      [prop: string]: number
    }; 
      }
      

      interface STStoreInfo {
        strStoreId?: string; 
strStoreName?: string; 
strSellerId?: string; 
      }
      

      interface STGetStoreListReq {
        iType?: number; //0x00 全部
strSellerId?: string; //卖家ID
      }
      

      interface STGetStoreListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecStore?: STStoreInfo[]; 
      }
      

      declare enum emSkuOpType {
        EM_SKU_HIDE = 1, //SKU隐藏
EM_SKU_SHOW = 2, //sku显示
      }
      
// SKU操作
      interface STSkuOpReq {
        iType?: number; 
strSkuId?: string; 
strProdId?: string; 
      }
      

      interface STSkuOpRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      

      declare enum emProdCheckRes {
        E_PROD_CHECK_INVALID = 0, 
E_PROD_CHECK_VALID = 1, 
      }
      

      interface STCheckProdReq {
        vecProdId?: string[]; 
      }
      

      interface STCheckProdRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapProdRes?: {
      [prop: string]: number
    }; 
      }
      

      declare enum emCouponRelateType {
        E_RELATE_TYPE_ON = 0, 
E_RELATE_TYPE_OFF = 1, 
      }
      

      interface STRelateCouponReq {
        iType?: number; 
strProdId?: string; 
      }
      

      interface STRelateCouponRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
  