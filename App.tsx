import React from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './src/routes/Routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
