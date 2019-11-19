
import styles from './login.css';
import * as api from '../until/login'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React ,{useState} from 'react';
import { message } from 'antd';

const onClose = e => {
  console.log(e, 'I was closed.');
};

export default function (props) {
  let [list, setList] = useState([])
  var userInput = '';
  var pasInput = '';
 
  return (
    <div className={styles.normal}>
      <div className={styles.box}>
        <p className={styles.tit}>'带啥儿'</p>
        <h4 className={styles.des}>后台管理系统</h4>
        <Input
          ref={(val)=>{userInput=val}}
          className={styles.username}
          placeholder="请输入用户名"
          prefix={<Icon type="user" style={{ color:'rgba(0,0,0,.25)'}} />}
          />
          <br/>
          <br/>
        <Input 
          type='password'
          ref={(val)=>{pasInput=val}}
          className={styles.password}
            placeholder="请输入密码"
            prefix={<Icon type="unlock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
          <br/>
          <br/>
        <Button type="primary" block className={styles.login} onClick={() => {
          // console.log(pasInput.state)
          api.login({ userName: userInput.state.value, password: pasInput.state.value }).then((data) => {
            if (data.data.token != undefined) {
              message.success('登录成功，正在跳转');
              localStorage.setItem("token",data.data.token);
              setTimeout(() => {
                window.location.href='/gather' 
              },1000);
            }
          }).catch((data) => {
            console.log('aa')
            message.error('用户名或密码错误，请重新输入！');   
            console.log(data)
          })
        }}>登录</Button>
      </div>
    </div>
  );
}
 