
import styles from './welcome.css';
import { Button } from 'antd';

export default function () {
  return (
    <div className={styles.wrap}>
      <div className={styles.normal}>
      <h1><span>欢迎来到</span><i>带啥儿</i><span>后台管理系统</span></h1>
      <div className={styles.box}>
        <Button type="primary" className={styles.login} onClick={() => {
          window.location.href = '/login'
        }}>去登录</Button>
        <Button type="primary" className={styles.golook} onClick={() => {
          window.location.href = 'http://www.daisha.com.cn/'
        }}>去逛逛</Button>
      </div>
    </div>

      
    </div>
  );
}
