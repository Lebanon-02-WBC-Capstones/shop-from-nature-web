import React from "react";

const Tabs = ({ color}) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "bg-white font-bold text-red uppercase uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color
                    : "text-" + color + " bg-olivegreen")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Description
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "  bg-white text-red uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color 
                    : "text-" + color + " bg-olivegreen")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Suggested products
              </a>
            </li>
            {/* <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "bg-white text-red uppercase uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color 
                    : "text-" + color+ " bg-olivegreen")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Options
              </a>
            </li> */}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="text-grey">
                  Your glass will be abundantly full with this product! The 17 oz. glass water bottles with carrying
                   strap are made of borosilicate glass and are BPA free. Filled to capacity at 17 oz., this item consists of a rubber carrying strap that comes in select colors and will highlight your brand on the clear container. It's recommended to hand wash this glass for repeated use. Stand out at trade shows and conferences with this stunning selection. Make this the next great item in your line of promotional giveaways!
                   
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p className="text-grey">
                  add products here
                  </p>
                </div>
                {/* <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p> </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="white" />;
    </>
  );
}