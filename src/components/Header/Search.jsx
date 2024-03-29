import searchIcon from "../../assets/icons/search.svg";
import useSearchContext from "../../hooks/useSearchContext";
const Search = () => {
  const { searchTerm, setSearchTerm } = useSearchContext();

  return (
    <form className="flex" onSubmit={(e) => e.preventDefault()}>
      <div className="flex">
        <div className="relative overflow-hidden rounded-lg  md:min-w-[380px] lg:min-w-[440px]">
          <input
            type="search"
            id="search-dropdown"
            className="z-20 block w-full px-4 py-2 pr-10 focus:outline-[#00D991] focus:ring"
            placeholder="Search News"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button
            type="submit"
            className="absolute right-2 top-0 h-full rounded-e-lg  md:right-4"
          >
            <img src={searchIcon} />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
