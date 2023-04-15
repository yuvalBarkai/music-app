import { BrowserRouter } from 'react-router-dom';
import './App.css'
import NavigationLinks from './routing/NavigationLinks';
import Routing from './routing/Routing';

export default () => {
  return (
    <BrowserRouter>
      <NavigationLinks />
      <Routing />
    </BrowserRouter>
  )
}