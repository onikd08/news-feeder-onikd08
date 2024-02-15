/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("");

  const handleCategory = (categoryName) => {
    setCategory(categoryName);
  };

  return (
    <NewsContext.Provider value={{ category, handleCategory }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
