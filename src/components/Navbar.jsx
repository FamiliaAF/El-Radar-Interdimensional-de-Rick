import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">
        <Link to="/">🛸 Radar Rick</Link>
      </h1>
      <div className="space-x-4">
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre Nosotros</Link>
      </div>
    </nav>
  );
};

export default Navbar;
