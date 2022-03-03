
  
  // 命令字
      declare enum VMALL_CREDITS_CMD {
        CMD_LOCK_CREDITS = 0xfc84, //预扣积分
CMD_UNLOCK_CREDITS = 0xfc85, //取消预扣积分
CMD_ACK_PAY_CREDITS = 0xfc86, //确认支付积分
CMD_QUERY_LOCK_STATUS = 0xfc87, //查询支付状态
CMD_READ_USER_CREDITS = 0xfc88, //获取用户剩余积分
CMD_GIVE_PAY_CREDITS = 0xfc89, //获取购买赠送的积分
CMD_REFUND_PAY_CREDITS = 0xfc8a, //退款退还用户积分
CND_DEDUCT_PRESENT_CREDITS = 0xfc8b, //退款扣除赠送积分
CMD_READ_CREDIT_PAY_INFO = 0xfcc3, //读取积分订单信息
CMD_GET_GIVE_CREDIT_REQ = 0xfcc4, //查询可赠送积分
      }
      

      declare enum emLOCK_STATUS {
        LOCK = 1, //预扣
UN_LOCK = 2, //取消预扣
ACK_LOCK = 3, //确认支付
      }
      

      declare enum emRET {
        OK = 0, 
INPUT_INVALID = 3001, //输入参数错误（ID为空等）
NEED_LOGIN = 3002, //未携带登录包头
DEPEND_TIMEOUT = 3003, //底层超时
REQ_NO_DATA = 3004, //底层未返回数据
      }
      

      interface STCreditsInfo {
        strChannelId?: string; //对应emCreditsType
uiCreditSum?: number; //积分数
iLockStatus?: number; //参见枚举 emLOCK_STATUS
      }
      
// 预扣积分
      interface STLockCreditReq {
        strPayId?: string; //支付单号
stCreditInfo?: STCreditsInfo; //预扣积分
      }
      

      interface STLockCreditRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
// 取消预扣积分
      interface STUnlockCreditReq {
        strPayId?: string; //支付单号
strChannelId?: string; //取消预扣的类型
      }
      

      interface STUnlockCreditRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
// 确认支付积分
      interface STAckLockCreditReq {
        strPayId?: string; //支付单号
strChannelId?: string; //查询的渠道
      }
      

      interface STAckLockCreditRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
// 查询冻结状态
      interface STGetLockStatusReq {
        strPayId?: string; //支付单号
strChannelId?: string; //查询的渠道
      }
      

      interface STGetLockStatusRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stCreditsInfo?: STCreditsInfo; //当前积分状态
      }
      
// 读取用户剩余积分
      interface STReadUserCreditsReq {
        strChannelId?: string; //查询的渠道ID
      }
      

      interface STReadUserCreditsRsp {
        iErrCode?: number; 
strErrMsg?: string; 
uiCredits?: number; //可使用总消费积分
      }
      
// 获取支付赠送的积分
      interface STGivePayCreditsReq {
        strChannelId?: string; //查询的渠道ID
strPayId?: string; 
stPriceInfo?: STPriceInfo; 
vecGOrderBase?: STGOrderBase[]; 
strPayTime?: string; 
      }
      

      interface STGivePayCreditsRsp {
        iErrCode?: number; 
strErrMsg?: string; 
uiGiveCredits?: number; //赠送的消费积分
      }
      
// 退还支付花费积分
      interface STRefundPayCreditsReq {
        strPayId?: string; //支付单号
strRefundOrderId?: string; //退款订单号
stCreditsInfo?: STCreditsInfo; //
      }
      

      interface STRefundPayCreditsRsp {
        iErrCode?: number; //支付单号
strErrMsg?: string; //退款订单号
stCreditsInfo?: STCreditsInfo; 
      }
      
// 扣支付赠送积分
      interface STDeductPresentCreditsReq {
        strChannelId?: string; //查询的渠道ID
strPayId?: string; //支付订单号
strRefundOrderId?: string; //退款订单号,用于退款去重
vecRefundProduct?: STGOrderBase[]; 
      }
      

      interface STDeductPresentCreditsRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stCreditsInfo?: STCreditsInfo; 
      }
      
// 读取积分订单信息
      interface STReadCreditPayInfoReq {
        strChannelId?: string; 
strPayId?: string; 
      }
      

      interface STReadCreditPayInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
uiGiveCredits?: number; //订单赠送的积分数
      }
      
// 查询可赠送积分
      interface STGetGiveCreditReq {
        strChannelId?: string; 
uiCashSum?: number; //消费金额
      }
      

      interface STGetGiveCreditRsp {
        iErrCode?: number; 
strErrMsg?: string; 
uiGiveCredits?: number; //赠送积分数
      }
      
  