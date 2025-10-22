import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
