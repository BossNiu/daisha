import * as API from './index';
export const login = (params) => {
  return API.POST('/api/v1/auth/manager_login',params)
}