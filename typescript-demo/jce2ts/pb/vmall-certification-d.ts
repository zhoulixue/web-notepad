
  
  // 读测试:
// L5:
      declare enum CMD_CERTIFICATION {
        CMD_CHECK_ID_CARD_REQ = 0x62da, //检查身份信息
      }
      

      declare enum EM_ID_CHECK_STATUS {
        EM_ID_CHECK_NO_NEED = 0, //无需认证
EM_ID_CHECK_OK = 1, //认证成功
EM_ID_CHECK_FAILD = 2, //认证失败
      }
      

      interface VmallCertGoodsInfo{ {
        strProductId?: 0; //商品ID
strSKUId?: string; //商品SKUID
      }
      
// 检查身份信息
      interface VmallCheckIDCardReq{ {
        vecGoodsInfo?: 0; //商品ID
iNeedCheckStock?: number; //是否需要检查库存 1需要，0不需要
      }
      

      interface VmallCheckIDCardRsp {
        iErrCode?: number; //返回码
strErrMsg?: string; //出错的原因描述
iIDCheckStatus?: number; //身份证认证状态
strRealName?: string; //认证实名
      }
      
  