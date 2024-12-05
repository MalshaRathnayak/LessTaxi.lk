import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadPage from './components/LoadPage';
import StartPage from './components/StartPage';
import NumberPage from './components/NumberPage';
import VerifyPage from './components/VerifyPage';
import NamePage from './components/NamePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadPage />} />
        <Route path="/next" element={<StartPage />} />
        <Route path="/number" element={<NumberPage/>} />
        <Route path="/verify" element={<VerifyPage/>} />
        <Route path="/name" element={<NamePage/>} />
      </Routes>
    </Router>
  );
};

export default App;
