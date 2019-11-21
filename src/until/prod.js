import * as API from './index';
export const prodList = (token,params) => {
  return API.HeadGET('/api/v1/admin/products',token,params)
}

export const prodDel = (id,token,params) => {
  return API.HeadDELETE('/api/v1/admin/products/'+id,token,params)
}

export const prodAdd = (token,params) => {
  return API.HeadPOST('/api/v1/admin/products',token,params)
}

export const prodFind = (id,token,params) => {
  return API.HeadGET('/api/v1/admin/products/'+id,token,params)
}
export const prodChange = (id,token,params) => {
  return API.HeadPUT('/api/v1/admin/products/'+id,token,params)
}
