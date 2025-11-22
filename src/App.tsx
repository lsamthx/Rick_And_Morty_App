import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AppProvider } from "./context/App.Context";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}