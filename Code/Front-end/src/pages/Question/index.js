import React, { useState } from 'react';
import { Radio, Select, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
// import {submitQuestions} from "@/api/requireApi"
import { RecommendContext } from "@/context/RecommendContext";
import {getRecommend} from "@/api/requireApi"
const { Option } = Select;

const questions = [
  {
    question: 'What is your preferred visa type?',
    optionList: ['Student Visa', 'Working Holiday', 'PR Pathway'],
    type: 'radio',
  },
  {
    question: 'How many years of experience do you have?',
    optionList: ['Less than 1 year', '1-3 years', 'More than 3 years'],
    type: 'radio',
  },
  {
    question: 'What is your preferred booking method?',
    optionList: ['Online', 'Phone', 'In-person'],
    type: 'select',
  },
  {
    question: 'What languages do you speak?',
    optionList: [],
    type: 'radio',
  },
  {
    question: 'What is your budget range?',
    optionList: ['<$1000', '$1000 - $3000', '>$3000'],
    type: 'radio',
  },
  {
    question: 'What is your location preference?',
    optionList: ['Sydney', 'Melbourne', 'Adelaide'],
    type: 'select',
  },
  {
    question: 'Do you prefer independent or registered agents?',
    optionList: ['Independent', 'Registered'],
    type: 'radio',
  },
  {
    question: 'What is your success rate requirement?',
    optionList: ['No preference', 'Above 80%', 'Above 90%'],
    type: 'radio',
  },
  {
    question: 'What is your preferred availability timeframe?',
    optionList: ['Morning', 'Afternoon', 'Evening'],
    type: 'radio',
  },
  {
    question: 'How important is the Google rating to you?',
    optionList: ['Not Important', 'Somewhat Important', 'Very Important'],
    type: 'select',
  },
];

const questionKeyMap = {
  'What is your preferred visa type?': 'Visa type',
  'How many years of experience do you have?': 'Experience_years',
  'What is your preferred booking method?': 'Booking preference',
  'What languages do you speak?': 'Language',
  'What is your budget range?': 'Charge',
  'What is your location preference?': 'Location',
  'Do you prefer independent or registered agents?': 'Employment Type',
  'What is your success rate requirement?': 'Success rate',
  'What is your preferred availability timeframe?': 'Availability',
  'How important is the Google rating to you?': 'Google rating',
};


const QuestionPage = () => {
  const navigate = useNavigate();
  // const [result, setResult] = useState([]);
  const { setRecommendResult } = useContext(RecommendContext);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false); 

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };



  const handleSubmit = async (e) => {
    setLoading(true); 

    const payload = {};
  
    questions.forEach((q, index) => {
      const backendKey = questionKeyMap[q.question];
      const answer = answers[index];
      if (backendKey && answer !== undefined) {
        payload[backendKey] = answer;
      }
    });
  


    e.preventDefault();
    try {
      const res = await getRecommend(payload)
      const result =  res.data
      setRecommendResult(result.data);
      navigate('/result');
    } catch (err) {
      alert("error");
    } finally {
      setLoading(false); 
    }
  

  };
  




  const handleChange = (value) => {
    setAnswers({ ...answers, [current]: value });
  };

  const renderInput = (q) => {
    switch (q.type) {
      case 'radio':
        return (
          <Radio.Group
            onChange={(e) => handleChange(e.target.value)}
            value={answers[current]}
          >
            <div className="flex flex-col gap-8"> 
              {q.optionList.map((option, index) => (
                <Radio key={index} value={option}>
                  {option}
                </Radio>
              ))}
            </div>
          </Radio.Group>
        );
      
      case 'select':
        return (
          <Select
            style={{ width: '100%' }}
            placeholder="Select an option"
            onChange={(value) => handleChange(value)}
            value={answers[current]}
          >
            {q.optionList.map((option, index) => (
              <Option key={index} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        );
      case 'input':
        return (
          <Input
            placeholder="Enter your answer"
            value={answers[current] || ''}
            onChange={(e) => handleChange(e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  const currentQuestion = questions[current];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 via-white to-pink-100">
      <header className="w-full px-8 py-4 flex justify-between items-center text-sm bg-white/50 backdrop-blur-sm ">
        <div className="font-bold text-indigo-600">Logo</div>
      </header>

 

      <div className='flex-1 flex items-center justify-center'>

        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>

          <div className="mb-6">{renderInput(currentQuestion)}</div>

          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>

            <span className="text-sm text-gray-600">{`Showing ${current + 1} of ${questions.length}`}</span>

            {current === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
              
                disabled={loading}
                className={`bg-indigo-600 text-white px-6 py-2 rounded ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                 {loading ? "Submitting..." : "Submit"}
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-8">
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 hover:underline text-lg font-medium"
        >
          ← Back
        </button>
      </div>


    </div>
  );
};

export default QuestionPage;
