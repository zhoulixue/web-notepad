
  
  // 读测试:
// IP:10.49.123.228:21574
// L5:599873:4325376
      declare enum CMD_SAHRE_COUPON {
        CMD_GET_SHARE_COUPON_REQ = 0xf660, //尝试获取优惠券
CMD_GET_SHARE_COUPON_LIST_REQ = 0xf661, //查询分享列表
CMD_GET_PAY_SHARE_INFO_REQ = 0xf662, //C端获取分享活动信息
CMD_GET_COUPON_PACKAGE_REQ = 0xfab8, //C端尝试获取优惠券包
CMD_READ_COUPON_PACKAGE_REQ = 0xfab9, //C端获取活动劵包信息
CMD_GET_SHARE_INFO_REQ_B = 0xf67a, //B端查询分享活动信息
CMD_MODIFY_SHARE_INFO_REQ = 0xf663, //修改分享活动信息
CMD_CREATE_SHARE_INFO_REQ = 0xfba5, //创建分享活动
CMD_CHANGE_SHARE_ACT_STATUS = 0xf664, //上下架分享活动
CMD_READ_SHARE_INFO_LIST = 0xfb99, //查询弹窗活动列表
      }
      

      declare enum LOGIC_CODE {
        LCODE_SUC = 0, //首次领取成功
LCODE_RECEIVED = 1, //已领取
LCODE_EMPTY = 2, //已领光
LCODE_FAILED = 3, //领取失败
      }
      
// 涉及的优惠券批次信息
      interface STCouponBatchInfo {
        iIncId?: number; //自增ID
strCouponBatchId?: string; //优惠券批次ID
strCouponTitle?: string; //优惠券标题10字以内
strCouponShortTitle?: string; //优惠券短标题5字以内
iCouponType?: number; //优惠券类型，参考CouponType枚举值
uiStartTime?: number; //优惠券有效期起始时间
uiEndTime?: number; //优惠券有效期结束时间
iGiveNum?: number; //赠送数量
bHasIdentityLimit?: boolean; //是否有身份限制
vecIdentityLimit?: unsignedint[]; //身份规则,参照分享券的IdentityLimitType取值
dDiscount?: number; 
dThreshold?: number; 
strCouponContent?: string; 
uiLimitUser?: number; //领取限制，每人能领取多少张，为0不限制
uiLimitAllDaily?: number; //领取限制，该优惠券每天能领多少张，为0不限制
iExpireType?: number; //过期时间类型：0固定过期，1动态过期时间
iExpireDayNum?: number; //单位：天。如果是动态过期时间，标识领取几天后过期
iPercent?: number; //折扣券折扣百分比，比如10%折扣填10
      }
      
// 分享用户信息
      interface STShareUserInfo {
        strUserId?: string; //用户ID
strNick?: string; 
strAvatar?: string; 
stCouponBatchInfo?: STCouponBatchInfo; 
ddwReceiveShareTime?: number; //领取时间
      }
      
// 分享活动信息
      interface STShareActInfo {
        strShareActId?: string; //分享活动ID
strShareDesc?: string; //分享活动描述
strShareImg?: string; //分享活动图片
uiStatus?: number; //活动状态
iIdLimit?: number; //身份限制（暂时没用，前端实现）
iGiveLimit?: number; //领取限制（暂时没用，前端实现）
iTotalCoupon?: number; //总可领取量
iTotalDiscount?: number; //总抵扣值
strBeginTime?: string; //开始时间
strEndTime?: string; //结束时间
iShareType?: number; //任务类型
      }
      
// 根据支付订单ID获取分享优惠券
      interface STGetShareCouponReq {
        strPayOrderId?: string; //购买的支付流水ID
iAdPositionId?: number; //好莱坞分配的推广位ID
iPlatform?: number; 
      }
      

      interface STGetShareCouponRsp {
        iErrCode?: number; //服务返回码
strErrMsg?: string; //出错的原因描述
stCouponBatchInfo?: STCouponBatchInfo; //获得的优惠券批次信息
iLogicCode?: number; //业务逻辑返回码
      }
      
// 根据支付订单ID分享获得的优惠券列表
      interface STGetShareCouponListReq {
        strPayOrderId?: string; //购买的支付流水ID
      }
      

      interface STGetShareCouponListRsp {
        iErrCode?: number; //服务返回码
strErrMsg?: string; //出错的原因描述
vecShareUserInfo?: STShareUserInfo[]; //获得已发放优惠券列表
      }
      
