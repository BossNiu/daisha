import * as api from '../until/prod';

export default {
  namespace: 'product',  //命名空间，一般和文件名一致；
  state: {
    name: '欧阳娜娜',
    age: 18,
    des: '真漂亮啊',
    list: [],
    list1:{}
  },
  reducers: {
    change(state, { payload }) {
      return {...state,...payload}
    }
  }, 
  effects: {
    *getList(payload, { call, put }) {
      console.log(payload)
      const result = yield call(api.prodList,payload.payload.token,payload.payload.params)
      console.log(result)
      yield put({
        type: 'change',
        payload:{
          list: result.data.products,
          total:result.data.totalCount
        }
      })
    },
    *del(payload, { call, put }) {
      console.log(payload)
      const result = yield call(api.prodDel,payload.payload.id,payload.payload.token)
      console.log(result)
      yield put({
        type: 'change',
        payload:{
          // list: result.data.products,
          // total:result.data.totalCount 
        }
      })
    },
    *find(payload, { call, put }) {
      console.log(payload)
      const result = yield call(api.prodFind,payload.payload.id,payload.payload.token)
      console.log(result.data)
      yield put({
        type: 'change',
        payload:{
          list1: result.data,
          // total:result.data.totalCount 
        }
      })
    },
    // *add(payload, { call, put }) {
    //   console.log(payload.payload.params,payload.payload.token)
    //   const result = yield call(api.prodAdd,payload.payload.token,payload.payload.params)
    //   console.log(result)
    //   yield put({
    //     type: 'change',
    //     payload:{
    //       // list: result.data.products,
    //       // total:result.data.totalCount 
    //     }
    //   })
    // }
  }
}