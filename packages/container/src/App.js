import React from 'react';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthApp from './components/AuthApp';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </>
      </BrowserRouter>
    </StylesProvider>
  );
};
