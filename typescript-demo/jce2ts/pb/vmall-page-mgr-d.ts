
  
  
      declare enum EMPageMgrCmd {
        E_GET_MOD_CONF_CMD = 0xf630, 
E_SAVE_MOD_CMD = 0xf631, 
E_PUB_PAGE_CMD = 0xf632, 
E_DEL_MOD_CMD = 0xf633, 
E_GET_TRASH_CMD = 0xf634, 
E_DEL_TRASH_CMD = 0xf635, 
E_RECOVER_TRASH_CMD = 0xf636, 
E_GET_TRASH_CNT_CMD = 0xf637, 
E_SAVE_PAGE_CONF_CMD = 0xf83c, //保存页面配置信息
E_GET_PAGE_LIST_CMD = 0xf83d, //获取货架列表
E_DEL_PAGE_CMD = 0xf841, //删除货架
E_OP_PAGE_CMD = 0xfa60, //货架操作
E_PAGE_MGR_NOTIFY = 0xfab0, //货架中转，线上
E_PAGE_MGR_NOTIFY_TEST = 0xfaaf, //货架中转，测试
      }
      
// 模块图片信息
      interface STModExtData {
        strModId?: string; //模块ID
strImgUrl?: string; //图片url
strImgDesc?: string; //图片描述
iImgType?: number; //图片类型
strLinkUrl?: string; //跳转链接
      }
      

      declare enum E_PARAM_TYPE {
        E_TYPE_PRI_CAT = 1, 
E_TYPE_SEC_IP = 2, 
E_TYPE_ACT = 3, 
E_TYPE_SECKILL_ACT = 4, 
E_TYPE_PROD_POOL = 5, 
      }
      
// 删除货架
      interface STDelPageReq {
        strPageId?: string; 
      }
      

      interface STDelPageRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
// 保存页面配置信息
      interface STSavePageConfReq {
        stPageConf?: STPageConfData; 
      }
      

      interface STSavePageConfRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strPageId?: string; 
      }
      

      declare enum EMPageStatus {
        E_PAGE_STATUS_DELETE = 0, 
E_PAGE_STATUS_ONLINE = 1, 
E_PAGE_STATUS_OFFLINE = 2, 
      }
      

      declare enum EMPageOpType {
        E_PAGE_OP_DELETE = 0, 
E_PAGE_OP_ONLINE = 1, 
E_PAGE_OP_OFFLINE = 2, 
      }
      

      interface STOpPageReq {
        iOpType?: number; 
strPageId?: string; 
      }
      

      interface STOpPageRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iNewStatus?: number; 
iModifyTime?: number; 
      }
      
// 货架列表信息
      interface STPageBaseData {
        strId?: string; 
strName?: string; 
iType?: number; 
iCreateTime?: number; 
strUrl?: string; 
iModifyTime?: number; //最近编辑时间
iStatus?: number; //状态
      }
      
// 获取货架列表
      interface STGetPageListReq {
        iType?: number; //0x01 按页码翻页
iPageSize?: number; 
iCurPage?: number; 
      }
      

      interface STGetPageListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecPage?: STPageBaseData[]; 
iTotal?: number; 
      }
      
// 商品相关的配置数据
      interface STProdConfData {
        strProdId?: string; //商品ID
strProdText?: string; //商品配置文案
uiColor?: number; //商品底色
strBackImg?: string; //商品背景图
strConfTitle?: string; //配置标题
      }
      
// IP/类目/活动相关的配置数据  ，新的商品基础货架使用
      interface STIpConfData {
        strId?: string; //配置ID
iIdType?: number; //ID 类型，对应E_PARAM_TYPE
strPriId?: string; //一级ID，IP和类目使用
strTitle?: string; //主标题
strSubTitle?: string; //副标题
vecConfProd?: STProdConfData[]; //干预商品
strBackImg?: string; //背景图，一个IP一个背景
strMatImg?: string; //抠图，IP或者活动的抠图，用于频道页卡头部
vecEditTitleProd?: STProdConfData[]; //只换名字的商品,只用于秒杀模块
      }
      
// 图片配置数据
      interface STImgConfData {
        strImgUrl?: string; 
strJmpUrl?: string; 
      }
      
// 推荐语相关配置数据  ,目前用于内容banner模块
      interface STRecomConfData {
        bHasRecomMan?: boolean; 
strManId?: string; //推荐人ID
strText?: string; //推荐语
stMainImg?: STImgConfData; //主图
      }
      
