import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./pages/CharacterDetail";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/personaje/:id" element={<CharacterDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
