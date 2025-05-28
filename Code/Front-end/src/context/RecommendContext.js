import { createContext, useState, useEffect } from "react";

export const RecommendContext = createContext();

export const RecommendProvider = ({ children }) => {
  const [recommendResult, setRecommendResult] = useState(() => {
    // ✅ 初始时尝试从 localStorage 读取
    const stored = localStorage.getItem("recommendResult");
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ 每次更新时写入 localStorage
  useEffect(() => {
    localStorage.setItem("recommendResult", JSON.stringify(recommendResult));
  }, [recommendResult]);

  return (
    <RecommendContext.Provider value={{ recommendResult, setRecommendResult }}>
      {children}
    </RecommendContext.Provider>
  );
};
