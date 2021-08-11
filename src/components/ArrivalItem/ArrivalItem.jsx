import { useState, useEffect } from "react";
import API from "../../API";
import ArrowForward from "../../Icons/ArrowForward";
import ArrowBack from "../../Icons/ArrowBack";
import Slider from "react-slick";

const ArrivalItem = () => {
  const [arrivalItems, setArrivalItems] = useState([]);
  useEffect(() => {
    API.getProducts().then((products) => {
      setArrivalItems(products);
    });
  }, []);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className=" mb-11 ml-10">
        <ArrowForward />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="mr-10 mb-20">
        <ArrowBack />
      </button>
    );
  }

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="">
      <h2 className="text-center text-4xl text-grey py-16 font-medium">
        New Arrivals
      </h2>
      {arrivalItems.length != 0 && (
        <Slider
          className="flex items-center justify-center pb-24"
          {...settings}
        >
          {arrivalItems.map((item) => (
            <div>
              <div className="flex min-h-prdsh bg-white mr-2 justify-center items-center">
                <div className="mr-9">
                  <img src={item.img1} />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center mx-3">
                  <p className="text-grey mr-12 text-lg">{item.Name}</p>
                  <p className="text-grey">{item.Price}</p>
                </div>
                <button className="text-md text-red font-regular border-2 border-grey px-2 mt-2 ">
                  Add To Bag
                </button>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ArrivalItem;
