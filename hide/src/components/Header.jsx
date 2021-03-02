import {Link} from "react-router-dom";
import React from "react";

function Header () {
        function openMenu() {
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
                        <div className="navLink dropdown" id="dropdown">
                            <a className="dropbtn" href="/#projects">Projects</a>
                            <div className="dropdown-content">
                                {/*<a href="/currentprojects#top">Current Projects</a>*/}
                                <Link to="/currentprojects#top">Current Projects</Link>
                            </div>
                        </div>
                        <a className="navLink" href="/#management">Management</a>
                        <a className="navLink" href="/#contact">Contact</a>
                        <a className="icon navLinkIcon" onClick={openMenu}>&#9776;</a>
                    </div>
                </div>
            </div>
        )
}

export default Header;