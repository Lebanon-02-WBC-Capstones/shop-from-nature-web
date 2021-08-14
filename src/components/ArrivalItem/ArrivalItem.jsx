import React, { useState, useEffect } from "react";
import API from "../../API";
import ArrowForward from "../../Icons/ArrowForward";
import ArrowBack from "../../Icons/ArrowBack";
import SignInModal from "../SignInModal/SignInModal";
import Slider from "react-slick";
import { useAuth } from "../../AuthProvider/AuthContext";

const ArrivalItem = () => {
  const [showModal, setShowModal] = useState(false);
  const [arrivalItems, setArrivalItems] = useState([]);
  const { currentUser } = useAuth();
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
          {arrivalItems.slice(0, 7).map((item, i) => (
            <div key={item.id}>
              <div className="flex min-h-prdsh max-h-prdsh bg-white mr-2 content-evenly items-center">
                <div className="px-6">
                  <img src={item.img1} />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center mx-3">
                  <p className="text-grey mr-12 text-md">{item.Name}</p>
                  <p className="text-grey">{item.Price}</p>
                </div>
                <button
                  onClick={() => {
                    if (currentUser) {
                      let payload = { ...item, uid: currentUser.uid };
                      API.setCart(payload);
                    } else {
                      setShowModal(true);
                    }
                  }}
                  className="text-md text-red font-regular border-2 border-grey px-2 mt-2 "
                >
                  Add To Bag
                </button>
                <SignInModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ArrivalItem;
