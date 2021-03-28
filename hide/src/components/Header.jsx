import {Link} from "react-router-dom";
import React from "react";
import './home/Home.css';

function Header() {
    function openMenu () {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

        return (
            <div>
                <div>
                    <section className="navigation fixed back">
                        <header className="headerStyle"/>
                    </section>
                </div>
                <div className="container navContainer">
                    <div className="topnav" id="myTopnav">
                        <a className="logoNav" href="/#top"><img src={window.location.origin + '/HIDE_Logo.png'}
                                                                 alt="HIDE logo"/></a>
                        <a className="navLink" href="/#about">About</a>
                        <div className="dropdown">
                            <a className="dropbtn" href="/#projects">
                                Projects<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><i className="fa fa-caret-down"></i>
                            </a>
                                <div className="dropdown-content">
                                    <Link to="/currentprojects"><i className="fa fa-angle-right"></i><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Current Projects</Link>
                                    {/*<Link to="/currentprojects">Past Projects</Link>*/}
                                </div>
                        </div>
                        <a className="navLink" href="/#management">Management</a>
                        <a className="navLink" href="/#faq">FAQ</a>
                        <a className="navLink" href="/#contact">Contact</a>
                        <button className="icon navLinkIcon" onClick={openMenu}>&#9776;</button>
                    </div>
                </div>
            </div>
        );
}

export default Header;