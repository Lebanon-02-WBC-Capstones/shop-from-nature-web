import React from 'react';
import Leaf1 from '../../images/about';
function Aboutpageheader() {
    return (
        <div className="flex flex-col mx-auto bg-pink">
           <h1 className="ml-10 text-6xl font-medium text-about font-sans  left-4.58%
right-38.89%
top-4.46%
bottom-92.9% "> Change the way you shop, for Good. </h1>
        <div className="pl-8 relative right-25 pt-8 pb-8">  <Leaf1  /></div>
         <div>  <p className="text-center font-medium text-grey text-2xl pb-2 font-sans ">Fostering a culture of sustainability.</p>
            <p className=" text-center font-regular text-grey text-2xl pb-2 font-sans ">LivingVert is your link to the sustainable world; in the content we give you & the products we give you access to.</p>
            <p className=" text-center font-medium text-grey text-2xl pb-2 font-sans ">We wish to leave a positive imprint on the world.</p> 
            <p className=" text-center font-regular text-grey text-2xl pb-2 font-sans ">Enjoy a healthier way of life with LivingVert. We offer hassle free one of a kind online shopping for an Eco-friendly lifestyle. 
           </p>
        </div> 
        </div>
    );
}

export default Aboutpageheader;
