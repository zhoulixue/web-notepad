
  
  // 层级为： 页面--（包含多个）模块 -- （包含）样式和商品/IP数据
      declare enum CMD {
        PAGE_DATA_REQ = 0xf36d, //页面请求
MOD_DATA_REQ = 0xf36e, //模块请求
PAGE_DATA_NO_CACHE_REQ = 0xf62b, //页面请求（B端）
MOD_DATA_NO_CACHE_REQ = 0xf62c, //模块请求（B端）
APP_POSTER_DATA_REQ = 0xf6e0, //APP精选数据接口，协议使用APP的协议
      }
      
// UI样式类型
      declare enum EM_MOD_TYPE {
        EM_MOD_IMG_BANNER = 1, //大图横幅             对应结构：STImgBanner
EM_MOD_IMG_NAV = 2, //小图导航             对应结构：STImgBanner
EM_MOD_PROD_BANNER = 3, //带背景商品横幅    对应结构：STProductBanner
EM_MOD_IP_BANNER = 4, //带背景IP横幅       对应结构：STIPBanner
EM_MOD_IP_IMG = 5, //IP单图                对应结构：STImgBanner
EM_MOD_THREE_PROD = 6, //热销三商品          对应结构：STProductBanner
EM_MOD_PROD_LIST = 7, //商品列表             对应结构：STProductBanner
EM_MOD_IP_LIST = 8, //IP列表 				  对应结构：STIPBanner
EM_MOD_TITLE = 9, //模块标题             对应结构：STTitleInfo
EM_MOD_THREE_PROD_BANNER = 10, //带背景三商品       对应结构：STProductBanner
EM_MOD_THREE_ACTIVE = 11, //活动三商品         对应结构：STProductBanner
EM_MOD_THREE_IP = 12, //热销三IP             对应结构：STIPBanner
EM_MOD_ONE_PROD = 13, //推荐单商品          对应结构：STProductBanner
EM_MOD_VCOIN = 14, //三图V币展示       对应结构：STImgBanner
EM_MOD_IPINFO = 15, //单个IP信息 		  对应结构：STProductBanner
EM_MOD_FOUR_ACTIVE = 16, //活动四商品 对应结构：STProductBanner
EM_MOD_SIX_ACTIVE = 17, //活动六商品 对应结构：STProductBanner
EM_MOD_FIVE_ICON = 18, //分类横划ICON   对应结构STImgBanner
EM_MOD_FOUR_PROD = 19, //1+3商品，可配置一级类目ID、IPID、活动ID ，按最高销量拉取，对应结构STProductBanner
EM_MOD_TOPIC_THREE_PROD = 20, //主题三商品，可配置类目ID、IPID、活动ID，按最高销量拉取，商品有背景色，对应结构STProductBanner
EM_MOD_CONF_PROD = 21, //全配置商品，用于心悦页面的数据展示，对应结构STProductBanner
EM_MOD_ONE_BANNER = 22, //单banner结构，对应STImgBanner
EM_MOD_RECOM = 23, //每日推荐模块，对应STProductBanner
EM_MOD_MULTI_IP = 24, //IP 横划模块，对应结构STMultiIpBanner
EM_MOD_IP_MULTI_IMG = 25, //多IP小图横划，对应STIPBanner
EM_MOD_ONE_SUB_IP = 26, //前端不使用，这个模块对应的是多IP横划的子模块类型
EM_MOD_VIDEO_TWO_IMG = 27, //视频双背景图模块，对应STVideoBanner
EM_MOD_TAIL_TEXT = 28, //尾部文字模块，对应STTitleInfo
EM_MOD_MULT_COUPON = 29, //多优惠券模块，对应STCouponBanner
EM_MOD_ONE_PRODUCT_AD = 30, //单商品广告模块，对应STProductBanner
EM_MOD_CHANNEL_HEAD = 31, //频道页卡头部模块，对应STMultiIpBanner
EM_MOD_MULTI_SECKILL = 32, //秒杀活动模块，对应STMultiIpBanner
EM_MOD_VIP_COUNPON = 33, //VIP 优惠券模块，对应STMultiCounpon
EM_MOD_CONTENT_BANNER = 34, //内容banner, STContentBanner
      }
      

      declare enum EM_REQ_TYPE {
        EM_REQ_NONE = 1, //直接渲染
EM_REQ_MOD = 2, //二次请求
      }
      

      declare enum EM_PROD_PRICE_TYPE {
        EM_PROD_PRICE_TYPE_VIP = 1, //VIP
EM_PROD_PRICE_TYPE_NEW_USER = 2, //新用户
EM_PROD_PRICE_TYPE_ACT = 3, //活动
      }
      

      declare enum EM_PRICE_PRIVIL {
        EM_PRIVILEGE_VIP = 1, //视频会员
      }
      

      declare enum EM_PAGE_TYPE {
        EM_PAGE_LIST = 1, //列表页（废弃
EM_PAGE_SUBJECT = 2, //IP专题页（废弃
EM_PAGE_ACT_TOPIC = 100, //活动主题货架
EM_PAGE_HOME = 0, //首页货架
EM_PAGE_NORMAL = 101, //普通货架
      }
      
