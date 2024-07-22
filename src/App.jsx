import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarShop } from "./components/car/CarShop";
import { useState } from "react";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  const [addProducts, setAddProducts] = useState([]);

  return (
    <BrowserRouter>
      <Navbar addProducts={addProducts} setAddProducts={setAddProducts} />

      <Routes>
      <Route
          path="/"
          element={
            <Main addProducts={addProducts} setAddProducts={setAddProducts} />
          }
        ></Route>
        <Route
          path="/CarShop"
          element={
            <CarShop
              addProducts={addProducts}
              setAddProducts={setAddProducts}
            />
          }
        ></Route>
        
      </Routes>
      < Footer />

    </BrowserRouter>
  );
}

export default App;
