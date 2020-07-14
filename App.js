// App.js

import React from 'react';
import Navigation from './Navigation/Navigation';

import { StatusBar } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
  render() {
    StatusBar.setBarStyle('light-content', true);
    return (
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    );
  }
}
