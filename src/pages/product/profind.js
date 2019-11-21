import { Input, message } from 'antd';
import styles from './profind.css';
import { connect } from 'dva';
import React, { useState } from 'react';
import { Card } from 'antd';
import * as api from '../../until/prod'

function profind(props) {
  let [list, setList] = useState([]) 
  var id = '';
  var name = '';
  var des = '';
  var quant = '';
  var price = '';
  var img = '';
  var fenlei = '';
   let value1 = props.list.name;
   let value2 = props.list.descriptions;
   let value3 = props.list.price;
   let value4 = props.list.quantity;
  return (
    <div className={styles.normal}>
      <div className={styles.box}> 
        <p><span>商品ID</span> <Input placeholder="请输入商品ID" className={styles.who}  ref={(val)=>{id=val}}/></p>
        <button className={styles.btn} onClick={() => {

          props.dispatch({
            type: 'product/find',
            payload: {
              id:id.state.value,
              token: localStorage.getItem('token'),
            }
          })
        }}>查询</button>

        
          <Card title="商品信息" bordered={false} style={{ width: 250 }} hoverable={true} className={styles.card}>
          <div className={styles.xinxi}><p><span>商品名：</span>{value1}</p></div>
          <div className={styles.xinxi}><p><span>商品描述：</span>{value2}</p></div>
          <div className={styles.xinxi}><p><span>单价:</span>{value3}</p></div>
          <div className={styles.xinxi}><p><span>库存:</span>{value4}</p></div>
          </Card>
       

        <Input placeholder="请输入商品名" className={styles.change} ref={(val) => { name = val }} />
        <Input placeholder="请输入商品简介" className={styles.change} ref={(val)=>{des=val}}  />
        <Input placeholder="请输入数量" className={styles.change} ref={(val) => { quant = val }} />
        <Input placeholder="请输入价格" className={styles.change} ref={(val) => { price = val }} />
        <Input placeholder="请输入主图" className={styles.change} ref={(val) => { img = val }} />
        <Input placeholder="请输入商品分类ID" className={styles.change} ref={(val) => { fenlei = val }} />

        {/* <h5 className={styles.psw_change}>修改用户密码</h5>
        <Input placeholder="请输入新密码" className={styles.psw_gai} ref={(val)=>{psw=val}}/>
        <button className={styles.psw_btn} onClick={() => {
          api1.pswChange(id.state.value, localStorage.getItem('token'), { password: psw.state.value }).then((data) => {
            if (data.status == 200) {
              message.success('修改成功!')
            }
          }).catch((err) => {
            message.error('修改失败!')
          })
        }}>修改</button> */}

          {/* <button className={styles.del_btn} onClick={() => {
          api1.userDel(id.state.value, localStorage.getItem('token')).then((data) => {
            if (data.status == 200) {
              message.success('删除成功!')
            }
          }).catch((err) => {
            message.error('删除失败!')
          })
        }}>删除用户</button> */}

        <button className={styles.btn_change} onClick={() => {
          let ids = id.state.value;
          let names = name.state.value;
          let dess = des.state.value;
          let quants = quant.state.value;
          let prices = price.state.value;
          let imgs = img.state.value;
          let fenleis = fenlei.state.value;
          // console.log(ids, users, nicks, tous)
          api.prodChange(ids, localStorage.getItem('token'), { name: names, descriptions : dess, quantity: quants,price:prices,coverImg:imgs,productCategory :"5d8eb704fe04943d5e540495" }).then((data) => {
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
export default connect(state=>state.product)(profind)