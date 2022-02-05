import React from 'react';
import './Home.css';

function ManagerCard(props) {
        return (
            <div className={"item " + props.active}>
                <img src={window.location.origin + props.imagePath} alt={props.name}
                className="imageCentered img-fluid"/>
                <h2>{props.name}</h2>
                <p className="no-padding">{props.role}</p>
                <p className="margin-bottom-100"><a className="managerEmail" href={"mailto:" + props.email}>{props.email}</a></p>
            </div>
        );
}

function Management() {
    return (
        <div>
            <section className="testimonial-slider section-padding text-center managementClass" id="management">
                <br/>
                <br/>
                <br/>
                <h1 className="marginh1 clearfix font60 outline">Management</h1>
                <div id="managementCarousel" className="carousel slide" data-ride="carousel">
                    <div className="center-block">
                        <ol className="carousel-indicators" id="carousel-indicators">
                            <li data-target="#managementCarousel" data-slide-to="0" className="active"/>
                            <li data-target="#managementCarousel" data-slide-to="1"/>
                            <li data-target="#managementCarousel" data-slide-to="2"/>
                            <li data-target="#managementCarousel" data-slide-to="3"/>
                            <li data-target="#managementCarousel" data-slide-to="4"/>
                            <li data-target="#managementCarousel" data-slide-to="5"/>
                            <li data-target="#managementCarousel" data-slide-to="6"/>
                            <li data-target="#managementCarousel" data-slide-to="7"/>
                            <li data-target="#managementCarousel" data-slide-to="8"/>
                            <li data-target="#managementCarousel" data-slide-to="9"/>
                            <li data-target="#managementCarousel" data-slide-to="10"/>
                            <li data-target="#managementCarousel" data-slide-to="11"/>
                        </ol>
                    </div>
                    <div className="carousel-inner">
                        <ManagerCard name="Charles Vidro" imagePath="/img/charles_v.jpg" role="President / Maintenance Team Lead" email="cjvidro@mtu.edu" active="active"/>
                        <ManagerCard name="Abby Myers" imagePath="/img/abby_m.jpg" role="Vice President / Health Resource Hub Lead" email="abigailm@mtu.edu" active=""/>
                        <ManagerCard name="Jerry Jones" imagePath="/img/jerry_j.png" role="Treasurer" email="jerryjon@mtu.edu" active=""/>
                        <ManagerCard name="Ian Lawrie" imagePath="/img/ian_l.jpg" role="WWH Lead Organizer / PillowTalk Team Lead" email="iplawrie@mtu.edu" active=""/>
                        <ManagerCard name="Dr. Robert Pastel" imagePath="/img/robert_p.jpg" role="Faculty Advisor" email="pastel@mtu.edu" active=""/>
                        <ManagerCard name="Joe Wood" imagePath="/img/joe_w.png" role="GVSC Team Lead" email="jodwood@mtu.edu" active=""/>
                        <ManagerCard name="Tyler Zetty" imagePath="/img/tyler_z.png" role="CCLC Queue Team Lead" email="tjzetty@mtu.edu" active=""/>
                        <ManagerCard name="Jason Hoffman" imagePath="/img/jason_h.png" role="Chem Store Team Lead" email="jasonhof@mtu.edu" active=""/>
                        <ManagerCard name="Tom Berg" imagePath="/img/tom_b.png" role="Little Brothers Team Lead" email="tomberg@mtu.edu" active=""/>
                        <ManagerCard name="Ivona Gorgioski" imagePath="/img/ivona_g.jpg" role="UX Team Lead" email="igorgios@mtu.edu " active=""/>
                        <ManagerCard name="Eva Muller" imagePath="/img/eva_m.jpg" role="GDLS Team Co-Lead" email="emmuller@mtu.edu " active=""/>
                        <ManagerCard name="Jonathan Rabideau" imagePath="/img/jon_r.jpg" role="GDLS Team Co-Lead" email="jarabide@mtu.edu " active=""/>
                    </div>

                    <a className="left carousel-control" href="#managementCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#managementCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <br/>
                <br/>
                <br/>
            </section>
        </div>
    );
}

export default Management;