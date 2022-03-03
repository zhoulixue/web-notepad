
  // @brief:商品评论模块
// auth：bluentzhao
// time：2017.10.13
  // @brief:机器环境信息
// 写协议
// TestIp:10.133.8.78
// TestPort:40962
// TestL5:301249:6946816
// OnlineL5:899265:131072
// 读协议
// TestIp:10.133.8.78
// TestPort:40963
// TestL5:301249:6881280
// OnlineL5:899265:65536
      declare enum ModuleCmd {
        CMD_READ_COMMENT_LIST = 0xf29b, 
CMD_READ_COMMENT_DETAIL = 0xf29c, 
CMD_READ_ORDERCMT_DETAIL = 0xf2a1, 
CMD_READ_ORDERCMT_INFO = 0xf29d, 
CMD_READ_UNCMTORDER_LIST = 0xf367, 
CMD_READ_PRODUCTCMT_INFO = 0xf3dc, //写协议
CMD_PUB_COMMENT = 0xf296, 
CMD_PUB_REPLY = 0xf297, 
CMD_PUB_LIKE = 0xf298, 
CMD_DELETE_MSG = 0xf299, 
CMD_REPORT_MSG = 0xf29a, 
      }
      

      declare enum ModuleErrCode {
        RT_SUC = 0, 
RT_ERR_PACKET = 1001, 
RT_INPUT_INVALID = 1002, 
RT_SERVER_ERROR = 1003, 
RT_ENCODE_RSP_PKG_FAIL = 1004, 
RT_READ_COMMENT_LIST_FAIL = 1005, 
RT_READ_COMMENT_DETAIL_FAIL = 1006, 
RT_PUB_COMMENT_FAIL = 1007, 
RT_PUB_REPLY_FAIL = 1008, 
RT_PUB_LIKE_FAIL = 1009, 
RT_DELETE_MSG_FAIL = 1010, 
RT_REPORT_MSG_FAIL = 1011, 
RT_LIMIT_PUB_COMMENT = 1012, 
RT_LIMIT_PUB_REPLY = 1013, 
RT_READ_ORDERCMT_INFO_FAIL = 1014, 
RT_READ_ORDERCMT_DETAIL_FAIL = 1015, 
RT_USER_ORDER_FAIL = 1016, 
RT_READ_UNCMTORDER_FAIL = 1017, 
RT_READ_PRODUCTCMT_INFO_FAIL = 1018, 
      }
      

      declare enum CmtType {
        ALL_CMT = 1, 
GOOD_CMT = 2, 
MIDDLE_CMT = 3, 
BAD_CMT = 4, 
PIC_CMT = 5, 
      }
      

      declare enum ScoreType {
        DESC_TYPE = 1, //描述评分类型
FLOW_TYPE = 2, //物流评分类型
SEVICE_TYPE = 3, //服务评分类型
      }
      
//  用户信息
      interface STUserInfo {
        ddwUserId?: number; //用户id
strNick?: string; //用户的昵称
strHead?: string; //用户的头像
0?: short; //性别,0:未定义,1:男,2:女
      }
      

      interface STImageInfo {
        strImageUrl?: string; //图片的URL链接
iWidth?: number; 
iHeight?: number; 
      }
      

      interface STScoreInfo {
        iType?: number; //评分type，对应ScoreType的取值
dwScore?: number; //分值
      }
      

      interface STBasicInfo {
        ddwMsgId?: number; //消息id 
ddwUserId?: number; //发表者id
strContent?: string; //主贴内容
vecImageList?: STImageInfo[]; //图片列表
dwPubTime?: number; //发表时间
dwMsgType?: number; //消息类型，1：原创；8：评论；9：赞；
dwStatus?: number; //消息状态，取值待定义，比如删除状态等。0，待审核；1，通过；2，删除
      }
      
