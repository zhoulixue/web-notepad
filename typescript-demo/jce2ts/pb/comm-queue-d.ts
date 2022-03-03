
  
  // 测试L5:
// IP:10.49.123.228:23579
// L5:599873:4718592
// 正式L5:
// L5:
      declare enum CMD {
        INSERT_QUEUE = 0xf8be, //插入通用队列系统
MODIFY_SOURCE = 0xf8bf, //设置通用队列资源
CHECK_NODE = 0xf8c0, //检查节点执行结果
DELETE_NODE = 0xf8c1, //从通用队列中删除指定节点
PUSH_NODE = 0xf8c5, //通用队列发出的节点请求
      }
      
// 请求状态
      declare enum RT_CODE {
        RT_OK = 0, 
      }
      
// 节点状态
      declare enum NODE_STATUS {
        STATUS_INIT = 0, 
STATUS_FINISH = 1, //完成
STATUS_QUEUING = 2, //排队中
STATUS_FULL = 3, //队列已满
STATUS_DESERT = 4, //节点已过期，执行情况未知
STATUS_SRC_LACK = 5, //资源不足
STATUS_UNKNOWN = 6, //底层错误，执行情况未知
      }
      
// 节点标签结构
      interface STNodeTag {
        strNodeKey?: string; //节点Key
ddwSeqNum?: number; //排第几
dwNodeStatus?: number; //节点状态
strResult?: string; //执行返回的结果映射Key
      }
      
// 资源信息结构
      interface STSourceInfo {
        strSourceId?: string; //资源ID
ddwSourceNum?: number; //资源数
      }
      
// 节点信息结构
      interface STNodeData {
        strNodeMsg?: string; //队列透传给后端的数据，业务自定
vecSrc?: STSourceInfo[]; //可选需要消耗的资源列表
      }
      

      interface STQueueUpReq {
        strAppId?: string; //请求的业务ID
stNodeData?: STNodeData; //节点信息
strNodeKey?: string; //节点标签
iRouteCount?: number; //路由计数（路由用，业务置0）
      }
      

      interface STQueueUpRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stNodeTag?: STNodeTag; //返回的节点状态
      }
      

      interface STCheckQueueReq {
        strAppId?: string; //请求的业务ID
strNodeKey?: string; //节点标签
iRouteCount?: number; //路由计数（路由用，业务置0）
      }
      

      interface STCheckQueueRsp {
        iErrCode?: number; 
strErrMsg?: string; 
stNodeTag?: STNodeTag; //返回的节点状态
iPollGap?: number; //下发轮询间隔
      }
      
// 设置业务资源信息
      interface STModifySourceInfoReq {
        strAppId?: string; //设置的业务ID
vecSrc?: STSourceInfo[]; //设置的资源数
      }
      

      interface STModifySourceInfoRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      

      interface STDeleteNodeReq {
        strAppId?: string; //请求的业务ID
strNodeKey?: string; //删除的节点
iRouteCount?: number; //路由计数（路由用，业务置0）
      }
      

      interface STDeleteNodeRsp {
        iErrCode?: number; 
strErrMsg?: string; 
      }
      
// 节点推送请求
      interface STPushNodeReq {
        strAppId?: string; //请求的业务ID
stNodeData?: STNodeData; //请求参数
      }
      

      interface STPushNodeRsp {
        iErrCode?: number; 
strErrMsg?: string; 
strResult?: string; //执行返回的结果映射Key
      }
      
  