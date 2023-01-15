import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Arpeggiator from './components/Arpeggiator/Arpeggiator';
import Notation from './components/Notation/Notation';
import Styles from './Styles';
import { NativeRouter, Routes, Route, Link } from "react-router-native"
import Scales from './components/Scales/Scales';
import Fifths from './components/Fifths/Fifths';
import { useState } from 'react';

export default function App() {
  return (
    <View style={Styles.container}>
      <StatusBar style="auto" />
      <NativeRouter>
        <NavigationLinks />
        <Routing />
      </NativeRouter>
    </View>
  )
}

function NavigationLinks() {
  const [isActive, setActive] = useState<boolean[]>([false, false, false, false]);

  const firstLink = () =>{
    setActive([true,false,false,false]);
  }
  const secondLink = () =>{
    setActive([false,true,false,false]);
  }
  const thirdLink = () =>{
    setActive([false,false,true,false]);
  }
  const fourthLink = () =>{
    setActive([false,false,false,true]);
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
      <Route path='/' element={<Text >Welcome to my App !</Text>} />
      <Route path='/Notation' element={<Notation />} />
      <Route path='/Arpeggiator' element={<Arpeggiator />} />
      <Route path='/Scales' element={<Scales />} />
      <Route path='/Fifths' element={<Fifths />} />
    </Routes>
  )
}