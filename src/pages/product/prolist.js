
import styles from './prolist.css';
import {useEffect} from 'react'
import { connect } from 'dva';
import { Table, Divider, Tag,Modal, Button,message  } from 'antd';


function proList(props) {
  useEffect(() => {
    props.dispatch({
      type: 'product/getList',
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
    obj.coverImg = item.coverImg
    obj.name = item.name
    obj.price = item.price
    obj.kucun = item.quantity
    obj.time = item.createdAt
    data.push(obj)
  })
  var totalPage = props.total;
  
  const columns = [
    {
      title: '商品ID',
      dataIndex: 'id',
      key: 'id',
      render: text => <a>{text}</a>,
    },
    {
      title: '商品展示',
      dataIndex: 'coverImg',
      key: 'coverImg',
      render: coverImg => <img src={coverImg} className={styles.image}/>,
    },
    {
      title: '商品名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: '库存',
      dataIndex: 'kucun',
      key: 'kucun',
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
              type: 'product/del',
              payload: {
                id:recode.id,
               token: localStorage.getItem('token') 
              }
            })
            props.dispatch({
              type: 'product/getList', 
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

  // props.list.map((item) => {
  //   console.log(item)
  // })
 

  return (
    <div className={styles.normal}>
       <Table columns={columns} dataSource={data} pagination={{
        pageSize: 10, total: totalPage, onChange: (page, pageSize) => {
          console.log(page)
          props.dispatch({
            type: 'product/getList',
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
export default connect(state=>state.product)(proList)