// 文本结构
      interface STTitleInfo {
        strTitle?: string; 
strTitleUrl?: string; 
      }
      
// 视频结构
      interface STVideoInfo {
        strVid?: string; 
strCoverUrl?: string; 
      }
      
// 图片结构
      interface STImgInfo {
        strImgUrl?: string; 
strLinkUrl?: string; 
strImgTitle?: string; 
      }
      
// 视频及多图结构
      interface STVideoBanner {
        stVideo?: STVideoInfo; //视频信息
stBackGroundHead?: STImgInfo; //头部背景
stBackGroundTail?: STImgInfo; //尾部背景
      }
      
// 推荐人信息
      interface STRecomManInfo {
        strId?: string; //ID
strName?: string; //名字
strPic?: string; //头像
      }
      
// 推荐信息
      interface STRecomInfo {
        bHasRecomMan?: boolean; 
stMan?: STRecomManInfo; //推荐人
strRecomText?: string; //推荐语
stMainImg?: STImgInfo; //主图
      }
      
// 内容banner结构
      interface STContentBanner {
        stTitleInfo?: STTitleInfo; //标题和跳转链接
stRecomInfo?: STRecomInfo; //推荐信息
      }
      
// 背景及多图结构
      interface STImgBanner {
        stBackGround?: STImgInfo; //背景图
vecImgInfo?: STImgInfo[]; //图片列表地址
stTitleInfo?: STTitleInfo; //标题
      }
      
// 特权信息
      interface STPriviInfo {
        iPrivilegeId?: number; //特权id，参考emPricePrivilege
uiDiscount?: number; //特权抵扣的金额
bIsMatch?: boolean; 
      }
      
// 单一IP结构
      interface STIPInfo {
        strIPId?: string; //IP_ID
strTitle?: string; //IP_名称
strImgDesc?: string; //IP详情图片
iProdNum?: number; //IP下商品数
vecProdImg?: string[]; //IP下商品抠图
strMattingPic?: string; //抠图
uiColor?: number; //底色
vecColor?: unsignedint[]; //颜色组颜色
strUrl?: string; //聚合页链接
      }
      
// 单一活动结构
      interface STActInfo {
        strActId?: string; //活动ID
strMattingPic?: string; //活动图片
uiColor?: number; //活动主题色组
vecColor?: unsignedint[]; //活动颜色
iStartTime?: number; //秒杀开始时间
iEndTime?: number; //秒杀结束时间
iActType?: number; //活动类型			1 -- 系统，2--运营 3秒杀 4 线下
      }
      
// 单一类目结构
      interface STCatInfo {
        strCatId?: string; 
strMattingPic?: string; //抠图
strTitle?: string; //名字
      }
      
// 单一优惠券结构
      interface STCouponInfo {
        strId?: string; //批次Id
uiThreshold?: number; //门槛
uiDiscount?: number; //抵扣金额
iCouponType?: number; //券类型
strShortTitle?: string; //简称
strKey?: string; //优惠券秘钥
bHasIdentityLimit?: boolean; //是否有身份限制
vecIdentityLimit?: unsignedint[]; //身份规则
uiUseType?: number; //适用范围，透传优惠券的字段
iPercent?: number; //折扣券折扣百分比，比如10%折扣填10
strCouponContent?: string; //优惠券说明
uiCouponNum?: number; //总数
uiReceivedNum?: number; //已领取数量
      }
      
// 商品结构
      interface STProductInfo {
        strProductId?: string; //商品ID
strTitle?: string; //商品名
strImgDesc?: string; //商品详情图片
uiVCoinPrice?: number; //组合价中的V币价格
uiCashPrice?: number; //组合价中的现金价格
uiOriPrice?: number; //原价
uiPureVCoinPrice?: number; //纯V价格，单位：分
uiPureCashPrice?: number; //纯现金价格，单位：分
uiSale?: number; //销量
strMattingImg?: string; //商品抠图
strIpId?: string; //商品IPId
strIpName?: string; //商品ID名称
vecIp?: STIPInfo[]; //商品所属IP列表，不包含图片
uiRealPrice?: number; //实际显示价格，可能是特权价格
uiExpectPrice?: number; //期望价格
vecRealPriceTag?: STPriceTag[]; //最终价格标签
vecExpectPriceTag?: STPriceTag[]; //期望价格标签
uiSpreadPrice?: number; //推广价格
vecSpreadPriceTag?: STPriceTag[]; //推广价格标签
uiColor?: number; //底色
vecSearchWord?: string[]; //商品关键词
iQuantity?: number; //商品库存
strConfText?: string; //配置文案，用于每日推荐模块
vecColor?: unsignedint[]; //颜色组颜色，用于每日推荐模块
strSecCatId?: string; //二级类目ID
strScript?: string; //商品角标
vecScript?: STScriptInfo[]; //商品角标，28 字段废弃
vecActScript?: STScriptInfo[]; //活动角标
stCredict?: STCredictInfo; //积分配置
      }
      
