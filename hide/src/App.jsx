import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import './App.css';
import Home from './components/home/Home.jsx';
import CurrentProjects from './components/current_projects/CurrentProjects.jsx';


function App() {
  return (
      <div>
        <Router>
            <div>
                <Switch>
                    {/*<Route path="/news">*/}
                        {/*<h1>News</h1>*/}
                    {/*</Route>*/}
                    <Route path="/currentprojects" component={CurrentProjects}/>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </div>
        </Router>
      </div>
  );
}

export default App;
