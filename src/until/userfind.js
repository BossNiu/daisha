import * as API from './index';
export const userfind = (id,token,params) => {
  return API.HeadGET('/api/v1/admin/users/'+id,token,params)
}
 