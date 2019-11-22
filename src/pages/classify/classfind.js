
import styles from './classfind.css';
import { Input, message } from 'antd';
import { connect } from 'dva';
import React, { useState } from 'react';
import { Card } from 'antd';
import * as api from '../../until/classify'

function classfind(props) { 
  let [list, setList] = useState([]) 
  var id = '';
  var name = '';
  var des = '';
  var img = '';
   let value1 = props.list1.name;
  let value2 = props.list1.descriptions;
  let value3 = props.list1.coverImg;
  return (
    <div className={styles.normal}>
      <div className={styles.box}> 
        <p><span>商品ID</span> <Input placeholder="请输入商品ID" className={styles.who}  ref={(val)=>{id=val}}/></p>
        <button className={styles.btn} onClick={() => {

          props.dispatch({
            type: 'classify/find',
            payload: {
              id:id.state.value,
              token: localStorage.getItem('token'),
            }
          })
        }}>查询</button>

        
          <Card title="商品信息" bordered={false} style={{ width: 250 }} hoverable={true} className={styles.card}>
          <div className={styles.xinxi}><p><span>商品名：</span>{value1}</p></div>
          <div className={styles.xinxi}><p><span>商品简介：</span>{value2}</p></div>
          <div className={styles.xinxi}><p><span>商品展示:</span><img src={value3} className={styles.pic}/></p></div>
          </Card>
       

        <Input placeholder="请输入商品名" className={styles.change} ref={(val) => { name = val }} />
        <Input placeholder="请输入商品简介" className={styles.change} ref={(val)=>{des=val}}  />
        <Input placeholder="请输入主图" className={styles.change} ref={(val) => { img = val }} />
        
        <button className={styles.btn_change} onClick={() => {
          let ids = id.state.value;
          let names = name.state.value;
          let dess = des.state.value;
          let imgs = img.state.value;
          api.classChange(ids, localStorage.getItem('token'), { name: names, descriptions : dess, coverImg:imgs }).then((data) => {
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


export default connect(state=>state.classify)(classfind)