import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const statusColor =
    character.status === "Alive"
      ? "bg-green-500"
      : character.status === "Dead"
      ? "bg-red-500"
      : "bg-gray-400";

  return (
    <Link to={`/personaje/${character.id}`}>
      <div className="bg-white rounded-lg shadow hover:scale-105 transition">
        <img src={character.image} className="rounded-t-lg w-full" alt={character.name} />
        <div className="flex items-center justify-between p-2">
          <h2 className="font-bold">{character.name}</h2>
          <span className={`w-3 h-3 rounded-full ${statusColor}`}></span>
        </div>
        <p className="p-1 ml-2 text-gray-600 text-sm">{character.species}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;
