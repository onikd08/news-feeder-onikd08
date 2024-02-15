/* eslint-disable react/prop-types */
import formatDate from "../../../utils/formatDate";

const RightSideNewsItem = ({ article, featured }) => {
  return (
    <>
      {featured ? (
        <div className="col-span-12 mb-6 md:col-span-8">
          <img className="w-full" src={article?.urlToImage} alt="thumb" />
          <div className="col-span-12 mt-6 md:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                {article?.title}
              </h3>
            </a>
            <p className="text-base text-[#292219]">{article?.description}</p>
            <p className="mt-5 text-base text-[#94908C]">
              {formatDate(article?.publishedAt)}
            </p>
          </div>
        </div>
      ) : (
        <div className="col-span-12 md:col-span-8">
          <div className="col-span-12 md:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                {article?.title}
              </h3>
            </a>
            <p className="text-base text-[#292219]">{article?.description}</p>
            <p className="mt-5 text-base text-[#94908C]">
              {formatDate(article?.publishedAt)}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default RightSideNewsItem;
