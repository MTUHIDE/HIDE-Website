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
                            {/*Add for each management card*/}
                        </ol>
                    </div>
                    <div className="carousel-inner">
                        {/*Crop images to a square, convert JPG to jpg if issues*/}
                        <ManagerCard name="Yasmin Fitzgerald" imagePath="/img/fall25_mgmt/yasmin_f.jpg" role="President" email="ysfitzge@mtu.edu" active="active"/>
                        <ManagerCard name="Danica Wrobel" imagePath="/img/fall25_mgmt/Danica_Wrobel.jpg" role="Vice President" email="dbwrobel@mtu.edu" active=""/>
                        <ManagerCard name="Connor Schneider" imagePath="/img/fall25_mgmt/Connor_Schneider.jpg" role="Treasurer" email="connorsc@mtu.edu" active=""/>
                        <ManagerCard name="Dr. Robert Pastel" imagePath="/img/fall25_mgmt/robert_p.jpg" role="Faculty Advisor" email="pastel@mtu.edu" active=""/>
                        <ManagerCard name="Yasmin Fitzgerald" imagePath="/img/fall25_mgmt/yasmin_f.jpg" role="Chem Store Co-Team Lead" email="ysfitzge@mtu.edu" active=""/>
                        <ManagerCard name="Ben Ryan" imagePath="/img/fall25_mgmt/Ben_Ryan.jpg" role="Chem Store Co-Team Lead" email="bjryan@mtu.edu" active=""/>
                        <ManagerCard name="Zach Starry" imagePath="/img/fall25_mgmt/Zach_Starry.jpg" role="CS Dept Scheduling App" email="ztstarry@mtu.edu" active=""/>
                        <ManagerCard name="Ethan Deur" imagePath="/img/fall25_mgmt/Ethan_Deur.jpg" role="Human Factors Expungement App Team Lead" email="edeur@mtu.edu" active=""/>
                        <ManagerCard name="Hudson Look" imagePath="/img/fall25_mgmt/Hudson_Look.JPG" role="Human Factors Whirlpool Co-Team Lead" email="hblook@mtu.edu" active=""/>
                        <ManagerCard name="Katrina Carlson" imagePath="/img/fall25_mgmt/Katrina_Carlson.jpg" role="Human Factors Whirlpool Co-Team Lead" email="katrinac@mtu.edu" active=""/>
                        <ManagerCard name="Morgan Aufdencamp" imagePath="/img/fall25_mgmt/Morgan_Aufdencamp.JPG" role="Human Factors Whirlpool Co-Team Lead" email="maufdenc@mtu.edu" active=""/>
                        <ManagerCard name="Zak Senske" imagePath="/img/fall25_mgmt/Zak_Senske.jpg" role="Little Brothers Team Lead" email="zjsenske@mtu.edu" active=""/>
                        <ManagerCard name="Valen Kurmaniak" imagePath="/img/fall25_mgmt/valen_k.jpg" role="SLS Team Lead" email="vkkurman@mtu.edu" active=""/>
                        <ManagerCard name="Brayden Gilland" imagePath="/img/fall25_mgmt/brayden_g.jpg" role="Gardner rifle Club Team Lead" email="bngillan@mtu.edu" active=""/>
                        {/*<ManagerCard name="Rhys Brockenshire" imagePath="/img/fall25_mgmt/Rhys_Brockenshrire.jpg" role="HCHS Team Lead" email="crrochon@mtu.edu" active=""/>*/}
                        <ManagerCard name="Alyssa Tripp" imagePath="/img/fall25_mgmt/Alyssa_Tripp.jpg" role="Michigan HERP Atlas Team Lead" email="ajvangor@mtu.edu" active=""/>
                        <ManagerCard name="Michael Kaatz" imagePath="/img/fall25_mgmt/Michael_Kaatz.jpg" role="Machine Shop Check-In Team Lead" email="mvkaatz@mtu.edu" active=""/>
                        <ManagerCard name="Chloe Scheetz" imagePath="/img/fall25_mgmt/Chloe_Scheetz.jpg" role="Wrestling Club Team Lead" email="cescheet@mtu.edu" active=""/>
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