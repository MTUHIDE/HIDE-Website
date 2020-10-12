import React from 'react';
import './Home.css';

function ManagerCard(props) {
        return (
            <div className={"item " + props.active}>
                <img src={window.location.origin + props.imagePath} alt={props.name}
                className="imageCentered img-fluid"/>
                <h2>{props.name}</h2>
             <p className="author">{props.role}</p>
            </div>
        );
}

function Management() {
    return (
        <div>
            <section className="testimonial-slider section-padding text-center managementClass" id="management">
                <h1 className="marginh1 clearfix font60 outline">Management</h1>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <div className="center-block">
                        <ol className="carousel-indicators">
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
                        <ManagerCard name="Lena Stenvig" imagePath="/img/lena_s.jpg" role="President" active="active"/>
                        <ManagerCard name="Justin Martin" imagePath="/img/justin_m.jpg" role="Vice President / Voting Booth Team Lead" active=""/>
                        <ManagerCard name="Jason Holtrey" imagePath="/img/jason_h.jpg" role="Treasurer" active=""/>
                        <ManagerCard name="Dr. Robert Pastel" imagePath="/img/robert_p.jpg" role="Faculty Advisor" active=""/>
                        <ManagerCard name="Ethan Matzdorf" imagePath="/img/ethan_m.png" role="HuskyHunt Team Lead" active=""/>
                        <ManagerCard name="Thomas Grifka" imagePath="/img/thomas_g.jpg" role="GVSC Team Lead" active=""/>
                        <ManagerCard name="Brett Post" imagePath="/img/brett_p.jpg" role="Chem Store Team Lead" active=""/>
                        <ManagerCard name="Mason Sayles" imagePath="/img/mason_s.jpg" role="CoCoTemp Team Lead" active=""/>
                        <ManagerCard name="Isaac Long" imagePath="/img/isaac_l.jpg" role="PillowTalk Team Lead" active=""/>
                        <ManagerCard name="Shruti" imagePath="/img/shruti.jpg" role="UX and AccelorMittal Team Lead" active=""/>
                        <ManagerCard name="Charles Vidro" imagePath="/img/charles_v.jpg" role="HIDE Website Team Lead" active=""/>
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