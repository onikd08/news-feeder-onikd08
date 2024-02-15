/* eslint-disable react/prop-types */
import formatDate from "../../../utils/formatDate";

const LeftNewsItem = ({ article, featured }) => {
  //const { title, description, urlToImage, source, publishedAt } = article;
  return (
    <>
      {featured ? (
        <div className="col-span-12 grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                {article?.title}
              </h3>
            </a>
            <p className="text-base text-[#5C5955]">{article?.description}</p>
            <p className="mt-5 text-base text-[#5C5955]">
              {formatDate(article?.publishedAt)}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <img className="w-full" src={article?.urlToImage} alt="thumb" />
            <p className="mt-5 text-base text-[#5C5955]">
              {article?.source?.name}
            </p>
          </div>
        </div>
      ) : (
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="col-span-12 md:col-span-4">
            <a href="#">
              <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
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

export default LeftNewsItem;
