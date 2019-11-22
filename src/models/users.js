import * as api from '../until/getUsers'

export default {
  namespace: 'users',  //命名空间，一般和文件名一致；
  state: {
    name: '欧阳娜娜',
    age: 18,
    des: '真漂亮啊',
    list:[]
  },
  reducers: {
    change(state, { payload }) {
      return {...state,...payload}
    }
  }, 
  effects: {
    *getData(payload, { call, put }) {
      console.log(payload)
      const result = yield call(api.getusers,payload.payload.token,payload.payload.params)
      console.log(result)
      yield put({
        type: 'change',
        payload:{
          list: result.data.users,
          page:result.data.totalCount
        }
      })
    }
  }
}