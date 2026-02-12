import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => setCharacter(data));
  }, [id]);

  if (!character) return <p className="p-4">Cargando...</p>;

  return (
   <div className="mx-auto mt-6 flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl border shadow-xl p-4 max-w-md md:max-w-2xl">
      <img
         src={character.image}
         alt={character.name}
         className="rounded-xl"
      />
      <div>
         <h2 className="text-3xl font-bold">{character.name}</h2>
         <p><b>Estado:</b> {character.status}</p>
         <p><b>Especie:</b> {character.species}</p>
         <p><b>Origen:</b> {character.origin.name}</p>
         <p><b>Ubicación:</b> {character.location.name}</p>
      </div>
   </div>
   );


};

export default CharacterDetail;
