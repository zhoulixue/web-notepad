
  // *
// 授权与鉴权模块，定义为jce格式
// *
// *
// 作者：wenchaozeng
// *
// 最后变更时间：2019年01月10日
// *
// 版本变更：
// 1）创建jce文件；
  // @brief:机器环境信息
// 写服务：授权命令字(0xe151)，获取票据(0xfab2)，长票据刷短票据(0xfab3)，票据踢出(0xfab4)
// 读服务：鉴权命令字(0xe152)
// TestIp:
// 10.49.107.200
// TestPort
// 写服务：8787
// 读服务：8788
// 测试环境：
// 写L5：599873:5505024
// 读L5：301249:3538944(老服务)
// 读L5：599873:5373952(新服务使用)
// 正式环境:(主要版本)
// 读服务OnlineL5:
// 246465:327680
// (主版本)
// 64504065:131072
// (天津set)
// 64504129:65536
// (上海set)
// 64475393:65536
// (直播set)
// 鉴权服务——老系统拆分写L5(授权服务):887617:131072[正式环境]
// 正式环境:(主要版本)
// 写服务:1233025:65536
// 读服务:(过渡使用)(最终上线还是得用之前的正式环境L5：246465:327680,记得要找sky更新,丹哥也要更新)
// 提供给kafka的消费者L5：
// 1226881:131072(主set)
// 1295041:131072(天津set)
// 1294977:131072(上海set)
// 提供给分布式cache的L5：
// 1290049:65536(主set)
// 1295041:65536(天津set)
// 1294977:65536(上海set)
// 正式环境:(海外版本是他们自己提供的CL5)
// 写服务:64584257:65536
// 读服务:64584321:65536
      declare enum ModuleCmd {
        CMD_GET_TOKEN = 0xe151, //授权命令字，获取内部票据    (57681)
CMD_CHECK_TOKEN = 0xe152, //鉴权命令字，校验内部票据    (57682)
CMD_CHECK_WITH_TOKEN = 0xe9f2, //鉴权命令字，校验内部票据和校验且返回注册票据(老版本的接口)
CMD_GET_TOKEN_NEW = 0xfab2, //获取票据(长票据,短票据,user_gtk)     (64178)
CMD_REFRESH_TOKEN = 0xfab3, //长票据刷短票据                       (64179)
CMD_DEL_TOKEN = 0xfab4, //长票据踢出                           (64180)
      }
      

      declare enum ModuleFrom {
        E_FROM_APP = 1000, //用于腾讯视频APP (返回一种票据)
E_FROM_PC = 1001, //用于腾讯视频PC  (返回一种票据)
E_FROM_OVERSEA = 1002, //用于腾讯视频APP海外版(返回三种票据,刷新,校验和user_gtk)
E_DEFAULT = 2000, //修改默认的请求from_id(由之前的1000修改为2000)
      }
      
// 帐号类型
      declare enum SOURCE_TYPE {
        E_NL_TYPE = 0, 
E_WX_TYPE = 1, 
E_QQ_TYPE = 2, 
      }
      
// 票据类型
      declare enum TOKEN_TYPE {
        E_COMM_TYPE = 0, //通用类型
E_REFRESH_TYPE = 1, //刷新票据(长票据)
E_ACCESS_TYPE = 2, //校验票据 (短票据)
E_CLIENT_TYPE = 3, //客户端理解的类型(比如user_gtk)
      }
      
// 票据的定义：
// TokenKeyType
// =
// 1，qq强登录态
// TokenKeyType
// =
// 7，qq弱登录态
// TokenKeyType
// =
// 8，vaskey登录态
// TokenKeyType
// =
// 9，视频内部票据
// TokenKeyType
// =
// 100，微信票据
      interface STLoginToken {
        strTokenAppid?: string; 
cTokenKeyType?: number; 
lTokenUin?: number; 
strTokenid?: string; //登陆账号信息，如openid
      }
      

      interface STTokenInfo {
        etokenType?: TOKEN_TYPE; //票据类型E_COMM_TYPE
strToken?: string; //票据信息
dwExpireTime?: number; //过期时间
      }
      
// 票据生成请求结构体
      interface STReqGetToken {
        cVersion?: number; //协议版本号，默认填1
ddwUserid?: number; //内部vuserid
wFrom?: number; //来源，默认值为1000，表示来源于腾讯视频appE_DEFAULT
strAppid?: string; //业务appid，比如微信appid或者qq appid
cType?: number; //账号type
strAccountKey?: string; //保存一些帐号信息，当cType=2的时候，strCountKey传入的是前端的qq号
      }
      
