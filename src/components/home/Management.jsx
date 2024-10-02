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
                            <li data-target="#managementCarousel" data-slide-to="17"/>
                            <li data-target="#managementCarousel" data-slide-to="18"/>
                            {/*Add for each management card*/}
                        </ol>
                    </div>
                    <div className="carousel-inner">
                        {/*Crop images to a square, convert JPG to jpg if issues*/}
                        <ManagerCard name="Jacob Brendemuehl" imagePath="/img/fall24_mgmt/jacob_b.jpg" role="President" email="jkbrende@mtu.edu" active="active"/>
                        <ManagerCard name="Caden Kienitz" imagePath="/img/fall24_mgmt/caden_k.jpg" role="Vice President" email="cdkienit@mtu.edu" active=""/>
                        <ManagerCard name="Jah Multani" imagePath="/img/fall24_mgmt/jah_m.jpg" role="Treasurer" email="jsmultan@mtu.edu" active=""/>
                        <ManagerCard name="Dr. Robert Pastel" imagePath="/img/robert_p.jpg" role="Faculty Advisor" email="pastel@mtu.edu" active=""/>
                        <ManagerCard name="Yasmin Fitzgerald" imagePath="/img/fall24_mgmt/yasmin_f.jpg" role="Chem Store Team Lead" email="ysfitzge@mtu.edu" active=""/>
                        <ManagerCard name="Justin Christenson" imagePath="/img/fall24_mgmt/justin_c.jpg" role="CS Dept Scheduling App Co-Team Lead" email="jwchrist@mtu.edu" active=""/>
                        <ManagerCard name="Andrew Koman" imagePath="/img/fall24_mgmt/andrew_k.jpg" role="CS Dept Scheduling App Co-Team Lead" email="ajkoman@mtu.edu" active=""/>
                        <ManagerCard name="Caleb Johnson" imagePath="/img/fall24_mgmt/caleb_j.jpg" role="Human Factors Team Lead" email="cabjohns@mtu.edu" active=""/>
                        <ManagerCard name="Vincent Yang" imagePath="/img/fall24_mgmt/vincent_y.jpg" role="Little Brothers Team Lead" email="vyang@mtu.edu" active=""/>
                        <ManagerCard name="Owen Cramer" imagePath="/img/fall24_mgmt/owen_c.jpg" role="Yoopapers Co-Team Lead" email="owcramer@mtu.edu" active=""/>
                        <ManagerCard name="Luis Vervaet" imagePath="/img/fall24_mgmt/luis_v.jpg" role="Yoopapers Co-Team Lead" email="lrvervae@mtu.edu" active=""/>
                        <ManagerCard name="Valen Kurmaniak" imagePath="/img/fall24_mgmt/valen_k.jpg" role="SLS Team Lead" email="vkkurman@mtu.edu" active=""/>
                        <ManagerCard name="Brayden Gilland" imagePath="/img/fall24_mgmt/brayden_g.jpg" role="Gardner rifle Club Team Lead" email="bngillan@mtu.edu" active=""/>
                        <ManagerCard name="Christopher Rochon" imagePath="/img/fall24_mgmt/christopher_r.jpg" role="HCHS Team Lead" email="crrochon@mtu.edu" active=""/>
                        <ManagerCard name="Dylan Hojnoski" imagePath="/img/fall24_mgmt/dylan_h.jpg" role="MTU Courses Team Lead" email="dahjnos@mtu.edu" active=""/>
                        <ManagerCard name="Danica Wrobel" imagePath="/img/fall24_mgmt/danica_w.jpg" role="Herp Atlas Co-Team Lead" email="dbwrobel@mtu.edu" active=""/>
                        <ManagerCard name="Kiran Kumar Reddy Vadlapally" imagePath="/img/fall24_mgmt/kiran_k.jpg" role="Herp Atlas Co-Team Lead" email="kvadlapa@mtu.edu" active=""/>
                        <ManagerCard name="Patrick Janssen" imagePath="/img/fall24_mgmt/patrick_j.png" role="Machine Shop Check-In Team Lead" email="pdjansse@mtu.edu" active=""/>
                        <ManagerCard name="Ashley Baird" imagePath="/img/fall24_mgmt/ashley_b.jpg" role="SERC Team Lead" email="ambaird@mtu.edu" active=""/>

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