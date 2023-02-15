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
                            <li data-target="#managementCarousel" data-slide-to="12"/>
                            <li data-target="#managementCarousel" data-slide-to="13"/>
                            <li data-target="#managementCarousel" data-slide-to="14"/>
                            <li data-target="#managementCarousel" data-slide-to="15"/>
                            <li data-target="#managementCarousel" data-slide-to="16"/>
                            //<li data-target="#managementCarousel" data-slide-to="17"/>
                        </ol>
                    </div>
                    <div className="carousel-inner">
                        <ManagerCard name="Abby Myers" imagePath="/img/abby_m.jpg" role="President" email="abigailm@mtu.edu" active="active"/>
                        <ManagerCard name="Eva Muller" imagePath="/img/eva_m.png" role="Vice President" email="emmuller@mtu.edu" active=""/>
                        <ManagerCard name="Jerry Jones" imagePath="/img/jerry_j.png" role="Treasurer/GVSC Team Lead" email="jerryjon@mtu.edu" active=""/>
                        <ManagerCard name="Dr. Robert Pastel" imagePath="/img/robert_p.jpg" role="Faculty Advisor" email="pastel@mtu.edu" active=""/>
                        <ManagerCard name="Jeremiah Kollodge" imagePath="/img/no_profile.png" role="CCLC Queue Team Lead" email="jtkollod@mtu.edu" active=""/>
                        <ManagerCard name="Zane Smalley" imagePath="/img/zane_s.png" role="Chem Store Team Lead" email="zasmalle@mtu.edu" active=""/>
                        <ManagerCard name="Dee Paulson" imagePath="/img/dee_p.jpg" role="CS Dept Scheduling App Team Lead" email="dcpaulso@mtu.edu" active=""/>
                        <ManagerCard name="Benjamin Wittrup" imagePath="/img/ben_w.png" role="GDLS Team Co-Lead" email="bowittru@mtu.edu" active=""/>
                        <ManagerCard name="Patrick Janssen" imagePath="/img/patrick_j.jpg" role="GDLS Team Co-Lead" email="pdjansse@mtu.edu" active=""/>
                        <ManagerCard name="Olivia O'Dwyer" imagePath="/img/olivia_o.jpg" role="Human Factors Team Lead" email="obodwyer@mtu.edu" active=""/>
                        <ManagerCard name="Debbie Brink" imagePath="/img/debbie_b.jpg" role="Little Brothers Co-Team Lead" email="dfbrink@mtu.edu" active=""/>
                        <ManagerCard name="Sid Regmi" imagePath="/img/sid_r.jpg" role="Little Brothers Co-Team Lead" email="ssregmi@mtu.edu" active=""/>
                        <ManagerCard name="Logan Woznak" imagePath="/img/logan_w.jpg" role="SLS Team Lead" email="ljwoznak@mtu.edu" active=""/>
                        <ManagerCard name="Brandon St. Louis" imagePath="/img/brandon_l.png" role="Traverse City Electric Co-Team Lead" email="brstloui@mtu.edu" active=""/>
                        <ManagerCard name="Lela Root" imagePath="/img/lela_r.jpg" role="Traverse City Electric Co-Team Lead" email="lnroot@mtu.edu" active=""/>
                        <ManagerCard name="Owen Cramer" imagePath="/img/owen_c.jpg" role="YooPapers Co-Team Lead" email="owcramer@mtu.edu" active=""/>
                        <ManagerCard name="Tim Perr" imagePath="/img/tim_p.jpg" role="YooPapers Co-Team Lead" email="tlperr@mtu.edu" active=""/>
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