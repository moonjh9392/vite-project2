import { lazy } from 'react';
// ** Router imports
import { useRoutes } from 'react-router-dom';

// *** Pc *** //
import pcRoutes from './device/pc.jsx';

// *** Mobile *** //
import mobileRoutes from './device/mobile.jsx';

const NotFound = lazy(() => import('../pages/NotFound/index.jsx'));

const Router = () => {
  const routes = useRoutes([
    ...pcRoutes,
    ...mobileRoutes,
    { path: '*', element: <NotFound /> }, // 모든 미정의 경로에 대해 NotFound 컴포넌트를 렌더링
  ]);

  return routes;
};

export default Router;
