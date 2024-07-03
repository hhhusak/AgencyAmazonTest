import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './ui/header/Header';
import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';
import About from './about/About';
import styles from './app.module.css'

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
