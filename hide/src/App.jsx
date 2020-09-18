import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from './components/home/Home.jsx';


function App() {
  return (
      <div>
        <Router>
            <div>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/news">
                    <h1>News</h1>
                </Route>
            </div>
        </Router>
      </div>
  );
}

export default App;
