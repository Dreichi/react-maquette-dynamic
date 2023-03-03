import React from "react";
import "./header.css";
import background from "./background.jpg";

const Header = () => {
    return (
        <header>
            <div class="header">
            <img class="header__background" src={background} alt="background"></img>
            <h1 class="header__h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <input type="email" name="mail" id="mail" placeholder="Email adress"></input>
            <button type="button" value="Submit">Submit</button>
            </div>
        </header>
    )
}

export default Header