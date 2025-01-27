import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Saldo from './pages/Saldo';
import Transferências from './pages/Transferências';
import Conta from './pages/Conta';
import DashboardMenu from './pages/Dashboard';
import Depositar from './pages/Depositar';
import Extrato from './pages/Extrato';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/saldo" element={<Saldo />} />
        <Route path="/depositar" element={<Depositar />} />
        <Route path="/transferências" element={<Transferências />} />
        <Route path="/extrato" element={<Extrato />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/dashboard" element={<DashboardMenu />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