// 评论消息详细信息
      interface STMsgInfo {
        stBasicInfo?: STBasicInfo; //消息id 
strProductId?: string; //消息所属商品ID
dwUpNum?: number; //点赞数
dwCommentNum?: number; //评论数
ddwParentMsgId?: number; //父节点消息id
ddwParentUserId?: number; //父节点用户id
ddwRootMsgId?: number; //根节点消息id
ddwRootUserId?: number; //根节点用户id
dwMsgFlags?: number; //消息标志位，0x01：商家发表；
dwOpFlags?: number; //操作标志位，0x01：加精；0x02：置顶；0x04：下沉
cFeedType?: number; //原创消息类型,0-普通feed;1：追评
vecMsgInfo?: STBasicInfo[]; //用户追加评论信息
vecScoreInfo?: STScoreInfo[]; //评分信息
strOrderId?: string; //消息所属商品订单id
cPubType?: number; //发表类型，0：非匿名发表；1：匿名发表
strSkuId?: string; //商品的skuid
strFlowOrderId?: string; //消息所属物流订单id
      }
      

      interface STPubCommentInfo {
        strOrderId?: string; //商品订单id
strProductId?: string; //商品id
strSkuId?: string; //商品SKU id
strContent?: string; //评论内容
vecImageInfo?: STImageInfo[]; 
vecScoreInfo?: STScoreInfo[]; 
cPubType?: number; //发表类型，0：非匿名发表；1：匿名发表
      }
      

      interface STProductCmtInfo {
        ddwAllCommentCnt?: number; 
ddwGoodCommentCnt?: number; 
ddwMiddleCommentCnt?: number; 
ddwBadCommentCnt?: number; 
ddwPicCommentCnt?: number; 
      }
      
//  读评论列表 请求与返回结构
      interface STReadCommentListReq {
        strProductId?: string; //商品id		
wPageFlags?: number; //翻页规则，0x01：从新到旧 ;0x02:从好评到差评；0x04:按页码翻页；
cCmtType?: number; //读取的评论类型,参考CmtType的枚举值
dwReqNum?: number; //翻页数量，选择按页码翻页时，前端传入一页请求的评论条数
dwCurPage?: number; //当前页码
strPageContext?: string; //请求上下文
      }
      

      interface STReadCommentListRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
vecMsgInfo?: STMsgInfo[]; //主贴列表
mapUserInfo?: {
      [prop: number]: STUserInfo
    }; //涉及到的用户详情
mapMsgInfo?: {
      [prop: number]: STMsgInfo[]
    }; //商家回复评论列表
bHasNextPage=false?: boolean; //是否还有数据标志位
strPageContext?: string; //请求上下文
dwPageNum?: number; //总的页数
stCmtInfo?: STProductCmtInfo; //商品评论计数信息
      }
      
//  读评论详情 请求与返回结构
      interface STReadCommentDetailReq {
        ddwMsgId?: number; //消息id		
wPageFlags?: number; //翻页规则，0x01：从新到旧 ;0x04:按页码翻页；
dwReqNum?: number; //翻页数量，选择按页码翻页时，前端传入一页请求的评论条数
dwCurPage?: number; //当前页码
strPageContext?: string; //请求上下文
      }
      

      interface STReadCommentDetailRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
stMsgInfo?: STMsgInfo; //主贴信息
vecMsgInfo?: STMsgInfo[]; //回复列表
mapUserInfo?: {
      [prop: number]: STUserInfo
    }; //涉及到的用户详情
mapParentMsgInfo?: {
      [prop: number]: STMsgInfo
    }; //涉及到的被评论消息的详情
bHasNextPage=false?: boolean; //是否还有数据标志位
strPageContext?: string; //请求上下文
dwPageNum?: number; //总的页数
      }
      
//  读订单相关评论详情 请求与返回结构
      interface STReadOrderCmtDetailReq {
        strOrderId?: string; //订单id		
wPageFlags?: number; //翻页规则，0x01：从新到旧
dwReqNum?: number; //翻页数量，选择按页码翻页时，前端传入一页请求的评论条数
strPageContext?: string; //请求上下文
      }
      

      interface STReadOrderCmtDetailRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
