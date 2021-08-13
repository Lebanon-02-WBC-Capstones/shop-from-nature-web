// eslint-disable

import React,{useState} from "react";


const TabsRender = ({ product,products }) => {
  const [openTab, setOpenTab] = useState(1);
  let prdCat=product.Category;
  const suggestedPrd = products.filter((prod) => prod.Category == prdCat);
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
                  "text-lg  uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-red bg-white"             : "text-white bg-olivegreen")
                } 
                onClick={(e) => {
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
                  "text-lg  uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-red bg-white" 
                    : "text-white bg-olivegreen")
                }
                onClick={(e) => {
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
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="text-grey text-sm">
                  {product && product.Description}
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div>
                  <div className="flex flex-wrap justify-around  content-start m-5 ">
     
          {suggestedPrd && suggestedPrd.slice(0,3).map((suggested)=> 
         
          <div  className=" justify-around flex-col mt-5 ml-5">
        <div className=" border-gray-100 min-h-prdsp w-prdsp bg-white shadow-md">
          <img src={suggested.img1}></img>
        </div>
        <h3 className="mt-5"> {suggested.Name} </h3>
        <h3 className="mt-5"> {suggested.Price} </h3>
      </div>
         )}
           
                 
        
              </div>      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

 export default TabsRender;

  

