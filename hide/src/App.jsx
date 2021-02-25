import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import CurrentProjects from './components/current_projects/CurrentProjects';


function App() {
  return (
      <div className="App">
        <Router>
            <div>
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
        </Router>
      </div>
  );
}

export default App;
