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
import Header from './components/Header'

function App() {
  return (
      <div className="App">
        <Router>
            <ScrollToTop>
            <div>
                <Header />
                <Switch>
                    {/*<Route path="/news">*/}
                        {/*<h1>News</h1>*/}
                    {/*</Route>*/}
                    <Route path="/currentprojects">
                        <CurrentProjects />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
            </ScrollToTop>
        </Router>
      </div>
  );
}

export default App;
