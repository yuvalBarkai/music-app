import { NavLink, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Arpeggiator from './components/Arpeggiator/Arpeggiator';
import Notation from './components/Notation/Notation';


function App() {
    return (
        <div className="App">
            <h1>Musical Practices</h1>
            <BrowserRouter>
                <NavigationLinks />
                <Routing />
            </BrowserRouter>
        </div>
    );
}




function NavigationLinks() {
    return (
        <nav>
            <NavLink to="/notation" className="NavLink">Translator</NavLink>&nbsp;|&nbsp;
            <NavLink to="/arpeggiator" className="NavLink">Arpeggiator</NavLink>{/* &nbsp;|&nbsp; */}
        </nav>
    )
}

function Routing(){
    return(
        <Routes>
            <Route path='/notation' element={ <Notation /> } />
            <Route path='/arpeggiator' element={ <Arpeggiator /> } />
        </Routes>
    )
}

export default App;