import * as API from './index';
export const classList = (token,params) => {
  return API.HeadGET('/api/v1/admin/product_categories',token,params)
}

export const classDel = (id,token,params) => {
  return API.HeadDELETE('/api/v1/admin/product_categories/'+id,token,params)
}

export const classAdd = (token,params) => {
  return API.HeadPOST('/api/v1/admin/product_categories',token,params)
}

export const classFind = (id,token,params) => {
  return API.HeadGET('/api/v1/admin/product_categories/'+id,token,params)
}
export const classChange = (id,token,params) => {
  return API.HeadPUT('/api/v1/admin/product_categories/'+id,token,params)
}
