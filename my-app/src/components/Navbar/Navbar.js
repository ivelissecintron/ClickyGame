import React from "react";
import "./Navbar.css";

const Navbar = props => (

<div >
    <nav className="navbar fixed-top">
        <h1 className="App-title">The Office Clicky Game</h1>
          <h2 className="Instructions">Click on an image to earn points, but don't click on any image more than once!</h2>

        <ul>
            <li className="title score">
                Score: {props.score} | High Score: {props.highscore}
            </li>
        </ul>
    </nav>
</div>

);

export default Navbar;