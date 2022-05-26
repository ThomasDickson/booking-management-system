import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Booking from './components/pages/Booking'
import Account from './components/pages/Account'
import Test from './components/pages/Test'
import MakeAcc from './components/pages/MakeAcc'

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/test" element={<Test />} />
        <Route path="/MakeAcc" element={<MakeAcc />} />
      </Routes>
    </Router> 
  );
}

export default App;
