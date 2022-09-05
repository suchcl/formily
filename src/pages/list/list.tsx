import { useEffect, useState } from 'react';
import { request } from 'umi';
import styles from './list.less';

// 性别
enum Gender {
  男 = 1,
  女 = 2,
}
// 在职状态
enum Status {
  on = 1,
  leaving = 2,
  off = 3,
}
interface User {
  id: number;
  username: string;
  email: string;
  birthday: string;
  gender: Gender;
  status: Status;
  remark: string;
}

export default () => {
  const [user, setUser] = useState<User[]>([]);
  const handleRequest = () => {
    request('http://localhost:3011/formily/getFormilyUser').then((res) => {
      if (res.code === 200) {
        setUser(res.data);
      }
    });
  };

  const enumHandle = () => {
    console.log(Gender.男);
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
              <tr key={user.id}>
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
      <button onClick={enumHandle}>请求</button>
    </>
  );
};
