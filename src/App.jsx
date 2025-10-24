import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import { MovieProvider } from "./contexts/MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
};

export default App;
