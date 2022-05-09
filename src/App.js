import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'

import Footer from './components/Footer';
import Login from './components/Login';
//import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to= '/menu'>Menu</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path= "/auth/ login" element={<Login />} />
        </Routes>
        <Footer />
        <Login />
    </div>
  );
}

export default App;
