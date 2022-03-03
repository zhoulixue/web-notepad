
  // *
// L5
// *
// 测试环境：599873:3014656
  
      declare enum emExpressCmd {
        EM_EXPRESS_CMD_REG = 0xf402, 
EM_EXPRESS_CMD_QUERY = 0xf403, 
EM_EXPRESS_CMD_UPDATE_NOTIFY = 0xf404, 
EM_EXPRESS_CMD_TRANSFER = 0xf405, 
EM_EXPRESS_CMD_GET_EXP_COMPANY = 0xf411, 
      }
      

      declare enum emQueryOperation {
        EM_QUERY_OPER_ALL = 1, //查询所有物流节点信息
EM_QUERY_OPER_LAST_NEW = 2, //查询最新物流节点信息
      }
      

      declare enum emGetCompanyOperation {
        EM_GET_ALL_COMPANY = 1, //查询所有物流公司信息
EM_GET_COMPANY_BYID = 2, //根据id查询
      }
      

      interface STExpCompanyInfo {
        iCompanyId?: number; //快递公司ID
strCompanyCode?: string; //快递公司编码
strCompanyName?: string; //快递公司名称
      }
      
// 注册
      interface STRegisterReq {
        iAppid?: number; //业务id，系统分配
strExpressId?: string; //快递单号
iCompanyId?: number; //快递公司ID
      }
      

      interface STRegisterRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
// 查询快递物流信息
      interface STExpressNode {
        iState?: number; //状态
strStateName?: string; //状态名称
strTime?: string; //物流更新时间
strContext?: string; //物流内容
      }
      

      interface STQueryExpressInfoReq {
        iAppid?: number; //业务appid，系统分配
strExpressId?: string; //快递单号
iOperation?: number; //查询操作类型，参考emQueryOperation
      }
      

      interface STQueryExpressInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iExpState?: number; //快递单状态
stExpCompany?: STExpCompanyInfo; //快递公司信息
vecExpressNode?: STExpressNode[]; //各物流节点信息
      }
      
// 快递平台回调通知请求
      interface STExpressResult {
        strMessage?: string; //提示信息
iState?: number; //快递单状态					
strCondition?: string; //快递单状态明细
bIsCheck?: boolean; //是否自动校验快递公司编码
strCompanyCode?: string; //快递公司编码
strExpressId?: string; //快递单号
strExpressData?: string; //快递节点信息
      }
      

      interface STUpdateNotifyReq {
        strStatus?: string; //响应状态
strMessage?: string; //响应消息
ucAutoCheck?: number; //自动校验
strComOld?: string; //订阅时的公司编码
strComNew?: string; //修正后的公司编码
stExpressResult?: STExpressResult; //快递详细信息
      }
      

      interface STUpdateNotifyRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
// 更新通知转发请求
      interface STUpdateTransfer {
        strExpressId?: string; //快递单号
stLastExpressInfo?: STExpressNode; //快递更新
      }
      

      interface STUpdateTransferRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
// 拉取快递公司信息
      interface STGetExpCompanyReq {
        iOperation?: number; //操作id，参考emGetCompanyOperation
vecQueryFlag?: string[]; //查询标识，比如：公司id，公司名称，由iOperation指定
      }
      

      interface STGetExpCompanyRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecCompanyInfo?: STExpCompanyInfo[]; //快递公司信息
      }
      
  