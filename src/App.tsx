import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonsPage } from "./pages";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
