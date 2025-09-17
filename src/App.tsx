import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainDefault } from './screens/MainDefault/MainDefault';
import { PremiumPage } from './screens/Premium/PremiumPage';
import { CountrySelector } from './screens/CountrySelector/CountrySelector';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainDefault />} />
        <Route path="/premium" element={<PremiumPage />} />
        <Route path="/countries" element={<CountrySelector />} />
      </Routes>
    </Router>
  );
}

export default App;