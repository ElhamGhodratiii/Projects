import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import HomePage from './pages/HomePage';
import TicketPage from './pages/TicketPage';
import AllTicketsPage from './pages/AllTicketsPage';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create-ticket" component={TicketPage} />
          <Route exact path="/all-tickets" component={AllTicketsPage} />
        </Routes>
      </QueryParamProvider>
    </BrowserRouter>
  );
}

export default App;

