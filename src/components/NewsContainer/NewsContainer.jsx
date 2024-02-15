import useNewsQuery from "../../hooks/useNewsQuery";
import LeftSideNews from "./LeftSideNews/LeftSideNews";
import RightSideNews from "./RightSideNews/RightSideNews";

const NewsContainer = () => {
  const { articles } = useNewsQuery();
  const splitIndex = Math.ceil(articles.length / 3);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-8">
      {articles.length && (
        <>
          <LeftSideNews leftSideArticles={articles.slice(splitIndex)} />
          <RightSideNews rightSideArticles={articles.slice(0, splitIndex)} />
        </>
      )}
    </div>
  );
};

export default NewsContainer;
