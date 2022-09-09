import { Card } from 'antd';
const CardDemo = () => {
  return (
    <>
      <Card
        title="自定义标题"
        extra={<a href="#">More</a>}
        style={{ color: '#f20' }}
      >
        <p>我是卡片内容</p>
      </Card>
    </>
  );
};
export default CardDemo;
