import { Card, Input, Select } from 'antd';
const { Option } = Select;
import './card.less';
const CardDemo = () => {
  const handleOrgChange = () => {
    console.log('组织变更了');
  };
  return (
    <>
      <Card
        className="custom"
        title="自定义标题"
        extra={
          <>
            <div className="updatetime">09-09 18:00 数据已更新</div>
            <Input
              addonBefore="https://"
              addonAfter=".com"
              defaultValue="163"
            />
            <Select onChange={handleOrgChange}>
              <Option value="1">北京公司</Option>
              <Option value="2">上海公司</Option>
            </Select>
          </>
        }
        style={{ color: '#f20' }}
      >
        <p>我是卡片内容</p>
      </Card>
    </>
  );
};
export default CardDemo;
