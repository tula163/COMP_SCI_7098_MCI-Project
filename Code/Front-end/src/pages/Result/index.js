import React from 'react';

const ResultPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 via-white to-pink-100">
      {/* Header  */}
      <header className="w-full px-8 py-4 flex justify-between items-center text-sm bg-white/50 backdrop-blur-sm ">
        <div className="font-bold text-indigo-600">Logo</div>
      </header>



      {/* main */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
        Top 3 Migration Agents Recommended by AI
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl">
        Our AI-powered matching system has analyzed your preferences and selected the top three migration agents that best align with your needs. These recommendations are based on multiple weighted criteria — including visa expertise, service quality, availability, and customer satisfaction — to help you make an informed and confident choice.
        </p>

        <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 w-80">
            <h3 className="text-indigo-600 font-semibold text-sm">TOP 1</h3>
            <p className="text-2xl font-bold mt-2">John  Patrick Illidge</p>
          
          
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              <li>✔ General visa advice</li>
              <li>✔ Online booking available</li>
              <li>✔ Multilingual support</li>
              <li className="text-gray-400">✖ No tailored strategy</li>
              <li className="text-gray-400">✖ Limited availability</li>
              <li className="text-gray-400">✖ No priority responses</li>
            </ul>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded w-full mb-4">Start your consultation</button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 w-80">
            <h3 className="text-indigo-600 font-semibold text-sm">TOP 2</h3>
            <p className="text-2xl font-bold mt-2">Badri Aryal </p>
           
            
            <ul className="text-sm text-gray-700 space-y-1  mb-4">
            <li>✔ General visa advice</li>
              <li>✔ Online booking available</li>
              <li>✔ Multilingual support</li>
              <li className="text-gray-400">✖ No tailored strategy</li>
              <li className="text-gray-400">✖ Limited availability</li>
              <li className="text-gray-400">✖ No priority responses</li>
            </ul>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded w-full mb-4">Start your consultation</button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 w-80">
            <h3 className="text-indigo-600 font-semibold text-sm">TOP 3</h3>
            <p className="text-2xl font-bold mt-2">Qi Wang </p>
        
         
            <ul className="text-sm text-gray-700 space-y-1  mb-4">
            <li>✔ General visa advice</li>
              <li>✔ Online booking available</li>
              <li>✔ Multilingual support</li>
              <li className="text-gray-400">✖ No tailored strategy</li>
              <li className="text-gray-400">✖ Limited availability</li>
              <li className="text-gray-400">✖ No priority responses</li>
            </ul>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded w-full mb-4">Start your consultation</button>
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

export default ResultPage;
