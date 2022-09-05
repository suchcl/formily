import { Link } from 'umi';
import styles from './index.less';

export default (props: any) => {
  return (
    <>
      <ul className={styles.nav}>
        <li>
          <Link to="/home">首页</Link>
        </li>
        <li>
          <Link to="/list">列表</Link>
        </li>
        <li>
          <Link to="/detail">详情页</Link>
        </li>
      </ul>
      {props.children}
    </>
  );
};
