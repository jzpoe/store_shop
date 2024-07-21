import { useState } from "react";
import "./main.css";
import productos from "../json/contenido.json";

export const Main = () => {
  const [imagenes, setImagenes] = useState({});

  return (
    <div className="container-main">
      <h1>Productos de la Tienda</h1>
      <ul className="contain-imagen">
        {productos.map((products, index) => (
          <li key={index}>
            <h2>{products.name}</h2>
            <h2>{products.description}</h2>
            <h2>{products.price}</h2>
            <h2>{products.color}</h2>
            <img src={products.image_url} alt={products.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
