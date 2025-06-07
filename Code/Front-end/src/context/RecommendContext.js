import { createContext, useState, useEffect } from "react";

export const RecommendContext = createContext();

export const RecommendProvider = ({ children }) => {
  const [recommendResult, setRecommendResult] = useState(() => {
    // Initially, attempt to read from localStorage
    const stored = localStorage.getItem("recommendResult");
    return stored ? JSON.parse(stored) : [];
  });

  //Write to localStorage each time it is updated
  useEffect(() => {
    localStorage.setItem("recommendResult", JSON.stringify(recommendResult));
  }, [recommendResult]);

  return (
    <RecommendContext.Provider value={{ recommendResult, setRecommendResult }}>
      {children}
    </RecommendContext.Provider>
  );
};
