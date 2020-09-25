import React from 'react';
import './Home.css';

function Management() {
    return (
        <div>
            <section className="testimonial-slider section-padding text-center" id="management">
                <h1 className="marginh1 clearfix font60 outline">Management</h1>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <div className="center-block">
                        <ol className="carousel-indicators indicator-center">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                            <li data-target="#myCarousel" data-slide-to="1"/>
                            <li data-target="#myCarousel" data-slide-to="2"/>
                            <li data-target="#myCarousel" data-slide-to="3"/>
                            <li data-target="#myCarousel" data-slide-to="4"/>
                            <li data-target="#myCarousel" data-slide-to="5"/>
                            <li data-target="#myCarousel" data-slide-to="6"/>
                            <li data-target="#myCarousel" data-slide-to="7"/>
                            <li data-target="#myCarousel" data-slide-to="8"/>
                            <li data-target="#myCarousel" data-slide-to="9"/>
                            <li data-target="#myCarousel" data-slide-to="10"/>
                        </ol>
                    </div>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src={window.location.origin + '/img/lena_s.jpg'} alt="Lena S"
                                 className="imageCentered img-fluid"/>
                            <h2>Lena Stenvig</h2>
                            <p className="author">President</p>
                        </div>
                        <div className="item">
                            <img src={window.location.origin + '/img/ethan_m.png'} alt="Ethan M"
                                 className="imageCentered img-fluid"/>
                            <h2>Ethan Matzdorf</h2>
                            <p className="author">Vice President / HuskyHunt Team Lead</p>
                        </div>
                        <div className="item">
                            <img src={window.location.origin + '/img/thomas_g.jpg'} alt="Thomas G"
                                 className="imageCentered img-fluid"/>
                            <h2>Thomas Grifka</h2>
                            <p className="author">GVSC Team Lead</p>
                        </div>
                        <div className="item">
                            <img src={window.location.origin + '/img/justin_m.JPG'} alt="Justin M"
                                 className="imageCentered img-fluid"/>
                            <h2>Justin Martin</h2>
                            <p className="author">Voting Booth Team Lead</p>
                        </div>
                        <div className="item">
                            <img src={window.location.origin + '/img/robert_p.jpg'} alt="Dr. Robert Pastel"
                                 className="imageCentered img-fluid"/>
                            <h2>Dr. Robert Pastel</h2>
                            <p className="author">Faculty Advisor</p>
                        </div>
                        <div className="item">
                            <img src={window.location.origin + '/img/jason_h.jpg'} alt="Jason J"
                                 className="imageCentered img-fluid"/>
                            <h2>Jason Holtrey</h2>
                            <p className="author">Treasurer</p>
                        </div>
                        <div className="item">
                            <img src={window.location.origin + '/img/brett_p.jpg'} alt="Brett P"
                                 className="imageCentered img-fluid"/>
                            <h2>Brett Post</h2>
                            <p className="author">Chem Store Team Lead</p>
                        </div>
                        <div className="item">
                            <img src={window.location.origin + '/img/mason_s.jpg'} alt="Mason S"
                                 className="imageCentered img-fluid"/>
                            <h2>Mason Sayles</h2>
                            <p className="author">CoCoTemp Team Lead</p>
                        </div>
                        <div className="item">
                            <img src={window.location.origin + '/img/isaac_l.jpg'} alt="Isaac L"
                                 className="imageCentered img-fluid"/>
                            <h2>Isaac Long</h2>
                            <p className="author">PillowTalk Lead</p>
                        </div>
                        <div className="item">
                            <img src={window.location.origin + '/img/shruti.jpg'} alt="Shruti G"
                                 className="imageCentered img-fluid"/>
                            <h2>Shruti</h2>
                            <p className="author">UX and AccelorMittal Team Lead</p>
                        </div>
                        <div className="item">
                            <img src={window.location.origin + '/img/charles_v.jpg'} alt="Charles V"
                                 className="imageCentered img-fluid"/>
                            <h2>Charles Vidro</h2>
                            <p className="author">HIDE Website Team Lead</p>
                        </div>
                    </div>

                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Management;