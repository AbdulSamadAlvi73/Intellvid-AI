import React from "react";
import { Link } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js'
import { toast } from "react-toastify";
import axios from "axios";
const ManualPlanning = ({ item }) => {
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHED_KEY);
  
  const HandleSubscription = async (planId) => {
      try {
          if (!planId) {
              console.error("No plan ID provided!");
              return;
          }
          const stripe = await stripePromise;
          const response = await axios.post(
              `${import.meta.env.VITE_SERVER_URL}/api/subscription/create`,
              { planId },
              {
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  withCredentials: true,
              }
          );
  
          // console.log("API Response:", response.data);
            if (response.status === 200) {
              
              const session = response.data;
              if (session.id) {
                  await stripe.redirectToCheckout({ sessionId: session.id });
              } else {
                  console.error("No session ID in response!");
              }
          }
      } catch (err) {
        console.log(err);
        
  toast.error(err.response.data.message,{position:"top-right"})
      }
  
    }
  return (
    <div
      className={`lg:w-full bg-white text-black rounded-2xl overflow-hidden`}
    >
      <div className="text-center bg-theme-purple">
        {item.label ? (
          <h2 className="md:py-[0.7vw] xs:py-[1.7vw] lg:text-[1.2vw] xs:text-[3.5vw] sm:text-[2.9vw] font-semibold uppercase text-white">
            {item.label}
          </h2>
        ) : (
          ""
        )}
      </div>
      <div className="md:py-[2vw] xs:py-[4vw] xs:px-[4vw] md:px-[0.9vw] flex flex-col gap-2 w-full">
        <h2 className=" lg:text-[1.3vw] xs:text-[4vw] sm:text-[3.3vw] font-bold">
          {item.type}
        </h2>
        <div className="flex items-end xs:pb-5 md:pb-4 border-b-2 border-gray-300">
          <p className="lg:text-[3vw] md:text-[4vw] xs:text-[5.5vw] sm:text-[6vw] text-theme-purple font-semibold">
            ${item.price}/
          </p>
          <span className="lg:text-[1.3vw] xs:text-[4vw] sm:text-[3.3vw]">
            Monthly
          </span>
        </div>
        <div className="md:py-5 xs:py-3 flex flex-col">
          {item.services.map((service, idx) => {
            return (
              <div key={idx} className="flex items-center gap-3">
                <img
                  className="md:w-[24px] md:h-[24px] xs:w-[15px] xs:h-[15px]"
                  src="/imgs/Content/tick 1.png"
                  alt=""
                />
                <p className="xs:text-[3.5vw] md:text-[0.9vw] xs:py-1.5 md:py-3 font-semibold">
                  {service}
                </p>
              </div>
            );
          })}
        </div>
        <Link  onClick={()=>HandleSubscription(item.planId)} className="md:py-[0.5vw] xs:py-[1vw] w-full text-center lg:text-[0.9vw] md:text-[2.1vw] sm:text-[3.1vw] text-white rounded-md videoGradient">
       Subscribe Now
        </Link>
      </div>
    </div>
  );
};

export default ManualPlanning;
