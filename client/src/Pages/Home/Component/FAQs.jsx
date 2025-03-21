import React, { useState } from "react";
import Question from "./Question";

const FAQs = ({ darkMode }) => {
  let questions = [
    {
      question: "How Does Intellivid AI ?",
      answer:
        "Intellivid AI automates video analysis using advanced artificial intelligence to provide real-time insights, enhance security, optimize operations, and improve decision-making across industries like retail, logistics, and public safety.",
    },
    {
      question: "How Does Intellivid AI ?",
      answer:
        "Intellivid AI automates video analysis using advanced artificial intelligence to provide real-time insights, enhance security, optimize operations, and improve decision-making across industries like retail, logistics, and public safety.",
    },
    {
      question: "How Does Intellivid AI ?",
      answer:
        "Intellivid AI automates video analysis using advanced artificial intelligence to provide real-time insights, enhance security, optimize operations, and improve decision-making across industries like retail, logistics, and public safety.",
    },
    {
      question: "How Does Intellivid AI ?",
      answer:
        "Intellivid AI automates video analysis using advanced artificial intelligence to provide real-time insights, enhance security, optimize operations, and improve decision-making across industries like retail, logistics, and public safety.",
    },
    {
      question: "How Does Intellivid AI ?",
      answer:
        "Intellivid AI automates video analysis using advanced artificial intelligence to provide real-time insights, enhance security, optimize operations, and improve decision-making across industries like retail, logistics, and public safety.",
    },
    {
      question: "How Does Intellivid AI ?",
      answer:
        "Intellivid AI automates video analysis using advanced artificial intelligence to provide real-time insights, enhance security, optimize operations, and improve decision-making across industries like retail, logistics, and public safety.",
    },
  ];

  return (
    <div
      className={` bg-colored ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }}`}
    >
      <div
        className={`max-w-[1450px] ${
          darkMode ? "text-white" : "text-black"
        } font-roboto tracking-wide py-32 px-5  mx-auto`}
      >
        <h2 className="lg:text-[3.4vw] md:text-[4.8vw] xs:text-[6.6vw] font-bold text-center tracking-wide">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 flex flex-col gap-3 w-full">
          {questions.map((question, idx) => {
            return <Question question={question} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
