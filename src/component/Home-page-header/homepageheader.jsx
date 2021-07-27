import React from "react";



export default function HomePageHeader(){
return (
 <div className="flex flex-col place-items-center bg-pink">
 
     
       {/* <div className=" relative">  */}
      {/* <div className="relative left-20 top-2   shadow-xl"> <img 
       width="179px" height="282px"src="../images/header1.jpeg" alt="1" /></div>

       <div className="relative left-60  -top-20 "><img width="250" height="311" src="../images/header3.jpeg" alt="3" /></div>
       <div className="relative  left-20 -top-16 shadow-xl">
           <img width="130" height="127"
             src="../images/header2.jpeg" alt="2" /></div>
       </div> */}

  {/* <div className="static ml-8 mt-5
           left-12 top-14 shadow-ll"> <img 
       width="179px" height="282px" src="../images/header1.jpeg" alt="1" /></div>

        <div className=" static  "><img width="250" height="3" src="../images/header3.jpeg" alt="3" /></div>
       <div className="static w-full  mt-5 ml-5 shadow-l">
           <img width="198px"
                height="12"
             src="../images/header2.jpeg" alt="2" /></div> </div> */}
       

       <div className="relative h-full w-full left-40 top-40 mt-20 ">
  <img src="../images/header3.jpeg" alt="PRODUCT" className="h-60 w-60 object-cover absolute left-32 top-25 shadow-lg " />
  <img src="../images/header1.jpeg" alt="PRODUCT" className="h-60 w-40 object-cover absolute -left-9 -top-40  shadow-lg shadow-ll " />
  <img src="../images/header2.jpeg" alt="PRODUCT" className="h-40 w-30 object-cover absolute -bottom-80 left-4 shadow-l" /> </div>
  
  





    <div className=" flex flex-col  justify-center   static bg-pink ">
<h1 className='text-oswald text-3xl font-medium text-gray-700 text-center text-red mb-5'>DON’T PANIC, IT’S ORGANIC!</h1> <br/>
<p className="text-oswald text-2xl text-grey font-regular text-center"> The more we talk about environmental issues,<br />
 the more we normalize them. <br/>
Make a Change NOW!<br/>
Buy our <span className="text-oswald text-2xl font-regular text-center text-red"> eco-friendly </span>
 and  <span className="text-oswald text-red text-2xl font-regular text-center"> recyclable </span>
   items.</p> 
<div className="w-auto mx-auto"> <br/> <br/>
<button className="w-40 h-16 text-center  text-2xl rounded-md text-pink font-regular bg-red  shadow-lg border-olivegreen hover:bg-green hover:text-white shadow-md transform hover:scale-110 motion-reduce:transform-none  ">Start Shopping</button>
 </div>
</div>
 </div>





);

}