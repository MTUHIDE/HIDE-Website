import {Link} from "react-router-dom";
import React from "react";
import './home/Home.css';

export default class Header extends React.Component {
    openMenu = () => {
        let x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    openSubMenu = () => {
        let x = document.getElementById("myDropdownContent");
        if (x.className === "dropdown-content") {
            x.className += " responsive";
        } else {
            x.className = "dropdown-content";
        }
    }

    handleScroll = () => {
        if (this.props.scrollToTarget) {
            this.props.scrollToTarget()
        }
    }

    render() {
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
                        <div className="dropdown-group">
                            <a className="navLink dropdown-main" href="/#projects">
                                Projects
                            </a>
                            <a className="dropdown">
                                <a className="fa fa-caret-down" id="caret-down" onClick={this.openSubMenu}/>
                                <div className="dropdown-content" id="myDropdownContent">
                                    <Link to="/currentprojects" hash="#top">Current Projects</Link>
                                    {/*<div className="header" onClick={this.handleScroll}>*/}
                                    {/*    <Link className="header-link" to={{*/}
                                    {/*        pathname: '/currentprojects',*/}
                                    {/*        state: {*/}
                                    {/*            fromBanner: true*/}
                                    {/*        }*/}
                                    {/*    }}*/}
                                    {/*    >Current Projects*/}
                                    {/*    </Link>*/}
                                    {/*</div>*/}
                                </div>
                            </a>
                        </div>
                        <a className="navLink" href="/#management">Management</a>
                        <a className="navLink" href="/#contact">Contact</a>
                        <a className="icon navLinkIcon" onClick={this.openMenu}>&#9776;</a>
                    </div>
                </div>
            </div>
        )
    }
}