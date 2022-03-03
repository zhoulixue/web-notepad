
  // 正式L5：
  
      declare enum emCmd {
        E_GET_NAMEPLATE = 0xfb89, //获取铭牌
E_GET_NAMEPLATE_LIST = 0xfb8a, //获取用户铭牌列表
E_GET_NAMEPLATE_CNT = 0xfb8b, //获取用户铭牌数
E_GET_MAX_NAMEPLATE = 0xfbde, 
E_GET_ORDER_NAMEPLATE = 0xfbef, //根据订单号查询铭牌
      }
      

      declare enum emKeyType {
        E_PRODUCT_ID = 1, 
      }
      
// 获取铭牌
      interface STGetNameplateReq {
        strOrderId?: string; 
iNum?: number; 
iKeyType?: number; //emKeyType
strKey?: string; //商品ID
      }
      

      interface STGetNameplateRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iStartNum?: number; 
iEndNum?: number; 
      }
      
// 单条铭牌信息
      interface STNameplateInfo {
        iNumber?: number; //编号
strOrderId?: string; //对应订单ID
iTime?: number; //对应订单时间
      }
      
// 获取铭牌列表
      interface STGetNameplateListReq {
        iType?: number; //0x01 上下文翻页
iPageSize?: number; //一页数目
strContext?: string; //上下文
iKeyType?: number; //emKeyType
strKey?: string; //商品ID
      }
      

      interface STGetNameplateListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecNameplate?: STNameplateInfo[]; 
strContext?: string; 
bNext?: boolean; 
iTotalCnt?: number; 
      }
      
// 读取铭牌数
      interface STGetNameplateCntReq {
        iKeyType?: number; 
strKey?: string; 
      }
      

      interface STGetNameplateCntRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iCnt?: number; 
      }
      
// 读取当前最大铭牌号
      interface STGetMaxNameplateReq {
        iKeyType?: number; 
strKey?: string; 
      }
      

      interface STGetMaxNameplateRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iMaxNum?: number; 
      }
      
// 订单铭牌记录
      interface STOrderRecordInfo {
        iStart?: number; 
iEnd?: number; 
      }
      
// 根据订单号获取对应的铭牌
      interface STGetOrderNameplateReq {
        iKeyType?: number; 
strKey?: string; 
vecOrderId?: string[]; 
      }
      

      interface STGetOrderNameplateRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapNameplate?: {
      [prop: string]: STOrderRecordInfo
    }; 
      }
      
  