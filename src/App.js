import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Component/Home/Home';
import Destination from './Component/Destination/Destination';
import BookingPage from './Component/BookingPage/BookingPage';
import Hotel from './Component/Hotel/Hotel';
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import RouteNotMatch from './Component/RouteNotMatch/RouteNotMatch';


export const UserContext = createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState([])
  return (
    <div className="app" >
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/place/:key">
              <Destination />
            </Route>
            <Route path="/destination/:place">
              <BookingPage />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/hotel/:room">
              <Hotel />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <RouteNotMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
