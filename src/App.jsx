import Footer from "./components/Footer.jsx/Footer";
import Header from "./components/Header/Header";
import NewsContainer from "./components/NewsContainer/NewsContainer";
import NewsProvider from "./providers/NewsProvider";
import SearchProvider from "./providers/SearchProvider";

const App = () => {
  return (
    <NewsProvider>
      <SearchProvider>
        <Header />
        <main className="my-10 lg:my-14">
          <NewsContainer />
        </main>
        <Footer />
      </SearchProvider>
    </NewsProvider>
  );
};

export default App;
