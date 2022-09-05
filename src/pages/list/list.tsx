import { useEffect, useState } from 'react';
import { request } from 'umi';
import styles from './list.less';
interface User {
  username: string;
  email: string;
  birthday: string;
  gender: string;
  status: string;
  remark: string;
}
export default () => {
  const [user, setUser] = useState<User[]>([]);
  const handleRequest = () => {
    console.log('点击了');
    request('http://localhost:3011/formily/getFormilyUser').then((res) => {
      setUser(res.data);
    });
  };

  useEffect(() => {
    handleRequest();
  }, []);

  return (
    <>
      <h3>列表页</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>姓名</th>
            <th>邮箱</th>
            <th>性别</th>
            <th>出生日期</th>
            <th>状态</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => {
            return (
              <tr>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.birthday}</td>
                <td>{user.status}</td>
                <td>{user.remark}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleRequest}>请求</button>
    </>
  );
};
