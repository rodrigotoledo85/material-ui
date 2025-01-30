import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Transferências from './pages/Transferências';
import Conta from './pages/Conta';
import DashboardMenu from './pages/Dashboard';
import Depositar from './pages/Depositar';
import Extrato from './pages/Extrato';
import SignUp from './pages/SignUp';
import Footer from './pages/Footer';
  
function App() {
  return (
    <Router>
      {window.location.pathname !== '/' && window.location.pathname !== '/signup' && <NavBar />}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/depositar" element={<Depositar />} />
        <Route path="/transferências" element={<Transferências />} />
        <Route path="/extrato" element={<Extrato />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/dashboard" element={<DashboardMenu />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
