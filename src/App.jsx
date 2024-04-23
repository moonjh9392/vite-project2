import Router from './router/Router.jsx';
import { Suspense } from 'react';

// react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// react-query-devtools
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
//helmet
import { HelmetProvider } from 'react-helmet-async';

import AppLayout from './layout/AppLayout/index.jsx';
import Loading from '@src/components/common/Loading';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AppLayout>
          <Suspense fallback={<Loading />}>
            <Router />
          </Suspense>
        </AppLayout>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
