import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import './App.css';
import Home from './components/home/Home.jsx';


function App() {
  return (
      <div>
        <Router>
            <div>
                <Switch>
                    {/*<Route path="/news">*/}
                        {/*<h1>News</h1>*/}
                    {/*</Route>*/}
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
