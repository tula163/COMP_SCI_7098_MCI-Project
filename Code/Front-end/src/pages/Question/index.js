import React, { useState } from 'react';
import { Radio } from 'antd';
import { useNavigate } from 'react-router-dom';


const questions = [
  'What is your preferred visa type?',
  'How many years of experience do you have?',
  'What is your preferred booking method?',
  'What languages do you speak?',
  'What is your budget range?',
  'What is your location preference?',
  'Do you prefer independent or registered agents?',
  'What is your success rate requirement?',
  'What is your preferred availability timeframe?',
  'How important is the Google rating to you?',
];

const QuestionPage = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handleSubmit = () => {
     navigate("/result")
    //    ## todo
  };

  

  return (
    <div  className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 via-white to-pink-100">
    <header className="w-full px-8 py-4 flex justify-between items-center text-sm bg-white/50 backdrop-blur-sm ">
        <div className="font-bold text-indigo-600">Logo</div>
       
      </header>

      <div className='flex-1 flex items-center justify-center'>

  

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl  ">
     
      <h2 className="text-xl font-semibold mb-6"> {questions[current]}</h2>
        {/* <h2 className="text-xl font-semibold mb-6">{`Question ${current + 1} of ${questions.length}`}</h2> */}
        
        {/* <p className="text-lg mb-10">{questions[current]}</p> */}
        <div>
        <Radio>Radio</Radio>
        </div>
        <div>
        <Radio>Radio</Radio>
        </div>
        <div>
        <Radio>Radio</Radio>
        </div>
      
 
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
    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
  >
    Submit
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
