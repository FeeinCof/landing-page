import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={< HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
