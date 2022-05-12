import './App.css';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" exact/>
      </Routes>
    </Router>
    </> 
  );
}

export default App;
