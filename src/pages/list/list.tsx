import { request } from 'umi';
export default () => {
  const handleRequest = () => {
    request('');
  };

  return (
    <>
      <h3>列表页</h3>
      <button onClick={handleRequest}>请求</button>
    </>
  );
};