vecMsgInfo?: STMsgInfo[]; //评论列表
mapMsgInfo?: {
      [prop: number]: STMsgInfo[]
    }; //评论对应的回复列表
mapUserInfo?: {
      [prop: number]: STUserInfo
    }; //涉及到的用户详情
bHasNextPage=false?: boolean; //是否还有数据标志位
strPageContext?: string; //请求上下文
      }
      

      interface STReadUnCmtOrderListReq {
        wPageFlags?: number; //翻页规则，0x01：从新到旧 ;0x04:按页码翻页；
dwReqNum?: number; //翻页数量，选择按页码翻页时，前端传入一页请求的评论条数
dwCurPage?: number; //当前页码
strPageContext?: string; //请求上下文
      }
      

      interface STReadUnCmtOrderListRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
vecFlowOrderId?: string[]; //物流订单id列表
bHasNextPage=false?: boolean; //是否还有数据标志位
strPageContext?: string; //请求上下文
dwPageNum?: number; //总的页数
      }
      
//  批量读订单相关评论信息 请求与返回结构
      interface STReadOrderCmtInfoReq {
        vecOrderId?: string[]; //订单id		
      }
      

      interface STReadOrderCmtInfoRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
mapMsgInfo?: {
      [prop: string]: STMsgInfo[]
    }; //评论列表
      }
      

      interface STReadProductCmtInfoReq {
        vecProductId?: string[]; //商品id
      }
      

      interface STReadProductCmtInfoRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
mapProductCmtInfo?: {
      [prop: string]: STProductCmtInfo
    }; //评论列表
      }
      
// 发表评论 请求与返回结构
      interface STPubCommentReq {
        strProductId?: string; 
strOrderId?: string; 
strContent?: string; 
vecImageInfo?: STImageInfo[]; 
vecScoreInfo?: STScoreInfo[]; 
cType?: number; //0、首次评论；1、追评
strSeq?: string; //防重seq
cPubType?: number; //发表类型，0：非匿名发表；1：匿名发表
strSkuId?: string; //skuid
cUserType?: number; //0,普通用户；1,商家
strFlowOrderId?: string; 
      }
      

      interface STPubCommentRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
ddwMsgId?: number; 
      }
      

      interface STBatchPubCommentReq {
        strFlowOrderId?: string; //物流订单id
vecPubCommentInfo?: STPubCommentInfo[]; //批量发表的评论信息
vecScoreInfo?: STScoreInfo[]; 
strSeq?: string; //防重seq
cUserType?: number; //0,普通用户；1,商家
      }
      

      interface STBatchPubCommentRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
      }
      
// 发表回复 请求与返回结构
      interface STPubReplyReq {
        strProductId?: string; 
ddwMsgId?: number; 
strContent?: string; 
cType?: number; //0：普通用户回复；1：商家回复
strOrderId?: string; //商家回复，需要带上订单ID   
strSeq?: string; //防重seq
strSkuId?: string; //商品的SKUID
      }
      

      interface STPubReplyRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
ddwMsgId?: number; 
      }
      
// 发表赞 请求与返回结构
      interface STPubLikeReq {
        strProductId?: string; 
ddwMsgId?: number; 
cType?: number; //快评类型，1：赞
cValue?: number; //1：表示赞；2：表示取消赞；
strSeq?: string; //防重seq
      }
      

      interface STPubLikeRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
ddwMsgId?: number; 
      }
      
// 删除消息 请求与返回结构
      interface STDeleteMsgReq {
        ddwMsgId?: number; 
cType?: number; //0:删除消息；1：审核不通过；2：审核通过；
strSeq?: string; //防重seq
      }
      

      interface STDeleteMsgRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
      }
      
// 举报消息 请求与返回结构
      interface STReportMsgReq {
        ddwMsgId?: number; 
strSeq?: string; //防重seq
cType?: number; //举报类型
strDesc?: string; //举报描述
      }
      

      interface STReportMsgRsp {
        iErrCode?: number; //业务错误码
strErrMsg?: string; //业务错误原因
      }
      
  