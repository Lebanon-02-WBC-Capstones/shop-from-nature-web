import React, { useEffect, useState } from "react";
import ArrowForward from "../../Icons/ArrowForward";
import ArrowBack from "../../Icons/ArrowBack";
import Slider from "react-slick";
import API from "../../API";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="mt-7 ml-10">
      <ArrowForward />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="mr-10">
      <ArrowBack />
    </button>
  );
}
const DailyDoseCarousel = () => {
  const [facts, setFacts] = useState([]);
  useEffect(() => {
    API.getFacts().then((facts) => {
      setFacts(facts);
    });
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className=" mb-20 bg-white">
      <h2 className="text-center text-4xl text-green py-16 font-medium">
        Your daily dose of Facts
      </h2>
      {facts.length != 0 && (
        <Slider
          className="flex items-center justify-between pb-20"
          {...settings}
        >
          {facts.map((fact) => (
            <div key={fact.id} className="mb-4">
              <div className="flex justify-between items-center">
                <div className="text-center px-24">
                  <h3 className="text-3xl text-green mb-4">Fact {fact.nb}</h3>
                  <p className="text-2xl text-red">{fact.Fact}</p>
                </div>
                <div className=" mr-8 shadow-fz max-w-xs">
                  <img src={fact.img} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};
export default DailyDoseCarousel;
