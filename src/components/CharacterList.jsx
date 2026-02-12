import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => setPersonajes(data.results));
  }, []);

  return (
    <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {personajes.map(personaje => (
        <CharacterCard key={personaje.id} character={personaje} />
      ))}
    </div>
  );
};

export default CharacterList;
