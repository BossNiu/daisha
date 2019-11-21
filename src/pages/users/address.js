
import styles from './address.css';
import React ,{useState} from 'react';
import { connect } from 'react-redux';
import {Input, message} from 'antd'
function address(props) {
  let [list, setList] = useState([])
  let id =''
  return (
    <div>
      <div className={styles.box}>
      <p><span>用户ID</span> <Input placeholder="请输入用户ID" className={styles.who}  ref={(val)=>{id=val}}/></p>
        <button className={styles.btn} onClick={() => {
          props.dispatch({
            type: 'useraddr/getData',
            payload: {
              id:id.state.value,
              token: localStorage.getItem('token'),
            }
          })
          console.log(props.list)
          if (props.list == undefined) {
                message.error('用户收货地址为空！')
          } else {
            (
              <div className={styles.list}>
              <p>{props.list[0]}</p>
              <p>{props.list[1]}</p>
              <p>{props.list[2]}</p>
            </div>
            )
              }
        }}>查询</button>
       
      </div>
    </div>
  );
}
export default connect(state=>state.useraddr)(address)