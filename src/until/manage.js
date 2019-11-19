import * as API from './index';
export const manage = (token,params) => {
  return API.HeadGET('/api/v1/users/manager_info',token,params)
}