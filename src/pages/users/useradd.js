
import styles from './useradd.css';
import * as api from '../../until/useradd'
import { Input, message } from 'antd';
import React ,{useState} from 'react';

 
export default function () {
  let [list, setList] = useState([])
  var username = '';
  var password = '';
  var nickname = '';
  var img = '';
  return (
    <div className={styles.normal}>
      <h1>新增用户</h1> 
      <div className={styles.box}>
        <p>
          <span className={styles.label}>用&nbsp;&nbsp;户&nbsp;&nbsp;名</span>
          <Input placeholder="请输入用户名" className={styles.shuru}  ref={(val)=>{username=val}}/>
        </p>
        <p>
          <span className={styles.label}>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</span>
          <Input placeholder="请输入密码" className={styles.shuru}  ref={(val)=>{password=val}}/>
        </p>
        <p>
          <span className={styles.label}>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</span>
          <Input placeholder="请输入昵称" className={styles.shuru}  ref={(val)=>{nickname=val}}/>
        </p>
        <p>
          <span className={styles.label}>头像地址</span>
          <Input placeholder="请输入图片链接" className={styles.shuru}  ref={(val)=>{img=val}}/>
        </p>
      </div>

 

      <button className={styles.add} onClick={() => {
        // console.log(username, password.state.value)
        var user = username.state.value;
        var psw = password.state.value;
        var nick = nickname.state.value;
        var tu = img.state.value;
        api.userAdd(localStorage.getItem('token'), {
          userName:user,password:psw,nickName:nick,avatar:tu
        }).then((data) => {
          if (data.status == 200) {
            message.success('添加成功!')
          }
        })
      }}>添加</button>

    </div>
  );
}
