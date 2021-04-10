import React from 'react'
import '../styles/Header.css';
import logo from '../styles/Popularify_Logo.png'

export default function Header() {
    return (
        <div className="header-container">
            <img id="logo" alt="The Popularify logo" src={logo} />
        </div>
    )
}
