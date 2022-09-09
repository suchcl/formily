import { Link } from 'umi';
import styles from './index.less';
import { Button } from 'antd';
import Input from 'antd/lib/input';
import React, { useRef } from 'react';

export default (props: any) => {
  const handleClick = () => {
    // console.log('userRef:', userRef.current?.value);
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
      {props.children}
    </>
  );
};
