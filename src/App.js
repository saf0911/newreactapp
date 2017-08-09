import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfUsers from './ListOfUsers';

const users = [
  { name: 'jerry', job: 'comedian' },
  { name: 'george', job: 'architect' },
  { name: 'elaine', job: 'J peterman\'s assistant' },
  { name: 'kramer', job: 'trust-funder' },
]




const App = (props) => {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>redux</h2>
        </div>
        <ListOfUsers users={users} />

      </div>
    );

}

export default App;
