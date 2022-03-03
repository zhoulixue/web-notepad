
  //  测试CL5 913345:786432
  
      declare enum emVMallPoolCmd {
        E_GET_POOL_LIST_CMD = 0xfa13, //商品池列表（B端）
E_ADD_EDIT_POOL_CMD = 0xfa14, //添加修改商品池（B端）
E_OPERATE_POOL_CMD = 0xfa15, //操作商品池（删除、上线）（B端）   
E_GET_POOL_INFO_CMD = 0xfa16, //商品池详情  （B端）
E_GET_POOL_SCOPE_INFO_CMD = 0xfa2c, //商品池范围信息拉取（活动模块，搜索模块）
E_POOL_NOTIFY_CMD = 0xfa2d, //商品池货架绑定操作s//商品池更新中转
      }
      
// 商品池状态（直接与数据库对应）
      declare enum PoolStatus {
        E_STATUS_EDIT = 0, //编辑中       	        
E_STATUS_ON_LINE = 1, //上线（正常）         
E_STATUS_DELETE = 2, //已删除 	                
      }
      
//  商品范围信息类型
      declare enum EMProdType {
        E_ALL_PROD = 1, //全部商品（参与条件无效，剔除条件有效）
E_SOME_PROD = 2, //部分商品（参与条件剔除条件均有效）
      }
      
// 商品池范围信息
      interface STScopeInfo {
        iType?: number; //类型：1全部商品，2部分商品
vecAddCon?: STConInfo[]; //参与条件
vecDelCon?: STConInfo[]; //剔除条件
      }
      
// 商品池池基本信息
      interface STPoolBaseInfo {
        strId?: string; //商品池ID
strName?: string; //商品池名称
iStatus?: number; //当前状态 
iLastModityTime?: number; //最近修改时间                                   
      }
      
// 商品池详细信息
      interface STPoolInfo {
        stPoolBaseInfo?: STPoolBaseInfo; //商品池基本信息
strDesc?: string; //商品池说明
stScopeInfo?: STScopeInfo; //商品池范围   
vecActivityId?: string[]; //关联活动ID
vecShelvesId?: string[]; //关联货架ID
      }
      
// 商品池池范围信息 
      interface STPoolScopeInfo {
        strId?: string; //商品池ID
strName?: string; //商品池名称、
stScopeInfo?: STScopeInfo; //商品池范围
      }
      
// 条件：name,status
      interface STGetPoolListReq {
        iPage?: number; //页码
iPageSize?: number; //分页大小
mapCondition?: {
      [prop: string]: string
    }; //查询条件
      }
      

      interface STGetPoolListRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecPoolBaseInfo?: STPoolBaseInfo[]; //本页商品池基础信息
iTotal?: number; //满足条件的全部商品池数量
      }
      

      declare enum EMAddEditPoolType {
        E_ADD_POOL = 1, //全部商品（参与条件无效，剔除条件有效）
E_EDIT_POOL = 2, //部分商品（参与条件剔除条件均有效）
      }
      
// 新增修改商品池  E_ADD_EDIT_POOL_CMD = 0xfa14
      interface STAddEditPoolReq {
        iType?: number; //1 新增、2 修改
stPoolInfo?: STPoolInfo; //商品信息
      }
      

      interface STAddEditPoolRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strPoolId?: string; //新增返回商品池ID
      }
      
// 删除、上线 商品池 E_OPERATE_POOL_CMD = 0xfa15
      interface STOperatePoolReq {
        iType?: number; //1上线、 2删除 
strPoolId?: string; //商品池ID
      }
      

      interface STOperatePoolRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strPoolId?: string; //返回商品池ID
      }
      
// 读取商品池详情 E_GET_POOL_INFO_CMD = 0xfa16
      interface STGetPoolInfoReq {
        vecPoolId?: string[]; 
      }
      

      interface STGetPoolInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapPoolInfo?: {
      [prop: string]: STPoolInfo
    }; //商品池详情s//3 optional vector<STPoolInfo> vecPoolInfo;          s//商品池详情
      }
      
// 读取商品池范围信息 E_GET_POOL_SCOPE_INFO_CMD = 0xfa2c
      interface STGetPoolScopeInfoReq {
        vecPoolId?: string[]; 
      }
      

      interface STGetPoolScopeInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
mapPoolScopeInfo?: {
      [prop: string]: STPoolScopeInfo
    }; //商品池范围信息列表s//3 optional vector<STPoolScopeInfo> vecPoolScopeInfo;    s//商品池范围信息列表
      }
      
// 商品池更新类型
      declare enum EMPoolNotifyType {
        E_NOTIFY_POOL_ADD = 1, //添加
E_NOTIFY_POOL_EDIT = 2, //修改
E_NOTIFY_POOL_ONLINE = 3, //上线
E_NOTIFY_POOL_DELETE = 4, //删除
      }
      
// 商品池更新中转  E_POOL_NOTIFY_CMD = 0xfa2d
      interface STPoolNotifyReq {
        iType?: number; 
strId?: string; //商品池ID
stScopeAddInfo?: STScopeInfo; //变更添加的范围
stScopeDelInfo?: STScopeInfo; //变更删除的范围
      }
      
// 货架商品池绑定操作类型
      declare enum EMShelvesPoolLinkType {
        E_SHELVES_POOL_LINK_ADD = 1, //绑定
E_SHELVES_POOL_LINK_DEL = 2, //解绑
      }
      
// 货架绑定，解绑商品池 E_SHELVES_POOL_LINK_CMD	= 0xfa37
      interface STShelvesPoolLinkReq {
        iType?: number; 
strPoolId?: string; //商品池ID
strShelvesId?: string; //货架ID 
      }
      

      interface STShelvesPoolLinkRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
  