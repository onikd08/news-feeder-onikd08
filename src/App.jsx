import Header from "./components/Header/Header";
import NewsContainer from "./components/NewsContainer/NewsContainer";
import NewsProvider from "./providers/NewsProvider";

const App = () => {
  return (
    <NewsProvider>
      <Header />
      <NewsContainer />
    </NewsProvider>
  );
};

export default App;
