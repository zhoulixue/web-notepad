
  // 登录相关协议，cwyuan
  
      declare enum LoginErrCode {
        SUCC = 0, 
FAIL = 1, // 通用错误
ERR_REQ_PACKAGE=1001, = ERR_REQ_PACKAGE=1001, // 入包错误
ERR_TIMEOUT_WXPROXY=1002, = ERR_TIMEOUT_WXPROXY=1002, // WXProxy响应超时
ERR_INVALID_WXTOKEN=1003, = ERR_INVALID_WXTOKEN=1003, // 无效TOKEN
ERR_CREATE_VUSER=1004, = ERR_CREATE_VUSER=1004, // 创建用户失败
ERR_UPDATE_ID=1005, = ERR_UPDATE_ID=1005, // 更新帐号失败
ERR_UPDATE_PROFILE=1006, = ERR_UPDATE_PROFILE=1006, // 更新帐号资料失败
ERR_OVERLOAD=1007, = ERR_OVERLOAD=1007, // overload
ERR_SNS_UPDATE=1008, = ERR_SNS_UPDATE=1008, // 更新关系链失败
ERR_TIMEOUT_M2UREAD=1009, = ERR_TIMEOUT_M2UREAD=1009, // M2U读响应超时
ERR_WXPROXY=1010, = ERR_WXPROXY=1010, // WXPorxy错误(非超时错误)
ERR_M2UREAD=1011, = ERR_M2UREAD=1011, // OPENID反查错误(非超时错误)
ERR_WRITE_UIN=1012, = ERR_WRITE_UIN=1012, // 写入新用户错误
ERR_GET_VIDEOTOKEN=1013, = ERR_GET_VIDEOTOKEN=1013, // 更新内部票据错误(非超时错误)
ERR_GET_VIDEOTOKEN_TIMEOUT=1014, = ERR_GET_VIDEOTOKEN_TIMEOUT=1014, // 更新内部票据超时
ERR_CHECK_VIDEOTOKEN=1015, = ERR_CHECK_VIDEOTOKEN=1015, // CHECK VIDEOTOKEN ERROR
ERR_CHECK_VIDEOTOKEN_TIMEOUT=1016, = ERR_CHECK_VIDEOTOKEN_TIMEOUT=1016, // CHECK VIDEOTOKEN TIMEOUT
ERR_GET_WXQQ=1017, = ERR_GET_WXQQ=1017, // WX QQ RESP ERROR
ERR_READ_PROFILE_TIMEOUT=1018, = ERR_READ_PROFILE_TIMEOUT=1018, // 读取用户资料超时
ERR_READ_PROFILE=1019, = ERR_READ_PROFILE=1019, // 读取用户资料失败(非超时)
ERR_CHECK_PTLOGIN=1020, = ERR_CHECK_PTLOGIN=1020, // CHECK PTLOGIN ERROR
ERR_CHECK_PTLOGIN_TIMEOUT=1021, = ERR_CHECK_PTLOGIN_TIMEOUT=1021, // CHECK PTLOGIN TIMEOUT
ERR_READ_QQ_PROFILE = 1022, //读qq资料失败
      }
      

      declare enum ModuleCmd {
        CMD_LOGIN = 0xea52, 
CMD_LOGOUT = 0xea54, 
CMD_REFRESH = 0xea53, 
CMD_WRITEINFO = 0xec3b, 
CMD_WRITEFIELD = 0xf5f7, 
      }
      

      declare enum DevicePlatType {
        DEV_PLAT_IPAD=5, = DEV_PLAT_IPAD=5, 
DEV_PLAT_APAD=6, = DEV_PLAT_APAD=6, 
DEV_PLAT_IPHONE=7, = DEV_PLAT_IPHONE=7, 
      }
      

      declare enum LoginType {
        E_WX_LOGIN = 0, 
E_QQ_LOGIN = 1, 
E_QQ_LOGOUT = 2, 
E_QQ_BIND = 3, //废弃
E_QQ_UNBIND = 4, //废弃
E_WX_LOGOUT = 5, 
E_WX_REFRESH = 6, 
E_QQ_REFRESH = 7, 
E_WX_UNBIND = 8, //废弃
E_WX_BIND = 9, //废弃
E_TV_LOGIN = 10, 
      }
      

      interface STDevInfo {
        wDevPlatType?: number; // 设备类型
pushToken?: string; // push token
guid?: string; // guid
devid?: string; // devid
strFromInfo?: string; // 包头里的frominfo，格式：平台号_appversion_appver,最后一个是app的版本号
      }
      
