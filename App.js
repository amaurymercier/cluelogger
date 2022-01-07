import { SafeAreaProvider } from 'react-native-safe-area-context';
import moment from 'moment/min/moment-with-locales';
import ClueLoggerTabContainer from './navigation/Navigation';


moment.locale('fr');

export default function App() {
  return (
    <SafeAreaProvider>
      <ClueLoggerTabContainer />
    </SafeAreaProvider>
  );
}
