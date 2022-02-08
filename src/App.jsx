import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'
import './App.css';
import Home from './components/home/Home';
import CurrentProjects from './components/current_projects/CurrentProjects';
import PastProjects from './components/past_projects/PastProjects';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <div>
            <Header/>
            <Switch>
              <Route path="/currentprojects">
                <CurrentProjects/>
              </Route>
              <Route path="/pastprojects">
                <PastProjects/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </div>
        </ScrollToTop>
      </Router>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="footer-links">
                <p>
                  Copyright © 2021 Humane Interface Design Enterprise</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
