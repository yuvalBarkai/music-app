import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './styles';
import { NativeRouter } from 'react-router-native';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import NavigationLinks from './NavigationLinks';
import Routing from './Routing';

export default function App() {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <NativeRouter>
{          <NavigationLinks />}
          <Routing />
        </NativeRouter>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

