
import styles from './_layout.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import * as api from '../../until/manage';
import { connect } from 'dva'
import React,{useState} from 'react'
import {Link} from 'umi/link'
 
const { Header, Content, Footer } = Layout;



export default function (props) {
  const [count,setCount] = useState('')
  api.manage(localStorage.getItem('token'),{}).then((data) => {
    console.log(data.data.nickName)
    setCount(data.data.nickName)
    
  }) 
  return (
    <div className={styles.normal}>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className={styles.logo} />
          <Menu
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={["1"]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1" onClick={()=>{window.location.href='/users/userlist'}}>用户列表</Menu.Item>
            <Menu.Item key="2" onClick={() => { window.location.href = '/users/useradd'}}>新增用户</Menu.Item>
            <Menu.Item key="3" onClick={() => {window.location.href='/users/userinfo'}}>用户操作</Menu.Item>
            <Menu.Item key="4" onClick={() => {window.location.href='/users/address'}}>其他查询</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <p>欢迎<span className={styles.who}>{count}</span></p>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 480 }}>
            
           {props.children}
     
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </div>
  );
}
