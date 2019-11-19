import * as API from './index';
export const getUsers = (token,params) => {
  return API.HeadGET('/api/v1/admin/users',token,params)
}