// 背景及多商品结构
      interface STProductBanner {
        stBackGround?: STImgInfo; //背景图
vecProductInfo?: STProductInfo[]; //商品列表
stTitleInfo?: STTitleInfo; //标题
stIPInfo?: STIPInfo; //IP信息
uiProdRow?: number; //商品行数
uiProdCol?: number; //商品列数
stActInfo?: STActInfo; //活动信息
iInfoType?: number; //模块配置的ID类型，1--一级类目ID，2--IP ID 3--活动ID
      }
      
// 多IP横划结构
      interface STMultiIpBanner {
        stTitleInfo?: STTitleInfo; //标题
vecInfo?: STProductBanner[]; //IP对应信息
      }
      
// 多优惠券结构
      interface STCouponBanner {
        stTitleInfo?: STTitleInfo; 
vecCouponInfo?: STCouponInfo[]; 
      }
      
// 背景及多IP结构
      interface STIPBanner {
        stBackGround?: STImgInfo; //背景图
vecIPInfo?: STIPInfo[]; //IP列表
stTitleInfo?: STTitleInfo; //标题
stSubTitle?: STTitleInfo; //横划标题
vecCatInfo?: STCatInfo[]; //一级类目信息
iInfoType?: number; //1 -- 一级类目，2 --二级IP 3-- 活动
bNoColor?: boolean; //不使用颜色组配置
      }
      

      interface STModuleData {
        emModType?: number; //模块类型（对应EM_MOD_TYPE）
emReqType?: number; //请求类型（对应EM_REQ_TYPE）
strDataKey?: string; //请求模块子服务所需的DataKey
strJsData?: string; //模块对应的Json结构
strPageContext?: string; //下一页的翻页上下文
strModName?: string; //模块名称
iModGap?: number; //模块间隔
bShowName?: boolean; //是否显示名字
strModId?: string; //模块ID
      }
      

      declare enum E_PARAM_TYPE {
        E_TYPE_PRI_CAT = 1, 
E_TYPE_SEC_IP = 2, 
E_TYPE_ACT = 3, 
E_TYPE_SECKILL_ACT = 4, 
E_TYPE_PROD_POOL = 5, 
      }
      
// 页面分享设置
      interface STPageShareInfo {
        strTitle?: string; 
strSubTitle?: string; 
strImg?: string; 
      }
      

      interface STPageConfData {
        iType?: number; //货架类型，对应EM_PAGE_TYPE
strName?: string; //货架名称
iParamType?: number; //ID类型
strId?: string; //ID 
strIdExt?: string; //ID 附带的额外信息，二级IP的一级IP
bHasFeed?: boolean; //是否有Feed流
uiColorGroup?: number; //主题色组
vecColor?: unsignedint[]; //主题色
strPageId?: string; //货架Id
stShareInfo?: STPageShareInfo; //分享设置
      }
      
// 专题页请求
      interface STPageDataReq {
        iPageId?: number; //请求的页面ID
iPageSize?: number; //一页多少项（不超过5）
strPageContext?: string; //翻页上下文
strDataKey?: string; //固定页面需要提供Datakey（iPageType=1&&strIPId=1）
      }
      

      interface STPageDataRsp {
        iErrCode?: number; //错误码
strErrMsg?: string; //错误码
vecModData?: STModuleData[]; //UI显示Json，每一行是一个显示元素
strPageContext?: string; //翻页上下文
bHasNext?: boolean; //是否还有下一页
ddwCacheTime?: number; //后台用的缓存时间戳（前端不关心）
strPageConf?: string; //页面配置信息（Json格式）
      }
      
// 模块子请求
      interface STModuleDataReq {
        strDataKey?: string; //请求strDataKey
strPageContext?: string; //翻页上下文
      }
      

      interface STModuleDataRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stModuleData?: STModuleData; //控件数据
strPageContext?: string; //翻页上下文
bHasNext?: boolean; //是否还有下一页
ddwCacheTime?: number; //后台用的缓存时间戳（前端不关心）
      }
      
  