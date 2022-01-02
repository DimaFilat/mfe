import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

export default () => {
  return (
    <Router>
      <>
        <Header />
        <MarketingApp />
      </>
    </Router>
  );
};
