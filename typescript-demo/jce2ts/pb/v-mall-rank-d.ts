
  
  // 测试环境:
// 10.49.107.200:24486
// 正式环境：913345:851968
      declare enum emServiceCmd {
        CMD_RANK_LIST = 0xfb94, // 查询排行榜
CMD_PERSONAL_RANK = 0xfb95, // 查询个人排行信息
      }
      

      declare enum emErrCode {
        RT_GET_LIST_ERROR = 2001, 
RT_GET_FNO_LIST_ERROR = 2002, 
RT_RERANK_ERROR = 2003, 
RT_RERANK_FNO_ERROR = 2004, 
RT_GET_RANK_NO_ERROR = 2005, 
RT_GET_RANK_NO_FNO_ERROR = 2006, 
RT_RERANK_BY_HAS_QUAN_ERROR = 2007, 
RT_SET_USER_BUY_TOT_ERROR = 2008, 
RT_SET_USER_BUY_CYC_ERROR = 2009, 
RT_SET_PROD_SELL_FNO_ERROR = 2010, 
RT_SET_CAT_PROD_SELL_FNO_ERROR = 2011, 
RT_SET_IP_PROD_SELL_FNO_ERROR = 2012, 
RT_GET_PROD_BASE_INFO_ERROR = 2013, 
RT_GET_USER_INFO_ERROR = 2014, 
RT_GET_RANK_INFO_ERROR = 2015, 
RT_QUERY_READ_ERROR = 2016, 
RT_ADD_SEARCH_ERROR = 2017, 
      }
      

      declare enum emKeyType {
        KT_USER = 101, // 用户
KT_SKU = 102, // SKU
KT_PROD = 103, // 商品
KT_IP = 104, // 二级IP类目
KT_CAT = 105, // 一级真实类目 
KT_FST_IP = 106, // 一级IP
KT_SEC_CAT = 107, // 二级真实类目
KT_CHANNEL = 108, // 渠道
      }
      

      declare enum emRankType {
        RT_PAY_NUM = 201, // 支付量
RT_SALE = 202, // 销量
RT_MONEY = 203, // 支付金额
RT_CMT_NUM = 204, // 评论量
RT_ADDTRO = 205, // 添加至购物车(收藏)量
      }
      

      interface STRankInfo {
        strId?: string; 
iRankNo?: number; // 排名
iRankValue?: number; // 数值
      }
      

      declare enum emFromNowOnType {
        FNO_SEVEN = 21, // 近7天
FNO_THIRTY = 22, // 近1月
FNO_ONE = 23, // 当日
      }
      

      declare enum emCycleType {
        CT_DAY = 1, 
CT_WEEK = 2, 
CT_MONTH = 3, 
      }
      

      declare enum emMultiRankTypeRule {
        MRTR_ADD = 11, // 各依据确定自己的结果集，叠加。各排序依据是可累加的，如商品销量和收藏量，按销量+收藏量从大到小排
MRTR_PRI_ASC = 12, // 依据一确定结果集，优先级递增。首先按照销量确定结果集，其次按照上架时间排序，商家时间相同时按照有库存、无库存排序，上架时间相同且同时有库存时按照销量排序
MRTR_PRI_DESC = 13, // 依据一确定结果集，优先级递减。商品按照销量、有无库存、上架时间排序，首先根据销量确定结果集，然后销量相同的按照有库存、无库存排序，销量相同且同时有库存时根据上架时间排序  
      }
      
//  通用的获取排行榜协议
      interface STRankListReq {
        iBGType?: number; // 限定范围，取自emKeyType
strBGId?: string; 
iKeyType?: number; // 待排序元素，取自emKeyType
vecRankType?: number[]; // 排序依据，可以有多个，依据必须可被emFromNowOnType和emCycleType修饰，取自emRankType
iPageFlag?: number; // =1:页码翻页 =2:上下文翻页
iReqNum?: number; 
iCurPage?: number; 
strPageCtx?: string; 
mapRank2Fno?: {
      [prop: number]: number
    }; // 近7天，近1月
mapRank2Cycle?: {
      [prop: number]: number
    }; // 小时，天，周
iMrtrType?: number; // vecRankType为多个时的处理规则，取自emMultiRankTypeRule
      }
      

      interface STUserInfo {
        strUserId?: string; 
strNick?: string; 
strHead?: string; 
      }
      

      interface STRankListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecRankInfo?: STRankInfo[]; 
iTotNum?: number; 
strPageCtx?: string; 
bHasNext?: boolean; 
mapUserId2Info?: {
      [prop: string]: STUserInfo
    }; 
      }
      
//  个人排名情况
      interface STPersonalRankReq {
        iBGType?: number; 
strBGId?: string; 
vecRankType?: number[]; 
iFnoType?: number; 
iCycType?: number; 
      }
      

      interface STPersonalRankRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stRankInfo?: STRankInfo; 
stUserInfo?: STUserInfo; 
      }
      
//  写排名信息
      interface STWriteRankReq {
        iWrtType?: number; // =1:新增或修改 =2:删除
iBGType?: number; 
strBGId?: string; 
iKeyType?: number; 
iRankType?: number; 
iFnoType?: number; 
iCycType?: number; 
stRankInfo?: STRankInfo; 
      }
      

      interface STWriteRankRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
  