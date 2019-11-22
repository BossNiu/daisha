import * as API from './index';
export const getusers = (token,params) => {
  return API.HeadGET('/api/v1/admin/users',token,params)
}