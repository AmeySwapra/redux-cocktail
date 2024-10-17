import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./components/PageNotFound"; // Ensure this component exists
import CocktailDetailPage from "./pages/CocktailDetailPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktail/:id" element={<CocktailDetailPage />} /> {/* Updated to correct path */}
        <Route path="/about" element={<AboutPage/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
