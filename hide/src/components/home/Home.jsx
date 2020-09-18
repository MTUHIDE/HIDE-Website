import React from 'react';

function Home() {
    return (
        <div>
            <body id="top">
            <section className="hero">
                <section className="navigation">
                    <header>
                        <div className="header-content">
                            <div className="logo"><a href="#top"><img href="%PUBLIC_URL%/HIDE_Logo.png" alt="Sedna logo" /></a>
                            </div>
                            <div className="header-nav">
                                <nav>
                                    <ul className="primary-nav">
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#projects">Projects</a></li>
                                        <li><a href="#management">Management</a></li>
                                        <li><a href="#contact">Contact</a></li>
                                    </ul>

                                </nav>
                            </div>
                            <div className="navicon">
                                <a className="nav-toggle" href="#"><span></span></a>
                            </div>
                        </div>
                    </header>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="hero-content text-center">
                                <h1 style={{fontSize: 100 + 'px', letterSpacing:20 + 'px', textShadow:5 + 'px'}}>HIDE</h1>
                                <p className="intro">Humane Interface Design Enterprise</p>
                                <a href="#about" className="btn btn-accent btn-large">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features-extra section-padding" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="feature-list">
                                <h3>About Us</h3>
                                <p>The <strong>Humane Interface Design Enterprise</strong> is a student-run organization
                                    focused on <strong>software development and usability research.</strong>
                                    Our primary goal is to give our members a headstart in their careers by immersing
                                    them in a <strong>collaborative environment</strong> where they can gain real world
                                    work experience.</p>
                                <p><strong>HIDE</strong> alumni are some of the most distinguished Michigan Tech
                                    students. <strong>Google, Handshake, and Target</strong> are just a few of the many
                                    places where
                                    members have been able to secure jobs.
                                </p>
                                <p>We have worked on a variety of different projects in the past. From comparing
                                    cognitive load while driving with <strong>Google Glass and Android</strong>, to
                                    usability testing a prototype of <strong>Chrysler's U-Connect system</strong>, to
                                    building a crowd-sourced music selection Web App for <strong>Winter
                                        Carnival</strong>. HIDE
                                    members have the opportunity to work on unique projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="macbook-wrap wp3"></div>
                <div className="responsive-feature-img"><img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/80/User-experience-diagram.png"
                    alt="responsive devices" /></div>
            </section>

            <section className="blog-intro section-padding" id="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Current Projects</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-sm-12 col-xs-12 leftcol">
                            <h5>Survey Application</h5>
                            <p>A collaboration with USG and Career services to increase feedback in various applications
                                (i.e. on campus, career fair). Easy to use custom interface to create, distribute, and
                                analyze surveys.</p>
                            <img
                                src=" http://www.mtu.edu/mtu_resources/images/download-central/logos/full-wordmark-stacked/blacktext-goldbar.png"
                                style={{height:150 + 'px'}} />
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 rightcol ">
                            <h5>MTMC Scheduling Application</h5>
                            <p>A web application for viewing / creating availability, services, users, and appointments
                                for Michigan Tech Learning Centers. </p>
                        </div>
                        <div className="col-md-6 col-sm-12 col-xs-12 rightcol">
                            <h5>CoCo Temp</h5>
                            <p>Citizen Science Data collection system for micro-climate, research scientists complete
                                data logging system whose feature set focuses on analysis of micro climate temp
                                data.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section className="testimonial-slider section-padding text-center" id="management">
                <h1 style={{marginTop: -50 +'px', marginBottom: 50 +'px', color: 'white'}} className="clearfix">Management</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li>
                                        <div className="avatar"><img
                                            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/1978790_10203384345875282_502897345_n.jpg?oh=e670aff2bce23cac70714d6a3e623dc6&oe=5B156D19"
                                            alt="Emily Leopold" /></div>
                                        <h2>Emily Leopold</h2>
                                        <p className="author">President / Project Team Lead</p>
                                    </li>
                                    <li>
                                        <div className="avatar"><img
                                            src="https://paulisaweso.me/img/headshot.26f969e1.jpg"
                                            alt="Paul Esch-Laurent" /></div>
                                        <h2>Paul Esch-Laurent</h2>
                                        <p className="author">Interim Vice President</p>
                                    </li>
                                    <li>
                                        <div className="avatar"><img
                                            src="https://i1.rgstatic.net/ii/profile.image/282497905643522-1444364157411_Q128/Caden_Sumner.jpg"
                                            alt="Caden Sumner" /></div>
                                        <h2>Caden Sumner</h2>
                                        <p className="author">MTMC Scheduling App Team Lead</p>
                                    </li>
                                    <li>
                                        <div className="avatar"><img src="https://paulisaweso.me/img/headshot.26f969e1.jpg" alt="Kyle Bray" /></div>
                                        <h2>Kyle Bray</h2>
                                        <p className="author">CoCo Temp Team Lead</p>
                                    </li>
                                    <li>
                                        <div className="avatar"><img
                                            src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/18839121_1909294362670624_2062878286640075788_n.jpg?oh=cadec9a6ddf0e9344ee4c4cdcc14ae33&oe=5AE18D9C"
                                            alt="Glory Creed" /></div>
                                        <h2>Glory Creed</h2>
                                        <p className="author">Secretary</p>
                                    </li>
                                    <li>
                                        <div className="avatar"><img
                                            src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/005/04d/08e/2f76e3a.jpg"
                                            alt="Dr. Robert Pastel" /></div>
                                        <h2>Dr. Robert Pastel</h2>
                                        <p className="author">Faculty Advisor</p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sign-up section-padding text-center" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <h3>Contact</h3>
                            <p>Our general meetings are <strong>Wednesdays from 6-7pm in Rekhi 214.</strong> Prospective
                                students are encouraged to attend.
                                For more information, please contact <strong><a
                                    href="mailto:hide-management-l@mtu.edu">hide-management-l@mtu.edu</a></strong></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="to-top">
                <div className="container">
                    <div className="row">
                        <div className="to-top-wrap">
                            <a href="#top" className="top"><i className="fa fa-angle-up"></i></a>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer-links">
                                <p>
                                    Copyright &copy; 2020 Humane Interface Design Enterprise</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js" />
            <script src="js/vendor/jquery-1.11.2.min.js" />
            <script src="bower_components/retina.js/dist/retina.js" />
            <script src="js/jquery.fancybox.pack.js" />
            <script src="js/vendor/bootstrap.min.js" />
            <script src="js/scripts.js?v=1517849600" />
            <script src="js/jquery.flexslider-min.js" />
            <script src="bower_components/classie/classie.js" />
            <script src="bower_components/jquery-waypoints/lib/jquery.waypoints.min.js" />
            </body>
        </div>
    );
}

export default Home;
