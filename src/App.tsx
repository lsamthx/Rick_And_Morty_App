import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CharacterProvider } from "./context/CharacterContext";

export default function App() {
  return (
    <CharacterProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CharacterProvider>
  );
}