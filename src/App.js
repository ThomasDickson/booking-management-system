import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/pages/Home'
import Video from './components/Video';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <NavigationBar/>
      <Video />
      <Routes>
      <Route path='/' exact component = {Home}/>
      </Routes>
    </Router>
    </> 
  );
}

export default App;
