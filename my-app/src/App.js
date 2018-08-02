import React, { Component } from 'react';
import './App.css';
import Andy from './assets/images/andy.png';
import Creed from './assets/images/creed.jpg';
import Dwight from './assets/images/dwight.png';
import Jim from './assets/images/jim.jpg';
import Kevin from './assets/images/kevin.jpg';
import Meredith from './assets/images/meredith.png';
import Michael from './assets/images/michael.jpg';
import Oscar from './assets/images/oscar.jpeg';
import Pam from './assets/images/pam.jpg';
import Phyllis from './assets/images/phyllis.jpg';
import Stanley from './assets/images/stanley.png';
import Toby from './assets/images/toby.jpg';
import Kelly from './assets/images/kelly.jpg';
import Angela from './assets/images/angela.png';
import Darryl from './assets/images/darryl.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav className="navbar">
          <ul>
            <li className="guess">
              You guessed correctly or incorrectly!
            </li>
            <li className="score">
              Score: 0 | Top Score : 0
            </li>  
          </ul>
        </nav>        

        <header className="App-header">
          <h1 className="App-title">The Office Clicky Game</h1>
          <h2 className="Instructions">Click on an image to earn points, but don't click on any image more than once!</h2>
        </header>

        <main className="container">
        <img src={Andy} alt={"Andy"}/>
        <img src={Creed} alt ={"Creed"}/>
        <img src={Dwight} alt ={"Dwight"}/>
        <img src={Jim} alt ={"Jim"}/>
        <img src={Kevin} alt ={"Kevin"}/>
        <img src={Meredith} alt ={"Meredith"}/>
        <img src={Michael} alt ={"Michael"}/>
        <img src={Oscar} alt ={"Oscar"}/>
        <img src={Pam} alt ={"Pam"}/>
        <img src={Phyllis} alt ={"Phyllis"}/>
        <img src={Stanley} alt ={"Stanley"}/>
        <img src={Toby} alt ={"Toby"}/>
        <img src={Kelly} alt ={"Kelly"}/>
        <img src={Angela} alt ={"Angela"}/>
        <img src={Darryl} alt ={"Darryl"}/>
        </main>

        <footer className="footer">
          <a href="https://github.com/ivelissecintron/ClickyGame">©2018 Ivelisse Cintron</a>
        </footer>

      </div>
    );
  }
}

export default App;
