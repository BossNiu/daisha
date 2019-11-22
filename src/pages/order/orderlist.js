
import styles from './orderlist.css';
import {useEffect} from 'react'
import { connect } from 'dva';
import { Table, Divider, Tag,Modal, Button,message  } from 'antd';

function orderlist(props) {
  useEffect(() => {
    props.dispatch({
      type: 'order/getList',
      payload: {
       token: localStorage.getItem('token')
      }
    })
  }, [])

  const data = [];
  props.list.map((item, i) => {
    const obj = {}
    obj.key = i + 1; 
    obj.id = item._id
    obj.num = item.no
    obj.region = item.regions
    obj.address = item.address
    obj.receiver = item.receiver
    obj.price = item.price
    obj.time = item.createdAt
    data.push(obj)
  })
  var totalPage = props.total;

  const columns = [
    {
      title: '订单ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: '订单编号',
      dataIndex: 'num',
      key: 'num',
    },
    {
      title: '发货地址',
      dataIndex: 'region',
      key: 'reg',
    },
    {
      title: '收货地址',
      dataIndex: 'address',
      key: 'addr',
    },
    {
      title: '收货人',
      dataIndex: 'receiver',
      key: 'rec',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
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
            props.dispatch({
              type: 'order/del',
              payload: {
                id:recode.id,
               token: localStorage.getItem('token') 
              }
            })
            props.dispatch({
              type: 'order/getList', 
              payload: {
               token: localStorage.getItem('token') 
              } 
            })
            // message.success('删除成功')
            //  console.log(recode.id)
            //  api.userDel(recode.id, localStorage.getItem('token')).then((data) => {
            //    console.log(data)
            //    props.dispatch({
            //     type: 'users/getData',
            //     payload: {
            //       token: { token: localStorage.getItem('token') }
            //     }
            //   })
            //  })
          }
          }>删除</button>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
       <Table columns={columns} dataSource={data} pagination={{
        pageSize: 10, total: totalPage, onChange: (page, pageSize) => {
          console.log(page)
          props.dispatch({
            type: 'order/getList',
            payload: {
              token: localStorage.getItem('token'),
              params:{per:10,page:page}
            }
          })
    }
  }

  } />
    </div>
  );
}
export default connect(state=>state.order)(orderlist)