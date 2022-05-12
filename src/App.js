import './App.css';
import NavigationBar from './components/NavigationBar';
import Video from './components/Video';
import Home from './components/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path='/' exact component = {Home}/>
      </Routes>
    </Router>
    </> 
  );
}

export default App;
