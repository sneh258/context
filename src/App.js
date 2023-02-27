import { createContext } from "react";
import "./App.css";
import Product from "./components/product/Product";
const firstname = createContext();
const lastname = createContext();

function App() {
  return (
    <>
      <firstname.Provider value={"sneha"}>
        <lastname.Provider value={"lall"}>
          <Product />
        </lastname.Provider>
      </firstname.Provider>
    </>
  );
}

export default App;
export { lastname,firstname };
