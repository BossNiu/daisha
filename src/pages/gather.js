
import styles from './gather.css';
import Link from 'umi/link';
import * as api from '../until/manage'
import React, { useState } from 'react';

export default function () {
  const [count,setCount] = useState('')
  api.manage(localStorage.getItem('token'),{}).then((data) => {
    console.log(data.data.nickName)
    setCount(data.data.nickName)
    
  }) 
  return (
    <div className={styles.normal}>
      <div className={styles.box}>
      <Link to='/users/userlist'><button className={styles.btn}>用户管理</button></Link>
      <Link to='/product/prolist'><button className={styles.btn}>商品管理</button></Link>
      <Link to='/classify/classlist'><button className={styles.btn}>商品分类管理</button></Link>
      <Link to='/order/orderlist'><button className={styles.btn}>订单管理</button></Link>
      </div>

      <div className={styles.yonghu}>
        <p><span>欢迎</span>{count}</p>
      </div>
      <button className={styles.exist} onClick={() => {
        localStorage.setItem('token','')
      }}><Link to='/welcome'>退出登录</Link></button>
    </div>
  );
  
}
