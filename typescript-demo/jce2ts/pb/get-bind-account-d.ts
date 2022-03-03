
  // 	GET_BIND_ACCOUNT 110303490
  // 命令字定义
      declare enum EM_ID_TRANS_CMD {
        GET_BIND_ACCOUNT_CMD = 0x1000, //帐号查询
      }
      
// 查询绑定帐号请求
      interface StGetBindIdReq {
        type?: number; //1:qq 2:wx	vuserid 3:openid + appid 4:commonid
id?: string; //qq号 或 微信的vuserid
bid?: number; //ott 会员bid
appid?: string; 
forceQueryWx?: number; //(请谨慎使用!!!)0：优先使用缓存数据 1：强制使用微信实时数据
      }
      

      interface StGetBindIdRsp {
        errCode?: number; //错误码(0表示成功)
errMsg?: string; //错误信息
hasBindAccount?: short; //0 没有 1 有
bindAccountType?: number; //1 qq 2 wx
bindAccountID?: string; //qq号或vuserid
isVip?: number; //绑定账号是否会员 0 不是 1 是
action?: string; //action
isSVip?: number; //绑定账号是否超级会员 0 不是 1 是
bindAccountNickName?: string; //绑定账号昵称
tips?: string; //绑定账号tips
isBidVip?: number; //bid会员 0 不是 1 是
commonid?: string; //commonid
      }
      
  