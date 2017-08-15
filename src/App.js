import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfUsers from './ListOfUsers';



const users = [
  { name: 'jerry', job: 'comedian' },
  { name: 'george', job: 'architect' },
  { name: 'elaine', job: 'J peterman\'s assistant' },
  { name: 'kramer', job: 'trust-funder' },
  { name: 'Ham', job: 'being tasty' },
]




const App = (props) => {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>redux</h2>
        </div>
        <div>
          <ul className='App-navbar'>
            <li className="App-navbar-logo"><a href='#home'>Scott Foster Development</a></li>
            <li className='App-navbar-home'><a href="#home">Home</a></li>
            <li className='App-navbar-news'><a href="#news">News</a></li>
            <li className='App-navbar-contact'><a href="#contact">Contact</a></li>
            <li className='App-navbar-about'><a href="#about">About</a></li>
          </ul>
        </div>
        <ListOfUsers users={users} />


      </div>
    );

}

export default App;
