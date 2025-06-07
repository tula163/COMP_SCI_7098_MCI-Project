import React, { useState } from 'react';
import { Radio, Select, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
// import {submitQuestions} from "@/api/requireApi"
import { RecommendContext } from "@/context/RecommendContext";
import {getRecommend} from "@/api/requireApi"
import { useSnackbarQueue } from '@/store/useSnackbarQueue';
import axios from "axios";



const { Option } = Select;


const questions = [
  {
    question: 'Please input the VISA type you want to apply?',
    subtext: 'If you enter an incorrect VISA TYPE, you will be prompted to re-enter it.',
    optionList: [
    'Student Visa',
    'Skilled Independent Visa (189)',
    'Employer Sponsored Visa (186)',
    'Temporary Graduate Visa (485)',
    'Business Innovation Visa (188)',
    ],
    type: 'searchable-select',
    key:'Visa type'
  },
  {
    question: 'Which of the following ways do you prefer to communicate with agent?',
    optionList: ['Online', 'In-person', 'Both of them'],
    type: 'radio',
    key:'Booking preference',
    layout: 'grid'
  },
  {
    question: 'How many years of experience would you prefer an agent with?',
    optionList: ['0 ~ 10 years', '11 ~ 20 years', '21 ~ 30 years', 'More than 30 years'],
    type: 'radio',
    key:'Experience_years'
  },
  {
    question: 'Which language would you prefer the agent to be able to communicate with you in?',
    optionList: ['Chinese','English', 'Spanish', 'Japanese', 'Franch', 'Germany', 'Urdu', 'Thai'],
    type: 'searchable-select',
    key:'Language'
  },
  {
    question: 'How much do you prefer to spend on immigration agent fees?',
    optionList: ['0 ~ 100 AUD', '101 ~ 200 AUD', '201 ~ 500 AUD', 'More than 500 AUD'],
    type: 'radio',
    key:'Charge'
  },
  {
    question: 'Which geographic location do you prefer to be in agent?',
    optionList: [
      'New South Wales (NSW)', 'Victoria (VIC)',
      'Northern Territory (NT)', 'Tasmania (TAS)',
      'Western Australia (WA)', 'Queensland (QLD)',
      'South Australia (SA)', 'Australian Capital Territory (ACT)'
    ],
    type: 'radio',
    key:'Location',
    layout: 'grid'
  },
  {
    question: 'Which of the employment type of agents do you prefer?',
    optionList: ['Independent', 'Organized'],
    type: 'radio',
    layout: 'grid',
    key:'Employment Type'
  },
  {
    question: 'The following is the success rate of the agent assisted visa application, which one do you prefer?',
    optionList: ['Less than 30%','31% ~ 50%', '51% ~ 80%', 'More than 80%'],
    type: 'radio',
    key:'Success rate'
  },
  {
    question: 'How long do you prefer to be responded to and processed by the agent?',
    optionList: ['Immediately', '1 month', '2 ~ 3 month', '4 ~ 6 month'],
    type: 'radio',
    key:'Availability'
  },
  {
    question: 'The following is the Google rate of agent got, which one do you prefer?',
    optionList: ['Less than 3.0', '3.1 ~ 3.5', '3.6 ~ 3.9', '4.0 ~ 4.5', '4.6 ~ 5.0'],
    type: 'radio',
    key:'Google rating'
  },
];




const QuestionPage = () => {
  const navigate = useNavigate();
  // const [result, setResult] = useState([]);
  const { setRecommendResult } = useContext(RecommendContext);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false); 
  const { showMessage } = useSnackbarQueue();

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
      const backendKey = q.key;
      const answer = answers[index];
      if (backendKey && answer !== undefined) {
        payload[backendKey] = answer;
      }
    });
  


    e.preventDefault();
    try {
      const result = await getRecommend(payload);  
      showMessage('success', 'Success!');
      setRecommendResult(result);
      navigate('/result');
      
    } catch (err) {
      let message = "Unexpected error occurred";
      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message || err.message || message;
      }
      showMessage('error', message);
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
            <div className={q.layout === 'grid' ? 'grid grid-cols-2 md:grid-cols-4 gap-4' : 'flex flex-col gap-8'}> 
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
      case 'searchable-select':
        return (
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="Please input your ideal type"
            optionFilterProp="children"
            onChange={(value) => handleChange(value)}
            value={answers[current]}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
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

        <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-6xl">
          <h2 className="text-3xl font-semibold mb-6 ">{currentQuestion.question}</h2>

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
