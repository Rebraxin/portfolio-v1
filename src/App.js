// == Import npm
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// == Import local
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Resumes from './pages/Resumes';
import Portfolios from './pages/Portfolios';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';

// == Component
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resumes} />
        <Route path="/projects" component={Portfolios} />
        <Route path="/contact" component={Contact} />
        <Route path="*" component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
};

// == Export default
export default App;
