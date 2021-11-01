import React from "react";

const Carousel = (props) => {
  let name = props.name;
  let picturePaths = props.picturePaths;

  let indicators = [];
  let pictures = [];

  for (let i = 0; i < picturePaths.length; i++) {
    if (i === 0) {
      indicators.push(
        <li data-target={"#" + name + "Carousel"} data-slide-to={i} key={i} className="active" style={{"border-color": "white", "border-width": "2px"}}/>
      );
      pictures.push(
        <div className="item active">
          <img src={picturePaths[i]} alt=""/>
        </div>
      );
    } else {
      indicators.push(
        <li data-target={"#" + name + "Carousel"} data-slide-to={i} key={i} style={{"border-color": "white", "border-width": "2px"}}/>
      );
      pictures.push(
        <div className="item">
          <img src={picturePaths[i]} alt=""/>
        </div>
      );
    }
  }


  return (
      <div id={name + "Carousel"} className="carousel slide" data-interval="false" data-ride="carousel">
        {/*Indicators*/}
        {picturePaths.length > 1 &&
          <ol className="carousel-indicators carousel-indicators-projects" id="carousel-indicators">
            {indicators}
          </ol>
        }

        {/*Wrapper for slides*/}
        <div className="carousel-inner">
          {pictures}
        </div>

        {/*Left and right controls*/}
        { picturePaths.length > 1 &&
          <div>
            <a className="left carousel-control" href={"#" + name + "Carousel"} data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left"/>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href={"#" + name + "Carousel"} data-slide="next">
              <span className="glyphicon glyphicon-chevron-right"/>
              <span className="sr-only">Next</span>
            </a>
          </div>
        }
      </div>
  );
};

export default Carousel;