import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Booking from './components/pages/Booking'

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
    </Router> 
  );
}

export default App;