// 根据活动ID（逐渐废弃）或推广位ID，尝试获取优惠券包
      interface STGetCouponPackageReq {
        strActId?: string; //活动ID
iAdPositionId?: number; //推广位ID
iPlatform?: number; 
      }
      

      interface STGetCouponPackageRsp {
        iErrCode?: number; //返回码
strErrMsg?: string; //出错的原因描述
iLogicCode?: number; //逻辑错误码
      }
      
// 根据活动ID（逐渐废弃）或推广位ID，读取优惠券包信息
      interface STReadCouponPackageReq {
        strActId?: string; //活动ID
iAdPositionId?: number; //推广位ID
iPlatform?: number; 
      }
      
// Src字段名：重新定义
      interface STReadCouponPackageRsp {
        iErrCode?: number; //返回码
strErrMsg?: string; //出错的原因描述
mapSrcInfo?: {
      [prop: string]: string
    }; //劵包相关资源信息
vecCouponBatch?: STCouponBatchInfo[]; //涉及的优惠券批次信息
      }
      
// /
      declare enum CODE_SHARE_OPERATION {
        SOP_UP = 101, //分享活动上线
SOP_DONW = 102, //分享活动下线
      }
      
// 分享活动操作码
      declare enum CODE_SHARE_COUPON_OPERATION {
        COP_CREATE = 201, //新增分享优惠券
COP_UPDATE = 202, //修改分享优惠券
COP_DELETE = 203, //删除分享优惠券
      }
      

      declare enum BIT_IDENTITY_LIMIT {
        ILMT_NONE = 0x1, //全部无身份限制
      }
      

      declare enum BIT_GIVE_LIMIT {
        GLMT_NONE = 0x1, //全部无领取限制
      }
      
// 分享活动状态
      declare enum STATUS_SHARE_ACT {
        SST_ONLINE = 1, //上架
SST_OFFLINE = 2, //下架
      }
      
// 根据支付ID，获取分享活动信息（已废弃）
      interface STGetPayShareInfoReq {
        strPayOrderId?: string; 
      }
      

      interface STGetPayShareInfoRsp {
        iErrCode?: number; //返回码
strErrMsg?: string; //出错的原因描述
stShareActInfo?: STShareActInfo; //分享信息
vecCouponBatch?: STCouponBatchInfo[]; //涉及的优惠券批次信息
      }
      
// 根据分享活动ID，获取分享活动信息
      interface STGetShareInfoReq {
        strShareActId?: string; 
      }
      

      interface STGetShareInfoRsp {
        iErrCode?: number; //返回码
strErrMsg?: string; //出错的原因描述
stShareActInfo?: STShareActInfo; //分享信息
vecCouponBatch?: STCouponBatchInfo[]; //涉及的优惠券批次信息
mapSrcInfo?: {
      [prop: string]: string
    }; //劵包相关资源信息
vecColorGroup?: string[]; //参考色值组
      }
      
// 获取分享活动列表
      interface STGetShareListReq {
        uiPageNum?: number; 
uiPageSize?: number; 
      }
      

      interface STGetShareListRsp {
        iErrCode?: number; //返回码
strErrMsg?: string; //出错的原因描述
vecShareActInfo?: STShareActInfo[]; //弹窗活动列表
iTotalCount?: number; //总数
      }
      
// 涉及的优惠券批次操作信息
      interface STCouponBatchOpInfo {
        iIncId?: number; //自增ID
strCouponBatchId?: string; //优惠券批次ID
iGiveNum?: number; //赠送数量限制
uiOperation?: number; //操作
dDiscount?: number; //抵扣值（分）
      }
      
// 根据分享活动ID，修改分享活动信息
      interface STModifyShareInfoReq {
        strShareActId?: string; 
stShareActInfo?: STShareActInfo; //分享信息
vecCouponBatchOpInfo?: STCouponBatchOpInfo[]; //包含的优惠券操作信息
mapSrcInfo?: {
      [prop: string]: string
    }; 
      }
      

      interface STModifyShareInfoRsp {
        iErrCode?: number; //返回码
strErrMsg?: string; //出错的原因描述
      }
      
// 上下架优惠券分享活动
      interface STChangeShareActStatusReq {
        strShareActId?: string; //分享活动ID
uiOperation?: number; //操作
      }
      

      interface STChangeShareActStatusRsp {
        iErrCode?: number; //返回码
strErrMsg?: string; //出错的原因描述
      }
      
  