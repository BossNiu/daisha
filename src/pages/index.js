
import styles from './index.css';
import { Redirect } from 'react-router';

export default function () {
 
  return (
    <div className={styles.normal}>
       <Redirect to='/welcome'></Redirect>
    </div>
  );
}
