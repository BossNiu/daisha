import * as API from './index';
export const orderList = (token,params) => {
  return API.HeadGET('/api/v1/admin/orders',token,params)
}

export const orderDel = (id,token,params) => {
  return API.HeadDELETE('/api/v1/admin/orders/'+id,token,params)
}

export const orderFind = (id,token,params) => {
  return API.HeadGET('/api/v1/admin/orders/'+id,token,params)
}
export const orderChange = (id,token,params) => {
  return API.HeadPUT('/api/v1/admin/orders/'+id,token,params)
}
