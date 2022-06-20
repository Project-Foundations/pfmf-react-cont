import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from 'core';

import { AppRoute } from './app.route';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const App = (): JSX.Element => (
  <AuthProvider
    config={{
      url: 'https://kckckdev.krugercorp.com/auth',
      clientId: 'kerprfe_human_talent',
      realm: 'kcorporative'
    }}
  >
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AppRoute />
      </QueryClientProvider>
    </React.StrictMode>
  </AuthProvider>
);


export default App;
