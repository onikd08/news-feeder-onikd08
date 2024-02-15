/* eslint-disable react/prop-types */
import RightSideNewsItem from "./RightSideNewsItem";

const RightSideNews = ({ rightSideArticles }) => {
  const featuredArticle = rightSideArticles.find(
    (article) => article.description && article.urlToImage
  );
  const restArticles = rightSideArticles.filter(
    (article) => article.title !== featuredArticle.title
  );
  return (
    <div className="col-span-12 self-start xl:col-span-4">
      <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
        <RightSideNewsItem featured={true} article={featuredArticle} />
        {restArticles.map((article) => (
          <RightSideNewsItem key={article.title} article={article} />
        ))}
      </div>
    </div>
  );
};

export default RightSideNews;
