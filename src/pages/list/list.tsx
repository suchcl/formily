import { useEffect, useState } from 'react';
import { request } from 'umi';
import { Button, Input, Select, Form } from 'antd';
const { Option } = Select;
import styles from './list.less';
import { Pie } from '@ant-design/charts';

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
interface ISex {
  key: number;
  value: string;
}

const sex: ISex[] = [
  {
    key: 1,
    value: '男',
  },
  {
    key: 2,
    value: '女',
  },
];

export default () => {
  const [form] = Form.useForm();
  const [user, setUser] = useState<User[]>([]);
  const [gender, setGender] = useState<Gender[]>([Gender.男, Gender.女]);
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

  const onFinish = (values: any) => {
    console.log('表单values:', values);
  };

  const onGenderChange = () => {};

  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
  ];
  const dataHtml = `<div style="font-size: 14px;">
        <h4 style="font-weight: normal;font-size: 16px;color: #f20;">总客增</h4>
        <span style="color:#395;">134</span>
        <div>同比上涨12%</div>
        <div>环比下降10%</div>
    </div>`;
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    // interactions: [
    //     {
    //         type: 'element-selected',
    //     },
    //     {
    //         type: 'element-active',
    //     },
    // ],
    pieStyle: {
      lineWidth: 2,
      // fill: 'red',
      // stroke: 'black',
      shadowOffsetX: 4,
      shadowOffsetY: 5,
      shadowColor: 'blue',
    },
    statistic: {
      title: {
        style: {
          marginTop: '30px',
        },
        // content: "哈哈哈哈",
        customHtml: () => {
          return dataHtml;
        },
      },
      content: {
        style: {
          fontSize: '14px',
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        // content，隐藏默认展示的总数
        content: '',
      },
    },
  };

  return (
    <>
      <h3>列表页</h3>
      <div className={styles.search_area}>
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="note" label="Note">
            <Input />
          </Form.Item>
          <Form.Item name="gender" label="Gender">
            <Select onChange={onGenderChange} allowClear>
              {sex.map((item) => {
                return (
                  <Option value={item.key} key={item.key}>
                    {item.value}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item name="email" label="邮箱">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button>重置</Button>
          </Form.Item>
        </Form>
      </div>
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
      <div className={styles.pie_wrapper}>
        <Pie {...config}></Pie>
      </div>
      <div className={styles.other}>
        <div className={styles.item}>
          <h4>人均客增(人/日)</h4>
          <p>1.5</p>
        </div>
        <div className={styles.item}>
          <h4>人均存量私客(人/日)</h4>
          <p>8</p>
        </div>
        <div className={styles.item}>
          <h4>存量私客总数(人/日)</h4>
          <p>12</p>
        </div>
      </div>
    </>
  );
};
