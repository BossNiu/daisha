
import styles from './proadd.css';
import { Input, message } from 'antd';
import React, { useState } from 'react';
import { connect } from 'dva';
import * as api from '../../until/prod'

function add(props) {
  let [list, setList] = useState([])
  var name = '';
  var des = '';
  var quantity = '';
  var price = '';
  var img = '';
  var id = '';
  return (
    <div className={styles.normal}>
      <h1>新增商品</h1> 
      <div className={styles.box}>
        <p>
          <span className={styles.label}>商&nbsp;&nbsp;品&nbsp;&nbsp;名</span>
          <Input placeholder="请输入商品名" className={styles.shuru}  ref={(val)=>{name=val}}/>
        </p>
        <p>
          <span className={styles.label}>商品简介</span>
          <Input placeholder="请输入商品简介" className={styles.shuru}  ref={(val)=>{des=val}}/>
        </p>
        <p>
          <span className={styles.label}>库&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;存</span>
          <Input placeholder="请输入库存" className={styles.shuru}  ref={(val)=>{quantity=val}}/>
        </p>
        <p>
          <span className={styles.label}>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
          <Input placeholder="请输入价格" className={styles.shuru}  ref={(val)=>{price=val}}/>
        </p>
        <p>
          <span className={styles.label}>头像地址</span>
          <Input placeholder="请输入图片链接" className={styles.shuru}  ref={(val)=>{img=val}}/>
        </p>
        <p>
          <span className={styles.label}>商品分类</span>
          <Input placeholder="请输入分类ID" className={styles.shuru}  ref={(val)=>{id=val}}/>
        </p>
      </div>


      <button className={styles.add} onClick={() => {
        // console.log(username, password.state.value)
        var names = name.state.value;
        var dess = des.state.value;
        var quantitys = quantity.state.value;
        var prices = price.state.value;
        var imgs = img.state.value;
        var ids = id.state.value;
        // console.log(localStorage.getItem('token'))
        api.prodAdd(localStorage.getItem('token'),{ name:names,
          descriptions :dess,
          quantity :quantitys,
          price:prices,
          coverImg :imgs,
          productCategory: "5d8eb704fe04943d5e540495"
        }).then((data) => {
          if (data.status == 200) {
            message.success('添加成功！')
          }
        })
        // props.dispatch({
        //   type: 'product/add',
        //   payload: {
            // token: localStorage.getItem('token'),
            // params: {
            //   name:names,
            //   descriptions :dess,
            //   quantity :quantitys,
            //   price:prices, 
            //   coverImg :imgs,
            //   productCategory :"5d8eb704fe04943d5e540495"
        //     }
        //   }
        // })
      }}>添加</button>
    </div>
  );
} 
export default connect(state=>state.product)(add)
