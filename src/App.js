import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';
import SmartHome from './features/SmartHome';

// import mqttConnect from 'mqtt'

// Lazy load - Code splitting



function App() {

  return (
    
      <div className="app">
      
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Redirect exact from="/" to="/smarthome" />

            <Route path="/smarthome" component={SmartHome} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>

    
  );
}

export default App;