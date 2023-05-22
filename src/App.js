import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path="/adduser" element={<AddUser />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route exact path="/about" element={<About />} /> */}
          {/* <Route exact path="/login" element={<Login />} /> */}
          {/* <Route exact path="/signup" element={<Signup />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
