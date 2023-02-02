import './styles/main.scss';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {Page} from './Components/Pages';
import Home from './Views/Home';
import Users from './Views/users';

function App() {
  return (
    <div className="app">
      <Router>
        <Page>
          <Routes>
          <Route exact path="/" element={<Home/>}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path="*">404</Route>
          </Routes>
        </Page>
      </Router>
    </div>
  );
}

export default App;
