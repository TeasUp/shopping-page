import React from "react";
import "./SubNavbar.css";

const leftNavItems = [
    { href: "https://www.example.com", label: "Home" },
    { href: "https://www.example.com", label: "Digital Products" },
    { href: "https://www.example.com", label: "Kitchen Products" },
    { href: "https://www.example.com", label: "Car Repair Tools" },
    { href: "https://www.example.com", label: "Contact Us" },
    { href: "https://www.example.com", label: "Blog" },
];

const rightNavItems = [
    { href: "https://www.example.com", label: "Need Help?" },
    { href: "https://www.example.com", label: "Offers" },
];

export default function SubNavbar() {
    return (
        <ul className="sub-navbar">
            <section className="subNav-left-side">
                {leftNavItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </section>
            <section className="subNav-right-side">
                {rightNavItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </section>
        </ul>
    );
}