import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [answers, setAnswers] = useState({});

  return (
    <AppContext.Provider
      value={{
        answers,
        setAnswers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}