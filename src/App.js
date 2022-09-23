import Nav from './component/Nav';
import Login from './component/Login';
import Home from './component/Home';
import Admin from './component/Admin';
import State_info from './component/State';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

function App() {
  return (
 <Router>
    <Nav/>
    <Routes> <Route path="/" exact element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/admin" element={<Admin />} />
    </Routes>
</Router>
  );
}

export default App;
