import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Home} from './src/screens/Home/Home';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
