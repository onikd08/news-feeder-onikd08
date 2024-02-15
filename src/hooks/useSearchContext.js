import { useContext } from "react";
import { SearchContext } from "../providers/SearchProvider";

const useSearchContext = () => {
  const values = useContext(SearchContext);
  return values;
};

export default useSearchContext;
