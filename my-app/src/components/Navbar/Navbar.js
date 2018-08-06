import React from "react";
import "./Navbar.css";

const Navbar = props => (

<div >
    <nav className="navbar fixed-top">
        <ul>
            <li className="title score">
                Score: {props.score} | High Score: {props.highscore}
            </li>
        </ul>
    </nav>
</div>

);

export default Navbar;