// 今日推荐模块配置、单商品广告模块
      interface STMultiProdConfData {
        vecProd?: STProdConfData[]; 
      }
      
// IP小图横划配置,频道页头部模块，多秒杀活动模块
      interface STMultiIpConfData {
        vecIp?: STIpConfData[]; 
strTitle?: string; //横划标题
bNoColor?: boolean; //是否拉取色值, 默认拉取
      }
      
// 底部文案模块配置
      interface STTextConfData {
        strText?: string; //文案
strUrl?: string; //跳转链接
      }
      
// 视频双背景图配置
      interface STVideoConfData {
        strVid?: string; 
strCoverUrl?: string; 
strHeadImg?: string; 
strTailImg?: string; 
      }
      

      interface STCouponConfData {
        strId?: string; //批次Id
      }
      
// 多优惠券模块配置
      interface STMultiCouponConfData {
        vecCoupon?: STCouponConfData[]; 
      }
      
// 模块配置信息
      interface STModConfData {
        strModId?: string; //模块ID
strPageId?: string; //页面ID
iModType?: number; //模块类型
strModDesc?: string; //模块描述
strModParam?: string; //模块参数
iOrder?: number; //顺序Id
vecDefId?: string[]; //干预ID，商品ID或者IP ID
vecExtData?: STModExtData[]; //模块图片内容
iParamType?: number; //模块参数类型   1--Cat 2--Ip 3 --act
strTitleUrl?: string; //标题的跳转链接
uiModColor?: number; //模块配置底色，只用于主题3商品模块
uiProdRow?: number; //商品行数
uiProdCol?: number; //商品列数
strJsModData?: string; //模块配置参数，json串形式，不同类型的模块有不同的配置，都转成json串存到这个字符串里面,新增的模块都使用这个字段
iModGap?: number; //模块间隔
bShowName?: boolean; //是否显示名字
      }
      
// 编辑模块，获取原有的模块配置数据
      interface STGetModConfReq {
        strModId?: string; 
      }
      

      interface STGetModConfRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stModData?: STModConfData; 
      }
      
// 保存模块
      interface STSaveModReq {
        stModData?: STModConfData; 
      }
      

      interface STSaveModRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strModId?: string; //返回新的模块ID
      }
      
// 发布时的模块数据
      interface STModPubData {
        strModId?: string; 
iOrder?: number; 
      }
      
// 页面发布
      interface STPubPageReq {
        strPageId?: string; //首页填“1”
vecMod?: STModPubData[]; 
      }
      

      interface STPubPageRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
// 回收站模块数据
      interface STTrashModData {
        strModId?: string; 
stData?: STModuleData; //模块历史快照数据
iDelTime?: number; //删除时间
strPageId?: string; //货架ID
      }
      
// 删除模块，进回收站
      interface STDelModReq {
        stMod?: STTrashModData; 
      }
      

      interface STDelModRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iTotal?: number; 
      }
      

      declare enum EMPageType {
        E_PAGE_CONTEXT = 0x01, //上下文翻页
E_PAGE_NUMBER = 0x02, //页码翻页
      }
      
// 读取回收站数据
      interface STGetTrashReq {
        iPageType?: number; //翻页方式，0x01 上下文翻页，0x02页码翻页
iPageSize?: number; 
iCurPage?: number; 
strPageContext?: string; 
strPageId?: string; 
      }
      

      interface STGetTrashRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecMod?: STTrashModData[]; 
strContext?: string; 
iTotal?: number; 
bHasNext?: boolean; 
      }
      
// 从回收站删除
      interface STDelTrashReq {
        strModId?: string; 
strPageId?: string; 
      }
      

      interface STDelTrashRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iTotal?: number; 
      }
      
// 从回收站恢复
      interface STRecTrashReq {
        strModId?: string; 
      }
      

      interface STRecTrashRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strNewModId?: string; //恢复时返回一个新的模块ID
iTotal?: number; 
      }
      
// 获取回收站总数
      interface STGetTrashCntReq {
        iType?: number; 
strPageId?: string; 
      }
      

      interface STGetTrashCntRsp {
        iErrCode?: number; 
strErrMsg?: string; 
iTotal?: number; 
      }
      

      declare enum EMPageMgrNotifyType {
        E_PAGE_PUBLISH = 100, //页面发布
      }
      

      interface STPageMgrNotifyReq {
        iType?: number; //对应EMPageMgrNotifyType
strPageId?: string; 
vecProdPool?: string[]; 
      }
      
  