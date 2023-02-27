import React from "react";
import Carousel from "../carrousel/Carousel";

const CurrentProject = (props) => {
    let className = "features-extra section-padding ";
    className = props.isDark ? className + 'color2' : className + 'color1';
    let email = "mailto:" + props.email;

    return (
        <section className={className} id={props.id}>
            <div className="container sm-padding">
                <div className="row flex-vertically">
                    <div className="col-md-5 col-sm-12">
                        <div className="feature-list">
                            <h3 className="about">{props.title}</h3>
                            <p>{props.description}
                                <br/><br/>
                                <strong>Team Lead(s):</strong> {props.name}
                                <br/><br/>Want to learn more?
                                <br/>Contact: <strong><a
                                    href={email}>{props.email}</a></strong>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 center">
                        <Carousel
                            name={props.id}
                            picturePaths={props.pictures}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default CurrentProject;