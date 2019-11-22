
import styles from './classadd.css';
import { Input, message } from 'antd';
import React, { useState } from 'react';
import { connect } from 'dva';
import * as api from '../../until/classify'

function classadd(props) {
  let [list, setList] = useState([])
  var name = '';
  var des = '';
  var img = '';
  return (
    <div className={styles.normal}>
        <h1>新增商品分类</h1> 
      <div className={styles.box}>
        <p>
          <span className={styles.label}>分&nbsp;&nbsp;类&nbsp;&nbsp;名</span>
          <Input placeholder="请输入商品名" className={styles.shuru}  ref={(val)=>{name=val}}/>
        </p>
        <p>
          <span className={styles.label}>商品简介</span>
          <Input placeholder="请输入商品简介" className={styles.shuru}  ref={(val)=>{des=val}}/>
        </p>
        <p>
          <span className={styles.label}>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;图</span>
          <Input placeholder="请输入图片链接" className={styles.shuru}  ref={(val)=>{img=val}}/>
        </p>
        <button className={styles.add} onClick={() => {
        // console.log(username, password.state.value)
        var names = name.state.value;
        var dess = des.state.value;
        var imgs = img.state.value;
        api.classAdd(localStorage.getItem('token'), {
          name: names,
          descriptions :dess,
          coverImg :imgs,
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

      

     
    </div>
  ); 
}
export default connect(state=>state.classify)(classadd)