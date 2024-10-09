import React from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './src/routes/Routes';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ContextProviders} from './src/context';
import {Modal} from './src/components/Modal/Modal';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <ContextProviders>
          <ThemeProvider theme={theme}>
            <StatusBar barStyle="dark-content" />
            <Router />
            <Modal />
          </ThemeProvider>
        </ContextProviders>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

export default App;
