
  // @brief:
// doki
// api接口协议
// auth：beepeng
// time：2018.03.29
  // @brief:机器环境信息
// 测试L5:
// 879425:65536
// 测试IP:
// 10.175.108.238:20177
// 线上L5:
// 891841:65536
      declare enum ECmd {
        CMD_GET_DOKI_INFO = 0xf52d, // 读取doki信息
      }
      

      declare enum EGetType {
        E_GET_BY_DOKIID = 1, //读取单个doki id的信息
E_GET_BY_VID = 2, //web端根据vid的相关人员信息 读取doki列表信息
E_GET_BY_ACTIVITY = 3, //读取该活动所有选手列表信息
      }
      
//  doki头像信息
      interface stDokiImgInfo {
        strHeadImg?: string; //头图
strBackImg?: string; //背景图
strColorImg?: string; //抠图
      }
      
//  doki信息
      interface stDokiInfo {
        lDokiid?: number; //dokiid
lStarId?: number; //明星ID, 非可见明星，譬如剧集doki, dokiid等于star id
iCategory?: number; //doki类别  0:明星  1:剧集 2:兴趣
stImgInfo?: stDokiImgInfo; //doki头像信息
strName?: string; //doki名称，剧集名称
lFansNum?: number; //粉丝数
bFlwStat?: number; //关注状态 0 - 未关注  1 - 已关注
mpExtData?: {
      [prop: string]: string
    }; //扩展信息 - 对活动中的doki而言，存在额外的配置信息
      }
      

      interface stGetDokiInfoReq {
        bGetType?: number; //获取类型
strDokiid?: string; //
strVid?: string; //
iActivityId?: number; //活动id，101活动 - 101， 用于扩展数据拉取或选手列表读取
bGetExt?: number; // - 不同活动类型 获取不同扩展信息s//是否读取扩展数据 0：不获取； 1：获取，此时 iActivityId 必须填写 
bFrom?: number; //1: web 2: h5
      }
      

      interface stGetDokiInfoRsp {
        errCode?: number; 
vecDokiList?: stDokiInfo[]; //doki 列表信息
      }
      
  