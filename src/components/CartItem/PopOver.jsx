import React,{useState,createRef} from "react";
import { createPopper } from "@popperjs/core";

const Popover = ({ color }) => {
  const [popoverShow, setPopoverShow] = useState(false);
  const btnRef = createRef();
  const popoverRef = createRef();
  const openPopover = () => {
    createPopper(btnRef.current, popoverRef.current, {
      placement: "bottom"
    });
    setPopoverShow(true);
  };
  const closePopover = () => {
    setPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <button
            className={
              "bg-" +
              color +
              " text-white active:bg-" +
              color +
              "  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            }
            type="button"
            onClick={() => {
              popoverShow ? closePopover() : openPopover();
            }}
            ref={btnRef}
          >
            + 
          </button>
          <div
            className={
              (popoverShow ? "" : "hidden ") +
              "bg-" +
              color +
              "  border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg"
            }
            ref={popoverRef}
          >
            <div>
              <div
                className={
                  "bg-" +
                  color +
                  " text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"
                }
              >
                Description
              </div>
              <div className="text-white p-3">
              <p className="p-4 mx-auto text-white text-sm"> "Your glass will be abundantly full with this product! The 17 oz. glass water bottles with carrying strap are made of borosilicate glass and are BPA free.
           Filled to capacity at 17 oz., this item consists of a rubber carrying strap that comes in select colors and will highlight your brand on the clear container. It's recommended to hand wash this glass for repeated use. Stand out at trade shows and conferences with this stunning selection. Make this the next great item in your line of promotional giveaways!" </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function PopoverRender() {
  return (
    <>
      <Popover color="red" />
    </>
  );
}