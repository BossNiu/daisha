import * as api from '../until/change';

export default {
  namespace: 'useraddr',  //命名空间，一般和文件名一致；
  state: {
    name: '欧阳娜娜',
    age: 18,
    des: '真漂亮啊',
    list:{}
  },
  reducers: {
    change(state, { payload }) {
      return {...state,...payload}
    }
  }, 
  effects: {
    *getData(payload, { call, put }) {
      // console.log(payload)
      const result = yield call(api.address,payload.payload.id,payload.payload.token)
      // console.log(result.data)
      yield put({
        type: 'change',
        payload:{
          list: result.data.address
        }
      })
    }
  }
}