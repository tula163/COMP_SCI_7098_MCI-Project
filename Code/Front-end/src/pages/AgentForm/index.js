import React, { useState } from "react";

const AgentForm = () => {
  const [formData, setFormData] = useState({
    "Experience_years": "1",
    "Success rate": "2",
    "Language": "3",
    "Booking preference": "4",
    "Charge": "5",
    "Visa type": "6",
    "Location": "000",
    "Employment Type": "7",
    "Google rating": "8",
    "Availability": "9"
  });

  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/api/agent/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error("Recommendation failed:", err);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">中介推荐问卷</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(formData).map(([key, val]) => (
          <div key={key}>
            <label className="block mb-1 font-medium">{key}</label>
            <input
              name={key}
              value={val}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          获取推荐
        </button>
      </form>

      {result.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">推荐结果：</h3>
          <ul className="space-y-2">
            {result.map((agent, index) => (
              <li key={index} className="p-3 border rounded">
                <p><strong>姓名：</strong>{agent.Full_name}</p>
                <p><strong>MARN：</strong>{agent.MARN}</p>
                <p><strong>匹配得分：</strong>{agent["Match Score"]}</p>
                <p><strong>匹配字段：</strong>{agent["Matched Fields"]?.join(", ")}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AgentForm;
