import styles from './_layout.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import * as api from '../../until/manage';
import { connect } from 'dva'
import React,{useState} from 'react'
import Link from 'umi/link'

const { Header, Content, Footer } = Layout;

export default function (props) {
  const [count, setCount] = useState('')
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
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to='/classify/classlist'>商品分类列表</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/classify/classadd'>新增商品分类</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/classify/classfind'>商品分类操作</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/gather'>回到导航</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <span>欢迎<span className={styles.who}>{count}</span></span>
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
