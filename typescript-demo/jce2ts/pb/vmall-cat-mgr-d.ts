
  // 测试环境L5：64393857:65536
  
      declare enum VmallCatRet {
        E_INPUT_INVALID = 1002, //无效请求
E_SERVER_ERROR = 1003, //服务器错误
E_NO_AUTH = 1004, //没有权限
E_OPERATE_NO_ALLOW = 1005, //操作不允许，删除仍有商品的分类时使用
      }
      

      declare enum VmallCatCmd {
        E_GET_PRI_LIST_CMD = 0xf34f, //获取一级类目列表
E_GET_IP_LIST_CMD = 0xf350, //获取二级IP列表
E_MODIFY_PRI_IP_CMD = 0xf351, //修改一级IP类目
E_MODIFY_SEC_IP_CMD = 0xf352, //修改二级IP分类
E_GET_CAT_LIST_CMD = 0xf353, //获取二级真实类目列表
E_MODIFY_PRI_CAT_CMD = 0xf354, //修改一级真实类目
E_MODIFY_SEC_CAT_CMD = 0xf355, //修改二级真实类目
E_GET_SIM_LIST_CMD = 0xf376, //获取简单类目列表
E_GET_IP_CMD = 0xf397, //根据ID批量获取二级IP类目信息
E_GET_CAT_CMD = 0xf3a1, //根据ID批量获取二级真实类目信息
E_GET_COMM_DATA_CMD = 0xf4af, //根据ID批量获取名字等公共信息，不区分真实还是IP
E_GET_PRI_BY_PAGE_CMD = 0xf4be, //按页获取一级类目数据
      }
      

      declare enum emCatType {
        E_CAT_TYPE_REAL = 1, 
E_CAT_TYPE_IP = 2, 
      }
      

      interface STPriIpData {
        strId?: string; //ID
strName?: string; //中文名
strDesc?: string; //描述
iStatus?: number; //状态
      }
      

      interface STSecIpData {
        strId?: string; 
strName?: string; //名称
strPid?: string; //父类目ID
strPname?: string; //父类目名称	
strCid?: string; //关联CID
strLid?: string; //关联LID
strHorPic?: string; //横版图片
strVerPic?: string; //竖版图片
strDesc?: string; //类目介绍
iStatus?: number; //四期新增字段s//状态
strMattingPic?: string; //抠图
uiProdNum?: number; //商品数
vecProd?: string[]; //前三商品
uiColor?: number; //底色
vecColor?: unsignedint[]; //
vecSynonym?: string[]; //同义词
strUrlTitle?: string; //聚合页链接名称
strUrl?: string; //聚合页链接
      }
      
// 根据ID批量拉取IP的信息
      interface STGetIpReq {
        vecId?: string[]; 
      }
      

      interface STGetIpRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapIpData?: {
      [prop: string]: STSecIpData
    }; //不包含错误ID对应的数据
      }
      
// 根据条件查询IP二级类目
      interface STGetIpListReq {
        strPid?: string; //一级类目ID
mapCondition?: {
      [prop: string]: string
    }; //查询条件，用map以后方便扩展
iPageSize?: number; //翻页参数
iPage?: number; //从1开始
      }
      

      interface STGetIpListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecIpData?: STSecIpData[]; 
stPriIp?: STPriIpData; 
iTotal?: number; 
      }
      

      declare enum emModifyType {
        E_ADD = 1, 
E_MODIFY = 2, 
E_DELETE = 3, 
      }
      
// 修改1级IP分类
      interface STModifyPriIpReq {
        iType?: number; 
stData?: STPriIpData; 
      }
      

      interface STModifyPriIpRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strId?: string; 
      }
      
// 修改2级IP分类
      interface STModifySecIpReq {
        iType?: number; 
stData?: STSecIpData; 
      }
      

      interface STModifySecIpRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strId?: string; 
      }
      

      interface STCatPropData {
        strId?: string; 
strName?: string; 
bIsSku?: boolean; 
      }
      
// 真实一级类目
      interface STPriCatData {
        strId?: string; //ID 
strName?: string; //名字
iStatus?: number; //状态
      }
      
// 真实二级类目
      interface STSecCatData {
        strId?: string; //	ID 
strName?: string; //名字
strPid?: string; //父类目ID
strPname?: string; //父类目名称
strVerPic?: string; 
strHorPic?: string; 
vecProp?: STCatPropData[]; //类目配置的属性
iStatus?: number; 
uiTaxRate?: number; //税率，单位 万分之一
vecSynonym?: string[]; //同义词
      }
      
// 根据ID批量拉取真实二级真实类目的信息
      interface STGetCatReq {
        vecId?: string[]; 
      }
      

      interface STGetCatRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapCatData?: {
      [prop: string]: STSecCatData
    }; //不包含错误ID对应的数据
      }
      
// 根据条件查询真实二级类目
      interface STGetCatListReq {
        strPid?: string; //一级类目ID
mapCondition?: {
      [prop: string]: string
    }; //查询条件，用map以后方便扩展
iPageSize?: number; //翻页参数
iPage?: number; 
      }
      

      interface STGetCatListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecCatData?: STSecCatData[]; 
stPriCat?: STPriCatData; 
iTotal?: number; 
      }
      
// 修改真实一级分类
      interface STModifyPriCatReq {
        iType?: number; 
stData?: STPriCatData; 
      }
      

      interface STModifyPriCatRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strId?: string; 
      }
      

      interface STModifySecCatReq {
        iType?: number; 
stData?: STSecCatData; 
      }
      

      interface STModifySecCatRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strId?: string; 
      }
      

      declare enum emGetPriListType {
        E_PRI_ALL = 0, //全部一级类目
E_PRI_CAT = 1, //只获取一级真实类目
E_PRI_IP = 2, //只获取一级IP类目
      }
      
// 获取所有一级类目  0xf34f
      interface STGetPriListReq {
        iType?: number; //
      }
      

      interface STGetPriListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecCatData?: STPriCatData[]; 
vecIpData?: STPriIpData[]; 
      }
      
// 获取一级和二级简单类目列表，用于发布商品页面选择类别
      interface STSecSimData {
        strId?: string; 
strName?: string; 
strPid?: string; 
iType?: number; 
      }
      

      interface STPriSimData {
        strId?: string; 
strName?: string; 
iType?: number; 
vecSecData?: STSecSimData[]; 
      }
      

      interface STGetSimListReq {
        iType?: number; 
      }
      

      interface STGetSimListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecPriData?: STPriSimData[]; 
      }
      
// 查IP和类别名字的公共结构体
      interface STCommData {
        strId?: string; 
strName?: string; 
strPid?: string; 
      }
      
// 批量获取IP或Cat的名字
      interface STGetCommDataReq {
        vecId?: string[]; 
      }
      
// 回包
      interface STGetCommDataRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapId2Data?: {
      [prop: string]: STCommData
    }; 
      }
      
// 一级类目列表的数据(翻页）
      interface STCommPriData {
        strId?: string; 
strName?: string; 
uiSecNum?: number; 
strDesc?: string; 
      }
      

      interface STGetPriByPageReq {
        iType?: number; 
iPageSize?: number; 
iPage?: number; 
      }
      

      interface STGetPriByPageRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecData?: STCommPriData[]; 
iTotal?: number; 
      }
      
  