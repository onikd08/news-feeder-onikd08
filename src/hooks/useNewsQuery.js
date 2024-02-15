import { useEffect, useState } from "react";
import useNewsContext from "./useNewsContext";
import useSearchContext from "./useSearchContext";

const useNewsQuery = () => {
  const [articles, setArticles] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { category } = useNewsContext();
  const { searchTerm } = useSearchContext();

  useEffect(() => {
    let ignore = false;
    let URL = "http://localhost:8000/v2/top-headlines";
    if (searchTerm) {
      URL = `http://localhost:8000/v2/search?q=${searchTerm.toLowerCase()}`;
    }
    if (category) {
      URL = `http://localhost:8000/v2/top-headlines/?category=${category.toLowerCase()}`;
    }
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        if (!ignore) {
          setArticles(data.articles || data.result);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();

    return () => {
      ignore = true;
    };
  }, [category, searchTerm]);

  return { articles, error, loading };
};

export default useNewsQuery;
