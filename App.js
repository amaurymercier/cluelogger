import { SafeAreaProvider } from 'react-native-safe-area-context';
import ClueLoggerTabContainer from './navigation/Navigation';

import moment from 'moment/min/moment-with-locales';

moment.locale('fr');

// noinspection JSUnusedGlobalSymbols
export default function App() {
  return (
    <SafeAreaProvider>
      <ClueLoggerTabContainer />
    </SafeAreaProvider>
  );
}
