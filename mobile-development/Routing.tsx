import { Navigate, Route, Routes } from 'react-router-native';
import { Text } from 'react-native';
import Intervals from './components/Intervals';

export default function Routing() {
   return (
      <Routes>
         <Route path="/" element={<Text>Welcome</Text>} />
         <Route path="/Intervals" element={<Intervals/>} />
         <Route path="/Arpeggiator" element={<Text>Arpeggiator</Text>} />
         <Route path="/Scales" element={<Text>Scales</Text>} />
         <Route path="*" element={<Navigate to="/Intevals" replace={true} />} />
      </Routes>
   )
}

