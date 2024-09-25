import React from "react";
import "./Navbar.css";
import SubNavbar from "./SubNavbar/SubNavbar";

import { SlBasket } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";

export default function Navbar({ companyName, companyDesc, supportNumber }) {
    return (
        <nav className="navbar">
            <ul className="nav-items">
                <li className="nav-item nav-brand">
                    <h4>{companyName}</h4>
                    <p>{companyDesc}</p>
                </li>
                <li className="nav-item nav-search">
                    <input type="text" placeholder="I'm looking for a..." />
                    <button>search</button>
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
                    {supportNumber}
                </li>
            </ul>
            <SubNavbar />
        </nav>
    );
}
