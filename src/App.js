import Nav from './component/nav.js';
import Login from './component/login';
import Home from './component/home.js';
import Admin from './component/admin';
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
