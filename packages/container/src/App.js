import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router>
        <>
          <Header />
          <MarketingApp />
        </>
      </Router>
    </StylesProvider>
  );
};
