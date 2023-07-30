import React from 'react';
import NavBar from "./layout/nav-bar";
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from "./routes";


function App() {

  return (
      <Router>
          <div>
              <NavBar />
              <div className="container mt-5">
                 <Routes />
              </div>
          </div>
      </Router>
  );
}

export default App;
