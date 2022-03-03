
  
  // 测试环境：10.49.107.200:35666
// 正式环境：
      declare enum emSubCmd {
        CMD_MGT_READ_POSTAGE_LIST = 0xf643, // 管理台读列表
CMD_MGT_READ_POSTAGE_INFO = 0xf6e8, // 管理台读详情
CMD_MGT_WRITE_POSTAGE = 0xf644, // 管理台写
CMD_USER_READ_POSTAGE = 0xf645, // 用户读
      }
      

      declare enum emErrCode {
        RT_QUERY_READ_ERROR = 2001, 
RT_QUERY_WRITE_ERROR = 2002, 
RT_GET_SELLER_NAME_ERROR = 2003, 
RT_SELLERID_INVALID_ERROR = 2004, 
RT_RIGHT_NOT_ENOUGH_ERROR = 2005, 
RT_TYPE_INVALID_ERROR = 2006, 
RT_GET_USER_INFO_ERROR = 2007, 
RT_GET_ADDR_INFO_ERROR = 2008, 
      }
      

      declare enum emPostageCalcType {
        PCT_FIXED = 1, // 固定运费
PCT_BY_WGT = 2, // 根据重量计费
PCT_BY_VOL = 3, // 根据体积计费
PCT_BY_NUM = 4, // 根据件数计费
      }
      

      declare enum emAreaId {
        AI_DEFAULT = 100000, // 默认地址ID
      }
      

      interface STSellerInfo {
        strSellerId?: string; 
strSellerName?: string; 
      }
      

      declare enum emBaoType {
        BT_PRICE = 1, // 金额(xx元以上)
BT_WEIGHT = 2, // 重量(xx克以下)
BT_VOLUME = 3, // 体积(xx立方厘米以下)
BT_NUM = 4, // 件数(xx件以上)
BT_PRICE_AND_WEIGHT = 5, // 金额+重量
BT_PRICE_AND_VOLUME = 6, // 金额+体积
BT_PRICE_AND_NUM = 7, // 金额+件数
      }
      

      interface STBaoPostageConf {
        vecAreaId?: unsignedint[]; // 包邮覆盖区域
iType?: number; // 包邮类型，取自emBaoType
dwParam1?: number; // 参数1，必填
dwParam2?: number; // 参数2，选填
      }
      

      interface STPostage {
        dwBaseVal?: number; // 首重(单位：克) 首体积(单位：立方厘米) 首件数(单位：1) 
dwBasePr?: number; // 首费, 单位：分
dwContVal?: number; // 续重 续体积 续件数
dwContPr?: number; // 续费
      }
      

      interface STPostageConf {
        vecAreaId?: unsignedint[]; // 区域,为空表示默认
dwPostage?: number; // 固定运费 
stPostage?: STPostage; // 根据重量or体积or件数计费
      }
      

      interface STPostageInfo {
        ddwPostageId?: number; // 运费模板ID,1000001起
strPostageName?: string; // 运费模板名
stSellerInfo?: STSellerInfo; // 商家信息
strAddr?: string; // 发货地址
strPhone?: string; // 手机号(回寄地址)
bMian?: boolean; // 是否免邮
bBao?: boolean; // 是否包邮
iCalcType?: number; // 计费类型，取自emPostageCalcType的值
vecBaoPostageConf?: STBaoPostageConf[]; // 包邮配置
vecPostageConf?: STPostageConf[]; // 邮费配置
strRemark?: string; // 备注
      }
      
//  管理台读运费列表
      interface STMgtReadPostageListReq {
        iReqNum?: number; 
iCurPage?: number; // 仅支持页码翻页
iGetAll?: number; 
      }
      

      interface STMgtReadPostageListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecPostageInfo?: STPostageInfo[]; 
iTotNum?: number; 
      }
      
//  管理台读运费详情
      interface STMgtReadPostageInfoReq {
        ddwPostageId?: number; 
      }
      

      interface STMgtReadPostageInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stPostageInfo?: STPostageInfo; 
      }
      
//  管理台写运费
      interface STMgtWritePostageReq {
        iType?: number; // =1:新增 =2:修改 =3:删除 
stPostageInfo?: STPostageInfo; 
iModType?: number; // =0:默认，全都修改 =1：修改基本信息 =2：修改包邮策略 =3：修改运费策略
      }
      

      interface STMgtWritePostageRsp {
        iErrCode?: number; 
strErrMsg?: string; 
ddwPostageId?: number; // 新增时返回 
      }
      
//  C端读
      interface STPostageArea {
        ddwPostageId?: number; // 运费ID
dwAreaId?: number; // 地区ID
      }
      

      interface STUserReadInfo {
        bMian?: boolean; // 是否免邮，=0时以下有效
bBao?: boolean; // 是否包邮，=1时4有效
iCalcType?: number; // 计费方式，取自emPostageCalcType
mapBaoPostageConf?: {
      [prop: undefined]: STBaoPostageConf
    }; // 包邮配置
mapPostageConf?: {
      [prop: undefined]: STPostageConf
    }; // 计费配置
strPostageName?: string; 
      }
      

      interface STUserReadPostageReq {
        vecPostageArea?: STPostageArea[]; 
      }
      

      interface STUserReadPostageRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapId2Info?: {
      [prop: number]: STUserReadInfo
    }; // 运费ID - 信息 
      }
      
  