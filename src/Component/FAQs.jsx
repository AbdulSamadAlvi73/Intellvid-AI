import React, { useState } from "react";
import Question from "../Pages/Home/Component/Question";

const FAQs = ({ darkMode }) => {
  let questions = [
    {
      question: "What is IntelliVid.ai?",
      answer:
        " IntelliVid.ai is an AI-powered video generation platform designed to help businesses create high-quality, personalized videos quickly and easily. Our technology allows users to transform text, images, and templates into engaging videos without the need for extensive video editing skills.",
    },
    {
      question: "How does the AI video generation work?",
      answer:
        "Our platform utilizes advanced machine learning algorithms to analyze successful video content and generate videos based on user input. Users can specify content preferences, and our AI automatically creates a polished video, complete with voiceovers, transitions, and visuals.",
    },
    {
      question: "What types of videos can I create with IntelliVid.ai?",
      answer:
        "Users can create a variety of video types, including promotional videos, social media content, explainer videos, product demos, and educational content. The platform is versatile and customizable to fit different business needs.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, IntelliVid.ai offers a free trial that allows users to explore our features and create a limited number of videos. This trial helps users experience the platform's capabilities before committing to a subscription.",
    },
    {
      question: "What are the pricing plans?",
      answer:
        "We offer flexible pricing plans to accommodate different business needs: -Basic Plan: Ideal for startups, includes a limited number of videos per month. - Pro Plan: Designed for larger teams, offers unlimited video creation and advanced analytics. - Pay-Per-Use Model: For occasional users who prefer to pay only for the videos they create.",
    },
    {
      question: "Can I customize the videos I create?",
      answer:
        "Absolutely! IntelliVid.ai provides a variety of customization options, including changing text, images, colors, and templates. Users can ensure that their videos align with their brand identity and messaging.",
    },
    {
      question: "How long does it take to create a video?",
      answer:
        "The AI video generation process is extremely fast. Most users can create a professional-quality video in just a few minutes, depending on the complexity and length of the content.",
    },
    {
      question: "Is my data secure with IntelliVid.ai?",
      answer:
        "Yes, we take data security seriously. IntelliVid.ai employs industry-standard security measures to protect user data, including encryption, secure servers, and regular security audits.",
    },
    {
      question: "What kind of support is available?",
      answer:
        "We offer comprehensive customer support, including a knowledge base, tutorials, and live chat assistance. Our support team is dedicated to helping users get the most out of our platform.",
    },
    {
      question: "How can I provide feedback or suggest features?",
      answer:
        "We value user feedback and encourage our customers to share their thoughts and suggestions. Users can submit feedback directly through the platform or contact our support team with their ideas.",
    },
  ];

  return (
    <div
      className={`bg-colored ${
        darkMode ? "bg-slate-950 text-white" : "bg-white text-black"
      }}`}
    >
      <div
        className={`md:max-w-[75vw] ${
          darkMode ? "text-white" : "text-black"
        } font-roboto tracking-wide py-32 px-5  mx-auto`}
      >
        <h2 className="lg:text-[3.4vw] md:text-[4.8vw] xs:text-[6.6vw] font-bold text-center tracking-wide">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 flex flex-col gap-3 w-full">
          {questions.map((question, idx) => {
            return <Question question={question} idx={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
