import React from "react";

export default function ContactUsModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="text-xl text-white bg-red rounded-mg mx-auto pl-3 pr-3 ml-2 active:bg-pink-600   hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" relative w-auto my-3 mx-auto max-w-3xl">
              <div className="bg-mainbg pl-20 pr-20 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-red rounded-t">
                  <h3 className="w-full inline-flex justify-center text-2xl  leading-6 font-medium text-sans text-red">
                    Just ask us anything
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="relative w-full p-6 flex-auto">
                  <p className="text-red text-sans text-xl    ">Name</p>
                  <textarea
                    type="text"
                    className="pr-1 pl-1 h-8 w-80 wx-auto focus:outline-none shadow-lg"
                  />{" "}
                  <br />
                  <p className="text-red text-sans text-xl pr-4 pt-3">Email</p>
                  <textarea
                    type="text"
                    className="border w-full border-transparent pr-1 pl-1 h-8 w-80  focus:outline-none shadow-lg"
                  />{" "}
                  <br />
                  <p className="text-red text-sans text-xl pr-4  pt-3">
                    Message
                  </p>
                  <textarea
                    type="text"
                    className="pl-1 pr-1 wx-auto w-full h-40 shadow-lg focus:outline-none"
                    placeholder=""
                  />{" "}
                  <br />
                </div>

                <div className="flex items-center justify-center p-5 border-t border-solid border-red rounded-b">
                  <button
                    className="p-4 ml-3 transform hover:scale-110 motion-reduce:transform-none inline-flex justify-center bg-red text-white   uppercase  px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all  duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                  <button
                    className="p-4 ml-3 transform hover:scale-110 motion-reduce:transform-none  inline-flex justify-center bg-red text-white active:bg-olivegreen  uppercase  px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all  duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