// 票据生成返回结构体
      interface STRspGetToken {
        cResult?: number; //返回码
strSessionKey?: string; //生成票据
strErrMsg?: string; //出错的原因描述
dwExpireTime?: number; //票据的过期时间
      }
      
// 票据校验请求结构体(包头里面一定要带上平台号和设备id,否则会失败)
      interface STReqCheckToken {
        cVersion?: number; //协议版本号，默认填1
ddwUserid?: number; //内部vuserid
strSessionKey?: string; //需要校验的票据
cModuleFrom?: ModuleFrom; //来源类型E_DEFAULT
cType=0?: number; //(请求type：0表示只校验票据合法性,1表示需要校验票据合法性同时需要返回帐号信息,只能返回qq信息)
strSceneId?: string; //场景id(标识调用方场景,主要决定是否走缓存功能)
      }
      
// 票据校验返回结构体
      interface STRspCheckToken {
        cResult?: number; //返回码
strErrMsg?: string; //出错的原因描述
dwExpireTime?: number; //票据的过期时间
cAccountType?: SOURCE_TYPE; //账号type
strAccountKey?: string; //保存对应的帐号信息
      }
      
// 获取长短票据请求结构体(新接口)
      interface STReqGetTokenInfo {
        cVersion?: number; //协议版本号，默认填1
ddwUserid?: number; //内部vuserid
strAppid?: string; //业务appid,区分业务
cAccountType?: SOURCE_TYPE; //账号type
strAccountKey?: string; //保存对应的帐号信息
cModuleFrom?: ModuleFrom; //来源类型
      }
      
// 获取长短票据返回结构体
      interface STRspGetTokenInfo {
        iErrCode?: number; //返回码
strErrMsg?: string; //出错的原因描述
vecTokenInfo?: STTokenInfo[]; //返回票据信息
      }
      
// 用长票据来刷新短票据请求结构体
      interface STReqRefreshToken {
        cVersion?: number; //协议版本号，默认填1
ddwUserid?: number; //内部vuserid
strAppid?: string; //业务appid,区分业务
stTokenInfo?: STTokenInfo; //长票据信息
strEncryptParam?: string; //前端加密的一些参数信息，需要后端做校验(base64转换后可视化)
cModuleFrom?: ModuleFrom; //来源类型
      }
      
// 用长票据来刷新短票据返回结构体
      interface STRspRefreshToken {
        iErrCode?: number; //返回码
strErrMsg?: string; //出错的原因描述
vecTokenInfo?: STTokenInfo[]; //刷新得到的短票据信息
      }
      
// 长票据踢出请求结构体
      interface STReqDelToken {
        ddwUserid?: number; //内部vuserid
stTokenInfo?: STTokenInfo; //长票据信息
cModuleFrom?: ModuleFrom; //来源类型
      }
      
// 长票据踢出返回结构体
      interface STRspDelToken {
        iErrCode?: number; //返回码
strErrMsg?: string; //出错的原因描述
      }
      
// 鉴权且校验注册信息请求结构体 (待废弃,线上有很少的量)
      interface STReqCheckWithToken {
        cVersion?: number; //协议版本号，默认填1
ddwUserid?: number; //内部vuserid
strSessionKey?: string; //需要校验的票据
cType=0?: number; //0，默认值，检验vUserid的注册票据与vecLoginToken的一致性。1，返回vUserid的注册票据;2、返回vUserid的注册票据且如果是微信用户，校验微信用户是否为好莱坞会员。
stLoginToken?: STLoginToken; 
      }
      
// 鉴权且校验注册信息返回结构体
      interface STRspCheckWithToken {
        cResult?: number; //返回码
strErrMsg?: string; //出错的原因描述
vecLoginToken?: STLoginToken[]; 
strUnionid?: string; //微信的unionid
dwExpireTime?: number; //票据的过期时间
      }
      
// 已经废弃
      interface STReqGetQQ {
        cVersion?: number; //协议版本号，默认填1
ddwUserid?: number; //内部vuserid
strSessionKey?: string; //需要校验的票据
      }
      

      interface STRspGetQQ {
        cResult?: number; //返回码
ddwUin?: number; //票据对应的QQ
strErrMsg?: string; //出错的原因描述
      }
      
// 已经废弃
      interface STReqBatchGetQQ {
        cVersion?: number; //协议版本号，默认填1
vecUseridList?: number[]; //内部vuserid
      }
      

      interface STRspBatchGetQQ {
        cResult?: number; //返回码
mapUserid2Uin?: {
      [prop: number]: number
    }; //vuserid对应的QQ
strErrMsg?: string; //出错的原因描述
      }
      
  