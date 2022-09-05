const routes = [
  {
    path: '/',
    component: '@/pages/layout/index',
    routes: [
      {
        path: '/home',
        component: '@/pages/home/index',
        title: '首页',
      },
      {
        path: '/list',
        component: '@/pages/list/list',
        title: '列表页',
      },
      {
        path: '/detail',
        component: '@/pages/detail/detail',
        title: '详情页',
      },
      {
        path: '/formily',
        component: '@/pages/formily/index',
        title: '测试formily',
      },
    ],
  },
];

export default routes;
