import React from 'react';
import Nav from './component/Nav';
import Login from './pages/Login';
import Home from './pages/Home';
import Admin from './pages/Admin';
import StateInfo from './pages/State_list';
import DistrictList from './pages/District_list';
import DistrictInformation from './pages/District_info';
import './App.css';
import {BrowserRouter as Router,  Route, Routes,} from 'react-router-dom';

function App(){
  
    return (
      <Router>
    <Nav/>
    {/* <ProtectedRoutes /> */}
    <Routes>
     {/* <Route path="/" element={<Navigate to="/home" />} /> */}

    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/admin" element={<Admin />} />
    <Route path='/:country' element={<StateInfo/>} />
    <Route path='/:country/:state' element={<DistrictList/>} />
    <Route path='/:country/:state/:district' element={<DistrictInformation/>}/>

    </Routes>
</Router>
    );
  
}
 
export default App;


