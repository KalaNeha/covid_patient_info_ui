import React from 'react';
import Nav from './component/Nav';
import Login from './admin/Login';
import Home from './user/Home';
import PatientInformation from './admin/PatientInformation';
import StateInfo from './user/State_list';
import DistrictList from './user/District_list';
import DistrictInformation from './admin/DistrictInformation';
import './App.css';
import {BrowserRouter as Router,  Route, Routes,} from 'react-router-dom';
import Footer from "./component/Footer";
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./component/PrivateRoute"

function App(){
    return (
      <>
      <Nav/>
      <Router>
      <AuthProvider>
    {/* <ProtectedRoutes /> */}
    <Routes>
     {/* <Route path="/" element={<Navigate to="/home" />} /> */}

    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    {/* <Route path="/admin" element={<PatientInformation />} /> */}
    <Route path='/:country' element={<StateInfo/>} />
    <Route path='/:country/:state' element={<DistrictList/>} />
    <Route path='/:country/:state/:district' element={<PrivateRoute/>}>
      <Route index element={<DistrictInformation/>}/>
    </Route>
    <Route path='/:country/:state/:district/:patient' element={<PrivateRoute />} >
      <Route index element={<PatientInformation/>}/>
    </Route>
    {/* <Route path='/:country/:state/:district' element={<DistrictInformation/>}/>
    <Route path='/:country/:state/:district/:patient' element={<PatientInformation />} /> */}

    </Routes>
    </AuthProvider>
</Router>
<Footer/>

      </>
     
    );
  
}
 
export default App;


