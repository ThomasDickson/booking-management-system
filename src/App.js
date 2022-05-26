import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Booking from './components/pages/Booking'
import Account from './components/pages/Account'

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/account//*" element={<Account/>} />    
      </Routes>
    </Router> 
  );
}

export default App;
