import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const Question = ({ question, idx }) => {
  const [question1, setQuestion1] = useState(false);
  const FAQToggle = useRef(null);
  console.log(question1);

  useEffect(() => {
    gsap.to(FAQToggle.current, {
      maxHeight: question1 ? "200px" : "0",
      duration: 0.5,
      ease: "power4",
    });
  }, [question1]);

  return (
    <div
      onClick={() => setQuestion1((prev) => !prev)}
      className="w-full flex gap-4 md:p-[0.8vw] xs:px-4 border rounded-xl cursor-pointer overflow-hidden"
    >
      <div className="lg:w-[2vw] md:w-[3vw] xs:w-[5vw] flex items-center mt-4 justify-center lg:h-[2vw] md:h-[3vw] xs:h-[5vw] md:text-[1.2vw] sm:text-[1.8vw] xs:text-[2.4vw] text-white videoGradient rounded-full">
        <h3 className="px-4">{idx + 1}</h3>
      </div>
      <div>
        <h2 className="lg:text-[1.5vw] md:text-[2.5vw] xs:text-[3.5vw] my-4 font-bold tracking-wide">
          {question.question}
        </h2>
        <p
          ref={FAQToggle}
          className="md:text-[1.2vw] xs:text-[2.6vw] max-h-0 font-medium overflow-hidden"
        >
          {question.answer}
        </p>
      </div>
    </div>
  );
};

export default Question;
