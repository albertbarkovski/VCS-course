import "./App.css";
import EinaPrieLentos from "./componenst/EinaPrieLentos";
import GeriausiasMedis from "./componenst/GeriausiasMedis";
import Laimejimas from "./componenst/Laimejimas";
import Sansas from "./componenst/Sansas";
import Skaiciai from "./componenst/Skaiciai";
import Tikrinimai from "./componenst/Tikrinimai";

function App() {
  return (
    <>
      <Laimejimas />
      <hr />
      <Sansas />
      <hr />
      <Tikrinimai />
      <hr />
      <GeriausiasMedis />
      <hr />
      <Skaiciai />
      <hr />
      <EinaPrieLentos />
    </>
  );
}

export default App;
