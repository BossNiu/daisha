
import styles from './orderfind.css';
import { Input, message } from 'antd';
import { connect } from 'dva';
import React, { useState } from 'react';
import { Card } from 'antd';
import * as api from '../../until/order'

function orderfind(props) {
  let [list, setList] = useState([]) 
  var id = '';
  var name = '';
   let value1 = props.list1.no;
  let value2 = String(props.list1.isPayed);
  let value3 = props.list1.address;
  let value4 = props.list1.regions;
  let value5 = props.list1.receiver;
  let value6 = props.list1.user;
  return (
    <div className={styles.normal}>
      <div className={styles.box}> 
        <p><span>商品ID</span> <Input placeholder="请输入订单ID" className={styles.who}  ref={(val)=>{id=val}}/></p>
        <button className={styles.btn} onClick={() => {

          props.dispatch({
            type: 'order/find',
            payload: {
              id:id.state.value,
              token: localStorage.getItem('token'),
            }
          })
        }}>查询</button>

        
          <Card title="商品信息" bordered={false} style={{ width: 250 }} hoverable={true} className={styles.card}>
          <div className={styles.xinxi}><p><span>订单编号：</span>{value1}</p></div>
          <div className={styles.xinxi}><p><span>支付状态：</span>{value2}</p></div>
          <div className={styles.xinxi}><p><span>收货地址：</span>{value3}</p></div>
          <div className={styles.xinxi}><p><span>发货地址：</span>{value4}</p></div>
          <div className={styles.xinxi}><p><span>收货人：</span>{value5}</p></div>
          <div className={styles.xinxi}><p><span>发货人：</span>{value6}</p></div>
        
          
          </Card>
       

        <Input placeholder="请输入支付信息(true/false)" className={styles.change} ref={(val) => { name = val }} />
        <button className={styles.btn_change} onClick={() => {
          let ids = id.state.value;
          let names = name.state.value;
          api.orderChange(ids, localStorage.getItem('token'), { isPayed: names}).then((data) => {
            if (data.status == 200) {
              // console.log(value1)
              message.success('修改成功！')
            }
          }).catch((error) => {
            message.error('修改失败！')
          })
        }}>修改</button>

       
      </div>
    </div> 
  );
}
export default connect(state=>state.order)(orderfind)