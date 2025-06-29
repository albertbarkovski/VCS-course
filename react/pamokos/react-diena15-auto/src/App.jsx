import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="continer configurator">
        <section className="first">
          <div>
            <img src="./src/assets/images/car.jpg" alt="" />
          </div>
          <div></div>
        </section>
      </div>
    </>
  );
}

export default App;
