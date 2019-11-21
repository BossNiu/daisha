import { Input, message } from 'antd';
import styles from './userinfo.css';
// import * as api from '../../until/userfind';
import * as api1 from '../../until/change';
import { connect } from 'dva' 
import React ,{useState} from 'react';
// import { connect } from 'react-redux';
import { Card } from 'antd';

function userinfo(props) {

  let [list, setList] = useState([]) 
  var id = '';
  var user = '';
  var nick = '';
  var tou = '';
  var psw = '';
   let value1 = props.list.userName;
   let value2 = props.list.nickName;
   let value3 = props.list.avatar;

  return (
    <div className={styles.normal}>
      <div className={styles.box}> 
        <p><span>用户ID</span> <Input placeholder="请输入用户ID" className={styles.who}  ref={(val)=>{id=val}}/></p>
        <button className={styles.btn} onClick={() => {

          props.dispatch({
            type: 'userfind/getData',
            payload: {
              id:id.state.value,
              token: localStorage.getItem('token'),
            }
          })
        }}>查询</button>

        
          <Card title="用户信息" bordered={false} style={{ width: 250 }} hoverable={true} className={styles.card}>
          <div className={styles.xinxi}><p><span>用户名：</span>{value1}</p></div>
          <div className={styles.xinxi}><p><span>昵&nbsp;&nbsp;&nbsp;&nbsp;称:</span>{value2}</p></div>
          <div className={styles.xinxi}><p><span>头&nbsp;&nbsp;&nbsp;&nbsp;像:</span>{value3}</p></div>
          </Card>
       

        <Input placeholder="请输入用户名" className={styles.change} ref={(val) => { user = val }} />
        <Input placeholder="请输入用户昵称" className={styles.change} ref={(val)=>{nick=val}}  />
        <Input placeholder="请输入用户头像" className={styles.change} ref={(val) => { tou = val }} />

        <h5 className={styles.psw_change}>修改用户密码</h5>
        <Input placeholder="请输入新密码" className={styles.psw_gai} ref={(val)=>{psw=val}}/>
        <button className={styles.psw_btn} onClick={() => {
          api1.pswChange(id.state.value, localStorage.getItem('token'), { password: psw.state.value }).then((data) => {
            if (data.status == 200) {
              message.success('修改成功!')
            }
          }).catch((err) => {
            message.error('修改失败!')
          })
        }}>修改</button>

          <button className={styles.del_btn} onClick={() => {
          api1.userDel(id.state.value, localStorage.getItem('token')).then((data) => {
            if (data.status == 200) {
              message.success('删除成功!')
            }
          }).catch((err) => {
            message.error('删除失败!')
          })
        }}>删除用户</button>

        <button className={styles.btn_change} onClick={() => {
          let ids = id.state.value;
          let users = user.state.value;
          let nicks = nick.state.value;
          let tous = tou.state.value;
          console.log(ids, users, nicks, tous)
          api1.change(ids, localStorage.getItem('token'), { userName: users, nickName: nicks, avatar: tous }).then((data) => {
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
 export default connect(state=>state.userfind)(userinfo)
