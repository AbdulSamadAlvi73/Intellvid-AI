import React from 'react'
import cancel from '../../../../public/imgs/cancel.jpg'
const Cancel = () => {
  return (
   <>
     <div className="flex justify-center items-center w-ful h-screen">
         <div className="w-90 h-1/2 border-2  border-emerald-500 flex flex-col justify-center items-center ">
         
      <div className="flex items-center">
      <img src={cancel} className= " w-15 h-15" alt="" />
      <h1 className="xs:text-2xl text-5xl">Payment Canceld</h1>
      </div>
         {/* {sessionDetails ? (
           <div className="text-center">
             <p><strong>Thank you! your payment of </strong> ${sessionDetails.amount_total / 100} has been recieved</p>
             <p><strong>Payment Method:</strong> {sessionDetails.payment_method_types[0]}</p>
             <p><strong>Customer Email:</strong> {sessionDetails.customer_email}</p>
           </div>  
         ) : (
           <div className="flex justify-center items-center  lg:py-[1vw] xs:py-[2vw] lg:text-[1.2vw] md:text-[2.2vw] sm:text-[3.3vw] xs:text-[3.2vw] videoGradient rounded-full mt-7">
   <div className=" px-5 py-2 rounded-lg flex items-center justify-center videoGradient ">
         <div className="lg:w-10 lg:h-10 md:w-10 md:h-10  xs:w-6 xs:h-6 border-4 border-gray-300 border-t-indigo-700 rounded-full animate-spin"></div>
         
       </div>
       </div>
         )} */}
         <Link to={'/dashboard/text-to-script'} className="mt-20 px-2 py-1 border  border-emerald-500 rounded-lg bg-green-400 ">Home</Link>
         </div>
       </div>
   </>
  )
}

export default Cancel