import React, { useState, useEffect } from 'react';
import './App.css';
// import io from 'socket.io-client';
import Register from './components/Register';
import Login from './components/Login';
import Message from './components/Message';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Dash from './components/Dash';
import Image from './components/Image';
import Paypal from './components/Paypal';
import Logged from './components/Logged';
import axios from 'axios';

function App() {
  const [user, setUser] = useState([])

  useEffect(() => {

    axios.get('http://localhost:8000/api/user', {withCredentials: true})
    .then(res =>{
        console.log(res)
        setUser(res.data.user)
    })
    .catch(err => {
        console.log(err)
    })
}, [])

  // const [socket] = useState(() => io(':8000'));

  // useEffect(() => {
  //   console.log('Is this running?');
  //   socket.on('Welcome', data => console.log(data));
  //   return () => socket.disconnect(true);
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link to="/message"></Link>
          <Link to="/logged"></Link>
          <Link to="/image"></Link>
          <Link to="/register"></Link>
          <Link to="/pay"></Link>
          <Link to="/"></Link>
          <Switch>
            <Route path="/message/:id">
              <Message user={user}/>
            </Route>
            <Route path="/logged/:id">
              <Logged user={user}/>
            </Route>
            <Route path="/image/:id">
              <Image />
            </Route>
            <Route path="/pay">
              <Paypal user={user}/>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              
              <Dash user={user}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
