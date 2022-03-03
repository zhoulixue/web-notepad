
  
  
      interface STGoodsInfo {
        strCatId?: string; //商品类别id			
strProductId?: string; //商品id
strSKUId?: string; //商品SKUID
uiGoodsNum?: number; //商品数量
stPriceInfo?: STPriceInfo; //商品支付价格信息
iActType?: number; //活动类型，emActType
strActId?: string; //活动ID，比如线下、秒杀活动
strDesignData?: string; //用户定制信息（DesignKey等），json格式
      }
      
// 用户具有的支付属性
      interface STUserPayProp {
        lVCoinBalance?: number; //用户V币余额（包含锁定的V币）
lVCoinLockBalance?: number; //锁定V币额
      }
      
// 用户具有的支付属性
      interface UserPddGlodsProp {
        iPddGlodsBalance?: number; 
iPddGlodsLockBalance?: number; // 锁住的金币 是否需要
      }
      
  