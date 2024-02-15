import { useEffect, useState } from "react";

const useNewsQuery = (categoryName = "") => {
  const [articles, setArticles] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const URL = !categoryName
    ? "http://localhost:8000/v2/top-headlines"
    : `http://localhost:8000/v2/top-headlines/?category=${categoryName.toLowerCase()}`;

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
