
  // *
// *
// L5
// *
// test：599873:3080192
// *
// online:
// 897537:196608
  
      declare enum emValuationCmd {
        EM_VALUATION_CMD_QUERY_SKU_PRICE = 0xf40d, //查询单个sku价格
EM_VALUATION_CMD_QUERY_RECOMMEND_PRICE = 0xf36b, //查询推荐支付价格
EM_VALUATION_CMD_QUERY_PLACE_ORDER_PRICE = 0xf36c, //查询下单价格
EM_VALUATION_CMD_QUERY_REFUND_PRICE = 0xf62d, //查询退款价格
      }
      

      declare enum emValuationRetCode {
        EM_VALUATION_RETCODE_OK = 0, 
EM_VALUATION_RETCODE_VCOIN_NOT_ENOUGH = 2012, //V币余额不足
EM_VALUATION_RETCODE_VCOIN_LOCK_NOT_ENOUGH = 2015, //V币冻结导致余额不足
      }
      
// 计算购买商品价格
      interface STQueryPayPriceReq {
        vecGoodsInfo?: STGoodsInfo[]; //购买的商品信息
uiPayVCoin?: number; //支付的V币
stPerferential?: STPerferential; //使用的优惠
dwPostAreaId?: number; //邮寄地址ID
      }
      

      interface STQueryPayPriceRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stPayPriceInfo?: STPayPriceInfo; 
vecExpressOrderPriceInfo?: STExpressOrderPriceInfo[]; 
stUserPayProp?: STUserPayProp; //用户的支付属性
vecAllPreferentail?: STPerferential[]; //支持的所有优惠方式
vecResultPreferentail?: STPerferential[]; //计价使用的优惠方式
      }
      
// 配置的SKU价格信息
      interface STSkuConfPriceInfo {
        uiVCoinPrice?: number; //V币价格
uiVCoinDiscount?: number; //V币抵扣价格
uiOriPrice?: number; //原价
uiCashPrice?: number; //现金价格
vecDiscountInfo?: STDiscountInfo[]; //特权抵扣信息
vecActDiscountInfo?: STActDiscountInfo[]; //活动抵扣信息
uiPreSaleDiscount?: number; //预售优惠抵扣
      }
      

      interface STSkuSrcPriceInfo {
        strSkuId?: string; 
stSkuConfPrice?: STSkuConfPriceInfo; //商家配置的sku价格
      }
      

      interface STSkuResultPriceInfo {
        uiRealCashPrice?: number; //最终购买价格
vecDisPrivilege?: STPrivilegeInfo[]; //用于抵扣的特权
vecAllPrivilege?: STPrivilegeInfo[]; //计算后的活动抵扣信息s//4 optional vector<STActDiscountInfo> vecRetActDiscountInfo;	s//所有特权的列表
vecRealPriceTag?: STPriceTag[]; //最终购买价格标签
uiExpectPrice?: number; //期望价格
vecExpectPriceTag?: STPriceTag[]; //期望价格标签
uiSpreadPrice?: number; //推广价格
vecSpreadPriceTag?: STPriceTag[]; //推广价格标签
      }
      
// 查询商品购买价格
      interface STQuerySkuPriceReq {
        vecSkuSrcPriceInfo?: STSkuSrcPriceInfo[]; 
      }
      

      interface STQuerySkuPriceRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapSku2RetPriceInfo?: {
      [prop: string]: STSkuResultPriceInfo
    }; //skuid映射价格信息
      }
      
// 查询退款金额
      interface STQueryRefundPriceReq {
        strExpressOrderId?: string; 
strRefundOrder?: string; 
uiRefundSkuNum?: number; 
      }
      

      interface STRefundPriceInfo {
        uiRealRefundPrice?: number; //退还总金额
uiSKUPrice?: number; //退还商品金额
uiTransPrice?: number; //退还的运费
uiRefundVCoin?: number; //退还V币数
      }
      

      interface STQueryRefundPriceRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stRefundPriceInfo?: STRefundPriceInfo; 
      }
      
  