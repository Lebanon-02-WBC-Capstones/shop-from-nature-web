import React from "react";
import ArrowForward from "../../Icons/ArrowForward";
import ArrowBack from "../../Icons/ArrowBack";
import Slider from "react-slick";
import NewsPaper from "../../images/NewsPaper";
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="mt-7 ml-10">
      <ArrowForward className="" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="mr-10">
      <ArrowBack className="" />
    </div>
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
    <div className="max-w-md mx-auto mb-3 bg-white">
      <Slider className="flex items-center justify-center" {...settings}>
        <div className="mb-4">
          <h2 className="text-center text-3xl text-green mb-7">
            Your daily dose of Facts
          </h2>
          <div className="flex justify-center">
            <div className="text-center">
              <h3 className="text-2xl text-red mb-4">Fact 1</h3>
              <p className="text-xl text-red">
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
          <h2 className="text-center text-3xl text-green mb-7">
            Your daily dose of Facts
          </h2>
          <div className="flex justify-center">
            <div className="text-center">
              <h3 className="text-2xl text-red mb-4">Fact 1</h3>
              <p className="text-xl text-red">
                Half a million trees have to be cut down just to produce the
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
        <div>
          <h3>MORE FACTS</h3>
        </div>
      </Slider>
    </div>
  );
};

export default DailyDoseCarousel;
