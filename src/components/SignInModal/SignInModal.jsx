import React from "react";
import { useAuth } from "../../AuthProvider/AuthContext";

export default function ContactModal({ showModal, setShowModal }) {
  const { signinGoogle, signinGithub } = useAuth();
  const handleGoogle = () => {
    signinGoogle();
  };

  const handleGithub = () => {
    signinGithub();
  };
  return (
    <>
      {showModal ? (
        <>
          <div
            className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <div className=" relative w-auto my-3 mx-auto max-w-3xl">
              <div className="bg-mainbg pl-20 pr-20 pb-5 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-red rounded-t">
                  <h3 className="w-full inline-flex justify-center text-2xl  leading-6 font-medium text-sans text-red">
                    Choose how you want to Sign In
                  </h3>
                </div>
                <button
                  className=" flex bg-white my-1 py-2 h-10 justify-center"
                  onClick={handleGoogle}
                >
                  <img
                    className="mr-3"
                    src="https://img.icons8.com/fluency/28/000000/google-logo.png"
                  />
                  <span>Google</span>
                </button>
                <button
                  className="bg-white my-1 py-2 flex justify-center h-10"
                  onClick={handleGithub}
                >
                  <img
                    className="mr-3"
                    src="https://img.icons8.com/material-outlined/24/000000/github.png"
                  />
                  <span>Github</span>
                </button>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
