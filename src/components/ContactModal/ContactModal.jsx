import React, { useState } from "react";
import API from "../../API";
<<<<<<< HEAD
import { LanguageContext } from "../../App";
=======
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_OFs54Rn8o7nmderUPBxSC");
>>>>>>> main
export default function ContactModal() {
  const [showModal, setShowModal] = useState(false);
  const { t } = React.useContext(LanguageContext);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  let handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    API.setContactData(contactData);
    emailjs
      .sendForm(
        "service_ia0wvrl",
        "template_nkvmjft",
        e.target,
        "user_OFs54Rn8o7nmderUPBxSC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-red text-white text-center w-44 py-3 px-6 text-xl rounded-3xl mt-3 p-4 transform hover:scale-110 motion-reduce:transform-none inline-flex justify-center  shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all  duration-150"
        onClick={() => setShowModal(true)}
      >
        {t("Keep In Touch")}
      </button>
      {showModal ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className=" relative w-auto my-3 mx-auto max-w-3xl">
              <div className="bg-mainbg pl-20 pr-20 border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-red rounded-t">
                  <h3 className="w-full inline-flex justify-center text-2xl  leading-6 font-medium text-sans text-red">
                    {t("Just ask us anything")}
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
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full p-6 flex-auto">
                    <p className="text-red text-sans text-xl">{t("Name")}</p>
                    <input
                      onChange={handleChange}
                      name="name"
                      value={contactData.name}
                      type="text"
                      className="pr-1 pl-1 h-8 w-80 wx-auto focus:outline-none shadow-lg"
                      required
                    />
                    <br />
                    <p className="text-red text-sans text-xl pr-4 pt-3">
                      {t("Email")}
                    </p>
                    <input
                      required
                      onChange={handleChange}
                      name="email"
                      value={contactData.email}
                      type="email"
                      className="border w-full border-transparent pr-1 pl-1 h-8 focus:outline-none shadow-lg"
                    />
                    <br />
                    <p className="text-red text-sans text-xl pr-4  pt-3">
                      {t("Message")}
                    </p>
                    <textarea
                      onChange={handleChange}
                      name="message"
                      type="text"
                      className="pl-1 pr-1 wx-auto w-full h-40 shadow-lg focus:outline-none"
                      placeholder=""
                      required
                    />
                    <br />
                  </div>

                  <div className="flex items-center justify-center p-5 border-t border-solid border-red rounded-b">
                    <button
                      className="p-4 ml-3 transform hover:scale-110 motion-reduce:transform-none inline-flex justify-center bg-red text-white   uppercase  px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all  duration-150"
                      type="submit"
                    >
                      {t("Submit")}
                    </button>
                    <button
                      className="p-4 ml-3 transform hover:scale-110 motion-reduce:transform-none  inline-flex justify-center bg-red text-white active:bg-olivegreen  uppercase  px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all  duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      {t("Cancel")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
