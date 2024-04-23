import { lazy } from 'react';

const Home = lazy(() => import('../../pages/Home'));
const Test = lazy(() => import('../../pages/Test'));

const pcRoutes = [
  { path: '/', element: <Home /> },
  { path: '/test', element: <Test /> },
];

export default pcRoutes;
