import Card from "./Card";
import s from "../styles/Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map((p, index) => (
        <Card
          id={p.id}
          key={index}
          image={p.image}
          name={p.name}
          species={p.species}
          gender={p.gender}
          onClose={() => onClose(p.id)}
        />
      ))}
    </div>
  );
}
