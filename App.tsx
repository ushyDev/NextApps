/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {store} from './src/store';
import {MainScreen} from './src/screens/MainView';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MainScreen />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
