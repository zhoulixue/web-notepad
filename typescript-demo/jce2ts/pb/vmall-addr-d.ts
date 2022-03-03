
  // 0xf3f5
  
      interface STAddrData {
        iId?: number; 
strName?: string; 
      }
      

      declare enum emAddrType {
        E_GET_PROVINCE = 1, 
E_GET_CITY = 2, 
E_GET_AREA = 3, 
      }
      

      interface STGetAddrReq {
        iType?: number; 
iId?: number; //当type为2时，表示省的ID，为3时，表示市的ID
      }
      

      interface STGetAddrRsp {
        iErrCode?: number; 
strErrMsg?: string; 
vecAddr?: STAddrData[]; 
iType?: number; //这里表示取到的地址的类型，1表示省，2市 3区
      }
      
  