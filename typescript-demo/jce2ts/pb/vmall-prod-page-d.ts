
  // 以下为C端使用协议，商品读模块
  
      declare enum emVMallReadCmd {
        EM_GET_PROD_PAGE = 0xfc03, 
EM_GET_DRAFT_PAGE = 0xfdbe, //读草稿页数据，协议一样，命令字不一样
      }
      
// 商详页评论数据
      interface STProdCommentInfo {
        vecMsgInfo?: STMsgInfo[]; //主贴列表
mapUserInfo?: {
      [prop: number]: STUserInfo
    }; //涉及到的用户详情
mapMsgInfo?: {
      [prop: number]: STMsgInfo[]
    }; //商家回复评论列表
stCmtInfo?: STProductCmtInfo; //商品评论计数信息
      }
      
// 商品预约状态信息
      interface STProdReserveInfo {
        bReserve?: boolean; //默认未预约
iDepositPay?: number; //定金支付次数
      }
      
// 商品优惠券信息
      interface STProdCouponInfo {
        vecCoupon?: STCouponBatchInfo[]; //商品参与的优惠券
mapStatus?: {
      [prop: string]: number
    }; //是否可领取: 0 可以领取    1 不可领取
      }
      

      interface STProdPageInfo {
        stProd?: STProductInfo; 
vecIp?: STSecIpData[]; //商品所属IP数据
vecAct?: STActInfo[]; //商品参与的活动列表
stCoupon?: STProdCouponInfo; 
vecIpProd?: STProductBaseInfo[]; //同一个IP的其它商品
stComment?: STProdCommentInfo; //商品的评论信息
stReserve?: STProdReserveInfo; 
iCacheTime?: number; //缓存时间，前端不关心
      }
      

      interface STGetProdPageReq {
        strProdId?: string; 
strActId?: string; 
strChannelId?: string; 
      }
      

      interface STGetProdPageRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stPage?: STProdPageInfo; 
      }
      

      interface STGetDraftPageReq {
        strDraftId?: string; 
      }
      

      interface STGetDraftPageRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stPage?: STProdPageInfo; 
      }
      
  