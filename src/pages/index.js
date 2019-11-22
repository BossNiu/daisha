
import styles from './index.css';
<<<<<<< HEAD

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page index</h1>
=======
import { Redirect } from 'react-router';

export default function () {
 
  return (
    <div className={styles.normal}>
       <Redirect to='/welcome'></Redirect>
>>>>>>> niu
    </div>
  );
}
