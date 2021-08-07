import React from "react";
import ArrowForward from "../../Icons/ArrowForward";
import ArrowBack from "../../Icons/ArrowBack";
import Slider from "react-slick";
import NewsPaper from "../../images/NewsPaper";

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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mx-48 my-4 bg-white">
      <h2 className="text-center text-4xl text-green py-16 font-bold">
        Your daily dose of Facts
      </h2>
      <Slider className="flex items-center justify-center pb-24" {...settings}>
        <div className="mb-4">
          <div className="flex justify-center items-center">
            <div className="text-center px-24">
              <h3 className="text-3xl text-red mb-4">Fact 1</h3>
              <p className="text-2xl text-red">
                Half a million trees have to be cut down just to produce the
                Sunday newspapers each week.
              </p>
            </div>
            <div className="shadow-fz mr-9">
              <NewsPaper />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-center items-center">
            <div className="text-center px-24">
              <h3 className="text-3xl text-red mb-4">Fact 1</h3>
              <p className="text-2xl text-red">
                Half a billion trees have to be cut down just to produce the
                Sunday newspapers each week.
              </p>
            </div>
            <div className="shadow-fz mr-9">
              <NewsPaper />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-center items-center">
            <div className="text-center px-24">
              <h3 className="text-3xl text-red mb-4">Fact 1</h3>
              <p className="text-2xl text-red">
                Half a zillion trees have to be cut down just to produce the
                Sunday newspapers each week.
              </p>
            </div>
            <div className="shadow-fz mr-9">
              <NewsPaper />
            </div>
          </div>
        </div>
        <div>
          <h3>MORE FACTS</h3>
        </div>
      </Slider>
    </div>
  );
};

export default DailyDoseCarousel;
