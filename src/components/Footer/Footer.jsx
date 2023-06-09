import React from "react";
import './Footer.css';

const Footer = () => {
    const date = new Date();

    return (
        <footer>
            <p>Designed by Team UpperMoons ⭐</p>
            <p>Copyright ©️ {date.getFullYear()}</p>
        </footer>
    )
}

export default Footer;