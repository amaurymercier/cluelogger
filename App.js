import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import ClueLoggerTabContainer from './navigation/Navigation.js';

import moment from 'moment/min/moment-with-locales';

moment.locale('fr');

export default function App() {
  // StatusBar.setStatusBarStyle('light-content', true);
  return (
    <SafeAreaProvider>
      <ClueLoggerTabContainer />
    </SafeAreaProvider>
  );
}
