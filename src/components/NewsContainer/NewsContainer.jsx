import useNewsQuery from "../../hooks/useNewsQuery";
import LeftSideNews from "./LeftSideNews/LeftSideNews";
import RightSideNews from "./RightSideNews/RightSideNews";

const NewsContainer = () => {
  const { articles } = useNewsQuery();
  const splitIndex = Math.ceil(articles.length / 3);

  return (
    <>
      {articles.length > 0 ? (
        <div className="container mx-auto grid grid-cols-12 gap-8">
          <LeftSideNews leftSideArticles={articles.slice(splitIndex)} />
          <RightSideNews rightSideArticles={articles.slice(0, splitIndex)} />
        </div>
      ) : (
        <h1 className="text-3xl text-center my-10">No contents found</h1>
      )}
    </>
  );
};

export default NewsContainer;
