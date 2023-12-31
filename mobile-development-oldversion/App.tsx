import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Styles from './Styles';
import { NativeRouter, Routes, Route, Link } from "react-router-native"
import Notation from './components/Intervals';
import Arpeggiator from './components/Arpeggiator';
import Scales from './components/Scales';
import { Store } from './redux/store';
import { useState } from 'react';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={Store}>
      <View style={Styles.container}>
        <StatusBar style="auto" />
        <NativeRouter>
          <NavigationLinks />
          <Routing />
        </NativeRouter>
      </View>
    </Provider>
  )
}

function NavigationLinks() {
  const [isActive, setActive] = useState<boolean[]>([false, false, false, false]);

  const firstLink = () => {
    setActive([true, false, false, false]);
  }
  const secondLink = () => {
    setActive([false, true, false, false]);
  }
  const thirdLink = () => {
    setActive([false, false, true, false]);
  }
  const fourthLink = () => {
    setActive([false, false, false, true]);
  }

  return (
    <View style={Styles.linksBar}>
      <Link to={`/Notation`} style={isActive[0] ? Styles.active : null} onPress={firstLink}>
        <Text style={Styles.linkButton} >Notation</Text>
      </Link>
      <Link to={`/Arpeggiator`} style={isActive[1] ? Styles.active : null} onPress={secondLink}>
        <Text style={Styles.linkButton}>Arpeggiator</Text>
      </Link>
      <Link to={`/Scales`} style={isActive[2] ? Styles.active : null} onPress={thirdLink}>
        <Text style={Styles.linkButton}>Scales</Text>
      </Link>
      <Link to={`/Fifths`} style={isActive[3] ? Styles.active : null} onPress={fourthLink}>
        <Text style={Styles.linkButton} >Fifths</Text>
      </Link>
    </View>
  )
}

function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Text>Welcome to my App !</Text>} />
      <Route path='/Notation' element={<Notation />} />
      <Route path='/Arpeggiator' element={<Arpeggiator />} />
      <Route path='/Scales' element={<Scales />} />
    </Routes>
  )
}