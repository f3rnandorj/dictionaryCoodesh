import React from 'react';
import {StatusBar} from 'react-native';

import {Home} from './src/screens/Home/Home';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <Home />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
