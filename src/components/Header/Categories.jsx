import useNewsContext from "../../hooks/useNewsContext";

const Categories = () => {
  const { handleCategory } = useNewsContext();
  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li>
          <a onClick={() => handleCategory("general")}>General</a>
        </li>
        <li>
          <a onClick={() => handleCategory("business")}>Business</a>
        </li>
        <li>
          <a onClick={() => handleCategory("entertainment")}>Entertainment</a>
        </li>
        <li>
          <a onClick={() => handleCategory("health")}>Health</a>
        </li>
        <li>
          <a onClick={() => handleCategory("science")}>Science</a>
        </li>
        <li>
          <a onClick={() => handleCategory("sports")}>Sports</a>
        </li>
        <li>
          <a onClick={() => handleCategory("technology")}>Technology</a>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