//  绑定的单个设备信息
      interface STBindDevInfo {
        ddwBindTime?: number; 
stDevInfo?: STDevInfo; 
      }
      
//  资料中存储设备信息的FIELDVALUE
      interface STBindDevInfoArr {
        devInfos?: STBindDevInfo[]; 
      }
      
// 当前进行切换的登录态；
      interface CurLoginToken {
        TokenAppID?: string; //微信的appid
TokenKeyType?: number; //1 skey,7 lsky,9 vuserkey,100 accessToken,101 wx code
TokenValue?: number[]; //TokenKeyType对应的值
TokenUin?: number; //QQ登录时的uin
TokenID?: string; //微信登录账号信息，如openid
bMainLogin?: boolean; //app端的主登录态表示，true：表示为主登录态。false:表示为从登录态，只有多个账号登录的时候才需要
TokenValueString?: string; //tokenValue String
      }
      
// 内部的票据
      interface STInnerToken {
        ddwVuser?: number; //内部登录态ID
vsessionKey?: string; //内部登录态串
dwExpireTime?: number; //票据过期时间，单位秒
      }
      
// wx 用户票据相关信息
      interface WXUserTokenInfo {
        wxNickName?: string; //微信昵称
wxFaceImageUrl?: string; //微信头像
wxOpenId?: string; //微信openId，
accessToken?: string; //登录态串
refreshToken?: string; //登录态refresh串
accessTokenExpireTime?: number; //accesstoken过期时间，单位(秒)
      }
      
// qq相关信息
      interface QQUserTokenInfo {
        qqNickName?: string; 
qqFaceImageUrl?: string; 
qqUin?: string; 
      }
      
// 获取GUID, 
      interface StGuidGetRequest {
        iMarketid?: number; //填写1表示QQlive
iPlatform?: number; //2:表示APHONE,3:表示ipad,4:表示iphone
nUnixtime?: number; //终端Unix时间戳
      }
      

      interface StGuidGetResponse {
        errCode?: number; // 返回结果值 0-成功 非0-失败
strErrMsg?: string; // 错误描述
strGuid?: string; // 返回的guid
nUnixtime?: number; // 返回当前服务器的unixTime
      }
      
//  刷新票据请求。如果返回 102 需要用户重新登录
      interface NewRefreshTokenRequest {
        stDevInfo?: STDevInfo; //设备信息	
vecLoginToken?: CurLoginToken[]; //这里只传递需要刷新的票据信息
refreshTypeMask?: number; // 1 标示刷新 wx 的accessToken
      }
      
//  登刷新票据返回
      interface NewRefreshTokenResponse {
        errCode?: number; //错误码
strErrMsg?: string; //返回信息
wxUserTokenInfo?: WXUserTokenInfo; //wx的用户信息，包括accessToken 和有效期
qqUserTokenInfo?: QQUserTokenInfo; //QQ用户信息
innerToken?: STInnerToken; //内部票据
      }
      
// 登录请求协议
      interface NewLoginRequest {
        curLoginTokenList?: CurLoginToken[]; //当前登录的登录态，QQ会有多个票据，wx 只有一个
from?: number; //来源，1=个人中心页卡；2：点击添加好友关系链触发登录；3：表示好莱坞；4：分享登录；
stDevInfo?: STDevInfo; 
      }
      
// 登录返回协议
      interface NewLoginResponse {
        errCode?: number; //错误码
innerToken?: STInnerToken; //内部票据
wxUserTokenInfo?: WXUserTokenInfo; //wx用户信息，如果是wx登录，则需要返回这个结构
qqUserTokenInfo?: QQUserTokenInfo; //QQ用户信息
strErrMsg?: string; //出错原因
bNewUser?: boolean; //新用户标识，true:新用户；false:老用户
      }
      
