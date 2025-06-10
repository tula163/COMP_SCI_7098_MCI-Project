import React, { useState } from "react";
import banner from "@/assets/generate recommendation banner.jpg";

import visaTypes from "./visaTypes.json";
import languages from "./languages.json";

export default function QuestionPage() {
  const [answers, setAnswers] = useState({});
  const [visaInput, setVisaInput] = useState("");
  const [language, setLanguage] = useState("");
  const [isAllCollapsed, setIsAllCollapsed] = useState(false);

  const [expanded, setExpanded] = useState(
    Object.fromEntries(Array.from({ length: 10 }, (_, i) => [i + 1, true]))
  );

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleAll = () => {
    const next = !isAllCollapsed;
    const updated = {};
    for (let i = 1; i <= 10; i++) {
      updated[i] = !next;
    }
    setExpanded(updated);
    setIsAllCollapsed(next);
  };

  const questions = [
    {
      id: 1,
      title: "Agents’ working Experience years",
      question: "How many years of experience would you prefer an agent with?",
      options: ["0 ~ 10 years", "11 ~ 20 years", "21 ~ 30 years", "More than 30 years"],
    },
    {
      id: 2,
      title: "Agents’ fees",
      question: "How much do you prefer to spend on immigration agent fees?",
      options: ["0 ~ 100 AUD", "101 ~ 200 AUD", "201 ~ 500 AUD", "More than 500 AUD"],
    },
    {
      id: 3,
      title: "Booking preference",
      question: "Which of the following ways do you prefer to communicate with agent ?",
      options: ["Online", "In person", "Both of them"],
    },
    {
      id: 4,
      title: "The employment type of agents",
      question: "Which of the employment type of agents do you prefer ?",
      options: ["Independent", "Organized"],
    },
    {
      id: 5,
      title: "Success rate",
      question: "The following is the success rate of agent assisted visa application, which one do you prefer?",
      options: ["Less than 30%", "31% ~ 50%", "51% ~ 80%", "More than 80%"],
    },
    {
      id: 6,
      title: "The available time of the age",
      question: "How long do you prefer to be responded to and processed by the agent?",
      options: ["Immediately", "1 month", "2 ~ 3 month", "4 ~ 6 month"],
    },
    {
      id: 7,
      title: "Google rating",
      question: "The following is the Google rate of agent got, which one do you prefer?",
      options: ["Less than 3.0", "3.0 ~ 3.5", "3.6 ~ 3.9", "4.0 ~ 4.5", "4.6 ~ 5.0"],
    },
    {
      id: 8,
      title: "The base of the agent",
      question: "Which geographic location do you prefer to be in agent ?",
      options: [
        "New South Wales (NSW)",
        "Australian Capital Territory (ACT)",
        "Victoria (VIC)",
        "Tasmania (TAS)",
        "Northern Territory (NT)",
        "Western Australia (WA)",
        "South Australia (SA)",
        "Queensland (QLD)",
      ],
    },
  ];

  return (
    <div className="px-8 py-6 bg-[#f5f6f7] min-h-screen font-sans text-base">
      <div className="bg-white border border-gray-300 rounded-md overflow-hidden mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <img
            src={banner}
            alt="banner"
            className="w-full h-full object-cover max-h-[200px] md:max-h-full md:rounded-l-md"
          />
          <div className="md:col-span-2 p-6 flex flex-col justify-center leading-relaxed text-gray-800 text-lg">
            <h2 className="text-[#004c5a] text-2xl font-bold mb-3">
              How to get your ideal agents?
            </h2>
            <ol className="list-decimal list-inside mb-3 space-y-1">
              <li>Scroll down to select the tags you are interested in and answer (at least one). All are multiple-choice questions.</li>
              <li>The more questions you answer, the more accurate the prediction will be.</li>
              <li>Click “Submit” at the bottom of the page and wait for the results.</li>
            </ol>
            <p className="text-sm text-gray-500 italic">
              Tip: Click “Expand/Collapse” to view or hide all questions.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="text-[#004c5a] font-semibold text-lg">Start to get your matches</div>
        <button
          onClick={toggleAll}
          className="text-sm text-[#3083A6] font-semibold hover:underline"
        >
          {isAllCollapsed ? "Expand All" : "Collapse All"}
        </button>
      </div>

      <p className="mb-4 text-base text-gray-700">There are 10 questions in total.</p>

      {questions.map((q) => (
        <div key={q.id} className="bg-white border border-gray-400 rounded-md mb-4">
          <div
            className="bg-[#3083A6] text-white font-semibold px-4 py-2 flex justify-between items-center cursor-pointer text-lg"
            onClick={() => toggleExpand(q.id)}
          >
            <span>{q.id}. {q.title}</span>
            <span>{expanded[q.id] ? "▾" : "▸"}</span>
          </div>
          {expanded[q.id] && (
            <div className="p-4 space-y-4">
              <p className="text-gray-800 font-medium text-base">{q.question}</p>
              <div className="flex flex-wrap gap-6">
                {q.options.map((option, index) => (
                  <label key={index} className="flex items-center space-x-2 text-base">
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      className="form-radio text-[#004c5a]"
                      onChange={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [q.id]: option,
                        }))
                      }
                      checked={answers[q.id] === option}
                    />
                    <span className="text-gray-800">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="bg-white border border-gray-400 rounded-md mb-4">
        <div
          className="bg-[#3083A6] text-white font-semibold px-4 py-2 flex justify-between items-center cursor-pointer text-lg"
          onClick={() => toggleExpand(9)}
        >
          <span>9. Language</span>
          <span>{expanded[9] ? "▾" : "▸"}</span>
        </div>
        {expanded[9] && (
          <div className="p-4 space-y-4">
            <p className="text-gray-800 font-medium text-base">
              Which language would you prefer the agent to be able to communicate with you in?
            </p>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border border-gray-400 rounded-md px-4 py-2 text-base"
            >
              <option value="">Please choose a kind of language</option>
              {languages.map((lang, idx) => (
                <option key={idx} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="bg-white border border-gray-400 rounded-md mb-8">
        <div
          className="bg-[#3083A6] text-white font-semibold px-4 py-2 flex justify-between items-center cursor-pointer text-lg"
          onClick={() => toggleExpand(10)}
        >
          <span>10. Visa type</span>
          <span>{expanded[10] ? "▾" : "▸"}</span>
        </div>
        {expanded[10] && (
          <div className="p-4 space-y-4">
            <p className="text-gray-800 font-medium text-base">
              Please input the VISA type you want to apply?
            </p>
            <p className="text-sm text-gray-500 italic">
              If you enter an incorrect VISA TYPE, you will be prompted to re-enter it.
            </p>
            <input
              type="text"
              placeholder="Please input your ideal VISA type"
              value={visaInput}
              onChange={(e) => setVisaInput(e.target.value)}
              className="w-full border border-gray-400 rounded-md px-4 py-2 text-base"
            />
            {visaInput.length > 0 && (
              <p
                className={`text-sm mt-1 ${
                  visaTypes.includes(visaInput)
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {visaTypes.includes(visaInput)
                  ? "✔ Valid input"
                  : "✘ Invalid VISA TYPE"}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
