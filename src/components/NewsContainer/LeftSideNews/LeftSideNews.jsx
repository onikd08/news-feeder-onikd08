/* eslint-disable react/prop-types */
import LeftNewsItem from "./LeftNewsItem";
const LeftSideNews = ({ leftSideArticles }) => {
  const featuredArticle = leftSideArticles.find(
    (article) => article.description && article.content && article.urlToImage
  );

  const restArticles = leftSideArticles.filter(
    (article) => article.title !== featuredArticle.title
  );

  return (
    <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
      <LeftNewsItem article={featuredArticle} featured={true} />
      {restArticles.map((article) => (
        <LeftNewsItem key={article.title} article={article}></LeftNewsItem>
      ))}
    </div>
  );
};

export default LeftSideNews;
