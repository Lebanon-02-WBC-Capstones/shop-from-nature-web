import React,{useState} from "react";
import Leaf2 from "../images/Leaf2";
export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button
        className="bg-red text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Submit
      </button> */}
      {showModal ? (
        <>
          <div onClick={() => setShowModal(false)}
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className=" relative w-auto my-6 mx-auto max-w-3xl">
           
              <div  className="bg-mainbg border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
               
                <div className="flex flex-col items-start justify-between p-5   rounded-t">
                  <h3 className= "w-full inline-flex justify-center  text-6xl text-red ml-4">
                   Thank You Name.
                  </h3> <br/>
                  <h4 className="w-full inline-flex justify-center text-red ml-4 text-2xl">We will be in touch shortly!</h4>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
               
                <div className="relative -mt-20 -pt-6  flex-auto">
                  <Leaf2 className="" /> 
               
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
