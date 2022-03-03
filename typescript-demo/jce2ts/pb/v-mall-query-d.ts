
  
  // 根据给定的条件进行商品搜索
      interface STQueryReq {
        strKeyWord?: string; //搜索关键字
strCatId?: string; 
bIsHot?: boolean; 
mapCondition?: {
      [prop: string]: string[]
    }; //暂时不用，用于对分类商品的进一步筛选,这里填属性和属性值
iPageSize?: number; 
strContext?: string; 
      }
      

      interface STQueryRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecProductIds?: string[]; 
strContext?: string; 
      }
      
// 获取我能兑换的商品列表
      interface STGetExchangeReq {
        iVCoin?: number; //用户V币数
iType?: number; //1、纯V币 2、v币+现金 3、纯现金 
iPageSize?: number; 
strContext?: string; 
      }
      

      interface STGetExchangeRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecProductIds?: string[]; 
strContext?: string; //5 optional bool bHasNextPage;
      }
      
// 获取排序列表
      declare enum emListType {
        E_ALL_PRODUCT = 1, //获取所有商品的排序
E_PRI_CAT = 2, //获取一级真实类目下商品排序
E_PRI_IP = 3, //获取一级IP下二级IP的排序
E_SEC_IP = 4, //获取二级IP类目下商品排序
E_ALL_IP = 5, //获取所有二级IP的排序
      }
      

      interface STGetSaleListReq {
        iType?: number; 
strKey?: string; //类目ID
iPageSize?: number; 
strContext?: string; 
      }
      

      interface STGetSaleListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecId?: string[]; 
strContext?: string; 
bHasNextPage?: boolean; 
      }
      
  