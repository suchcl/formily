import { Bar } from '@ant-design/charts';
export default () => {
  const data = [
    {
      action: '浏览网站',
      pv: 50000,
    },
    {
      action: '放入购物车',
      pv: 35000,
    },
    {
      action: '生成订单',
      pv: 25000,
    },
    {
      action: '支付订单',
      pv: 15000,
    },
    {
      action: '完成交易',
      pv: 8500,
    },
  ];
  const config = {
    data,
    width: 400,
    xField: 'pv',
    yField: 'action',
    axis: {
      position: 'left',
    },
    conversionTag: {},
  };
  return (
    <>
      <h3>详情页</h3>
      <Bar {...config} />
    </>
  );
};
