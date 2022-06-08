import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';

import { AppRoute } from './app.route';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const App = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <AppRoute />
  </QueryClientProvider>
);


export default App;
