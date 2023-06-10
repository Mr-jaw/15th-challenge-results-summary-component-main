import "./App.css";
import Footer from "./components/Footer";
import Reuslts from "./components/Reuslts";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="wrapper">
      <main className="container">
        <Reuslts />
        <Summary />
      </main>
      <Footer />
    </div>
  );
}

export default App;
