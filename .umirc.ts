import { defineConfig } from 'umi';
import routes from './config/routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  dva: {
    immer: true,
    hmr: false,
  },
  routes,
  mfsu: {},
  fastRefresh: {},
});
