
  // 测试环境：10.49.107.200:20055
// 913345:196609
// 正式环境：10.223.13.76:20055
// 913345:262144
  //  支持通过接口配置业务访问限制
      declare enum emFreqControlCmd {
        EM_CHECK_LIMIT_REQ = 0xf455, // 检查访问是否超限制
EM_WRITE_LIMIT_REQ = 0xf456, // 写访问记录
EM_ADD_LIMIT_CONF_REQ = 0xf926, // 新增访问限制规则
      }
      

      declare enum emErrCode {
        RT_APPID_INVALID_ERROR = 2001, // APPID不合法
RT_GET_TASK_CONFIG_ERROR = 2002, // 读统一配置失败
RT_READ_REDIS_ERROR = 2003, // 读Redis失败
RT_WRITE_REDIS_ERROR = 2004, // 写Redis失败
RT_SPLIT_STRING_ERROR = 2005, // 拆解Redis Key失败
RT_GET_APPINFO_ERROR = 2006, // 获取业务信息失败
RT_GET_APPDIMEN_ERROR = 2007, // 获取业务维度失败
RT_GET_VALIDPRRIOD_ERROR = 2008, // 获取有效时间段失败
RT_GET_BLACKANDWHITE_ERROR = 2009, // 获取业务黑白名单失败
RT_GET_APPLIMIT_ERROR = 2010, // 获取业务限制规则失败
      }
      

      declare enum emRetCode {
        RT_BLACK_LIST_KEY = 3001, // 黑名单成员
RT_EXCEED_FREQ_LIMIT = 3002, // 超过限制
      }
      

      interface STDimenInfo {
        uiDimenId?: number; // 维度ID, 业务方自定义
strDimenKey?: string; // 维度Key，业务方自定义，注意不可含"_"
ulCount?: number; // 访问计数
      }
      

      interface STLimitConf {
        iAppId?: number; // 业务ID
uiDimenId?: number; // 维度ID
iPeriodId?: number; // 时间区间ID
iLimitNum?: number; // 限制数
      }
      

      interface STRetInfo {
        iErrCode?: number; 
strErrMsg?: string; 
vecPeriodId?: number[]; // 超出频率限制的时间区间集
mapPdId2Cnt?: {
      [prop: number]: number
    }; // 时间区间ID-访问数
      }
      

      interface STCheckLimitReq {
        iAppId?: number; // 业务ID
strAppKey?: string; // 业务Key
vecDimenInfo?: STDimenInfo[]; // 验证的维度信息,暂不支持验证vector里面相同维度的多个Key
bWrt?: boolean; // =0:只读 =1:读写
      }
      

      interface STCheckLimitRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapRetInfo?: {
      [prop: undefined]: STRetInfo
    }; // 维度ID-错误详情
mapDimId2Key2Ret?: {
      [prop: undefined]: {
      [prop: string]: STRetInfo
    }
    }; 
      }
      

      interface STWriteLimitReq {
        iAppId?: number; // 业务ID
strAppKey?: string; // 业务Key
vecDimenInfo?: STDimenInfo[]; // 写入的维度信息
bAddSub?: boolean; // =0:加 =1:减
      }
      

      interface STWriteLimitRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      

      declare enum emAddLimitType {
        ALT_OVERWRITE = 1, // 覆盖
ALT_APPEND = 2, // 追加
ALT_DELETE = 3, // 删除
ALT_UPDATE = 4, // 修改
      }
      

      interface STAddLimitConfReq {
        iAppId?: number; 
strAppKey?: string; 
vecLimitConf?: STLimitConf[]; // 批量写访问限制 
iAddType?: number; // 写类型，取自emAddLimitType 
      }
      

      interface STAddLimitConfRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
  