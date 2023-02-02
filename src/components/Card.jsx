import s from "../styles/Card.module.css";
import botonRosado from "../assets/CLOSEBTNPINK.jpg";

export default function Card({ onClose, name, gender, species, image, id }) {
  return (
    <div>
      <button onClick={onClose}>
        <img />
      </button>
      <img src={image} alt="" />
      <div>
        <h2>{name}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}
