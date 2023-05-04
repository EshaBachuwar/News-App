import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import FetchData from './components/FetchData';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/general" element={<FetchData cat="general"/>} />
          <Route path="/business" element={<FetchData cat="business"/>} />
          <Route path="/entertainment" element={<FetchData cat="entertainment"/>} />
          <Route path="/health" element={<FetchData cat="health"/>} />
          <Route path="/science" element={<FetchData cat="science"/>} />
          <Route path="/sports" element={<FetchData cat="sports"/>} />
          <Route path="/technology" element={<FetchData cat="technology"/>} />
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
