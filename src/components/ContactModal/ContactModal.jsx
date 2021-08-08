import React, { Fragment, useRef } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
function ContactModal({ open, setOpen }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="vfixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={setOpen}
        onClose={open}
      >
        <div className="relative flex items-end h-30 bg-mainbg justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="bg-mainbg hidden sm:inline-block sm:align-middle "
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-mainbg rounded-lg text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-mainbg px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="w-full sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full text-black sm:mx-0 sm:h-10 sm:w-10"></div>
                  <div className=" mt-3  sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="w-full inline-flex justify-center text-2xl  leading-6 font-medium text-sans text-red"
                    >
                      Just ask us anything
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-red text-sans text-xl pr-4  pt-3 ">
                        Name
                      </p>
                      <textarea
                        type="text"
                        className="pr-1 pl-1 h-8 w-80 wx-auto focus:outline-none shadow-lg"
                      />
                      <br />
                      <p className="text-red text-sans text-xl pr-4 pt-3">
                        Email
                      </p>
                      <textarea
                        type="text"
                        className="border w-full border-transparent pr-1 pl-1 h-8 w-80  focus:outline-none shadow-lg"
                      />
                      <br />
                      <p className="text-red text-sans text-xl pr-4  pt-3">
                        Message
                      </p>
                      <textarea
                        type="text"
                        className="pl-1 pr-1 wx-auto w-full h-40 shadow-lg focus:outline-none"
                        placeholder=""
                      />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center text-pink px-4 py-3 sm:px-6 sm:flex sm:flex-row">
                <button
                  type="button"
                  className=" inline-flex justify-center rounded-3xl border border-transparent shadow-sm px-4 py-2 pl-4 pr-4 bg-red  font-medium text-white hover:bg-olivegreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olivegreen sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen(false)}
                >
                  Submit
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
ContactModal.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.bool,
};
export default ContactModal;
