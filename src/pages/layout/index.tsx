import { Link } from 'umi';
import styles from './index.less';
import { Input, Button } from 'antd';
import { useRef } from 'react';

export default (props: any) => {
  const userRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    console.log('userRef:', userRef.current?.value);
  };

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
        <li>
          <Link to="/formily">formily</Link>
        </li>
      </ul>
      <div className={styles.user}>
        {/* <Input type='text' ref={userRef} className={styles.input} /> */}
        <input type="text" ref={userRef} className={styles.input} />
        <Button type="primary" onClick={handleClick}>
          提交
        </Button>
      </div>
      {props.children}
    </>
  );
};
