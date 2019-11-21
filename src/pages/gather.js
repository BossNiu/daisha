
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
        <button className={styles.btn} onClick={() => {
          window.location.href='/users/userlist'
     }}>用户管理</button>
      <Link to='/product/prolist'><button className={styles.btn}>商品管理</button></Link>
      <button className={styles.btn}>商品管理</button>
      <button className={styles.btn}>订单管理</button>
      </div>

      <div className={styles.yonghu}>
        <p><span>欢迎</span>{count}</p>
      </div>
    </div>
  );
  
}
