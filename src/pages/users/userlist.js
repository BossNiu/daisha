
import styles from './userlist.css'
import { Table, Divider, Tag,Modal, Button,message  } from 'antd';
import { connect } from 'dva'
import React from 'react'
import * as api1 from '../../until/getUsers'
import * as api from '../../until/change'
import {useEffect} from 'react'



function userlist(props) {
  
 
  const columns = [
    {
      title: '用户名ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '更新时间',
      dataIndex: 'time',
      key: 'time',
    },
    
    {
      title: '操作',
      key: 'action',
      render: (recode) => (
        <span>
          <button className={styles.delete} onClick={() => {
            message.success('删除成功')
             console.log(recode.id)
             api.userDel(recode.id, localStorage.getItem('token')).then((data) => {
               console.log(data)
               props.dispatch({
                type: 'users/getData',
                payload: {
                  token: localStorage.getItem('token') 
                }
              })
             })
          }
          }>删除</button>
        </span>
      ),
    },
  ];


  useEffect(() => {
    props.dispatch({
      type: 'users/getData',
      payload: {
       token: localStorage.getItem('token') 
      }
    })
  },[])

  const data = [];
  props.list.map((item, i) => {
    const obj = {}
    obj.key = i + 1;
    obj.id = item._id
    obj.username = item.userName
    obj.time = item.createdAt
    data.push(obj)
  })
  var totalPage = props.page;

return (
  <Table columns={columns} dataSource={data} pagination={{
    pageSize: 5, total: totalPage, onChange: (page, pageSize) => {
      props.dispatch({
        type: 'users/getData',
        payload: {
          token: localStorage.getItem('token'),
          params:{per:5,page:page}
        }
      })
    }
  }

  } />
)

}
export default connect(state=>state.users)(userlist)
