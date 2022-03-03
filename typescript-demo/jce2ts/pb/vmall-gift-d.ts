
  // *
// L5
// *
// 测试环境：599873:3342336
  
      declare enum emGiftCmd {
        EM_GIFT_COMMON_OPER_CMD = 0xf4ad, //赠送通用请求
EM_GIFT_MAGIC_ORDER_CMD = 0xf810, //魔方查询商城有效订单数量
EM_GIFT_INC_MAGIC_ORDER_CNT_CMD = 0xf933, //运营人工增加符合魔方条件的订单数
EM_GIFT_GET_ORDER_CNT_CMD = 0xfb2b, //给心悦查询符合条件的商城订单数量
      }
      

      declare enum emGiftOperation {
        EM_GIFT_OPER_VISIT = 100, //访问商城
EM_GIFT_OPER_ORDER_CONFIRM = 101, //确认收货
EM_GIFT_OPER_COMMENT = 102, //评论
EM_GIFT_OPER_SUPPORT = 103, //101应援赠送
EM_GIFT_OPER_SUPPORT_CHECK = 104, //校验是否101应援过
EM_GIFT_OPER_ORDER_DELIVER = 105, //支付后待发货
EM_GIFT_OPER_NAMEPLATE = 106, //火箭少女买实体专辑赠铭牌
EM_GIFT_OPER_NAMEPLATE_CHECK = 107, //校验是否赠送过铭牌
      }
      

      interface STGiftCommonReq {
        uiOperation?: number; //操作，参考emGiftOperation
strSeq?: string; //操作序列号，业务需要确保每次请求的序列号不一致，后台会对超时请求去重
vecDonee?: string[]; 
strOrderId?: string; 
      }
      

      interface STGiftCommonRsp {
        iErrCode?: number; 
strErrMsg?: string; 
uiVCoinNum?: number; //赠送的V币数量
iStartNum?: number; //铭牌起始编号
iEndNum?: number; //铭牌结束编号
      }
      

      interface STGiftIncMagicOrderCntReq {
        strUserId?: string; //用户vuid
strPayOrderId?: string; //商城订单号
strActId?: string; //魔方活动ID
strModId?: string; //魔方模块ID
      }
      

      interface STGiftIncMagicOrderCntRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      

      interface STOrderCntInfo {
        act_id?: number; //活动id
mod_id?: number; //模块id  
cnt?: number; //订单数
      }
      

      interface STGiftGetOrderCntReq {
        vecId?: STOrderCntInfo[]; //只需填写act_id和mod_id
vuserid?: string; //视频vuserid
is_prepublish=0?: number; //附加参数，暂时无需填写
      }
      

      interface STGiftGetOrderCntRsp {
        iErrCode?: number; //错误码，为0则查询成功
strErrMsg?: string; //错误信息
mapInfo?: {
      [prop: string]: STOrderCntInfo
    }; //各个id对应的订单数,key为act_id和mod_id拼接起来。例如act_id为12，mod_id为34,则key是"12_34"
      }
      
  