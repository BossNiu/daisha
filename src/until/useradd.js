import * as API from './index';
export const userAdd = (token,params) => {
  return API.HeadPOST('/api/v1/admin/users',token,params)
}