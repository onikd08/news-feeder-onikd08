import Categories from "./Categories";
import DateSection from "./DateSection";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  return (
    <nav className="border-b border-black py-6 md:py-8">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
        <DateSection />
        <Logo />
        <Search />
      </div>
      <Categories />
    </nav>
  );
};

export default Header;
