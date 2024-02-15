import useNewsQuery from "../../hooks/useNewsQuery";
import useNewsContext from "../../hooks/useNewsContext";

const NewsContainer = () => {
  const { category } = useNewsContext();
  const { articles } = useNewsQuery();
  return (
    <div>
      {category}: {articles.length}
    </div>
  );
};

export default NewsContainer;
