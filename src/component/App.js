import Nav from './component/Nav.js';
import Login from './component/Login.js';
import Home from './component/Home.js';
import Admin from './component/Admin.js';
import STable from './component/SecondaryTable.js';
import './App.css';
import {BrowserRouter as Router,Switch , Route ,Routes} from 'react-router-dom';

function App() {
  return (
 <Router>
    <Nav/>
    <Routes> <Route path="/" exact element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="/USA" element={<STable />} />
    </Routes>
</Router>
  );
}

export default App;
