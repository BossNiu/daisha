import * as api from '../until/userfind';

export default {
  namespace: 'userfind',  //命名空间，一般和文件名一致；
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
      console.log(payload)
      const result = yield call(api.userfind,payload.payload.id,payload.payload.token)
      console.log(result)
      yield put({
        type: 'change',
        payload:{
          list: result.data
        }
      })
    }
  }
}