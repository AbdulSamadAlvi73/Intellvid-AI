import React, { useState } from "react";
import Question from "../Pages/Home/Component/Question";

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
        className={`md:max-w-[75vw] ${
          darkMode ? "text-white" : "text-black"
        } font-roboto tracking-wide py-[5vw] px-5  mx-auto`}
      >
        <h2 className="lg:text-[3.5vw] md:text-[4vw] xs:text-[4.5vw] font-bold text-center tracking-wide">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 flex flex-col gap-3 w-full">
          {questions.map((question, idx) => {
            return <Question question={question} key={idx} idx={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
