
  // 测试环境：10.49.107.200:5574
// 913345:65536
// 正式环境：10.223.13.76:5574
// 913345:65537
  //  包命令类型
      declare enum emUserPackgeType {
        EM_ADD_TROLLEY_REQ = 0xf256, // 新增购物车
EM_DEL_TROLLEY_REQ = 0xf257, // 删除购物车
EM_GET_TROLLEY_REQ = 0xf258, // 查询购物车
EM_MOD_TROLLEY_REQ = 0xf259, // 修改购物车
EM_GET_TROLLEY_NUM_REQ = 0xf44c, // 获取购物车数量
EM_CHOSEN_TROLLEY_REQ = 0xf35f, // 收藏相关s// 选中与取消选中购物车
ISCOLL_REQ = 0xf25a, 
ADDCOLL_REQ = 0xf25b, 
DELCOLL_REQ = 0xf25c, 
      }
      

      declare enum emErrCode {
        RT_GET_SELLER_ERROR = 2003, // 获取商家失败
RT_GET_SELLER_SKU_ERROR = 2004, // 获取商家下SKU失败
RT_GET_SKU_INFO_ERROR = 2005, // 获取SKU信息失败
RT_GET_PROD_INFO_ERROR = 2006, // 获取商品信息失败
RT_GET_SKU_LOCAL_ERROR = 2007, // 获取SKU本地信息失败
RT_GET_SKU_ERROR = 2008, // 获取购物车SKUID失败 
      }
      
//  特权类型 
      declare enum emPrivilegeType {
        EM_NONE_PRIVILEGE_TYPE = 0, // 未选择特权
EM_VIP_PRIVILEGE_TYPE = 1, // VIP会员
EM_DIKI_PRIVELEGE_TYPE = 2, // doki特权
EM_IWAN_PRIVILEGE_TYPE = 3, // 爱玩特权
      }
      
//  购物车本地信息
      interface STTrolleySkuLocal {
        strSkuId?: string; // 库存ID
uiSkuNum?: number; // 数量
ePrivilegeType?: emPrivilegeType; // 所选特权类型 
strCreateTime?: string; // 创建（最新添加）时间
bChosen?: boolean; // 是否选中
strChannelId?: string; // 渠道ID
      }
      
//  库存价格的V币抵扣
      interface STVBDiscount {
        ulVBNum?: number; // V币数量
ulRMBNum?: number; // 抵扣多少元
      }
      
//  购物车的商品信息
      interface STTrolleyProduct {
        strProductId?: string; // 商品ID
strProductName?: string; // 商品名
strCategoryId?: string; // 商品类别
strSellerId?: string; // 商家ID
uiPostage?: number; // 邮费
vecProductSkuInfo?: STProductSkuInfo[]; // SKU列表
vecPrivilegeType?: number[]; // 优惠列表
bValid?: boolean; // 是否失效
iAllQuantity?: number; // 总库存 
vecImgUrls?: string[]; // 图片集
vecRealPriceTag?: STPriceTag[]; //最终价格标签
      }
      
//  购物车的商家信息
      interface STTrolleySeller {
        strSellerId?: string; // 商家ID
strSellerName?: string; // 商家名
uiPostFree?: number; // 满多少包邮
      }
      
//  购物车单元(单SKU)
      interface STTrolleyUnit {
        stTrolleySkuLocal?: STTrolleySkuLocal; 
stProductSkuInfo?: STProductSkuInfo; 
stTrolleyProduct?: STTrolleyProduct; 
      }
      
//  购物车(单商家)
      interface STTrolley {
        stTrolleySeller?: STTrolleySeller; // 商家信息
vecTrolleyUnit?: STTrolleyUnit[]; // 同一商家的商品数组
      }
      
//  新增购物车请求及回应包
      interface STAddTrolleyReq {
        stTrolleySkuLocal?: STTrolleySkuLocal; // 新增的购物车本地信息
      }
      

      interface STAddTrolleyRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iTrolleyNum?: number; 
      }
      
//  删除购物车请求包及回应包
      interface STDelTrolleyReq {
        vecSkuId?: string[]; // 删除的库存ID列表
strChannleId?: string; // 渠道ID
      }
      

      interface STDelTrolleyRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
//  查询购物车请求及回应包
      interface STGetTrolleyReq {
        iType?: number; // 1:显示全部；2：翻页
iReqNum?: number; // 一页显示多少
strPageContext?: string; // 上下文，例如: last_seller_index=2
strChannleId?: string; // 渠道ID
      }
      

      interface STGetTrolleyRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecTrolley?: STTrolley[]; // 返回的购物车信息
strPageContext?: string; // 上下文
bHasNext?: boolean; // 是否还有下一页
      }
      
//  修改购物车请求及回应包
      interface STModTrolleyReq {
        strOldSkuId?: string; 
stTrolleySkuLocal?: STTrolleySkuLocal; // 更新后的库存本地信息
strChannleId?: string; // 渠道ID
      }
      

      interface STModTrolleyRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
//  选中与取消选中请求及回应包
      interface STChosenTrolleyReq {
        strSkuId?: string; // 库存ID
      }
      

      interface STChosenTrolleyRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
//  获取购物车数量请求和回应包
      interface STGetTrolleyNumReq {
        iType?: number; // 1: 全部；2：有效
strChannleId?: string; // 渠道ID
      }
      

      interface STGetTrolleyNumRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iTrolleyNum?: number; 
      }
      
  