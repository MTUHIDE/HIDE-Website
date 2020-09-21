import React from 'react';

function Management() {
    return (
        <div>
            <section className="testimonial-slider section-padding text-center" id="management">
                <h1 className="marginh1 clearfix font60">Management</h1>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <div className="center-block">
                    <ol className="carousel-indicators indicator-center">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"/>
                            <li data-target="#myCarousel" data-slide-to="1"/>
                            <li data-target="#myCarousel" data-slide-to="2"/>
                        </ol>
                    </div>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="https://paulisaweso.me/img/headshot.26f969e1.jpg" alt="Los Angeles"
                                 className="imageCentered"/>
                            <h2>Paul Esch-Laurent</h2>
                            <p className="author">Secretary</p>
                        </div>

                        <div className="item">
                            <img
                                src="https://i1.rgstatic.net/ii/profile.image/282497905643522-1444364157411_Q128/Caden_Sumner.jpg"
                                alt="Chicago" className="imageCentered"/>
                            <h2>Paul Esch-Laurent</h2>
                            <p className="author">Secretary</p>
                        </div>

                        <div className="item">
                            <img
                                src="https://i1.rgstatic.net/ii/profile.image/282497905643522-1444364157411_Q128/Caden_Sumner.jpg"
                                alt="New York" className="imageCentered"/>
                            <h2>Paul Esch-Laurent</h2>
                            <p className="author">Secretary</p>
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