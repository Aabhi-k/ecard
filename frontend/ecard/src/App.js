import './App.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import PrivateRouter from './service/PrivateRouter.jsx';

import Login from './login/login.jsx';
import Register from './Register/Register.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Home from './Home/Home.jsx';
import Create from './Create/Create.jsx';

function App() {
  return (
    <div className="App">
      
      
      <Router>
      <Navbar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<PrivateRouter element={<Create />} />} />
       </Routes>
      </Router>

    </div>
  );
}

export default App;
