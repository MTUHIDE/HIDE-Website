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
                            {/*Add for each management card*/}
                        </ol>
                    </div>
                    <div className="carousel-inner">
                        {/*Crop images to a square, convert JPG to jpg if issues*/}
                        <ManagerCard name="Yasmin Fitzgerald" imagePath="/img/spring26_mgmt/yasmin_f.jpg" role="Software Co-President & Chem Store Co-Team Lead" email="ysfitzge@mtu.edu" active="active"/>
                        <ManagerCard name="Morgan Aufdencamp" imagePath="/img/spring26_mgmt/morgan_a.jpg" role="Human Factors Co-President & Whirlpool Co-Team Lead" email="maufdenc@mtu.edu" active=""/>
                        <ManagerCard name="Danica Wrobel" imagePath="/img/spring26_mgmt/danica_w.jpg" role="Vice President" email="dbwrobel@mtu.edu" active=""/>
                        <ManagerCard name="Connor Schneider" imagePath="/img/spring26_mgmt/connor_s.jpg" role="Treasurer" email="connorsc@mtu.edu" active=""/>
                        <ManagerCard name="Dr. Robert Pastel" imagePath="/img/spring26_mgmt/robert_p.jpg" role="Faculty Advisor" email="pastel@mtu.edu" active=""/>
                        <ManagerCard name="Hudson Look" imagePath="/img/spring26_mgmt/hudson_l.jpg" role="Whirlpool Project Co-Team Lead" email="hblook@mtu.edu" active=""/>
                        <ManagerCard name="Drew Broekhuis" imagePath="/img/spring26_mgmt/drew_b.jpg" role="Chem Store Co-Team Lead" email="dcbroekh@mtu.edu" active=""/>
                        <ManagerCard name="Zach Starry" imagePath="/img/spring26_mgmt/zach_s.jpg" role="CS Dept Scheduling App Team Lead" email="ztstarry@mtu.edu" active=""/>
                        <ManagerCard name="Rhys Brockenshire" imagePath="/img/spring26_mgmt/rhys_b.jpg" role="YooPapers Team Lead" email="rwbrocke@mtu.edu" active=""/>
                        <ManagerCard name="Kyle Hamby" imagePath="/img/spring26_mgmt/kyle_h.jpg" role="Gardner Rifle Club Team Lead" email="kjhamby@mtu.edu" active=""/>
                        <ManagerCard name="Alyssa Tripp" imagePath="/img/spring26_mgmt/alyssa_t.jpg" role="Michigan HERP Atlas Team Lead" email="ajvangor@mtu.edu" active=""/>
                        <ManagerCard name="Josh Kozlowski" imagePath="/img/spring26_mgmt/josh_k.jpg" role="Machine Shop Check-in System Team Lead" email="jdkozlow@mtu.edu" active=""/>
                        <ManagerCard name="Chloe Scheetz" imagePath="/img/spring26_mgmt/chloe_s.jpg" role="Wrestling Club Co-Team Lead" email="cescheet@mtu.edu" active=""/>
                        <ManagerCard name="Zak Senske" imagePath="/img/spring26_mgmt/zak_s.jpg" role="Wrestling Club Co-Team Lead" email="zjsenske@mtu.edu" active=""/>
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
