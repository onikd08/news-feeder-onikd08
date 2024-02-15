import { useContext } from "react";
import { NewsContext } from "../providers/NewsProvider";

const useNewsContext = () => {
  const values = useContext(NewsContext);
  return values;
};

export default useNewsContext;