//  登出请求，在登出时需要调用
      interface NewLogoutRequest {
        majorLoginType?: number; //主要登录态定义 1 表示 wx ，2 表示 手Q
stDevInfo?: STDevInfo; 
vecLoginToken?: CurLoginToken[]; 
      }
      
//  登出返回
      interface NewLogoutResponse {
        errCode?: number; //错误码
strErrMsg?: string; //错误原因
      }
      

      interface STTypeInfo {
        cTypeid?: number; //用户身份id，取值范围：1，明星，对应底层0x01；2，明日之子，对应底层0x02；
cValue?: number; //0：取消身份id；1：设置身份id
      }
      

      interface STStatusInfo {
        cStatusId?: number; //用户状态id，取值范围
cValue?: number; //0：取消状态；1：设置状态
      }
      

      declare enum E_FIELD_ID {
        E_COMM_USER_NICK = 1, //用户通用昵称
E_COMM_USER_HEAD = 2, //用户通用头像
E_AUTO_USER_NICK = 3, //用户上传昵称
E_AUTO_USER_HEAD = 4, //用户上传头像
E_USER_TYPE = 5, //用户身份标识
E_USER_PHONE = 6, //用户手机
E_USER_IDENTIFY = 7, //用户身份证号码
E_USER_STATUS = 8, //用户状态标识
E_USER_DESC = 9, //用户签名简介
      }
      

      interface STFieldInfo {
        dwFieldId?: number; 
dwValue?: number; 
strValue?: string; 
stTypeInfo?: STTypeInfo; 
stStatusInfo?: STStatusInfo; 
      }
      

      interface WriteInfoRequest {
        strNick?: string; 
strHead?: string; 
cUserType=0?: number; //用户类型，0：普通用户；1： 明星用户
cOperType=0?: number; //操作类型，0：修改通用资料；1：修改用户上传资料;
strIntroduct?: string; //签名简介
vecTypeInfo?: STTypeInfo[]; //用户身份信息
      }
      

      interface WriteInfoResponse {
        errCode?: number; //错误码
strErrMsg?: string; //错误原因
      }
      

      interface WriteFieldRequest {
        vecFieldInfo?: STFieldInfo[]; 
      }
      

      interface WriteFieldResponse {
        errCode?: number; //错误码
strErrMsg?: string; //错误原因
      }
      
// 微信的票据
      interface STWxLoginToken {
        appID?: string; //登录态APPID
wTokenType?: number; //登录态类型，填写100
openId?: string; //登录态ID
accessToken?: string; //登录态串
refreshToken?: string; //登录态refresh串
lUserid?: number; //openid对应的userid
strCode?: string; //code
      }
      
// ptlogin的票据
      interface STPtloginToken {
        ddwUin?: number; 
strAppid?: string; 
strSkey?: string; 
dwKeyType?: number; //登录态类型
dwAppid?: number; //与strAppid对应
lUserid?: number; //qq对应的userid
      }
      
//  用户登录发中转消息
      interface STLoginToInnerRelay {
        loginToken?: STWxLoginToken; //微信票据
innerToken?: STInnerToken; //内部票据
bNewUser?: boolean; //是否新用户首次登录
strCallScene?: string; //调用场景，透传app提供的字符串
cLoginType?: number; //0，wx登录；1、qq登录；2、qq登出；3、qq绑定；4、qq解绑；5、wx登出；6、wx刷票据；7、qq刷票据；8、wx解绑；9、wx绑定
devInfo?: STDevInfo; //设备信息
stPtloginToken?: STPtloginToken; //qq票据
strNickName?: string; //用户昵称
cFromType?: number; //cFromType = 1，包含cLoginType有：0、1、2、4、5、6、7、8s//cFromType = 0，包含cLoginType有：0、1、2、3、4、6s//0，表示老登录模块过来的请求；1，表示新登录模块过来的请求
strSex?: string; //用户性别 
      }
      
// 获取微信二维码ticket请求
      interface NewGetTicketRequest {
        wxAppID?: string; //微信AppId
      }
      
// 获取微信二维码ticket返回
      interface NewGetTicketResponse {
        errCode?: number; //错误码
strErrMsg?: string; //错误原因
ticket?: string; 
ticketExpireTime?: number; //ticket过期时间，单位(秒)
      }
      
  