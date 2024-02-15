import { useEffect, useState } from "react";
import useNewsContext from "./useNewsContext";

const useNewsQuery = () => {
  const [articles, setArticles] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { category } = useNewsContext();
  const URL = !category
    ? "http://localhost:8000/v2/top-headlines"
    : `http://localhost:8000/v2/top-headlines/?category=${category.toLowerCase()}`;

  useEffect(() => {
    let ignore = false;
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        if (!ignore) {
          setArticles(data.articles);
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
  }, [URL]);

  return { articles, error, loading };
};

export default useNewsQuery;
