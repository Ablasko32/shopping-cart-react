import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";

function App() {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] h-screen">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
