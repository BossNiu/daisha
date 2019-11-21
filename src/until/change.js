import * as API from './index';
export const change = (id,token,params) => {
  return API.HeadPUT('/api/v1/admin/users/'+id,token,params)
}

export const pswChange = (id,token,params) => {
  return API.HeadPUT('/api/v1/admin/users/reset_pwd/'+id,token,params)
}

export const userDel = (id,token,params) => {
  return API.HeadDELETE('/api/v1/admin/users/'+id,token,params)
}

export const address = (id,token,params) => {
  return API.HeadGET('/api/v1/admin/addresses/'+id,token,params)
}

