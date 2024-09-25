import React from "react";
import "./Navbar.css"

import { SlBasket } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-items">
                <li className="nav-item nav-brand">
                    <h4>YourNameHere</h4>
                    <p>lil dic here!</p>
                </li>
                <li className="nav-item nav-search">
                    <input type="text" placeholder="I want a ...." />
                    <button>
                        search
                    </button>
                </li>
                <li className="nav-item nav-account">
                    <a href="https://www.example.com">Log In</a>
                    <a href="https://www.example.com">Sign Up</a>
                </li>
                <li className="nav-item nav-cart">
                    <SlBasket />
                </li>
                <li className="nav-item nav-support">
                    <BiSupport />
                    021-12345678
                </li>
            </ul>
        </nav>
    );
}
