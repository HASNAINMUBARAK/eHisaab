import "./App.css";
import Routers from "./Routers";
import Banner from "./Components/Banner"; 
import Footer from "./Components/Footer";
import FetchApi from "./Components/FetchApi";
import Search from "./Components/SearchForm";
import Cart from "./Components/Cart";
 

function App() {
  return (
    <div className="App">
      <Routers />
      <Banner />
      <Search />
      <Cart />
      <FetchApi />
      <Footer />
    </div>
  );
}

export default App;
