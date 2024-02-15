import Header from "./components/Header/Header";
import NewsContainer from "./components/NewsContainer/NewsContainer";
import NewsProvider from "./providers/NewsProvider";

const App = () => {
  return (
    <NewsProvider>
      <Header />
      <main className="my-10 lg:my-14">
        <NewsContainer />
      </main>
    </NewsProvider>
  );
};

export default App;
