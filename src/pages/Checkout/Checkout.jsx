import React from "react";

const Checkout = () => {
  return (
    <div>
      <form>
        <div className="flex justify-around">
          <div>
            <div className="relative w-full p-6 flex-auto">
              <h1 className="text-green font-bold text-xl pr-4 pb-6">
                {" "}
                Billing Address
              </h1>

              <p className="text-red text-sans text-xl"> Full Name </p>
              <textarea
                type="text"
                className="pr-1 pl-1 h-8 w-80 wx-auto focus:outline-none shadow-lg"
                required
              />
              <br />
              <p className="text-red text-sans text-xl pr-4 pt-3"> Email </p>
              <textarea
                required
                type="text"
                className="border w-full border-transparent pr-1 pl-1 h-8 focus:outline-none shadow-lg"
              />
              <br />
              <p className="text-red text-sans text-xl pr-4 pt-3"> Address </p>
              <textarea
                required
                type="text"
                className="border w-full border-transparent pr-1 pl-1 h-8 focus:outline-none shadow-lg"
              />
              <br />
              <p className="text-red text-sans text-xl pr-4 pt-3"> City </p>
              <textarea
                required
                type="text"
                className="border w-full border-transparent pr-1 pl-1 h-8 focus:outline-none shadow-lg"
              />
              <br />
              <p className="text-red text-sans text-xl pr-4 pt-3">State </p>
              <textarea
                required
                type="text"
                className="border w-full border-transparent pr-1 pl-1 h-8 focus:outline-none shadow-lg"
              />
            </div>
          </div>

          <div>
            <div className="relative w-full p-6 flex-auto">
              <h1 className="text-green font-bold text-xl pr-4 pb-6">
                {" "}
                Payment
              </h1>

              <p className="text-red text-sans text-xl"> Name On Card </p>
              <textarea
                type="text"
                className="pr-1 pl-1 h-8 w-80 wx-auto focus:outline-none shadow-lg"
                required
              />
              <br />
              <p className="text-red text-sans text-xl pr-4 pt-3">
                {" "}
                Credit Card Number{" "}
              </p>
              <textarea
                required
                type="text"
                className="border w-full border-transparent pr-1 pl-1 h-8 focus:outline-none shadow-lg"
              />
              <br />

              <p className="text-red text-sans text-xl pr-4 pt-3">
                {" "}
                Expiry Month{" "}
              </p>
              <textarea
                required
                type="text"
                className="border w-full border-transparent pr-1 pl-1 h-8 focus:outline-none shadow-lg"
              />
              <br />
              <p className="text-red text-sans text-xl pr-4 pt-3">
                {" "}
                Expiry Year{" "}
              </p>
              <textarea
                required
                type="text"
                className="border w-full border-transparent pr-1 pl-1 h-8 focus:outline-none shadow-lg"
              />
              <p className="text-red text-sans text-xl pr-4 pt-3"> CVV </p>
              <textarea
                required
                type="text"
                className="border w-full border-transparent pr-1 pl-1 h-8 focus:outline-none shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-8 border-t border-solid border-red rounded-b ">
          <button
            className=" transform hover:scale-110 motion-reduce:transform-none inline-flex justify-center bg-red text-white   uppercase  px-64 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all  duration-150"
            type="submit"
          >
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;