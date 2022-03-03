
  
  // 我的财产对象
      interface PropertyItemData {
        propertyType?: number; // 1:钻石   2：金币
propertyName?: string; //财产名称
propertyCount?: number; //财产数量
propertyActivity?: string; //当前活动描述
propertyUrl?: string; //目前代金券使用
expiredCount?: number; //即将过期的财产数量
expiryTime?: number; //过期时间 unix格式
      }
      
// 账单列表数据结构
      interface DiamondBillItemData {
        date?: string; //消费日期
consumeDesc?: string; //消费类型描述
consumeDescColor?: string; //消费描述的颜色  格式：#23eadf
consumeEvent?: string; //消费事件描述
ctx?: string; //业务的上下文信息
iReceiverType?: number; //1:qq  2:wx
strReceiver?: string; //目标用户的账号
      }
      
//  钻石商品数据结构
      interface DiamondConsumeItem {
        iapProductID?: string; //米大师申请物品id(仅供ios端使用)
count?: number; //钻石数量
Description?: string; //购买描述
price?: number; // 价格
imgUrl?: string; //钻石显示的图片
      }
      
//  兑换金币页数据展现
      interface CoinConsumeItem {
        strActivityId?: string; //运营活动会与相应的activityid对应，activityid对应的配置约定计算规则。activityid由后台下发
count?: number; //金币数量
Description?: string; //购买描述
price?: number; // 对应的钻石数量
imgUrl?: string; //金币显示的图片
      }
      
//  道具等虚拟物品相关信息
      interface ProductItem {
        strProductId?: string; //虚拟物品ID，ID由后台下发
iProductNum?: number; //虚拟物品数量
iCoinType?: number; //代币类型 1钻石 2V币
iCoinNum?: number; //代币数量 ->即道具询价的结果
      }
      
// 我的财产页活动描述
      interface DiamondActivityRequest {
        optionalKey?: string; //站位符
      }
      

      interface DiamondActivityResponse {
        errCode?: number; //业务错误码
activityDesc?: string; //活动描述
      }
      
// 我的财产（获取余额）
      interface PropertyMineRequest {
        strPf?: string; //pf平台来源，前端从midas sdk获取，并填上自定义字段
vecCoinType?: number[]; //1 钻石 2 金币
bCheckLogin?: boolean; //是否根据cookie设置验证登录，默认为true，ios平台设置为false时为强制游客态验证
      }
      

      interface PropertyMineResponse {
        errCode?: number; //业务错误码
myProperty?: PropertyItemData[]; //我的财产
ts?: string; //系统时间戳
      }
      
// 账单流水列表接口（付费流水）
      interface DiamondBillRequest {
        pageContext?: string; //翻页上下文
iShowType?: number; //0 钻石消费流水 1 金币流水
      }
      

      interface DiamondBillResponse {
        errCode?: number; //业务错误码
billList?: DiamondBillItemData[]; //账单列表
hasNextPage?: boolean; //是否有下一页
pageContext?: string; //翻页上下文
      }
      
// cmd = 0xe9cf
      interface BillFlowRequest {
        showType?: number; 
pageIndex?: number; 
pageSize?: number; 
      }
      

      interface BillFlowResponse {
        errCode?: number; //业务错误码
billList?: DiamondBillItemData[]; //账单列表
totalCount?: number; 
      }
      
// 代币消费请求（金币兑换，首登赠送金币等）
      interface PropertyPayRequest {
        strPf?: string; //pf平台来源，midas处非xxx的部分，例如qq_m_qq-2001-android-2011-xxxx传qq_m_qq-2001-android-2011
iSceneType?: number; //结算场景类型 例如：100001表示腾讯视频 100002腾讯直播 100003tv
iSceneSubType?: number; //结算场景子类型，场景子类型，1 点播道具 2 直播道具 3 人气榜 7: 离线赠送  10: 用户成长值系统; 11: 成长值扣除; 12: app嵌入H5兑换代金卷
strActivityId?: string; //运营活动会与相应的activityid对应，activityid对应的配置约定计算规则。activityid由后台下发
iProductType?: number; //虚拟物品种类，1：道具 2：服务 3：积分  5: 成长值支付商品，这个是具体的情况，没有这个字段就填0
vecProduct?: ProductItem[]; //虚拟物品列表
strRef?: string; //来源扩展字段，用于统计，如vid=1133&cid=4455&lid=2444
iExcNum?: number; //任意数量代币兑换时，输入的原兑换代币数量(如钻石换金币 输入钻石数量)
lSeq?: number; //seq 一次购买任务的时间戳,请求重试时保持不变
iRetryNum?: number; //本次请求是第几次重试,首次请求该值为0
no_flow?: number; //1:不写flow,由离线赠送来写flow
      }
      

      interface PropertyPayResponse {
        errCode?: number; //结果返回码 -10006 钻石不足 ,-10007 金币不足
msg?: string; //支付结果描述
billno?: string; //订单号
      }
      
// 钻石兑换页列表接口
      interface DiamondListRequest {
        showType?: number; //扩展参数，默认填0
      }
      

      interface DiamondListResponse {
        errCode?: number; 
totLine?: number; // 总行数
diamondList?: DiamondConsumeItem[]; //钻石列表
activityDesc?: string; //活动描述
      }
      
// 金币兑换页列表接口
      interface CoinListRequest {
        showType?: number; //扩展参数，默认填0
      }
      

      interface CoinListResponse {
        errCode?: number; 
totLine?: number; // 总行数
coinList?: CoinConsumeItem[]; //金币列表
      }
      
// ios财产转移接口，将guid下的财产转移到qq或者微信账户，根据主登录态状态进行转换
      interface TransPropertyRequest {
        tk?: string; 
ts?: string; 
vecCoinType?: number[]; //1 钻石 2 金币
strPf?: string; //pf平台来源，midas处非xxx的部分，例如qq_m_qq-2001-android-2011-xxxx传qq_m_qq-2001-android-2011
iSceneType?: number; //结算场景类型 例如：100001表示腾讯视频 100002腾讯直播 100003腾讯TV
iSceneSubType?: number; //结算场景子类型，场景子类型，1 点播道具 2 直播道具 3 人气榜 4 guid财产转移
strVuidTVTransfer?: string; //用来转移tv手机用户财产	vuid	
      }
      

      interface TransPropertyResponse {
        errCode?: number; 
msg?: string; 
      }
      

      interface ActPopItemData {
        strShowTxt?: string; //弹框文字
strLeftTxt?: string; //左按钮文字
strRightTxt?: string; //右按钮文字
strActivityId?: string; //支付id
      }
      

      interface ActPopRequest {
        iSenceId?: number; //场景id, 1:个人中心的代币余额页，2:好声音投票页
lLastShowTime?: number; //上次显示兑换框的事件,单位秒
      }
      

      interface ActPopResponse {
        errCode?: number; //错误码
bShow?: boolean; //是否弹框,true展示，false不展示
oPopData?: ActPopItemData; //弹框相关的信息
lShowTime?: number; //协议返回的时间
sEffectUrl?: string; //赠送成功后展示的h5效果，为空则不展示。
sSuccessTxt?: string; //分享成功的url。
sFailTxt?: string; //分享失败的url。
      }
      
  