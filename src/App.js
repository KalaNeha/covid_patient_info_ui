import Nav from './component/Nav';
import Login from './component/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import State_info from './pages/State';
import District_info from './pages/District';
import Patient_info from './pages/Patient';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

function App() {
  return (
 <Router>
    <Nav/>
    <Routes> <Route path="/" exact element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/admin" element={<Admin />} />
    <Route path='/country/india' element={<State_info/>}/>
    <Route path='/state/delhi' element={<District_info/>}/>
    <Route path='/patient' element={<Patient_info/>}/>
    </Routes>
</Router>
  );
}

export default App;
